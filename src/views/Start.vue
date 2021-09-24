<template>
  <div id="home">
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <center>
              <v-card-text class="my-4 text-center title">
                <img :src="logoLinkedu" alt="" width="30%" />
                <br />
                <v-icon>mdi-link</v-icon>
                <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                  ORGANIZADOR ACADÉMICO DE APOYO A LAS ACTIVIDADES EN LINEA.
                </span>
              </v-card-text>
              <v-carousel
                style="border-radius: 15px"
                cycle
                hide-delimiter-background
                show-arrows-on-hover
              >
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                >
                </v-carousel-item>
              </v-carousel>
              <br />
              <br />
              <v-card-text class="my-4 text-center title">
                <v-icon>mdi-movie</v-icon>
                <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                  VIDEO TUTORIAL
                </span>
              </v-card-text>
              <video
                style="border-radius: 15px"
                width="600px"
                height="350px"
                :poster="videoTutoTh"
                controls
              >
                <source :src="videoTuto" type="video/mp4" />
                Su navegador no soporta este vídeo.
              </video>
              <br />
              <v-btn color="primary" href="/downloads">
                <v-icon left> mdi-download </v-icon>
                IR A DESCARGAS
              </v-btn>
            </center>
            <br />
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" lg="12" md="12" sm="12">
        <Footer></Footer>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import Footer from "@/components/Default/Footer";

export default {
  components: {
    Footer,
  },
  name: "Start",
  data() {
    return {
      logoLinkedu: require("@/assets/images/icons/logolinkedu.svg"),
      videoTuto: require("@/assets/videos/linkeduTuto.mp4"),
      videoTutoTh: require("@/assets/images/thumbnail/videoTutoTh.jpg"),
      items: [
        {
          src: require("@/assets/images/slider/slider1.jpg"),
        },
        {
          src: require("@/assets/images/slider/slider2.jpg"),
        },
        {
          src: require("@/assets/images/slider/slider3.jpg"),
        },
        {
          src: require("@/assets/images/slider/slider4.gif"),
        },
        {
          src: require("@/assets/images/slider/slider5.jpg"),
        },
        {
          src: require("@/assets/images/slider/slider6.jpg"),
        },
      ],
    };
  },
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
  },
  methods: {},
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
