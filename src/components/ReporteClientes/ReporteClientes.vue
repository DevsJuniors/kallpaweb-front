<template>
	<div class="report-cli">
		<div>
			<v-app-bar color="white" dense dark height="80">
				<v-toolbar-title>
					<v-img
						src="../../views/Img/Kallpa.png"
						max-height="300"
						max-width="200"
						class="kallpa-image">
					</v-img>
				</v-toolbar-title>

				<v-spacer></v-spacer>

				<v-img
					src="../../views/Img/usuario (3).png"
					max-height="100"
					max-width="50">
				</v-img>
			</v-app-bar>

			<v-footer color="#33cc33" app height="60">
				<v-row align="center" justify="center">
					<v-col cols="12" class="text-center white--text">
						&copy; 2023 KALLPA. Todos los derechos reservados.
					</v-col>
				</v-row>
			</v-footer>

			<div style="margin-top: 10px">
				<h1 class="text-center" style="font-family: 'Trebuchet MS'">
					<span style="color: #32cc32">REPORTE</span>
					<span style="color: #203864"> - CLIENTES</span>
				</h1>
			</div>
		</div>

		<div>
			<div class="container" style="margin-left: 10px">
				<div class="filtros contenedor-cajas-E">
					<v-card-title style="color: rgb(11, 13, 105); font-size: 30px"
						>Filtros</v-card-title
					>

					<v-card-text>
						<div class="contenedor-cajas-A">
							<p style="color: rgb(40, 180, 40); font-size: 18px">
								Selecciona Distrito
							</p>
							<v-combobox
								v-model="distritoSeleccionado"
								:items="distritos"
								item-text="Nombre_Di"
								item-value="IDDistrito"
								label="Distrito"
								clearable
								solo
								style="font-family: 'Trebuchet MS'">
							</v-combobox>
						</div>

						<div class="contenedor-cajas-A" style="margin-top: 15px">
							<p style="color: rgb(40, 180, 40); font-size: 18px">
								Estrato Social
							</p>
							<v-combobox
								v-model="estratoSeleccionado"
								:items="estratos"
								item-text="Descripcion_Estrato"
								item-value="IDEstrato"
								label="Seleccionar Estrato Social"
								clearable
								solo
								style="font-family: 'Trebuchet MS'">
							</v-combobox>
						</div>
					</v-card-text>

					<v-card-actions>
						<v-btn
							@click="generarReporte"
							style="
								font-family: 'Trebuchet MS';
								width: 177px;
								background-color: rgb(11, 13, 105);
								color: #ffffff;
							"
							>Generar Reporte</v-btn
						>
						<v-btn
							@click="resetFilters"
							style="
								font-family: 'Trebuchet MS';
								width: 177px;
								background-color: rgb(11, 13, 105);
								color: #ffffff;
							"
							>Atras</v-btn
						>
					</v-card-actions>
				</div>
			</div>
		</div>

		<div>
			<div
				style="margin-left: 445px; margin-right: 400px"
				class="contenedor-cajas-F">
				<v-card-title style="color: rgb(11, 13, 105); font-size: 30px"
					>Fecha</v-card-title
				>
				<v-row class="d-flex">
					<v-col cols="12" md="6">
						<v-date-picker v-model="start" color="#32CC32"></v-date-picker>
					</v-col>
					<v-col cols="12" md="6">
						<v-date-picker v-model="end" color="#32CC32"></v-date-picker>
					</v-col>
				</v-row>
			</div>
		</div>

		<div>
			<div class="reportec">
				<v-container style="margin-right: 1px" class="contenedor-cajas-B">
					<v-card outlined class="reporte">
						<v-card-title style="color: #32cc32; font-size: 30px"
							>Reporte de Clientes</v-card-title
						>
						<v-card-text>
							<textarea
								v-model="reporteContratos"
								style="
									height: 385px;
									width: 340px;
									font-size: 16px;
									font-family: 'Segoe UI';
									padding: 13px;
								"
								disabled
								>{{ reporteClientes }}</textarea
							>
						</v-card-text>
					</v-card>
				</v-container>
			</div>
		</div>

		<div>
			<div class="tabla fill-height" style="margin-top: -15px">
				<v-data-table
					:headers="headers"
					:items="clientes"
					:search="search"
					:loading="loading"
					:items-per-page="5"
					class="custom-table">
					<template v-slot:top>
						<v-toolbar flat>
							<v-card-title
								style="color: #32cc32; font-size: 30px; margin-left: -33px"
								>Lista de Reportes de Clientes</v-card-title
							>
							<v-spacer></v-spacer>

							<v-text-field
								v-model="search"
								append-icon="mdi-magnify"
								label="Buscar"
								single-line
								hide-details>
							</v-text-field>
						</v-toolbar>
					</template>
					<template v-slot:item="{ item }">
						<tr></tr>
					</template>
				</v-data-table>
			</div>
		</div>
	</div>
