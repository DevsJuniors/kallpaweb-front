<template>
  <v-div> <!--Cabecera-->
    <v-app-bar color="white" dense dark height="80">
      <v-toolbar-title>
        <v-img
          src="../../views/Img/Kallpa.png"
          max-height="300"
          max-width="200"
          class="kallpa-image"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        src="../../views/Img/usuario (3).png"
        max-height="100"
        max-width="50"></v-img>
    </v-app-bar>
    <v-footer color="#33cc33" app height="60">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center white--text">
          &copy; 2023 KALLPA. Todos los derechos reservados.
        </v-col>
      </v-row>
    </v-footer>

    <!--titulo del modulo-->
    <form name="registrarEmpleado" @submit.prevent="createEmpleado">
      <v-div class="empleado">
      
        <h2 class = "blue--text">DATOS GENERALES DEL EMPLEADO</h2>

        <template><!--caja de texto para dni-->
          <v-div class="text-field-container">
            <v-div class="text-field-wrapper">
        <v-text-field
          label="DNI"
          placeholder="Ingresa el IDGenero"
          filled
          v-model="frmEmpleado.DNI_Em"></v-text-field>
        </v-div>

        <!---caja de texto para nombre-->
        <v-div class="text-field-wrapper">
        <v-text-field
          label="Nombre"
          placeholder="Ingresa Nombre"
          filled
          v-model="frmEmpleado.Nombre_Em"></v-text-field>
        </v-div>
        
        <!---caja de texto para apellido-->
        <v-div class="text-field-wrapper">
        <v-text-field
          label="Apellido"
          placeholder="Ingresa Apellido"
          filled
          v-model="frmEmpleado.Apellido_Em"></v-text-field>
        </v-div>
      </v-div>
      <v-div class="text-field-container">
          <!---caja de texto para celular-->
          <v-div class="text-field-wrapper">
          <v-text-field
          label="Celular"
          placeholder="Ingresa su numero de celular"
          filled
          v-model="frmEmpleado.Celular_Em"></v-text-field>
        </v-div>
        
        <!---combobox para categoria-->
        <v-div class="text-field-wrapper">
          <v-select
          v-model="selectedCategoria"
          :items="categorias.map((categoria) => categoria.Cargo_CE)"
          label="Selecciona la categoria del Empleado"
          outlined
         ></v-select>
        </v-div>
      </v-div>
        </template>

          <v-div class="button-container flex-column">
            
          <v-btn type="submit" class="button-1 mt-2 btn" depressed color="primary">
            REGISTRAR
            <v-icon  class="mx-1">mdi-account-badge-outline</v-icon>
          </v-btn>

          <v-btn
              depressed
              color="primary"
              class="button-1 mt-2 btn"
              @click="volverMenu">
              Atras
              <v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
            </v-btn>

            <v-btn
              depressed
              color="primary"
              class="button-1 mt-2 btn"
              @click="resetForm">
              Limpiar
              <v-icon class="mx-1">mdi-backup-restore</v-icon>
            </v-btn>

            <v-btn 
            type="submit" 
            class="button-1 mt-2 btn" 
            depressed color="primary">
              AGREGAR CREDENCIALES
            <v-icon class="mx-1">mdi-badge-account-horizontal</v-icon>
            </v-btn>
          </v-div>
          <form name="credencialesEmpleado" @submit.prevent="createCredenciales">
            <v-div class="credenciales">
            <h2 class = "blue--text ">CREDENCIALES DEL EMPLEADO</h2>

            <v-div class="text-field-container_2">
              <v-div class="text-field-wrapper2">
              <v-text-field
                label="DNI EMPLEADO"
                placeholder="Ingresa el DNI del Empleado"
                filled
                v-model="frmCredenciales.DNI_Em"></v-text-field>
              </v-div>

              <v-div class="text-field-wrapper2">
              <v-text-field
                label="Nombre de Usuario"
                placeholder="Ingresa un nombre de usuario"
                filled
                v-model="frmCredenciales.nombreusuario"></v-text-field>
              </v-div>

              <v-div class="text-field-wrapper2">
              <v-text-field
                label="Contraseña"
                placeholder="Ingresa una contraseña"
                filled
                v-model="frmCredenciales.contraseña"></v-text-field>
              </v-div>
            </v-div>
            </v-div>
       
            
            
            
          </form>
        </v-div>
    </form>
  </v-div>
</template>
<style>
.credenciales {
  position: absolute;
  top: 30px;
  right: 0;
  margin-right: 320px;
  margin-top:75px;

}
.empleado {
  margin: 20px;
  max-width: 30%;
  margin-left: 300px;
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
  flex-direction: row;
  flex-direction: column;
  height: 150vh;
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
.text-field-wrapper2 {
  margin-right: 100px;
}
.button-container {
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  top: 110px;
  right: 10px;
}
.button-container_w {
  justify-content: center;
}
.button-row {
  display: flex;
  justify-content: center;
}
.kallpa-image {
  margin-top: 35px;
}
.texto-center {
  text-align: center;
}

.btn {
  margin-bottom: 10px;
  
}


</style>
<script src="./RegistrarEmpleado.js"></script>


