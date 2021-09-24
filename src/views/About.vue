<template>
  <div>
    <v-container style="margin-top: 25px">
      <v-row align="center" justify="center">
        <v-col lg="12" md="12" sm="12">
          <v-card  color="#ffffffbe">
            <v-system-bar color="primary"></v-system-bar>
            <v-card-text class="my-4 text-center title">
              <span style="text-shadow: 1px 1px 1px black; margin-right: 5px">
                ¿QUIÉNES SOMOS?
              </span>
            </v-card-text>
            <v-container
              class="mx-auto"
              max-width="100%"
              style="margin-top: 30px; margin-bottom: 40px"
              color="primary"
            >
              <v-expansion-panels v-model="panel1">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3 align="center" justify="center"></h3>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        UNIVERSIDAD</span
                      >
                    </v-card-title>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        UNIVERSIDAD TÉCNICA DE MACHALA
                      </span>
                    </v-card-title>
                    <v-card>
                      <v-img
                        :src="require('@/assets/images/about/utm.png')"
                        height="100%"
                        class="grey darken-4"
                      ></v-img>
                    </v-card>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        BIBLIOGRAFÍA
                      </span>
                    </v-card-title>
                    <v-card-text
                      v-for="(cont, j) in biograph"
                      :key="j"
                      class="text-justify title"
                    >
                      {{ cont.paragraph }}
                    </v-card-text>
                    <v-card>
                      <v-img
                        :src="require('@/assets/images/about/moedu.png')"
                        height="100%"
                        class="grey darken-4"
                      ></v-img>
                    </v-card>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-expansion-panels v-model="panel2">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3 align="center" justify="center"></h3>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        CARRERA</span
                      >
                    </v-card-title>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        PEDAGOGíA DE LAS CIENCIAS EXPERIMENTALES
                      </span>
                    </v-card-title>
                    <v-card>
                      <v-img
                        :src="require('@/assets/images/about/carrera.png')"
                        height="100%"
                        class="grey darken-4"
                      ></v-img>
                    </v-card>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        DATOS INFORMATIVOS
                      </span>
                    </v-card-title>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Información sobre aprobación del CES
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      {{ ces }}
                    </v-card-text>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Misión
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      {{ mision }}
                    </v-card-text>

                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Visión
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      {{ vision }}
                    </v-card-text>

                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Titulo que otorga:
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      {{ titulo }}
                    </v-card-text>
                    <hr />
                    <br />

                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        OBJETIVOS
                      </span>
                    </v-card-title>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Objetivo General:
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      {{ objectiveG }}
                    </v-card-text>

                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Objetivos específicos:
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      <ul>
                        <li v-for="(cont, j) in objectiveE" :key="j">
                          {{ cont.text }}
                        </li>
                      </ul>
                    </v-card-text>

                    <hr />
                    <br />
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        PERFIL PROFESIONAL
                      </span>
                    </v-card-title>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Perfil de Ingreso:
                      </span>
                    </v-card-title>
                    <v-card-text class="text-justify title">
                      {{ perfilI }}
                    </v-card-text>

                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        Perfil de Egreso:
                      </span>
                    </v-card-title>
                    <v-card-text
                      v-for="(cont, j) in perfilETagA"
                      :key="j"
                      class="text-justify title"
                    >
                      {{ cont.text }}
                    </v-card-text>
                    <v-card-text class="text-justify title">
                      <ul>
                        <li v-for="(cont, j) in perfilEA" :key="j">
                          {{ cont.text }}
                        </li>
                      </ul>
                    </v-card-text>
                    <v-card-text class="text-justify title">
                      {{ perfilETagB }}
                      <ul>
                        <li v-for="(cont, j) in perfilEB" :key="j">
                          {{ cont.text }}
                        </li>
                      </ul>
                    </v-card-text>

                    <v-card-text class="text-justify title">
                      {{ perfilETagCA }}
                      <br />
                      <span v-for="(cont, j) in perfilETAGCB" :key="j">
                        {{ cont.text }}
                      </span>
                    </v-card-text>
                    <v-card-title>
                      <ol>
                        <li v-for="contA in perfilECC" :key="contA">
                          {{ contA.title }}
                          <v-card-text class="text-justify title">
                            <ul>
                              <li
                                v-for="contB in contA.additionals"
                                :key="contB"
                              >
                                {{ contB.text }}
                              </li>
                            </ul>
                          </v-card-text>
                        </li>
                      </ol>
                    </v-card-title>

                    <v-card-text class="text-justify title">
                      {{ perfilDTag }}
                      <ul>
                        <li v-for="(cont, j) in perfilED" :key="j">
                          {{ cont.text }}
                        </li>
                      </ul>
                    </v-card-text>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
              <v-expansion-panels v-model="panel3">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3 align="center" justify="center"></h3>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        EQUIPO</span
                      >
                    </v-card-title>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        PROFESIONALES DE TECNOLOGÍA EDUCATIVA
                      </span>
                    </v-card-title>
                    <v-row>
                      <v-col
                        v-for="(cont, j) in teams"
                        :key="j"
                        lg="6"
                        cols="12"
                        md="6"
                        sm="6"
                      >
                        <template>
                          <v-card class="mx-auto" max-width="434" tile>
                            <v-img height="100%" :src="cont.background">
                              <v-row align="end" class="fill-height">
                                <v-col
                                  align-self="start"
                                  class="pa-0"
                                  cols="12"
                                >
                                  <v-avatar
                                    class="profile"
                                    color="grey"
                                    size="164"
                                    tile
                                  >
                                    <v-img :src="cont.photo"></v-img>
                                  </v-avatar>
                                </v-col>
                                <v-col class="py-0">
                                  <v-list-item color="rgba(0, 0, 0, .4)" dark>
                                    <v-list-item-content>
                                      <v-list-item-title class="text-h6">
                                        {{ cont.name }}
                                      </v-list-item-title>
                                      <v-list-item-subtitle>
                                        {{
                                          cont.speciality
                                        }}</v-list-item-subtitle
                                      >
                                    </v-list-item-content>
                                  </v-list-item>
                                </v-col>
                              </v-row>
                            </v-img>
                          </v-card>
                        </template>
                        </v-col>
                      </v-row>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  </v-expansion-panels>


              <v-expansion-panels v-model="panel4">
                <v-expansion-panel>
                  <v-expansion-panel-header>
                    <h3 align="center" justify="center"></h3>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        CONTÁCTENOS</span
                      >
                    </v-card-title>
                  </v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <v-card-title>
                      <span style="text-shadow: 1px 1px 1px black">
                        CONTACTA CON NOSOTROS
                      </span>
                    </v-card-title>
                    <v-row>
                      <v-col
                      
                        lg="12"
                        cols="12"
                        md="12"
                        sm="12"
                      >
                        <template>
                          <v-card   tile>
                        <fieldset>
						<iframe
							:src=urlResource
							width="100%" height="917" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
					</fieldset>

                          </v-card>
                        </template>
                        </v-col>
                      </v-row>
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
  Valoresname: "Home",
  data() {
    return {
      panel: [],
      panel1: 1,
      panel2: 1,
      panel3: 1,
      panel4: 1,
      urlResource: "https://docs.google.com/forms/d/e/1FAIpQLSdJtWhMqiryjRRsF3zUetSEZbzkpOzrBmFxyMpV-IsNrW5owQ/viewform?embedded=true",
items: 1,
      biograph: [
        {
          paragraph:
            "La Universidad Técnica de Machala (UTMACH) es una Institución de Educación Superior (IES) de la ciudad de Machala, Ecuador. Fundada en 1969, como resultado del esfuerzo colectivo de la población orense, es la única universidad pública de la provincia de El Oro. Para el año 2016 su oferta académica era de 30 pregrados.",
        },
        {
          paragraph:
            "La creación de la Universidad Técnica de Machala está enmarcada en un contexto histórico de lucha popular, en donde las exigencias del pueblo consiguieron sus objetivos luego de varios años de esfuerzo. Los primeros antecedentes se remontan al año de 1964. En 1965 se publicarían en el diario El Nacional artículos por parte de los docentes del Colegio Nueve de Octubre en donde se defendía la necesidad de una institución de educación superior para la provincia. Impulsados por el entusiasmo, en 1967 se crearían los primeros movimientos pro-universitarios; se destaca la labor del Lcdo. Diego Minuche Garrido, por aquellos tiempos rector del Colegio Nueve de Octubre, al convocar el 7 de junio de ese año a la Asamblea de Rectores y miembros de Consejos Directivos de los colegios para dirigirse a los organismos del gobierno responsables de aprobar la creación de la institución.",
        },
        {
          paragraph:
            "Posteriormente, en 1968, se iría consolidando cada vez más las aspiraciones. Se presentaría a la Constituyente un modelo que incluía 4 carreras y la creación de las escuelas de Enfermería, Pedagogía y Letras y Economía y Administración de Negocios; sin embargo, no sería sino hasta el 11 de septiembre que se organizaría legalmente el Comité Pro Creación de la Universidad para El Oro, dirigido por el Presidente del Honorable Consejo Provincial de El Oro, Víctor Manuel Serrano Murillo. Asimismo, el 5 de octubre, la Federación Provincial de Estudiantes Secundarios del Ecuador (FESE) apoya el esfuerzo que se está llevando a cabo. Empero, a pesar, de los intentos que se realizaban la creación todavía no se materializaba. Finalmente la población se levantaría en reclamo el 22 de noviembre; conllevando como resultado 30 heridos y 4 muertos, el estudiante Carlos Ponguillo y los trabajadores Alfonso Patiño, Germán Cueva y Pedro Riofrío.",
        },
        {
          paragraph:
            "Ante los reclamos y revueltas realizadas se conseguiría que las autoridades consideraran las exigencias de la población. El 12 de diciembre se llevaría a cabo una sesión entre representantes de El Oro y el Consejo Nacional de Educación. Así, el 7 de febrero de 1969, luego de una revisión por parte de la Comisión Académica del Consejo Nacional de Educación, se obtendría la resolución de aprobación para la creación de la universidad. El 8 de marzo se aprueba el informe. Y el 14 de abril se crearía la Universidad Técnica de Machala, firmando oficialmente el presidente José Velasco Ibarra el 18 de abril el decreto ley No. 69-04 publicada en el Registro Oficial No. 161.",
        },
        {
          paragraph:
            "Fue inaugurada por el presidente del Ecuador el 23 de julio de 1969. La organización de la universidad estaría a cargo de la Casa de la Cultura Núcleo de El Oro y la Comisión de Coordinación Académica del Consejo Nacional de Educación Superior hasta el nombramiento de un rector definitivo. El primer año lectivo se iniciaría el 4 de agosto con la Facultad de Agronomía y Veterinaria.",
        },
        {
          paragraph:
            "La Asamblea Universitaria reunida el 14 de febrero de 1970 encargó al Vicerrector Titular, Ing. Galo Acosta Hidalgo, el rectorado; es en este tiempo en el que se desarrolla una importante estructuración de la institución. El 22 de junio se crearía el Instituto de Ciencias, que daría lugar el 17 de diciembre a la Facultad de Ciencias y Administración.",
        },
        {
          paragraph:
            "El 20 de marzo1972 se elige como primer Rector Titular al Econ. Manuel Zúñiga Mascote en cuya administración se crearían nuevas facultades para la ciudadanía machaleña. Las facultades que la conformaban eran: Ciencias Administrativas y Contabilidad, Ciencias Químicas, Ingeniería Civil y Sociología.",
        },
        {
          paragraph:
            "El 12 de diciembre el Ing. Rafael Bustamante Ibáñez y Dr. Gerardo Fernández Capa, asumirían las funciones de rector y vicerrector, respectivamente. El 20 de noviembre de 1973 el Ing. Gonzalo Gambarroti Gavilánez y Dr. Carlos García Rizzo, relevarían a los anteriores. El Dr. Gerardo Fernández Capa y el Dr. Jaime Palacios Peralta, ejercería el rectorado y vicerrectorado, luego de su elección el 15 de enero de 1977 y de su reelección el 17 de enero de 1981. Debido al fallecimiento del Dr. Jaime Palacios Peralta en 1983 se designa al Ing. Marino Urigüen Barreto como su remplazo.",
        },
      ],
      ces: "Fecha de aprobación: 12 de Diciembre de 2016 Número de Resolución del CES: RPC-SO-37-No.769-2016",
      mision:
        "Formar profesionales en Pedagogía de la Informática con alto nivel pedagógico, tecnológico, científico y humanista; capaces de generar propuestas de innovación curricular y gestión informática; comprometidos con la docencia, la investigación, la gestión y la vinculación con la sociedad, para la solución de problemas socioeducativos con enfoque de derechos, inclusión y equidad.",
      vision:
        "Ser líder en procesos de formación en pedagogía de la informática, abierta al pensamiento universal para la construcción de una sociedad justa y democrática.",
      titulo: "LICENCIADO/A EN PEDAGOGÍA DE LA INFORMÁTICA",
      objectiveG:
        "Formar profesionales en Pedagogía de la Informática con un nivel científico, humanista y tecnológico a través de la docencia, la investigación y la vinculación con la sociedad, contribuyendo de manera innovadora a la solución de problemas del contexto y su campo de formación, para aportar con el cumplimiento y metas del Plan Nacional del Buen Vivir y necesidades del sistema educativo nacional, para la transformación social, productiva y cognitiva del país.",
      objectiveE: [
        {
          text: "Al conocimiento y los saberes Formar profesionales con competencias digitales y pedagógicas para la formulación, resolución, y evaluación de los problemas socio-educativos, de forma crítica, creativa, abierta e intercultural. Consolidar el proceso de enseñanza – aprendizaje articulando los saberes con el dominio de herramientas tecnológicas educativas que le permitan analizar, diseñar, planificar e innovar los procesos pedagógicos.",
        },
        {
          text: "A la pertinencia Emprender proyectos de innovación curricular y gestión informática, para el acceso y utilización oportuna de las TIC’s, según el contexto laboral con sustento en la investigación de las nuevas tendencias en tecnología educativa.",
        },
        {
          text: "A los aprendizajes Liderar en forma efectiva la asesoría técnica sobre el uso de medios y recursos informáticos en el campo educativo, así como la gestión de las Unidades de Informática y Laboratorios de las instituciones educativas, mediante la aplicación de metodologías que aseguren la puesta en marcha de procesos de calidad.",
        },
        {
          text: "A la ciudadanía integral Contribuir a la alfabetización digital, el uso inclusivo de las TIC’s y la aplicación adecuada de la informática en los diferentes campos del conocimiento y de la vida cotidiana para alcanzar el Buen Vivir.",
        },
      ],
      perfilI:
        "Capacidad de razonamiento lógico. Capacidad de análisis y síntesis. Capacidad de lectura comprensiva. Capacidad de expresión oral y escrita. Capacidad de desarrollar trabajos autónomos. Respeto a la diversidad cultural. Poseer valores éticos y sensibles a los problemas del entorno. Habilidad para relacionarse en equipos inter y multidisciplinarios. Vocación y servicio a la ciudadanía.",
      perfilETagA: [
        {
          text: "¿Qué resultados o logros de los aprendizajes posibilitarán el desarrollo de las capacidades y actitudes de los futuros profesionales para consolidar sus valores referentes a la pertinencia, la bio-conciencia, la participación responsable, la honestidad, y otros?",
        },
        {
          text: "Los profesionales de Pedagogía de Informática, considerando el perfil de egreso genérico para las carreras de educación deberán:",
        },
      ],
      perfilEA: [
        {
          text: "Desarrollar valores, actitudes y cualidades para el Buen Vivir, que promuevan la ética y la responsabilidad ciudadana en la trayectoria profesional.",
        },
        {
          text: "Demuestra liderazgo y responsabilidad para afrontar el cambio y la incertidumbre en convivencia con comunidades interculturales de aprendizaje.",
        },
        {
          text: "Promueve ambientes de respeto ante los nuevos modelos y dinámicas sociales.",
        },
        {
          text: "Practica la solidaridad, honradez, responsabilidad, respeto y equidad en relación consigo mismo y los demás.",
        },
      ],
      perfilETagB:
        "¿Qué resultados o logros de los aprendizajes relacionados con el dominio de teorías, sistemas conceptuales, métodos y lenguajes de integración del conocimiento, la profesión y la investigación desarrollará el futuro profesional?",
      perfilEB: [
        {
          text: "Organizar y gestionar comunidades de aprendizajes inclusivos y colaborativas, pertinentes con su contexto, que generen oportunidades para la construcción de ambientes de aprendizaje interculturales y democráticos.",
        },
        {
          text: "Se comunica de forma activa para producir interacciones de calidad y calidez y la mediación de conflictos.",
        },
        {
          text: "Promueve comunidades de aprendizaje con otros docentes y en relaciones de cooperación y solidaridad con los miembros de las organizaciones y contextos de desarrollo educativo.",
        },
        {
          text: "Promueve escenarios, situaciones, acciones y relaciones que generan procesos de aprendizaje entre los sujetos de una comunidad de aprendizaje.",
        },
      ],
      perfilETagCA:
        "¿Qué resultados o logros de los aprendizajes relativos a las capacidades cognitivas y competencias genéricas son necesarias para el futuro ejercicio profesional?",
      perfilETAGCB: [
        {
          text: "El perfil de egreso de la Carrera de Pedagogía de Informática y su metodología se basó en tomar dos criterios estructurantes para establecer los resultados de aprendizaje.",
        },
        {
          text: "El ser es un criterio importante en el desarrollo del perfil de egreso puesto que su enfoque está en el pensar, hacer y comunicar. Es decir que las capacidades a ser desarrolladas se enmarcan en el ser y el querer.",
        },
        {
          text: "Es decir que las capacidades a ser desarrolladas se enmarcan en el ser y el querer. Los criterios, capacidades y resultados de aprendizaje que conforman el perfil de egreso de la Carrera está basado en el perfil de egreso genérico de las carreras de educación propuesto por El Consejo de Educación Superior (CES) 2015.",
        },
        {
          text: "Las capacidades mencionadas en dicho documento se manifiestan en lo siguiente:",
        },
      ],
      perfilECC: [
        {
          title: "SER PENSAR COGNOSCITIVA:",
          additionals: [
            {
              text: "Organizar, interpretar, construir y evaluar el conocimiento de forma crítica, creativa e integrada, orientado a la práctica y a la meta cognición.",
            },
            {
              text: "Domina teorías y modelos educativos de aprendizaje y didácticos.",
            },
            {
              text: "Demuestra el desarrollo del pensamiento lógico, sistémico y creativo para la comprensión, explicación, integración y comunicación de los fenómenos, sujetos y situaciones educativas.",
            },
            { text: "Procesa el conocimiento mediado por TIC." },
          ],
        },
        {
          title: "HACER FUNCIONALES:",
          additionals: [
            {
              text: "Diagnosticar, comprender e intervenir fenómenos, situaciones, procesos y sistemas socio educativos",
            },
            {
              text: "Identifica el entorno social y político del país considerando estrategias para su intervención",
            },
            {
              text: "Diseñar, planificar, ejecutar y evaluar programas – proyectos educativos contextualizados, flexibles y adaptados a las necesidades de aprendizaje de los sujetos educativos.",
            },
            {
              text: "Diseña, ejecuta y evalúa procesos educativos de enseñanza-aprendizaje significativos y relevantes, que propicien la interdisciplinariedad, creatividad y metacongnición.",
            },
            {
              text: "Utiliza tecnologías de la información y la comunicación y/o entornos virtuales como herramientas de apoyo para la enseñanza aprendizaje.",
            },
            {
              text: "Liderar procesos educativos mediante su implicación con los problemas de los sujetos, sistemas, procesos y contextos de aprendizaje objetos del conocimiento pedagógico.",
            },
            {
              text: "Formula propuestas educativas que atienden a las necesidades contextualizadas.",
            },
            {
              text: "Aplicar la investigación-acción en los procesos de diagnóstico, diseño, planificación, ejecución, evaluación y sistematización de la realidad educativa.",
            },
          ],
        },
        {
          title: "COMUNICAR INTERACCIONALES:",
          additionals: [
            {
              text: "Organizar y gestionar comunidades de aprendizaje, inclusivas y colaborativas, pertinentes con su contexto, que generen oportunidades para la construcción de ambientes de aprendizaje interculturales y democráticos.",
            },
            { text: "Trabaja en equipos colaborativos y en red." },
            {
              text: "Utilizar recursos de comunicación y TIC para ampliar las fuentes de información e interacciones socio-educativas en la generación de ambientes de aprendizaje abiertos, democráticos, interculturales e inclusivos.",
            },
          ],
        },
      ],
      perfilDTag:
        "¿Qué resultados o logros de los aprendizajes que se relacionan con el manejo de modelos, protocolos, procesos y procedimientos profesionales e investigativos son necesarios para el desempeño del futuro profesional?",
      perfilED: [
        {
          text: "Construye conocimiento, a través del estudio y la experiencia, a partir de la interpretación de teorías, leyes, conceptos y procedimientos de la profesión docente.",
        },
        {
          text: "Implementa estrategias de inter-aprendizaje que reconocen de la diversidad cultural y promueven la ciudadanía intercultural orientado por enfoques de equidad, inclusión e interculturalidad.",
        },
        {
          text: "Propicia la autonomía personal; analiza cómo y en qué grado la propia cultura, estereotipos y actitudes influyen en la propia persona y en sus relaciones con personas de otras culturas desde la perspectiva del aprendiz.",
        },
        {
          text: "Lidera equipos de trabajo multidisciplinarios y multi-profesionales, promoviendo el aprendizaje cooperativo y la producción colectiva de conocimientos y saberes.",
        },
        {
          text: "Sistematiza y expresa; documenta los resultados de su práctica y de sus investigaciones, con el fin de crear, compartir y difundir conocimiento interdisciplinario.",
        },
      ],
      teams: [
        {
          photo: require("@/assets/images/team/photoA.jpg"),
          background: require("@/assets/images/team/backgroundA.jpg"),
          name: "Sara Cruz Naranjo",
          speciality: "Magíster en Tecnología Educativa",
        },
        {
          photo: require("@/assets/images/team/photoB.jpg"),
          background: require("@/assets/images/team/backgroundB.jpg"),
          name: "Nathaly Martínez Caracundo",
          speciality: "Estudiante Universitaria",
        },
        {
          photo: require("@/assets/images/team/photoC.jpg"),
          background: require("@/assets/images/team/backgroundC.jpg"),
          name: "Bryan Paredes Gracia",
          speciality: "Estudiante Universitario",
        },
        {
          photo: require("@/assets/images/team/photoD.jpg"),
          background: require("@/assets/images/team/backgroundD.jpg"),
          name: "Jorman Nazareno Astudillo",
          speciality: "Estudiante Universitario",
        },
      ],
      vari: "",
      //      vari: "",
      //    vari: "",
      //  vari: "",
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
