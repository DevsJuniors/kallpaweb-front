<template>
  <div >
    <v-app-bar color="white" dense dark height="80">
          <v-toolbar-title>
            <v-img
              src="../../views/Img/Kallpa.png"
              max-height="300"
              max-width="200"
              class="kallpa-image"></v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-img
            src="../../views/Img/usuario (3).png"
            max-height="100"
            max-width="50"></v-img>
        </v-app-bar>
        <v-footer color="#33cc33" app height="60">
          <v-row align="center" justify="center">
            <v-col cols="12" class="text-center white--text">
              &copy; 2023 KALLPA. Todos los derechos reservados.
            </v-col>
          </v-row>
        </v-footer>
    <div>
      <div style="display: flex; justify-content: center; align-items: center;">
      <h2 style="color: rgba(0, 0, 129, 0.829); margin-right: 10px;font-size: 40px;font-weight: bold">Reporte -</h2>
      <h2 style="color: rgb(62, 207, 62);font-size: 40px;font-weight: bold">Ordenes</h2>
    </div>
    </div>
  <div class="container">
    <div class="filtros">
      <v-container class="contenedor-cajas-E">
        <v-card >
          <v-card-title style="color: darkblue; font-size: 30px;">Filtros</v-card-title>
          <v-card-text>
            <p style="color:rgb(4, 90, 15);font-size: 18px;">Fecha</p>
            <v-row>
              <v-col cols="12" sm="12">
                <v-date-picker v-model="start"></v-date-picker>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="generarReporte"
              >Generar Reporte</v-btn
            >
            <v-btn color="primary">Atras</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
    <div class="reportec">
      <v-container>
        <v-card outlined class="reporte">
          <v-card-title style="color:rgb(40, 180, 40); font-size: 20px;">Reporte de Clientes</v-card-title>
          <v-card-text>
            <textarea
              rows="20"
              cols="50"
              disabled
              v-model="reporteOrdenes"></textarea>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>
</div>
</template>
<style>
.max-width-400 {
  max-width: 400px;
}
.reporte {
  width: 500px;
  padding: 20px;
}
.filtros {
  max-width: 400px;
  margin-right: auto;
}
.reportec {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.container {
  display: 20%;
  justify-content: 4px;
}
textarea {
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  background-color: #f5f5f5;
}
.kallpa-image {
  margin-top: 35px;
}
.contenedor-cajas-E {
  border: 4px solid #010361 ;
  padding: 10px;
}

</style>
<script src="./ReporteOrdenes.js"></script>
