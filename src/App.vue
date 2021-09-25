<template>
  <div id="app">
    <div class="loader" v-if="$store.getters.loader">
      <div class="d-flex justify-center align-center" style="height: 100vh">
        <Loader show message="''" />
      </div>
    </div>
    <v-app v-else>
      <Navbar
        style="position: fixed; z-index: 99; width: 100%; background: #25425e"
      >
      </Navbar>
      <Navbar> </Navbar>
      <v-content v-if="$store.getters.isAuth">
        <v-container fluid>
          <v-row justify="center">
            <v-col cols="12 pt-0">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-content>
      <router-view :style="{ backgroundImage: 'url(' + bga + ')' }" v-else />
    </v-app>
  </div>
</template>
<script>
import Navbar from "@/components/Default/NavBar";
import Loader from "./components/System/Loader";
export default {
  name: "App",
  metaInfo: {
    title: "ORGANIZADOR ACADÉMICO UTMACH ",
    titleTemplate: "LINKEDU | %s ",
    htmlAttrs: {
      lang: "es-EC",
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content:
          "LINKEDU | ORGANIZADOR ACADÉMICO DE APOYO A LAS ACTIVIDADES EN LINEA",
      },
      {
        name: "keywords",
        content:
          "Recurso educativo, Organizador, Enlaces, Software, APP Movil, E-learning",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        property: "og:title",
        content:
          "LINKEDU | ORGANIZADOR ACADÉMICO DE APOYO A LAS ACTIVIDADES EN LINEA",
      },
      { property: "og:site_name", content: "LINKEDU" },
      { property: "og:type", content: "website" },
      { name: "robots", content: "index,follow" },
    ],
  },
  data: () => ({
    contadorVisitas: 0,
    auth: false,
    bga: require("@/assets/images/bg.svg"),
  }),
  components: {
    Navbar,
    Loader,
  },
  created() {
    this.$request.post = this.requestPost;
  },
  methods: {
    async requestPost(url, form) {
      this.$http
        .post(url, form)
        .then((res) => {
          if (res.data) {
            console.log("petición exitosa");
          }
        })
        .catch((err) => {
          err = "";
          console.log("petición erronea", err);
        })
        .finally();
    },
  },
};
</script>
<style>
.alert-family {
  font-family: Quicksand, sans-serif;
  line-height: 1.5;
  font-size: 16px !important;
  font-weight: 400;
  padding: 0.7rem 1.5rem !important;
}
</style>
