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

    <div style="margin-top: 28px">
      <v-texto-center>
        <h1 class="text-center" style="font-family:'Trebuchet MS'" >
          <span style="color: #32CC32">REPORTE</span>
          <span style="color: #203864"> - CLIENTES</span>
        </h1>
      </v-texto-center>
    </div>

  </div>

  <div>
    <div class="container" style="margin-left: 14px">
      <div class="filtros contenedor-cajas-E" >
        <v-card-title style="color: rgb(11, 13, 105); font-size: 30px ;">Filtros</v-card-title>
          
          <v-card-text>

            <div class="contenedor-cajas-A">
              <p style="color: rgb(4, 90, 15); font-size: 18px;">Selecciona Distrito</p>
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

            <div class="contenedor-cajas-A" style="margin-top: 15px">
              <p style="color: rgb(4, 90, 15); font-size: 18px;">Estrato Social</p>
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

          <v-card-actions>
            <v-btn color="primary" @click="generarReporte" style="font-family:'Trebuchet MS'">Generar Reporte</v-btn>
            <v-btn color="primary" @click="resetFilters" style="font-family:'Trebuchet MS'">Atras</v-btn>
          </v-card-actions>

      </div>
    </div>
  </div>

  <div>
    <div style="margin-left: 370px;margin-right: 900px;" class="contenedor-cajas-F">
      <v-card-title style="color: rgb(11, 13, 105); font-size: 30px ;">Fecha</v-card-title>
        <v-row>
          <v-col cols="12" sm="6">
            <v-date-picker v-model="start"></v-date-picker>
          </v-col>
          <v-col cols="12" sm="6">
            <v-date-picker v-model="end"></v-date-picker>
          </v-col>
        </v-row>
    </div>
  </div>

  <div>
    <div class="reportec">
      <v-container style="margin-right: 313px;" class="contenedor-cajas-B">
        <v-card outlined class="reporte">
          <v-card-title style="color:rgb(40, 180, 40); font-size: 20px;">Reporte de Clientes</v-card-title>
            <v-card-text>
              <textarea v-model="reporteContratos" rows="20" cols="50" disabled>{{reporteClientes}}</textarea>
            </v-card-text>
        </v-card>
      </v-container>
    </div>
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
.texto-derecha {
  text-align: right;
}
.texto-center {
  text-align: center;
}
.kallpa-image {
  margin-top: 35px;
}
.titulo-bienvenido {
  font-size: 32px;
  font-family: Sans-serif;
  color: rgb(252, 252, 252);
}
.contenedor-cajas-E {
  border: 4px solid #010361 ;
  padding: 10px;
  margin-top: 20px;
  height: 100%;
}
.contenedor-cajas-F {
  border: 4px solid #010361 ;
  padding: 10px;
  margin-top: -480px;
  height: 100%;
}
.contenedor-cajas-B {
  border: 4px solid #0fa14700 ;
  padding: 10px;
  margin-top: -484px;
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
.texto-encima {
  position: absolute;
  top: 2;
  left: 0;
  right: 5;
  text-align: center;
  background-color: rgba(
    255,
    255,
    255,
    0.8
  ); /* Fondo semi-transparente para legibilidad */
  padding: 2px;
  z-index: 1; /* Asegura que el texto esté por encima de los botones */
}
/* Estilos para los botones */
.btn-container {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: flex-end;
  /* Agrega margen superior para separar el texto de los botones si lo deseas */
  margin-top: 40px;
}
.btn-wide {
  width: 20px;
  margin-left: auto;
}
.border {
  background-color: #33cc33;
  border: 3px solid #33cc33;
  padding: 10px;
  display: inline-block;
  border-radius: 25px;
}
.border-bien {
  background-color: #33cc33;
  border: 3px solid #33cc33;
  padding: 10px;
  display: fixed;
  border-radius: 25px;
}
.floating-rectangle {
  position: absolute;
  left: 25%;
  transform: translateX(-50%);
  top: 14%;
  width: 500px;
  height: 550px;
  background-color: #33cc33;
  border: 4px solid #33cc33;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.floating-rectan {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 4%;
  width: 450px;
  height: 500px;
  background-color: #ffffff;
  border: 4px solid #ffffff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

<script src="./ReporteClientes.js"></script>
