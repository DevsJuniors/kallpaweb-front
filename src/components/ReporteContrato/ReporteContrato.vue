<template>
  <div class="container">
    <div class="filtros">
      <v-container class="px-0" fluid>
        <v-card outlined class="max-width-400">
          <v-card-title>Filtros</v-card-title>
          <v-card-text>
            <p>Estado Contrato</p>
            <v-radio-group v-model="estadoSeleccionado">
              <v-radio
                v-for="estado in estadosContratos"
                :key="estado"
                :label="estado"
                :value="estado"></v-radio>
            </v-radio-group>
            <p>Selecciona Distrito</p>
            <v-combobox
              v-model="distritoSeleccionado"
              :items="distritos.map((distrito) => distrito.Nombre_Di)"
              label="Distrito"
              clearable
              solo></v-combobox>
            <p>Fecha</p>
            <v-row>
              <v-col cols="12" sm="10">
                <v-date-picker v-model="start"></v-date-picker>
              </v-col>
              <v-col cols="12" sm="10">
                <v-date-picker v-model="end"></v-date-picker>
              </v-col>
            </v-row>
            <p>Asesor</p>
            <v-combobox
              v-model="empleadoSeleccionado"
              :items="empleadosCategoria1"
              item-text="nombreCompleto"
              item-value="DNI_Em"
              label="Seleccionar Asesor"
              clearable
              solo></v-combobox>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="generarReporte"
              >Generar Reporte</v-btn
            >
            <v-btn color="primary" @click="reporte">Atras</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </div>
    <div class="reportec">
      <v-container>
        <v-card outlined class="reporte">
          <v-card-title>Reporte de Contrato</v-card-title>
          <v-card-text>
            <textarea v-model="reporteContratos" rows="20" cols="50" disabled>
            </textarea>
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
<script src="./ReporteContrato.js"></script>
