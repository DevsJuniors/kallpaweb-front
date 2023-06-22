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
        <v-select
          v-model="selectedDistrito"
          :items="distritos.map((distrito) => distrito.Nombre_Di)"
          label="Selecciona el Distrito"
          outlined
         ></v-select>
        <v-select
          v-model="selectedTipoPredio"
          :items="tipospredios.map((tipopredio) => tipopredio.Descripcion_Pre)"
          label="Selecciona el Tipo de Predio"
          outlined
         ></v-select>
        <v-text-field
          label="Malla"
          placeholder="Ingresa la malla del Domicilio"
          filled
          v-model="frmDomicilio.Nomb_Malla_Dom"></v-text-field>
        <v-select
         v-model="selectedEstrato"
         :items="estratos.map((estrato) => estrato.Descripcion_Estrato)"
         label="Selecciona el Estrato"
         outlined
         ></v-select>
        <v-select
         v-model="selectedCondicion"
         :items="condiciones.map((condicion) => condicion.Descripcion_Co)"
         label="Selecciona la condición de la Propiedad"
         outlined
         ></v-select>
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
