export default {
  data() {
    return {
      estadoSeleccionado: null,
      contratos: [],
    };
  },
  computed: {
    estadosContratos() {
      const estados = new Set();
      this.contratos.forEach((contrato) => {
        estados.add(contrato.estado);
      });
      return Array.from(estados);
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
