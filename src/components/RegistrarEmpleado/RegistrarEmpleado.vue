<template>
  <div>
    <v-col cols="12" sm="6" md="3">
      <div class="empleado">
        <h2>DATOS DEL EMPLEADO</h2>
        <v-text-field
          label="DNI"
          placeholder="Ingresar documento"
          filled></v-text-field>
        <v-text-field
          label="Nombre"
          placeholder="Ingresar nombre"
          filled></v-text-field>
        <v-text-field
          label="Apellido"
          placeholder="Ingresar apellido"
          filled></v-text-field>
        <v-text-field
          label="Celular"
          placeholder="Ingresar numero de celular"
          filled></v-text-field>
        <v-combobox
          v-model="categoria"
          :items="items"
          label="Categoria"
          multiple
          outlined
          dense></v-combobox>
      </div>
    </v-col>
    <div class="credenciales">
      <h2>CREDENCIALES DEL EMPLEADO</h2>
      <v-text-field
        label="Usuario"
        placeholder="Ingresar nombre de usuario"
        filled></v-text-field>
      <v-text-field
        label="Contraseña"
        placeholder="Ingresar una contraseña segura"
        filled></v-text-field>
    </div>
    <div>
      <v-btn type="submit" class="button-1" depressed color="primary">
        REGISTRAR
      </v-btn>
      <v-btn type="submit" class="button-1" depressed color="primary">
        LIMPIAR
      </v-btn>
    </div>
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
