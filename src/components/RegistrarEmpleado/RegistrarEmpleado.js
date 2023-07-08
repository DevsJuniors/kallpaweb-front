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
      TextFieldAble: true,
      search: "",
      loading: false,
      search: "",
      empleados: [],
      categorias: [],
      selectedCategoria: null,
      mensaje: "",
      dialogVisible: false,
      dialogError: false,
    };
  },

  created() {
    this.getCategoria();
  },

  // Recuperando ID correspondiente de cada variable
  watch: {
    selectedCategoria(val) {
      if (val) {
        const categoria = this.categorias.find(
          (categoria) => categoria.Cargo_CE === val
        );
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
    // //DNI_cli: "",
    // Nombre_cli: "",
    // Apellido_cli: "",
    // Celular_cli: "",
    // FechaNacimiento_cli: "",
    // IDGenero: "",
    // IDNacionalidad: "",
    // IDEstadoCivil: "",
    // IDDomicilio: "",
    createEmpleado() {
      if (
        !this.frmEmpleado.DNI_Em ||
        !this.frmEmpleado.Nombre_Em ||
        !this.frmEmpleado.Apellido_Em ||
        !this.frmEmpleado.Celular_Em ||
        !this.frmEmpleado.IDCategoria
      ) {
        let camposFaltantes = "";
        if (!this.frmEmpleado.DNI_Em) {
          camposFaltantes += "DNI Empleado, ";
        }
        if (!this.frmEmpleado.Nombre_Em) {
          camposFaltantes += "Nombre, ";
        }
        if (!this.frmEmpleado.Celular_Em) {
          camposFaltantes += "Celular, ";
        }
        if (!this.frmEmpleado.IDCategoria) {
          camposFaltantes += "Categoria. ";
        }

        camposFaltantes = camposFaltantes.slice(0, -2);
        this.mensaje = `Faltan campos por rellenar, por favor verificar que sus datos esten completos :${camposFaltantes}`;
        this.typemsg = "error";
        this.dialogError = true;
      } else {
        this.axios
          .post("http://localhost:3000/empleado", this.frmEmpleado)
          .then((res) => {
            console.log(res);
          })
          .catch((e) => e);
        this.resetFormE();
        this.mensaje =
          "Se registro al empleado correctamente (PORFAVOR REGISTRAR UNA CREDENCIAL PARA EL EMPLEADO)" +
          this.frmEmpleado.Nombre_Em;
        this.typemsg = "success";
        this.dialogVisible = true;
      }
    },
    aceptar() {
      // Lógica para manejar la acción de aceptar en el diálogo
      this.dialogVisible = false;
      this.resetForm();
    },
    updateCliente() {
      if (
        !this.frmEmpleado.DNI_Em ||
        !this.frmEmpleado.Nombre_Em ||
        !this.frmEmpleado.Apellido_Em ||
        !this.frmEmpleado.Celular_Em ||
        !this.frmEmpleado.IDCategoria
      ) {
        let camposFaltantes = "";
        if (!this.frmEmpleado.DNI_Em) {
          camposFaltantes += "DNI Empleado, ";
        }
        if (!this.frmEmpleado.Nombre_Em) {
          camposFaltantes += "Nombre, ";
        }
        if (!this.frmEmpleado.Apellido_Em) {
          camposFaltantes += "Apellido, ";
        }
        if (!this.frmEmpleado.Celular_Em) {
          camposFaltantes += "Celular, ";
        }
        if (!this.frmEmpleado.IDCategoria) {
          camposFaltantes += "Categoria. ";
        }

        camposFaltantes = camposFaltantes.slice(0, -2);
        this.mensaje = `Faltan campos por rellenar, por favor verificar que sus datos esten completos :${camposFaltantes}`;
        this.typemsg = "error";
        this.dialogError = true;
      } else {
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
        this.resetForm();
        this.TextFieldAble = true;
        this.dialogVisible = true;
        return window.location.reload();
      }
    },
    createCredenciales() {
      if (
        !this.frmCredenciales.DNI_Em ||
        !this.frmCredenciales.nombreusuario ||
        !this.frmCredenciales.contraseña
      ) {
        let camposFaltantes = "";

        if (!this.frmCredenciales.DNI_Em) {
          camposFaltantes += "DNI Empleado, ";
        }
        if (!this.frmCredenciales.nombreusuario) {
          camposFaltantes += "Nombre de usuario, ";
        }
        if (!this.frmCredenciales.contraseña) {
          camposFaltantes += "Contraseña, ";
        }

        camposFaltantes = camposFaltantes.slice(0, -2); // Eliminar la coma y el espacio al final

        this.mensaje = `Faltan datos por completar en las credenciales: ${camposFaltantes}`;
        this.typemsg = "error";
        this.dialogError = true;
      } else {
        this.axios
          .post(
            "http://localhost:3000/credenciales-empleado",
            this.frmCredenciales
          )
          .then((res) => {
            console.log(res);
          })
          .catch((e) => e);
        this.mensaje =
          "Se registraron las credenciales del empleado " +
          this.frmCredenciales.nombreusuario;
        this.typemsg = "success";
        this.dialogVisible = true;
      }
    },
    seleccionarEmpleado(empleado) {
      this.frmEmpleado.DNI_Em = empleado.DNI_Em;
      this.frmEmpleado.Nombre_Em = empleado.Nombre_Em;
      this.frmEmpleado.Apellido_Em = empleado.Apellido_Em;
      this.frmEmpleado.Celular_Em = empleado.Celular_Em;
      this.selectedCategoria = this.encontrarCategoria(empleado.IDCategoria);
      this.TextFieldAble = false;
    },
    cerrar() {
      this.dialogVisible = false;
      this.dialogError = false;
      this.resetForm();
    },
    getCategoria() {
      this.axios
        .get("http://localhost:3000/categoria-empleado")
        .then((res) => {
          this.categorias = res.data.filter(
            (categoria) => categoria.IDCategoria !== 7
          );
        })
        .catch((error) => e);
    },
    encontrarCategoria(number) {
      var categoria = this.categorias.find(
        (categoria) => categoria.IDCategoria === number
      );
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
    resetFormE() {
      this.frmEmpleado.DNI_Em = "";
      this.frmEmpleado.Nombre_Em = "";
      this.frmEmpleado.Apellido_Em = "";
      this.frmEmpleado.Celular_Em = "";
      this.selectedCategoria = null;
    },
    resetFormC() {
      this.frmCredenciales.DNI_Em = "";
      this.frmCredenciales.nombreusuario = "";
      this.frmCredenciales.contraseña = "";
    },
    resetForm() {
      this.resetFormE();
      this.resetFormC();
    },
    aceptar() {
      this.dialogVisible = false;
      this.resetForm();
    },
  },
};
