export default {
	data() {
		return {
			frmContrato: {
				IDContrato: "",
				PuntoInstacion_Con: "",
				numSum: "",
				DNI_Em: "",
				IDGabineteCategoria: "",
				estado: "",
				DNI_cli: "",
				Fecha_Con: "",
				NumeroRadicado_Con: "",
			},
			Select: false,
			search: "",
			menCabecera: "",
			typemsg: "",
			dialogVisible: false,
			dialogError: false,
			loading: false,
			search: "",
			mensaje: "",
			asesores: [],
			clientes: [],
			domicilios: [],
			etapacontratos: [],
			contratos: [],
		};
	},

	computed: {
		headers() {
			return [
				{ text: "ID", value: "IDContrato" },
				{ text: "DNI Cliente", value: "DNI_cli" },
				{ text: "DNI Empleado", value: "DNI_Em" },
				{ text: "Estado", value: "estado" },
				{ text: "Fecha ", value: "Fecha_Con" },
				{ text: "Numero de Suministro ", value: "numSum" },
				{ text: "Seleccionar", value: "" },
				{ text: "Visualizar", value: "" },
			];
		},
	},
	mounted() {
		this.obtenerContratos();
	},

	created() {
		this.getEtapaContrato();
		this.getAsesores();
		this.getCliente();
		this.getDomicilio();
	},
	methods: {
		obtenerContratos() {
			this.axios
				.get("http://localhost:3000/contrato")
				.then((response) => {
					//Filtro de Aprobados
					this.contratos = response.data.filter(
						(contrato) => contrato.estado === "Aprobado"
					);
				})
				.catch((error) =>
					console.error("Error al obtener los datos de los contratos ", error)
				);
		},
		seleccionarContrato(contrato) {
			this.frmContrato.IDContrato = contrato.IDContrato;
			this.frmContrato.Fecha_Con = contrato.Fecha_Con;
			this.frmContrato.numSum = contrato.numSum;
			this.frmContrato.estado = contrato.estado;
			this.frmContrato.NumeroRadicado_Con = contrato.NumeroRadicado_Con;
		},
		asignar() {
			var valorA = this.frmContrato.IDContrato;
			var valorB = this.frmContrato.numSum;
			localStorage.setItem("valorA", valorA);
			localStorage.setItem("valorB", valorB);
			console.log(valorA);
			console.log(valorB);
		},
		ordenInstalacion() {
			if (this.frmContrato.IDContrato !== "") {
				const etapacontrato = this.etapacontratos.some(
					(etapacontrato) =>
						etapacontrato.IDContrato === this.frmContrato.IDContrato &&
						etapacontrato.IDEtapa === 1
				);
				if (etapacontrato) {
					(this.mensaje =
						"El contrato ya cuenta con una orden de Instalación, por favor proceda a seleccionar otro contrato"),
						(this.dialogError = true);
					this.typemsg = "error";
				} else {
					this.asignar();
					this.$router.push("/menu/generarOrdenI");
				}
			} else {
				(this.mensaje =
					"Por favor, seleccione un contrato para seguir con el proceso"),
					(this.dialogError = true);
				this.typemsg = "error";
			}
		},
		aceptar() {
			this.dialogVisible = false;
			this.dialogError = false;
			this.limpiar();
		},
		ordenHabilitacion() {
			if (this.frmContrato.IDContrato !== "") {
				const etapacontrato = this.etapacontratos.some(
					(etapacontrato) =>
						etapacontrato.IDContrato === this.frmContrato.IDContrato &&
						etapacontrato.IDEtapa === 2
				);
				if (etapacontrato) {
					(this.mensaje =
						"El contrato ya cuenta con una orden de Habilitación, por favor proceda a seleccionar otro contrato"),
						(this.dialogError = true);
					this.typemsg = "error";
				} else {
					this.asignar();
					this.$router.push("/menu/generarOrdenH");
				}
			} else {
				(this.mensaje =
					"Por favor, seleccione un contrato para seguir con el proceso"),
					(this.dialogError = true);
				this.typemsg = "error";
			}
		},
		mostrarContrato(contrato) {
			this.menCabecera = "       Código de contrato :" + contrato.IDContrato;
			const temporal = this.obtenerDomicilio(contrato.DNI_cli);
			this.mensaje =
				"DATOS GENERALES" +
				"\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------" +
				"\nHUD       :      C" +
				contrato.IDContrato +
				"\nAsesor   :      " +
				this.obtenerAsesor(contrato.DNI_Em) +
				"\nNumero de Sumnistro   :     " +
				contrato.numSum +
				"\nFecha de Contrato         :     " +
				contrato.Fecha_Con +
				"\n\nDATOS DEL CLIENTE" +
				"\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------" +
				"\nDNI       :        " +
				contrato.DNI_cli +
				"\nNombre    :        " +
				this.obtenerCliente(contrato.DNI_cli) +
				"\n\nDATOS DEL DOMICILIO" +
				"\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------" +
				"\nCódigo Domicilio       :        " +
				temporal[0] +
				"\nDirección                    :        " +
				temporal[1];
			this.dialogVisible = true;
		},
		obtenerCliente(number) {
			var cliente = this.clientes.find((cliente) => cliente.DNI_cli === number);
			if (cliente) {
				var nombre = cliente.Nombre_cli + " " + cliente.Apellido_cli;
				return nombre;
			} else {
				return null; // o algún valor si no se encuentra
			}
		},
		obtenerDomicilio(number) {
			var cliente = this.clientes.find((cliente) => cliente.DNI_cli === number);
			if (cliente) {
				var domicilio = this.domicilios.find(
					(domicilio) => domicilio.IDDomicilio === cliente.IDDomicilio
				);
				if (domicilio) {
					console.log(domicilio.IDDomicilio);
					const datos = [domicilio.IDDomicilio, domicilio.Direccion_Dom];
					return datos;
				}
				return datos;
			} else {
				return null; // o algún valor predeterminado si no se encuentra
			}
		},
		obtenerAsesor(number) {
			var asesor = this.asesores.find((asesor) => asesor.DNI_Em === number);
			if (asesor) {
				var nombre = asesor.Nombre_Em + " " + asesor.Apellido_Em;
				return nombre;
			} else {
				return null; // o algún valor si no se encuentra
			}
		},
		getAsesores() {
			this.axios
				.get("http://localhost:3000/empleado")
				.then((response) => {
					this.asesores = response.data.filter(
						(asesor) => asesor.IDCategoria === 1
					);
				})
				.catch((error) => console.error("Error ", error));
		},
		getCliente() {
			this.axios
				.get("http://localhost:3000/cliente")
				.then((response) => {
					this.clientes = response.data;
				})
				.catch((error) => console.error("Error ", error));
		},
		getDomicilio() {
			this.axios
				.get("http://localhost:3000/domicilio")
				.then((response) => {
					this.domicilios = response.data;
				})
				.catch((error) => console.error("Error ", error));
		},
		limpiar() {
			this.frmContrato.IDContrato = "";
			this.frmContrato.numSum = "";
			this.frmContrato.Fecha_Con = "";
			this.frmContrato.NumeroRadicado_Con = "";
			this.frmContrato.estado = "";
		},
		volver() {
			this.$router.push("/menu");
		},
		getEtapaContrato(number) {
			this.axios
				.get("http://localhost:3000/etapa-contrato")
				.then((response) => {
					this.etapacontratos = response.data;
				})
				.catch((error) =>
					console.error(
						"Error al obtener los datos de las etapacontratos ",
						error
					)
				);
		},
	},
};
