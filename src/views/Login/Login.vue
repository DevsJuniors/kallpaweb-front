<template>
  <v-container class="login-container">
    <v-row>
      <v-col cols="4" sm="3" md="2" lg="2">
        <!-- Aquí puedes colocar tu imagen -->
      </v-col>
      <v-col
        cols="12"
        sm="9"
        md="10"
        lg="10"
        class="d-flex align-center justify-end"
      >
      </v-col>
    </v-row>
    <div>
      <v-row align="center">
        <v-col cols="12" sm="5" md="10">
          <h2 class="identificarse-1">
            Identificarse
            <h5 class="bienvenido-1">Bienvenido</h5>
          </h2>
        </v-col>
      </v-row>
      <form @submit.prevent="iniciarSesion">
        <v-row align="center">
          <v-col cols="12" sm="5" md="10">
            <p>DNI</p>
            <v-text-field label="" solo v-model="DNI_Em"></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" sm="5" md="10">
            <p>Nombre de usuario</p>
            <v-text-field label="" solo v-model="nombreusuario"></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center">
          <v-col cols="12" sm="5" md="10">
            <p>Contraseña</p>
            <v-text-field label="" solo v-model="contraseña"></v-text-field>
            <v-btn
              type="submit"
              class="button-1"
              depressed
              color="primary"
              block
            >
              Iniciar Sesión
            </v-btn>
          </v-col>
        </v-row>
        <v-row v-if="mensajeError" align="center">
          <v-col cols="12" sm="5" md="10">
            <v-alert type="error" class="mt-4">
              {{ mensajeError }}
            </v-alert>
          </v-col>
        </v-row>
      </form>
    </div>
  </v-container>
</template>
<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  align-items: center;
}

.login-image {
  width: 1290px;
  height: 1025px;
  padding: 8px 8px 8px 8px;
  opacity: 100%;
}
.bienvenido-1 {
  width: 400px;
  height: 60px;
  color: #000000;
  font-family: "ABeeZee";
  font-weight: 400;
  font-size: 20px;
  text-align: center;
}
.identificarse-1 {
  width: 400px;
  height: 60px;
  color: #000000;
  font-family: "ABeeZee";
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
.button-1 {
  background: #033076;
  color: #ffffff;
  border-color: #232323;
  border-width: 1px;
  border-style: solid;
  border-radius: 3px 3px 3px 3px;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
}
</style>
<script>
export default {
  name: "Login",
  data() {
    return {
      DNI_Em: "",
      nombreusuario: "",
      contraseña: "",
      mensajeError: "",
    };
  },
  methods: {
    async iniciarSesion() {
      var data = {
        DNI_Em: this.DNI_Em,
        nombreusuario: this.nombreusuario,
        contraseña: this.contraseña,
      };
      try {
        await this.axios.post("/credenciales-empleado/validar", data);
        this.$router.push("/menu");
      } catch (error) {
        if (error.response.data.errors) {
          const errors = error.response.data.errors;
          if (errors.DNI_Em) {
            this.mensajeError = "El DNI ingresado es incorrecto";
          }
          if (errors.nombreusuario) {
            this.mensajeError = "El nombre de usuario ingresado es incorrecto";
          }
          if (errors.contraseña) {
            this.mensajeError = "La contraseña ingresada es incorrecta";
          }
        }
      }
    },
  },
};
</script>
