<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <form name="registrarDomicilio" @submit.prevent="createDomicilio">
      <div class="domicilio">
        <h2>Registrar Domicilio</h2>
        <v-text-field
          label="ID Domicilio"
          placeholder="Ingresa la ID del Domicilio"
          filled
          v-model="frmDomicilio.IDDomicilio"></v-text-field>
        <v-text-field
          label="Ubicacion"
          placeholder="Ingresa la ubicacion del Domicilio"
          filled
          v-model="frmDomicilio.Ubicacion_Dom"></v-text-field>
        <v-text-field
          label="Dirección"
          placeholder="Ingresa la dirección del Domicilio"
          filled
          v-model="frmDomicilio.Direccion_Dom"></v-text-field>
        <v-text-field
          label="Piso"
          placeholder="Ingresa el piso del Domicilio"
          filled
          v-model="frmDomicilio.Piso_Dom"></v-text-field>
        <v-text-field
          label="Interior"
          placeholder="Ingresa el interior del Domicilio"
          filled
          v-model="frmDomicilio.Interior_Dom"></v-text-field>
        <v-text-field
          label="Distrito"
          placeholder="Ingresa el distrito del Domicilio"
          filled
          v-model="frmDomicilio.IDDistrito"></v-text-field>
        <v-text-field
          label="Tipo de Predio"
          placeholder="Ingresa el tipo de predio del Domicilio"
          filled
          v-model="frmDomicilio.IDPredio"></v-text-field>
        <v-text-field
          label="Malla"
          placeholder="Ingresa la malla del Domicilio"
          filled
          v-model="frmDomicilio.Nomb_Malla_Dom"></v-text-field>
        <v-text-field
          label="Estrato"
          placeholder="Ingresa el estrato del Domicilio"
          filled
          v-model="frmDomicilio.IDEstrato"></v-text-field>
        <v-text-field
          label="Condición de Propiedad"
          placeholder="Ingresa la condición de propiedad"
          filled
          v-model="frmDomicilio.IDCondicion"></v-text-field>
      </div>
      <v-btn type="submit" class="button-1" depressed color="primary">
        REGISTRAR DOMICILIO
      </v-btn>
    </form>
  </div>
</template>
<style>
.domicilio {
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
<script src="./RegistrarDomicilio.js"></script>
