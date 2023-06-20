<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <form name="registrarMateriales" @submit.prevent="createMateriales">
      <div class="Materiales">
        <h2>Registrar Materiales</h2>
        <v-text-field
          label="ID Materiales"
          placeholder="Ingresa la ID del Material"
          filled
          v-model="frmMateriales.IDMateriales"></v-text-field>
        <v-text-field
          label="Nombre Malla"
          placeholder="Ingresa nombre de la malla"
          filled
          v-model="frmMateriales.Nombre_Ma"></v-text-field>
        <v-text-field
          label="Unidad de medida"
          placeholder="Ingresa unidad de medida"
          filled
          v-model="frmMateriales.UnidadMedida_Ma"></v-text-field>
        <v-text-field
          label="Stock de Materiales"
          placeholder="Ingresa el Stock de los materiales"
          filled
          v-model="frmMateriales.Stock_Ma"></v-text-field>
      </div>
      <v-btn type="submit" class="button-1" depressed color="primary">
        REGISTRAR MATERIALES
      </v-btn>
    </form>
  </div>
</template>
<style>
.Materiales {
  margin: 20px;
  max-width: 30%;
}
.button-1 {
  background: #033076;
  color: #ffffff;
  border-color: #232323;
  border-width: 5px;
  border-style: solid;
  border-radius: 3px 3px 3px 3px;
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  margin: 20px;
}
</style>
<script src="./registrarMateriales.js"></script>
