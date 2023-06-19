<template>
    <div>
        <v-app-bar color="green accent-4" dense dark>
         <v-toolbar-title>KALLPA</v-toolbar-title>
         <v-spacer></v-spacer>
         <v-icon>mdi-account-circle</v-icon>
        </v-app-bar>
        <form name="registrarCliente" @submit.prevent="createCliente"> 
           <div class="cliente">
           <h2>Registrar Cliente</h2>
           <v-text-field
             label="DNI Cliente"
             placeholder="Ingresa el DNI del Cliente"
             filled
             v-model="frmCliente.DNI_cli"></v-text-field>
           <v-text-field 
             label="Nombre Cliente"
             placeholder="Ingresa el nombre del Cliente"
             filled
             v-model="frmCliente.Nombre_cli"></v-text-field>
           <v-text-field 
             label="Apellido Cliente"
             placeholder="Ingrese los apellidos del Cliente"
             filled
             v-model="frmCliente.Apellido_cli"></v-text-field>
           <v-text-field
             label="N° Celular"
             placeholder="Ingrese el número de celular del Cliente"
             filled
             v-model="frmCliente.Celular_cli"></v-text-field>
           <v-text-field
             label="Fecha de Nacimiento"
             placeholder="Ingrese la fecha de nacimiento del Cliente"
             filled
             v-model="frmCliente.FechaNacimiento_cli"></v-text-field>
           <v-text-field
             label="ID Genero"
             placeholder="Ingrese el código del género del Cliente"
             filled
             v-model="frmCliente.IDGenero"></v-text-field> 
           <v-text-field
             label="ID Nacionalidad"
             placeholder="Ingrese el código de la naacionalidad del Cliente"
             filled
             v-model="frmCliente.IDNacionalidad"></v-text-field>
           <v-text-field
             label="ID Estado Civil"
             placeholder="Ingrese el código del estado civil del Cliente"
             filled
             v-model="frmCliente.IDEstadoCivil"></v-text-field> 
            <v-text-field
             label="IDDomicilio"
             placeholder="Ingrese el código del domicilio del Cliente"
             filled
             v-model="frmCliente.IDDomicilio"></v-text-field> 
           </div>
           <v-btn type="submit" class="button-1" depressed color="primary">
            REGISTRAR CLIENTE
           </v-btn> 
        </form>
   </div>
</template>
<style>
.cliente {
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
<script src="./RegistrarCliente.js"></script>
