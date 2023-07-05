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
        v-model="searchID"
        style="display: inline-block; width: 24%;margin-right: 10px;"
        @input="llenarCampos"></v-text-field>
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
        label="Asignar estado"
        solo
        style="display: inline-block; width: 24%;margin-right: 10px;"
        v-model="estado"></v-combobox>
       </div>
       </div>
       <div class="contenedor-cajas-A">
        <v-btn  depressed 
                style="background-color: #47d847; color: #ffffff; display: inline-block; width: 23%"
                class="mx-2  mt-2 mb-4 x-large" @click="actualizarEstado"
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
