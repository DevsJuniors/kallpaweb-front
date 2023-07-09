export default {
  name: "Orden",
  data() {
    return {
      frmOrdenI: {
        IDContrato: "",
        IDEtapa: "1",
        DNI_Em: "",
        Fecha_Et: "",
        Nom_Tecnico: "",
        numSum: "",
        numOrden: "",
      },
      Select: false,
      dialogVisible: false,
      dialogVisualizar: false,
      menCabecera:"",
      dialogError: false,
      mensaje: "",
      search: '',
      loading: false,
      search: "",
      TextFieldAble: false,
      selectedDate: null,
      selectedEtapa: "Construcción",
      etapas: [],
      ordenes: [],
      contratos:[],
      tecnicos:[],
    };
  },

  computed: {
    headers() {
      return [
        { text: "IDEtapa ", value: "IDEtapa" },
        { text: "IDContrato", value: "IDContrato" },
        { text: "Fecha", value: "Fecha_Et" },
        { text: "DNI", value: "DNI_Em" },
        { text: "Seleccionar", value: "" },
      ];
    },
  },

  watch: {
    selectedEtapa(P) {
      if (P) {
        const etapa = this.etapas.find((etapa) => etapa.Descripcion_Et === P);
        this.frmOrdenI.IDEtapa = etapa.IDEtapa;
      }
    },
  },

  created() {
    this.handleDateSelection();
    this.obtenerDato();
    this.capturarDato();
    this.getEtapa();
    this.getEtapaContrato();
    this.getContrato();
    this.getEmpleado();
    this.llenarNumO();
  },

  methods: {
    getEtapa() {
      this.axios
        .get("http://localhost:3000/etapa")
        .then((res) => {
          this.etapas = res.data;
        })
        .catch((error) => e);
    },
    createOrdenI() {
      if(this.frmOrdenI.DNI_Em===""){
        this.mensaje='Es necesario ASIGNAR un técnico para la orden';
        this.dialogError=true;
        this.typemsg="error";
      }else if(this.frmOrdenI.Fecha_Et===undefined){
        this.mensaje='Por favor seleccione una fecha para la orden de instalación'
        this.dialogError=true;
        this.typemsg="error";
      }else{
        this.axios
        .post("http://localhost:3000/etapa-contrato", this.frmOrdenI)
        .then((res) => {
          console.log(res);
          console.log(this.frmOrdenI.DNI_Em);
        })
        .catch((e) => e);
        this.guardarValor();
        this.mostrarMensaje();
        localStorage.removeItem("valorA");
        localStorage.removeItem("valorB");
      }
    },
    getEtapaContrato(){
      this.axios
      .get("http://localhost:3000/etapa-contrato")
      .then((response) => {
        // Filtrar por etapas 1 (INSTALACIÓN)
        this.ordenes = response.data.filter((orden) => orden.IDEtapa === 1);
      })
      .catch((error) =>
        console.error("Error al obtener los datos de los técnicos: ", error)
      );
    },
    asignarTecnico() {
      this.$router.push("/menu/AsignarTecnico");
    },
    handleDateSelection(date) {
      // Lógica para manejar la selección de fecha
      this.frmOrdenI.Fecha_Et = date;
    },
    resetForm() {
      this.frmOrdenI.DNI_Em = "";
      this.frmOrdenI.Nom_Tecnico = "";
      this.selectedDate = null;
    },
    volverMenu() {
      this.$router.push("/menu/consultarContratos");
    },
    obtenerDato() {
      var valorCampoA = localStorage.getItem("valorCampoA");
      var valorCampoB = localStorage.getItem("valorCampoB");
      console.log(valorCampoA);
      console.log(valorCampoB);
      if (valorCampoA && valorCampoB) {
        this.frmOrdenI.DNI_Em = valorCampoA;
        this.frmOrdenI.Nom_Tecnico = valorCampoB;
        localStorage.removeItem("valorCampoA");
        localStorage.removeItem("valorCampoB"); // Opcional: eliminar el valor almacenado
      }
    },
    desText() {
      this.TextFieldAble = false;
    },
    mostrarMensaje() {
      (this.mensaje =
        "La orden de Instalación ha sido generada con éxito, por favor registre los materiales a emplear para  " +
        "la ejecución de la instalación de gas natural en la vivienda, tomando en consideración las especificaciones" +
        " suscritas en el contrato, para esta forma finalizar con el proceso de forma satisfactoria"),
        (this.dialogVisible = true);
    },
    asignarMateriales() {
      this.dialogVisible = false;
      this.$router.push("/menu/registrarMateriales");
    },
    cerrar(){
      this.dialogVisible= false;
      this.dialogError=false
      this.dialogVisualizar=false;
    },
    guardarValor() {
      var valor1 = this.frmOrdenI.IDContrato;
      var valor2 = this.frmOrdenI.IDEtapa;
      var valor3 = this.frmOrdenI.Fecha_Et;
      localStorage.setItem("valor1", valor1);
      localStorage.setItem("valor2", valor2);
      localStorage.setItem("valor3", valor3);
    },
    capturarDato() {
      var valorA = localStorage.getItem("valorA");
      var valorB = localStorage.getItem("valorB");
      console.log(valorA);
      console.log(valorB);
      if (valorA && valorB) {
        this.frmOrdenI.IDContrato = valorA;
        this.frmOrdenI.numSum = valorB;
      }
    },
    llenarNumO() {
      this.frmOrdenI.numOrden = 'OI-'+this.frmOrdenI.IDContrato;
    },
    seleccionarOrden(orden){
      this.menCabecera= '       Código de Orden : OI-'+ orden.IDContrato;
      const temporal =this.obtenerDatos(orden.IDContrato,orden.DNI_Em);
      this.mensaje= 'DATOS GENERALES'+
                    '\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------'+
                    '\nCódigo de Contrato       :      '+ orden.IDContrato +
                    '\nNumero de Sumnistro   :     '+temporal[2]+
                    '\nPuntos de Instalación   :     '+temporal[3]+
                    '\n\nDATOS DE ESPECIFICOS'+
                    '\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------'+
                    '\nDNI Técnico       :        '+orden.DNI_Em+
                    '\nNombre Encargado    :        '+temporal[0]+' '+temporal[1]+
                    '\nFecha de Ejecución  :       '+orden.Fecha_Et;
      this.dialogVisualizar=true; 
    },
    obtenerDatos(number,dni){
      var contrato= this.contratos.find((contrato) => contrato.IDContrato=== number);
      console.log(contrato.IDContrato)
      if (contrato) {
        console.log(contrato.IDContrato)
          var tecnico= this.tecnicos.find((tecnico)=> tecnico.DNI_Em===dni)
          console.log(tecnico.DNI_Em)
          if(tecnico){
            const datos=[tecnico.Nombre_Em,tecnico.Apellido_Em,contrato.numSum,contrato.PuntoInstalacion_Con]
            return datos
          }
         return null;
     } else {
         return null; // o algún valor predeterminado si no se encuentra
     }
   },
    getContrato(){
      this.axios
      .get("http://localhost:3000/contrato")
      .then((response)=>{
          //Filtro de Aprobados
          this.contratos= response.data.filter((contrato)=>contrato.estado==='Aprobado');
      })
      .catch((error) =>
      console.error("Error al obtener los datos de los contratos ", error)
    );
    },
    getEmpleado(){
      this.axios
      .get("http://localhost:3000/empleado")
      .then((response)=>{
          //Filtro 
          this.tecnicos= response.data.filter((tecnico)=>tecnico.IDCategoria===2);
      })
      .catch((error) =>
      console.error("Error al obtener los datos", error)
    );
    },

  },
};
