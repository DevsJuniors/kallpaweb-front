<template>
  <div>
  <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>

    <form name="registrarEmpleado" @submit.prevent="createEmpleado">
      <div class="empleado">
      
        <h2 class = "black--text">DATOS GENERALES DEL EMPLEADO</h2>

        <v-card class="mx-auto px-6 py-8" max-width="400">
        
        
        <v-text-field
          label="DNI"
          placeholder="Ingresa el IDGenero"
          filled
          v-model="frmEmpleado.DNI_Em"></v-text-field>
        <v-text-field
          label="Nombre"
          placeholder="Ingresa Nombre"
          filled
          v-model="frmEmpleado.Nombre_Em"></v-text-field>
        <v-text-field
          label="Apellido"
          placeholder="Ingresa Apellido"
          filled
          v-model="frmEmpleado.Apellido_Em"></v-text-field>
        <v-text-field
          label="Celular"
          placeholder="Ingresa su numero de celular"
          filled
          v-model="frmEmpleado.Celular_Em"></v-text-field>
          <v-select
          v-model="selectedCategoria"
          :items="categorias.map((categoria) => categoria.Cargo_CE)"
          label="Selecciona la categoria del Empleado"
          outlined
         ></v-select>
         </v-card>
        <div>
          <v-btn type="submit" class="button-1 mt-2" depressed color="primary">
            REGISTRAR
            <v-icon  class="mx-1">mdi-account-badge-outline</v-icon>
          </v-btn>
          <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="volverMenu">
              Atras
              <v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
            </v-btn>
            <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="resetForm">
              Limpiar
              <v-icon class="mx-1">mdi-backup-restore</v-icon>
      </v-btn>


          <form name="credencialesEmpleado" @submit.prevent="createCredenciales">
            <div class="credenciales">
            <v-card-text>
              <p class="text-xl-left"><h2 class = "black--text">CREDENCIALES DEL EMPLEADO</h2></p>
            </v-card-text>
            <v-card class="mx-auto px-6 py-8" max-width="400">
              
              <v-text-field
                label="DNI EMPLEADO"
                placeholder="Ingresa el DNI del Empleado"
                filled
                v-model="frmCredenciales.DNI_Em"></v-text-field>
              
              <v-text-field
                label="Nombre de Usuario"
                placeholder="Ingresa un nombre de usuario"
                filled
                v-model="frmCredenciales.nombreusuario"></v-text-field>
              <v-text-field
                label="Contraseña"
                placeholder="Ingresa una contraseña"
                filled
                v-model="frmCredenciales.contraseña"></v-text-field>
            
            </v-card>
            </div>
            
            
            <v-btn type="submit" class="button-1 mt-2" depressed color="primary">
              AGREGAR CREDENCIALES
              <v-icon class="mx-1">mdi-badge-account-horizontal</v-icon>
            </v-btn>
            
            
          </form>
        </div>
      </div>
    </form>
  </div>
</template>
<style>
.credenciales {
  position: absolute;
  top: 30px;
  right: 0;
  margin-right: 30px;
}
.empleado {
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
<script src="./RegistrarEmpleado.js"></script>
