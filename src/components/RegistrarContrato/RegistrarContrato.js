export default {
  name: "Contrato",
  data() {
    return {
      frmContrato: {
        IDContrato: "",
        Fecha_Con: "",
        NumeroRadicado_Con: "",
        PuntoInstalacion_Con: "",
        numSum: "",
        estado: "",
        IDDomicilio: "",
        DNI_cli: "",
        nomCli: "",
        DNI_Em: "",
        IDGabineteCategoria: "",
        IDTipoInst: "",
      },
      message: "",
      estados: ["En revisión", "Observado", "Desaprobado", "Aprobado"],
      clientes: [],
      TextFieldAble: false,
      categoriasGabinetes: [],
      empleados: [],
      tiposinstalacion: [],
      SelectedEstado: null,
      SelectedGabinete: null,
      SelectedTipoInstalacion: null,
      SelectedEmpleado: null,
      mensaje: "",
      dialogError: false,
      dialogVisible: false,
    };
  },

  created() {
    this.getCategoriaGabinete();
    this.getTipoInstalacion();
    this.getCliente();
    this.getEmpleado();
    this.asignarFecha();
  },

  watch: {
    SelectedEstado(val) {
      if (val) {
        this.frmContrato.estado = val;
      }
    },
    SelectedGabinete(P) {
      if (P) {
        const categoriagabinete = this.categoriasGabinetes.find(
          (categoriagabinete) => categoriagabinete.Descripcion_Ga === P
        );
        this.frmContrato.IDGabineteCategoria =
          categoriagabinete.IDGabineteCategoria;
      } else {
        this.resetForm();
      }
    },
    SelectedTipoInstalacion(A) {
      if (A) {
        const tipoinstalacion = this.tiposinstalacion.find(
          (tipoinstalacion) => tipoinstalacion.Descripcion_TI === A
        );
        this.frmContrato.IDTipoInst = tipoinstalacion.IDTipoInst;
      } else {
        this.resetForm();
      }
    },
    SelectedEmpleado(E) {
      if (E) {
        const empleado = this.empleados.find(
          (empleado) => empleado.Nombre_Em + " " + empleado.Apellido_Em === E
        );
        this.frmContrato.DNI_Em = empleado.DNI_Em;
      } else {
        this.resetForm();
      }
    },
  },

  methods: {
    createContrato() {
      if (
        !this.frmContrato.IDContrato ||
        !this.frmContrato.Fecha_Con ||
        !this.frmContrato.NumeroRadicado_Con ||
        !this.frmContrato.PuntoInstalacion_Con ||
        !this.frmContrato.numSum ||
        !this.frmContrato.estado ||
        !this.frmContrato.IDDomicilio ||
        !this.frmContrato.DNI_cli ||
        !this.frmContrato.nomCli ||
        !this.frmContrato.DNI_Em ||
        !this.frmContrato.IDGabineteCategoria ||
        !this.frmContrato.IDTipoInst
      ) {
        let camposFaltantes = "";
        if (!this.frmContrato.IDContrato) {
          camposFaltantes += "ID Contrato, ";
        }
        if (!this.frmContrato.Fecha_Con) {
          camposFaltantes += "Fecha Contrato, ";
        }
        if (!this.frmContrato.NumeroRadicado_Con) {
          camposFaltantes += "Numero Radicado Contrato, ";
        }
        if (!this.frmContrato.PuntoInstalacion_Con) {
          camposFaltantes += "Punto de instalacion, ";
        }
        if (!this.frmContrato.numSum) {
          camposFaltantes += "Numero Suministro, ";
        }
        if (!this.frmContrato.estado) {
          camposFaltantes += "Estado, ";
        }
        if (!this.frmContrato.IDDomicilio) {
          camposFaltantes += "ID Domicilio, ";
        }
        if (!this.frmContrato.DNI_cli) {
          camposFaltantes += "DNI Cliente, ";
        }
        if (!this.frmContrato.nomCli) {
          camposFaltantes += "Nombre Cliente, ";
        }
        if (!this.frmContrato.DNI_Em) {
          camposFaltantes += "DNI Empleado, ";
        }
        if (!this.frmContrato.IDGabineteCategoria) {
          camposFaltantes += "Categoria Gabinete, ";
        }
        if (!this.frmContrato.IDTipoInst) {
          camposFaltantes += "Tipo de instalacion.  ";
        }

        camposFaltantes = camposFaltantes.slice(0, -2);
        this.mensaje = `Faltan datos por completar, por favor revisar los campos : ${camposFaltantes}`;
        this.typemsg = "error";
        this.dialogError = true;
      } else {
        this.axios
          .post("http://localhost:3000/contrato", this.frmContrato)
          .then((res) => {
            console.log(this.frmContrato.estado);
            console.log(res);
            this.ventanaEmergente();
          })
          .catch((e) => console.log(e));
        this.mensaje = "Se registro correctamente el contrato";
        this.typemsg = "success";
        this.dialogVisible = true;
      }
    },
    getCategoriaGabinete() {
      this.axios
        .get("http://localhost:3000/categoria-gabinete")
        .then((res) => {
          this.categoriasGabinetes = res.data;
        })
        .catch((error) => e);
    },
    getTipoInstalacion() {
      this.axios
        .get("http://localhost:3000/tipo-instalacion")
        .then((res) => {
          this.tiposinstalacion = res.data;
        })
        .catch((error) => e);
    },
    getCliente() {
      this.axios
        .get("http://localhost:3000/cliente")
        .then((res) => {
          this.clientes = res.data;
        })
        .catch((error) => e);
    },
    getEmpleado() {
      this.axios
        .get("http://localhost:3000/empleado")
        .then((res) => {
          this.empleados = res.data;
        })
        .catch((error) => e);
    },
    cerrar() {
      this.dialogVisible = false;
      this.dialogError = false;
      this.resetForm();
    },
    llenar() {
      if (this.frmContrato.DNI_cli !== "") {
        console.log(this.frmContrato.DNI_cli);
        const cliente = this.clientes.find(
          (cliente) => cliente.DNI_cli === parseInt(this.frmContrato.DNI_cli)
        );
        if (cliente) {
          this.frmContrato.IDDomicilio = cliente.IDDomicilio;
          this.frmContrato.numSum = 11 + "" + cliente.IDDomicilio;
          this.frmContrato.nomCli =
            cliente.Nombre_cli + " " + cliente.Apellido_cli;
        } else {
          console.log("Cliente no encontrado");
        }
      }
    },
    desText() {
      this.TextFieldAble = false;
    },
    asignarFecha() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, "0");
      const day = String(currentDate.getDate()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}`;
      this.frmContrato.Fecha_Con = formattedDate;
    },
    aceptar() {
      // Lógica para manejar la acción de aceptar en el diálogo
      this.dialogVisible = false;
      this.resetForm();
    },
    resetForm() {
      this.frmContrato.IDContrato = "";
      this.frmContrato.DNI_Em = "";
      this.frmContrato.DNI_cli = "";
      this.frmContrato.Fecha_Con = "";
      this.frmContrato.numSum = "";
      this.frmContrato.PuntoInstalacion_Con = "";
      this.frmContrato.NumeroRadicado_Con = "";
      this.frmContrato.nomCli = "";
      this.Selected = null;
      this.SelectedEstado = null;
      this.SelectedEmpleado = null;
      this.SelectedGabinete = null;
      this.SelectedTipoInstalacion = null;
    },
    volverMenu() {
      this.$router.push("/menu");
    },
    ventanaEmergente() {
      const result = confirm(
        "El contrato ha sido registrado correctamente. Desea que se ha enviado a la" +
          " plataforma de Cállida"
      );
      if (result) {
        // Acciones a realizar si se selecciona "Aceptar"
      } else {
        // Acciones a realizar si se selecciona "Cancelar"
      }
    },
  },
};
