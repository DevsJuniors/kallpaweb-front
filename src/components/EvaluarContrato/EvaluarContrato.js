export default {
  data() {
    return {
      IDContrato: "",
      numSum: "",
      estado: "",
      DNI_cli: "",
      searchE: "",
      search: "",
      searchF: "",
      selectedEstado:null,
      contratos: [],
      dialogVisible:false,
      dialogError:false,
      estados: [],
      mensaje: "",
      estadosA: ["En revisión", "Observado", "Desaprobado", "Aprobado"],
    };
  },

  watch:{
    selectedEstado(val){
      this.estado=val;
    },
  },

  computed: {
    headers() {
      return [
        { text: "ID Contrato", value: "IDContrato" },
        { text: "Fecha", value: "Fecha_Con" },
        { text: "Número Radicado", value: "NumeroRadicado_Con" },
        { text: "Número Suministro", value: "numSum" },
        { text: "Punto de Instalación", value: "PuntoInstalacion_Con" },
        { text: "Estado", value: "estado" },
        { text: "Categoría Gabinete", value: "IDGabineteCategoria" },
        { text: "Tipo Instalación", value: "IDTipoInst" },
        { text: "DNI Cliente", value: "DNI_cli" },
        { text: "DNI Empleado", value: "DNI_Em" },
        { text: "Seleccioanr", value: ""},
      ];
    },

    contratosFiltrados() {
      const searchTerm = this.search.toLowerCase().trim();
      const searchFecha = this.searchF.toLowerCase().trim();
      const searchEstado = this.searchE.toLowerCase().trim();

      if (searchEstado === "ningún estado") {
        return window.location.reload();
      }
      if (!searchTerm && !searchFecha && !searchEstado) {
        return this.contratos;
      }
      if (this.isNingunEstadoSelected) {
        return this.contratos;
      }

      return this.contratos.filter((contrato) => {
        const idC = contrato.IDContrato.toString().includes(searchTerm);
        const FeC = contrato.Fecha_Con.toString().includes(searchFecha);
        const estadoC = contrato.estado.toLowerCase().includes(searchEstado);

        return idC && FeC && estadoC;
      });
    },
  },
  mounted() {
    this.obtenerContratos();
  },
  methods: {
    obtenerContratos() {
      this.axios
      .get("http://localhost:3000/contrato")
      .then((response)=>{
          //Filtro de contratos no aprobados
          this.contratos= response.data.filter((contrato)=>contrato.estado!=='Aprobado');
      })
      .catch((error) =>
      console.error("Error al obtener los datos de los contratos ", error)
    );
    },
    confirmar(){
      if(this.IDContrato!==""){
        this.dialogVisible= true;
        this.mensaje= 'Esta seguro que desea actualizar el estado del contrato con código "'+ this.IDContrato + '" a "'+this.estado +'"';
      }else{
        this.dialogError=true;
        this.mensaje= 'Selecccione un contrato para poder realizar el proceso de modifcación.'
        this.limpiar();
      }
    },
    cerrar(){
      this.dialogVisible= false;
      this.dialogError=false
    },
    updateContrato() {
      const IDContrato = this.IDContrato;
      const dataUpdate = {
      IDContrato: this.IDContrato,
      estado: this.estado,
      };
      this.axios
        .patch(`http://localhost:3000/contrato/${IDContrato}`, dataUpdate)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
      this.limpiar();
      return window.location.reload();
    },

    seleccionarContrato(contrato){
      this.IDContrato= contrato.IDContrato;
      this.numSum= contrato.numSum;
      this.DNI_cli=contrato.DNI_cli;
      this.selectedEstado=contrato.estado;
      console.log(contrato.estado)
    },
    limpiar(){
      this.IDContrato="";
      this.numSum="";
      this.DNI_cli="";
      this.selectedEstado=null; 
    },
    volverMenu() {
      this.$router.push("/menu");
    },
  },
};