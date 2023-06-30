export default {
  data() {
    return {
      searchDate: "",
      contratos: [],
      end: null,
      start: null,
      conteoContratos: {},
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
        return contratoFecha >= start && contratoFecha <= end;
      });
    },
  },
  methods: {
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
  },
};
