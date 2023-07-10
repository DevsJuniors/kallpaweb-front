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
		<v-row class="contenedor ">
			<v-col cols="12" md="4"
				><div >
					<div class="contenedor-cajas-X" style="margin-top: 24px; margin-left: 10px; display: flex;">
                   <v-date-picker v-model="start" color="#32CC32" class="custom-date-picker" style="margin-right: 20px; flex: 1;"></v-date-picker>
                   <v-date-picker v-model="end" color="#32CC32" class="custom-date-picker" style="flex: 1;"></v-date-picker>
                   </div>

				</div>
			</v-col>

			<v-col cols="3">
				<div style="margin-right: -80px;">
					<div style="margin-left:170px; margin-top: 70px;">
						<v-card>
							<v-card-title style="font-size: 11px"
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
				<!--GRAFICO DE BARRAS -->
				<div>
					<div style="margin-right: 30px; margin-top: 60px;" class="ms-16">
						<Bar
							:key="chartKey"
							:options="chartOptions"
							:data="chartData"></Bar>
					</div></div
			></v-col>
			<v-col cols="2" 
				><div style="margin-left: -50px; margin-top: 80px;">
					<div class="contenedor-c" style="border: 3px solid #0e5d1e; padding: 10px; height: 280px;">
  <v-card-title style="color: rgb(11, 13, 105); font-size: 13px">
    Conteo de Contratos por Estado
  </v-card-title>
  <v-card-text>
    <v-list dense>
      <v-list-item v-for="(cantidad, estado) in conteoContratos" :key="estado">
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

		<div style="margin-top: -140px; width: 1400px; margin-left:50px;">
			<div style="margin-top: 170px" class="Relleno">
				<v-data-table
					:headers="headers"
					:items="contratosFiltrados"
					item-key="IDContrato"
					>
					<template slot="top"> </template>
				</v-data-table>
			</div>
		</div>

		<div>
			<v-container style="margin-left: 300px">
				<v-btn
					class="btn-mover"
					style="
						font-family: 'Trebuchet MS';
						width: 178px;
						background-color: rgb(11, 13, 105);
						color: #ffffff;
						margin-right: 10px;
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
						margin-right: 10px;
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
						margin-right: 10px;
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
						margin-right: 10px;
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
<style>
.report-main .Relleno thead th{
 background-color:rgb(11, 13, 105);
 color: #ffffff  !important;
}
.report-main .contenedor{
	border: 4px solid #010361;
   	margin-top: 6px;
	height: 430px;
	margin-left: 50px;
	margin-right: 65px;
}
.report-main .contenedor-c{
	border: 3px #08622e;
	height: 100px;
	
}
</style>

<script src="./Reportes"></script>
