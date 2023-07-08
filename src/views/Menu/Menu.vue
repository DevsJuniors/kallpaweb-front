<template>
  <div>
  <div class="floating-rectan-boton">
    <div class=" floating-rectan-titulo">
      <h1 class="texto-center titulo-bienvenido" >¿Qué acción realizaremos?</h1>
    </div>
    <div style="margin-top: 1px">
      <v-container>
        <v-row>
          <!-- BOTON REGISTRAR EMPLEADO 1 -->
          <v-col cols="12" >
            <v-btn
              dark
              text
              class="border-btnA"
              @click="registrarEmpleado"
              height="100px"
              elevation="13"
              width="300px"
              style="margin-right: 50px; margin-top: 18%;"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/registro (2).png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Registrar Empleado</span>
            </v-btn>
            <!-- BOTON REGISTRAR CLIENTE 2 -->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="registrarCliente"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px; margin-top: 18%;"
            >
              <v-img
                src="../Img/registrarse.png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Registrar Cliente</span>
            </v-btn>

              <!-- BOTON REGISTRAR CONTRATO 3-->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="registrarContrato"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px; margin-top: 18%;"
            >
              <v-img
                src="../Img/contrato (3).png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Registrar Contrato</span>
            </v-btn>
        </v-col>
          </v-row>
          <v-row class="mx-auto">
          <!-- BOTON CONSULTAR CONTRATO  4 -->
          <v-col cols="12">
            <v-btn
              dark
              text
              class="border-btnA"
              @click="consultarContrato"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px;"
            >
              <v-img
              src="../Img/buscar (1).png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Consultar Contrato</span>
            </v-btn>
              <!-- BOTON EVALUAR CONTRATO 5-->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="evaluarContrato"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px;"
            >
              <v-img
                src="../Img/evaluacion.png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Evaluar Contrato</span>
            </v-btn>
        <!-- BOTON GENERAR ORDEN DE INSTALACION 6 -->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="generarOrdenI"
              height="100px"
              elevation="13"
              width="300px"
              fab
              style="margin-right: 50px;"
              outlined
              x-large
            >
              <v-img
                src="../Img/contrato (2).png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">GENERAR ORDEN DE I.</span>
            </v-btn>
          </v-col>
          </v-row>
          <v-row class="mx-auto" >
        <!-- BOTON ASIGNAR TECNICO 7 -->
          <v-col cols="12">
            <v-btn
              dark
              text
              style="margin-right: 50px;"
              class="border-btnA"
              @click="asignarTecnico"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
            >
              <v-img
              src="../Img/seleccion.png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Asignar Tecnico</span>
            </v-btn>
        <!-- BOTON REGISTRAR MATERIALES 8 -->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="registrarMateriales"
              height="100px"
              style="margin-right: 50px;"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/materiales (1).png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">REGISTRAR MATERIALES</span>
            </v-btn>
            <!-- BOTON GENERAR ORDEN H 9 -->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="generarOrdenH"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px;"
            >
              <v-img
                src="../Img/controlador.png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">GENERAR ORDEN H.</span>
            </v-btn>
          </v-col>
          </v-row>
          <v-row class="mx-auto" >
          <!-- BOTON ASIGNAR HABILITADOR 10 -->
          <v-col cols="12" >
            <v-btn
              dark
              text
              class="border-btnA"
              @click="asignarHabilitador"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px;"
            >
              <v-img
              src="../Img/lista-de-verificacion.png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">ASIGNAR HABILITADOR</span>
            </v-btn>
                <!-- BOTON ASIGNAR REPORTES 11 -->
            <v-btn
            dark
              text
              class="border-btnA"
              @click="reportes"
              height="100px"
              elevation="13"
              width="300px"
              fab
              outlined
              x-large
              style="margin-right: 50px;"
            >
              <v-img
                src="../Img/reporte (1).png"
                max-height="100"
                max-width="80"
                class="icon-center"
              ></v-img> <span class="">Reportes</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  <div class="floating-rectan">
    <div style="margin-top: 8px">
      <v-container>
        <h1 class="titulo-bien texto-center">
          <span >¡Bienvenido!</span>
        </h1>
        <v-img
      src="../Img/Kallpa.png"
      max-height="330"
      max-width="250"
      class="mx-auto"
      style="margin-top: 10px"
    ></v-img>
    <v-img
      src="../Img/usuario (3).png"
      max-height="150"
      max-width="120"
      class="mx-auto usuar"
      style="margin-top: -10%"
    ></v-img><h1 class="texto-center titulo-nom ">
          ¡HOLA!
        </h1><h2 class="texto-center titulo-nom ">
          ...
        </h2>
        <h3 style="margin-top: 3%" class="texto-center titulo-acc border-bien">
          Accesos Rápidos
        </h3>
        
        <v-row class="mx-auto" style="margin-top: 0%;">
          <!-- BOTON SUNAT 1 -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://acortar.link/yhk230"
              target="_blank"
              height="90px"
              elevation="13"
              width="90px"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/unnamed.png"
                max-height="100"
                max-width="150"
                class="icon-center"
              ></v-img>
            </v-btn>
            <h1 class="titulo-btn btnsunat">Sunat</h1>
          </v-col>
          <!-- BOTON ASIGNAR GMAIL 2 -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://mail.google.com/mail/?authuser=0"
              target="_blank"
              height="90px"
              elevation="13"
              width="90px"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/Gmail_icon_(2020).svg.png"
                max-height="100"
                max-width="60"
                class="icon-center"
              ></v-img>
            </v-btn>
            <h1 class="titulo-btn btngmail">Gmail</h1>
          </v-col>
          <!-- BOTON ASIGNAR DRIVE 3 -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://drive.google.com/?authuser=0"
              target="_blank"
              height="90px"
              elevation="13"
              width="90px"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/Google_Drive_icon_(2020).svg.png"
                max-height="100"
                max-width="60"
                class="icon-center"
              ></v-img>
            </v-btn>
            <h1 class="titulo-btn btndrive">Drive</h1>
          </v-col>
        </v-row>
        <v-row>
          <!-- BOTON ASIGNAR GOOGLE -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn btngogle"
              href="https://www.google.com"
              target="_blank"
              height="90px"
              elevation="13"
              width="90px"
              fab
              style="margin-right: 100%; "
              outlined
              x-large
            >
              <v-img
                src="../Img/300221.png"
                max-height="100"
                max-width="60"
                class="icon-center"
              ></v-img>
            </v-btn>
            <h1 class="titulo-btn">Google</h1>
          </v-col>
          <!-- BOTON ASIGNAR MAPS -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://maps.google.com/?authuser=0"
              target="_blank"
              height="90px"
              elevation="13"
              width="90px"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/google_maps_icon_130921.png"
                max-height="100"
                max-width="60"
                class="icon-center"
              ></v-img>
            </v-btn>
            <h1 class="titulo-btn btnmaps"> Maps</h1>
          </v-col>
          <!-- BOTON CALIDAD -->
          <v-col cols="12" sm="4">
            <v-btn
              cols="12"
              sm="6"
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://www.calidda.com.pe/"
              target="_blank"
              height="90px"
              elevation="13"
              width="90px"
              fab
              outlined
              x-large
            >
              <v-img
                src="../Img/calidda-gas-natural-del-peru-logo-55DA79B832-seeklogo.com.png"
                max-height="100"
                max-width="70"
                class="icon-center"
              ></v-img>
              
            </v-btn>
            <h1 class="titulo-btn btncaliddad">Cálidda</h1>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    registrarEmpleado() {
      this.$router.push("/menu/registrarEmpleado");
    },
    registrarCliente() {
      this.$router.push("/menu/registrarCliente");
    },
    registrarContrato() {
      this.$router.push("/menu/registrarContrato");
    },
    consultarCliente() {
      this.$router.push("/menu/consultarCliente");
    },
    evaluarContrato() {
      this.$router.push("/menu/evaluarContrato");
    },
    generarOrdenI() {
      this.$router.push("/menu/generarOrdenI");
    },
    asignarTecnico() {
      this.$router.push("/menu/asignarTecnico");
    },
    registrarMateriales() {
      this.$router.push("/menu/registrarMateriales");
    },
    generarOrdenH() {
      this.$router.push("/menu/generarOrdenH");
    },
    asignarHabilitador() {
      this.$router.push("/menu/asignarHabilitador");
    },
    reportes() {
      this.$router.push("/reportes");
    },
    consultarContrato() {},
  },
};
</script>

