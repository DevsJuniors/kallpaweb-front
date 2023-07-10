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
		<div class="d-flex" style="justify-content: center">
			<h2
				style="
					color: rgba(0, 0, 129, 0.829);
					margin-right: 10px;
					font-size: 30px;
					font-weight: bold;
				">
				Registrar
			</h2>
			<h2 style="color: rgb(62, 207, 62); font-size: 30px; font-weight: bold">
				Domicilio
			</h2>
		</div>
		<form name="registrarDomicilio" @submit.prevent="createDomicilio">
			<div class="domicilio">
				<v-container class="my-container">
					<v-text-field
						label="ID Domicilio"
						placeholder="Ingresa la ID del Domicilio"
						filled
						disabled
						v-model="frmDomicilio.IDDomicilio"></v-text-field>
					<div class="custom-text-field">
						<v-text-field
							label="Dirección"
							placeholder="Ingresa la dirección del Domicilio"
							filled
							v-model="frmDomicilio.Direccion_Dom"></v-text-field>
						<v-row>
							<v-col cols="6"
								><v-text-field
									label="Piso"
									placeholder="Ingresa el piso del Domicilio"
									filled
									v-model="frmDomicilio.Piso_Dom"></v-text-field>
								<v-select
									v-model="selectedDistrito"
									:items="distritos.map((distrito) => distrito.Nombre_Di)"
									label="Selecciona el Distrito"
									outlined></v-select>
								<v-select
									v-model="selectedEstrato"
									:items="
										estratos.map((estrato) => estrato.Descripcion_Estrato)
									"
									label="Selecciona el Estrato"
									outlined></v-select>
							</v-col>
							<v-col cols="6">
								<v-text-field
									label="Interior"
									placeholder="Ingresa el interior del Domicilio"
									filled
									v-model="frmDomicilio.Interior_Dom"></v-text-field>
								<v-select
									v-model="selectedTipoPredio"
									:items="
										tipospredios.map((tipopredio) => tipopredio.Descripcion_Pre)
									"
									label="Selecciona el Tipo de Predio"
									outlined></v-select>
								<v-select
									v-model="selectedCondicion"
									:items="
										condiciones.map((condicion) => condicion.Descripcion_Co)
									"
									label="Selecciona la condición de la Propiedad"
									outlined></v-select>
							</v-col>
						</v-row>
						<v-text-field
							label="Malla"
							placeholder="Ingresa la malla del Domicilio"
							filled
							v-model="frmDomicilio.Nomb_Malla_Dom"></v-text-field>
					</div>
				</v-container>
			</div>
			<v-btn type="submit" class="button-1 mt-2" depressed color="primary">
				REGISTRAR DOMICILIO
				<v-icon class="mx-1">mdi-apple-keyboard-caps</v-icon>
			</v-btn>
			<v-btn depressed color="primary" class="button-1 mt-2" @click="resetForm">
				LIMPIAR
				<v-icon class="mx-1">mdi-backup-restore</v-icon>
			</v-btn>
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
					<br />
					<div class="text">
						<h4>ID Domicilio: {{ this.frmDomicilio.IDDomicilio }}</h4>

						<h4>Direccion : {{ this.frmDomicilio.Direccion_Dom }}</h4>

						<h4>Piso : {{ this.frmDomicilio.Piso_Dom }}</h4>

						<h4>Interior : {{ this.frmDomicilio.Interior_Dom }}</h4>

						<h4>Distrito : {{ this.frmDomicilio.desdistrito }}</h4>

						<h4>Tipo Predio : {{ this.frmDomicilio.despredio }}</h4>

						<h4>Estrato : {{ this.frmDomicilio.desestratro }}</h4>

						<h4>Condicion Propiedad : {{ this.frmDomicilio.descondicion }}</h4>

						<h4>Malla : {{ this.frmDomicilio.Nomb_Malla_Dom }}</h4>
					</div>
				</v-container>
			</div>
			<div class="btn-container">
				<div class="btn3">
					<v-btn
						depressed
						color="primary"
						class="button-1 mt-2 btn-atras"
						@click="volverMenu">
						ATRAS
						<v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
					</v-btn>
				</div>
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
						Cerrar
					</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</div>
</template>
<style>
	.domicilio {
		margin: 20px;
		max-width: 30%;
	}
	.my-container-2 {
		width: 850px;
		height: 520px;
		padding: 10px 10px 10px 10px;
		border-color: #72bb53;
		border-width: 3px;
		border-style: solid;
		border-radius: 23px 23px 23px 23px;
		position: relative;
		z-index: 1;
		margin-left: 550px;
		margin-top: -605px;
	}

	.info {
		display: flex;
		align-items: center;
	}
	.image-container {
		margin-right: 300px;
	}

	.v-application .info {
		background-color: white !important;
		border-color: white !important;
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
	.custom-text-field {
		width: 470px;
		height: 50px;
		padding: 8px 4px 8px 4px;
		background: #ffffff;
		color: #c0c0c0;

		text-align: left;
		margin-bottom: 60px;
	}
	.my-container {
		width: 500px;
		height: 520px;
		padding: 10px 10px 10px 10px;
		border-color: #72bb53;
		border-width: 3px;
		border-style: solid;
		border-radius: 23px 23px 23px 23px;
		position: relative;
		z-index: 1;
		margin-top: -0px;
	}
	.btn3 {
		margin-top: 20px;
		margin-left: 1070px;
	}
	.text h4 {
		margin-bottom: 13px;
	}

	@media screen and (max-width: 768px) {
		.my-container-2 {
			width: 100%;
			height: auto;
			margin-left: 0;
			margin-top: 0;
		}

		.info {
			flex-direction: column;
			align-items: flex-start;
		}

		.image-container {
			margin-right: 0;
			margin-bottom: 20px;
		}

		.custom-text-field {
			width: 100%;
			margin-bottom: 30px;
		}
	}
</style>
<script src="./RegistrarDomicilio.js"></script>
