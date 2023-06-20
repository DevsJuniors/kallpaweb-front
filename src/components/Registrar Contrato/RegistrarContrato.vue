<template>nprm  <div>
    <v-app-bar color="green accent-4" dense dark>
        <v-toolbar-title>KALLPA</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon>mdi-account-circle</v-icon>
    </v-app-bar>
        <form name="registrarContrato" @submit.prevent="createDomicilio">
        <div class="Contrato">
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
        v-model="frmContrato.Fecha_Con"></v-text-field>
    <v-text-field
        label="Numero Radicado del Contrato"
        placeholder="Ingresa el Numero Radicado del Contrato"
        filled
        v-model="frmContrato.NumeroRadicado_Con"></v-text-field>
    <v-text-field
        label="Puntos de Intalacion"
        placeholder="Ingresa los puntos de Instalacion"
        filled
        v-model="frmContrato.PuntoInstalacion_Con"></v-text-field>
    <v-text-field
        label="Numero de Suministro"
        placeholder="Ingresa el Numero de Suministro"
        filled
        v-model="frmDomicilio.numSum"></v-text-field>
    <v-text-field
        label="Estado"
        placeholder="Ingresa el Estado del Cliente"
        filled
        v-model="frmContrato.estado"></v-text-field>
    <v-text-field
        label="ID Domicilio"
        placeholder="Ingresa el ID del Domicilio"
        filled
        v-model="frmContrato.IDDomicilio"></v-text-field>
    <v-text-field
        label="DNI del Cliente"
        placeholder="Ingresa el numero del cliente"
        filled
        v-model="frmContrato.DNI_cli"></v-text-field>
    <v-text-field
        label="DNI del Empleado"
        placeholder="Ingresa el DNI del Empleado"
        filled
        v-model="frmContrato.DNI_Em"></v-text-field>
    <v-text-field
        label="ID Gabinete Categoria"
        placeholder="Ingresa el ID del Gabinete-Categoria"
        filled
        v-model="frmContrato.IDGabineteCategoria"></v-text-field>
    <v-text-field
        label="ID Tipo Instancia"
        placeholder="Ingresa el ID Tipo Instancia"
        filled
        v-model="frmContrato.IDTipoInst"></v-text-field>
    </div>
    <v-btn type="submit" class="button-1" depressed color="primary">
    REGISTRAR CONTRATO
            </v-btn>
        </form>
    </div>
</template>
<style>
.Contrato {
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