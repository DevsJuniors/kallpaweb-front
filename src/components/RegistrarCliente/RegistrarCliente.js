export default {
    name: "Cliente",
    data(){
        return {
            frmCliente: {
            DNI_cli: "",
            Nombre_cli: "",
            Apellido_cli: "",
            Celular_cli: "",
            FechaNacimiento_cli: "",
            IDGenero: "",
            IDNacionalidad: "",
            IDEstadoCivil: "",
            IDDomicilio: "",
            },
            message: "",
        };
    },
    methods: {
        createCliente(){
            this.axios
            .post("http://localhost:3000/cliente",this.frmCliente)
            .then((res) => {
                console.log(res);
            })
            .catch((e)=> e);
        },
    },
};