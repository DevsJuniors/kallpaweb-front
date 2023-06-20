export default{
    name: "Materiales",
    data() {
        return {
            frmMateriales: {
                IDMateriales: "",
                Nombre_Ma: "",
	            UnidadMedida_Ma: "",
	            Stock_Ma: "",
            },
              message: "",
        }
    },
    methods: {
        createMateriales(){
            this.axios
            .post("http://localhost:3000/materiales", this.frmMateriales)
            .then((res) => {
              console.log(res);
            })
            .catch((e) => e);
        },
    },
};