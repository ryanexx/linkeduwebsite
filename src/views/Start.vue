<template>
  <div id="home">
    <v-container style="margin-top: 25px ;" >
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <center>
              <v-card-text class="my-4 text-center title">
                <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                  PEDAGOGÍA DE LAS CIENCIAS EXPERIMENTALES
                </span>
              </v-card-text>
              <v-carousel style="border-radius: 15px;" cycle hide-delimiter-background show-arrows-on-hover>
                <v-carousel-item
                  v-for="(item, i) in items"
                  :key="i"
                  :src="item.src"
                >
                </v-carousel-item>
              </v-carousel>
              <v-card-text class="my-4 text-center title">
                <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                  VIDEOS RECURSOS EDUCATIVOS
                </span>
              </v-card-text>
                <v-row>
                <v-col cols="12" lg="6" md="6" sm="6">
                  <v-card-text class="my-4 text-center title">
                    <span
                      style="text-shadow: 1px 1px 1px black; margin-right: 5px"
                    >
                      RECURSO AVAENGLISH
                    </span>
                  </v-card-text>
                  <video style="border-radius: 15px;" width="90%" height="300px" :poster="videoPT1" controls>
                    <source :src="videoP1" type="video/mp4" />
                    Su navegador no soporta este vídeo.
                  </video>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="6">
                  <v-card-text class="my-4 text-center title">
                    <span
                      style="text-shadow: 1px 1px 1px black; margin-right: 5px"
                    >
                      RECURSO HISTORY QUIZ
                    </span>
                  </v-card-text>
                  <video style="border-radius: 15px;" width="90%" height="300px" :poster="videoPT2" controls>
                    <source :src="videoP2" type="video/mp4" />
                    Su navegador no soporta este vídeo.
                  </video>
                </v-col>
              </v-row>
                <v-row>
                <v-col cols="12" lg="6" md="6" sm="6">
                  <v-card-text class="my-4 text-center title">
                    <span
                      style="text-shadow: 1px 1px 1px black; margin-right: 5px"
                    >
                      TUTORIAL AVAENGLISH
                    </span>
                  </v-card-text>
                  <video style="border-radius: 15px;" width="90%" height="300px" :poster="videoTT1" controls>
                    <source :src="videoT1" type="video/mp4" />
                    Su navegador no soporta este vídeo.
                  </video>
                </v-col>
                <v-col cols="12" lg="6" md="6" sm="6">
                  <v-card-text class="my-4 text-center title">
                    <span
                      style="text-shadow: 1px 1px 1px black; margin-right: 5px"
                    >
                      TUTORIAL HISTORY QUIZ
                    </span>
                  </v-card-text>
                  <video style="border-radius: 15px;" width="90%" height="300px" :poster="videoTT2" controls>
                    <source :src="videoT2" type="video/mp4" />
                    Su navegador no soporta este vídeo.
                  </video>
                </v-col>
              </v-row>

            </center>
            
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
      videoP1: require("@/assets/videos/promo/avae.mp4"),
      videoPT1: require("@/assets/images/thumbnail/avaept.jpg"),
      videoP2: require("@/assets/videos/promo/hq.mp4"),
      videoPT2: require("@/assets/images/thumbnail/hqpt.jpg"),
      videoT1: require("@/assets/videos/tuto/avae.mp4"),
      videoTT1: require("@/assets/images/thumbnail/avaett.jpg"),
      videoT2: require("@/assets/videos/tuto/hq.mp4"),
      videoTT2: require("@/assets/images/thumbnail/hqtt.jpg"),
      
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
          src: require("@/assets/images/resources/avaebg.gif"),
        },
        {
          src: require('@/assets/images/resources/hqbg.gif'),
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