<style>
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
  margin-top: 30px;
  font-size: 45px;
  margin-left: -10% !important;
  font-family: Tahoma !important;
  color:#ffffff;
}
.titulo-btn {
  text-align: center;
  margin-top: 5px;
  font-size: 20px;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif!important;
  color:#000000;
}
.titulo-bien { 
  font-size: 50px;
  font-family: Tahoma!important;
  color: #032f76;
}
.titulo-nom { 
  font-size: 20px;
  font-family: Tahoma!important;
  color: #032f76;
}
.titulo-acc { 
  font-size: 20px;
  font-family: Tahoma!important;
  color: #ffffff;
}


.btnmaps{
  margin-left: -20% !important
}
.btngmail{
  margin-left: -22% !important
}
.btndrive{
  margin-left: -21% !important
}
.btnsunat{
  margin-left: -20% !important
}
.btngogle {
  margin-left: 12% !important
}
.btncaliddad {
  margin-left: -24% !important
}

.border-btnA{
  border: 3px solid #33cc33;
  background: #033076 !important;
  padding: 4px;
  display: inline-flex;
  border-radius: 20px;
}

.border-btn{
  border: 3px solid #33cc33;
  padding: 4px;
  display: inline-flex;
  border-radius: 20px;
}


.border-bien {
  background-color: #032f76;
  border: 3px solid #033076;
  padding: 10px;
  display: fixed;
  border-radius: 20px;
}

.floating-rectan {
  position: absolute;
  left: 14%;
  transform: translateX(-50%);
  top: 0%;
  width: 450px;
  height: 755px;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.floating-rectan-boton{
  position: absolute;
  left: 70%;
  transform: translateX(-50%);
  top: 0%;
  width: 1500px;
  height: 755px;
  background-color: #33cc33;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.floating-rectan-titulo{
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0%;
  width: 1500px;
  height: 150px;
  background-color: #033076;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
