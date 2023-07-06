export default {
    data(){
        return {
        frmContrato:{
           IDContrato: "",
           PuntoInstacion_Con: "",
           numSum: "",
           DNI_Em:"",
           IDGabineteCategoria:"",
           estado:"",
           DNI_cli:"",
           Fecha_Con:"",
           NumeroRadicado_Con:"",
        },
        Select:false,
        search: '',
        dialogVisible:false,
        loading: false,
        search: "",
        mensaje: "",
        etapacontratos:[],
        contratos: [],
        };
    },

    computed: {
        headers(){
            return [
                {text: "ID", value: "IDContrato"},
                {text: "DNI Cliente", value: "DNI_cli"},
                {text: "DNI Empleado", value: "DNI_Em"},
                {text: "Estado", value: "estado"},
                {text: "Fecha ", value: "Fecha_Con"},
                {text: "Numero de Suministro ", value: "numSum"},
                { text: "Seleccionar", value: "" },
            ]
        },
    },
    mounted(){
        this.obtenerContratos();
    },

    created(){
        this.getEtapaContrato();
    },
    methods:{
            obtenerContratos(){
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
            seleccionarContrato(contrato){
                this.frmContrato.IDContrato= contrato.IDContrato;
                this.frmContrato.Fecha_Con=contrato.Fecha_Con;
                this.frmContrato.numSum=contrato.numSum;
                this.frmContrato.estado=contrato.estado;
                this.frmContrato.NumeroRadicado_Con=contrato.NumeroRadicado_Con;
            },
            asignar(){
                var valorA = this.frmContrato.IDContrato;
                var valorB = this.frmContrato.numSum;
                localStorage.setItem("valorA", valorA);
                localStorage.setItem("valorB", valorB);
                console.log(valorA);
                console.log(valorB);
            },
            ordenInstalacion(){
                if(this.frmContrato.IDContrato!==""){
                    const etapacontrato =this.etapacontratos.some(etapacontrato => etapacontrato.IDContrato === this.frmContrato.IDContrato && etapacontrato.IDEtapa===1);
                    if(etapacontrato){
                        this.mensaje='El contrato ya cuenta con una orden de Instalación, por favor proceda a seleccionar otro contrato',
                        this.dialogVisible = true;
                    }else{
                        this.asignar()
                        this.$router.push("/menu/generarOrdenI");
                    }
                }else{
                    this.mensaje='Por favor, seleccione un contrato para seguir con el proceso',
                    this.dialogVisible = true;
                }
            },
            aceptar(){
                this.dialogVisible = false;
                this.limpiar();
            },
            ordenHabilitacion(){
                if(this.frmContrato.IDContrato!==""){
                    const etapacontrato =this.etapacontratos.some(etapacontrato => etapacontrato.IDContrato === this.frmContrato.IDContrato && etapacontrato.IDEtapa===2);
                    if(etapacontrato){
                        this.mensaje='El contrato ya cuenta con una orden de Habilitación, por favor proceda a seleccionar otro contrato',
                        this.dialogVisible = true;
                    }else{
                        this.asignar();
                        this.$router.push("/menu/generarOrdenH");
                    }
                }else{
                    this.mensaje='Por favor, seleccione un contrato para seguir con el proceso',
                    this.dialogVisible = true;
                }
            },
            limpiar(){
                this.frmContrato.IDContrato="";
                this.frmContrato.numSum="";
                this.frmContrato.Fecha_Con="";
                this.frmContrato.NumeroRadicado_Con="";
                this.frmContrato.estado="";
            },
            volver(){
                this.$router.push("/menu");
            },
            getEtapaContrato(number){
                this.axios
                .get("http://localhost:3000/etapa-contrato")
                .then((response)=>{
                    this.etapacontratos= response.data;
                })
                .catch((error) =>
                console.error("Error al obtener los datos de las etapacontratos ", error)
              );
           },
    },
}