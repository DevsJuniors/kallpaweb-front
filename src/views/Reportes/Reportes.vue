<template>

  <div >
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
    <div>
      <div style="display: flex; justify-content: center; align-items: center;">
      <h2 style="color: rgba(0, 0, 129, 0.829); margin-right: 10px;font-size: 35px;font-weight: bold">Reporte -</h2>
      <h2 style="color: rgb(62, 207, 62);font-size: 35px;font-weight: bold">General</h2>
    </div>
    </div>
  </div>
  
        <!-- CONTENEDOR  -->
         <!-- CONTEDOR DE LOS CALENDARIOS  -->
  <div>
         <div class="contenedor-cajas-F" style="margin-top: 24px; margin-left: 25px; width: 1470px;">
          <v-container style="margin-left: -580px">
            
            <v-date-picker v-model="end" color="#32CC32" class="custom-date-picker" style="margin-right: 10px;"></v-date-picker>
            <v-date-picker v-model="end" color="#32CC32" class="custom-date-picker"></v-date-picker>
        
        </v-container>
        </div>
        </div>
      <!-- FIN CONTEDOR DE LOS CALENDARIOS  -->
      <!-- CONENEDOR PASTEL  -->
      <div>
          <v-container style="margin-top: -370px; margin-left: -280px;">
          <div>
                <v-card >
                  <v-card-title style="font-size: 12px;"
                    >Gráfico de Torta: Contratos por Estado</v-card-title
                  >
                  <v-card-text style="height: 200px; width: 200px;">
                    <Pie
                      v-if="pieChartData.labels.length"
                      :data="pieChartData"
                      :options="chartOptions"
                      :key="chartKeyPie" />
                  </v-card-text>
                </v-card>
              </div>
            </v-container>
          </div>
            <!-- FIN CONTEDOR PASTEL -->
            <!-- CONTENEDOR DE BARRAS -->
            <div>
            <v-container style="margin-top: -310px; margin-left: 200px;">
             <!--habia v-row-->             
              <div style="margin-right: 160px;" class="ms-2">
                <Bar
                  :key="chartKey"
                  :options="chartOptions"
                  :data="chartData"></Bar>
              </div>
              <!-- FIN CONTENEDOR DE BARRAS -->
          </v-container>
         </div>
         <!-- es otro-->
         <div>
          <v-container style="margin-top: -258px; margin-right: 30px;">
        <div  class="contenedor-cajas-E">
        <v-card-title style="color: rgb(11, 13, 105);font-size: 14px;"> Conteo de Contratos por Estado </v-card-title>
        <v-card-text>
          <v-list dense>
            <v-list-item
              v-for="(cantidad, estado) in conteoContratos"
              :key="estado">
              <v-list-item-content>
                <v-list-item-title>
                  {{ estado }}: {{ cantidad }} contratos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
      </div>
    </v-container>
    </div>
        
        <!-- FIN CONTEDOR  -->
        
       
          
    <div>
      <div style="margin-top: 170px;" class="tabla fill-height">
      <v-data-table
        :headers="headers"
        :items="contratosFiltrados"
        item-key="IDContrato"
        class="elevation-1 custom-table">
        <template slot="top"
          >
        </template>
      </v-data-table>
    </div>
    </div>

       <div>
        <v-container style="margin-left: 50px;">
  <v-btn class="btn-mover" style="font-family: 'Trebuchet MS'; width: 178px; background-color: rgb(11, 13, 105); color: #ffffff" @click="generarReporte">Generar Reporte</v-btn>
  <v-btn class="btn-mover" style="font-family: 'Trebuchet MS'; width: 178px; background-color: rgb(11, 13, 105); color: #ffffff" @click="reporteContrato">Reporte Contratos</v-btn>
  <v-btn class="btn-mover" style="font-family: 'Trebuchet MS'; width: 178px; background-color: rgb(11, 13, 105); color: #ffffff" @click="reporteCliente">Reporte Clientes</v-btn>
  <v-btn class="btn-mover" style="font-family: 'Trebuchet MS'; width: 178px; background-color: rgb(11, 13, 105); color: #ffffff" @click="reporteOrdenes">Reporte Ordenes</v-btn>
  <v-btn class="btn-mover" style="font-family: 'Trebuchet MS'; width: 178px; background-color: rgb(11, 13, 105); color: #ffffff" @click="menu">Atras</v-btn>
</v-container>

    </div>

    </div>
  

</template>
<style>
.btn-mover + button {
  margin-left: 10px; /* Ajusta el valor según el espacio que desees */
}

.v-sheet--offset {
  top: -24px;
  position: relative;
}
.custom-table thead th {
    background-color:  rgb(11, 13, 105);
    color: #ffffff !important;
     
}
.fill-height {
  height: 100%;
}
.tabla {
  width: 97%;
  margin-left: 27px ;
  margin-top: 140px;
}
.contenedor-cajas {
  border: 2px solid #208120;
  padding: 10px;
}
.kallpa-image {
  margin-top: 35px;
}
.contenedor-cajas-E {
  border: 2px solid #011761;
  padding: 2px;
  display: inline-block;
  width: 245px;
}


.custom-date-picker {
 
  width: 40%; /* Define el ancho deseado */
 
}

.custom-date-2{
  margin-left: 40px; /* Ajusta el valor según el espacio que desees */
}
.contenedor-cajas-F {
  border: 4px solid #1a8823 ;
  padding: 10px;
  margin-top: -341px;
  height: 150%;
  width: 99%;
 
}

@media (min-width: 600px) {
  .custom-date-picker {
    max-width: none;
    flex-basis: 0;
  }
}


</style>
<script src="./Reportes"></script>
