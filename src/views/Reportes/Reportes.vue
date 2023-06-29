<template>
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
</template>
<script src="./Reportes"></script>
