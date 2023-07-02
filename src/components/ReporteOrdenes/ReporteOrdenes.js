export default {
  data() {
    return {
      distritos: [],
      distritoSeleccionado: null,
      start: null,
      end: null,
      empleados: [],
      empleadoSeleccionado: null,
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
  mounted() {
    this.obtenerDistritos();
    this.obtenerEmpleados();
  },
  methods: {
    obtenerDistritos() {
      this.axios
        .get("http://localhost:3000/distrito")
        .then((response) => {
          this.distritos = response.data;
        })
        .catch((error) =>
          console.log("Error al obtener los distritos" + error)
        );
    },
    obtenerEmpleados() {
      this.axios
        .get("http://localhost:3000/empleado")
        .then((response) => {
          this.empleados = response.data;
        })
        .catch((error) =>
          console.log("No se pudieron obtener empleados" + error)
        );
    },
  },
};
