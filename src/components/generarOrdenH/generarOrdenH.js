export default {
	name: "Orden",
	data() {
		return {
			frmOrdenH: {
				IDContrato: "",
				IDEtapa: "2",
				DNI_Em: "",
				Fecha_Et: "",
				Nom_Habilitador: "",
				numSum: "",
				numOrden: "",
			},
			menCabecera: "",
			TextFieldAble: false,
			Select: false,
			selectedEtapa: "Habilitación",
			etapas: [],
			ordenes: [],
			contratos: [],
			habilitadores: [],
			search: "",
			loading: false,
			search: "",
			dialogVisible: false,
			dialogError: false,
			dialogVisualizar: false,
			mensaje: "",
			TextFieldAble: false,
			selectedDate: null,
			typemsg: "",
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
				this.frmOrdenH.IDEtapa = etapa.IDEtapa;
			}
		},
	},
	created() {
		this.handleDateSelection();
		this.obtenerDato();
		this.capturarDato();
		this.getEtapa();
		this.llenarNumO();
		this.getContrato();
		this.getEtapaContrato();
		this.getEmpleado();
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
		createOrdenH() {
			if (this.frmOrdenH.DNI_Em === "") {
				this.mensaje = "Es necesario ASIGNAR un habilitador para la orden";
				this.dialogError = true;
				this.typemsg = "error";
			} else if (this.frmOrdenH.Fecha_Et === undefined) {
				this.mensaje =
					"Por favor seleccione una fecha para la orden de habilitación";
				this.dialogError = true;
				this.typemsg = "error";
			} else {
				console.log(this.frmOrdenH.Fecha_Et);
				this.axios
					.post("http://localhost:3000/etapa-contrato", this.frmOrdenH)
					.then((res) => {
						console.log(res);
						console.log(this.frmOrdenH.DNI_Em);
					})
					.catch((e) => e);
				this.guardarValor();
				this.mostrarMensaje();
				localStorage.removeItem("valorA");
				localStorage.removeItem("valorB");
			}
		},
		getEtapaContrato() {
			this.axios
				.get("http://localhost:3000/etapa-contrato")
				.then((response) => {
					// Filtrar por etapas 2 (HABILITACIÓN)
					this.ordenes = response.data.filter((orden) => orden.IDEtapa === 2);
				})
				.catch((error) =>
					console.error("Error al obtener los datos de los técnicos: ", error)
				);
		},
		asignarHabilitador() {
			this.$router.push("/menu/asignarHabilitador");
		},
		handleDateSelection(date) {
			// Lógica para manejar la selección de fecha
			this.frmOrdenH.Fecha_Et = date;
		},
		resetForm() {
			this.frmOrdenH.DNI_Em = "";
			this.frmOrdenH.Nom_Tecnico = "";
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
				this.frmOrdenH.DNI_Em = valorCampoA;
				this.frmOrdenH.Nom_Habilitador = valorCampoB;
				localStorage.removeItem("valorCampoA");
				localStorage.removeItem("valorCampoB"); // Opcional: eliminar el valor almacenado
			}
		},
		capturarDato() {
			var valorA = localStorage.getItem("valorA");
			var valorB = localStorage.getItem("valorB");
			if (valorA && valorB) {
				this.frmOrdenH.IDContrato = valorA;
				this.frmOrdenH.numSum = valorB;
				console.log("AAA" + this.frmOrdenH.IDContrato);
			}
		},
		cerrar() {
			this.dialogVisible = false;
			this.dialogError = false;
			this.dialogVisualizar = false;
		},
		mostrarMensaje() {
			(this.mensaje =
				"La orden de Habilitación ha sido generada con éxito, por favor registre los materiales a emplear para  " +
				"la ejecución de la habilitación de gas natural en la vivienda, tomando en consideración las especificaciones" +
				" suscritas en el contrato, para esta forma finalizar con el proceso de forma satisfactoria"),
				(this.dialogVisible = true);
		},
		asignarMateriales() {
			this.dialogVisible = false;
			this.$router.push("/menu/registrarMateriales");
		},
		guardarValor() {
			var valor1 = this.frmOrdenH.IDContrato;
			var valor2 = this.frmOrdenH.IDEtapa;
			var valor3 = this.frmOrdenH.Fecha_Et;
			localStorage.setItem("valor1", valor1);
			localStorage.setItem("valor2", valor2);
			localStorage.setItem("valor3", valor3);
		},
		llenarNumO() {
			this.frmOrdenH.numOrden = "OH-" + this.frmOrdenH.IDContrato;
			console.log("ID:" + this.frmOrdenH.IDContrato);
		},
		seleccionarOrden(orden) {
			this.menCabecera = "       Código de Orden : OH-" + orden.IDContrato;
			const temporal = this.obtenerDatos(orden.IDContrato, orden.DNI_Em);
			this.mensaje =
				"DATOS GENERALES" +
				"\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------" +
				"\nCódigo de Contrato       :      " +
				orden.IDContrato +
				"\nNumero de Sumnistro   :     " +
				temporal[2] +
				"\nPuntos de Instalación   :     " +
				temporal[3] +
				"\n\nDATOS DE ESPECIFICOS" +
				"\n ----------------------------------------------------------------------------------------------------------------------------------------------------------------" +
				"\nDNI Habilitador       :        " +
				orden.DNI_Em +
				"\nNombre Encargado    :        " +
				temporal[0] +
				" " +
				temporal[1] +
				"\nFecha de Ejecución  :       " +
				orden.Fecha_Et;
			this.dialogVisualizar = true;
		},
		obtenerDatos(number, dni) {
			var contrato = this.contratos.find(
				(contrato) => contrato.IDContrato === number
			);
			console.log(contrato.IDContrato);
			if (contrato) {
				console.log(contrato.IDContrato);
				var habilitador = this.habilitadores.find(
					(habilitador) => habilitador.DNI_Em === dni
				);
				console.log(habilitador.DNI_Em);
				if (habilitador) {
					const datos = [
						habilitador.Nombre_Em,
						habilitador.Apellido_Em,
						contrato.numSum,
						contrato.PuntoInstalacion_Con,
					];
					return datos;
				}
				return null;
			} else {
				return null; // o algún valor predeterminado si no se encuentra
			}
		},
		getContrato() {
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
		getEmpleado() {
			this.axios
				.get("http://localhost:3000/empleado")
				.then((response) => {
					//Filtro
					this.habilitadores = response.data.filter(
						(habilitador) => habilitador.IDCategoria === 3
					);
				})
				.catch((error) => console.error("Error al obtener los datos ", error));
		},
	},
};
