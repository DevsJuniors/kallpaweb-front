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
        <h1 class="text-center" style="font-family:'Trebuchet MS';" >
          <span style="color: #32CC32">REPORTE</span>
          <span style="color: #203864"> - CONTRATO</span>
        </h1>
      </v-texto-center>
    </div>

  </div>

  <div>
    <div class="containerRCo" style="margin-left: 10px">
      <div class="filtrosRCo contenedor-cajas-ERCO" >
        <v-card-title style="color: rgb(11, 13, 105); font-size: 24px ;">Filtros</v-card-title>
          
        <v-card-text>

          <div class="contenedor-cajas-ARCO" style="margin-top: -5px;height: 200px;">
            <p style="color: rgb(40, 180, 40); font-size: 18px;">Estado Contrato</p>
            <v-radio-group v-model="estadoSeleccionado">
              <v-radio
                v-for="estado in estadosContratos"
                :key="estado"
                :label="estado"
                :value="estado">
              </v-radio>
            </v-radio-group>
          </div>

          <div class="contenedor-cajas-ARCO">
            <p style="color: rgb(40, 180, 40); font-size: 18px;">Asesor</p>
            <v-combobox
              v-model="empleadoSeleccionado"
              :items="empleadosCategoria1"
              item-text="nombreCompleto"
              item-value="DNI_Em"
              label="Seleccionar Asesor"
              clearable
              solo>
            </v-combobox>
          </div>

        </v-card-text>

        <v-card-actions style="margin-top: -10px">
          <v-btn @click="generarReporte" style="margin-left: 10px;font-family:'Trebuchet MS';width: 189px;background-color: rgb(11, 13, 105); color: #ffffff">Generar Reporte</v-btn>
          <v-btn @click="reporte" style="font-family:'Trebuchet MS';width: 189px;background-color: rgb(11, 13, 105); color: #ffffff">Atras</v-btn>
        </v-card-actions>

      </div>
    </div>
  </div>

  <div>
    <div style="margin-left: 460px;margin-right: 433px;" class="contenedor-cajas-FechaRC">
      <v-card-title style="color: rgb(11, 13, 105); font-size: 24px ;">Fecha</v-card-title>
        <v-row style="margin-top: -17px;">
          <v-col cols="12" sm="6">
            <v-date-picker v-model="start" color="#32CC32" style="margin-left: 15px;"></v-date-picker>
          </v-col>
          <v-col cols="12" sm="6">
            <v-date-picker v-model="end" color="#32CC32"></v-date-picker>
          </v-col>
        </v-row>
    </div>
  </div>

  <div>
    <div class="reportecRCo">
      <v-container style="margin-right:8px" class="contenedor-cajas-BCO">
        <v-card outlined class="reporteRCo">
          <v-card-title style="color:#32CC32; font-size: 24px;">Reporte de Contrato</v-card-title>
            <v-card-text>
              <textarea v-model="reporteContratos" style="margin-top: -5px;height: 370px; width: 369px; font-size: 16px;font-family: 'Segoe UI';padding: 13px;" disabled></textarea>
            </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>

  <div>
    <div class="tablaRCO fill-heightRCO" style="margin-top: -15px;">
      <v-data-table
						:headers="headers"
						:items="contratos"
						:search="search"
						:loading="loading"
						:items-per-page="5"
						class="custom-tableRCO">
            <template v-slot:top>
							<v-toolbar flat>
                <v-card-title style="color: #32CC32; font-size: 30px ;margin-left: -34px;">Lista de Reporte de Contratos</v-card-title>
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
.reporteRCo {
  width: 410px;
  padding: 4px;
}
.filtrosRCo {
  width: 430px;
  margin-right: auto;
}
.reportecRCo {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}
.containerRCo {
  display: flex;
  justify-content: flex-end;
}
.contenedor-cajas-ERCO {
  border: 4px solid #010361 ;
  padding: 0.1px;
  margin-top: 1px;
  height: 450px;
}
.contenedor-cajas-FechaRC {
  border: 4px solid #010361 ;
  padding: 0.1px;
  margin-top: -462px;
  height: 450px;
}
.contenedor-cajas-BCO {
  border: 4px solid #0fa14700 ;
  padding: 0.1px;
  margin-top: -470px;
  height: 457px;
  border-radius: 10%;
}
.contenedor-cajas-ARCO {
  border: 3px solid #32CC32 ;
  margin-top: 10px;
  padding: 9px;
  height: 110px;
}
.fill-heightRCO {
	height: 100%;
}
.tablaRCO {
	width: 1481px;
  margin-left: 25px;
}
.custom-tableRCO thead th {
	background-color: rgb(11, 13, 105);
	color: #ffffff !important;
}
</style>
<script src="./ReporteContrato.js"></script>
