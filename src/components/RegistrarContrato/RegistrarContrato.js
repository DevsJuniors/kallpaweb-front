export default {
    name: "Contrato",
    data() {
        return {
        frmContrato: {
            IDContrato: "",
            Fecha_Con: "",
            NumeroRadicado_Con: "",
            PuntoInstalacion_Con: "",
            numSum: "",
            estado: "",
            IDDomicilio: "",
            DNI_cli: "",
            DNI_Em: "",
            IDGabineteCategoria: "",
            IDTipoInst: "",
        },
        message: "",
        };
    },
    methods: {
        createContrato() {
        this.axios
            .post("http://localhost:3000/contrato", this.frmContrato)
            .then((res) => {
            console.log(res);
            })
            .catch((e) => e);
        },
    },
    };
    