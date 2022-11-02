<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 4
      h1 Los recursos físicos en el guionaje
    .row
      .col-lg-7
        p Como administrador, dentro de las responsabilidades del guía, también está la administración de los recursos físicos, es decir los materiales, equipos operativos y de seguridad.
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p los cuales “son necesarios para desarrollar todas las demás actividades de los procesos administrativos que requiera una organización dedicada a la industria turística”
          h4 (SENA, 2018)    
      .col-lg-5
        img(src='@/assets/curso/tema4/img1.svg', alt='Texto que describa la imagen')
    p.mt-3 Como se observa en la siguiente figura.
    .row.bg6
      .titulo-sexto.color-acento-contenido
        h5 Figura 5
        span La administración de recursos físicos en el guionaje
      .row
        .col-lg-1
        .col-lg-9
          img(src='@/assets/curso/tema4/img2.svg', alt='Texto que describa la imagen')
        .col-lg-2
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
      h2 4.1  Materiales para el guionaje 
    .row
      .col-lg-7
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p “Se denominan materiales los utilizados por los guías de turismo para facilitar la adecuada prestación de servicio”
          h4.mb-0 (SENA, 2018)   
        p.mt-3 Se caracterizan por ser fungibles o que se consumen con el uso, deben determinarse en la fase de planeación para incluirlo en el presupuesto y asignar responsablemente. 
        p Estos materiales son clasificados de acuerdo con su funcionalidad, y en la siguiente tabla se puede observar cómo se determina su característica y uso.
      .col-lg-5
        img(src='@/assets/curso/tema4/img3.png', alt='Texto que describa la imagen')
    .titulo-sexto.color-acento-contenido.mt-4
      h5 Tabla 4.
      span Materiales y su uso en la guianza
    .tabla-a.color-acento-contenido.mb-5 
      table
        thead
          tr
            th.wimble  Material
            <th colspan="2"> Uso <br>Operación
              span.clort ___________
              | Interpretación</th>

        tbody
          tr
            td <strong>Material turístico sobre destino y atractivos:</strong> mapa de rutas, plano de la ciudad, listado facilidades (alojamiento,	 alimentación y entretención), cupones de descuentos, atractivos locales y regionales. 
            td.text-center X
            td

          tr
            td <strong>Material promocional de la empresa organizadora viaje:</strong> tarjetas, <i>brochures</i>, esferos, similares.
            td.text-center X
            td 
          tr
            td <strong>Informativo sobre el servicio:</strong> folletos con itinerario del viaje, impresos con información del guía y los servicios incluidos. También son indicaciones sobre alguna actividad interpretativa.
            td.text-center X
            td.text-center X
          tr
            td <strong>Señalética:</strong> en este grupo se encuentran los banderines, los distintivos de colores brillantes en la indumentaria del guía o de los turistas. Se usa como objeto que facilita la ubicación visual de algo, en este caso específico del guía.
            td.text-center X
            td.text-center X
          tr
            td <strong>Didácticos:</strong> hacen relación a elementos que diseña el guía o usa para actividades recreativas o para facilitar la explicación sobre un atractivo turístico, un fenómeno natural o una costumbre. Entre ellos: catálogo especializado, álbum de fotos antiguas, juegos de mesa, afiches, bombas, vasos, entre otros.
            td 
            td.text-center X

          tr
            td <strong>Formatos:</strong> lista de pasajeros, bitácora, encuesta de satisfacción.
            td.text-center X
            td 

    separador
    #t_4_2.titulo-segundo.color-acento-contenido
      h2 4.2  Especificaciones técnicas de equipos operativos y de seguridad 
    .row.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema4/img4.svg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el caso de guionaje, los equipos se dividen en dos grandes grupos: el primero reúne los equipos operativos que son propios de cada actividad del quehacer del guía de turismo, el segundo grupo comprende los equipos de seguridad los cuales son el conjunto de implementos diseñados para fines específicos que se utilizan para procurar o proteger la integridad personal del usuario, salvaguardando de posibles riesgos y peligros.

              br
              br
              |  (Icontec y MinCIT, 2016)
    p.mt-4 Los fabricantes de los equipos, tanto operativos como de seguridad, suministran las especificaciones técnicas, es decir, las recomendaciones para el uso y mantenimiento de estos, en su mayoría se derivan de normas internacionales o protocolos de cada actividad.
    .row
      .col-lg-5
        .row
          .col-lg-1
            img.fa(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-10.lineaz
            h4 Especificaciones y cuidado de equipos operativos
    p.mt-3 Para la administración de los equipos operativos es necesario que se identifiquen previamente las especificaciones técnicas dadas por el fabricante. Cuando el equipo es nuevo, dentro de su empaque viene el manual de instrucciones el cual contiene las indicaciones para el correcto uso y la descripción de los materiales que lo componen junto con la indicación sobre cómo hacer el mantenimiento. Una explicación respecto a las especificaciones técnicas para los equipos operativos se encuentra a continuación. 
    .row.bg6
      ImagenInfografica.color-acento-botones.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/tema4/img5.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-botones.p-3(x="24%" y="15%" numero="+")
          .h4.mb-2 <i>Touring Guide System - TGS</i>
          p Es un dispositivo de audio inalámbrico que permite a los guías o coordinadores de grupos dar sus explicaciones e información sin tener que elevar la voz para ser escuchado, incluso en sitios abiertos. El guía o coordinador del grupo utiliza un emisor con un micrófono y los turistas llevan un audífono conectado inalámbricamente a un receptor. 
          p Debe siempre encenderse el equipo para determinar un posible daño, realizar inspección visual externa, revisar el <i>switch</i> de encendido y el control de volumen, así como el <i>speaker</i> (parlante) y el micrófono, hacer limpieza con paño seco. Proteger de excesivas temperaturas bajas o altas.
        .tarjeta.color-acento-botones.p-3(x="78%" y="15%" numero="+")
          .h4.mb-2 Micrófono de solapa
          p Es un dispositivo útil para la transmisión en entornos muy ruidosos, este puede ser empleado para lugares donde el flujo de personas es numeroso, así el guía de turismo puede girar la cabeza y tener movilidad de sus extremidades.
          p Su cuidado y mantenimiento es igual al amplificador de talla.
        .tarjeta.color-acento-botones.p-3(x="99%" y="34%" numero="+")
          .h4.mb-2 Silbato
          p También comúnmente llamado pito. Es aquel instrumento que se utiliza para producir sonidos mediante el flujo de aire. Existen diversos tipos de silbato con múltiples funciones que van desde organizar el tránsito, hasta el uso en las locomotoras y barcos. Para actividades de guianza turística tiene gran aplicación el silbato de llamado de atención.
          p Se debe utilizar cordel para colgar en el cuello. Limpiar con un paño húmedo.
        .tarjeta.color-acento-botones.p-3(x="1%" y="34%" numero="+")
          .h4.mb-2 Celular
          p De fácil uso, se debe mantener totalmente cargado, con minutos, y si se desea, con un paquete de datos.  Igualmente existen diferentes aplicaciones para realizar recorridos culturales. 
          p En cuanto a su cuidado, se debe mantener en lugar seco y debidamente protegido contra la humedad y el polvo excesivo. Cargar en bolsa seca y evitar exposición directa al sol y golpes o caídas.
        .tarjeta.color-acento-botones.p-3(x="56.3%" y="51.6%" numero="+")
          .h4.mb-2 Morral
          p Utilizado para llevar implementos personales y materiales necesarios para la guianza. Ayuda a mantener las manos libres.
          p Debe mantenerse en un lugar seco y asearlo regularmente con agua y jabón.
        .tarjeta.color-acento-botones.p-3(x="1%" y="73%" numero="+")
          .h4.mb-2 Amplificadores de talla
          p Este es un equipo que tiene la función de transmitir la información a un volumen superior al de la voz humana útil para el manejo de grupos numerosos.

          p En cuanto a sus cuidados y mantenimientos, deben seguirse los pasos del <i>Touring Guide System – TGS</i>.
        .tarjeta.color-acento-botones.p-3(x="99%" y="73%" numero="+")
          .h4.mb-2 Linterna
          p Es un elemento útil que integra el equipo para la seguridad en caso de ausencia de luz con el fin de evitar caídas y accidentes, práctico y fácil de usar ya que tiene un interruptor de encendido y apagado.
          p Mantener sin las pilas cuando no esté en uso y en un lugar seco y protegido de excesivas temperaturas altas o muy bajas.
        .tarjeta.color-acento-botones.p-3(x="31%" y="90%" numero="+")
          .h4.mb-2 <i>Walkie</i> o radio comunicador
          p Marino y terrestre: son útiles para la comunicación y mantenerse en contacto con los organizadores y <i>staff</i>.  Entre estos dispositivos también se incluyen el transceptor marino. Recuerde siempre tener baterías de reemplazo.
          p Como cualquier elemento eléctrico u operado por batería deben seguirse las instrucciones de cuidado ya mencionadas para este tipo de equipos.
    .row
      .col-lg-5
        img(src='@/assets/curso/tema4/img6.png', alt='Texto que describa la imagen')
      .col-lg-7
        .row.baqz.p-2.mt-4
          p Después de realizar la identificación de las especificaciones técnicas, asegurando la administración y cuidado de cada equipo, se requiere contar con un formato de hoja de vida de los equipos, esta consiste en una hoja documento de control, para hacer el seguimiento al cuidado del equipo, y en general del conjunto de actividades encaminadas a la conservación de estos, garantizando la eliminación de riesgos en el ejercicio de la guianza turística. 
          p El logro de este objetivo es respaldado mediante el diligenciamiento de la hoja de vida para cada equipo al brindar aclaración de su real estado de funcionamiento y seguridad.
    p.mt-4 Los equipos, de acuerdo con sus características, deben tener una hoja de vida en donde se registre su uso y novedades, porque esto determina su aplicabilidad y vida útil. La hoja de vida del equipo debe llevar como mínimo los siguientes criterios:
    .row.justify-content-center.mt-5
      .col-lg-10
        .row.justify-content-center
          .col-lg-8.bac3
            ul.lista-ul--color.mt-5.mb-5
              li 
                i.fab.fa-telegram
                p.mb-0 Nombre del equipo.
              li 
                i.fab.fa-telegram
                p.mb-0 Descripción detallada del equipo.
              li 
                i.fab.fa-telegram
                p.mb-0 Horas sugeridas de uso del equipo (si aplica).
              li 
                i.fab.fa-telegram
                p.mb-0 Foto del equipo.
              li 
                i.fab.fa-telegram
                p.mb-0 Fecha de compra.
              li 
                i.fab.fa-telegram
                p.mb-0 Fecha de uso con número de horas y actividad realizada.
              li 
                i.fab.fa-telegram
                p.mb-0 Fecha de devolución del equipo.
              li 
                i.fab.fa-telegram
                p.mb-0 Reporte de novedades, antes, durante y después del uso del equipo.

          .col-lg-4.col-8
            img(src='@/assets/curso/tema4/img7.png', alt='Texto que describa la imagen')
    p.mt-4 La siguiente figura nos presenta un ejemplo de formato de hoja de vida de equipo:
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 6
          span Ejemplo de formato de hoja de vida de equipo
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Nombre de equipo
                th Brújula
                th Foto

            tbody
              tr
                td Fecha de compra.
                td 20 mayo de 2022
                td 
              tr
                td Descripción.
                td Suspensión líquida en aceite.<br>Chasis en aluminio.<br>Lupa.<br>Color.
                <td><img src='@/assets/curso/tema4/brujula.svg' width='100px'></td> 

              tr
                td Fecha de uso.
                td Actividad Realizada – Horas de actividad.
                td Fecha devolución.
              tr
                td Reporte de novedades.
                td 
                td 
    .row
      .col-lg-5
        .row
          .col-lg-1
            img.fa(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-10.lineaz
            h4 El botiquín como equipo de seguridad
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mt-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/img8.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se clasifican como equipo de seguridad los implementos diseñados para procurar o proteger la integridad personal del usuario. Uno de los más utilizados en todo tipo de servicio es el botiquín, sin duda, la herramienta indispensable para el guía de turismo tanto en contextos culturales como de naturaleza.<br>Por ello, es un deber profesional de guía, entrenarse en primeros auxilios para poder realizar la correcta administración de este equipo y limitar sus alcances a la hora de prestar un primer auxilio.<br>Se debe tener en cuenta tanto las especificaciones en su uso, como el cuidado y mantenimiento para prolongar su utilidad, como se indica en la siguiente tabla.
    .titulo-sexto.color-acento-contenido.mt-5
      h5 Tabla 5.
      span Ejemplo de especificaciones técnicas para el botiquín
    .row.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-contenido.mb-5 
          table
            thead
              tr
                th Equipo de seguridad
                th Especificaciones y uso
                th Cuidado y mantenimiento

            tbody
              tr
                td.text-center Botiquín
                td Es un elemento destinado a contener medicamentos para curaciones y utensilios indispensables para brindar los primeros auxilios en caso de presentarse un accidente durante la actividad de la guianza. <br><br>Permite socorrer al turista y al guía de turismo en situaciones de riesgos en su salud, sea por enfermedad, caídas, roturas, mareos, náuseas, picaduras, malestares, accidentes, entre otros.
                td Mantener en un lugar seco y fresco, revisar fecha de vencimiento de medicamentos.
    .row.mt-4.justify-content-center
      .col-lg-8
        p El botiquín es un equipo que debe estar en las instalaciones de entidades públicas y privadas, esto incluye atractivos turísticos, museos, centros vacacionales entre otras. Existe una normativa por medio de la cual se adoptan directrices generales para la elaboración del plan de gestión del riesgo de desastres de las entidades públicas y privadas en el marco de la Ley 152 de 20123, artículo 42, y establece que “cada entidad debe contar con protocolos y procedimientos y un equipo de respuesta establecido en su plan de emergencia y contingencia”. 
        p Para ampliar la información, lo invitamos a leer los siguientes documentos, los cuales se encuentran en el material complementario:
        ul.lista-ul--color
          li 
            i.fab.fa-telegram
            | Dotación para botiquines y ambulancias 
          li 
            i.fab.fa-telegram
            | Fármacos y suplementos nutricionales para llevar en el botiquín del alpinista.
          li 
            i.fab.fa-telegram
            | Resolución 926 de 2017 - Sistema de Emergencias Médicas (SEM).
          li 
            i.fab.fa-telegram
            | Decreto 2157 de 2017.
      .col-lg-4.col-8
        img(src='@/assets/curso/tema4/img9.png', alt='Texto que describa la imagen')
    p.mt-4 Según los expertos en salud pública, los diferentes tipos de botiquines se puede encontrar de acuerdo con el lugar y uso de aplicación, cada uno de estos tiene su respectiva guía, como se indica a continuación:
    .tarjeta.tarjeta--azul.p-4.mb-5.baga
      SlyderA(tipo="b")
        .row.justify-content-center.mt-4.mb-5
          .col-md-4.mb-4.mb-md-0
            h4 Botiquín portátil básico
            p Usualmente es el que se encuentra en todos los espacios y puede ser utilizado por cualquier persona en primeros auxilios básicos. 
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema4/img10.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Botiquín portátil médico
            p Exclusivo de uso del experto médico. Con él se hace una atención prehospitalaria de inicio de la estabilización de lesionados críticos o lesionados no críticos.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema4/img11.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Botiquín de trauma
            p De uso en unidades de salvamento y rescate, en la atención de pacientes politraumatizados o aprisionados. Exclusivo para uso del personal de salvamento debidamente entrenado y certificado.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema4/img12.png', alt='Texto que describa la imagen')
        .row.justify-content-center
          .col-md-4.mb-4.mb-md-0
            h4 Botiquín médico de emergencias
            p Para uso en situaciones de emergencia, necesario en la atención médica prehospitalaria de un número mayor de lesionados y la implementación de módulos de estabilización y clasificación.
        
          .col-md-7
            figure
              img(src='@/assets/curso/tema4/img13.png', alt='Texto que describa la imagen')
    .row.mt-5.justify-content-center
      .col-lg-4.col-8
        img(src='@/assets/curso/tema4/img14.png', alt='Texto que describa la imagen')
      .col-lg-8
        p Tanto el guía, como el asignado por la administración, deben verificar la existencia del botiquín en los establecimientos a visitar, así mismo deben tomar medidas preventivas y correctivas del caso, entre ellas seleccionar el tipo de botiquín y el recurso humano que se requiera para la atención del usuario en caso de ser necesario. Para tomar esta decisión, el guía de turismo o la agencia contratante deben evaluar:
        ul.lista-ul--color
          li 
            i.fab.fa-telegram
            | Tipo de turismo a realizar.	

          li 
            i.fab.fa-telegram
            | Los peligros y riesgos de las actividades para desarrollar.

          li 
            i.fab.fa-telegram
            | Número de participantes y capacidad de carga del lugar a visitar.

          li 
            i.fab.fa-telegram
            | Ubicación de los recursos físicos y humanos.
          li 
            i.fab.fa-telegram
            | Tiempo de respuesta del Sistema de Emergencias Médicas (SEM).
    .row.mt-4
      .col-lg-7
        p Estos criterios de evaluación le permiten al guía, determinar el tipo botiquín y el nivel de capacitación en primeros auxilios de su equipo de trabajo para el servicio. Se recomienda, que el botiquín contenga únicamente aquellos materiales imprescindibles para realizar los primeros auxilios de forma urgente. 
        p No es aconsejable incluir medicamentos ni instrumentos complejos, que el guía de turismo no tiene conocimiento, ni la autorización para utilizar. En caso de que los pasajeros o la actividad exijan el uso de medicamentos especializados, el guía debe indicar la consideración de integrar un equipo profesional de salud para estos casos. Un botiquín adecuado no debe ser excesivamente grande y debe respetar unas normas generales para evitar que se deterioren los materiales y medicamentos que en él se incluyen. (González, Palacios, Barcala y  Oleagordia, 2008).
      .col-lg-5
        img(src='@/assets/curso/tema4/img15.png', alt='Texto que describa la imagen')
    p.mt-4 Algunos errores comunes frente al uso del botiquín son:
    TabsC.color-primario.mt-5
      .py-3.py-md-4(titulo="No es un dispensario de medicamentos")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-4 Considerar un dispensario de medicamentos. La automedicación es un ejercicio peligroso. 
              span.colt <strong>¡Un botiquín básico no debe contener medicamentos!</strong>
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/img16.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Entre más elementos se tengan, no es mejor")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0.mt-5
            p.mt-4 Pensar que cuantos más elementos contenga es mejor; quien porta el botiquín y utiliza su contenido es responsable legalmente de las consecuencias que genere el uso de su contenido.
          .col-md-5
            figure
              img(src='@/assets/curso/tema4/img17.png', alt='Texto que describa la imagen')
    p.mt-4 Algunos de los elementos que debe contener un botiquín, se indican en la siguiente figura:
    .titulo-sexto.color-acento-contenido
      h5 Figura 7
      span Elementos que debe contener un botiquín
    .row.bg6
      img(src='@/assets/curso/tema4/img18.png', alt='Texto que describa la imagen')
      p.mt-3 Un botiquín sin supervisión y mantenimiento que asegure la reposición de los componentes utilizados o vencidos, se puede considerar como elemento generador de falsa seguridad y fuente de peligro.
    .row.mt-4
      .col-lg-6
        img(src='@/assets/curso/tema4/img19.png', alt='Texto que describa la imagen')

      .col-lg-6
        .cajon.color-acento-contenido.p-4.mb-4
          p Debido a las diferentes reacciones no deseadas que puede generar el consumo no autorizado de medicamentos, el personal competente de la salud recomienda que un botiquín básico no contenga elementos de uso restringido, bien sea en su ingesta y/o aplicación. Solo en caso de que el responsable cuente con el entrenamiento para la aplicación de estos.      
        p Según González et al., (2008), existe un decálogo para la conservación y buen uso del botiquín, lo que prolonga el uso de sus componentes, y a la vez que permite un mayor cuidado en la aplicación de medicamentos y material de curación de acuerdo con las normas vigentes, y fechas de expiración de estas. El decálogo para el uso del botiquín indica que:
    .row.bg7
      .row.mt-5.justify-content-center
        .col-lg-10.mt-5
          PasosA.color-primario.mb-5.mt-5(tipo="n")
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Debe estar ordenado y con todos los materiales claramente identificados y etiquetados con su fecha de vencimiento.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema4/img20.svg', alt='Texto que describa la imagen')

            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema4/img21.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 El lugar de conservación debe ser apropiado, sin humedades o suciedad y sin demasiada luz o claridad.
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Se debe revisar el estado de los materiales antes de cada salida para detectar elementos en mal estado, caducados y reponer los que se están agotando.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema4/img22.svg', alt='Texto que describa la imagen')
            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema4/img23.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 No se deben guardar medicamentos para enfermedades de los turistas (asma, diabetes, epilepsia, etc.), cada uno de ellos y sus familiares son los responsables de su utilización y transporte.
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Procurar no mezclar o transportar en él otros artículos de higiene.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema4/img24.svg', alt='Texto que describa la imagen')
            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema4/img25.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 Es aconsejable que se incluya en el botiquín una lista de los teléfonos de urgencia de la zona (bomberos, policía, ambulancia, centros médicos más próximos, entre otros).
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Incluir un recordatorio de los protocolos de actuación ante accidentes frecuentes y graves, principalmente el de soporte vital básico (manténgalos actualizados).
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema4/img26.svg', alt='Texto que describa la imagen')                              
            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema4/img27.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 No debe tener cerraduras complicadas para evitar la dificultad de abrirlo cuando el tiempo apremia.
            .row.mt-4.mb-4
              .col-md-8.mb-4.mb-md-0
                p.mt-5 Es obligatorio mantener el botiquín fuera del alcance de los niños.
              .col-md-2
                figure
                  img.tamaq(src='@/assets/curso/tema4/img28.svg', alt='Texto que describa la imagen')                              
            .row.mt-4.mb-4
              .col-md-2.mb-4.mb-md-0
                figure
                  img.tamaq(src='@/assets/curso/tema4/img29.svg', alt='Texto que describa la imagen')
              .col-md-8
                p.mt-4 Durante el servicio se debe limitar el acceso al botiquín solo a las personas con el entrenamiento para administrarlo.  
                                            
        .row.mb-5
        .row.mb-5  
        .row.mb-5

</template>

<script>
export default {
  name: 'Tema4',
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
  background-color: #FFECCD
.tarjeta.color-acento-botones
  background-color: #FFE4B9
.tarjeta.color-acento-botones *
  color: #12263F
.tabs-c.color-primario .tabs-c__tab--active:before
  border-top-color: #EB6F2D
.tabs-c.color-primario .tabs-c__tab--active
  border-bottom-color: #EB6F2D!important
.cajon.color-acento-contenido
  background-color: #FFD667
.cajon.color-acento-contenido:before
  background-color: #DAAF40
.pasos-a.color-primario .pasos-a__circle
  background-color: #EB6F2D
.pasos-a.color-primario .pasos-a__circle div
  color: white
</style>
