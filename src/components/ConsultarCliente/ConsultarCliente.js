export default {
  name: "ConsultarCliente",
  data() {
    return {
      frmCliente: {
        DNI_cli: "",
        Nombre_cli: "",
        Apellido_cli: "",
        Celular_cli: "",
        FechaNacimiento_cli: "",
        IDGenero: "",
        IDNacionalidad: "",
        IDEstadoCivil: "",
        IDDomicilio: "",
      },
      clientes: [],
      selectedClientes: null,
    };
  },
  created() {
    this.getCliente();
  },
  watch: {
    selectedClientes(val) {
      if (val) {
        const cliente = this.clientes.find((cliente) => cliente.DNI_cli);
        this.frmCliente.DNI_cli = cliente.DNI_cli;
        this.frmCliente.Nombre_cli = cliente.Nombre_cli;
        this.frmCliente.Apellido_cli = cliente.Apellido_cli;
        this.frmCliente.Celular_cli = cliente.Celular_cli;
        this.frmCliente.FechaNacimiento_cli = cliente.FechaNacimiento_cli;
        this.frmCliente.IDGenero = cliente.IDGenero;
        this.frmCliente.IDNacionalidad = cliente.IDNacionalidad;
        this.frmCliente.IDEstadoCivil = cliente.IDEstadoCivil;
        this.frmCliente.IDDomicilio = cliente.IDDomicilio;
      } else {
        this.resetForm();
      }
    },
  },
  methods: {
    getCliente() {
      this.axios
        .get("http://localhost:3000/cliente")
        .then((res) => {
          this.clientes = res.data;
        })
        .catch((e) => e);
    },
    resetForm() {
      this.frmCliente.DNI_cli = "";
      this.frmCliente.Nombre_cli = "";
      this.frmCliente.Apellido_cli = "";
      this.frmCliente.Celular_cli = "";
      this.frmCliente.FechaNacimiento_cli = "";
      this.frmCliente.IDGenero = "";
      this.frmCliente.IDNacionalidad = "";
      this.frmCliente.IDEstadoCivil = "";
      this.frmCliente.IDDomicilio = "";
    },
  },
};
