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
      TextFieldAble:true,
      search: '',
      loading: false,
      search: "",
      empleados:[],
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
computed: {
  headers() {
    return [
      { text: "DNI ", value: "DNI_Em" },
      { text: "Categoria", value: "IDCategoria" },
      { text: "Nombres", value: "Nombre_Em" },
      { text: "Apellidos", value: "Apellido_Em" },
      { text: "Celular", value: "Celular_Em" },
      { text: "Seleccionar", value: "" },
    ];
  },
},
mounted() {
  this.obtenerEmpleados();
},
  methods: {
    obtenerEmpleados() {
      this.axios
        .get("http://localhost:3000/empleado")
        .then((response) => {
          this.empleados = response.data;
        })
        .catch((error) =>
          console.error("Error al obtener los datos de los empleados: ", error)
        );
  },   
    createEmpleado() {
      this.axios
        .post("http://localhost:3000/empleado", this.frmEmpleado)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
        this.resetForm()
    },
    updateCliente() {
      const dniempleado = this.frmEmpleado.DNI_Em;
      const dataUpdate = {
        DNI_Em: this.frmEmpleado.DNI_Em,
        Nombre_Em: this.frmEmpleado.Nombre_Em,
        Apellido_Em: this.frmEmpleado.Apellido_Em,
        Celular_Em: this.frmEmpleado.Celular_Em,
        IDCategoria: this.frmEmpleado.IDCategoria,
      };
      this.axios
        .patch(`http://localhost:3000/empleado/${dniempleado}`, dataUpdate)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
      this.obtenerEmpleados();
      this.resetForm()
      this.TextFieldAble=true;
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
    seleccionarEmpleado(empleado){
      this.frmEmpleado.DNI_Em = empleado.DNI_Em;
      this.frmEmpleado.Nombre_Em=empleado.Nombre_Em;
      this.frmEmpleado.Apellido_Em=empleado.Apellido_Em;
      this.frmEmpleado.Celular_Em=empleado.Celular_Em;
      this.selectedCategoria= this.encontrarCategoria(empleado.IDCategoria);
      this.TextFieldAble=false
  },
    getCategoria() {
      this.axios
        .get("http://localhost:3000/categoria-empleado")
        .then((res) => {
          this.categorias = res.data.filter((categoria) => categoria.IDCategoria !== 7);
        })
        .catch((error) => e);
    },
    encontrarCategoria(number){
      var categoria = this.categorias.find((categoria) => categoria.IDCategoria === number);
      if (categoria) {
        var cargo = categoria.Cargo_CE;
        return cargo;
      } else {
        return null; // o algún valor predeterminado si la categoría no se encuentra
      }
    },
    volverMenu() {
      this.$router.push("/menu");
    },
    resetForm() {
      this.frmEmpleado.DNI_Em = "";
      this.frmEmpleado.Nombre_Em = "";
      this.frmEmpleado.Apellido_Em = "";
      this.frmEmpleado.Celular_Em= "";
      this.frmCredenciales.DNI_Em= "";
      this.frmCredenciales.nombreusuario= "";
      this.frmCredenciales.contraseña= "";
      this.selectedCategoria= null;
    },
  },
};
