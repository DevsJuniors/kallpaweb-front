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
      <h2 style="color: rgba(0, 0, 129, 0.829); margin-right: 10px;font-size: 40px;font-weight: bold">Reporte -</h2>
      <h2 style="color: rgb(62, 207, 62);font-size: 40px;font-weight: bold">Contrato</h2>
    </div>
    </div>

  <!-- CONTENEDOR DE FILTROS - ASESOR-->
  
  <div class="container">
    <div class="filtros contenedor-cajas-E " >
          <v-card-title style="color: rgb(11, 13, 105); font-size: 30px ;">Filtros</v-card-title>
          <v-card-text>
            <!--CONTENEDOR DE ESTRATO-->
            <div class="contenedor-cajas-A " >
            <p style="color: rgb(4, 90, 15); font-size: 18px;">Estado Contrato</p>
            <v-radio-group v-model="estadoSeleccionado">
              <v-radio
                v-for="estado in estadosContratos"
                :key="estado"
                :label="estado"
                :value="estado"></v-radio>
            </v-radio-group>
            </div>
            <!-- FIN CONTENEDOR ESTRATO-->
            <div class="contenedor-cajas-A " >
            <p style="color:rgb(4, 90, 15);font-size: 18px;">Asesor</p>
            <v-combobox
              v-model="empleadoSeleccionado"
              :items="empleadosCategoria1"
              item-text="nombreCompleto"
              item-value="DNI_Em"
              label="Seleccionar Asesor"
              clearable
              solo></v-combobox>
            </div>        
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" @click="generarReporte"
              >Generar Reporte</v-btn
            >
            <v-btn color="primary" @click="reporte">Atras</v-btn>
          </v-card-actions> 
               
    </div>
<!-- FIN DE CONTENDOR FILTROS  ASESOR-->

    <!--CONTENEDOR DE CALENDARIO-->
    <div style="margin-right: 9%;" class="contenedor-cajas-E " >
       <p style="color:rgb(4, 90, 15);font-size: 26px;margin-top: 10px;">Fecha</p>
       <v-row>
       <v-col cols="12" sm="6">
       <v-date-picker v-model="start"></v-date-picker>
       </v-col>
       <v-col cols="12" sm="6">
       <v-date-picker v-model="end"></v-date-picker>
       </v-col>
       </v-row>
       </div>
    <!--FIN C. CALENDARIO -->
    <!-- REPORTE-->
    <div class="reportec">
      <v-container style="margin-right: 15%;" class="contenedor-cajas-B" >
       <v-card outlined class="reporte">
          <v-card-title style="color:rgb(40, 180, 40); font-size: 20px;">Reporte de Contrato</v-card-title>
          <v-card-text>
            <textarea v-model="reporteContratos" rows="20" cols="50" disabled>
            </textarea>
          </v-card-text>
        </v-card>
      </v-container>
    </div>
    <!-- FIN REPORTE -->
  </div>
</div>
</template>

<style>
.max-width-400 {
  max-width: 400px;
}
.reporte {
  width: 550px;
  padding: 4px;
}
.filtros {
  max-width: 400px;
  margin-right: auto;
}
.reportec {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20;
}
.container {
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
.contenedor-cajas-E {
  border: 4px solid #010361 ;
   padding: 10px;
   margin-top: 20px;
   height: 100%;
}
.contenedor-cajas-B {
  border: 4px solid #0fa14700 ;
   padding: 10px;
   margin-top: 20px;
   height: 100%;
   border-radius: 10%;
}
.contenedor-cajas-A {
  border: 3px solid #06c54f ;
  margin-top: 10px;
  padding: 10px;
}
.titulo{
  font-size: 32px;
  font-family: Sans-serif;
  color: rgb(252, 252, 252);
}
.kallpa-image {
  margin-top: 35px;
}

</style>
<script src="./ReporteContrato.js"></script>
