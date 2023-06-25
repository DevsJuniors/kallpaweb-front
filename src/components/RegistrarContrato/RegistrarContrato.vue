<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
      <v-toolbar-title>KALLPA</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <form name="registrarContrato" @submit.prevent="createContrato">
      <div class="contrato">
        <h2>Registrar Contrato</h2>
        <v-text-field
          label="ID Contrato"
          placeholder="Ingresa la ID del Contrato"
          filled
          v-model="frmContrato.IDContrato"></v-text-field>
        <v-text-field
          label="Fecha del Contrato"
          placeholder="Ingresa la fecha del Contrato"
          filled
          :disabled="!TextFieldAble"
          v-model="frmContrato.Fecha_Con"></v-text-field>
        <v-text-field
          label="Numero Radicado del Contrato"
          placeholder="Ingresa el Numero Radicado del Contrato"
          filled
          v-model="frmContrato.NumeroRadicado_Con"></v-text-field>
        <v-text-field
          label="Puntos de Instalacion"
          placeholder="Ingresa los puntos de Instalacion"
          filled
          v-model="frmContrato.PuntoInstalacion_Con"></v-text-field>
        <v-text-field
          label="Numero de Suministro"
          placeholder="Ingresa el Numero de Suministro"
          filled
          :disabled="!TextFieldAble"
          v-model="frmContrato.numSum"></v-text-field>
        <v-text-field
          label="ID Domicilio"
          placeholder="Ingresa el ID del Domicilio"
          filled
          :disabled="!TextFieldAble"
          v-model="frmContrato.IDDomicilio"></v-text-field>
        <v-text-field
          label="DNI del Cliente"
          placeholder="Ingresa el numero del cliente"
          filled
          v-model="frmContrato.DNI_cli"></v-text-field>
        <v-text-field
          label="Nombre del Cliente"
          placeholder=""
          :disabled="!TextFieldAble"
          filled
          v-model="frmContrato.nomCli"></v-text-field>
        <v-btn  class="button-1 mt-2" depressed color="primary" @click="llenar">
          Buscar Cliente
          <v-icon class="mx-1">mdi-account-eye-outline</v-icon>
       </v-btn>
       <v-select
          v-model="SelectedEmpleado"
          :items="empleados.filter(empleado => empleado.IDCategoria ===1)
                  .map((empleado) =>  empleado.Nombre_Em + ' ' + empleado.Apellido_Em)"
          label="Selecciona al Asesor Responsable"
          outlined
         ></v-select>
        <v-text-field
          label="DNI del Empleado"
          placeholder="Ingresa el DNI del Empleado"
          filled
          :disabled="!TextFieldAble"
          v-model="frmContrato.DNI_Em"></v-text-field>
        <v-select
          v-model="SelectedGabinete"
          :items="categoriasGabinetes.map((categiriagabinete) => categiriagabinete.Descripcion_Ga)"
          label="Selecciona el Tipo de Gabinete"
          outlined
         ></v-select>
         <v-select
          v-model="SelectedTipoInstalacion"
          :items="tiposinstalacion.map((tipoinstalacion) => tipoinstalacion.Descripcion_TI)"
          label="Selecciona el Tipo de Instalación"
          outlined
         ></v-select>
        <v-select
         v-model="selectedEstado"
         :items="estados"
         label="Selecciona el Estado"
         outlined
         ></v-select>
      </div>
      <div id="ventanaEmergente" class="centrado">
      <p>Contenido de la ventana emergente</p>
      </div>
      <v-btn type="submit" class="button-1 mt-2" depressed color="primary"> 
        REGISTRAR CONTRATO
        <v-icon class="mx-1">mdi-apple-keyboard-caps</v-icon>
      </v-btn>
      <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="resetForm">
              Limpiar
              <v-icon class="mx-1">mdi-backup-restore</v-icon>
      </v-btn>
      <v-btn
              depressed
              color="primary"
              class="button-1 mt-2"
              @click="volverMenu">
              ATRAS
              <v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
      </v-btn>
    </form>
  </div>
</template>
<style>
.contrato {
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
}
</style>
<script src="./RegistrarContrato.js"></script>
