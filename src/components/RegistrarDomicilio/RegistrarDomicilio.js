export default {
  name: "Domicilio",
  data() {
    return {
      frmDomicilio: {
        IDDomicilio: "",
        Ubicacion_Dom: "",
        Direccion_Dom: "",
        Interior_Dom: "",
        Piso_Dom: "",
        Nomb_Malla_Dom: "",
        IDCondicion: "",
        IDEstrato: "",
        IDPredio: "",
        IDDistrito: "",
      },
      estratos: [],
      distritos: [],
      condiciones:[],
      tipospredios:[],
      selectedEstrato: null,
      selectedDistrito: null,
      selectedCondicion: null,
      selectedTipoPredio: null,
    };
  },

  created() {
    this.getEstrato();
    this.getDistrito();
    this.getCondicion();
    this.getTipoPredio();
  },
// Recuperando ID correspondiente de cada variable
watch: {
  selectedEstrato(val){
          if (val) {
            const estrato = this.estratos.find((estrato) => estrato.Descripcion_Estrato===val);
              this.frmDomicilio.IDEstrato = estrato.IDEstrato;

          } else {
            this.resetForm();
          }
        
  },
  selectedDistrito(P){
     if(P){
      const distrito = this.distritos.find((distrito) => distrito.Nombre_Dis===P);
      this.frmDomicilio.IDDistrito =distrito.IDDistrito;
     }
  },
  selectedCondicion(M){
      if(M){
          const condicion = this.condiciones.find((condicion) => condicion.Descripcion_Co===M);
          this.frmDomicilio.IDCondicion = condicion.IDCondicion;
         }
  },
  selectedTipoPredio(A){
    if(A){
        const tipopredio = this.tipospredios.find((tipopredio) => tipopredio.Descripcion_Pre===A);
        this.frmDomicilio.IDPredio= tipopredio.IDPredio;
       }
},
},

  methods: {
    createDomicilio() {
      this.axios
        .post("http://localhost:3000/domicilio", this.frmDomicilio)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => e);
    },
    getEstrato() {
      this.axios
        .get("http://localhost:3000/estrato")
        .then((res) => {
          this.estratos = res.data;
        })
        .catch((error) => e);
    },
    getDistrito(){
      this.axios
      .get("http://localhost:3000/distrito")
      .then((res) => {
        this.distritos = res.data;
      })
      .catch((error) => e);
    },
    getCondicion(){
      this.axios
      .get("http://localhost:3000/condicion")
      .then((res) => {
        this.condiciones = res.data;
      })
      .catch((error) => e);
    },
    getTipoPredio(){
      this.axios
      .get("http://localhost:3000/tipo-predio")
      .then((res) => {
        this.tipospredios = res.data;
      })
      .catch((error) => e);
    },
  },
};
