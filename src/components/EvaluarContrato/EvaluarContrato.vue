<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="contratosFiltrados"
      item-key="IDContrato"
      class="elevation-1">
      <template slot="top">
        <v-text-field
          v-model="search"
          label="Buscar por ID"
          class="mx-16"
          solo></v-text-field>
        <v-combobox
          v-model="searchE"
          :items="[
            'Ningún Estado',
            ...contratos.map((contrato) => contrato.estado),
          ]"
          label="Buscar por estado"
          class="mx-16"
          solo></v-combobox>
        <v-text-field
          v-model="searchF"
          label="Buscar por Fecha"
          class="mx-16"
          solo></v-text-field>
      </template>
    </v-data-table>
    <v-container>
      <p>ID Contrato</p>
      <v-text-field
        label="ID Contrato"
        class="mx-16"
        solo
        v-model="searchID"
        @input="llenarCampos"></v-text-field>
      <p>Numero Suministro</p>
      <v-text-field
        label="Numero Suministro"
        class="mx-16"
        solo
        disabled
        v-model="numSum"></v-text-field>
      <p>DNI Cliente</p>
      <v-text-field
        label="DNI Cliente"
        class="mx-16"
        solo
        disabled
        v-model="DNI_cli"></v-text-field>
      <p>Estado:</p>
      <v-combobox
        :items="estadosA"
        label="Asignar estado"
        class="mx-16"
        solo
        v-model="estado"></v-combobox>
      <v-btn class="mx-2" depressed color="primary"
        >Buscar contrato a modificar</v-btn
      >
      <v-btn class="mx-2" depressed color="primary" @click="actualizarEstado"
        >Actualizar Estado</v-btn
      >
    </v-container>
  </div>
</template>
<script src="./EvaluarContrato.js"></script>
