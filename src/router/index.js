import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login/Login.vue"),
  },
  {
    path: "/menu",
    name: "Menu",
    component: () => import("../views/Menu/Menu.vue"),
  },
  {
    path: "/menu/registrarEmpleado",
    name: "Registrar Empleado",
    component: () =>
      import("../components/RegistrarEmpleado/RegistrarEmpleado.vue"),
  },
  {
    path: "/menu/registrarCliente",
    name: "Registrar Cliente",
    component: () =>
      import("../components/RegistrarCliente/RegistrarCliente.vue"),
  },
  {
    path: "/menu/registrarDomicilio",
    name: "Registrar Domicilio",
    component: () =>
      import("../components/RegistrarDomicilio/RegistrarDomicilio.vue"),
  },
  {
    path: "/menu/registrarContrato",
    name: "Registrar Contrato",
    component: () =>
      import("../components/RegistrarContrato/RegistrarContrato.vue"),
  },
  {
    path: "/menu/consultarCliente",
    name: "Consultar Cliente",
    component: () =>
      import("../components/ConsultarCliente/ConsultarCliente.vue"),
  },
  {
    path: "/menu/evaluarContrato",
    name: "Evaluar Contrato",
    component: () =>
      import("../components/EvaluarContrato/EvaluarContrato.vue"),
  },
  {
    path: "/menu/generarOrdenI",
    name: "Generar OrdenI",
    component: () => import("../components/GenerarOrdenI/generarOrdenI.vue"),
  },
  {
    path: "/menu/asignarTecnico",
    name: "Asignar Tecnico",
    component: () => import("../components/AsignarTecnico/asignarTecnico.vue"),
  },
  {
    path: "/menu/registrarMateriales",
    name: "Registrar Materiales",
    component: () =>
      import("../components/registrarMateriales/registrarMateriales.vue"),
  },
  {
    path: "/menu/generarOrdenH",
    name: "Generar OrdenH",
    component: () => import("../components/generarOrdenH/generarOrdenH.vue"),
  },
  {
    path: "/menu/asignarHabilitador",
    name: "Asignar Habilitador",
    component: () =>
      import("../components/asignarHabilitador/asignarHabilitador.vue"),
  },
  {
    path: "/reportes",
    name: "Reportes",
    component: () => import("../views/Reportes/Reportes.vue"),
  },
  {
    path: "/reportes/contratos",
    name: "Reporte Contrato",
    component: () =>
      import("../components/ReporteContrato/ReporteContrato.vue"),
  },
  {
    path: "/reportes/clientes",
    name: "Reporte Clientes",
    component: () =>
      import("../components/ReporteClientes/ReporteClientes.vue"),
  },
  {
    path: "/reportes/ordenes",
    name: "Reporte Ordenes",
    component: () => import("../components/ReporteOrdenes/ReporteOrdenes.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
