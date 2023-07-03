export default {
  data() {
    return {
      start: null,
      empleados: [],
      empleadoSeleccionado: null,
      reporteOrdenes: "",
      detalleEtapaMaterial: [],
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
    this.obtenerEmpleados();
    this.obtenerDetalleEtapaMaterial();
  },
  methods: {
    obtenerEmpleados() {
      this.axios
        .get("http://localhost:3000/empleado")
        .then((response) => {
          this.empleados = response.data.filter(
            (empleado) => empleado.IDCategoria === 1
          );
        })
        .catch((error) =>
          console.log("No se pudieron obtener empleados" + error)
        );
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

      console.log(detalleEtapa); // Verificar los datos en detalleEtapa

      let contenidoReporte = `Reporte de las Ordenes: \n\n `;
      detalleEtapa.forEach((detalle) => {
        contenidoReporte += `\n----------------------------------------------------------------------------------------
        \n- ID Contrato : ${detalle.IDContrato}
        ID Etapa: ${detalle.IDEtapa}
        \n`;

        const etapaContrato = detalle.etapaContrato;
        contenidoReporte += `- DNI Empleado: ${etapaContrato.DNI_Em}
        Fecha: ${etapaContrato.Fecha_Et}\n`;

        const materiales = detalle.materiales;
        contenidoReporte += `IDMateriales: ${detalle.IDMateriales}
        - Nombre Material : ${materiales.Nombre_Ma}
        - Unidad de Medida : ${materiales.UnidadMedida_Ma}
        - Cantidad : ${detalle.Cantidad_De}`;
      });

      this.reporteOrdenes = contenidoReporte;
    },
  },
};
