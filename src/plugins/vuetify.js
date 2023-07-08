import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "vuetify/dist/vuetify.min.css";

import es from "vuetify/lib/locale/es";

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { es },
    current: "es",
  },
  theme: {
    // themes: {
    //   light: {
    //     primary: "#0039a6",
    //     orange: "#ff7900",
    //   },
    //   dark: {
    //     primary: "#0039a6",
    //     orange: "#ff7900",
    //   },
    // },
  },
});
