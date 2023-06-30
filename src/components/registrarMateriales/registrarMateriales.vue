<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <form>
    <h2 style="text-align: center;">Asignar Materiales</h2>
            <div class="contenedor-cajas ">
            <h3 style="color: #47d847;"> Especificaciones de Contrato </h3>
              <div class="d-flex">
              <v-text-field
                class="mr-3"
                label="ID Contrato"
                placeholder=""
                filled
                :disabled="!TextFieldAble"
                style="color: white"
                v-model="frmMateriales.IDContrato"></v-text-field>
              <v-text-field
                class="mr-3"
                label="Fecha de Orden"
                placeholder=""
                filled
                :disabled="!TextFieldAble"
                style="color: white"
                v-model="frmMateriales.Fecha_O"></v-text-field>
              <v-text-field
                label="ID Etapa"
                placeholder=""
                filled
                :disabled="!TextFieldAble"
                style="color: white"
                v-model="frmMateriales.IDEtapa"></v-text-field>
                </div>
            </div>
    <v-container fluid>
      <div class="d-flex flex-grow-1">
        <div class="Materiales mt-4">
        <h3> Registrar Materiales </h3>
            <div class="contenedor-cajas-1 ">
              <v-select
               v-model="selectedMateriales"
              :items="materiales.map((material) => material.Nombre_Ma)"
              label="Selecciona el material"
              outlined
              :disabled="!Select"
              ></v-select>
         <v-text-field
          label="Cantidad"
          type="number"
          v-model="frmMateriales.Cantidad_De"
          :min="minValue"
          :max="maxValue"
          ></v-text-field>
          <v-btn
                depressed
                style="background-color: #47d847; color: #ffffff;"
                class="mt-2 mb-4 x-large mr-2"
                @click="agregar">
                Añadir
                <v-icon class="mx-1">mdi-plus-circle</v-icon>
                </v-btn>
            <v-btn
                depressed
                style="background-color: #47d847; color: #ffffff;"
                class="mt-2 mb-4 x-large mr-2"
                @click="actualizar">
                Actualizar
                <v-icon class="mx-1">mdi-lead-pencil</v-icon>
            </v-btn>
            <v-btn
                depressed
                style="background-color: #47d847; color: #ffffff;"
                class="mt-2 mb-4 x-large"
                @click="eliminar">
                Eliminar
                <v-icon class="mx-1">mdi-delete-empty</v-icon>
            </v-btn>
          </div>
          </div>
        <div class="tabla fill-height">
          <v-data-table 
          :headers="headers" 
          :items="materialesTE" 
          >
          <template v-slot:item="{item}">
                <tr>
                <td>{{ item.IDMateriales }}</td>
                <td>{{ item.Nombre_Ma }}</td>
                <td>{{ item.Cantidad_De }}</td>
                <td>{{ item.Seleccionar}}
                        <v-btn small color="primary" @click="seleccionarItem(item)">
                        <v-icon class="mx-1">mdi-eye-settings</v-icon>
                        </v-btn>
                </td>
                </tr>
            </template>
            </v-data-table>
            <v-btn class="button-1" depressed color="primary" @click="createMateriales">
           Asignar Materiales
           <v-icon class="mx-1">mdi-arrow-right-drop-circle</v-icon>
          </v-btn>
          <v-btn class="button-1" depressed color="primary" @click="limpiar">
          Limpiar
          <v-icon class="mx-1">mdi-backup-restore</v-icon>
          </v-btn>
          </div>
      </div>
      
    </v-container>
    <v-dialog v-model="dialogVisible">
            <v-card color="#47d847">
                <v-card-title>
                <span class="mx-auto" style="color: white">¡Registro de Materiales Éxitoso!</span>
                </v-card-title>
                <v-card-text>
                <v-alert :value="true" color="white" type="success" outlined>{{ mensaje }}</v-alert>
                </v-card-text>
                <v-card-actions style="display: flex; justify-content: center">
                <v-btn style="background-color: #033076; color: #ffffff;" @click="volver">
                  Cerrar
                  <v-icon class="mx-1">mdi-pencil-plus</v-icon>
                </v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
    </form>
   </div>
</template>
<style>
.Materiales {
  margin: 20px;
  max-width: 100%;
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

.contenedor-cajas {
  border: 2px solid #96ff96;
  padding: 10px;
  background-color: #f5f5f5 ;
  margin-left: 15px;
  margin-right: 15px;

}
.contenedor-cajas-1{
  border: 2px solid #abf5b7;
  padding: 10px;
  background-color: #fefffe;
}
.contenedor-cajas input {
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
  margin-top: 10px;
}

.fill-height {
  height: 100%;
}

.tabla {
  width: 100%;
}
</style>
<script src="./registrarMateriales.js"></script>
