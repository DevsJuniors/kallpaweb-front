<template>
	<div class="menu">
		<div class="floating-rectan-boton">
			<div class="floating-rectan-titulo">
				<h1 class="texto-center titulo-bienvenido">
					¿Qué acción realizaremos?
				</h1>
			</div>
			<div style="margin-top: 1px">
				<v-container>
					<v-row class="mx-auto " style="margin-top: 10%"  >
						<!-- BOTON REGISTRAR EMPLEADO 1 -->
						<v-col cols="12" sm="4">
							<v-btn
								dark
								text
								class="border-btnA"
								@click="registrarEmpleado"
								height="200px"
								elevation="13"
								width="200px"
								style="margin-right: 50px; margin-top: 18%"
								fab
								outlined
								x-large>
								<v-img
									src="../Img/registro (2).png"
									max-height="150"
									max-width="150"
									class="icon-center"></v-img>
							</v-btn>
              <h1 class="titulo-btn btnempleado texcolor">Registrar Empleado</h1>
						</v-col>
							<!-- BOTON REGISTRAR CLIENTE 2 -->
              <v-col cols="12" sm="4">
							<v-btn
								dark
								text
								class="border-btnA"
								@click="registrarCliente"
								height="200px"
								elevation="13"
								width="200px"
								fab
								outlined
								x-large
								style="margin-right: 50px; margin-top: 18%">
								<v-img
									src="../Img/registrarse.png"
									max-height="150"
									max-width="150"
									class="icon-center"></v-img>
							</v-btn>
              <h1 class="titulo-btn btncliente texcolor">Registrar Cliente</h1>
						</v-col>
							<!-- BOTON REGISTRAR CONTRATO 3-->
              <v-col cols="12" sm="4">
							<v-btn
								dark
								text
								class="border-btnA"
								@click="registrarContrato"
								height="200px"
								elevation="13"
								width="200px"
								fab
								outlined
								x-large
								style="margin-right: 50px; margin-top: 18%">
								<v-img
									src="../Img/contrato (3).png"
									max-height="150"
									max-width="150"
									class="icon-center"></v-img>
							</v-btn>
              <h1 class="titulo-btn btncontrato texcolor">Registrar Contrato</h1>
						</v-col>
					</v-row>
					<v-row class="mx-auto">
						<!-- BOTON CONSULTAR CONTRATO  4 -->
						<v-col cols="12" sm="4">
							<v-btn
								dark
								text
								class="border-btnA"
								@click="consultarContrato"
								height="200px"
								elevation="13"
								width="200px"
								fab
								outlined
								x-large
								style="margin-right: 50px">
								<v-img
									src="../Img/buscar (1).png"
									max-height="150"
									max-width="150"
									class="icon-center"></v-img>
							</v-btn>
              <h1 class="titulo-btn btnconsultar texcolor">Consultar Contrato</h1>
						</v-col>
							<!-- BOTON EVALUAR CONTRATO 5-->
              <v-col cols="12" sm="4">
							<v-btn
								dark
								text
								class="border-btnA"
								@click="evaluarContrato"
								height="200px"
								elevation="13"
								width="200px"
								fab
								outlined
								x-large
								style="margin-right: 50px">
								<v-img
									src="../Img/evaluacion.png"
									max-height="150"
									max-width="150"
									class="icon-center"></v-img>

							</v-btn>
              <h1 class="titulo-btn btnevaluar texcolor">Evaluar Contrato</h1>
						</v-col>
							<!-- BOTON GENERAR ORDEN DE INSTALACION 6 -->
							<v-col cols="12" sm="4">
              <v-btn
								dark
								text
								class="border-btnA"
								@click="reportes"
								height="200px"
								elevation="13"
								width="200px"
								fab
								outlined
								x-large
								style="margin-right: 50px">
								<v-img
									src="../Img/reporte (1).png"
									max-height="150"
									max-width="150"
									class="icon-center"></v-img>
							</v-btn>
              <h1 class="titulo-btn btnreportes texcolor">Reportes</h1>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</div>
		<div class="floating-rectan">
			<div style="margin-top: 4px">
				<v-container>
					<h1 class="titulo-bien texto-center">
						<span>¡Bienvenido!</span>
					</h1>
					<v-img
						src="../Img/Kallpa.png"
						max-height="330"
						max-width="250"
						class="mx-auto"
						style="margin-top: 10px"></v-img>
					<v-img
						src="../Img/usuario (3).png"
						max-height="150"
						max-width="120"
						class="mx-auto usuar"
						style="margin-top: -10%"></v-img>
					<h1 class="texto-center titulo-nom">¡HOLA!</h1>
					<h2 class="texto-center titulo-nom">...</h2>
					<h3
						style="margin-top: 3%"
						class="texto-center titulo-acc border-bien">
						Accesos Rápidos
					</h3>

					<v-row class="mx-auto" style="margin-top: 0%">
						<!-- BOTON SUNAT 1 -->
						<v-col cols="12" sm="4">
							<v-btn
								color="rgba(255, 255, 255, 0.8)"
								dark
								text
								class="border-btn"
								href="https://acortar.link/yhk230"
								target="_blank"
								height="90px"
								elevation="13"
								width="90px"
								fab
								outlined
								x-large>
								<v-img
									src="../Img/unnamed.png"
									max-height="100"
									max-width="150"
									class="icon-center"></v-img>
							</v-btn>
							<h1 class="titulo-btn btnsunat">Sunat</h1>
						</v-col>
						<!-- BOTON ASIGNAR GMAIL 2 -->
						<v-col cols="12" sm="4">
							<v-btn
								color="rgba(255, 255, 255, 0.8)"
								dark
								text
								class="border-btn"
								href="https://mail.google.com/mail/?authuser=0"
								target="_blank"
								height="90px"
								elevation="13"
								width="90px"
								fab
								outlined
								x-large>
								<v-img
									src="../Img/Gmail_icon_(2020).svg.png"
									max-height="100"
									max-width="60"
									class="icon-center"></v-img>
							</v-btn>
							<h1 class="titulo-btn btngmail">Gmail</h1>
						</v-col>
						<!-- BOTON ASIGNAR DRIVE 3 -->
						<v-col cols="12" sm="4">
							<v-btn
								color="rgba(255, 255, 255, 0.8)"
								dark
								text
								class="border-btn"
								href="https://drive.google.com/?authuser=0"
								target="_blank"
								height="90px"
								elevation="13"
								width="90px"
								fab
								outlined
								x-large>
								<v-img
									src="../Img/Google_Drive_icon_(2020).svg.png"
									max-height="100"
									max-width="60"
									class="icon-center"></v-img>
							</v-btn>
							<h1 class="titulo-btn btndrive">Drive</h1>
						</v-col>
					</v-row>
					<v-row>
						<!-- BOTON ASIGNAR GOOGLE -->
						<v-col cols="12" sm="4">
							<v-btn
								color="rgba(255, 255, 255, 0.8)"
								dark
								text
								class="border-btn btngogle"
								href="https://www.google.com"
								target="_blank"
								height="90px"
								elevation="13"
								width="90px"
								fab
								style="margin-right: 100%"
								outlined
								x-large>
								<v-img
									src="../Img/300221.png"
									max-height="100"
									max-width="60"
									class="icon-center"></v-img>
							</v-btn>
							<h1 class="titulo-btn">Google</h1>
						</v-col>
						<!-- BOTON ASIGNAR MAPS -->
						<v-col cols="12" sm="4">
							<v-btn
								color="rgba(255, 255, 255, 0.8)"
								dark
								text
								class="border-btn"
								href="https://maps.google.com/?authuser=0"
								target="_blank"
								height="90px"
								elevation="13"
								width="90px"
								fab
								outlined
								x-large>
								<v-img
									src="../Img/google_maps_icon_130921.png"
									max-height="100"
									max-width="60"
									class="icon-center"></v-img>
							</v-btn>
							<h1 class="titulo-btn btnmaps">Maps</h1>
						</v-col>
						<!-- BOTON CALIDAD -->
						<v-col cols="12" sm="4">
							<v-btn
								cols="12"
								sm="6"
								color="rgba(255, 255, 255, 0.8)"
								dark
								text
								class="border-btn"
								href="https://www.calidda.com.pe/"
								target="_blank"
								height="90px"
								elevation="13"
								width="90px"
								fab
								outlined
								x-large>
								<v-img
									src="../Img/calidda-gas-natural-del-peru-logo-55DA79B832-seeklogo.com.png"
									max-height="100"
									max-width="70"
									class="icon-center"></v-img>
							</v-btn>
							<h1 class="titulo-btn btncaliddad">Cálidda</h1>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			registrarEmpleado() {
				this.$router.push("/menu/registrarEmpleado");
			},
			registrarCliente() {
				this.$router.push("/menu/registrarCliente");
			},
			registrarContrato() {
				this.$router.push("/menu/registrarContrato");
			},
			consultarCliente() {
				this.$router.push("/menu/consultarCliente");
			},
			evaluarContrato() {
				this.$router.push("/menu/evaluarContrato");
			},
			generarOrdenI() {
				this.$router.push("/menu/generarOrdenI");
			},
			asignarTecnico() {
				this.$router.push("/menu/asignarTecnico");
			},
			registrarMateriales() {
				this.$router.push("/menu/registrarMateriales");
			},
			generarOrdenH() {
				this.$router.push("/menu/generarOrdenH");
			},
			asignarHabilitador() {
				this.$router.push("/menu/asignarHabilitador");
			},
			reportes() {
				this.$router.push("/reportes");
			},
			consultarContrato() {
				this.$router.push("/menu/consultarContratos");
			},
		},
	};
