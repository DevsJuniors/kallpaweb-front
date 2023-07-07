<template>
  <div>
    <v-app-bar color="white" dense dark height="100">
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
    <div class="spacer"></div>
    
    <div style="display: flex; justify-content: center; align-items: center;">
      <h2 style="color: rgba(0, 0, 129, 0.829); margin-right: 10px;font-size: 30px;font-weight: bold">Registro de</h2>
      <h2 style="color: rgb(62, 207, 62);font-size: 30px;font-weight: bold">Empleados</h2>
    </div>
    <v-container fluid>
      <div class="d-flex flex-grow-1">
        <div class="empleado">
          <h3>Datos Generales</h3>
          <div class="contenedor-cajas">
            <v-text-field
              label="DNI"
              placeholder="Ingresa el IDGenero"
              filled
              :disabled="!TextFieldAble"
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
              outlined></v-select>
            <v-btn
              depressed
              style="background-color: #47d847; color: #ffffff"
              class="mt-2 mb-4 x-large"
              @click="createEmpleado">
              REGISTRAR
              <v-icon class="mx-1">mdi-account-badge-outline</v-icon>
            </v-btn>
          </div>
          <v-dialog v-model="dialogVisible" :width="500">
            <v-card color="#47d847">
              <v-card-title>
                <span class="mx-auto" style="color: white"
                  >¡Registrado con Exito!</span
                >
              </v-card-title>
              <v-card-text>
                <v-alert
                  v-if="mensaje !== ''"
                  color="white"
                  :type="typemsg"
                  outlined
                  >{{ mensaje }}</v-alert
                >
              </v-card-text>
              <v-card-actions style="display: flex; justify-content: center">
                <v-btn
                  style="background-color: #033076; color: #ffffff"
                  @click="aceptar">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div class="tabla fill-height">
          <v-data-table
            :headers="headers"
            :items="empleados"
            :search="search"
            :loading="loading"
            :items-per-page="5"
            class="custom-table">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title> Lista de Empleados</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details></v-text-field>
              </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
              <tr>
                <td>{{ item.DNI_Em }}</td>
                <td>{{ item.IDCategoria }}</td>
                <td>{{ item.Nombre_Em }}</td>
                <td>{{ item.Apellido_Em }}</td>
                <td>{{ item.Celular_Em }}</td>
                <td>
                  {{ item.Seleccionar }}
                  <v-btn
                    small
                    color="primary"
                    @click="seleccionarEmpleado(item)">
                    <v-icon class="mx-1">mdi-arrange-bring-forward</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
          <div class="contenedor-cajas-E my-4">
            <h3 style="color: #47d847; text-align: center">Credenciales</h3>
            <v-text-field
              label="DNI EMPLEADO"
              placeholder="Ingresa el DNI del Empleado"
              filled
              :disabled="!TextFieldAble"
              style="display: inline-block; width: 18%; margin-right: 8px"
              v-model="frmCredenciales.DNI_Em"></v-text-field>
            <v-text-field
              label="Nombre de Usuario"
              placeholder="Ingresa un nombre de usuario"
              filled
              :disabled="!TextFieldAble"
              style="display: inline-block; width: 25%; margin-right: 8px"
              v-model="frmCredenciales.nombreusuario"></v-text-field>
            <v-text-field
              label="Contraseña"
              placeholder="Ingresa una contraseña"
              filled
              :disabled="!TextFieldAble"
              style="display: inline-block; width: 25%; margin-right: 8px"
              v-model="frmCredenciales.contraseña"></v-text-field>
            <v-btn
              depressed
              style="
                background-color: #47d847;
                color: #ffffff;
                display: inline-block;
                width: 25%;
              "
              class="mt-2 mb-4 x-large"
              @click="createCredenciales">
              AGREGAR CREDENCIALES
              <v-icon class="mx-1">mdi-badge-account-horizontal</v-icon>
            </v-btn>
          </div>
          <v-dialog v-model="dialogError" :width="500">
            <v-card color="#ec4a4a">
              <v-card-title>
                <span class="mx-auto" style="color: white"> ¡Verifique! </span>
              </v-card-title>
              <v-card-text>
                <v-alert
                  v-if="mensaje !== ''"
                  color="white"
                  :type="typemsg"
                  outlined
                  >{{ mensaje }}</v-alert
                >
              </v-card-text>
              <v-card-actions style="display: flex; justify-content: center">
                <v-btn
                  style="background-color: #033076; color: #ffffff"
                  @click="cerrar">
                  cerrar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-btn
            depressed
            color="primary"
            class="button-1 mt-2"
            @click="updateCliente">
            Actualizar
            <v-icon class="mx-1">mdi-account-edit</v-icon>
          </v-btn>
          <v-btn
            depressed
            color="primary"
            class="button-1 mt-2"
            @click="volverMenu">
            Eliminar
            <v-icon class="mx-1">mdi-delete-empty</v-icon>
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
        </div>
      </div>
    </v-container>
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
  border: 2px solid #47d847;
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
.kallpa-image {
  margin-top: 35px;
}
</style>
<script src="./RegistrarEmpleado.js"></script>
