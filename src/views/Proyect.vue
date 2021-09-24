<template>
  <div id="home">
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card  color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <center>
              <v-img
                class="mt-3"
                alt="Vuetify Logo"
                contain
                :src="require('@/assets/images/icons/utmachlogo.png')"
                transition="scale-transition"
                width="70"
              />
            </center>
            <v-card-text class="my-4 text-center title">
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                <span> UNIVERSIDAD TÉCNICA DE MACHALA </span>
                <br />
                <span> FACULTAD DE CIENCIAS SOCIALES </span>
                <br />
                <span> PEDAGOGíA DE LAS CIENCIAS EXPERIMENTALES </span>
              </span>
            </v-card-text>
            <v-card-text class="my-4 text-center title">
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                PROYECTO INTEGRADOR DE SABERES
              </span>
            </v-card-text>
                <v-card-title>
                  <span style="text-shadow: 1px 1px 1px black"> TEMA </span>
                </v-card-title>
            <v-card-text class="text-justify title">
              <span style="color:black">
              {{ topic }}

              </span>
            </v-card-text>
                <v-card-title>
                  <span style="text-shadow: 1px 1px 1px black"> RESUMEN </span>
                </v-card-title>
            <v-card-text
              v-for="(cont, j) in summary"
              :key="j"
              class="text-justify title"
            >
              <span style="color:black">
              {{ cont.paragraph }}

              </span>

            </v-card-text>
                <v-card-title>
                  <span style="text-shadow: 1px 1px 1px black">
                    OBJETIVO GENERAL
                  </span>
                </v-card-title>
            <v-card-text class="text-justify title">
              <span style="color:black">
Basándose en las características del modelo pedagógico escogido,
              se presenta de forma general el objetivo de nuestro proyecto
              integrador:
              <li>{{ objectiveG }}</li>
              </span>
              
            </v-card-text>
                <v-card-title>
                  <span style="text-shadow: 1px 1px 1px black">
                    OBJETIVOS ESPECIFICOS
                  </span>
                </v-card-title>
            <v-card-text class="text-justify title">
              <span style="color:black">
              Para alcanzar el objetivo general se desarrolló los siguientes
              objetivos específicos:
              <li v-for="(cont, j) in objectiveE" :key="j">{{ cont.text }}</li>
              </span>

            </v-card-text>
                <v-card-title>
                  <span style="text-shadow: 1px 1px 1px black"> AUTORES </span>
                </v-card-title>
            <v-card-text class="text-justify title">
              <span style="color:black">
              Estudiantes de 8vo:
              <li v-for="(cont, j) in students" :key="j">{{ cont.name }}</li>
              </span>

            </v-card-text>
            <v-card-text class="text-justify title">
              <span style="color:black">
              Tutor de Catedra Integradora de Saberes:
              <li>{{ tutor }}</li>
              </span>

            </v-card-text>
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
      topic:
        "DISEÑO, APLICACIÓN Y EVALUACIÓN DE PROYECTOS EDUCATIVOS MEDIADOS POR TICS PARA LA UNIDAD EDUCATIVA PARTICULAR MIXTA “HERMANO MIGUEL” BAJO LA MODALIDAD VIRTUAL MEDIANTE RECURSOS DIDÁCTICOS INTERACTIVOS PARA MEJORAR EL APRENDIZAJE EN ESTUDIANTES DEL SÉPTIMO AÑO DE EGB.",
      summary: [
        {
          paragraph:
            "El presente proyecto tiene la finalidad de brindar una solución a los diferentes problemas identificados en el contexto educativo a través de la observación de los modelos curriculares adaptados a los sujetos educativos de las Instituciones educativas. No se enfoca en la participación del docente en las estrategias de enseña-aprendizaje que emplea, sino más bien trata de involucrar al estudiante como centro del aprendizaje del conocimiento y armonizar las nuevas prácticas educativas a través del diseño y utilización de entornos virtuales de aprendizaje en el salón de clases de manera virtual.",
        },
        {
          paragraph:
            "Mediante las prácticas preprofesionales llevadas a cabo en la comunidad educativa “Hermano Miguel” de la ciudad de Machala, intervenimos como facilitadores de conocimiento los estudiantes del Octavo Pao de la carrera Pedagogía de las Ciencias Experimentales de la Universidad Técnica de Machala, estas prácticas sirven como experiencia para conocer la realidad de lo que acontece con la sociedad en los lugares menos favorecidos y lejanos, el Internet y la tecnología educativa se vuelven factores importantes con mucha relevancia a considerar, pues ninguna capacitación o aprendizaje sucede sin la interacción de los factores mencionados, pues la educación de hoy exige que se creen nuevos ambientes de aprendizaje que no solo sean presenciales sino virtuales y se puedan gestionar en cualquier lugar a cualquier hora permitiendo con facilidad la utilización de herramientas como el celular y demás dispositivos tecnológicos.",
        },
        {
          paragraph:
            "Los colegios de bachilleratos técnico de nuestra ciudad no disponen del diseño de entornos virtuales de aprendizaje en la nube, lo que es mas no cuentan con un dominio o plataforma que permita desarrollar las clases hacia los estudiantes, muchos de ellos son por iniciativa de docentes con dominios de internet comerciales o plataformas básicas educativas. Están supeditados a lo que dispongan los Distritos de Educación en sus respectivas zonas de confluencia.  Sin embargo, la necesidad existe, este es el espacio que necesitamos para intervenir y proponer soluciones a la falta de este recurso tecno-pedagógico para el beneficio del proceso de enseñanza aprendizaje.",
        },
      ],
      objectiveG:
        "Impulsar la utilización de las TIC como recursos didácticos interactivos para fortalecer los aprendizajes de los estudiantes de la Unidad Educativa Particular Mixta “Hermano Miguel”.",
      objectiveE: [
        {
          text: "Establecer las estrategias necesarias para la correcta implementación de las TIC dentro del proceso de enseñanza aprendizaje.",
        },
        {
          text: "Identificar el nivel de conocimientos del docente en el uso de herramientas educativas mediante la observación de su labor áulica.",
        },
        {
          text: "Establecer las características que deben poseer los estudiantes y el docente para agilizar el uso de nuevas herramientas en los procesos educativos.",
        },
        {
          text: "Aplicar el recurso didáctico interactivo AVAENGLISH a los estudiantes para fortalecer los conocimientos en el uso del idioma inglés.",
        },
        {
          text: "Implementar la aplicación móvil History Quiz a los estudiantes para motivar al aprendizaje en la asignatura de Historia.",
        },
      ],
      students: [
        {
          name: "Nathaly Dayannara Martínez Caracundo.",
        },
        {
          name: "Bryan Alfredo Paredes Gracia.",
        },
                {
          name: "Jorman Joao Nazareno Astudillo.",
        },
      ],
      tutor: "Ing. Sara Cruz Naranjo Mgs.",
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
  color: #25435eb6;
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 1rem;
}
</style>
