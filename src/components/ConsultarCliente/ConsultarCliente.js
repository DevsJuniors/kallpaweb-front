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
      search: '',
      loading: false,
      search: "",
      generos:[],
      nacionalidades:[],
      estadosciviles : [],
      selectedGenero: null,
      selectedNacionalidad: null,
      selectedEstado: null,
      clientes: [],
      TextFieldAble: false,
      Select: false,
    };
  },
  created() {
    this.getGenero();
    this.getNacionalidad();
    this.getEstadoCivil();
  },
  computed: {
    headers() {
      return [
        { text: "DNI ", value: "DNI_cli" },
        { text: "Nombres", value: "Nombre_cli" },
        { text: "Apellidos", value: "Apellido_cli" },
        { text: "Celular", value: "Celular_cli" },
        { text: "Fecha de Nacimiento", value: "FechaNacimiento_cli" },
        { text: "IDGenero", value: "IDGenero"},
        { text: "IDNacionalidad", value: "IDNacionalidad"},
        { text: "IDEstadoCivil", value: "IDEstadoCivil"},
        { text: "IDDomicilio", value: "IDDomicilio"},
        { text: "Seleccionar", value: "" },
      ];
    },
  },

  mounted() {
    this.getCliente();
  },

  watch: {
    selectedGenero(val){
            if (val) {
              const genero = this.generos.find((genero) => genero.Descripcion_G===val);
                this.frmCliente.IDGenero = genero.IDGenero;

            } else {
              this.resetForm();
            }
          
    },
    selectedNacionalidad(P){
       if(P){
        const nacionalidad = this.nacionalidades.find((nacionalidad) => nacionalidad.Descripcion_NA===P);
        this.frmCliente.IDNacionalidad =nacionalidad.IDNacionalidad;
       }
    },
    selectedEstado(M){
        if(M){
            const estadocivil = this.estadosciviles.find((estadocivil) => estadocivil.Descripcion_Es===M);
            this.frmCliente.IDEstadoCivil = estadocivil.IDEstadoCivil;
           }
    },
  },

  methods: {
    habilitarText() {
      this.TextFieldAble = true;
      this.Select= true;
    },
    getCliente() {
      this.axios
        .get("http://localhost:3000/cliente")
        .then((res) => {
          this.clientes = res.data;
        })
        .catch((e) => e);
    },
    getGenero() {
      this.axios
        .get("http://localhost:3000/genero")
        .then((res) => {
          this.generos = res.data;
        })
        .catch((error) => e);
    },
  getNacionalidad() {
      this.axios
        .get("http://localhost:3000/nacionalidad")
        .then((res) => {
          this.nacionalidades = res.data;
        })
        .catch((error) => e);
    },            
  getEstadoCivil() {
      this.axios
        .get("http://localhost:3000/estado-civil")
        .then((res) => {
          this.estadosciviles = res.data;
        })
        .catch((error) => e);
    },    

    seleccionarClientes(cliente) {
        this.frmCliente.DNI_cli = cliente.DNI_cli;
        this.frmCliente.Nombre_cli = cliente.Nombre_cli;
        this.frmCliente.Apellido_cli = cliente.Apellido_cli;
        this.frmCliente.Celular_cli = cliente.Celular_cli;
        this.frmCliente.FechaNacimiento_cli = cliente.FechaNacimiento_cli;
        this.selectedGenero =this.encontrarGenero(cliente.IDGenero);
        this.selectedNacionalidad=this.encontrarNacionalidad(cliente.IDNacionalidad);
        this.selectedEstado = this.encontrarEstadoCivil(cliente.IDEstadoCivil);
        this.frmCliente.IDDomicilio = cliente.IDDomicilio;
    },
    resetForm() {
      this.frmCliente.DNI_cli = "";
      this.frmCliente.Nombre_cli = "";
      this.frmCliente.Apellido_cli = "";
      this.frmCliente.Celular_cli = "";
      this.frmCliente.FechaNacimiento_cli = "";
      this.selectedEstado = null;
      this.selectedGenero = null;
      this.selectedNacionalidad = null;
      this.frmCliente.IDDomicilio = "";
    },
    updateCliente() {
      const dniCliente = this.frmCliente.DNI_cli;
      const dataUpdate = {
        DNI_cli: this.frmCliente.DNI_cli,
        Nombre_cli: this.frmCliente.Nombre_cli,
        Apellido_cli: this.frmCliente.Apellido_cli,
        Celular_cli: this.frmCliente.Celular_cli,
        FechaNacimiento_cli: this.frmCliente.FechaNacimiento_cli,
        IDGenero: this.frmCliente.IDGenero,
        IDNacionalidad: this.frmCliente.IDNacionalidad,
        IDEstadoCivil: this.frmCliente.IDEstadoCivil,
        IDDomicilio: this.frmCliente.IDDomicilio,
      };
      this.axios
        .patch(`http://localhost:3000/cliente/${dniCliente}`, dataUpdate)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
        this.desText();
    },
    desText() {
      this.TextFieldAble = false;
      this.Select=false;
    },
    encontrarGenero(number){
      var genero = this.generos.find((genero) => genero.IDGenero === number);
      if (genero) {
        var genero = genero.Descripcion_G;
        return genero;
    } else {
        return null; // o algún valor predeterminado si la categoría no se encuentra
    }
    },
    encontrarNacionalidad(number){
      var nacionalidad = this.nacionalidades.find((nacionalidad) => nacionalidad.IDNacionalidad === number);
      if (nacionalidad) {
        var nacionalidad = nacionalidad.Descripcion_NA;
        return nacionalidad;
    } else {
        return null; // o algún valor predeterminado si la categoría no se encuentra
    }
    },
    volverMenu() {
      this.$router.push("/menu");
    },
    encontrarEstadoCivil(number){
      var estadocivil = this.estadosciviles.find((estadocivil) => estadocivil.IDEstadoCivil === number);
      if (estadocivil) {
        var estadocivil = estadocivil.Descripcion_Es;
        return estadocivil;
    } else {
        return null; // o algún valor predeterminado si la categoría no se encuentra
    }
    },
  },
};
