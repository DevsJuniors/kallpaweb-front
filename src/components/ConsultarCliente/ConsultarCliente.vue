<template>
  <div>
    <v-app-bar color="green accent-4" dense dark>
            <v-toolbar-title>KALLPA</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
    <div class="spacer"></div>
      <h2 style=" text-align: center;"> Datos de Clientes Registrados</h2> 
      <v-container fluid>
      <div class="d-flex flex-grow-1">
       <div class="cliente">
           <h3>Campos de Cliente</h3>
            <div class="contenedor-cajas">
                    <v-text-field
                      label="DNI Cliente"
                      placeholder="Ingresa el DNI del Cliente"
                      filled
                      :disabled="!TextFieldAble"
                      style="display: inline-block; width: 15%;margin-right: 6px;"
                      v-model="frmCliente.DNI_cli"></v-text-field>
                    <v-text-field
                      label="Nombre Cliente"
                      placeholder="Ingresa el nombre del Cliente"
                      filled
                      :disabled="!TextFieldAble"
                      style="display: inline-block; width: 20%;margin-right: 6px;"
                      v-model="frmCliente.Nombre_cli"></v-text-field>
                    <v-text-field
                      label="Apellido Cliente"
                      placeholder="Ingrese los apellidos del Cliente"
                      filled
                      :disabled="!TextFieldAble"
                      style="display: inline-block; width: 20%;margin-right: 6px;"
                      v-model="frmCliente.Apellido_cli"></v-text-field>
                    <v-text-field
                      label="N° Celular"
                      placeholder="Ingrese el número de celular del Cliente"
                      filled
                      :disabled="!TextFieldAble"
                      style="display: inline-block; width: 20%;margin-right: 6px;"
                      v-model="frmCliente.Celular_cli"></v-text-field>
                    <v-text-field
                      label="Fecha de Nacimiento"
                      placeholder="Ingrese la fecha de nacimiento del Cliente"
                      filled
                      :disabled="!TextFieldAble"
                      style="display: inline-block; width: 20%;margin-right: 6px;"
                      v-model="frmCliente.FechaNacimiento_cli"></v-text-field>
                    <v-select
                      v-model="selectedGenero"
                      :items="generos.map((genero) => genero.Descripcion_G)"
                      label="Selecciona el Género"
                      outlined
                      style="display: inline-block; width: 24%;margin-right: 6px;"
                      :disabled="!Select"
                    ></v-select>
                    <v-select
                      v-model="selectedNacionalidad"
                      :items="nacionalidades.map((nacionalidad) => nacionalidad.Descripcion_NA)"
                      label="Selecciona la Nacionalidad"
                      outlined
                      style="display: inline-block; width: 24%;margin-right: 6px;"
                      :disabled="!Select"
                    ></v-select>
                    <v-select
                      v-model="selectedEstado"
                      :items="estadosciviles.map((estadocivil) => estadocivil.Descripcion_Es)"
                      label="Selecciona el Estado Civil"
                      outlined
                      style="display: inline-block; width: 24%;margin-right: 6px;"
                      :disabled="!Select"
                    ></v-select>
                    <v-text-field
                      label="IDDomicilio"
                      placeholder="Ingrese el código del domicilio del Cliente"
                      filled
                      :disabled="!TextFieldAble"
                      style="display: inline-block; width: 24%;margin-right: 8px;"
                      v-model="frmCliente.IDDomicilio"></v-text-field>
                </div>
                </div>
                <div class="contenedor-cajas-E">
                <v-btn
                    type="submit"
                    class="button-1"
                    depressed
                    style="display: inline-block; width: 90%;margin-bottom: 8px;"
                    color="primary"
                    @click="habilitarText">
                    Habilitar Actualización
                </v-btn>
                <v-btn
                    class="button-1"
                    depressed
                    @click="updateCliente"
                    style="display: inline-block; width: 90%;margin-bottom: 8px;"
                    color="primary">
                    Registrar Actualización
                  </v-btn>
                  <v-btn
                    type="submit"
                    class="button-1"
                    depressed
                    style="display: inline-block; width: 90%;margin-bottom: 8px;"
                    color="primary"
                    @click="resetForm">
                    Limpiar 
                  </v-btn>
                  <v-btn
                    type="submit"
                    class="button-1"
                    depressed
                    style="display: inline-block; width: 90%;margin-bottom: 8px;"
                    color="primary"
                    @click="volverMenu">
                    Salir 
                  </v-btn>
                </div>
      </div>
      </v-container>
      <v-container fluid>
        <div class="d-flex flex-grow-1">
          <div class="tabla fill-height">
                <v-data-table 
                  :headers="headers" 
                  :items="clientes"
                  :search="search"
                  :loading="loading"
                  :items-per-page="10" 
                  class="custom-table">
                  <template v-slot:top>
                          <v-toolbar flat>
                          <v-toolbar-title> Lista de Clientes</v-toolbar-title>
                          <v-spacer></v-spacer>
                          <v-text-field
                          v-model="search"
                          append-icon="mdi-magnify"
                          label="Buscar"
                          single-line
                          hide-details
                          ></v-text-field>
                          </v-toolbar>
                  </template>
                  <template v-slot:item="{item}">
                    <tr>
                      <td>{{ item.DNI_cli }}</td>
                      <td>{{ item.Nombre_cli }}</td>
                      <td>{{ item.Apellido_cli }}</td>
                      <td>{{ item.Celular_cli }}</td>
                      <td>{{ item.FechaNacimiento_cli }}</td>
                      <td>{{ item.IDGenero }}</td>
                      <td>{{ item.IDNacionalidad }}</td>
                      <td>{{ item.IDEstadoCivil }}</td>
                      <td>{{ item.IDDomicilio }}</td>
                      <td>{{ item.Seleccionar}}
                              <v-btn small color="primary" @click="seleccionarClientes(item)">
                              <v-icon class="mx-1">mdi-arrange-bring-forward</v-icon>
                              </v-btn>
                      </td>
                      </tr>
                  </template>
                </v-data-table>
             </div>
            </div>
          </v-container>
       </div>
</template>
<style>
.cliente {
  margin: 20px;
  max-width: 70%;
}
.contenedor-cajas-E {
  border: 2px solid #ffffff ;
  padding: 10px;
}
.custom-table thead th {
    background-color: #095ba8;
    color: #ffffff !important; 
}
.contenedor-cajas {
  border: 2px solid #47d847;
  padding: 10px;
}

.contenedor-cajas input {
  margin-bottom: 5px;
  width: 100%;
  padding: 5px;
}
.fill-height {
  height: 100%;
}
.tabla {
  width: 100%;
}
.custom-text {
  font-size: 12px; /* Modifica el tamaño de letra según tus necesidades */
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
<script src="./ConsultarCliente.js"></script>
