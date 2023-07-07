export default {
  name: "Domicilio",
  data() {
    return {
      frmDomicilio: {
        IDDomicilio: "",
        Direccion_Dom: "",
        Interior_Dom: "",
        Piso_Dom: "",
        Nomb_Malla_Dom: "",
        IDCondicion: "",
        IDEstrato: "",
        IDPredio: "",
        IDDistrito: "",
      },
      estratos: [],
      distritos: [],
      condiciones: [],
      tipospredios: [],
      selectedEstrato: null,
      selectedDistrito: null,
      selectedCondicion: null,
      selectedTipoPredio: null,
      mensaje: "",
      dialogVisible: false,
      dialogError: false,
    };
  },

  created() {
    this.getEstrato();
    this.getDistrito();
    this.getCondicion();
    this.getTipoPredio();
  },
  // Recuperando ID correspondiente de cada variable
  watch: {
    selectedEstrato(val) {
      if (val) {
        const estrato = this.estratos.find(
          (estrato) => estrato.Descripcion_Estrato === val
        );
        this.frmDomicilio.IDEstrato = estrato.IDEstrato;
      } else {
        this.resetForm();
      }
    },
    selectedDistrito(P) {
      if (P) {
        const distrito = this.distritos.find(
          (distrito) => distrito.Nombre_Di === P
        );
        this.frmDomicilio.IDDistrito = distrito.IDDistrito;
      }
    },
    selectedCondicion(M) {
      if (M) {
        const condicion = this.condiciones.find(
          (condicion) => condicion.Descripcion_Co === M
        );
        this.frmDomicilio.IDCondicion = condicion.IDCondicion;
      }
    },
    selectedTipoPredio(A) {
      if (A) {
        const tipopredio = this.tipospredios.find(
          (tipopredio) => tipopredio.Descripcion_Pre === A
        );
        this.frmDomicilio.IDPredio = tipopredio.IDPredio;
      }
    },
  },

  methods: {
    createDomicilio() {
      if (
        !this.frmDomicilio.IDDomicilio ||
        !this.frmDomicilio.Direccion_Dom ||
        !this.frmDomicilio.Interior_Dom ||
        !this.frmDomicilio.Piso_Dom ||
        !this.frmDomicilio.Nomb_Malla_Dom ||
        !this.frmDomicilio.IDCondicion ||
        !this.frmDomicilio.IDEstrato ||
        !this.frmDomicilio.IDPredio ||
        !this.frmDomicilio.IDDistrito
      ) {
        let camposFaltantes = "";
        if (!this.frmDomicilio.IDDomicilio) {
          camposFaltantes += "ID Domicilio, ";
        }
        if (!this.frmDomicilio.Direccion_Dom) {
          camposFaltantes += "Direccion Domicilio, ";
        }
        if (!this.frmDomicilio.Interior_Dom) {
          camposFaltantes += "Interior Domicilio, ";
        }
        if (!this.frmDomicilio.Piso_Dom) {
          camposFaltantes += "Piso Domicilio, ";
        }
        if (!this.frmDomicilio.Nomb_Malla_Dom) {
          camposFaltantes += "Nombre de Malla, ";
        }
        if (!this.frmDomicilio.IDCondicion) {
          camposFaltantes += "Condicion, ";
        }
        if (!this.frmDomicilio.IDEstrato) {
          camposFaltantes += "Estrato, ";
        }
        if (!this.frmDomicilio.IDPredio) {
          camposFaltantes += "Predio, ";
        }
        if (!this.frmDomicilio.IDDistrito) {
          camposFaltantes += "Distrito. ";
        }

        camposFaltantes = camposFaltantes.slice(0, -2);
        this.mensaje = `Faltan campos por rellenar, por favor rellenar los campos faltantes : ${camposFaltantes}`;
        this.typemsg = "error";
        this.dialogError = true;
      } else {
        this.axios
          .post("http://localhost:3000/domicilio", this.frmDomicilio)
          .then((res) => {
            console.log(res);
          })
          .catch((e) => console.log(e));
        this.resetForm();
        this.mensaje =
          "Se registro correctamente el domicilio porfavor haga click en el boton Cargar para registrar al cliente";
        this.typemsg = "success";
        this.dialogVisible = true;
      }
    },
    cerrar() {
      this.dialogVisible = false;
      this.dialogError = false;
      this.resetForm();
    },
    aceptar() {
      // Lógica para manejar la acción de aceptar en el diálogo
      this.dialogVisible = false;
      this.resetForm();
    },
    getEstrato() {
      this.axios
        .get("http://localhost:3000/estrato")
        .then((res) => {
          this.estratos = res.data;
        })
        .catch((error) => e);
    },
    getDistrito() {
      this.axios
        .get("http://localhost:3000/distrito")
        .then((res) => {
          this.distritos = res.data;
        })
        .catch((error) => e);
    },
    getCondicion() {
      this.axios
        .get("http://localhost:3000/condicion")
        .then((res) => {
          this.condiciones = res.data;
        })
        .catch((error) => e);
    },
    getTipoPredio() {
      this.axios
        .get("http://localhost:3000/tipo-predio")
        .then((res) => {
          this.tipospredios = res.data;
        })
        .catch((error) => e);
    },
    guardarValor() {
      var valorCampo1 = this.frmDomicilio.IDDomicilio;
      localStorage.setItem("valorCampo1", valorCampo1);
      console.log(valorCampo1);
      window.location.href = "http://localhost:3003/menu/registrarCliente";
    },
    volverMenu() {
      this.$router.push("/menu");
    },
    resetForm() {
      this.frmDomicilio.IDDomicilio = "";
      this.frmDomicilio.Direccion_Dom = "";
      this.frmDomicilio.Piso_Dom = "";
      this.frmDomicilio.Interior_Dom = "";
      this.frmDomicilio.Nomb_Malla_Dom = "";
      this.selectedEstrato = null;
      this.selectedDistrito = null;
      this.selectedCondicion = null;
      this.selectedTipoPredio = null;
    },
  },
};
