<template>
  <div>
    <div>
      <v-data-table
        :headers="headers"
        :items="contratosFiltrados"
        item-key="IDContrato"
        class="elevation-1">
        <template slot="top"
          ><v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-date-picker v-model="start"></v-date-picker>
              </v-col>
              <v-col cols="12" sm="6">
                <v-date-picker v-model="end"></v-date-picker>
              </v-col>
              <v-col cols="12" sm="9">
                <v-card class="mt-4 mx-auto" max-width="400">
                  <v-sheet
                    class="v-sheet--offset mx-auto"
                    color="cyan"
                    elevation="12"
                    max-width="calc(100% - 32px)">
                    <v-sparkline
                      :labels="fechas"
                      :value="cantidad"
                      color="white"
                      line-width="2"
                      padding="16"></v-sparkline>
                  </v-sheet>

                  <v-card-text class="pt-0">
                    <div class="text-h6 font-weight-light mb-2">
                      User Registrations
                    </div>
                    <div class="subheading font-weight-light grey--text">
                      Last Campaign Performance
                    </div>
                    <v-divider class="my-2"></v-divider>
                    <v-icon class="mr-2" small> mdi-clock </v-icon>
                    <span class="text-caption grey--text font-weight-light"
                      >last registration 26 minutes ago</span
                    >
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-data-table>

      <v-card>
        <v-card-title> Conteo de Contratos por Estado </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(cantidad, estado) in conteoContratos"
              :key="estado">
              <v-list-item-content>
                <v-list-item-title>
                  {{ estado }}: {{ cantidad }} contratos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </v-card>

      <v-btn color="primary" @click="generarReporte">Generar Reporte</v-btn>
      <v-btn color="primary" @click="reporteContrato">Reporte Contratos</v-btn>
      <v-btn color="primary" @click="reporteCliente">Reporte Clientes</v-btn>
      <v-btn color="primary" @click="reporteOrdenes">Reporte Ordenes</v-btn>
      <v-btn color="primary" @click="menu">Atras</v-btn>
    </div>
  </div>
</template>
<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
</style>
<script src="./Reportes"></script>
