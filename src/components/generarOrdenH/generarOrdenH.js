export default{
    name:"Orden",
    data(){
        return {
            frmOrdenH: {
                IDContrato:"",
                IDEtapa:"2",
                DNI_Em: "", 
                Fecha_Et:"",
                Nom_Habilitador: "",
                numSum:"",
                numOrden:"",

            },
            TextFieldAble: false,
            Select:false,
            selectedEtapa: "Habilitación",
            etapas:[],
            dialogVisible: false,
            dialogError: false,
            mensaje: "",
            TextFieldAble: false,
            selectedDate: null,
        }
    },

    watch:{
      selectedEtapa(P){
        if(P){
         const etapa = this.etapas.find((etapa) => etapa.Descripcion_Et===P);
         this.frmOrdenH.IDEtapa =etapa.IDEtapa;
        }
     },
    },
    created() {
        this.handleDateSelection();
        this.obtenerDato();
        this.getEtapa();
        this.llenarNumO();
        this.capturarDato();
    },

    methods:{
       getEtapa() {
        this.axios
          .get("http://localhost:3000/etapa")
          .then((res) => {
            this.etapas = res.data;
          })
          .catch((error) => e);
       },
       createOrdenH(){
        if(this.frmOrdenH.DNI_Em===""){
            this.mensaje='Es necesario ASIGNAR un habilitador para la orden';
            this.dialogError=true;
        }else if(this.frmOrdenH.Fecha_Et===undefined){
            this.mensaje='Por favor seleccione una fecha para la orden de habilitación'
            this.dialogError=true;
        }else{
          console.log(this.frmOrdenH.Fecha_Et)
          this.axios
          .post("http://localhost:3000/etapa-contrato",this.frmOrdenH)
          .then((res) => {
              console.log(res);
              console.log(this.frmOrdenH.DNI_Em)
          })
          .catch((e)=> e);
          this.guardarValor();
          this.mostrarMensaje();
        }
       },
       asignarHabilitador(){
        this.$router.push("/menu/asignarHabilitador");
       },
       handleDateSelection(date) {
        // Lógica para manejar la selección de fecha
         this.frmOrdenH.Fecha_Et=date;
       },
       resetForm() {
        this.frmOrdenH.DNI_Em= "";
        this.frmOrdenH.Nom_Tecnico="";
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
         this.frmOrdenH.DNI_Em= valorCampoA;
         this.frmOrdenH.Nom_Habilitador= valorCampoB;
         localStorage.removeItem("valorCampoA");
         localStorage.removeItem("valorCampoB"); // Opcional: eliminar el valor almacenado
       }
       },
       capturarDato() {
        var valorA = localStorage.getItem("valorA");
        var valorB = localStorage.getItem("valorB");
        console.log(valorA)
        console.log(valorB)
        if (valorA && valorB) {
         this.frmOrdenH.IDContrato= valorA;
         this.frmOrdenH.numSum= valorB;
        }
       },
       cerrar(){
        this.dialogVisible= false;
        this.dialogError=false
      },
      mostrarMensaje() {
        this.mensaje='La orden de Habilitación ha sido generada con éxito, por favor registre los materiales a emplear para  '+
                     'la ejecución de la habilitación de gas natural en la vivienda, tomando en consideración las especificaciones'+
                     ' suscritas en el contrato, para esta forma finalizar con el proceso de forma satisfactoria',
        this.dialogVisible = true;
      },
      asignarMateriales(){
        this.dialogVisible = false
        this.$router.push("/menu/registrarMateriales");
      },
      guardarValor() {
        var valor1 = this.frmOrdenH.IDContrato;
        var valor2 = this.frmOrdenH.IDEtapa;
        var valor3= this.frmOrdenH.Fecha_Et;
        localStorage.setItem("valor1", valor1);
        localStorage.setItem("valor2", valor2);
        localStorage.setItem("valor3", valor3);
      },
      llenarNumO(){
        var numeroAleatorio = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;
        this.frmOrdenH.numOrden= numeroAleatorio;
      }
    }
}