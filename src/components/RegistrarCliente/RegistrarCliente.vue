<template>
  <div>
    <v-app-bar color="white" dense dark height="100">
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
    <form name="registrarCliente" @submit.prevent="createCliente">
      <div class="cliente">
        <h2>Registrar Cliente</h2>
        <div class="d-flex" style="align-items: center">
          <div class="mr-4">
            <v-text-field
              label="ID Domicilio"
              placeholder="Ingrese el código de domicilio"
              filled
              v-model="frmCliente.IDDomicilio"
              style="width: 300px"></v-text-field>
          </div>
          <div
            style="
              display: flex;
              flex-direction: row-reverse;
              align-items: center;
            ">
            <v-btn
              depressed
              color="primary"
              class="button-1 mt-0"
              @click="registrarDomicilio">
              Registrar Domicilios
            </v-btn>
            <v-icon
              style="align-items: center; display: flex; margin-bottom: 30px"
              class="my-3n"
              size="90"
              color="green">
              mdi-home-analytics
            </v-icon>
          </div>
        </div>
        <v-container class="my-container">
          <div class="custom-text-field">
            <v-text-field
              label="Nombre Cliente"
              placeholder="Ingresa el nombre del Cliente"
              filled
              :disabled="!TextFieldAble"
              v-model="frmCliente.Nombre_cli"></v-text-field>
            <v-text-field
              label="Apellido Cliente"
              placeholder="Ingrese los apellidos del Cliente"
              filled
              :disabled="!TextFieldAble"
              v-model="frmCliente.Apellido_cli"></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  label="DNI Cliente"
                  placeholder="Ingresa el DNI del Cliente"
                  filled
                  :disabled="!TextFieldAble"
                  v-model="frmCliente.DNI_cli"></v-text-field>
                <v-text-field
                  label="Fecha de Nacimiento"
                  placeholder="Ingrese la fecha de nacimiento del Cliente"
                  filled
                  :disabled="!TextFieldAble"
                  v-model="frmCliente.FechaNacimiento_cli"></v-text-field>
                <v-select
                  v-model="selectedGenero"
                  :items="generos.map((genero) => genero.Descripcion_G)"
                  label="Selecciona el Género"
                  outlined
                  :disabled="!Select"></v-select>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  label="N° Celular"
                  placeholder="Ingrese el número de celular del Cliente"
                  filled
                  :disabled="!TextFieldAble"
                  v-model="frmCliente.Celular_cli"></v-text-field>

                <v-select
                  v-model="selectedNacionalidad"
                  :items="
                    nacionalidades.map(
                      (nacionalidad) => nacionalidad.Descripcion_NA
                    )
                  "
                  label="Selecciona la Nacionalidad"
                  outlined
                  :disabled="!Select"></v-select>
                <v-select
                  v-model="selectedEstado"
                  :items="
                    estadosciviles.map(
                      (estadocivil) => estadocivil.Descripcion_Es
                    )
                  "
                  label="Selecciona el Estado Civil"
                  outlined
                  :disabled="!Select"></v-select>
              </v-col>
            </v-row>
          </div>
        </v-container>
      </div>
      <div class="resumen">
        <v-container class="my-container-2">
          <div class="info">
            <div class="image-container">
              <v-img
                src="../../views/Img/Kallpa.png"
                max-height="300"
                max-width="200"></v-img>
            </div>
            <h3>Fecha: {{ this.fecha }}</h3>
          </div>

          <h3>Datos del usuario:</h3>
          <v-divider></v-divider>

          <h4>Nombres : {{ this.frmCliente.Nombre_cli }}</h4>
          <h4>Apellidos : {{ this.frmCliente.Apellido_cli }}</h4>
          <h4>DNI : {{ this.frmCliente.DNI_cli }}</h4>
          <h4>Fecha Nacimiento : {{ this.frmCliente.FechaNacimiento_cli }}</h4>
          <h4>Género : {{ this.frmCliente.desgenero }}</h4>
          <h4>Nacionalidad : {{ this.frmCliente.desnacionalidad }}</h4>
          <h4>Estado Civil : {{ this.frmCliente.desestadocivil }}</h4>
          <h4>Celular : {{ this.frmCliente.Celular_cli }}</h4>
          <h3>Datos del Domicilio:</h3>
          <v-divider></v-divider>
          <h4>ID Domicilio: {{ this.frmCliente.IDDomicilio }}</h4>
        </v-container>
      </div>
      <div class="btn-container">
        <div class="btn1">
          <v-btn type="submit" class="button-1 mt-2" depressed color="primary">
            Registrar Cliente
            <v-icon class="mx-1">mdi-account-badge-outline</v-icon>
          </v-btn>
          <v-btn color="green" class="button-1 mt-2" @click="resetForm">
            Limpiar
            <v-icon class="mx-1">mdi-backup-restore</v-icon>
          </v-btn>
        </div>
      </div>

      <div class="btn3">
        <v-btn
          depressed
          color="primary"
          class="button-1 mt-2 btn-atras"
          @click="volverMenu">
          Atras
          <v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
        </v-btn>
      </div>
    </form>
    <v-dialog v-model="dialogVisible" :width="500">
      <v-card color="#47d847">
        <v-card-title>
          <span class="mx-auto" style="color: white"
            >¡Registrado con Exito!</span
          >
        </v-card-title>
        <v-card-text>
          <v-alert
            v-if="mensaje !== ''"
            color="white"
            :type="typemsg"
            outlined
            >{{ mensaje }}</v-alert
          >
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn
            style="background-color: #033076; color: #ffffff"
            @click="aceptar">
            Aceptar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogError" :width="500">
      <v-card color="#ec4a4a">
        <v-card-title>
          <span class="mx-auto" style="color: white"> ¡Verifique! </span>
        </v-card-title>
        <v-card-text>
          <v-alert
            v-if="mensaje !== ''"
            color="white"
            :type="typemsg"
            outlined
            >{{ mensaje }}</v-alert
          >
        </v-card-text>
        <v-card-actions style="display: flex; justify-content: center">
          <v-btn
            style="background-color: #033076; color: #ffffff"
            @click="cerrar">
            cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<style>
