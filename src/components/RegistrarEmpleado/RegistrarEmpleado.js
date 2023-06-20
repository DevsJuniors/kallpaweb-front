export default {
  name: "Empleado",
  data() {
    return {
      frmEmpleado: {
        DNI_Em: "",
        Nombre_Em: "",
        Apellido_Em: "",
        Celular_Em: "",
        IDCategoria: "",
      },
      frmCredenciales: {
        DNI_Em: "",
        nombreusuario: "",
        contraseña: "",
      },
      message: "",
    };
  },
  methods: {
    createEmpleado() {
      this.axios
        .post("http://localhost:3000/empleado", this.frmEmpleado)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
    },
    createCredenciales() {
      this.axios
        .post(
          "http://localhost:3000/credenciales-empleado",
          this.frmCredenciales
        )
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
    },
  },
};
