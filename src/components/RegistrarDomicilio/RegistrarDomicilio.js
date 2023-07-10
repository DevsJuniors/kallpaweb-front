export default {
	name: "Domicilio",
	data() {
		return {
			frmDomicilio: {
				IDDomicilio: "",
				Direccion_Dom: "",
				Interior_Dom: "",
				Piso_Dom: "",
				Nomb_Malla_Dom: "",
				IDCondicion: "",
				descondicion: "",
				IDEstrato: "",
				desestratro: "",
				IDPredio: "",
				despredio: "",
				IDDistrito: "",
				desdistrito: "",
			},
			estratos: [],
			distritos: [],
			condiciones: [],
			tipospredios: [],
			selectedEstrato: null,
			selectedDistrito: null,
			selectedCondicion: null,
			selectedTipoPredio: null,
			mensaje: "",
			dialogVisible: false,
			dialogError: false,
			fecha: "",
		};
	},

	created() {
		this.getEstrato();
		this.getDistrito();
		this.getCondicion();
		this.getTipoPredio();
		this.obtenerFechaActual();
		this.obtenerIDDomicilio();
	},
	// Recuperando ID correspondiente de cada variable
	watch: {
		selectedEstrato(val) {
			if (val) {
				const estrato = this.estratos.find(
					(estrato) => estrato.Descripcion_Estrato === val
				);
				this.frmDomicilio.desestratro = estrato.Descripcion_Estrato;
				this.frmDomicilio.IDEstrato = estrato.IDEstrato;
			} else {
				this.resetForm();
			}
		},
		selectedDistrito(P) {
			if (P) {
				const distrito = this.distritos.find(
					(distrito) => distrito.Nombre_Di === P
				);
				this.frmDomicilio.desdistrito = distrito.Nombre_Di;
				this.frmDomicilio.IDDistrito = distrito.IDDistrito;
			}
		},
		selectedCondicion(M) {
			if (M) {
				const condicion = this.condiciones.find(
					(condicion) => condicion.Descripcion_Co === M
				);
				this.frmDomicilio.descondicion = condicion.Descripcion_Co;
				this.frmDomicilio.IDCondicion = condicion.IDCondicion;
			}
		},
		selectedTipoPredio(A) {
			if (A) {
				const tipopredio = this.tipospredios.find(
					(tipopredio) => tipopredio.Descripcion_Pre === A
				);
				this.frmDomicilio.despredio = tipopredio.Descripcion_Pre;
				this.frmDomicilio.IDPredio = tipopredio.IDPredio;
			}
		},
	},

	methods: {
		obtenerIDDomicilio() {
			this.axios
				.get("http://localhost:3000/domicilio")
				.then((response) => {
					const domicilios = response.data;
					let ultimoIDDomicilio = 0;

					domicilios.forEach((domicilio) => {
						if (domicilio.IDDomicilio > ultimoIDDomicilio) {
							ultimoIDDomicilio = domicilio.IDDomicilio;
						}
					});
					this.frmDomicilio.IDDomicilio = ultimoIDDomicilio + 1;
				})
				.catch((error) => {
					console.log(error);
				});
		},
		obtenerFechaActual() {
			const fechaActual = new Date();
			const dia = fechaActual.getDate();
			const mes = fechaActual.getMonth();
			const anio = fechaActual.getFullYear();

			const nombreMeses = [
				"enero",
				"febrero",
				"marzo",
				"abril",
				"mayo",
				"junio",
				"julio",
				"agosto",
				"septiembre",
				"octubre",
				"noviembre",
				"diciembre",
			];

			this.fecha = `${dia} de ${nombreMeses[mes]} de ${anio}`;
		},
		createDomicilio() {
			if (
				!this.frmDomicilio.IDDomicilio ||
				!this.frmDomicilio.Direccion_Dom ||
				!this.frmDomicilio.Interior_Dom ||
				!this.frmDomicilio.Piso_Dom ||
				!this.frmDomicilio.Nomb_Malla_Dom ||
				!this.frmDomicilio.IDCondicion ||
				!this.frmDomicilio.IDEstrato ||
				!this.frmDomicilio.IDPredio ||
				!this.frmDomicilio.IDDistrito
			) {
				let camposFaltantes = "";
				if (!this.frmDomicilio.IDDomicilio) {
					camposFaltantes += "ID Domicilio, ";
				}
				if (!this.frmDomicilio.Direccion_Dom) {
					camposFaltantes += "Direccion Domicilio, ";
				}
				if (!this.frmDomicilio.Interior_Dom) {
					camposFaltantes += "Interior Domicilio, ";
				}
				if (!this.frmDomicilio.Piso_Dom) {
					camposFaltantes += "Piso Domicilio, ";
				}
				if (!this.frmDomicilio.Nomb_Malla_Dom) {
					camposFaltantes += "Nombre de Malla, ";
				}
				if (!this.frmDomicilio.IDCondicion) {
					camposFaltantes += "Condicion, ";
				}
				if (!this.frmDomicilio.IDEstrato) {
					camposFaltantes += "Estrato, ";
				}
				if (!this.frmDomicilio.IDPredio) {
					camposFaltantes += "Predio, ";
				}
				if (!this.frmDomicilio.IDDistrito) {
					camposFaltantes += "Distrito. ";
				}

				camposFaltantes = camposFaltantes.slice(0, -2);
				this.mensaje = `Faltan campos por rellenar, por favor rellenar los campos faltantes : ${camposFaltantes}`;
				this.typemsg = "error";
				this.dialogError = true;
			} else {
				this.axios
					.post("http://localhost:3000/domicilio", this.frmDomicilio)
					.then((res) => {
						console.log(res);
					})
					.catch((e) => console.log(e));

				this.mensaje =
					"Se registro correctamente el domicilio porfavor haga click en el boton Cargar para registrar al cliente";
				this.typemsg = "success";

				this.dialogVisible = true;
			}
		},
		cerrar() {
			this.dialogVisible = false;
			this.dialogError = false;
			this.resetForm();
		},
		aceptar() {
			// Lógica para manejar la acción de aceptar en el diálogo
			this.dialogVisible = false;
			this.guardarValor();
			this.resetForm();
		},
		getEstrato() {
			this.axios
				.get("http://localhost:3000/estrato")
				.then((res) => {
					this.estratos = res.data;
				})
				.catch((error) => e);
		},
		getDistrito() {
			this.axios
				.get("http://localhost:3000/distrito")
				.then((res) => {
					this.distritos = res.data;
				})
				.catch((error) => e);
		},
		getCondicion() {
			this.axios
				.get("http://localhost:3000/condicion")
				.then((res) => {
					this.condiciones = res.data;
				})
				.catch((error) => e);
		},
		getTipoPredio() {
			this.axios
				.get("http://localhost:3000/tipo-predio")
				.then((res) => {
					this.tipospredios = res.data;
				})
				.catch((error) => e);
		},
		guardarValor() {
			var valorCampo1 = this.frmDomicilio.IDDomicilio;
			localStorage.setItem("valorCampo1", valorCampo1);
			console.log(valorCampo1);
			window.location.href = "http://localhost:3003/menu/registrarCliente";
		},
		volverMenu() {
			this.$router.push("/menu");
		},
		resetForm() {
			this.frmDomicilio.IDDomicilio = "";
			this.frmDomicilio.Direccion_Dom = "";
			this.frmDomicilio.Piso_Dom = "";
			this.frmDomicilio.Interior_Dom = "";
			this.frmDomicilio.Nomb_Malla_Dom = "";
			this.selectedEstrato = null;
			this.selectedDistrito = null;
			this.selectedCondicion = null;
			this.selectedTipoPredio = null;
		},
	},
};
