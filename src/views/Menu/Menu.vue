<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <div class="btn-container">
      <v-container fluid>
        <v-row class="btns" justify-content="flex-end" wrap>
          <v-flex xs12 sm6 md4 lg3 xl2 class="ml-auto">
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="registrarEmpleado">
              Registrar Empleado
              <v-icon class="mx-2">mdi-account-hard-hat</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="registrarCliente">
              Registrar Cliente
              <v-icon class="mx-5">mdi-account-plus</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="registrarContrato">
              Registrar Contrato
              <v-icon class="mx-2">mdi-file-sign</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="consultarCliente">
              Consultar Cliente
              <v-icon class="mx-4">mdi-account-search</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="evaluarContrato">
              Evaluar Contrato
              <v-icon class="mx-4">mdi-file-eye</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="generarOrdenI">
              generar Orden In.
              <v-icon class="mx-4">mdi-account-details</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="asignarTecnico">
              Asignar Tecnico
              <v-icon class="mx-6">mdi-account-details</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="registrarMateriales">
              Registrar Materiales
              <v-icon class="mx-1">mdi-account-details</v-icon>
            </v-btn>
          </v-flex>
        </v-row>
        <v-row class="btns" justify-content="flex-end" wrap>
          <v-flex xs12 sm6 md4 lg3 xl2 class="ml-auto">
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="generarOrdenH">
              Generar Orden H
              <v-icon class="mx-1">mdi-account-details</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="asignarHabilitador">
              Asignar Habilitador
              <v-icon class="mx-1">mdi-account-details</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="mx-2"
              x-large
              @click="reportes">
              Reportes
              <v-icon class="mx-1">mdi-account-details</v-icon>
            </v-btn>
          </v-flex>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    registrarEmpleado() {
      this.$router.push("/menu/registrarEmpleado");
    },
    registrarCliente() {
      this.$router.push("/menu/registrarCliente");
    },
    registrarContrato() {
      this.$router.push("/menu/registrarContrato");
    },
    consultarCliente() {
      this.$router.push("/menu/consultarCliente");
    },
    evaluarContrato() {
      this.$router.push("/menu/evaluarContrato");
    },
    generarOrdenI() {
      this.$router.push("/menu/generarOrdenI");
    },
    asignarTecnico() {
      this.$router.push("/menu/asignarTecnico");
    },
    registrarMateriales() {
      this.$router.push("/menu/registrarMateriales");
    },
    generarOrdenH() {
      this.$router.push("/menu/generarOrdenH");
    },
    asignarHabilitador() {
      this.$router.push("/menu/asignarHabilitador");
    },
    reportes() {
      this.$router.push("/reportes");
    },
  },
};
</script>
<style>
.btn-container {
  margin-top: 20px;
}

.btns {
  display: flex;
  flex-wrap: wrap;
}

.btns .mx-2 {
  margin-bottom: 5px;
}
</style>
