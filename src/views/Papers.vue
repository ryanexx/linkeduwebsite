<template>
  <div>
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card  color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <v-card-text class="my-4 text-center title">
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                REVISTAS EDUCATIVAS
              </span>
            </v-card-text>
            <v-container
              class="mx-auto"
              max-width="100%"
              style="margin-top: 30px; margin-bottom: 40px"
              
            >
              <v-expansion-panels
                v-for="(contA, i) in papers"
                :key="i"
                :v-model="i"
              >
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3 align="center" justify="center"></h3>
                    <v-toolbar-title>
                      <v-card-title>
                        <span style="text-shadow: 1px 1px 1px black">
                          REVISTA {{ i + 1 }}</span
                        >
                      </v-card-title>
                    </v-toolbar-title>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content >
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        TITULO:
                      </span>
                      <span class="ml-1">
                        {{ contA.title }}
                      </span>
                    </v-card-title>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black"> AÑO: </span>
                      <span class="ml-1">
                        {{ contA.age }}
                      </span>
                    </v-card-title>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        AUTORES:
                      </span>
                    </v-card-title>
                    <ul>
                      <li
                        v-for="(contB, j) in contA.authors"
                        :key="j"
                        class="text-justify title"
                      >
                        {{ contB.name }}
                      </li>
                    </ul>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        RESUMEN
                      </span>
                    </v-card-title>
                    <v-card-text
                      v-for="(contC, k) in contA.paragraph"
                      :key="k"
                      class="text-justify title"
                    >
                      {{ contC.text }}
                    </v-card-text>
                    <v-card-text
                      class="text-justify title"
                    
                    >

                                          <a :href=contA.url target="_blank">
                           Ir al artículo.
                      </a>
                    </v-card-text>
                    <v-card>
                      <v-img
                        :src="contA.img"
                        height="100%"
                        class="grey darken-4"
                      ></v-img>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
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
      papers: [
        {
          title:
            "ENTORNOS INMERSIVOS 3D: UNA PROPUESTA DE APRENDIZAJE CON SOFTWARE LIBRE.",
          age: "2019.",
          authors: [
            { name: "J. Armijos Carrión." },
            { name: "J. Valarezo Castro." },
            { name: "Y. Portela Leiva." },
            { name: "K. Guaicha Soriano." },
            { name: "M. Loaiza Loayza." },
],
          url: "https://library.iated.org/view/ARMIJOSCARRION20193DI",
          img: require("@/assets/images/papers/paper1.jpg"),
          paragraph: [
            {
              text:
                "En este trabajo se presentan los resultados de una investigación orientada a fortalecer el proceso de enseñanza-aprendizaje en Pedagogía de las Ciencias Experimentales en la Universidad Técnica de Machala. A pesar de la importancia de la aplicación de las tecnologías en el contexto educativo, existen insuficiencias teóricas y metodológicas para el uso intencionado y coherente de las actividades realizadas desde las diferentes asignaturas. A partir del análisis y sistematización de los fundamentos del proceso de enseñanza - aprendizaje en la carrera de Pedagogía de las Ciencias Experimentales y de las particularidades de los entornos virtuales con fines educativos, esta investigación se propuso como objetivo la construcción de un entorno inmersivo 3D, como plataforma de gestión de recursos virtuales, para el fortalecimiento del proceso de enseñanza - aprendizaje en Pedagogía de las Ciencias Experimentales. Para la creación del mundo virtual se utilizó OpenSimulator como servidor 3D de código abierto que permite el desarrollo de entornos virtuales 3D con configuraciones personalizadas. En la investigación se contó con una población conformada por estudiantes y profesores de primer, segundo y tercer nivel de la carrera. Durante el proceso, se utilizaron métodos de nivel teórico y empírico que permitieron la recolección e interpretación de datos cuantitativos y cualitativos. La evaluación permitió valorar la calidad y efectividad de la propuesta, evidenciando resultados favorables tanto para los docentes como para los estudiantes, ya que el proceso se desarrolló en un ambiente flexible, dinámico y lúdico, aumentó la motivación en el trabajo colaborativo, reflejó la posibilidad de interactuar cuando se necesitaba y aprender al ritmo de cada estudiante, y además demostró la comprensión significativa del conocimiento y su aplicación en la práctica, así como la creatividad y adaptabilidad de la inserción de tecnologías que se consideran difíciles de utilizar.",
            },
            {
              text: "",
            },
          ],
        },
        {
          title: "USO DE DISPOSITIVOS MÓVILES EN EL PROCESO DE ENSEÑANZA-APRENDIZAJE DE LA PEDAGOGÍA DE LAS CIENCIAS EXPERIMENTALES.",
          age: "2019.",

          authors: [
            { name: "J. Armijos Carrión." },
            { name: "Y. Portela Leiva." },
            { name: "K. Guaicha Soriano." },
            { name: "J. Cordova Aguilar." },
            { name: "M. Acosta Yela." },
            { name: "A. Paladines Amaiquema." },
          ],
          img: require("@/assets/images/papers/paper2.jpg"),
          url: "https://library.iated.org/view/ARMIJOSCARRION2019USE",

          paragraph: [
            {
              text:"El continuo avance de las tecnologías de la información y la comunicación ha provocado un creciente interés por la incorporación de herramientas tecnológicas en el contexto educativo. El dispositivo móvil es uno de los que ha generado contradicciones, pues, a pesar de que estudiantes y profesores reconocen su importancia, aún existen insuficiencias que limitan el uso adecuado en las actividades académicas y han provocado que sea considerado como distractor en la educación. A partir de la sistematización de los fundamentos teóricos y metodológicos, esta investigación propone el uso de dispositivos móviles, a través de la plataforma virtual Nearpod, para fortalecer el proceso de enseñanza-aprendizaje de la Carrera de Pedagogía en Ciencias Experimentales de la Universidad Técnica de Machala. La población estuvo constituida por los 183 estudiantes matriculados en la carrera, que utilizaron dispositivos móviles en las diferentes asignaturas durante un semestre. A lo largo de la investigación se utilizaron métodos empíricos y teóricos y una metodología mixta que permitió la recolección y análisis de datos cuantitativos y cualitativos. La interpretación de los datos obtenidos permitió evaluar el impacto de la herramienta en el proceso de enseñanza-aprendizaje debido a que todos los indicadores alcanzaron los niveles más altos.",
            },
            {
              text: "",
            },
          ],
        },
                {
          title: "GAMIFICACIÓN EDUCATIVA: UNA ALTERNATIVA AL APRENDIZAJE COLABORATIVO.",
          age: "2020.",

          authors: [
            { name: "J.L. Armijos Carrión." },
            { name: "Y. Esquivel Rivero." },
            { name: "M. Cordova Aguilar." },
            { name: "Y.M. Portela Leiva." },
            { name: "A.A. Avila Carvajal." },
            { name: "M. Loaiza Loayza." },
          ],
          img: require("@/assets/images/papers/paper3.jpg"),
          url: "https://library.iated.org/view/ARMIJOSCARRION2020EDU",

          paragraph: [
            {
              text:"La evolución de las tecnologías de la información y la comunicación (TIC) ha permitido la incorporación de una variedad de equipos tecnológicos al sistema académico, permitiendo la conformación y dirección de espacios de enseñanza-aprendizaje en un ambiente colaborativo móvil donde el objetivo principal es promover la interacción entre los estudiantes. Este trabajo presenta los resultados de una investigación para fortalecer el aprendizaje colaborativo mediante el uso de dispositivos móviles como herramienta de aprendizaje basada en el juego, en el proceso de enseñanza-aprendizaje en el Colegio Ismael Pérez Pazmiño, de Machala. A lo largo de la búsqueda se aplicaron métodos teóricos y empíricos que permitieron el análisis de los datos desde un punto de vista cualitativo y cuantitativo. La población estuvo constituida por los estudiantes de segundo y tercer año, y los profesores que imparten las diferentes asignaturas. Como resultado, se demostró que una de las técnicas de aprendizaje que contribuyen a reforzar el proceso basado en el juego es la gamificación, ya que el uso del dispositivo móvil como herramienta, aumentó la motivación del aprendizaje y el interés durante las actividades colaborativas, facilitó la adquisición de conocimientos, así como la participación y la comunicación entre los estudiantes.",
            },
            {
              text: "",
            },
          ],
        },
                        {
          title: "ENTORNOS VIRTUALES DE APRENDIZAJE EN EL TRABAJO COLABORATIVO DE LA ENSEÑANZA SUPERIOR.",
          age: "2021.",

          authors: [
            { name: "J.L. Armijos Carrión." },
            { name: "Y.M. Portela Leiva." },
            { name: "Y. Esquivel Rivero." },
            { name: "A. Avila Carvajal." },
            { name: "E. Villacreses Sarzoza." },
            { name: "J. Valarezo Castro." },
            { name: "F. Chamba Gómez." },
          ],
          img: require("@/assets/images/papers/paper4.jpg"),
          url: "https://library.iated.org/view/ARMIJOSCARRION2021VIR",

          paragraph: [
            {
              text:"El objetivo de esta investigación fue reforzar el trabajo colaborativo en el proceso de enseñanza-aprendizaje de la carrera de Pedagogía en Ciencias Experimentales de la UTMACH, a través de los Entornos Virtuales de Aprendizaje (EVA). Para la creación de los EVA se utilizó la plataforma Moodle por ser una herramienta gratuita e interactiva, que proporciona a educadores, administradores y estudiantes un sistema integrado único, sólido y seguro para la creación de cursos personalizados. Se utilizó un Servidor Privado Virtual (VPS) como alojamiento para el acceso a los datos almacenados, actividades, al mismo tiempo, se analizaron las opciones que brindan para la realización de actividades colaborativas. El estudio se aplicó a una población constituida por 85 estudiantes y seis profesores de los diferentes grupos del quinto nivel de la carrera de Pedagogía en Ciencias Experimentales. Se utilizaron métodos teóricos y empíricos que permitieron la recolección e interpretación de datos cualitativos y cuantitativos. El análisis de los datos obtenidos mostró resultados favorables para los docentes y los estudiantes, ya que se promovió la colaboración en las tareas, la interacción entre los estudiantes y se incrementó la creatividad y la motivación; fortaleciendo el proceso de enseñanza-aprendizaje en las clases sincrónicas y asincrónicas.",
            },
            {
              text: "",
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
