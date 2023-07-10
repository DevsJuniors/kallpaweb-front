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
		<div style="display: flex; justify-content: center; align-items: center">
			<h2
				style="
					color: rgba(0, 0, 129, 0.829);
					margin-right: 10px;
					font-size: 30px;
					font-weight: bold;
				">
				Visualización de
			</h2>
			<h2 style="color: rgb(62, 207, 62); font-size: 30px; font-weight: bold">
				Consolidado de Contratos
			</h2>
		</div>
		<v-container fluid>
			<div class="d-flex flex-grow-1">
				<div class="tabla" style="margin-right: 15px">
					<v-data-table
						:headers="headers"
						:items="contratos"
						:search="search"
						:loading="loading"
						class="elevation-1 custom-table">
						<template v-slot:top>
							<v-toolbar flat>
								<v-toolbar-title> Contratos</v-toolbar-title>
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
								<td>{{ item.IDContrato }}</td>
								<td>{{ item.DNI_cli }}</td>
								<td>{{ item.DNI_Em }}</td>
								<td>{{ item.estado }}</td>
								<td>{{ item.Fecha_Con }}</td>
								<td>{{ item.numSum }}</td>
								<td>
									{{ item.Seleccionar }}
									<v-btn
										small
										color="primary"
										@click="seleccionarContrato(item)">
										<v-icon class="mx-1">mdi-arrange-bring-forward</v-icon>
									</v-btn>
								</td>
								<td>
									{{ item.Visualizar }}
									<v-btn small color="primary" @click="mostrarContrato(item)">
										<v-icon class="mx-1">mdi-eye-settings</v-icon>
									</v-btn>
								</td>
							</tr>
						</template>
					</v-data-table>
					<v-btn
						depressed
						color="primary"
						style="width: 15%"
						class="button-1 mt-2 mb-4 x-large"
						@click="limpiar">
						Limpiar
						<v-icon class="mx-1">mdi-backup-restore</v-icon>
					</v-btn>
					<v-btn
						depressed
						color="primary"
						style="width: 15%"
						class="button-1 mt-2 mb-4 x-large"
						@click="volver">
						Atras
						<v-icon class="mx-1">mdi-keyboard-backspace</v-icon>
					</v-btn>
					<v-btn
						depressed
						style="
							background-color: #47d847;
							color: #ffffff;
							margin-left: 10px;
							width: 30%;
						"
						class="mt-2 mb-4 x-large"
						@click="ordenInstalacion">
						Orden de Instalación
						<v-icon class="mx-1">mdi-arrow-right-drop-circle</v-icon>
					</v-btn>
					<v-btn
						depressed
						style="
							background-color: #47d847;
							color: #ffffff;
							margin-left: 15px;
							width: 30%;
						"
						class="mt-2 mb-4 x-large"
						@click="ordenHabilitacion">
						Orden de Habilitación
						<v-icon class="mx-1">mdi-arrow-right-drop-circle</v-icon>
					</v-btn>
				</div>
				<div class="contrato">
					<h3>Datos del Contrato</h3>
					<div class="contenedor-cajas">
						<v-text-field
							label="IDContrato "
							placeholder=""
							filled
							:disabled="!Select"
							v-model="frmContrato.IDContrato"
							class="full-width"></v-text-field>
						<v-text-field
							label="Fecha"
							placeholder=""
							filled
							:disabled="!Select"
							v-model="frmContrato.Fecha_Con"></v-text-field>
						<v-text-field
							label="Numero de Suministro"
							placeholder=""
							filled
							:disabled="!Select"
							v-model="frmContrato.numSum"></v-text-field>
						<v-text-field
							label="Estado"
							placeholder=""
							filled
							:disabled="!Select"
							v-model="frmContrato.estado"></v-text-field>
						<v-text-field
							label="Numero de Radicado"
							placeholder=""
							filled
							:disabled="!Select"
							v-model="frmContrato.NumeroRadicado_Con"></v-text-field>
						<div class="text-center"></div>
						<v-dialog v-model="dialogError" :width="500">
							<v-card color="#ec4a4a">
								<v-card-title>
									<span class="mx-auto" style="color: white">¡Verifique!</span>
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
						<v-dialog v-model="dialogVisible" :width="800">
							<v-card color="#ffffff" class="pa-0">
								<v-card-title>
									<div style="display: flex; align-items: center">
										<span
											class="mx-auto"
											style="color: #033076; margin-right: 2px">
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
										label="DATOS DEL CONTRATO:"
										rows="3"
										auto-grow
										outlined
										disabled>
									</v-textarea>
									<v-card-actions
										class="mb-n"
										style="display: flex; justify-content: center">
										<v-btn
											style="background-color: #033076; color: #ffffff"
											@click="aceptar">
											Aceptar
										</v-btn>
									</v-card-actions>
								</v-card-text>
							</v-card>
						</v-dialog>
					</div>
				</div>
			</div>
		</v-container>
	</div>
</template>
<script src="./consultarContratos.js"></script>
<style>
	.tabla {
		flex-grow: 1;
	}
	.elevation-1 {
		width: 100%;
		box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
			0 2px 10px 0 rgba(0, 0, 0, 0.12);
	}
	.contenedor-cajas {
		border: 2px solid #abf5b7;
		padding: 10px;
	}

	.contenedor-cajas input {
		margin-bottom: 5px;
		width: 100%;
		padding: 5px;
		margin-top: 10px;
	}
	.custom-table thead th {
		background-color: #095ba8;
		color: #ffffff !important;
	}
	.button-1 {
		background: #033076;
		color: #ffffff;
		border-color: #232323;
		border-width: 5px;
		border-style: solid;
		border-radius: 2px 2px 2px 2px;
		font-weight: 400;
		font-size: 24px;
		text-align: right;
		margin: 10px;
	}
	.kallpa-image {
		margin-top: 35px;
	}
	.orden {
		margin: 2px;
		flex-grow: 1;
		margin-top: 10px;
	}
</style>
