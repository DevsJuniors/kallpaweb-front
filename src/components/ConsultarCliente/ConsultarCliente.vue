<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-combobox
            :items="
              clientes.map(
                (cliente) =>
                  `${cliente.DNI_cli} -> ${cliente.Nombre_cli} ${cliente.Apellido_cli}`
              )
            "
            label="Buscar Cliente"
            outlined
            v-model="selectedClientes"
            dense></v-combobox>
        </v-col>
      </v-row>

      <div class="justify-content-end align-items-start">
        <v-card class="mt-1 card2">
          <v-card-text>
            <v-container>
              <v-row>
                <v-form>
                  <v-col cols="12" md="12"></v-col>
                </v-form>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
        <v-card class="mt-1 cardcss">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="10" md="12">
                  <v-text-field
                    label="DNI Cliente"
                    placeholder="Ingresa el DNI del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.DNI_cli"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="Nombre Cliente"
                    placeholder="Ingresa el nombre del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.Nombre_cli"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="Apellido Cliente"
                    placeholder="Ingrese los apellidos del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.Apellido_cli"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="N° Celular"
                    placeholder="Ingrese el número de celular del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.Celular_cli"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="Fecha de Nacimiento"
                    placeholder="Ingrese la fecha de nacimiento del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.FechaNacimiento_cli"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="ID Genero"
                    placeholder="Ingrese el código del género del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.IDGenero"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="ID Nacionalidad"
                    placeholder="Ingrese el código de la naacionalidad del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.IDNacionalidad"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="ID Estado Civil"
                    placeholder="Ingrese el código del estado civil del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.IDEstadoCivil"></v-text-field>
                </v-col>
                <v-col cols="12" md="12">
                  <v-text-field
                    label="IDDomicilio"
                    placeholder="Ingrese el código del domicilio del Cliente"
                    filled
                    disabled
                    v-model="frmCliente.IDDomicilio"></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </div>
    </v-container>
  </div>
</template>
<style>
.cardcss {
  max-width: 300px;
  margin-left: 70%;
}
.card2 {
  max-width: 300px;
  margin-right: 70%;
}
</style>
<script src="./ConsultarCliente.js"></script>
