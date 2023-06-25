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
          label="ID Domicilio"
          placeholder="Ingrese el código de domicilio"
          filled
          v-model="frmCliente.IDDomicilio"></v-text-field>
        <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="registrarDomicilio">
              Registrar Domicilios
              <v-icon class="mx-1">mdi-home-analytics</v-icon>
            </v-btn>
        <v-text-field
          label="DNI Cliente"
          placeholder="Ingresa el DNI del Cliente"
          filled
          :disabled="!TextFieldAble"
          v-model="frmCliente.DNI_cli"></v-text-field>
        <v-text-field
          label="Nombre Cliente"
          placeholder="Ingresa el nombre del Cliente"
          filled
          :disabled="!TextFieldAble"
          v-model="frmCliente.Nombre_cli"></v-text-field>
        <v-text-field
          label="Apellido Cliente"
          placeholder="Ingrese los apellidos del Cliente"
          filled
          :disabled="!TextFieldAble"
          v-model="frmCliente.Apellido_cli"></v-text-field>
        <v-text-field
          label="N° Celular"
          placeholder="Ingrese el número de celular del Cliente"
          filled
          :disabled="!TextFieldAble"
          v-model="frmCliente.Celular_cli"></v-text-field>
        <v-text-field
          label="Fecha de Nacimiento"
          placeholder="Ingrese la fecha de nacimiento del Cliente"
          filled
          :disabled="!TextFieldAble"
          v-model="frmCliente.FechaNacimiento_cli"></v-text-field>
        <v-select
         v-model="selectedGenero"
         :items="generos.map((genero) => genero.Descripcion_G)"
         label="Selecciona el Género"
         outlined
         :disabled="!Select"
         ></v-select>
         <v-select
         v-model="selectedNacionalidad"
         :items="nacionalidades.map((nacionalidad) => nacionalidad.Descripcion_NA)"
         label="Selecciona la Nacionalidad"
         outlined
         :disabled="!Select"
         ></v-select>
         <v-select
         v-model="selectedEstado"
         :items="estadosciviles.map((estadocivil) => estadocivil.Descripcion_Es)"
         label="Selecciona el Estado Civil"
         outlined
         :disabled="!Select"
         ></v-select>
      </div>
      <v-btn type="submit" class="button-1 mt-2" depressed color="primary">
        Registrar Cliente
        <v-icon  class="mx-1">mdi-account-badge-outline</v-icon>
      </v-btn>
      <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="resetForm">
              Limpiar
              <v-icon class="mx-1">mdi-backup-restore</v-icon>
      </v-btn>
      <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="volverMenu">
              Atras
              <v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
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
<script src="./RegistrarCliente.js">
</script>

