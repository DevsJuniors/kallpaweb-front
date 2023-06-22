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

    },

};