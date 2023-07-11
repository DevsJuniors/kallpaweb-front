export default {
	data() {
		return {
			start: null,
			reporteOrdenes: "",
			detalleEtapaMaterial: [],
			search: "",
			loading: true,
			IDContrato: "",
			IDMateriales: "",
			IDEtapa: "",
			Cantidad_De: "",
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
	mounted() {
		this.obtenerDetalleEtapaMaterial();
	},
	computed: {
		headers() {
			return [
				{ text: "ID Contrato", value: "IDContrato" },
				{ text: "ID Material", value: "IDMateriales" },
				{ text: "ID Etapa", value: "IDEtapa" },
				{ text: "Cantidad Materiales", value: "Cantidad_De" },
			];
		},
	},
	methods: {
		reporte() {
			this.$router.push("/reportes");
		},
		obtenerDetalleEtapaMaterial() {
			this.axios
				.get("http://localhost:3000/detalle-etapa-material")
				.then((response) => {
					this.detalleEtapaMaterial = response.data;
				})
				.catch((error) => console.log(error));
		},
		generarReporte() {
			const detalleEtapa = this.detalleEtapaMaterial;
			const empleadoSeleccionado = this.empleadoSeleccionado;
			const fechaSeleccionada = this.start;

			let detalleFiltrado = detalleEtapa;

			if (fechaSeleccionada) {
				detalleFiltrado = detalleFiltrado.filter((detalle) => {
					const fechaEt = detalle.etapaContrato.Fecha_Et;
					const fechaEtFormatted = fechaEt.split("T")[0]; // Obtener la parte de la fecha sin la hora
					return fechaEtFormatted === fechaSeleccionada;
				});
			}

			if (empleadoSeleccionado) {
				detalleFiltrado = detalleFiltrado.filter((detalle) => {
					const empSeleccionado = detalle.etapaContrato.DNI_Em;
					console.log("Soy el emp seleccionado" + empSeleccionado);
					return this.empleadoSeleccionado === empSeleccionado;
				});
				console.log("detalle filtrado de empleado " + detalleFiltrado);
			}

			console.log(detalleFiltrado); // Verificar los datos en detalleFiltrado

			let contenidoReporte = `Reporte de las Ordenes: \n\n`;

			detalleFiltrado.forEach((detalle) => {
				const etapaContrato = detalle.etapaContrato;
				const materiales = detalle.materiales;

				contenidoReporte += `\n--------------------------------------------------------------------------------------
          \n- ID Contrato : ${detalle.IDContrato}
          ID Etapa: ${detalle.IDEtapa}
          \n`;

				contenidoReporte += `- DNI Empleado: ${etapaContrato.DNI_Em}
          Fecha: ${etapaContrato.Fecha_Et}\n`;

				contenidoReporte += `IDMateriales: ${detalle.IDMateriales}
          - Nombre Material : ${materiales.Nombre_Ma}
          - Unidad de Medida : ${materiales.UnidadMedida_Ma}
          - Cantidad : ${detalle.Cantidad_De}`;
			});

			this.reporteOrdenes = contenidoReporte;
		},
	},
};
