<template>
  <div>
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <v-card-text class="my-4 text-center title">
              <v-icon>mdi-download</v-icon>
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                DESCARGAR LINKEDU
              </span>
            </v-card-text>
            <v-container
              class="mx-auto"
              max-width="100%"
              style="margin-top: 30px; margin-bottom: 40px"
              color="primary"
            >
              <v-row>
                <v-col
                  v-for="(data, num) in archives"
                  :key="num"
                  lg="6"
                  cols="12"
                  md="6"
                  sm="6"
                >
                  <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <div>
                      <v-icon large left> {{ data.icon }} </v-icon>
                      <v-chip class="ma-2" color="primary">
                        {{ data.type }}
                      </v-chip>
                      <center>
                        <v-img
                          :src="data.iconDevice"
                          class="white--text align-end"
                          width="150px"
                        >
                        </v-img>
                        <v-card-text class="my-4 text-center title">
                          <v-icon>mdi-download</v-icon>
                          <span
                            style="
                              text-shadow: 1px 1px 1px black;
                              margin-right: 5px;
                            "
                          >
                            {{ data.title }}
                          </span>
                        </v-card-text>
                      </center>
                      <v-row v-for="(data2, num2) in data.data" :key="num2">
                        <v-col lg="1" cols="1" md="1" sm="1"></v-col>
                        <v-col lg="10" cols="10" md="10" sm="10">
                          <h3>{{ data2.subTitle }}</h3>

                          <v-radio-group v-model="data2.select">
                            <v-radio
                              v-for="(data3, num3) in data2.options"
                              :key="num3"
                              :label="data3"
                              :value="num3"
                            ></v-radio>
                          </v-radio-group>
                        </v-col>
                      </v-row>
                      <center>
                        <v-btn
                          color="primary"
                          @click="
                            archiveDownload(
                              num,
                              data.data[0].select,
                              data.data[1].select
                            )
                          "
                        >
                          <v-icon left> mdi-download </v-icon>
                          DESCARGAR
                        </v-btn>
                      </center>
                      <br />
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
            <center>
              <v-btn color="primary" href="/assess">
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
  Valoresname: "Papers",
  data() {
    return {
      panel: [],
      panel1: 0,
      panel2: 0,
      items: 1,
      iconmobile: require("@/assets/images/downloads/mobile.svg"),
      archives: [
        {
          title: "DISPOSITIVOS MOVILES",
          icon: "mdi-apps",
          iconDevice: require("@/assets/images/downloads/mobile.svg"),
          type: "APP",
          data: [
            {
              subTitle: "SISTEMA OPERATIVO",
              options: ["Android"],
              select: 0,
            },
            {
              subTitle: "VERSIÓN",
              options: ["Aqua", "Flame", "Terra", "Thunder", "Light", "Dark"],
              select: 0,
              archives: [
                "https://drive.google.com/file/d/1R7p4RCdGnzBjLEKX_8_1THhIsAM16zj-/view",
                "https://drive.google.com/file/d/1_KZ-IEXSSN1Zv4GpcJSgfGRZWQBa7be6/view",
                "https://drive.google.com/file/d/1hBGsnH4z1XNe476B92W9C-Inyw1RQnG5/view",
                "https://drive.google.com/file/d/1RCMJ0mKDsNtVBQEsIbycH5vbvIf33H3s/view",
                "https://drive.google.com/file/d/1jORlhO_CT5AnIHx9gIY1YPBq-3Z367M3/view",
                "https://drive.google.com/file/d/12uvJpzU_DzKyOzmzfzi9LT4ZHjm6pSeA/view",
              ],
            },
          ],
        },

        {
          title: "DISPOSITIVOS DE ESCRITORIO",
          icon: "mdi-desktop-classic",
          iconDevice: require("@/assets/images/downloads/computer.svg"),
          type: "PC",
          data: [
            {
              subTitle: "SISTEMA OPERATIVO",
              options: ["Windows", "Linux - Requiere Java"],
              select: 0,
            },
            {
              subTitle: "VERSIÓN",
              options: ["SEDU"],
              select: 0,
              archives: [
                "https://drive.google.com/file/d/1dUS4CStRQl_3IOPz7nqpUTt2UVGIHHSm/view?usp=sharing",
                "https://drive.google.com/file/d/1BF18JTh1ymOuXyXXQYaE4ST5yNfL8ir2/view?usp=sharing",
              ],
            },
          ],
        },
      ],
    };
  },
  created() {},
  mounted() {
    if (this.$route) this.route = this.$route.query.redirect;
    this.all();
  },
  methods: {
    archiveDownload(aux, aux2, aux3) {
      var a = aux3;
      if (aux == 1) {
        a = aux2;
      }
      var url = this.archives[aux].data[1].archives[a];
      window.open(url);
    },
    datas() {
      alert(this.panel1);
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
