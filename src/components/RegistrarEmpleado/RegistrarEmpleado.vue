<template>
  <div>
  <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>

    <form name="registrarEmpleado" @submit.prevent="createEmpleado">
      <div class="empleado">
      
        <h2 class = "blue--text">DATOS GENERALES DEL EMPLEADO</h2>

          <template>
          <div class="text-field-container">
            <div class="text-field-wrapper">
        <v-text-field
          label="DNI"
          placeholder="Ingresa el IDGenero"
          filled
          v-model="frmEmpleado.DNI_Em"></v-text-field>
        </div>

        <div class="text-field-wrapper">
        <v-text-field
          label="Nombre"
          placeholder="Ingresa Nombre"
          filled
          v-model="frmEmpleado.Nombre_Em"></v-text-field>
        </div>

        <div class="text-field-wrapper">
        <v-text-field
          label="Apellido"
          placeholder="Ingresa Apellido"
          filled
          v-model="frmEmpleado.Apellido_Em"></v-text-field>
        </div>
        
        <div class="text-field-wrapper">
          <v-text-field
          label="Celular"
          placeholder="Ingresa su numero de celular"
          filled
          v-model="frmEmpleado.Celular_Em"></v-text-field>
        </div>
        
        <div class="text-field-wrapper">
          <v-select
          v-model="selectedCategoria"
          :items="categorias.map((categoria) => categoria.Cargo_CE)"
          label="Selecciona la categoria del Empleado"
          outlined
         ></v-select>
        </div>
        
          </div>
        </template>

        
        <form name="credencialesEmpleado" @submit.prevent="createCredenciales">
            <div class="credenciales">
              

            <v-card-text>
              <p class="text-xl-left"><h2 class = "blue--text">CREDENCIALES DEL EMPLEADO</h2></p>
            </v-card-text>
            
            <div class="text-field-container_2">
              
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
      
            </div>
            </div>


          <div class="button-container">
       
          <div class="button-row">
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
          </div>

          <div class="button-row">
            
            <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="resetForm">
              Limpiar
              <v-icon class="mx-1">mdi-backup-restore</v-icon>
            </v-btn>

            <v-btn 
            type="submit" 
            class="button-1 mt-2" 
            depressed color="primary">
              AGREGAR CREDENCIALES
            <v-icon class="mx-1">mdi-badge-account-horizontal</v-icon>
            </v-btn>
          </div>
        </div>
            
            
            
            
          </form>
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

.text-field-container {
  display: flex;
  flex-direction: row;
  width: 1000px;
}
.text-field-container_2{
  display: flex;
  flex-direction: right;
  align-items: center;
  height: 100vh;
}
.spacer {
  flex-grow: 1;
}
.text-field {
  width: 200px;
  height: 30px;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 5px;
}
.text-field-wrapper {
  margin-right: 10px;
}
.button-container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 50px;
  right: 10px;
}
.button-container_w {
  
  
  justify-content: center;
}
.button-row {
  display: flex;
  justify-content: center;
}
</style>
<script src="./RegistrarEmpleado.js"></script>

