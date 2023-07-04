export default {
  data() {
    return {
      searchDate: "",
      contratos: [],
      end: null,
      start: null,
      conteoContratos: {},
      fechas: [],
      cantidad: [],
    };
  },
  watch: {
    start(newValue) {
      this.$forceUpdate();
    },
    end(newValue) {
      this.$forceUpdate();
    },
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
      return this.contratos.filter((contrato) => {
        if (!this.start || !this.end) {
          return true;
        }
        const start = new Date(this.start);
        const end = new Date(this.end);
        const contratoFecha = new Date(contrato.Fecha_Con);
        this.cantidad = contratoFecha;
        return contratoFecha >= start && contratoFecha <= end && this.cantidad;
      });
    },
  },
  methods: {
    contarContratos() {
      // Obtener los contratos dentro del rango de fechas
      const contratosFiltrados = this.contratos.filter((contrato) => {
        const fechaContrato = new Date(contrato.Fecha_Con);
        return fechaContrato >= this.start && fechaContrato <= this.end;
      });

      // Obtener la cantidad de contratos por fecha
      const conteoContratos = {};
      contratosFiltrados.forEach((contrato) => {
        const fechaContrato = new Date(contrato.Fecha_Con).toDateString();
        if (conteoContratos[fechaContrato]) {
          conteoContratos[fechaContrato]++;
        } else {
          conteoContratos[fechaContrato] = 1;
        }
      });

      // Convertir los datos en un formato adecuado para VSparkline
      this.fechas = Object.keys(conteoContratos);
      this.cantidad = this.fechas.map((fecha) => conteoContratos[fecha]);
    },

    generarReporte() {
      this.conteoContratos = this.obtenerEstadosContratos();
    },
    obtenerEstadosContratos() {
      const conteoEstados = {};
      const contratosFiltrados = this.contratosFiltrados;

      contratosFiltrados.forEach((contrato) => {
        const estado = contrato.estado;
        if (conteoEstados[estado]) {
          conteoEstados[estado]++;
        } else {
          conteoEstados[estado] = 1;
        }
      });

      return conteoEstados;
    },
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

    reporteContrato() {
      this.$router.push("/reportes/contratos");
    },
    reporteCliente() {
      this.$router.push("/reportes/clientes");
    },
    reporteOrdenes() {
      this.$router.push("/reportes/ordenes");
    },
    menu() {
      this.$router.push("/menu");
    },
  },
  mounted() {
    this.obtenerContratos();
    this.contarContratos();
  },
};
