<template>
  <div >
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
      <h2 style="color: rgba(0, 0, 129, 0.829); margin-right: 10px;font-size: 40px;font-weight: bold">General -</h2>
      <h2 style="color: rgb(62, 207, 62);font-size: 40px;font-weight: bold">Reporte</h2>
    </div>
    </div>
  <div>
        <!-- CONTENEDOR  -->
         <!-- CONTEDOR DE LOS CALENDARIOS  -->
         <v-container>
        <v-container>
          <v-row>
          <v-col cols="10" sm="6">
                <v-date-picker v-model="start"></v-date-picker>
                </v-col>
                <v-col cols="10" sm="6">
                <v-date-picker v-model="end"></v-date-picker>
          </v-col>
        </v-row>
      </v-container>
      <!-- FIN CONTEDOR DE LOS CALENDARIOS  -->
      <!-- CONENEDOR PASTEL  -->
          <v-container>
          <div class="ms-16">
                <v-card>
                  <v-card-title
                    >Gráfico de Torta: Contratos por Estado</v-card-title
                  >
                  <v-card-text>
                    <Pie
                      v-if="pieChartData.labels.length"
                      :data="pieChartData"
                      :options="chartOptions"
                      :key="chartKeyPie" />
                  </v-card-text>
                </v-card>
              </div>
            </v-container>
            <!-- FIN CONTEDOR PASTEL -->
            <!-- CONTENEDOR DE BARRAS -->
            <v-container>
            <v-row>
              
              <div class="mt-2">
                <Bar
                  :key="chartKey"
                  :options="chartOptions"
                  :data="chartData"></Bar>
              </div>
              <!-- FIN CONTENEDOR DE BARRAS -->
            </v-row>
          </v-container>
        </v-container>
        <!-- FIN CONTEDOR  -->
        
       
          
    <div class="tabla fill-height">
      
      <v-data-table
        :headers="headers"
        :items="contratosFiltrados"
        item-key="IDContrato"
        class="elevation-1 custom-table">
        <template slot="top"
          >
        </template>
      </v-data-table>

      
      <v-card>
        <div class="contenedor-cajas-E">
        <v-card-title style="color:rgb(17, 4, 90);font-size: 20px;"> Conteo de Contratos por Estado </v-card-title>
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
      </v-card>
      

      <v-btn color="primary" @click="generarReporte">Generar Reporte</v-btn>
      <v-btn color="primary" @click="reporteContrato">Reporte Contratos</v-btn>
      <v-btn color="primary" @click="reporteCliente">Reporte Clientes</v-btn>
      <v-btn color="primary" @click="reporteOrdenes">Reporte Ordenes</v-btn>
      <v-btn color="primary" @click="menu">Atras</v-btn>
    </div>
  </div>
</div>
</template>
<style>
.v-sheet--offset {
  top: -24px;
  position: relative;
}
.custom-table thead th {
    background-color: #095ba8;
    color: #ffffff !important; 
}
.fill-height {
  height: 100%;
}
.tabla {
  width: 100%;
}
.contenedor-cajas {
  border: 2px solid #47d847;
  padding: 10px;
}
.kallpa-image {
  margin-top: 35px;
}
.contenedor-cajas-E {
  border: 2px solid #011761 ;
  padding: 100px;
}


</style>
<script src="./Reportes"></script>
