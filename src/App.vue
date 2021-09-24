<template>
  <div id="app">
    <div class="loader" v-if="$store.getters.loader">
      <div class="d-flex justify-center align-center" style="height: 100vh">
        <Loader show message="''" />
      </div>
    </div>
    <v-app v-else >
       <Navbar style="position: fixed; z-index: 99; width: 100%; background:#25425E"> </Navbar>
       <Navbar> </Navbar>
      <v-content v-if="$store.getters.isAuth" >
        <v-container fluid >
          <v-row justify="center" >
            <v-col cols="12 pt-0">
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-content>
      <router-view :style="{ backgroundImage: 'url(' + bga + ')' }" class="cont" v-else />
    </v-app>
    
  </div>
</template>
<script>
import Navbar from "@/components/Default/NavBar";
import Loader from "./components/System/Loader";
export default {
  name: "App",
  metaInfo: {
    title: 'RECURSOS EDUCATIVOS UTMACH ',
    titleTemplate: 'REPOSITORIO G11 | %s ',
    htmlAttrs: {
      lang: 'es-EC'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'RepositorioG11 | RECURSO EDUCATIVO GAMIFICADO DE APOYO ESTUDIANTIL DE INGLES Y HISTORIA' },
      { name: 'keywords', content: 'Recurso educativo, Gamificación, Ingles, Historia, APP Movil, Juego' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:title', content: "RepositorioG11 | RECURSO EDUCATIVO GAMIFICADO DE APOYO ESTUDIANTIL DE INGLES Y HISTORIA"},
      { property: 'og:site_name', content: 'RepositorioG11'},
      { property: 'og:type', content: 'website'},    
      { name: 'robots', content: 'index,follow'} 
    ]
  },
  data: () => ({
    auth: false,
          bga: require("@/assets/images/bg.svg"),

  }),
  beforeMount: async function () {
   
  },
beforeCreate(){

},
created() {    

  },
  mounted() {

  },
  components: {
Navbar,

Loader,
  },
  methods: {
   
  },
};
</script>
<style>
 .cont {
        background-color: red;
    }
.alert-family {
  font-family: Quicksand, sans-serif;
  line-height: 1.5;
  font-size: 16px !important;
  font-weight: 400;
  padding: 0.7rem 1.5rem !important;
}
</style>
