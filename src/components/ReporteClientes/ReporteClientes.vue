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
          <span style="color: #203864"> - CLIENTES</span>
        </h1>
      </v-texto-center>
    </div>

  </div>

  <div>
    <div class="containerRC" style="margin-left: 10px">
      <div class="filtrosRC contenedor-cajas-ERC" >
        <v-card-title style="color: rgb(11, 13, 105); font-size: 24px ;">Filtros</v-card-title>
          
          <v-card-text>

            <div class="contenedor-cajas-ARC" style="margin-top: -5px">
              <p style="color: rgb(40, 180, 40); font-size: 18px;">Selecciona Distrito</p>
              <v-combobox
                v-model="distritoSeleccionado"
                :items="distritos"
                item-text="Nombre_Di"
                item-value="IDDistrito"
                label="Distrito"
                clearable
                solo style="font-family:'Trebuchet MS'">
              </v-combobox>
            </div>

            <div class="contenedor-cajas-ARC" style="margin-top: 15px">
              <p style="color: rgb(40, 180, 40); font-size: 18px;">Estrato Social</p>
              <v-combobox
                v-model="estratoSeleccionado"
                :items="estratos"
                item-text="Descripcion_Estrato"
                item-value="IDEstrato"
                label="Seleccionar Estrato Social"
                clearable
                solo style="font-family:'Trebuchet MS'">
              </v-combobox>
            </div>

          </v-card-text>

          <v-card-actions style="margin-top: -10px">
            <v-btn @click="generarReporte" style="margin-left: 8px;font-family:'Trebuchet MS';width: 191px;background-color: rgb(11, 13, 105); color: #ffffff">Generar Reporte</v-btn>
            <v-btn @click="resetFilters" style="font-family:'Trebuchet MS';width: 191px;background-color: rgb(11, 13, 105); color: #ffffff">Atras</v-btn>
          </v-card-actions>

      </div>
    </div>
  </div>

  <div>
    <div style="margin-left: 460px;margin-right: 433px;" class="contenedor-cajas-FechaRCliente">
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
    <div class="reportecRC">
      <v-container style="margin-right:-754px" class="contenedor-cajas-BC">
        <v-card outlined class="reporteRC">
          <v-card-title style="color:#32CC32; font-size: 24px;">Reporte de Clientes</v-card-title>
            <v-card-text>
              <textarea v-model="reporteContratos" style="margin-top: -5px;height: 370px; width: 369px; font-size: 16px;font-family: 'Segoe UI';padding: 13px;" disabled>{{reporteClientes}}</textarea>
            </v-card-text>
        </v-card>
      </v-container>
    </div>
  </div>

  <div>
    <div class="tablaRC fill-heightRC" style="margin-top: -15px;">
      <v-data-table
						:headers="headers"
						:items="clientes"
						:search="search"
						:loading="loading"
						:items-per-page="5"
						class="custom-tableRC">
            <template v-slot:top>
							<v-toolbar flat>
                <v-card-title style="color: #32CC32; font-size: 30px ;margin-left: -34px;">Lista de Reportes de Clientes</v-card-title>
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
.reporteRC {
  width: 410px;
  padding: 4px;
}
.filtrosRC {
  width: 430px;
  margin-right: auto;
}
.reportecRC {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}
.containerRC {
  display: flex;
  justify-content: flex-end;
}
.contenedor-cajas-ERC {
  border: 4px solid #010361 ;
  padding: 0.1px;
  margin-top: -10px;
  height: 400px;
}
.contenedor-cajas-FechaRCliente {
  border: 4px solid #010361 ;
  padding: 0.1px;
  margin-top: -462px;
  height: 450px;
}
.contenedor-cajas-BC {
  border: 4px solid #0fa14700 ;
  padding: 0.1px;
  margin-top: -464px;
  height: 454px;
  border-radius: 10%;
}
.contenedor-cajas-ARC {
  border: 3px solid #32CC32 ;
  margin-top: 10px;
  padding: 9px;
  height: 112px;
}
.fill-heightRC {
	height: 100%;
}
.tablaRC {
	width: 97%;
  margin-left: 27px;
}
.custom-tableRC thead th {
	background-color: rgb(11, 13, 105);
	color: #ffffff !important;
}
</style>

<script src="./ReporteClientes.js"></script>
