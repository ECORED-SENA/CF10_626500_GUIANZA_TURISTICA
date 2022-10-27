<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 1
      h1 Estrategias de gestión y proceso administrativo
    p La génesis de un servicio guiado es una orden de servicio en que el contratante describe sus necesidades y el tipo de usuarios. A partir de dicha información, el guía de turismo traza unos objetivos, realiza la planeación, luego la ejecuta y, finalmente, evalúa el servicio. El papel que ejerce el guía de turismo puede ser apreciado en detalle a continuación:
    .row.mb-5
      .col-lg-4.mb-3
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img.p-4.aq(src='@/assets/curso/tema1/img1.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.text-center.mb-4  El guía de turismo no es un ejecutor
            
            p.text-center.text-small El guía de turismo no es meramente un ejecutor, sino el responsable de la coordinación de varios recursos dispuestos para el servicio guiado, no puede recurrir en estrategia de ensayo y error, porque generar descontento en sus usuarios y desconfianza en los otros prestadores de servicio (proveedores), por ello asume el papel de administrador (Chiavenato, 2012).
      .col-lg-4.mb-3
        .tarjetas-up
          img.p-4.aq(src='@/assets/curso/tema1/img2.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.text-center.mb-4.text-small  El guía de turismo crea estrategias y hace uso de recursos
            
            p.text-center.text-small En el rol administrativo, el guía genera unas estrategias y se ajusta a los procesos determinados por el contratante o, en caso de que sea necesario, los crea para lograr los objetivos propuestos. Debe tener una amplia y variada formación en diferentes disciplinas que le permitirán identificar los recursos idóneos, organizarlos, controlarlos. Además, investigar y asesorar a su contratante y el equipo de trabajo sobre las estrategias y los procesos del servicio, y así tener una dirección clara sobre la toma de decisiones y respuestas a la exigencia de los usuarios. 
      .col-lg-4.mb-3
        .tarjetas-up
          img.p-4.aq(src='@/assets/curso/tema1/img3.png' alt='AvatarTop' style='width:400px')
          .tarjetas-up_card.bg--2-claro.p-4
            .title.d-flex.align-items-center.mb-4
              span.c--4
                i.fas.fa-caret-up.fa-2x.color-primario.me-3
                i.fas.fa-caret-down.fa-2x.color-primario.me-3
              h4.mb-0.text-center.mb-4 El guía de turismo es un visionario
              
            p.text-center El guía como administrador debe ser un visionario y conocer los acontecimientos pasados, presentes y las previsiones futuras, porque su mirada debe ser holística para obtener unos resultados de calidad, al menor costo y con la mayor eficiencia y eficacia posible. 
    .row.mt-4
      .col-lg-8
        .col-lg-12
          .bloque-texto-c.color-secundario.p-4
            i.fas.fa-quote-right
            p Las estrategias se utilizan para alcanzar de manera eficiente los objetivos y escoger las tácticas y la forma de operar que permita implementar mejor la estrategia adoptada para el servicio contratado.

      .col-lg-4
        img(src='@/assets/curso/tema1/img4.svg' alt='AvatarTop' )
    separador
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1  La administración en la guianza 
    .row
      .col-lg-7
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p La palabra administración viene del latín <d>ad</d> (dirección, tendencia) y <d>minister</d> (subordinación u obediencia), y significa cumplimiento de una función bajo el mando de otro, en otras palabras, prestar un servicio a otra persona. A pesar de que esta definición es general, hoy por hoy, la tarea actual de la administración consiste en el proceso de planear, organizar, dirigir y controlar el uso de recursos para lograr los fines de una empresa 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h4.mb-0 (Chiavenato,  2012).
        p.mt-2 La disciplina administrativa cuenta con diversas teorías que han ido evolucionando con el paso del tiempo y estas varían enormemente según la escuela de pensamiento, destacándose de acuerdo con el énfasis y los enfoques de cada una de estas, como se presenta seguidamente:
      .col-lg-5
        img(src='@/assets/curso/tema1/img4.jpg' alt='AvatarTop' )
    .tarjeta.tarjeta--gris.p-4.mb-5.mt-4
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center.mt-4(titulo="Teoría administración científica")
          .col-md-6.mb-4.mb-md-0
            h5.te 1903 - Énfasis en las tareas
            p Su principal exponente es el estadounidense Frederick Winslow Taylor. Esta teoría se enfoca en el desarrollo de las tareas para alcanzar la eficiencia industrial, a través de estudios de tiempos y movimientos, la división del trabajo y la especialización del trabajador, en donde se dedicaba a una labor específica y rutinaria. Se creó el concepto de diseño de cargas y tareas.
        
          .col-md-3
            figure
              img.imagec(src='@/assets/curso/tema1/img5.png', alt='Texto que describa la imagen')
              figcaption.mt-3.text-center Frederick Winslow Taylor
        .row.justify-content-center.mt-4(titulo="Teoría clásica")
          .col-md-6.mb-4.mb-md-0
            h5.te 1916 - Énfasis en la estructura
            p Su principal exponente es Henry Fayol y se enfoca en dictar los principios generales de la administración, haciendo hincapié en la estructura de la organización entendida como una disposición de partes que la constituyen.
        
          .col-md-3
            figure
              img.imagec(src='@/assets/curso/tema1/img6.png', alt='Texto que describa la imagen')
              figcaption.mt-3.text-center  Henry Fayol
        .row.justify-content-center.mt-4(titulo="Teoría de las relaciones humanas")
          .col-md-6.mb-4.mb-md-0
            h5.te 1932 - Énfasis en las personas
            p Desarrollada por Elton Mayo, surge de los resultados obtenidos en el experimento de Hawthorne. Se convierte en un movimiento opositor a la teoría clásica de la administración para pasar de un enfoque orientado hacia la tarea y la estructura, a centrarse en las personas y brindar satisfacción al interior de las organizaciones. Se estudió la importancia de la motivación y su estrecha relación con las necesidades humanas básicas.
        
          .col-md-3
            figure
              img.imagec(src='@/assets/curso/tema1/img7.png', alt='Texto que describa la imagen')
              figcaption.mt-3.text-center  Elton Mayo
        .row.justify-content-center.mt-4(titulo="Teoría de las relaciones humanas")
          .col-md-6.mb-4.mb-md-0
            h5.te 1947 - Énfasis en el ambiente
            p Para esta época, las teorías administrativas con las que se contaba, tenían muchas críticas; la clásica, por su mecanismo y la de las relaciones humanas por su romanticismo. Razón por la cual, los estudiosos de la época buscaron inspiración en los escritos del entonces ya fallecido economista y sociólogo alemán Max Weber, indagando un modelo de organización racional que permitiera involucrar de manera eficiente a todas las formas de organización humana y en especial a las empresas.
        
          .col-md-3
            figure
              img.imagec(src='@/assets/curso/tema1/img8.png', alt='Texto que describa la imagen')
              figcaption.mt-3.text-center   Max Weber
        .row.justify-content-center.mt-4(titulo="Teoría de las relaciones humanas")
          .col-md-6.mb-4.mb-md-0
            h5.te 1972 - Énfasis en la tecnología
            p Esta teoría hace énfasis en que no hay nada absoluto en las organizaciones ni en la teoría administrativa, por el contrario, todo es relativo y dependerá de uno o muchos factores. Nace a partir de una serie de investigaciones para verificar que modelos de estructuras organizacionales eran más eficaces en determinados tipos de empresas; el resultado fue sorprendente, la estructura de una organización y su funcionamiento dependen de la relación con el ambiente externo. Es decir, no hay una única y mejor forma de organizar y dirigir.
        
          .col-md-3
            figure
              img.imagec(src='@/assets/curso/tema1/img9.svg', alt='Texto que describa la imagen')
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-4
              img.za(src='@/assets/curso/tema1/img10.png', alt='Texto que describa la imagen')
          
          .col-lg-8.mt-5
            .row.mt-4
            .row.p-4.baq
              p.baq2 De las teorías expuestas anteriormente, la guianza aplica elementos teóricos, especialmente de la administración científica, los estudios de tiempos y movimientos, la división del trabajo y la especialización del trabajador.
    separador
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Proceso administrativo y el ciclo de planear, hacer, verificar y actuar -PHVA- en el guionaje
    .row.justify-content-center
      .col-lg-10
        .row.align-items-center
          .col-lg-8
            .row.mt-5
            .row.p-5.baqq
              p.baqq2 El proceso administrativo en la guianza turística, también adopta principios de la teoría neoclásica que enfatiza la administración por objetivos y resultados, además propone el proceso administrativo, el cual se deriva en cuatro funciones que aplican a cualquier contexto: planeación, organización, dirección y control.
          .col-lg-4
              img.za(src='@/assets/curso/tema1/img11.png', alt='Texto que describa la imagen')
    .row.justify-content-center.bg1.mt-5
      .col-lg-8
        img(src='@/assets/curso/tema1/img12.svg', alt='Texto que describa la imagen')
    p.mt-4 El proceso administrativo se enfoca en los procedimientos que son una serie de pasos o tareas organizadas cronológicamente y de manera técnica que buscan obtener un propósito concreto. A continuación, se presenta un ejemplo para el desarrollo de un plan de viaje: 
    .row.justify-content-center.mt-5
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1
          span Procedimientos del proceso administrativo, ejemplo plan de viaje
    img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')
    figcaption.mt-3 Nota. Tomada de Luna (2015).
    .row.mt-4
      .col-lg-8.mt-5
        .row.mt-4
        .row.p-4.colort1.mt-5
          p.colort123 Para la efectividad del proceso administrativo en la guianza turística, se suma, el enfoque en el cliente a partir de la teoría de la Calidad Total (CT), que se apoya en el manejo de estadísticas y la mejora de los productos que van acorde a los requerimientos de los consumidores. 
          p.colort123 El término Calidad Total (CT) en la guianza es más que un concepto, es una filosofía, enfocada en la mejora continua de todos los procesos, es decir hacerlos más efectivos, eficientes y adaptables para dar al usuario lo que necesita cuando lo necesita, con un precio competitivo, que complementa el concepto: la experiencia cliente. 
      
      .col-lg-4
        img.inaz(src='@/assets/curso/tema1/img14.png', alt='Texto que describa la imagen')
    p.mt-4 Como lo exponen García et al. (2003), la principal herramienta para implementar la calidad total es el ciclo PHVA, que los japoneses llamaron el ciclo de Demming. Al aplicarlo a la guianza se expresa e interpreta así:
    .row.bg2.mt-4.justify-content-center
      .col-lg-8
        ImagenInfograficaB.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img16.svg', alt='Texto que describa la imagen')

          div(x="6%" y="15%" tooltip="Planear" )
            .row.justify-content-center.mt-5.p-4.bcolor
              .col-lg-6
                h4 Planear
                p.mb-0 Recopilar los datos disponibles sobre el servicio.
                p.mb-0 Comprender las necesidades de los usuarios.
                p.mb-0 Involucrar al recurso humano idóneo e informarlos sobre los puntos anteriores.
                p.mb-0 Estudiar exhaustivamente los procesos involucrados en el servicio.
              .col-lg-5
                img(src='@/assets/curso/tema1/img17.svg', alt='Texto que describa la imagen')
              .col-lg-1

          div(x="82%" y="15%" tooltip="Verificar" )
            .row.justify-content-center.mt-5.p-4.bcolor
              .col-lg-6
                h4 Verificar
                p.mb-0 Determinar si se alcanzaron los resultados esperados.

                p.mb-0 Entender y dejar por escrito las discrepancias entre lo que se planeó y lo que verdaderamente se llevó a cabo.

                p.mb-0 Revisar problemas y errores durante el servicio.

                p.mb-0 Verificar qué quedó pendiente por resolver. 

              .col-lg-5
                img(src='@/assets/curso/tema1/img18.svg', alt='Texto que describa la imagen')
              .col-lg-1
          div(x="6%" y="81%" tooltip="Hacer" )
            .row.justify-content-center.mt-5.p-4.bcolor
              .col-lg-6
                h4 Hacer
                p.mb-0 Ejecutar las tareas que se planearon y recopilar la información suficiente para la verificación. 

                p.mb-0 Verificar la efectividad de las acciones propuestas.

                p.mb-0 Tomar decisiones frente a los problemas o ineficiencia detectada en la operación. 

              .col-lg-5
                img(src='@/assets/curso/tema1/img19.svg', alt='Texto que describa la imagen')
              .col-lg-1
          div(x="82%" y="81%" tooltip="Actuar" )
            .row.justify-content-center.mt-5.p-4.bcolor
              .col-lg-6
                h4 Actuar
                p.mb-0 Incorporar la mejora del proceso.
                p.mb-0 Dar a conocer la mejora a los relacionados con el servicio (equipo de trabajo y proveedores). 
                p.mb-0 Identificar nuevos procesos por mejorar a partir de preguntas como: ¿cuál fue el punto más estresante?, ¿qué hice bien?, ¿qué debo hacer de otro modo?, ¿qué puedo hacer diferente la próxima vez?

              .col-lg-5
                img(src='@/assets/curso/tema1/img20.svg', alt='Texto que describa la imagen')
    p.mt-4 Con relación al ciclo PHVA aplicado a la guianza turística, en la siguiente figura se aprecian de manera integral los procedimientos y productos que están relacionado en cada etapa del ciclo, y cómo se direccionan a la mejora continua y a la calidad en la prestación del servicio.
    .titulo-sexto.color-acento-contenido
      h5 Figura 2
      span Ciclo PHVA en la guianza turística 
    .row.bg3
      img(src='@/assets/curso/tema1/img21.svg', alt='Texto que describa la imagen')
      figcaption Nota. Adaptada de García (2003).

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
.bloque-texto-c.color-secundario
  background-color: #E2E8E0
.bloque-texto-c i
  color: #406834
  font-size: 2rem
.bloque-texto-c:after
  background-color:  #406834
.bloque-texto-d.color-secundario:before
  background-color: #FFECCD
.bloque-texto-d__autor, .bloque-texto-e__autor
  text-align: left
.bloque-texto-d
  border-top: 0px
.tarjeta--gris
  background-color: #FFF4E1
.linea-tiempo-c__header__btn, .linea-tiempo-c__header__btn--left, .linea-tiempo-c__header__btn--right, .pasos-b__header__btn--left, .pasos-b__header__btn--right
  background-color: #0387D0
.img-infografica-b__modal__contenido div > *
  color: #12263F!important
.img-infografica-b__modal
</style>
