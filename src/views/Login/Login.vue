<template>
  <div>
    <div>
      <v-img
        src="../Img/Imagen1.png"
        max-width="1148"
        class=""
        style="display: block;"
      ></v-img>
    </div>
    <div class="floating-rectangle">
      <div class="floating-rectan">
        <div style="margin-top: 1px">
          <v-container>
            <v-img
              src="../Img/Kallpa.png"
              max-height="330"
              max-width="250"
              class="move-right"
            ></v-img>
            <v-container class="login-container">
              <v-row>
                <v-col cols="4" sm="3" md="2" lg="2"></v-col>
                <v-col cols="12" sm="9" md="10" lg="10" class="d-flex align-center justify-end"></v-col>
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
                      <v-text-field label="" solo v-model="DNI_Em" ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="12" sm="5" md="10">
                      <p>Nombre de usuario</p>
                      <v-text-field label="" solo v-model="nombreusuario" ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row align="center">
                    <v-col cols="12" sm="5" md="10">
                      <p>Contraseña</p>
                      <v-text-field label="" solo v-model="contraseña" type="password" ></v-text-field>
                      <v-btn
                        type="submit"
                        class="button-1"
                        depressed
                        color="#033076"
                        block
                        elevation="13"
                      >
                        <span class="">Iniciar Sesión</span>
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
          </v-container>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.bienvenido-1 {
  width: 400px;
  height: 60px;
  color: #033076;
  font-family: Tahoma!important;
  font-weight: 400;
  font-size: 20px;
  margin-top: 0%;
  text-align: center;
}
.identificarse-1 {
  width: 400px;
  height: 60px;
  margin-top: 0%;
  color: #000000;
  font-family: Tahoma!important;
  font-weight: bold;
  font-size: 30px;
  text-align: center;
}
.custom-image {
  margin-top: 0%;
  margin-right: 0%;
}
.button-1 {   
  background: #033076;
  margin-left: 5%!important;
  margin-top: 0%    !important;
  width:350px;
  color: #ffffff;
  border-color: #232323;
  border-width: 1px;
  font-weight: 400;
  font-size: 24px;
  border-radius: 10px;
  padding: 10px;
  text-align: center;
  height:50px !important;
}

.floating-rectangle {
  position: absolute;
  left: 85%;
  transform: translateX(-50%);
  top: -0.5% !important;
  width: 45px;
  height: 748px;
  background-color: #33cc33;
  border: 4px solid #33cc33;
  padding: 10px;
}
.floating-rectan {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0%;
  width: 450px;
  height: 744px;
  background-color: #ffffff;
  border: 4px solid #3ab12c;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.move-right {
  margin-left: 230px; /* Ajusta el valor según tu necesidad para mover la imagen más a la derecha */
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
