<template>
	<div>
		<v-app-bar color="white" dense dark height="80">
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
		<form name="generarOrden" @submit.prevent="createOrdenI">
			<div class="spacer"></div>
			<div style="display: flex; justify-content: center; align-items: center">
				<h2
					style="
						color: rgba(0, 0, 129, 0.829);
						margin-right: 10px;
						font-size: 30px;
						font-weight: bold;
					">
					Generar Orden
				</h2>
				<h2 style="color: rgb(62, 207, 62); font-size: 30px; font-weight: bold">
					de Instalación
				</h2>
			</div>

			<div>
				<div style="width: 100%">
					<v-container fluid>
						<div style="display: flex; align-items: center">
							<v-icon style="color: rgb(62, 207, 62); font-size: 100px"
								>mdi-book-cog</v-icon
							>
							<div class="contenedor-cajas my-4" style="margin-left: 10px">
								<h3 style="color: #47d847">Especificaciones de Orden</h3>
								<div style="display: flex; align-items: center">
									<v-text-field
										label="Número de orden"
										placeholder=""
										style="width: 20%; margin-right: 5px"
										filled
										:disabled="!TextFieldAble"
										v-model="frmOrdenI.numOrden"></v-text-field>
									<v-select
										style="width: 18%; margin-right: 5px"
										v-model="selectedEtapa"
										:items="etapas.map((etapa) => etapa.Descripcion_Et)"
										label="Selecciona la Etapa"
										outlined></v-select>
									<v-text-field
										label="ID Etapa"
										style="width: 18%; margin-right: 5px"
										placeholder=""
										filled
										:disabled="!TextFieldAble"
										v-model="frmOrdenI.IDEtapa"></v-text-field>
									<v-text-field
										label="ID Contrato"
										placeholder=""
										style="width: 18%; margin-right: 5px"
										filled
										:disabled="!Select"
										v-model="frmOrdenI.IDContrato"></v-text-field>
									<v-text-field
										label="Número de Suministro"
										placeholder=""
										style="width: 18%"
										filled
										:disabled="!Select"
										v-model="frmOrdenI.numSum"></v-text-field>
								</div>
							</div>
						</div>
					</v-container>
				</div>
			</div>
			<v-container fluid>
				<div class="d-flex flex-grow-1">
					<div class="Orden" style="align-self: flex-start">
						<div class="contenedor-cajas-1">
							<h3>Fecha de ejecución</h3>
							<v-date-picker
								v-model="selectedDate"
								label="Selecciona una fecha"
								min="2023-01-01"
								max="2023-12-31"
								color="green"
								@input="handleDateSelection"></v-date-picker>
						</div>
						<div class="contenedor-cajas-1 my-4">
							<h3>Datos del Técnico</h3>
							<v-text-field
								label="Técnico"
								placeholder=""
								filled
								:disabled="!Select"
								v-model="frmOrdenI.Nom_Tecnico"></v-text-field>
							<v-text-field
								label="DNI de Técnico"
								placeholder=""
								filled
								:disabled="!Select"
								v-model="frmOrdenI.DNI_Em"></v-text-field>
							<v-btn
								depressed
								style="background-color: #47d847; color: #ffffff; width: 100%"
								class="mt-2 mb-4 x-large"
								@click="asignarTecnico">
								Agregar Técnico
								<v-icon class="mx-1">mdi-plus</v-icon>
							</v-btn>
						</div>
					</div>
					<div class="tabla fill-height">
						<v-data-table
							:headers="headers"
							:items="ordenes"
							:search="search"
							:loading="loading"
							class="elevation-1 custom-table">
							<template v-slot:top>
								<v-toolbar flat>
									<v-toolbar-title> Órdenes de Instalación</v-toolbar-title>
									<v-spacer></v-spacer>
									<v-text-field
										v-model="search"
										append-icon="mdi-magnify"
										label="Buscar"
										single-line
										hide-details></v-text-field>
								</v-toolbar>
							</template>
							<template v-slot:item="{ item }">
								<tr>
									<td>{{ item.IDEtapa }}</td>
									<td>{{ item.IDContrato }}</td>
									<td>{{ item.Fecha_Et }}</td>
									<td>{{ item.DNI_Em }}</td>
									<td>
										{{ item.Visualizar }}
										<v-btn
											small
											color="primary"
											@click="seleccionarOrden(item)">
											<v-icon class="mx-1">mdi-eye-settings</v-icon>
										</v-btn>
									</td>
								</tr>
							</template>
						</v-data-table>
						<v-btn
							type="submit"
							class="button-1 mt-3"
							depressed
							color="primary"
							style="width: 30%">
							Generar Orden
							<v-icon class="mx-1">mdi-file-plus</v-icon>
						</v-btn>
						<v-btn
							depressed
							color="primary"
							style="width: 30%"
							class="button-1 mt-3"
							@click="resetForm">
							Limpiar
							<v-icon class="mx-1">mdi-backup-restore</v-icon>
						</v-btn>
						<v-btn
							depressed
							color="primary"
							class="button-1 mt-3"
							style="width: 25%"
							@click="volverMenu">
							Atras
							<v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
						</v-btn>
					</div>
				</div>
			</v-container>

			<v-dialog v-model="dialogVisible" :width="500">
				<v-card color="#47d847">
					<v-card-title>
						<span class="mx-auto" style="color: white"
							>¡Orden generada con éxito!</span
						>
					</v-card-title>
					<v-card-text>
						<v-alert
							v-if="mensaje !== ''"
							color="white"
							type="success"
							outlined
							>{{ mensaje }}</v-alert
						>
					</v-card-text>
					<v-card-actions style="display: flex; justify-content: center">
						<v-btn
							style="background-color: #033076; color: #ffffff"
							@click="asignarMateriales">
							Asignar Materiales
							<v-icon class="mx-1">mdi-pencil-plus</v-icon>
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog v-model="dialogError" :width="500">
				<v-card color="#ec4a4a">
					<v-card-title>
						<span class="mx-auto" style="color: white"> ¡Verifique!</span>
					</v-card-title>
					<v-card-text>
						<v-alert
							v-if="mensaje !== ''"
							color="white"
							:type="typemsg"
							outlined>
							{{ mensaje }}</v-alert
						>
					</v-card-text>
					<v-card-actions style="display: flex; justify-content: center">
						<v-btn
							style="background-color: #033076; color: #ffffff"
							@click="cerrar">
							Aceptar
						</v-btn>
					</v-card-actions>
				</v-card>
			</v-dialog>
			<v-dialog v-model="dialogVisualizar" :width="800">
				<v-card color="#ffffff" class="pa-0">
					<v-card-title>
						<div style="display: flex; align-items: center">
							<span class="mx-auto" style="color: #033076; margin-right: 2px">
								Kallpa Contratistas y</span
							>
							<span class="mx-auto" style="color: #41d81c; margin: 2px"
								>Suministros
							</span>
						</div>
						<span
							class="mx-auto"
							style="
								color: #000000;
								margin: 2px;
								font-size: 14px;
								white-space: pre-line;
							"
							>{{ menCabecera }}
						</span>
					</v-card-title>
					<v-card-text class="mt-n">
						<v-textarea
							v-model="mensaje"
							label="DATOS DE LA ORDEN:"
							rows="3"
							auto-grow
							disabled
							outlined>
						</v-textarea>
						<v-card-actions
							class="mb-n"
							style="display: flex; justify-content: center">
							<v-btn
								style="background-color: #033076; color: #ffffff"
								@click="cerrar">
								Aceptar
							</v-btn>
						</v-card-actions>
					</v-card-text>
				</v-card>
			</v-dialog>
		</form>
	</div>
</template>
<style>
	.spacer {
		margin-top: 20px; /* Ajusta la cantidad de espacio según tus necesidades */
	}

	.custom-text {
		font-size: 12px; /* Modifica el tamaño de letra según tus necesidades */
	}
	.orden {
		margin: 2px;
		max-width: 27%;
	}
	.contenedor-cajas {
		border: 2px solid #abf5b7;
		padding: 10px;
		background-color: #ffffff;
		margin-left: 15px;
		margin-right: 15px;
	}
	.contenedor-cajas-1 {
		border: 2px solid #abf5b7;
		padding: 10px;
		background-color: #ffffff;
		margin-left: 15px;
		margin-right: 15px;
	}

	.contenedor-cajas input {
		margin-bottom: 5px;
		width: 100%;
		padding: 5px;
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
	.kallpa-image {
		margin-top: 35px;
	}
	.fill-height {
		height: 100%;
	}

	.tabla {
		width: 100%;
	}

	.custom-table thead th {
		background-color: #095ba8;
		color: #ffffff !important;
	}
</style>
<script src="./generarOrdenI.js"></script>
