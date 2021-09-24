<template>
  <div>
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card  color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <v-card-text class="my-4 text-center title" >
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                RECURSOS EDUCATIVOS
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
      v-for="(cont, j) in applications" :key="j"
   lg="6" cols="12" md="6" sm="6"
    >
      <v-card
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="400"
  >
         <v-img
          :src=cont.preview
        >
    <v-card-title>
        <v-list-item-avatar>
          <v-img
            class="elevation-6"
            alt=""
            :src=cont.logo
          ></v-img>
        </v-list-item-avatar>
     
      <span 
      style="text-shadow: 1px 1px 1px black;"
      class="font-weight-black text-h6 font-weight-light">{{cont.name}}</span>
    </v-card-title>

    <v-card-text 
    style="text-shadow: 1px 1px 1px black;"
    class="text-h5 font-weight-bold">
{{cont.definition}}
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
      <v-icon
        large
        left
      >
        {{cont.iconType}}
      </v-icon>  
          <v-chip
      class="ma-2"
      color="primary"
    >

{{cont.category}}
    </v-chip>
        <v-row
          align="center"
          justify="end"
        >
  <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue"
      class="ma-2 white--text"
      :href=cont.url
      target="_blank"
    >
      {{cont.action}}
      <v-icon
        right
        dark
      >
        mdi-play
      </v-icon>
    </v-btn>
        </v-row>
      </v-list-item>
    </v-card-actions>
</v-img>
  </v-card>
    </v-col>
  </v-row>

           </v-container>
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
      applications: [
        {
          name: "AVAENGLISH.",
          definition: "Refuerza tus conocimientos en inglés para 7mo EGB.",
          logo:require('@/assets/images/resources/avaelogo.png'),
          preview:require('@/assets/images/resources/avaebg.gif'),
          iconType:"mdi-web",
          category:"WEB",
          action:"VISITAR",
          url:"http://avaenglish.byethost8.com/"
},
           {
          name: "HISTORY QUIZ",
          definition: "Refuerza tus conocimientos en historia con esta APP Móvil.",
          logo:require('@/assets/images/resources/hqlogo.png'),
          preview:require('@/assets/images/resources/hqbg.gif'),
          iconType:"mdi-cellphone",
          category:"APP",
          action:"INSTALAR",
          url:"https://drive.google.com/file/d/1oAqO_d2wk05XXNYAITI81TICWqBKK8Ke/view?usp=sharing"
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
