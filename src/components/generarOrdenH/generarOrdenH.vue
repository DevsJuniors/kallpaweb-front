<template>
    <div>
        <v-app-bar color="green accent-4" dense dark>
            <v-toolbar-title>KALLPA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-account-circle</v-icon>
        </v-app-bar>
        <form name="generarOrdenH" @submit.prevent="createOrdenH">
        <div class="spacer"></div>
        <h2 style="text-align: center;">Generar Orden de Habilitación</h2> 
         <div class=" orden">
          <div class="contenedor-cajas my-4">
            <v-text-field
                label="Número de orden"
                placeholder=""
                filled
                :disabled="!TextFieldAble"
                v-model="frmOrdenH.numOrden"
                ></v-text-field>
            <v-select
                v-model="selectedEtapa"
                :items="etapas.map((etapa) => etapa.Descripcion_Et)"
                label="Selecciona la Etapa"
                outlined
            ></v-select>
            <v-text-field
                label="ID Etapa"
                placeholder=""
                filled
                :disabled="!TextFieldAble"
                v-model="frmOrdenH.IDEtapa"
                ></v-text-field>
              </div>
           <h3> Datos Generales </h3>
            <div class="contenedor-cajas my-4">
                <v-text-field
                label="ID Contrato"
                placeholder=""
                filled
                v-model="frmOrdenH.IDContrato"></v-text-field>
                <v-text-field
                label="Número de Suministro"
                placeholder=""
                filled
                v-model="frmOrdenH.numSum"></v-text-field>
                <v-date-picker
                v-model="selectedDate"
                label="Selecciona una fecha"
                min="2023-01-01"
                max="2023-12-31"
                color="green"
                @input="handleDateSelection"
                ></v-date-picker>
                
            </div>
            <h3> Datos del Habilitador</h3>
            <div class="contenedor-cajas my-4">
            <v-text-field
                label="Habilitador"
                placeholder=""
                filled
                :disabled="!Select"
                v-model="frmOrdenH.Nom_Habilitador"></v-text-field>
                <v-text-field
                label="DNI de Habilitador"
                placeholder=""
                filled
                :disabled="!Select"
                v-model="frmOrdenH.DNI_Em"></v-text-field>
                <v-btn
                depressed
                style="background-color: #47d847; color: #ffffff;"
                class="mt-2 mb-4 x-large"
                @click="asignarHabilitador">
                Agregar Habilitador
                <v-icon class="mx-1">mdi-plus</v-icon>
                </v-btn>
            </div>
         </div>
         <v-btn type="submit" class="button-1 mt-2" depressed color="primary">
        Generar Orden
        <v-icon  class="mx-1">mdi-file-plus</v-icon>
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
          <v-dialog v-model="dialogVisible">
            <v-card color="#47d847">
              <v-card-title>
                <span class="mx-auto" style="color: white">¡Orden generada con éxito!</span>
              </v-card-title>
              <v-card-text>
                <v-alert v-if="mensaje !== ''" color="white" type="success" outlined>{{ mensaje }}</v-alert>
              </v-card-text>
              <v-card-actions style="display: flex; justify-content: center">
                <v-btn style="background-color: #033076; color: #ffffff;" @click="asignarMateriales">
                  Asignar Materiales
                  <v-icon class="mx-1">mdi-pencil-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
        </v-dialog>
        </form>
        <v-footer class="green lighten white--text">
      <span  class="custom-text">&copy; 2023 Kallpa Contrasitas y Suministros S.A.C. Todos los derechos reservados.</span>
    </v-footer>
    </div>
</template>
<style>
.spacer {
  margin-top: 20px; /* Ajusta la cantidad de espacio según tus necesidades */
}
.orden {
  margin: 2px;
  max-width: 30%;
}
.contenedor-cajas {
  border: 2px solid #abf5b7;
  padding: 10px;
}

.contenedor-cajas input {
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
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
<script src="./generarOrdenH.js">
</script>

