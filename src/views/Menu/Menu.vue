<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <div class="btn-container">
      <v-container fluid>
        <v-row class="btns" justify="flex-end" wrap>
          <!-- Primera fila de botones -->
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="ml-auto">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="registrarEmpleado"
            >
              <v-img
              src="../../assets/Regis.png"
            ></v-img>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="registrarCliente"
            >
              Registrar Cliente
              <v-icon size="100" class="icon-center">mdi-account-plus</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="registrarContrato"
            >
              Registrar Contrato
              <v-icon size="100" class="icon-center">mdi-file-sign</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="btns" justify="flex-end" wrap>
          <!-- Segunda fila de botones -->
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="ml-auto">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="consultarCliente"
            >
              Consultar Cliente
              <v-icon size="100" class="icon-center">mdi-account-search</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="150px"
              @click="evaluarContrato"
            >
              Evaluar Contrato
              <v-icon size="100" class="icon-center">mdi-file-eye</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="150px"
              @click="generarOrdenI"
            >
              Generar Orden In.
              <v-icon size="100" class="icon-center">mdi-account-details</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="btns" justify="flex-end" wrap>
          <!-- Tercera fila de botones -->
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="ml-auto">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="asignarTecnico"
            >
              Asignar Técnico
              <v-icon size="100" class="icon-center">mdi-account-details</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="registrarMateriales"
            >
              Registrar Materiales
              <v-icon size="100" class="icon-center">mdi-account-details</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="generarOrdenH"
            >
              Generar Orden H
              <v-icon size="100" class="icon-center">mdi-account-details</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <!-- Resto de las filas de botones -->
        <v-row class="btns" justify="flex-end" wrap>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2" class="ml-auto">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="asignarHabilitador"
            >
              Asignar Habilitador
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" md="4" lg="3" xl="2">
            <v-btn
              depressed
              color="blue darken-4"
              dark
              class="mx-2 rounded-pill btn-wide"
              x-large
              block
              height="130px"
              @click="reportes"
            >
              <v-icon size="100" class="icon-center">mdi-account-details</v-icon>
              <span class="btn-text">Reportes</span>
            </v-btn>
          </v-col>
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
      this.$router.push("/menu/reportes");
    },
  },
};
</script>

<style>
.btn-container {
  margin-top: 50px;
}

.btns {
  margin-bottom: 20px;
}

.btn-wide {
  max-width: 50px;
}

.icon-center {
  margin: auto;
  display: block;
}
</style>
