export default {
    data() {
      return {
        frmTecnico:{
            DNI_Em: "",
            IDCategoria:"",
            Nombre_Em:"",
            Apellido_Em:"",
            Celular_Em:""
        },
          Select: false,
          TextFieldAble: false,
          search: '',
          loading: false,
        search: "",
        tecnicos: [],
      };
    },
    computed: {
        headers() {
          return [
            { text: "DNI ", value: "DNI_Em" },
            { text: "Categoria", value: "IDCategoria" },
            { text: "Nombres", value: "Nombre_Em" },
            { text: "Apellidos", value: "Apellido_Em" },
            { text: "Celular", value: "Celular_Em" },
            { text: "Seleccionar", value: "Celular_Em" },
          ];
        },
    },
    mounted() {
        this.obtenerTecnicos();
    },
    methods: {
        obtenerTecnicos() {
            this.axios
              .get("http://localhost:3000/empleado")
              .then((response) => {
                // Filtrar empleados por IDCategoria igual a 2 (Tecnico)
                this.tecnicos = response.data.filter((empleado) => empleado.IDCategoria === 2);
              })
              .catch((error) =>
                console.error("Error al obtener los datos de los técnicos: ", error)
              );
        },   
        seleccionarTecnico(tecnico){
            this.frmTecnico.DNI_Em = tecnico.DNI_Em;
            this.frmTecnico.IDCategoria=tecnico.IDCategoria;
            this.frmTecnico.Nombre_Em=tecnico.Nombre_Em;
            this.frmTecnico.Apellido_Em=tecnico.Apellido_Em;
            this.frmTecnico.Celular_Em=tecnico.Celular_Em;
        },
        asignar(){
            var valorCampoA = this.frmTecnico.DNI_Em;
            var valorCampoB = this.frmTecnico.Nombre_Em+ ' '+this.frmTecnico.Apellido_Em;
            localStorage.setItem("valorCampoA", valorCampoA);
            localStorage.setItem("valorCampoB", valorCampoB);
            console.log(valorCampoA);
            console.log(valorCampoB);
            window.location.href = "http://localhost:3003/menu/generarOrdenI";
        },
        limpiar(){
            this.frmTecnico.DNI_Em= "";
            this.frmTecnico.Apellido_Em= "";
            this.frmTecnico.Nombre_Em= "";
            this.frmTecnico.IDCategoria= "";
            this.frmTecnico.Celular_Em= "";
        },
        volver(){
            this.$router.push("/menu/generarOrdenI");
        },
        desText() {
            this.TextFieldAble =false;
          },
      },
};
