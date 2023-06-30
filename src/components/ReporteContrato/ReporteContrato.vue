<template>
  <v-container class="px-0" fluid>
    <v-radio-group v-model="estadoSeleccionado">
      <v-radio
        v-for="estado in estadosContratos"
        :key="estado"
        :label="estado"
        :value="estado"></v-radio>
    </v-radio-group>
  </v-container>
</template>
<script src="./ReporteContrato.js"></script>
