<template>
  <div>
    <center>
      <v-row>
        <v-col lg="4" cols="4" md="4" sm="4"> </v-col>
        <v-col lg="4" cols="4" md="4" sm="4">
          <v-row>
            <v-col
              v-for="(cont, j) in headerImg"
              :key="j"
              lg="4"
              cols="4"
              md="4"
              sm="4"
            >
              <v-img
                style="border-radius: 10%"
                class="mt-1"
                alt="Vuetify Logo"
                contain
                :src="cont.img"
                transition="scale-transition"
                width="30"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <p style="font-size: x-small; color: white">
        <span v-for="(cont, j) in headerText" :key="j">
          {{ cont.text }}
          <br />
        </span>
      </p>
    </center>
    <v-bottom-navigation
      background-color="transparent"
      dark
      :shift="activeShift"
    >
      <v-btn v-if="this.$route.name == 'Inicio'" color="red" href="/start">
        <span>INICIO</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn v-else href="/start">
        <span>INICIO</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        v-if="this.$route.name == 'Descargas'"
        color="red"
        href="/downloads"
      >
        <span>DESCARGAS</span>
        <v-icon>mdi-download</v-icon>
      </v-btn>
      <v-btn v-else href="/downloads">
        <span>DESCARGAS</span>
        <v-icon>mdi-download</v-icon>
      </v-btn>
      <v-btn v-if="this.$route.name == 'Valorar'" color="red" href="/Assess">
        <span>VALORAR</span>
        <v-icon>mdi-check</v-icon>
      </v-btn>
      <v-btn v-else href="/assess">
        <span>VALORAR</span>
        <v-icon>mdi-check</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  components: {},
  name: "Inicio",
  data: () => ({
    activeShift: false,
    headerImg: [
      {
        img: require("@/assets/images/icons/pcelogo.png"),
      },
      { img: require("@/assets/images/icons/utmachlogo.png") },
      {
        img: require("@/assets/images/icons/fcslogo.png"),
      },
    ],
    headerText: [
      { text: "UNIVERSIDAD TÉCNICA DE MACHALA" },
      { text: "FACULTAD DE CIENCIAS SOCIALES" },
      { text: "PEDAGOGíA DE LAS CIENCIAS EXPERIMENTALES" },
    ],
  }),
  mounted() {
    var ws = window.screen.width; // 100px
    if (ws < 599) {
      this.activeShift = true;
    }
  },
};
</script>
<style>
/* DESKTOP */

@media all and (max-width: 999999999px) and (min-width: 1340px) {
  /* Footer Parent Div Styling */
  #loginbtn {
    display: none;
  }
  #footer {
    width: 100%;
    background-color: #fff;
    margin-top: 30px !important;
  }
}

/* =TABLET */

@media all and (max-width: 1339px) and (min-width: 600px) {
  /* Footer Parent Div Styling */
  #loginbtn {
    display: none;
  }
  #footer {
    width: 100%;
    background-color: #fff;
    margin: 0 auto;
  }
}

/* MOBILE */

@media all and (max-width: 599px) and (min-width: 100px) {
  /* Footer Parent Div Styling */
  #logologin {
    justify-content: center;
  }
  #loginbtn {
    display: block;
  }
  #loginform {
    display: none;
  }
}
</style>