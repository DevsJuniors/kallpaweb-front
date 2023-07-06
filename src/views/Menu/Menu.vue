<template>
  <div>
    <v-app-bar color="white" dense dark height="80">
      <v-toolbar-title>
        <v-img
          src="../Img/Kallpa.png"
          max-height="300"
          max-width="200"
          class="kallpa-image"></v-img>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img
        src="../Img/usuario (3).png"
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
    <div style="margin-top: 30px">
      <v-container>
        <h1 class="titulo-bienvenido texto-derecha">
          <span class="border">¿Qué acción realizaremos?</span>
        </h1>
      </v-container>
    </div>
    <div class="btn-container">
      <v-row class="justify-end flex-wrap" wrap>
        <!-- BOTON REGISTRAR EMPLEADO 1 -->
        <v-col cols="6" md="3" class="offset-md-6 text-right">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="registrarEmpleado">
            <v-img
              src="../Img/registro (2).png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Registrar Empleado</span>
          </v-btn>
        </v-col>
        <!-- BOTON REGISTRAR CLIENTE 2-->
        <v-col cols="6" md="3">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="registrarCliente">
            <v-img
              src="../Img/registrarse.png"
              max-height="100"
              max-width="70"
              class="icon-center"></v-img>
            <span class="">Registrar Cliente</span>
          </v-btn>
        </v-col>
        <!-- BOTON REGISTRAR CONTRATO 1-->
        <v-col cols="6" md="3" class="offset-md-6 text-right">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="registrarContrato">
            <v-img
              src="../Img/contrato (3).png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Registrar Contrato</span>
          </v-btn>
        </v-col>
        <!-- BOTON CONSULTAR CONTRATO 2 -->
        <v-col cols="6" md="3">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="consultarContrato">
            <v-img
              src="../Img/buscar (1).png"
              max-height="100"
              max-width="70"
              class="icon-center"></v-img>
            <span class="">Consultar Contrato</span>
          </v-btn>
        </v-col>
        <!-- BOTON EVALUAR CONTRATO 1-->
        <v-col cols="6" md="3" class="offset-md-6 text-right">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="evaluarContrato">
            <v-img
              src="../Img/evaluacion.png"
              max-height="100"
              max-width="70"
              class="icon-center"></v-img>
            <span class="">Evaluar Contrato</span>
          </v-btn>
        </v-col>

        <!-- BOTON GENERAR ORDEN DE INSTALACION 2 -->
        <v-col cols="6" md="3">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="generarOrdenI">
            <v-img
              src="../Img/contrato (2).png"
              max-height="100"
              max-width="70"
              class="icon-center"></v-img>
            <span class="">Generar Orden de I.</span>
          </v-btn>
        </v-col>
        <!-- BOTON ASIGNAR TECNICO 1 -->
        <v-col cols="6" md="3" class="offset-md-6 text-right">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="asignarTecnico">
            <v-img
              src="../Img/seleccion.png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Asignar Técnico</span>
          </v-btn>
        </v-col>

        <!-- BOTON REGISTRAR MATERIALES 2 -->
        <v-col cols="6" md="3">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="registrarMateriales">
            <v-img
              src="../Img/materiales (1).png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Registrar Materiales</span>
          </v-btn>
        </v-col>
        <!-- BOTON GENERAR ORDEN H -->
        <v-col cols="6" md="3" class="offset-md-6 text-right">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="generarOrdenH">
            <v-img
              src="../Img/controlador.png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Generar Orden H</span>
          </v-btn>
        </v-col>
        <!-- BOTON ASIGNAR HABILITADOR -->
        <v-col cols="6" md="3">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="asignarHabilitador">
            <v-img
              src="../Img/lista-de-verificacion.png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Asignar Habilitador</span>
          </v-btn>
        </v-col>
        <!-- BOTON ASIGNAR REPORTES -->
        <v-col cols="6" md="3" class="offset-md-6 text-right">
          <v-btn
            color="blue darken-4"
            dark
            fab
            class="rounded-pill"
            x-large
            block
            depressed
            height="90px"
            elevation="13"
            width="40px"
            @click="reportes">
            <v-img
              src="../Img/reporte (1).png"
              max-height="100"
              max-width="60"
              class="icon-center"></v-img>
            <span class="">Reportes</span>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="floating-rectangle">
      <div class="floating-rectan">
        <div style="margin-top: 1px">
          <v-container>
            <h1 class="titulo-bienvenido texto-center">
              <span class="border-bien">¡Bienvenido!</span>
            </h1>
            <v-btn
              color="blue darken-4"
              dark
              fab
              class="rounded-pill"
              x-large
              block
              depressed
              height="90px"
              elevation="13"
              width="40px"
              @click="reportes"></v-btn>
          </v-container>
        </div>
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
  font-size: 32px;
  font-family: Sans-serif;
  color: rgb(252, 252, 252);
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
