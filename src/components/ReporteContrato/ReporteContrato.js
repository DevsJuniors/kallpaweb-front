export default {
	data() {
		return {
			estadoSeleccionado: null,
			contratos: [],
			end: null,
			start: null,
			empleadoSeleccionado: null,
			empleadosCategoria1: [],
			reporteContratos: "",
			IDContrato: "",
			Fecha_Con: "",
			NumeroRadicado_Con: "",
			PuntoInstalacion_Con: "",
			numSum: "",
			estado: "",
			IDDomicilio: "",
			DNI_cli: "",

			DNI_Em: "",
			nameemp: "",
			IDGabineteCategoria: "",
			IDTipoInst: "",
		};
	},
	watch: {
		start(newValue) {
			this.$forceUpdate();
		},
		end(newValue) {
			this.$forceUpdate();
		},
	},
	computed: {
		headers() {
			return [
				{ text: "ID Contrato", value: "IDContrato" },
				{ text: "Fecha Contrato", value: "Fecha_Con" },
				{ text: "Numer Radicado", value: "NumeroRadicado_Con" },
				{ text: "Puntos de Instalacion", value: "PuntoInstalacion_Con" },
				{ text: "Número de Suministro", value: "numSum" },
				{ text: "Estado", value: "estado" },

				{ text: "DNI Cliente", value: "DNI_cli" },
				{ text: "DNI Empleado", value: "DNI_Em" },
				{ text: "Categoria de Gabinete", value: "IDGabineteCategoria" },
				{ text: "Tipo Instalacion", value: "IDTipoInst" },
			];
		},
		estadosContratos() {
			const estados = new Set();
			this.contratos.forEach((contrato) => {
				estados.add(contrato.estado);
			});
			return Array.from(estados);
		},
	},
	mounted() {
		this.obtenerContratos();
	},
	methods: {
		obtenerContratos() {
			this.axios
				.get("http://localhost:3000/contrato")
				.then((response) => {
					this.contratos = response.data;
					this.filtrarContratosPorCategoria();
				})
				.catch((error) =>
					console.error("Error al obtener los datos de los contratos : ", error)
				);
		},

		generarReporte() {
			const contratosFiltrados = this.contratos.filter((contrato) => {
				const empleado = contrato.empleado;
				return (
					empleado &&
					empleado.IDCategoria === 1 &&
					(!this.estadoSeleccionado ||
						contrato.estado === this.estadoSeleccionado) &&
					(!this.distritoSeleccionado ||
						contrato.distrito === this.distritoSeleccionado) &&
					(!this.start || contrato.Fecha_Con >= this.start) &&
					(!this.end || contrato.Fecha_Con <= this.end) &&
					(!this.empleadoSeleccionado ||
						empleado.DNI_Em === this.empleadoSeleccionado.DNI_Em)
				);
			});

			const nombreAsesor = this.empleadoSeleccionado
				? this.empleadoSeleccionado.nombreCompleto
				: "Todos los Asesores";
			const estadoContrato = this.estadoSeleccionado || "Todos los Estados";
			const fechaInicio = this.start || "Sin fecha de inicio";
			const fechaFin = this.end || "Sin fecha de fin";

			let contenidoReporte = `Nombre del Asesor: ${nombreAsesor}
		  Estado del Contrato: ${estadoContrato}
		  Fecha de Inicio: ${fechaInicio}
		  Fecha de Fin: ${fechaFin}
		  
		  
		  Contratos Encontrados: ${contratosFiltrados.length}
		  
		  `;
			contratosFiltrados.forEach((contrato) => {
				contenidoReporte += `- ID Contrato: ${contrato.IDContrato}
		  Cliente: ${contrato.DNI_cli}
		  Empleado: ${contrato.DNI_Em}\n----------------------------------------------------
		  `;
			});

			this.reporteContratos = contenidoReporte;
		},
		filtrarContratosPorCategoria() {
			this.contratosFiltrados = this.contratos.filter((contrato) => {
				const empleado = contrato.empleado;
				return empleado && empleado.IDCategoria === 1;
			});

			this.empleadosCategoria1 = this.contratosFiltrados.map((contrato) => {
				const empleado = contrato.empleado;
				return {
					DNI_Em: empleado.DNI_Em,
					nombreCompleto: `${empleado.Nombre_Em} ${empleado.Apellido_Em}`,
				};
			});
		},
		reporte() {
			this.$router.push("/reportes");
		},
	},
};