.cliente {
  margin: 20px;
  max-width: 30%;
}
.button-1 {
  background: #033076;
  color: #ffffff;
  border-color: #232323;
  border-width: 5px;
  border-style: solid;
  border-radius: 3px 3px 3px 3px;
  font-weight: 400;
  font-size: 24px;
  text-align: right;
  margin: 20px;
  width: 200px;
  height: 1000px;
}
.my-container {
  width: 500px;
  height: 450px;
  padding: 10px 10px 10px 10px;
  border-color: #72bb53;
  border-width: 3px;
  border-style: solid;
  border-radius: 23px 23px 23px 23px;
  position: relative;
  z-index: 1;
  margin-top: -0px;
}
.btn-container {
  display: flex;
  justify-content: space-between;
}

.btn1 {
  margin-right: 990px;
}

.btn3 {
  margin-top: -65px;
  margin-left: 600px; /* Ajusta el valor del margen según tus preferencias */
}
.custom-text-field {
  width: 470px;
  height: 50px;
  padding: 8px 4px 8px 4px;
  background: #ffffff;
  color: #c0c0c0;

  text-align: left;
  margin-bottom: 60px;
}
.my-container-2 {
  width: 850px;
  height: 450px;
  padding: 10px 10px 10px 10px;
  border-color: #72bb53;
  border-width: 3px;
  border-style: solid;
  border-radius: 23px 23px 23px 23px;
  position: relative;
  z-index: 1;
  margin-left: 550px;
  margin-top: -470px;
}
.v-application .info {
  background-color: white !important;
  border-color: white !important;
}
.info {
  display: flex;
  align-items: center;
}
.image-container {
  margin-right: 300px;
}
</style>
<script src="./RegistrarCliente.js"></script>
