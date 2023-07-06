<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
      <div class="spacer"></div>
      <h2 style=" text-align: center;"> Evaluación de contratos</h2> 
    <v-container fluid>
      <div class="d-flex flex-grow-1">
      <v-data-table
      :headers="headers"
      :items="contratosFiltrados"
      item-key="IDContrato"
      class="custom-table">
      <template slot="top">
        <h3>Filtros de contratos</h3>
        <div class="contenedor-cajas">
        <v-text-field
          v-model="search"
          label="Buscar por ID"
          style="display: inline-block; width: 26%;margin-right: 10px;"
          solo></v-text-field>
        <v-combobox
          v-model="searchE"
          style="display: inline-block; width: 35%;margin-right: 10px;"
          :items="[
            'Ningún Estado',
            ...contratos.map((contrato) => contrato.estado),
          ]"
          label="Buscar por estado"
          solo></v-combobox>
        <v-text-field
          v-model="searchF"
          style="display: inline-block; width: 36%;margin-right: 10px;"
          label="Buscar por Fecha"
          solo></v-text-field>
        </div>
      </template>
      <template v-slot:item="{item}">
              <tr>
                <td>{{ item.IDContrato }}</td>
                <td>{{ item.Fecha_Con}}</td>
                <td>{{ item.NumeroRadicado_Con }}</td>
                <td>{{ item.numSum }}</td>
                <td>{{ item.PuntoInstalacion_Con }}</td>
                <td>{{ item.estado }}</td>
                <td>{{ item.IDGabineteCategoria }}</td>
                <td>{{ item.IDTipoInst }}</td>
                <td>{{ item.DNI_cli }}</td>
                <td>{{ item.DNI_Em }}</td>
                <td>{{ item.Seleccionar}}
                        <v-btn small color="primary" @click="seleccionarContrato(item)">
                        <v-icon class="mx-1">mdi-arrange-bring-forward</v-icon>
                        </v-btn>
                </td>
                </tr>
            </template>
    </v-data-table>
     </div>
    </v-container>

    <v-container fluid>
       <div class="cliente">
           <h3>Campos del contrato seleccionado</h3>
            <div class="contenedor-cajas-E">
      <v-text-field
        label="ID Contrato"
        solo
        disabled
        v-model="IDContrato"
        style="display: inline-block; width: 24%;margin-right: 10px;"
        ></v-text-field>
      <v-text-field
        label="Numero Suministro"
        solo
        disabled
        style="display: inline-block; width: 24%;margin-right: 10px;"
        v-model="numSum"></v-text-field>
      <v-text-field
        label="DNI Cliente"
        solo
        disabled
        style="display: inline-block; width: 24%;margin-right: 10px;"
        v-model="DNI_cli"></v-text-field>
      <v-combobox
        :items="estadosA"
        label="Estado de contrato"
        solo
        style="display: inline-block; width: 24%;margin-right: 10px;"
        v-model="selectedEstado"></v-combobox>
       </div>
       </div>
       <div class="contenedor-cajas-A">
        <v-btn  depressed 
                style="background-color: #47d847; color: #ffffff; display: inline-block; width: 23%"
                class="mx-2  mt-2 mb-4 x-large" @click="confirmar"
                >Actualizar Estado
                <v-icon class="mx-1">mdi-border-color</v-icon></v-btn>
        <v-btn  depressed 
                 style="background-color: #47d847; color: #ffffff;display: inline-block; width: 23%"
                class="mx-2  mt-2 mb-4 x-large" @click="limpiar"
               >Limpiar Campos
               <v-icon class="mx-1">mdi-cookie-settings-outline</v-icon></v-btn>
        <v-btn  depressed 
                style="background-color: #47d847; color: #ffffff;display: inline-block; width: 23%"
                class="mx-2  mt-2 mb-4 x-large" @click="volverMenu"
                >Volver a Menú 
                <v-icon class="mx-1">mdi-home-analytics</v-icon></v-btn>
        <v-dialog v-model="dialogVisible" :width="500">
                    <v-card color="#47d847">
                      <v-card-title>
                        <span class="mx-auto" style="color: white"> Confirmación de Modificación</span>
                      </v-card-title>
                      <v-card-text>
                        <v-alert v-if="mensaje !== ''" color="white" type="success" outlined>{{ mensaje }}</v-alert>
                      </v-card-text>
                      <v-card-actions style="display: flex; justify-content: center">
                        <v-btn style="background-color: #033076; color: #ffffff;" @click="updateContrato">
                          Aceptar
                        </v-btn>
                        <v-btn style="background-color: #033076; color: #ffffff;" @click="cerrar">
                          Cancelar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                </v-dialog>
            <v-dialog v-model="dialogError" :width="500">
                    <v-card color="#ec4a4a">
                      <v-card-title>
                        <span class="mx-auto" style="color: white">  ¡Verifique!</span>
                      </v-card-title>
                      <v-card-text>
                        <v-alert v-if="mensaje !== ''" color="white" type="success" outlined icon="mdi-close-circle">
                         {{ mensaje }}</v-alert>
                      </v-card-text>
                      <v-card-actions style="display: flex; justify-content: center">
                        <v-btn style="background-color: #033076; color: #ffffff;" @click="cerrar">
                          Aceptar
                        </v-btn>
                      </v-card-actions>
                    </v-card>
                </v-dialog>
       </div>
    </v-container>
  </div>
</template>
<style>
.cliente {
  margin: 20px;
  max-width: 100%;
}
.contenedor-cajas-E{
  border: 2px solid #47d847;
  padding: 10px;
}
.contenedor-cajas-A{
  border: 2px solid #ffffff;
  padding: 10px;
}
.contenedor-cajas {
  outline: 2px;
  border: 2px solid #095ba8;
  padding: 10px;
}
.custom-table thead th {
    background-color: #095ba8;
    color: #ffffff !important; 
}
</style>

<script src="./EvaluarContrato.js"></script>
