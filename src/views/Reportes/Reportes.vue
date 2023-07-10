<template>
	<div class="report-main">
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

			<div>
				<div
					style="display: flex; justify-content: center; align-items: center">
					<h2
						style="
							color: rgba(0, 0, 129, 0.829);
							margin-right: 10px;
							font-size: 35px;
							font-weight: bold;
						">
						Reporte -
					</h2>
					<h2
						style="color: rgb(62, 207, 62); font-size: 35px; font-weight: bold">
						General
					</h2>
				</div>
			</div>
		</div>

		<!-- CONTENEDOR  -->
		<!-- CONTEDOR DE LOS CALENDARIOS  -->
		<v-row>
			<v-col cols="12" md="4"
				><div>
					<div
						class="contenedor-cajas-X"
						style="margin-top: 24px; margin-left: 25px">
						<v-date-picker
							v-model="start"
							color="#32CC32"
							class="custom-date-picker"
							style="margin-right: 10px"></v-date-picker>
						<v-date-picker
							v-model="end"
							color="#32CC32"
							class="custom-date-picker"></v-date-picker>
					</div>
				</div>
			</v-col>

			<v-col cols="3">
				<div>
					<div>
						<v-card>
							<v-card-title style="font-size: 12px"
								>Gráfico de Torta: Contratos por Estado</v-card-title
							>
							<v-card-text style="height: 200px; width: 200px">
								<Pie
									v-if="pieChartData.labels.length"
									:data="pieChartData"
									:options="chartOptions"
									:key="chartKeyPie" />
							</v-card-text>
						</v-card>
					</div>
				</div>
			</v-col>
			<v-col cols="3">
				<div>
					<div style="margin-right: 160px" class="ms-2">
						<Bar
							:key="chartKey"
							:options="chartOptions"
							:data="chartData"></Bar>
					</div></div
			></v-col>
			<v-col cols="2"
				><div>
					<div class="contenedor-cajas-Z">
						<v-card-title style="color: rgb(11, 13, 105); font-size: 14px">
							Conteo de Contratos por Estado
						</v-card-title>
						<v-card-text>
							<v-list dense>
								<v-list-item
									v-for="(cantidad, estado) in conteoContratos"
									:key="estado">
									<v-list-item-content>
										<v-list-item-title>
											{{ estado }}: {{ cantidad }} contratos
										</v-list-item-title>
									</v-list-item-content>
								</v-list-item>
							</v-list>
						</v-card-text>
					</div>
				</div>
			</v-col>
		</v-row>

		<!-- FIN CONTEDOR  -->

		<div>
			<div style="margin-top: 170px" class="tabla fill-height">
				<v-data-table
					:headers="headers"
					:items="contratosFiltrados"
					item-key="IDContrato"
					class="elevation-1">
					<template slot="top"> </template>
				</v-data-table>
			</div>
		</div>

		<div>
			<v-container style="margin-left: 50px">
				<v-btn
					class="btn-mover"
					style="
						font-family: 'Trebuchet MS';
						width: 178px;
						background-color: rgb(11, 13, 105);
						color: #ffffff;
					"
					@click="generarReporte"
					>Generar Reporte</v-btn
				>
				<v-btn
					class="btn-mover"
					style="
						font-family: 'Trebuchet MS';
						width: 178px;
						background-color: rgb(11, 13, 105);
						color: #ffffff;
					"
					@click="reporteContrato"
					>Reporte Contratos</v-btn
				>
				<v-btn
					class="btn-mover"
					style="
						font-family: 'Trebuchet MS';
						width: 178px;
						background-color: rgb(11, 13, 105);
						color: #ffffff;
					"
					@click="reporteCliente"
					>Reporte Clientes</v-btn
				>
				<v-btn
					class="btn-mover"
					style="
						font-family: 'Trebuchet MS';
						width: 178px;
						background-color: rgb(11, 13, 105);
						color: #ffffff;
					"
					@click="reporteOrdenes"
					>Reporte Ordenes</v-btn
				>
				<v-btn
					class="btn-mover"
					style="
						font-family: 'Trebuchet MS';
						width: 178px;
						background-color: rgb(11, 13, 105);
						color: #ffffff;
					"
					@click="menu"
					>Atras</v-btn
				>
			</v-container>
			<v-footer color="#33cc33" app height="60">
				<v-row align="center" justify="center">
					<v-col cols="12" class="text-center white--text">
						&copy; 2023 KALLPA. Todos los derechos reservados.
					</v-col>
				</v-row>
			</v-footer>
		</div>
	</div>
</template>

<script src="./Reportes"></script>