</template>

<style>
	.report-cli .max-width-400 {
		max-width: 400px;
	}
	.report-cli .reporte {
		width: 380px;
		padding: 4px;
	}
	.report-cli .filtros {
		width: 420px;
		margin-right: auto;
	}
	.report-cli .reportec {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 20px;
	}
	.report-cli .container {
		display: flex;
		justify-content: flex-end;
	}
	.report-cli textarea {
		width: 100%;
		height: 100%;
		resize: none;
		border: none;
		font-family: Arial, sans-serif;
		font-size: 14px;
		color: #333;
		background-color: #f5f5f5;
	}
	.report-cli .texto-derecha {
		text-align: right;
	}
	.report-cli .texto-center {
		text-align: center;
	}
	.report-cli .kallpa-image {
		margin-top: 35px;
	}
	.report-cli .titulo-bienvenido {
		font-size: 32px;
		font-family: Sans-serif;
		color: rgb(252, 252, 252);
	}
	.report-cli .contenedor-cajas-E {
		border: 4px solid #010361;
		padding: 10px;
		height: 100%;
	}
	.report-cli .contenedor-cajas-F {
		border: 4px solid #010361;
		padding: 10px;
		margin-top: -478px;
		height: 90%;
	}
	.report-cli .contenedor-cajas-B {
		border: 4px solid #0fa14700;
		padding: 10px;
		margin-top: -487px;
		height: 498px;
		border-radius: 10%;
	}
	.report-cli .contenedor-cajas-A {
		border: 3px solid #32cc32;
		margin-top: 10px;
		padding: 10px;
	}
	.report-cli .titulo {
		font-size: 32px;
		font-family: Sans-serif;
		color: rgb(252, 252, 252);
	}
	.report-cli .kallpa-image {
		margin-top: 35px;
	}
	.report-cli .texto-encima {
		position: absolute;
		top: 2;
		left: 0;
		right: 5;
		text-align: center;
		background-color: rgba(
			255,
			255,
			255,
			0.8
		); /* Fondo semi-transparente para legibilidad */
		padding: 2px;
		z-index: 1; /* Asegura que el texto esté por encima de los botones */
	}
	/* Estilos para los botones */
	.report-cli .btn-container {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		justify-content: flex-end;
		/* Agrega margen superior para separar el texto de los botones si lo deseas */
		margin-top: 40px;
	}
	.report-cli .btn-wide {
		width: 20px;
		margin-left: auto;
	}
	.report-cli .border {
		background-color: #33cc33;
		border: 3px solid #33cc33;
		padding: 10px;
		display: inline-block;
		border-radius: 25px;
	}
	.report-cli .border-bien {
		background-color: #33cc33;
		border: 3px solid #33cc33;
		padding: 10px;
		display: fixed;
		border-radius: 25px;
	}
	.report-cli .floating-rectangle {
		position: absolute;
		left: 25%;
		transform: translateX(-50%);
		top: 14%;
		width: 500px;
		height: 550px;
		background-color: #33cc33;
		border: 4px solid #33cc33;
		border-radius: 30px;
		padding: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.report-cli .floating-rectan {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 4%;
		width: 450px;
		height: 500px;
		background-color: #ffffff;
		border: 4px solid #ffffff;
		border-radius: 30px;
		padding: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.report-cli .fill-height {
		height: 100%;
	}
	.report-cli .tabla {
		width: 97%;
		margin-left: 27px;
	}
	.report-cli .custom-table thead th {
		background-color: rgb(11, 13, 105);
		color: #ffffff !important;
	}
</style>

<script src="./ReporteClientes.js"></script>
