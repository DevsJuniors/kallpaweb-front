export default {
	name: "Materiales",
	data() {
		return {
			frmMateriales: {
				IDContrato: "",
				Fecha_O: "",
				IDEtapa: "",
				IDMateriales: "",
				Nombre_Ma: "",
				Cantidad_De: "",
				Stock_Ma: "",
			},
			TextFieldAble: false,
			dialogVisible: false,
			dialogConfirmacion: false,
			mensaje: "",
			Select: true,
			minValue: 1,
			maxValue: 50,
			message: "",
			typemsg: "",
			dialogError: false,
			selectedMateriales: null,
			materiales: [],
			materialesTE: [],
		};
	},
	mounted() {},
	computed: {
		headers() {
			return [
				{ text: "Id", value: "IDMateriales" },
				{ text: "Material", value: "Nombre_Ma" },
				{ text: "Cantidad", value: "Cantidad_De" },
				{ text: "Seleccionar", value: "" },
			];
		},
	},

	watch: {
		selectedMateriales(val) {
			if (val) {
				this.frmMateriales.Nombre_Ma = val;
				const material = this.materiales.find(
					(material) => material.Nombre_Ma === this.frmMateriales.Nombre_Ma
				);
				this.frmMateriales.IDMateriales = material.IDMateriales;
			} else {
				this.resetForm();
			}
		},
	},

	created() {
		this.getMateriales();
		this.Cantidad_De = 0;
		this.obtenerDato();
	},

	methods: {
		createMateriales() {
			for (let i = 0; i < this.materialesTE.length; i++) {
				console.log(this.materialesTE[i].IDMateriales);
				this.axios
					.post(
						"http://localhost:3000/detalle-etapa-material",
						this.materialesTE[i]
					)
					.then((res) => {
						console.log(res);
					})
					.catch((e) => e);
			}
			(this.mensaje =
				"Se registro de forma existosa los materiales para el contrato seleccionado " +
				"en la etapa respectiva"),
				this.mostrarMensaje();
		},
		getMateriales() {
			this.axios
				.get("http://localhost:3000/materiales")
				.then((res) => {
					this.materiales = res.data;
				})
				.catch((error) => e);
		},
		cerrar() {
			this.dialogError = false;
			this.dialogConfirmacion = false;
		},
		abrir() {
			if (this.materialesTE.length === 0) {
				this.mensaje =
					"Por favor asigne materiales a la orden correspondiente, para continuar con el proceso";
				this.typemsg = "error";
				this.dialogError = true;
			} else {
				this.mensaje = "¿Esta seguro que desea registrar los materiales?";
				this.dialogConfirmacion = true;
			}
		},
		agregar() {
			if (this.selectedMateriales === null) {
				this.mensaje = "Por favor seleccione un material para la orden";
				this.typemsg = "error";
				this.dialogError = true;
			} else if (
				this.frmMateriales.Cantidad_De === "0" ||
				this.frmMateriales.Cantidad_De === ""
			) {
				this.mensaje =
					"No se puede ingresar un material cuya cantidad sea 0, por favor modifique la cantidad.";
				this.typemsg = "error";
				this.dialogError = true;
			} else {
				console.log(this.frmMateriales.Cantidad_De);
				const material = {
					IDContrato: this.frmMateriales.IDContrato,
					IDEtapa: this.frmMateriales.IDEtapa,
					IDMateriales: this.frmMateriales.IDMateriales,
					Nombre_Ma: this.frmMateriales.Nombre_Ma,
					Cantidad_De: this.frmMateriales.Cantidad_De,
				};
				this.materialesTE.push(material);
				console.log(this.materialesTE);
				this.resetForm();
			}
		},

		actualizar() {
			if (
				this.frmMateriales.Cantidad_De === "0" ||
				this.frmMateriales.Cantidad_De === ""
			) {
				this.mensaje =
					"No se puede actualizar un material con la cantidad 0, por favor modifique la cantidad.";
				this.typemsg = "error";
				this.dialogError = true;
			} else {
				for (let i = 0; i < this.materialesTE.length; i++) {
					if (
						this.materialesTE[i].IDMateriales ===
						this.frmMateriales.IDMateriales
					) {
						this.materialesTE[i].Cantidad_De = this.frmMateriales.Cantidad_De;
					}
				}
				this.resetForm();
				this.Select = true;
			}
		},
		eliminar() {
			for (let i = 0; i < this.materialesTE.length; i++) {
				if (this.materialesTE[i].nombre === this.frmMateriales.IDMaterial) {
					this.materialesTE.splice(i, 1); // Eliminar 1 elemento a partir de la posición i
					break;
				}
			}
			this.resetForm();
			this.Select = true;
		},
		seleccionarItem(item) {
			this.selectedMateriales = item.Nombre_Ma;
			this.frmMateriales.Cantidad_De = item.Cantidad_De;
			this.Select = false;
		},
		resetForm() {
			this.selectedMateriales = null;
			this.frmMateriales.Cantidad_De = "";
		},
		limpiar() {
			this.materialesTE.splice(0);
			this.resetForm();
		},
		mostrarMensaje() {
			this.dialogVisible = true;
		},
		volver() {
			this.$router.push("/menu/consultarContratos");
		},
		obtenerDato() {
			var valor1 = localStorage.getItem("valor1");
			var valor2 = localStorage.getItem("valor2");
			var valor3 = localStorage.getItem("valor3");
			this.frmMateriales.IDContrato = valor1;
			this.frmMateriales.IDEtapa = valor2;
			this.frmMateriales.Fecha_O = valor3;
			localStorage.removeItem("valor1");
			localStorage.removeItem("valor2");
			localStorage.removeItem("valor3"); // Opcional: eliminar el valor almacenado
		},
	},
};
