<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 2
      h1 Herramientas de planeación del guionaje
    .row.bg4
      p Desde la administración, luego de determinar los procedimientos para un servicio, se define un programa, es decir, una sucesión ordenada de las funciones o actividades que habrán de efectuarse para alcanzar los objetivos planteados. Para elaborar un programa se sugieren estos pasos:
      .row.mt-5.justify-content-center
        .col-lg-10.mt-5
          PasosA.color-primario.mb-5.mt-5(tipo="n")
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Ordenar cronológicamente la realización de los procedimientos.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema2/1.svg', alt='Texto que describa la imagen')

            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema2/2.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 Identificar la secuencia, es decir, determinar qué procedimientos deben realizarse antes de la otra, cuáles se dan simultáneamente y, por último, cuáles deben efectuarse por su conclusión.
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Asignar a cada procedimiento el tiempo de duración, así como los recursos necesarios.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema2/3.svg', alt='Texto que describa la imagen')
            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema2/4.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 Debe establecer por escrito y en lo posible graficarse, debe ser preciso y de fácil comprensión para todo el equipo de trabajo.
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 El programa debe ser flexible a los cambios que se presenten y de igual manera tener presentes las consecuencias.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema2/5.svg', alt='Texto que describa la imagen')
        .row.mb-5
        .row.mb-5  
        .row.mb-5
    separador
    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1  Gráfico de Gantt
    .row
      .col-lg-7
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p El programa es la base de la Gráfica de Gantt, herramienta que recibe su nombre por el autor Henry Lawrence Gantt de la escuela de administración científica. Esta permite crear la planeación de manera gráfica y hacerle control, mediante gráficas de barras, los requisitos de tiempo para las diversas áreas o acontecimientos en la producción
          h4 (Luna, 2015).
        p.mt-2 En el caso de la guianza, para realizar el diagrama de Gantt adicional al programa, se requiere conocimiento de la norma de competencias vigente y dos variables que dependen de las características del servicio, como se indica en la siguiente figura.
      .col-lg-5
        img(src='@/assets/curso/tema2/img1.png', alt='Texto que describa la imagen')
    .row.bg5
      .titulo-sexto.color-acento-contenido
        h5 Figura 3
        span Diagrama de Gantt en la guianza
      .row.justify-content-center
        .col-lg-10
          img(src='@/assets/curso/tema2/img2.svg', alt='Texto que describa la imagen')
    p.mt-4 En guianza turística, la herramienta gráfica de Gantt es un recurso muy valioso para la planeación, y en la siguiente tabla se ofrece un ejemplo relacionado con este tema, donde se explica de forma descriptiva qué debe contener el recurso en relación con el tema que nos atañe.
    .row
      .col-lg-7
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('downloads/tabla1.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo Tabla 1.</strong> Ejemplo del Gráfico de Gantt en la planeación de la Guianza turística


    .row.justify-content-center.mt-5
      .col-lg-10
        .row.align-items-center
          .col-lg-4
              img.za(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')
          
          .col-lg-8.mt-5
            .row.mt-4
            .row.p-4.baq
              p.baq2 En las funciones del guía de turismo, también se encuentra la conducción, que está directamente relacionada con el liderazgo ejercido frente al usuario, en relación con el direccionamiento y orientación con seguridad y eficiencia por los atractivos turísticos que se pueden consultar en desarrollo del servicio. Precisamente para evidenciar la eficiencia y la seguridad demostrada en el servicio, el guía de turismo debe elaborar un plan de acción al respecto, evitando así posibles fallas. 
    separador
    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2  Plan de acción
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img3.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En la guianza, el plan de acción es una herramienta de planificación que sirve para organizar e implementar un servicio, considerando las funciones del guía de turismo. Incluye: itinerario, ruta y diseño gráfico del recorrido, recursos y debe estar respaldado por un plan de contingencias (Icontec y Ministerio Comercio Industria y Turismo de Colombia - MinCIT, 2016). 
    p.mt-4 La siguiente figura la ubicación del plan de acción dentro de los principios de la conducción en la guianza.
    .titulo-sexto.color-acento-contenido
      h5 Figura 4
      span Elementos de la coordinación en la guianza turística
    .row.bg5
      .col-lg-11
        img(src='@/assets/curso/tema2/imas.png', alt='Texto que describa la imagen')
        figcaption Nota. Adaptado de la norma técnica NTS GT 012. 
    p.mt-4 Los componentes del plan de acción se integran al itinerario que es un sencillo paso a paso, de una ruta, donde se muestran los lugares y tiempos de cada una de las actividades programadas. En la siguiente tabla, se puede apreciar mediante un ejemplo, los componentes del plan de acción relacionados con el servicio, los proveedores, las guías y las actividades.
    .row
      .col-lg-7
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('downloads/tabla2.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p <strong>Anexo Tabla 2.</strong>  Ejemplo del plan de acción

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.pasos-a.color-primario .pasos-a__circle
  background-color: #EB6F2D
.pasos-a.color-primario .pasos-a__circle div
  color: white
.bloque-texto-c.color-secundario
  background-color: #FFECCD
</style>
