<template>
<div>
  <div>

    <v-app-bar color="white" dense dark height="80">

      <v-toolbar-title>
        <v-img
          src="../../views/Img/Kallpa.png"
          max-height="300"
          max-width="200"
          class="kallpa-image">
        </v-img>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-img
        src="../../views/Img/usuario (3).png"
        max-height="100"
        max-width="50">
      </v-img>

    </v-app-bar>

    <v-footer color="#33cc33" app height="60">
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center white--text">
          &copy; 2023 KALLPA. Todos los derechos reservados.
        </v-col>
      </v-row>
    </v-footer>

    <div style="margin-top: 10px">
      <v-texto-center>
        <h1 class="text-center" style="font-family:'Trebuchet MS'" >
          <span style="color: #32CC32">REPORTE</span>
          <span style="color: #203864"> - ORDENES</span>
        </h1>
      </v-texto-center>
    </div>

  </div>

  <div>
    <div class="containerRO" style="margin-left: 10px">
      <div class="filtrosO contenedor-cajas-EO">
        <v-card-title style="color: rgb(11, 13, 105); font-size: 24px ;">Filtros</v-card-title>

          <v-card-text>
            <p style="margin-top: -20px;">Fecha</p>
              <v-row>
                <v-col cols="12" sm="12">
                  <v-date-picker v-model="start" color="#32CC32" style="margin-left: 16px;margin-top: -10px;"></v-date-picker>
                </v-col>
              </v-row>
          </v-card-text>

          <v-card-actions style="margin-top: -17px">
            <v-btn @click="generarReporte" style="font-family:'Trebuchet MS';width: 164px;background-color: rgb(11, 13, 105); color: #ffffff">Generar Reporte</v-btn>
            <v-btn @click="reporte" style="font-family:'Trebuchet MS';width: 164px;background-color: rgb(11, 13, 105); color: #ffffff">Atras</v-btn>
          </v-card-actions>

      </div>
    </div>
  </div>

  <div>
    <div class="reportecRO">
      <v-container style="margin-right: 15px;" class="contenedor-cajas-BO">
        <v-card outlined class="reporteO">
          <v-card-title style="color:rgb(40, 180, 40); font-size: 24px;">Reporte de Ordenes</v-card-title>
          <v-card-text>
            <textarea v-model="reporteOrdenes" style="margin-top: -5px;height: 425px; width: 350px; font-size: 16px;font-family: 'Segoe UI';padding: 13px;" disabled></textarea>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>

  <div>
    <div class="tablaO fill-heightRO">
      <v-data-table
						:headers="headers"
						:items="clientes"
						:search="search"
						:loading="loading"
						:items-per-page="5"
						class="custom-tableRO">
            <template v-slot:top>
							<v-toolbar flat>
                <v-card-title style="color: #32CC32; font-size: 30px ;margin-left: -33px;">Lista de Reportes de Clientes</v-card-title>
								<v-spacer></v-spacer>

							  <v-text-field
								  v-model="search"
								  append-icon="mdi-magnify"
								  label="Buscar"
								  single-line
								  hide-details>
                </v-text-field>
							</v-toolbar>
						</template>
            <template v-slot:item="{item}">
							<tr>
                
              </tr>
            </template>
      </v-data-table>
    </div>
  </div>

</div>
</template>

<style>
.reporteO {
  width: 390px;
  padding: 4px;
}
.filtrosO {
  width: 360px;
  margin-right: auto;
}
.reportecRO {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}
.containerRO {
  display: flex;
  justify-content: flex-end;
}
textarea {
  width: 100%;
  height: 100%;
  resize: none;
  border: none;
  font-family: Arial, sans-serif;
  font-size: 14px;
  color: #333;
  background-color: #f5f5f5;
}
.text-center {
  text-align: center;
}
.kallpa-image {
  margin-top: 35px;
}
.contenedor-cajas-EO {
  border: 4px solid #010361 ;
  padding: 0.1px;
  margin-top: 1px;
  height: 505px;
}
.contenedor-cajas-BO {
  border: 4px solid #0fa14700 ;
  padding: 0.1px;
  margin-top: -551px;
  height: 513px;
  border-radius: 10%;
}
.fill-heightRO {
	height: 100%;
}
.tablaO {
	width: 46%;
  margin-left: 397px;
  margin-top: -556px;
}
.custom-tableRO thead th {
	background-color: rgb(11, 13, 105);
	color: #ffffff !important;
}
</style>
<script src="./ReporteOrdenes.js"></script>