</script>

<style>
	.menu .texto-derecha {
		text-align: right;
	}
	.menu .texto-center {
		text-align: center;
	}

	.menu .kallpa-image {
		margin-top: 35px;
	}

	.menu .titulo-bienvenido {
		margin-top: 30px;
		font-size: 45px;
		margin-left: -10% !important;
		font-family: Tahoma !important;
		color: #ffffff;
	}
	.menu .titulo-btn {
		text-align: center;
		margin-top: 5px;
		font-size: 20px;
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif !important;
		color: #000000;
	}
  .menu .texcolor {
		color: #ffffff;
    font-family: Tahoma !important;
	}
	.menu .titulo-bien {
		font-size: 50px;
		font-family: Tahoma !important;
		color: #032f76;
	}
	.menu .titulo-nom {
		font-size: 20px;
		font-family: Tahoma !important;
		color: #032f76;
	}
	.menu .titulo-acc {
		font-size: 20px;
		font-family: Tahoma !important;
		color: #ffffff;
	}
  .menu .btncliente{
    margin-left: -45% !important;
  }
  .menu .btnempleado{
    margin-left: -45% !important;
  }
  .menu .btncontrato{
    margin-left: -45% !important;
  }
  .menu .btnconsultar{
    margin-left: -45% !important;
  }
  .menu .btnevaluar{
    margin-left: -45% !important;
  }
  .menu .btnreportes{
    margin-left: -45% !important;
  }
	.menu .btnmaps {
		margin-left: -20% !important;
	}
	.menu .btngmail {
		margin-left: -22% !important;
	}
	.menu .btndrive {
		margin-left: -21% !important;
	}
	.menu .btnsunat {
		margin-left: -20% !important;
	}
	.menu .btngogle {
		margin-left: 12% !important;
	}
	.menu .btncaliddad {
		margin-left: -24% !important;
	}

	.menu .border-btnA {
		border: 4px white;
		background: #033076 !important;
		padding: 4px;
		display: inline-flex;
		border-radius: 20px;
	}


	.menu .border-btn {
		border: 3px solid #33cc33;
		padding: 4px;
		display: inline-flex;
		border-radius: 20px;
	}

	.menu .border-bien {
		background-color: #032f76;
		border: 3px solid #033076;
		padding: 10px;
		display: fixed;
		border-radius: 20px;
	}

	.menu .floating-rectan {
		position: absolute;
		left: 14%;
		transform: translateX(-50%);
		top: 0%;
		width: 450px;
		height: 755px;
		background-color: #ffffff;
		padding: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.menu .floating-rectan-boton {
		position: absolute;
		left: 70%;
		transform: translateX(-50%);
		top: 0%;
		width: 1500px;
		height: 755px;
		background-color: #33cc33;
		padding: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
	.menu .floating-rectan-titulo {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0%;
		width: 1500px;
		height: 150px;
		background-color: #033076;
		padding: 10px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}
</style>
