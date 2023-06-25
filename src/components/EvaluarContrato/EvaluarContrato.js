export default {
  data() {
    return {
      search: "",
      searchF: "",
      contratos: [],
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
      if (!searchTerm && !searchFecha) {
        return this.contratos;
      }

      return this.contratos.filter((contrato) => {
        const idC = contrato.IDContrato.toString().includes(searchTerm);
        const FeC = contrato.Fecha_Con.toString().includes(searchFecha);

        return idC && FeC;
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
  },
};
