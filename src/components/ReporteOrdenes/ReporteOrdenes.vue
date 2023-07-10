<template>
	<div class="report-order">
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
					<span style="color: #203864"> - ORDENES</span>
				</h1>
			</div>
		</div>

		<div>
			<div class="container" style="margin-left: 14px">
				<div class="filtros contenedor-cajas-E">
					<v-card-title style="color: rgb(11, 13, 105); font-size: 30px"
						>Filtros</v-card-title
					>

					<v-card-text>
						<p style="margin-top: -25px;">Fecha</p>
						<v-row style="margin-top: -25px;">
							<v-col cols="12" sm="12">
								<v-date-picker
									v-model="start"
									color="#32CC32"
									style="margin-left: 24px"></v-date-picker>
							</v-col>
						</v-row>
					</v-card-text>

					<v-card-actions style="margin-top: -20px;">
						<v-btn
							@click="generarReporte"
							style="
								font-family: 'Trebuchet MS';
								width: 178px;
								background-color: rgb(11, 13, 105);
								color: #ffffff;
							"
							>Generar Reporte</v-btn
						>
						<v-btn
							@click="reporte"
							style="
								font-family: 'Trebuchet MS';
								width: 178px;
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
			<div class="reportec">
				<v-container style="margin-right: 7px" class="contenedor-cajas-B">
					<v-card outlined class="reporte">
						<v-card-title style="color: rgb(40, 180, 40); font-size: 30px"
							>Reporte de Ordenes</v-card-title
						>
						<v-card-text>
							<textarea
								v-model="reporteOrdenes"
								style="
									height: 410px;
									width: 320px;
									font-size: 16px;
									font-family: 'Segoe UI';
									padding: 13px;
								"
								disabled></textarea>
						</v-card-text>
					</v-card>
				</v-container>
			</div>
		</div>

		<div>
			<div class="tabla-RO fill-height">
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
	.report-order .max-width-400 {
		max-width: 400px;
	}
	.report-order .reporte {
		width: 357px;
		padding: 4px;
	}
	.report-order .filtros {
		max-width: 400px;
		margin-right: auto;
	}
	.report-order .reportec {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 20px;
	}
	.report-order .container {
		display: flex;
		justify-content: flex-end;
	}
	.report-order textarea {
		width: 100%;
		height: 100%;
		resize: none;
		border: none;
		font-family: Arial, sans-serif;
		font-size: 14px;
		color: #333;
		background-color: #f5f5f5;
	}
	.report-order .texto-derecha {
		text-align: right;
	}
	.report-order .texto-center {
		text-align: center;
	}
	.report-order .kallpa-image {
		margin-top: 35px;
	}
	.report-order .titulo-bienvenido {
		font-size: 32px;
		font-family: Sans-serif;
		color: rgb(252, 252, 252);
	}
	.report-order .contenedor-cajas-E {
		border: 4px solid #010361;
		padding: 10px;
		margin-top: 1px;
		height: 502px;
	}
	.report-order .contenedor-cajas-F {
		border: 4px solid #010361;
		padding: 10px;
		margin-top: -480px;
		height: 100%;
	}
	.report-order .contenedor-cajas-B {
		border: 4px solid #0fa14700;
		padding: 10px;
		margin-top: -545px;
		height: 523px;
		border-radius: 10%;
	}
	.report-order .titulo {
		font-size: 32px;
		font-family: Sans-serif;
		color: rgb(252, 252, 252);
	}
	.report-order .kallpa-image {
		margin-top: 35px;
	}
	.report-order .texto-encima {
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
	.report-order .btn-container {
		display: flex;
		flex-direction: row-reverse;
		flex-wrap: wrap;
		justify-content: flex-end;
		/* Agrega margen superior para separar el texto de los botones si lo deseas */
		margin-top: 40px;
	}
	.report-order .btn-wide {
		width: 20px;
		margin-left: auto;
	}
	.report-order .border {
		background-color: #33cc33;
		border: 3px solid #33cc33;
		padding: 10px;
		display: inline-block;
		border-radius: 25px;
	}
	.report-order .border-bien {
		background-color: #33cc33;
		border: 3px solid #33cc33;
		padding: 10px;
		display: fixed;
		border-radius: 25px;
	}
	.report-order .floating-rectangle {
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
	.report-order .floating-rectan {
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
	.report-order .fill-height {
		height: 100%;
	}
	.report-order .tabla-RO {
		width: 46%;
		margin-left: 439px;
		margin-top: -550px;
	}
	.report-order .custom-table thead th {
		background-color: rgb(11, 13, 105);
		color: #ffffff !important;
	}
</style>
<script src="./ReporteOrdenes.js"></script>
