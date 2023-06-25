export default {
    name: "Cliente",
 
   data(){
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
            TextFieldAble: false,
            Select: false,
            generos:[],
            nacionalidades:[],
            estadosciviles : [],
            selectedGenero: null,
            selectedNacionalidad: null,
            selectedEstado: null,
        };

    },

    created() {
        this.getGenero();
        this.getNacionalidad();
        this.getEstadoCivil();
        this.obtenerDato();
        this.habilitarCombox();
        this.habilitarText();
    },
    
    // Recuperando ID correspondiente de cada variable
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
        createCliente(){
            this.axios
            .post("http://localhost:3000/cliente",this.frmCliente)
            .then((res) => {
                console.log(res);
            })
            .catch((e)=> e);
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
          registrarDomicilio() {
            this.$router.push("/menu/registrarDomicilio");
          },
          habilitarText() {
            if(this.frmCliente.IDDomicilio !== "") {
            this.TextFieldAble = true;
            }
          },
          habilitarCombox(){
            if(this.frmCliente.IDDomicilio !== "") {
              this.Select=true;
            }
          },
          desText() {
            this.TextFieldAble =false;
          },
          desCombox(){
              this.Select= false;
          },
          resetForm() {
            this.frmCliente.DNI_cli = "";
            this.frmCliente.Nombre_cli = "";
            this.frmCliente.Apellido_cli = "";
            this.frmCliente.Celular_cli = "";
            this.frmCliente.FechaNacimiento_cli = "";
            this.selectedEstado = null;
            this.selectedGenero = null;
            this.selectedNacionalidad= null;
          },
          volverMenu() {
            this.$router.push("/menu");
          },
          obtenerDato() {
           var valorCampo1 = localStorage.getItem("valorCampo1");
           if (valorCampo1) {
            this.frmCliente.IDDomicilio= valorCampo1;
            console.log(valorCampo1)
            localStorage.removeItem("valorCampo1"); // Opcional: eliminar el valor almacenado
          }
     },
  }, 

};
