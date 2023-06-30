export default{
    name:"Orden",
    data(){
        return {
            frmOrdenI: {
                IDContrato:"",
                IDEtapa:"",
                DNI_Em: "", 
                Fecha_Et:"",
                Nom_Tecnico: "",
                numSum:"",
                numOrden:"",

            },
            Select:false,
            dialogVisible: false,
            mensaje: "",
            TextFieldAble: false,
            selectedDate: null,
        }
    },
    created() {
        this.handleDateSelection();
        this.obtenerDato();
    },
    methods:{
       createOrdenI(){
        this.axios
        .post("http://localhost:3000/etapa-contrato",this.frmOrdenI)
        .then((res) => {
            console.log(res);
            console.log(this.frmOrdenI.DNI_Em)
        })
        .catch((e)=> e);
        this.guardarValor();
        this.mostrarMensaje();
       },
       asignarTecnico(){
        this.$router.push("/menu/AsignarTecnico");
       },
       handleDateSelection(date) {
        // Lógica para manejar la selección de fecha
         this.frmOrdenI.Fecha_Et=date;
       },
       resetForm() {
        this.frmOrdenI.DNI_Em= "";
        this.frmOrdenI.Nom_Tecnico="";
        this.selectedDate =null;
      },
       volverMenu() {
        this.$router.push("/menu");
       },
       obtenerDato() {
        var valorCampoA = localStorage.getItem("valorCampoA");
        var valorCampoB = localStorage.getItem("valorCampoB");
        console.log(valorCampoA)
        console.log(valorCampoB)
        if (valorCampoA && valorCampoB) {
         this.frmOrdenI.DNI_Em= valorCampoA;
         this.frmOrdenI.Nom_Tecnico= valorCampoB;
         localStorage.removeItem("valorCampoA");
         localStorage.removeItem("valorCampoB"); // Opcional: eliminar el valor almacenado
       }
       },
       desText() {
        this.TextFieldAble =false;
      },
      mostrarMensaje() {
        this.mensaje='La orden de Instalación ha sido generada con éxito, por favor registre los materiales a emplear para  '+
                     'la ejecución de la instalación de gas natural en la vivienda, tomando en consideración las especificaciones'+
                     ' suscritas en el contrato, para esta forma finalizar con el proceso de forma satisfactoria',
        this.dialogVisible = true;
      },
      asignarMateriales(){
        this.dialogVisible = false
        this.$router.push("/menu/registrarMateriales");
      },
      guardarValor() {
        var valor1 = this.frmOrdenI.IDContrato;
        var valor2 = this.frmOrdenI.IDEtapa;
        var valor3= this.frmOrdenI.Fecha_Et;
        localStorage.setItem("valor1", valor1);
        localStorage.setItem("valor2", valor2);
        localStorage.setItem("valor3", valor3);
      },
    }
}