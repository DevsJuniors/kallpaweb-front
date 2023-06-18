export default {
    name: "Domicilio",
    data(){
        return{
            frmDomicilio:{
                IDDomicilio: "",
	            Direccion_Dom: "",
	            Interior_Dom: "",
	            Piso_Dom: "",
	            Nomb_Malla_Dom: "",
	            IDCondicion: "",
	            IDEstrato: "",
	            IDPredio: "",
	            IDDistrito: "",
            },
            message: "",
        };
    },
    methods:{
        createDomicilio(){
            this.axios
                .post("http://localhost:3000/domicilio",this.frmDomicilio)
                .then((res) => {
                    console.log(res);
                })
            .catch((e) => e);
        },
    },
};