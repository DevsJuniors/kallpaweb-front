<template>
  <div class="container">
    <div class="filtros">
      <v-container class="px-0" fluid>
        <v-card outlined class="max-width-400">
          <v-card-title>Filtros</v-card-title>
          <v-card-text>
            <p>Fecha</p>
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
          <v-card-title>Reporte de Clientes</v-card-title>
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
  display: flex;
  justify-content: flex-end;
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
</style>
<script src="./ReporteOrdenes.js"></script>
