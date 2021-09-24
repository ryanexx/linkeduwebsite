<template>
  <div>
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <v-card-text class="my-4 text-center title">
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                VALORACIÓN DE LA HERRAMIENTA
              </span>
            </v-card-text>
            <v-container
              class="mx-auto"
              max-width="100%"
              style="margin-top: 30px; margin-bottom: 40px"
              color="primary"
            >
              <template>
                <v-card>
                  <v-btn color="primary" @click="openForm(urlResource)">
                    <v-icon left> mdi-eye </v-icon>
                    ABRIR FORMULARIO
                  </v-btn>
                  <fieldset>
                    <iframe
                      :src="urlResource"
                      width="100%"
                      height="2000"
                      frameborder="0"
                      marginheight="0"
                      marginwidth="0"
                      >Cargando…</iframe
                    >
                  </fieldset>
                </v-card>
              </template>
            </v-container>
            <center>
              <v-btn color="primary" href="/start">
                <v-icon left> mdi-check </v-icon>
                IR A VALORAR
              </v-btn>
            </center>
            <br />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer></Footer>
  </div>
</template>    
<script>
import Footer from "@/components/Default/Footer";
export default {
  components: {
    Footer,
  },
  Valoresname: "Home",
  data() {
    return {
      urlResource:
        "https://docs.google.com/forms/d/e/1FAIpQLSevZHB5HaO2E2EDd6Xa75KCcW4sMYXPQYcJeGR4LJZEhTZlKA/viewform",
    };
  },
  created() {},
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
    this.all();
  },
  methods: {
    openForm(aux) {
      window.open(aux);
    },
    all() {
      this.panel = [...Array(this.items.length).keys()].map((k, i) => i);
    },
  },
};
</script>
<style scoped>
.header-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}
.header-login h3 {
  color: #607d8b;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
