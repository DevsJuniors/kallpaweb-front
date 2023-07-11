<template>
	<div class="registrar-con">
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
		<div style="display: flex; justify-content: center; align-items: center">
			<h1 style="color: #033076">Cont</h1>
			<h1 style="color: rgb(62, 207, 62)">rato</h1>
		</div>
		<form name="registrarContrato" @submit.prevent="createContrato">
			<div class="contrato">
				<div class="d-flex">
					<h2
						style="
							color: rgba(0, 0, 129, 0.829);
							margin-right: 10px;
							font-size: 30px;
							font-weight: bold;
						">
						Datos Generales
					</h2>
					<h2
						style="color: rgb(62, 207, 62); font-size: 30px; font-weight: bold">
						del Cliente
					</h2>
				</div>
				<div>
					<v-container class="my-containerC">
						<div class="custom-text-field">
							<div
								style="display: flex; flex-direction: row; align-items: center">
								<v-text-field
									label="DNI del Cliente"
									placeholder="Ingresa el numero del cliente"
									filled
									v-model="frmContrato.DNI_cli"></v-text-field>
								<v-btn
									class="button-1 mt-2"
									depressed
									color="primary"
									@click="llenar">
									Buscar Cliente
									<v-icon class="mx-1">mdi-account-eye-outline</v-icon>
								</v-btn>
							</div>
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
								label="Nombre del Cliente"
								placeholder=""
								:disabled="!TextFieldAble"
								filled
								v-model="frmContrato.nomCli"></v-text-field>
						</div>
					</v-container>
				</div>
				<div class="d-flex">
					<h2
						style="
							color: rgba(0, 0, 129, 0.829);
							margin-right: 10px;
							font-size: 30px;
							font-weight: bold;
						">
						Registrar
					</h2>
					<h2
						style="color: rgb(62, 207, 62); font-size: 30px; font-weight: bold">
						Contrato
					</h2>
				</div>
				<div>
					<v-container class="my-containerRC">
						<v-row>
							<v-col cols="6"
								><v-text-field
									label="Numero Radicado del Contrato"
									placeholder="Ingresa el Numero Radicado del Contrato"
									filled
									v-model="frmContrato.NumeroRadicado_Con"></v-text-field>
								<v-select
									v-model="SelectedEmpleado"
									:items="
										empleados
											.filter((empleado) => empleado.IDCategoria === 1)
											.map(
												(empleado) =>
													empleado.Nombre_Em + ' ' + empleado.Apellido_Em
											)
									"
									label="Selecciona al Asesor Responsable"
									outlined></v-select>
								<v-text-field
									label="DNI del Empleado"
									placeholder="Ingresa el DNI del Empleado"
									filled
									:disabled="!TextFieldAble"
									v-model="frmContrato.DNI_Em"></v-text-field>
								<v-select
									v-model="SelectedTipoInstalacion"
									:items="
										tiposinstalacion.map(
											(tipoinstalacion) => tipoinstalacion.Descripcion_TI
										)
									"
									label="Selecciona el Tipo de Instalación"
									outlined></v-select>
							</v-col>
							<v-col cols="6"
								><v-text-field
									label="Puntos de Instalacion"
									placeholder="Ingresa los puntos de Instalacion"
									filled
									v-model="frmContrato.PuntoInstalacion_Con"></v-text-field>
								<v-select
									v-model="SelectedGabinete"
									:items="
										categoriasGabinetes.map(
											(categiriagabinete) => categiriagabinete.Descripcion_Ga
										)
									"
									label="Selecciona el Tipo de Gabinete"
									outlined></v-select>
								<v-text-field
									label="ID Contrato"
									placeholder="Ingresa la ID del Contrato"
									filled
									v-model="frmContrato.IDContrato"
									disabled></v-text-field>
								<v-text-field
									label="Fecha del Contrato"
									placeholder="Ingresa la fecha del Contrato"
									filled
									:disabled="!TextFieldAble"
									v-model="frmContrato.Fecha_Con"></v-text-field>
							</v-col>
						</v-row>
						<v-select
							v-model="SelectedEstado"
							onchange="SelectedEstado(this.value)"
							:items="estados"
							label="Selecciona el Estado"
							outlined></v-select>
					</v-container>
				</div>
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

					<h3>Datos del contrato:</h3>
					<v-divider></v-divider>
					<div class="text">
						<h4>ID Contrato : {{ this.frmContrato.IDContrato }}</h4>
						<h4>Asesor : {{ this.frmContrato.nameemp }}</h4>
						<h4>Número Radicado : {{ this.frmContrato.NumeroRadicado_Con }}</h4>
						<h4>
							Puntos Instalacion : {{ this.frmContrato.PuntoInstalacion_Con }}
						</h4>
						<h4>Fecha Contrato : {{ this.frmContrato.Fecha_Con }}</h4>
						<h3>Datos del cliente</h3>
						<v-divider></v-divider>
						<h4>Nombre : {{ this.frmContrato.nomCli }}</h4>
						<h4>DNI : {{ this.frmContrato.DNI_cli }}</h4>
						<h4>Numero Suministro: {{ this.frmContrato.numSum }}</h4>
						<h3>Datos del Domicilio:</h3>
						<v-divider></v-divider>
						<h4>ID Domicilio: {{ this.frmContrato.IDDomicilio }}</h4>
					</div>
				</v-container>
			</div>

			<div class="btn3">
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
					class="button-1 mt-2 btn-atras"
					@click="volverMenu">
					ATRAS
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
						Guardar sin subir
					</v-btn>
					<v-btn
						style="background-color: #033076; color: #ffffff"
						@click="openNewTab">
						Cargar al portal
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
	.registrar-con .my-containerC {
		width: 500px;
		height: 350px;
		padding: 10px 10px 10px 10px;
		border-color: #72bb53;
		border-width: 3px;
		border-style: solid;
		border-radius: 23px 23px 23px 23px;
		position: relative;
		z-index: 1;
		margin-top: -0px;
	}
	.registrar-con .my-containerRC {
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
	.registrar-con .contrato {
		margin: 20px;
		max-width: 30%;
	}
	.v-application .info {
		background-color: white !important;
		border-color: white !important;
		margin-top: 10px;
	}
	.registrar-con .my-container-2 {
		width: 850px;
		height: 830px;
		padding: 10px 10px 10px 10px;
		border-color: #72bb53;
		border-width: 3px;
		border-style: solid;
		border-radius: 23px 23px 23px 23px;
		position: relative;
		z-index: 1;
		margin-left: 550px;
		margin-top: -855px;
	}
	.registrar-con .button-1 {
		background: #033076;
		color: #ffffff;
		border-color: #232323;
		border-width: 5px;
		border-style: solid;
		border-radius: 3px 3px 3px 3px;
		font-weight: 400;
		font-size: 14px;
		text-align: right;
		margin: 20px;
	}
	.registrar-con .image-container {
		margin-right: 300px;
	}
	.registrar-con .info {
		display: flex;
		align-items: center;
	}
	.registrar-con .btn3 {
		display: flex;
		margin-top: 10px;
		margin-left: 790px; /* Ajusta el valor del margen según tus preferencias */
	}
	.registrar-con .text h4 {
		margin-top: 20px;
		margin-bottom: 20px;
	}
	.registrar-con .kallpa-image {
		margin-top: 35px;
	}
	/* Media queries para hacerlo responsive */

	@media screen and (max-width: 768px) {
		.registrar-con .my-containerC {
			width: 100%;
			height: auto;
		}

		.registrar-con .contrato {
			max-width: 100%;
		}

		.registrar-con .button-1 {
			font-size: 20px;
		}
	}

	@media screen and (max-width: 480px) {
		.registrar-con .button-1 {
			font-size: 18px;
		}
	}
</style>
<script src="./RegistrarContrato.js"></script>
