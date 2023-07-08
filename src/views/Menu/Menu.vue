<template>
  <div >
  <div class="floating-rectan-boton">
    <div style="margin-top: 1px">
      <v-container>
        <h1 class="titulo-bien texto-center">
          <span class="border-bien">¿Qué acción realizaremos?</span>
        </h1>
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
              style="margin-right: 10px;"
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
              style="margin-right: 20px;"
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
              style="margin-right: 20px;"
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
          <v-row class="mx-auto" style="margin-top: 0%;">
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
              style="margin-right: 20px;"
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
              style="margin-right: 20px;"
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
              style="margin-right: 10px;"
              outlined
              x-large
            >
              <v-img
                src="../Img/contrato (2).png"
                max-height="100"
                max-width="80"
                style="margin-right: 20px;"
                class="icon-center"
              ></v-img> <span class="">GENERAR ORDEN DE I.</span>
            </v-btn>
          </v-col>
          </v-row>
          <v-row class="mx-auto" style="margin-top: 0%;">
        <!-- BOTON ASIGNAR TECNICO 7 -->
          <v-col cols="12">
            <v-btn
              dark
              text
              style="margin-right: 20px;"
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
              style="margin-right: 20px;"
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
              style="margin-right: 20px;"
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
          <v-row class="mx-auto" style="margin-top: 0%;">
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
              style="margin-right: 20px;"
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
              style="margin-right: 20px;"
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
    <div style="margin-top: 0px">
      <v-container>
        <h1 class="titulo-bien texto-center">
          <span class="border-bien">¡Bienvenido!</span>
        </h1>
        <v-img
      src="../Img/Kallpa.png"
      max-height="330"
      max-width="330"
      class="mx-auto"
      style="margin-top: 25px"
    ></v-img>
        <v-row class="mx-auto" style="margin-top: 20%;">
          <!-- BOTON SUNAT 1 -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://acortar.link/yhk230"
              target="_blank"
              height="110px"
              elevation="13"
              width="110px"
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
              height="110px"
              elevation="13"
              width="110px"
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
              height="110px"
              elevation="13"
              width="110px"
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
          </v-col>
        </v-row>
        <v-row>
          <!-- BOTON ASIGNAR GOOGLE -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://www.google.com"
              target="_blank"
              height="110px"
              elevation="13"
              width="110px"
              fab
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
          </v-col>
          <!-- BOTON ASIGNAR GMAIL -->
          <v-col cols="12" sm="4">
            <v-btn
              color="rgba(255, 255, 255, 0.8)"
              dark
              text
              class="border-btn"
              href="https://maps.google.com/?authuser=0"
              target="_blank"
              height="110px"
              elevation="13"
              width="110px"
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
          </v-col>
          <!-- BOTON ASIGNAR CALENDARIO -->
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
              height="110px"
              elevation="13"
              width="110px"
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
  margin-top: 10px;
  font-size: 35px;
  font-family: Tahoma !important;
  color:#0d47a1;
}
.titulo-bien { 
  font-size: 60px;
  font-family: Tahoma!important;
  color: #ffffff;
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
.border-btnA{
  border: 3px solid #33cc33;
  background: #0d47a1 !important;
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

.border {
  background-color: #33cc33;
  border: 3px solid #33cc33;
  padding: 10px;
  display: inline-block;
  border-radius: 25px;
}
.borderjejo {
  background-color: #ffffff;
  border: 4px solid #3ab12c;
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

.floating-rectan {
  position: absolute;
  left: 14%;
  transform: translateX(-50%);
  top: 0%;
  width: 450px;
  height: 750px;
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
  height: 750px;
  background-color: #33cc33;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

</style>
