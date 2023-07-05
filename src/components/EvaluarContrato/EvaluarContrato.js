export default {
  data() {
    return {
      searchID: "",
      numSum: "",
      estado: "",
      DNI_cli: "",
      searchE: "",
      search: "",
      searchF: "",
      contratos: [],
      estados: [],
      estadosA: ["En revisión", "Observado", "Desaprobado", "Aprobado"],
    };
  },
  computed: {
    headers() {
      return [
        { text: "ID Contrato", value: "IDContrato" },
        { text: "Fecha", value: "Fecha_Con" },
        { text: "Número Radicado", value: "NumeroRadicado_Con" },
        { text: "Número Suministro", value: "numSum" },
        { text: "Punto de Instalación", value: "PuntoInstalacion_Con" },
        { text: "Estado", value: "estado" },
        { text: "Categoría Gabinete", value: "IDGabineteCategoria" },
        { text: "Tipo Instalación", value: "IDTipoInst" },
        { text: "DNI Cliente", value: "DNI_cli" },
        { text: "DNI Empleado", value: "DNI_Em" },
      ];
    },

    contratosFiltrados() {
      const searchTerm = this.search.toLowerCase().trim();
      const searchFecha = this.searchF.toLowerCase().trim();
      const searchEstado = this.searchE.toLowerCase().trim();

      if (searchEstado === "ningún estado") {
        return window.location.reload();
      }
      if (!searchTerm && !searchFecha && !searchEstado) {
        return this.contratos;
      }
      if (this.isNingunEstadoSelected) {
        return this.contratos;
      }

      return this.contratos.filter((contrato) => {
        const idC = contrato.IDContrato.toString().includes(searchTerm);
        const FeC = contrato.Fecha_Con.toString().includes(searchFecha);
        const estadoC = contrato.estado.toLowerCase().includes(searchEstado);

        return idC && FeC && estadoC;
      });
    },
  },
  mounted() {
    this.obtenerContratos();
  },
  methods: {
    obtenerContratos() {
      this.axios
        .get("http://localhost:3000/contrato")
        .then((response) => {
          this.contratos = response.data;
        })
        .catch((error) =>
          console.error("Error al obtener los datos de los contratos : ", error)
        );
    },

    llenarCampos() {
      const contratoEncontrado = this.contratos.find(
        (contrato) => contrato.IDContrato.toString() === this.searchID.trim()
      );

      if (contratoEncontrado) {
        this.numSum = contratoEncontrado.numSum;
        this.DNI_cli = contratoEncontrado.DNI_cli;
        console.log(this.numSum, this.DNI_cli);
      } else {
        this.numSum = "";
        this.DNI_cli = "";
      }
    },
    actualizarEstado() {
      const idcontrato = this.searchID.trim();
      const contrato = this.contratos.find(
        (c) => c.IDContrato.toString() === idcontrato
      );

      if (contrato) {
        contrato.estado = this.estado;
        this.axios
          .patch(`http://localhost:3000/contrato/${idcontrato}`, {
            estado: this.estado,
          })
          .then((response) => {
            console.log(
              "Estado del contrato actualizado exitosamente" + response
            );
            // Puedes realizar acciones adicionales después de la actualización exitosa
          })
          .catch((error) => {
            console.error("Error al actualizar el estado del contrato:", error);
            // Manejo de errores
          })
          .finally(() => {
            // Limpia los campos de texto y el estado después de la actualización
            this.searchID = "";
            this.numSum = "";
            this.DNI_cli = "";
            this.estado = "";
          });
      } else {
        console.log("Contrato no encontrado");
      }
    },
  },
};