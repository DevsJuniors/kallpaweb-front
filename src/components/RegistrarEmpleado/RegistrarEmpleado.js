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
      categorias: [],
      selectedCategoria: null,
    };
  },


  created() {
    this.getCategoria();
  },

  // Recuperando ID correspondiente de cada variable
  watch: {
  selectedCategoria(val){
          if (val) {
            const categoria = this.categorias.find((categoria) => categoria.Cargo_CE===val);
              this.frmEmpleado.IDCategoria = categoria.IDCategoria;

          } else {
            this.resetForm();
          }
   },
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
    getCategoria() {
      this.axios
        .get("http://localhost:3000/categoria-empleado")
        .then((res) => {
          this.categorias = res.data;
        })
        .catch((error) => e);
    },
    volverMenu() {
      this.$router.push("/menu");
    },
    resetForm() {
      this.frmEmpleado.DNI_Em = "";
      this.frmEmpleado.Nombre_Em = "";
      this.frmEmpleado.Apellido_Em = "";
      this.frmEmpleado.Celular_Em= "";
      this.selectedCategoria= null;
    },
  },
};
