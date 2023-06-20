<template>
  <div>
    <form name="registrarEmpleado" @submit.prevent="createEmpleado">
      <div class="empleado">
        <h2>Guardar Genero</h2>
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
        <v-text-field
          label="Categoria"
          placeholder="Ingresa la categoria"
          filled
          v-model="frmEmpleado.IDCategoria"></v-text-field>
        <div>
          <v-btn type="submit" class="button-1" depressed color="primary">
            REGISTRAR
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
            <v-btn type="submit" class="button-1" depressed color="primary">
              AGREGAR CREDENCIALES
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
