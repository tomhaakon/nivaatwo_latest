import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#EEEEEE",
        secondary: "#EEEEEE", //grey lighten-3
        accent: "#009688",
        error: "#f44336",
        warning: "#ff9800",
        info: "#00bcd4",
        success: "#8bc34a",
        link: "#000000",
      },
    },
  },
});
