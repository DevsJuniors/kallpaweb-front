export default{
    data(){
       return {
        frmHabilitador:{
        DNI_Em:"",
        IDCategoria:"",
        Nombre_Em:"",
        Apellido_Em:"",
        Celular_Em:""
       },
        Select: false,
        TextFieldAble: false,
        search: '',
        loading: false,
        search:"",
        habilitadores:[],
      };
    },

    computed: {
        headers(){
            return[
               {text: "DNI", value: "DNI_Em"},
               {text: "Categoria", value:"IDCategoria"},
               {text: "Nombres",value: "Nombre_Em"},
               {text: "Apellidos", value: "Apellido_Em"},
               {text: "Celular", value: "Celular_Em"},
               {text: "Seleccionar", value: ""},
            ];
        },
    },

    mounted(){
        this.obtenerHabilitadores();
    },

    methods:{
    obtenerHabilitadores(){
        this.axios
            .get("http://localhost:3000/empleado")
            .then((response)=> {
                this.habilitadores=response.data.filter((empleado)=> empleado.IDCategoria===3);
            })
            .catch((error)=>
               console.error("Error al obtener los datos")
            );
    },
    seleccionarHabilitador(habilitador){
        this.frmHabilitador.DNI_Em= habilitador.DNI_Em;
        this.frmHabilitador.IDCategoria=habilitador.IDCategoria;
        this.frmHabilitador.Nombre_Em=habilitador.Nombre_Em;
        this.frmHabilitador.Apellido_Em=habilitador.Apellido_Em;
        this.frmHabilitador.Celular_Em=habilitador.Celular_Em;
    },
    asignar(){
        var valorCampoA = this.frmHabilitador.DNI_Em;
        var valorCampoB = this.frmHabilitador.Nombre_Em+ ' '+this.frmHabilitador.Apellido_Em;
        localStorage.setItem("valorCampoA", valorCampoA);
        localStorage.setItem("valorCampoB", valorCampoB);
        console.log(valorCampoA);
        console.log(valorCampoB);
        window.location.href = "http://localhost:3003/menu/generarOrdenH";
    },
    limpiar(){
        this.frmHabilitador.DNI_Em="";
        this.frmHabilitador.Apellido_Em="";
        this.frmHabilitador.Nombre_Em="";
        this.frmHabilitador.IDCategoria="";
        this.frmHabilitador.Celular_Em="";
    },
    volver(){
        this.$router.push("/menu/generarOrdenH")
    },
    desText(){
        this.TextFieldAble=false;
    },
    },
}