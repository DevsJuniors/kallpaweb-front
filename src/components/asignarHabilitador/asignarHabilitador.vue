<template>
  <div>
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
    <div style="display: flex; justify-content: center; align-items: center;">
      <h2 style="color: rgba(0, 0, 129, 0.829); margin-right: 10px;font-size: 30px;font-weight: bold">Asignar</h2>
      <h2 style="color: rgb(62, 207, 62);font-size: 30px;font-weight: bold">Habilitador</h2>
    </div>
    <v-container fluid>
      <div class="d-flex flex-grow-1">
        <div class="tabla">
          <v-data-table
            :headers="headers"
            :items="habilitadores"
            :search="search"
            :loading="loading"
            class="elevation-1 custom-table">
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title> Habilitadores</v-toolbar-title>
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
                    @click="seleccionarHabilitador(item)">
                    <v-icon class="mx-1">mdi-arrange-bring-forward</v-icon>
                  </v-btn>
                </td>
              </tr>
            </template>
          </v-data-table>
          <v-btn
            depressed
            color="primary"
            style="display: inline-block; width: 25%"
            class="button-1 mt-2 mb-4 mr-3 x-large "
            @click="limpiar">
            Limpiar
            <v-icon class="mx-1">mdi-backup-restore</v-icon>
          </v-btn>
          <v-btn
            depressed
            color="primary"
            style="display: inline-block; width: 25%"
            class="button-1 mt-2 mb-4 mr-3 x-large"
            @click="volver">
            Atras
            <v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
          </v-btn>
          <v-btn
                depressed
                style="display: inline-block; width: 40%;background-color: #47d847; color: #ffffff"
                class="mt-2 mb-4 x-large mr-3"
                @click="confirmar"
                >
                Asignar Habilitador
                <v-icon class="mx-1">mdi-arrow-right-drop-circle</v-icon>
              </v-btn>
        </div>
        <div class="orden mt-4">
          <h3>Datos del Habilitador</h3>
          <div class="contenedor-cajas">
            <v-container class="text-center">
              <v-icon class="mx-1 border-bien " style="color: rgb(62, 207, 62); font-size: 100px;">mdi-account-eye</v-icon>
            </v-container>
            <v-text-field
              label="DNI "
              placeholder=""
              filled
              :disabled="!Select"
              v-model="frmHabilitador.DNI_Em"
              class="full-width"></v-text-field>
            <v-text-field
              label="Categoria"
              placeholder=""
              filled
              :disabled="!Select"
              v-model="frmHabilitador.IDCategoria"></v-text-field>
            <v-text-field
              label="Nombre"
              placeholder=""
              filled
              :disabled="!Select"
              v-model="frmHabilitador.Nombre_Em"></v-text-field>
            <v-text-field
              label="Apellido"
              placeholder=""
              filled
              :disabled="!Select"
              v-model="frmHabilitador.Apellido_Em"></v-text-field>
            <v-text-field
              label="Celular"
              placeholder=""
              filled
              :disabled="!Select"
              v-model="frmHabilitador.Celular_Em"></v-text-field>
            <div class="text-center">
            </div>
          </div>
          <v-dialog v-model="dialogVisible" :width="500">
            <v-card color="#47d847">
              <v-card-title>
                <span class="mx-auto" style="color: white">
                  Confirmación de Asignación</span
                >
              </v-card-title>
              <v-card-text>
                <v-alert
                  v-if="mensaje !== ''"
                  color="white"
                  type="success"
                  outlined
                  >{{ mensaje }}</v-alert
                >
              </v-card-text>
              <v-card-actions style="display: flex; justify-content: center">
                <v-btn
                  style="background-color: #033076; color: #ffffff"
                  @click="asignar">
                  Aceptar
                </v-btn>
                <v-btn
                  style="background-color: #033076; color: #ffffff"
                  @click="cerrar">
                  Cancelar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogError" :width="500">
            <v-card color="#ec4a4a">
              <v-card-title>
                <span class="mx-auto" style="color: white"> ¡Verifique!</span>
              </v-card-title>
              <v-card-text>
                <v-alert
                  v-if="mensaje !== ''"
                  color="white"
                  :type="typemsg"
                  outlined
                  >
                  {{ mensaje }}</v-alert
                >
              </v-card-text>
              <v-card-actions style="display: flex; justify-content: center">
                <v-btn
                  style="background-color: #033076; color: #ffffff"
                  @click="cerrar">
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script src="./asignarHabilitador.js"></script>
<style>
.tabla {
  flex-grow: 1;
}
.orden {
  margin: 8px;
  flex-grow: 1;
  margin-top: 15px;
}
.button-1 {
  background: #033076;
  color: #ffffff;
  border-color: #232323;
  border-width: 5px;
  border-style: solid;
  border-radius: 2px 2px 2px 2px;
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  margin: 10px;
}
.border-bien {
  border: 3px solid #33cc33;
  padding: 10px;
  display: fixed;
  border-radius: 100px;
}
.contenedor-cajas {
  border: 2px solid #33cc33;
  padding: 10px;
}

.contenedor-cajas input {
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  margin-top: 10px;
}

.elevation-1 {
  width: 100%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.custom-table thead th {
    background-color: #095ba8;
    color: #ffffff !important; 
}
.kallpa-image {
  margin-top: 35px;
}
</style>
