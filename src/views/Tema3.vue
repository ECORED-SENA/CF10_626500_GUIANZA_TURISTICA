<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 3
      h1 El talento humano en la guianza 
    .row
      .col-lg-6
        img(src='@/assets/curso/tema3/img1.png', alt='Texto que describa la imagen')

      .col-lg-6.mt-4
        p De acuerdo con Chiavenato (2000), “cuando se habla de administración de recursos humanos, se toma como referencia la administración de las personas que participan en las organizaciones, las cuales desempeñan determinados roles”. En la guianza turística, al desarrollar el Ciclo PHVA, es fundamental al planificar “involucrar al recurso humano idóneo”, según el Instituto Distrital de Turismo - IDT (2020), el desempeño de los guías implica conocimiento, técnicas y aptitud de servicio, es crucial para determinar el grado de satisfacción de los visitantes y turistas, y, por ende, la medición de resultados desde los sectores público, privado, al igual que desde la academia. 
        .cajon.color-acento-contenido.p-4.mb-4
          p Aunque los roles del guía se sustentan en las funciones determinadas en la normativa, tales como: orientar, instruir, asistir y conducir al visitante o turista, las cuales deben articularse con otros prestadores de servicios que intervienen en la ejecución del recorrido (SENA, 2008). La responsabilidad del guía va más allá, porque es el encargado de conectar a los turistas o viajeros con la comunidad receptora y las áreas a visitar sin alterar el ambiente local. 
    separador
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1  Funciones en cada momento del servicio
    p Como lo describen Aguilar, (2016) e Icontec (2016), las funciones del guía varían según las características del servicio, encontramos dentro la generalidad en los tres momentos del servicio.  
    .row
      .col-lg-2
        .row
          .col-lg-3
            img.fa(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9.lineaz
            h4.mt-1 En el antes
    p.mt-4 Informarse sobre el servicio a prestar, tanto del cliente como proveedores, teniendo en cuenta los aspectos que se describen a continuación.
    .row
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Información previa del contratante")
            .col-md-1
            .col-md-10.mb-4.mb-md-0
              p Solicitar al contratante del servicio, según sea el caso, información previa como: plan de viaje, lista de usuarios (nombre, identificación y número de contacto), pólizas de seguros, datos de contacto de proveedores y características de los servicios contratados (ejemplo para vehículo, placa, capacidad). Para la ejecución del servicio: cartelitos de la agencia para informar a los turistas, el material publicitario o POP, distribución en habitaciones. Formatos impresos, para registrar novedades y el desarrollo del viaje.
          .row(titulo="Planear el servicio")
            .col-md-1
            .col-md-10.mb-4.mb-md-0
              p Planear con antelación todo lo concerniente al servicio, previo a la llegada de los turistas. En la avanzada, el guía reconoce el atractivo o sitio a visitar, las vías de acceso y de salida, el clima, las condiciones propias del lugar para tomar decisiones en el viaje, dado el caso.
          .row(titulo="Coordinar los servicios y prestaciones con los proveedores")
            .col-md-1
            .col-md-10.mb-4.mb-md-0
              p Coordinar los servicios y prestaciones con los proveedores en los hoteles, medios de transporte, en restaurantes, en espectáculos y similares.
                    
      .col-lg-5
        img(src='@/assets/curso/tema3/img3.png', alt='Texto que describa la imagen')
    .row
      .col-lg-2
        .row
          .col-lg-3
            img.fa(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9.lineaz
            h4.mt-1 Durante
    
    p.mt-3 Se debe informar al grupo sobre los aspectos relacionados con el servicio, y disposición en la prestación de este, teniendo en cuenta los siguientes aspectos:
    .row.justify-content-center
      .col-lg-4.col-8
        img(src='@/assets/curso/tema3/img5.png', alt='Texto que describa la imagen')
      .col-lg-8
        .tarjeta.tarjeta--naranja.p-4.mb-5
          SlyderA
            
            .row.justify-content-center.mb-5
              .col-md-1.mb-4.mb-md-0
                img(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
            
              .col-md-9
                p Presentarse a sí mismo y a su equipo de trabajo. 
                p.mt-4 Informar a los turistas el idioma en el que se prestará el servicio, las tarifas (costo total del servicio, qué incluye y qué no), la duración del servicio, el aforo de participantes, así como todos los demás detalles del servicio a ofrecer.
                p.mt-3 Actuar como interlocutor entre la agencia y el grupo.
                p.mt-4 Asistir a los viajeros en los <i>"check in"</i> y <i>"check out"</i> de aeropuertos y hoteles. Está al tanto del equipaje, el transporte, las reservas.
                p.mt-4.mb-5 Comunicar datos técnicos sobre los sitios a visitar. Asimismo, datos de interés particular como cambios de divisas, compras, otros sitios para visitar, alternativas gastronómicas, entre otros.
            
            .row.justify-content-center.mb-5
              .col-md-1.mb-4.mb-md-0
                img(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
                img.mt-4(src='@/assets/curso/tema3/icom.png', alt='Texto que describa la imagen')
            
              .col-md-9
                p Atender incidencias que ocurran durante el servicio. Por ejemplo, extravío de una maleta; el guía asistirá al pasajero para recuperarla o realizar los trámites que se requieran.
 
                p.mt-3 Velar por que las estancias discurran de manera grata, intentando generar buenas relaciones entre los miembros del grupo que tiene a cargo.

                p.mt-3 Pasar a los viajeros cuestionarios de satisfacción sobre el servicio o servicios prestados por parte de la empresa organizadora o el guía directamente.

                p.mt-3 Cuidar que la organización del viaje transcurra de acuerdo con lo previsto.
    .row
      .col-lg-2
        .row
          .col-lg-3
            img.fa(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9.lineaz
            h4.mt-1 Después
    p Elaborar los informes necesarios, y requeridos en el servicio, teniendo en cuenta los siguientes aspectos:
    .row.mt-4.justify-content-center
      .col-lg-4.col-8
        img(src='@/assets/curso/tema3/img4.png', alt='Texto que describa la imagen')
      .col-lg-8  
        .row.mt-5
        .row.bac.mt-5
          ul.lista-ul--color.mt-5.mb-5
            li 
              i.fab.fa-telegram
              | Elaborar un informe final para la agencia: cómo ha transcurrido el viaje, nivel de satisfacción por parte de los clientes, etc. 
            li 
              i.fab.fa-telegram
              | Entregar los equipos en las mismas condiciones que los recibió.
            li 
              i.fab.fa-telegram
              | Hacer una relación de la distribución de los recursos financieros que se le hayan encomendado.
    separador                    
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2  Roles de guía en el servicio
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema3/img6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dependiendo del número de usuarios y la complejidad del servicio, el guía requiere un equipo de trabajo, dicho de otro modo, “un grupo de personas que se organiza para realizar una labor determinada y alcanzar un objetivo común” (Icontec y MinCIT, 2016). Los guías de turismo pueden asumir diferentes roles, según la actividad que realicen (turismo metropolitano, turismo de naturaleza, por ejemplo), tales como coordinador o tour líder (encargado de todos los aspectos del recorrido), guía puntero (en turismo de naturaleza, quien muestra el camino), apoyo prehospitalario APH (guías con conocimientos y estudios en primeros auxilios), o guía rastrillo (en turismo de naturaleza, encargado de recoger el grupo y no permitir su pérdida), entre otros. 
    .row.mt-5.justify-content-center
      .col-lg-1
      .col-lg-4.col-8
        img(src='@/assets/curso/tema3/img7.png', alt='Texto que describa la imagen')
      .col-lg-5   
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Guía APH (atención prehospitalaria).

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Guía fijo / Guía local.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Coordinador/  <i>tour leader</i>/ gerente de viaje / <i>tour conductor.</i>

          li 
            .lista-ol--cuadro__vineta
              span 4
            | Guía de ruta / Guía puntero.

          li 
            .lista-ol--cuadro__vineta
              span 5
            | Guía de cierre / Guía rastrillo.
    p.mt-4 A continuación, se expone una explicación de cada uno de estos roles.   
    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center.align-items-center(titulo="Paso 1. Guía APH (atención prehospitalaria)")
        .col-md-5.mb-4.mb-md-0
          ul.lista-ul--color.mt-5.mb-5
            li 
              i.fab.fa-telegram
              | Maneja técnicas de salvamento.

            li 
              i.fab.fa-telegram
              | Garantiza la disponibilidad de los equipos para emergencias.

            li 
              i.fab.fa-telegram
              | Evalúa signos y síntomas de salud de los usuarios.
            li 
              i.fab.fa-telegram
              | Aplica primeros auxilios.
            li 
              i.fab.fa-telegram
              | Mantiene contacto con entidades de atención en salud y redes.
        .col-md-1
        .col-md-4
          figure
            img(src='@/assets/curso/tema3/img8.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Paso 2. Guía fijo / Guía local")
        .col-md-5.mb-4.mb-md-0
          ul.lista-ul--color.mt-5.mb-5
            li 
              i.fab.fa-telegram
              | Fijo: presta sus servicios para un atractivo puntual como museos, parques nacionales, entre otros.


            li 
              i.fab.fa-telegram
              | Local: muestra los recursos turísticos de una zona determinada. Posee conocimientos profundos en relación con su ámbito de actuación particular.

        .col-md-1
        .col-md-4
          figure
            img(src='@/assets/curso/tema3/img9.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Paso 3. Coordinador/ <i>Tour leader</i>/ Gerente de viaje / <i>Tour conductor</i>")
        .col-md-5.mb-4.mb-md-0
          ul.lista-ul--color.mt-5.mb-5
            li 
              i.fab.fa-telegram
              p.mb-0 Coordina la logística y operación.
            li 
              i.fab.fa-telegram
              p.mb-0 Administra los recursos financieros.
            li 
              i.fab.fa-telegram
              p.mb-0 Maneja y organiza los equipos de comunicación.
            li 
              i.fab.fa-telegram
              p.mb-0 Define los lugares en donde se brindará la alimentación.
            li 
              i.fab.fa-telegram
              p.mb-0 Vigila la seguridad de los turistas.
            li 
              i.fab.fa-telegram
              p.mb-0 Coordina la información que se va a suministrar sobre la zona a visitar.
            li 
              i.fab.fa-telegram
              p.mb-0 Organiza los grupos de turistas.
            li 
              i.fab.fa-telegram
              p.mb-0 Delega y faculta funciones y responsabilidades.
            li 
              i.fab.fa-telegram
              p.mb-0 Controla y evalúa el cumplimiento del programa.
            li 
              i.fab.fa-telegram
              p.mb-0 Realiza el control de calidad de todos los servicios.
            li 
              i.fab.fa-telegram
              p.mb-0 Representa a la agencia de viajes ante los proveedores.

        .col-md-1
        .col-md-4
          figure
            img(src='@/assets/curso/tema3/img10.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Paso 4. Guía de ruta / Guía puntero")
        .col-md-5.mb-4.mb-md-0
          ul.lista-ul--color.mt-5.mb-5
            li 
              i.fab.fa-telegram
              p.mb-0 Motiva y sensibiliza en los recorridos, presenta atractivos.

            li 
              i.fab.fa-telegram
              p.mb-0 Dirige ejercicios de alistamiento muscular,  estiramiento y demás necesarios según la ruta. 

            li 
              i.fab.fa-telegram
              p.mb-0 Conduce el grupo.

            li 
              i.fab.fa-telegram
              p.mb-0 Determina los tiempos y espacios de acuerdo con las necesidades físicas y sicológicas de los usuarios.

            li 
              i.fab.fa-telegram
              p.mb-0 Maneja y supervisa los equipos que sean necesarios en el recorrido.

            li 
              i.fab.fa-telegram
              p.mb-0 Coordina y se apoya en los demás guías.

        .col-md-1
        .col-md-4
          figure
            img(src='@/assets/curso/tema3/img11.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center(titulo="Paso 5. Guía de cierre / Guía rastrillo")
        .col-md-5.mb-4.mb-md-0
          ul.lista-ul--color.mt-5.mb-5
            li 
              i.fab.fa-telegram
              p.mb-0 Garantiza que las personas rezagadas en el recorrido puedan llegar a la meta.
            li 
              i.fab.fa-telegram
              p.mb-0 Se asegura de que se cumpla la metodología. No Dejar Rastro.
            li 
              i.fab.fa-telegram
              p.mb-0 Mantiene comunicación permanente con el guía líder.


        .col-md-1
        .col-md-4
          figure
            img(src='@/assets/curso/tema3/img12.png', alt='Texto que describa la imagen')
    .row.mt-5
      .col-lg-7.mt-3
        .row.bac2.p-2
          p El coordinador o guía líder define, previamente con cada miembro de su equipo, las tareas que va a desempeñar, así como la información de contacto y principales funciones del resto de equipo, los objetivos a conseguir y las normas a seguir durante el servicio. 
          p.mb-0 Por supuesto, cada rol tiene unas funciones específicas en la que se requieren equipos o recursos físicos que estén acordes con las características del servicio, es precisamente por ello que el guía debe conocer a fondo los recursos y seleccionar los que requiera para desempeñar su función efectiva y eficientemente.
          p Ahora, la traducción del ciclo PHVA sobre las funciones y acciones del guía, se presentan de forma sencilla en la tabla a continuación.      
      .col-lg-5
        img(src='@/assets/curso/tema3/img13.png', alt='Texto que describa la imagen')
    .row.justify-content-center.mt-5
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3
          span Ciclo PHVA de funciones del guía 
        .tabla-b.color-acento-contenido.mb-0
          .tabla-b__header
            h4.mb-0 Descripción del procedimiento
          table
            tr
              th Planificar 
            tr
              th Elabora los planes de acción y de contingencia.    
            tr
              th Prepara el guion.
            tr
              th Coordina al equipo de trabajo.
            tr
              th Prepara la lista de verificación.
            tr
              th Prepara documentación, indumentaria y equipos. 
        .tabla-b.color-acento-contenido.mb-0
          .tabla-b__header
            h4.mb-0 Conduce
          table
            tr
              th Confirma que el recorrido o tour según lo definido inicialmente.  
            tr
              th Verifica las condiciones operativas y de seguridad. 
            tr
              th Identifica el perfil de los turistas. 
            tr
              th Establece pautas de convivencia entre los usuarios.
            tr
              th Dirige al usuario de acuerdo con planes establecidos.
            tr
              th Maneja los recursos financieros.
            tr
              th Realiza una realimentación con el grupo.
        .tabla-b.color-acento-contenido.mb-0
          .tabla-b__header
            h4.mb-0 Orienta 
          table
            tr
              th Se presenta a sí mismo y a su equipo de trabajo. 
            tr
              th Presenta al usuario su Tarjeta Profesional y RNT.
            tr
              th Informa sobre características físicas de los sitios a visitar, protocolos de seguridad, medios de pago, sistema público de transporte, entre otros.
        .tabla-b.color-acento-contenido.mb-0
          .tabla-b__header
            h4.mb-0 Instruye 
          table
            tr
              th Identifica los atractivos turísticos. 
            tr
              th Ilustra sobre el patrimonio.
            tr
              th Informa sobre el respeto sociocultural y la sostenibilidad. 
            tr
              th Pregunta si existen dudas y ofrece las explicaciones.
        .tabla-b.color-acento-contenido.mb-0
          .tabla-b__header
            h4.mb-0 Asiste 
          table
            tr
              th Asesora a los usuarios sobre servicios financieros.
            tr
              th Facilita soluciones a las restricciones alimenticias del usuario.
            tr
              th Acompaña a los turistas en caso de robo o pérdida de documentos.
            tr
              th Asesora al usuario para las compras de su interés.
            tr
              th Asiste al usuario como primer respondiente cuando lo requiera.
            tr
              th Evalúa la contingencia de acuerdo con la situación.
            tr
              th Utiliza el plan de contingencias o propone posibles soluciones.
        .tabla-b.color-acento-contenido.mb-0
          .tabla-b__header
            h4.mb-0 Controla 
          table
            tr
              th Efectúa conteos periódicos del grupo.
            tr
              th Reporta cualquier anomalía en la prestación del servicio. 
            tr
              th Realiza una realimentación con el usuario sobre el servicio.
            tr
              th Diligencia la lista de chequeo para la prestación del servicio.
            tr
              th Analiza las diferencias entre lo planteado y ejecutado.






</template>

<script>
export default {
  name: 'Tema3',
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
.cajon.color-acento-contenido
  background-color: #FFD667
.cajon.color-acento-contenido:before
  background-color: #DAAF40
.tarjeta--azul
  background-color: #F6F6F6
.p-3.pb-0.p-md-4.pb-md-0.mb-3.tarjeta.tarjeta--azul.acordion__activo
  background-color: #E2E8E0!important
.tarjeta--naranja
  background-color: #FFE6A1
.bloque-texto-g__img
  left: 50%
.bloque-texto-g
  justify-content: flex-start
.bloque-texto-g__img
  @media screen and ( max-width: 769px)
    left: 0%
</style>
