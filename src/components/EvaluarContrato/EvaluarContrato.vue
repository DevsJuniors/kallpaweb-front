<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="contratosFiltrados"
      item-key="IDContrato"
      class="elevation-1">
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Buscar por ID"
          class="mx-16"></v-text-field>
        <v-combobox
          v-model="searchEstado"
          :items="contratos.map((contratos) => contratos.estado)"
          label="Buscar por estado"
          class="mx-16"
          solo></v-combobox>
        <v-text-field
          v-model="searchF"
          label="Buscar por Fecha"
          class="mx-16"></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>
<script src="./EvaluarContrato.js"></script>
