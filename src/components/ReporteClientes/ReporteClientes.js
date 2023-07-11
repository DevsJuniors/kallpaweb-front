export default {
	data() {
		return {
			clientes: [],
			end: null,
			start: null,
			distritos: [],
			distritoSeleccionado: null,
			domicilios: [],
			estratos: [],
			estratoSeleccionado: null,
			domicilioDistrito: null,
			reporteClientes: "",
			cantidadClientesEncontrados: 0,
			clientesFiltrados: [],
			DNI_cli: "",
			Nombre_cli: "",
			Apellido_cli: "",
			Celular_cli: "",
			FechaNacimiento_cli: "",
			IDGenero: "",
			IDNacionalidad: "",
			IDEstadoCivil: "",
			IDDomicilio: "",
			search: "",
			loading: "",
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
		this.obtenerClientes();
		this.obtenerEstratos();
		this.obtenerDistritos();
	},
	computed: {
		headers() {
			return [
				{ text: "Dni", value: "DNI_cli" },
				{ text: "Nombres", value: "Nombre_cli" },
				{ text: "Apellidos", value: "Apellido_cli" },
				{ text: "Fecha de Nacimiento", value: "FechaNacimiento_cli" },
				{ text: "Género", value: "IDGenero" },
				{ text: "Nacionalidad", value: "IDNacionalidad" },
				{ text: "Estado Civil", value: "IDEstadoCivil" },
				{ text: "Celular", value: "Celular_cli" },
				{ text: "ID Domicilio", value: "IDDomicilio" },
			];
		},
	},
	methods: {
		obtenerEstratos() {
			this.axios
				.get("http://localhost:3000/estrato")
				.then((response) => {
					this.estratos = response.data;
				})
				.catch((error) => "Error al obtener los estratos" + error);
		},
		obtenerDistritos() {
			this.axios
				.get("http://localhost:3000/distrito")
				.then((response) => {
					this.distritos = response.data;
				})
				.catch((error) =>
					console.log("Error al obtener los distritos" + error)
				);
		},
		obtenerClientes() {
			this.axios
				.get("http://localhost:3000/cliente")
				.then((response) => {
					this.clientes = response.data;
				})
				.catch((error) => console.log("Error al obtener clientes" + error));
		},

		generarReporte() {
			Promise.all([this.obtenerDistritos()])
				.then(() => {
					const clientesFiltrados = this.clientes.filter((cliente) => {
						const domicilio = cliente.domicilio;

						const cumpleDistrito =
							!this.distritoSeleccionado ||
							(domicilio &&
								domicilio.IDDistrito === this.distritoSeleccionado.IDDistrito);
						const cumpleEstrato =
							!this.estratoSeleccionado ||
							(domicilio &&
								domicilio.IDEstrato === this.estratoSeleccionado.IDEstrato);
						const cumpleFecha =
							(!this.start ||
								new Date(cliente.FechaNacimiento_cli) >=
									new Date(this.start)) &&
							(!this.end ||
								new Date(cliente.FechaNacimiento_cli) <= new Date(this.end));

						return cumpleDistrito && cumpleEstrato && cumpleFecha;
					});

					console.log(clientesFiltrados);

					const fechaInicio = this.start || "Sin fecha de inicio";
					const fechaFin = this.end || "Sin fecha de fin";
					const distritoSeleccionado = this.distritoSeleccionado
						? this.distritoSeleccionado.Nombre_Di
						: "Todos los Distritos";
					const estratoSeleccionado = this.estratoSeleccionado
						? this.estratoSeleccionado.Descripcion_Estrato
						: "Todos los Estratos";

					let contenidoReporte = `Fecha de Inicio: ${fechaInicio}
          Fecha de Fin: ${fechaFin}
          Distrito Seleccionado: ${distritoSeleccionado}
          Estrato Seleccionado: ${estratoSeleccionado}
          
          Clientes Encontrados: ${clientesFiltrados.length}
          
          `;

					clientesFiltrados.forEach((cliente) => {
						contenidoReporte += `- ID Cliente: ${cliente.DNI_cli}
          Nombre: ${cliente.Nombre_cli}
          Apellido: ${cliente.Apellido_cli}\n----------------------------------------------
          `;
					});

					this.reporteClientes = contenidoReporte;
				})
				.catch((error) => {
					console.log("Error al obtener los distritos", error);
				});
		},
		resetFilters() {
			this.distritoSeleccionado = null;
			this.start = null;
			this.end = null;
			this.estratoSeleccionado = null;
			this.clientesFiltrados = [];
			this.cantidadClientesEncontrados = 0;
			this.reporteClientes = "";
			this.$router.push("/reportes");
		},
	},
};
