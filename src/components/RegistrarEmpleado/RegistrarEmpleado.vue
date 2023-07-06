<template>
  <div>
    <form name="registrarEmpleado" @submit.prevent="createEmpleado">
      <div class="empleado">
        <h2>DATOS GENERALES DEL EMPLEADO</h2>
        <br />
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
          <form
            name="credencialesEmpleado"
            @submit.prevent="createCredenciales">
            <div class="credenciales">
              <h2>CREDENCIALES DEL EMPLEADO</h2>
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
.custom-table thead th {
    background-color: #095ba8;
    color: #ffffff !important; 
}
.contenedor-cajas {
  border: 2px solid #47d847;
  padding: 10px;
}
.contenedor-cajas-E {
  border: 2px solid #47d847 ;
  padding: 10px;
}
.contenedor-cajas input {
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
}
.fill-height {
  height: 100%;
}
.tabla {
  width: 100%;
}
.custom-text {
  font-size: 12px; /* Modifica el tamaño de letra según tus necesidades */
}
.credenciales {
  position: absolute;
  top: 60px;
  right: 0;
  margin-right: 50px;
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

