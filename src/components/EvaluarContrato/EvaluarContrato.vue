<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="contratos"
      item-key="IDContrato"
      class="elevation-1"
      :search="search">
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Buscar"
          class="mx-4"></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>
<script src="./EvaluarContrato.js"></script>
