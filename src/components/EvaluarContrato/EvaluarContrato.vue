<template>
	<div class="evaluar-contrato">
		<v-app-bar color="white" dense dark height="120">
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

		<div class="spacer"></div>
		<div style="display: flex; justify-content: center; align-items: center">
			<h2
				style="
					color: rgba(0, 0, 129, 0.829);
					margin-right: 10px;
					font-size: 30px;
					font-weight: bold;
				">
				Evaluación de
			</h2>
			<h2 style="color: rgb(62, 207, 62); font-size: 30px; font-weight: bold">
				contratos
			</h2>
		</div>
		<v-container fluid>
			<div class="d-flex flex-grow-1">
				<v-data-table
					:headers="headers"
					:items="contratosFiltrados"
					item-key="IDContrato"
					class="custom-table">
					<template slot="top">
						<h3>Filtros de contratos</h3>
						<div class="contenedor-cajas">
							<v-text-field
								v-model="search"
								label="Buscar por ID"
								style="display: inline-block; width: 26%; margin-right: 10px"
								solo></v-text-field>
							<v-combobox
								v-model="searchE"
								style="display: inline-block; width: 35%; margin-right: 10px"
								:items="[
									'Ningún Estado',
									...contratos.map((contrato) => contrato.estado),
								]"
								label="Buscar por estado"
								solo></v-combobox>
							<v-text-field
								v-model="searchF"
								style="display: inline-block; width: 36%; margin-right: 10px"
								label="Buscar por Fecha"
								solo></v-text-field>
						</div>
					</template>
					<template v-slot:item="{ item }">
						<tr>
							<td>{{ item.IDContrato }}</td>
							<td>{{ item.Fecha_Con }}</td>
							<td>{{ item.NumeroRadicado_Con }}</td>
							<td>{{ item.numSum }}</td>
							<td>{{ item.PuntoInstalacion_Con }}</td>
							<td>{{ item.estado }}</td>
							<td>{{ item.IDGabineteCategoria }}</td>
							<td>{{ item.IDTipoInst }}</td>
							<td>{{ item.DNI_cli }}</td>
							<td>{{ item.DNI_Em }}</td>
							<td>
								{{ item.Seleccionar }}
								<v-btn small color="primary" @click="seleccionarContrato(item)">
									<v-icon class="mx-1">mdi-arrange-bring-forward</v-icon>
								</v-btn>
							</td>
						</tr>
					</template>
				</v-data-table>
			</div>
		</v-container>

		<v-container fluid>
			<div class="cliente">
				<h3>Campos del contrato seleccionado</h3>
				<div class="contenedor-cajas-E">
					<v-img
						src="../../assets/contrato.png"
						max-height="100"
						max-width="70"
						style="
							display: inline-block;
							margin-left: 20px;
							margin-bottom: 10px;
							position: absolute;
						">
					</v-img>
					<v-text-field
						label="ID Contrato"
						solo
						disabled
						v-model="IDContrato"
						style="
							display: inline-block;
							width: 19%;
							margin-left: 100px;
						"></v-text-field>
					<!---prepend-icon="mdi-map-marker"-->

					<v-text-field
						label="Numero Suministro"
						solo
						disabled
						style="display: inline-block; width: 19%; margin-left: 50px"
						v-model="numSum"></v-text-field>
					<v-text-field
						label="DNI Cliente"
						solo
						disabled
						style="display: inline-block; width: 19%; margin-left: 40px"
						v-model="DNI_cli"></v-text-field>
					<v-combobox
						:items="estadosA"
						label="Estado de contrato"
						solo
						style="display: inline-block; width: 19%; margin-left: 40px"
						v-model="selectedEstado"></v-combobox>
				</div>
			</div>

			<div class="contenedor-cajas-A">
				<v-btn
					depressed
					style="
						background-color: #47d847;
						color: #ffffff;
						display: inline-block;
						width: 23%;
					"
					class="mx-2 mt-2 mb-4 x-large"
					@click="confirmar"
					>Actualizar Estado
					<v-icon class="mx-1">mdi-border-color</v-icon></v-btn
				>
				<v-btn
					depressed
					style="
						background-color: #47d847;
						color: #ffffff;
						display: inline-block;
						width: 23%;
					"
					class="mx-2 mt-2 mb-4 x-large"
					@click="limpiar"
					>Limpiar Campos
					<v-icon class="mx-1">mdi-cookie-settings-outline</v-icon></v-btn
				>
				<v-btn
					depressed
					style="
						background-color: #47d847;
						color: #ffffff;
						display: inline-block;
						width: 23%;
					"
					class="mx-2 mt-2 mb-4 x-large"
					@click="volverMenu"
					>Volver a Menú <v-icon class="mx-1">mdi-home-analytics</v-icon></v-btn
				>
				<v-dialog v-model="dialogVisible" :width="500">
					<v-card color="#47d847">
						<v-card-title>
							<span class="mx-auto" style="color: white">
								Confirmación de Modificación</span
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
								@click="updateContrato">
								Aceptar
							</v-btn>
							<v-btn
								style="background-color: #033076; color: #ffffff"
								@click="cerrar">
								Cancelar
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
								type="success"
								outlined
								icon="mdi-close-circle">
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
			</div>
		</v-container>
	</div>
</template>
<style>
	.evaluar-contrato .cliente {
		margin: 20px;
		max-width: 100%;
	}
	.evaluar-contrato .contenedor-cajas-E {
		border: 2px solid #47d847;
		padding: 10px;
		padding-top: 15px;
	}
	.evaluar-contrato .contenedor-cajas-A {
		border: 2px solid #ffffff;
		padding: 10px;
	}
	.evaluar-contrato .contenedor-cajas {
		outline: 2px;
		border: 2px solid #095ba8;
		padding: 10px;
	}
	.evaluar-contrato .custom-table thead th {
		background-color: #095ba8;
		color: #ffffff !important;
	}
	.evaluar-contrato .a {
		text-align: left;
		padding-top: 1px;
	}
	.evaluar-contrato .kallpa-image {
		margin-top: 35px;
	}
</style>

<script src="./EvaluarContrato.js"></script>
