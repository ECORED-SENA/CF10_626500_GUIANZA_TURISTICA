<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white 5
      h1 Recursos financieros en el guion
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las tareas administrativas del guía de turismo incluyen la participación en procesos derivados de las relaciones económicas con los clientes, puntualmente en la tesorería. Al recibir el pago directo de los turistas o los encomendados por el contratante, la administración asume el manejo de los recursos financieros para hacer pago a proveedores o servicios que se incluyan en la guianza, tales como entradas a los sitios que así lo requieran (ejemplo museos), degustaciones gastronómicas, recordatorios o simplemente para atender imprevistos.
    p.mt-3 Los recursos financieros para la operación del servicio son:  
    .row
      .col-lg-2
        .row
          .col-lg-3
            img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h4.mt-1 <i>Voucher</i>
    p Para ejecutar el servicio el guía recibirá las especificaciones de este, es un documento denominado váucher, este vocablo no tiene traducción textual, pero se puede interpretar como “una orden de servicios”. Este documento es necesario para identificar el usuario que se está esperando y verificar los servicios previstos y reservados, con los que el usuario cree tener, o haber contratado (Barrios, 2016).
    .row.justify-content-center.mt-3 
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 8
          span Ejemplo formato <i>voucher</i>
        img(src='@/assets/curso/tema5/img2.svg', alt='Texto que describa la imagen')
    p.mt-3 Antes de empezar la operación del servicio guiado, se debe informar al contratante o a los proveedores las siguientes anomalías: 
    .row
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img3.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h5 Llegada de menos pasajeros que los previstos.
              p Para cancelar inmediatamente los servicios y no seguir incurriendo en más gastos. En caso contrario, más pasajeros que los previstos, para determinar la disponibilidad y quién se hará cargo del pago de estos servicios que no estaban reservados.
      .col-lg-6
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img4.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul
            .p-4
              h5 Diferencias respecto a los servicios previstos.
              p Por ejemplo otro hotel, otras fechas, etc. Es ideal aclarar la situación con tranquilidad para evitar preocupaciones innecesarias al usuario y facilitarle opciones según sea el caso. (Barrios, 2016).
    p Además del <i>voucher</i> u orden de servicio, debe identificar qué actividades requieren recursos económicos para su desarrollo y solicitar con anticipación: el efectivo o documentos comerciales tales como cheques, transferencias bancarias que son los comprobantes de actos mercantiles.
    .row.mt-5
      .col-lg-2
        .row
          .col-lg-3
            img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h4.mt-1 Cheque   
    .row
      .col-lg-7
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p Es una orden que el titular de una cuenta dirige a su banquero para que este pague una determinada cantidad a un tercero. Cada cheque es único, tiene una serie, tipo y número. Este documento está amparado por la ley en Colombia como se expresa en el Código de Comercio
          h4 (Chavarro, 2018).     
        p Como lo describe Fernández (2016), se debe cumplir con los siguientes requisitos: la palabra “cheque” debe constar en el texto del título, asimismo, debe contener el mandato: “páguese a…”, adicionalmente el nombre de la entidad bancaria que debe pagar, y por último y no menos importante, la firma del que expide el cheque. Según a nombre de quien se expida, los cheques se clasifican en dos:
        ul.lista-ul--color
          li 
            i.fas.fa-brain
            p.mb-0 Al portador, puede ser cobrado por cualquier persona que lo tenga. 
          li 
            i.fas.fa-brain
            p.mb-0 Nominativo, en este se identifica a la persona (física o jurídica) que puede cobrar el cheque. 
      .col-lg-5
        img(src='@/assets/curso/tema5/img5.png', alt='Texto que describa la imagen')    
    p.mt-3 Al momento de cobrarlo, si está cruzado, es decir, si tiene dos líneas paralelas trazadas en el anverso, no podrá cobrarlo en efectivo, sino que deberá consignarlo en una cuenta bancaria. El uso del cheque en la actualidad se ha visto reducido, ya que ha sido reemplazado por las transacciones en línea. Un ejemplo de cheque se aprecia en la siguiente imagen.
    .row.justify-content-center
      .col-lg-10
        img(src='@/assets/curso/tema5/img6.png', alt='Texto que describa la imagen')    
    .row.mt-5
      .col-lg-2
        .row
          .col-lg-3
            img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h4.mt-1 Transferencia
    .row.mt-4
      .col-lg-5
        img(src='@/assets/curso/tema5/img7.png', alt='Texto que describa la imagen')

      .col-lg-7             
        .bloque-texto-c.color-secundario.p-4
          i.fas.fa-quote-right
          p Es una orden que la agencia emite a la entidad financiera en la que tiene una cuenta para que proceda al pago de una cantidad determinada a una persona física o jurídica, por ejemplo, al guía de turismo puede transferir el dinero requerido para el servicio y el pago de la guianza. Al recibir el comprobante verifique que corresponda con su número de cuenta, y el monto presupuestado para el servicio o el costo del servicio guiada según sea el caso.
          h4.mb-0 (Fernández, 2016).      
    .row.mt-5
      .col-lg-2
        .row
          .col-lg-3
            img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h4.mt-1 Tarjeta
    .row.mt-4
      .col-lg-7
        .bloque-texto-d.color-secundario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p También es común la entrega de una tarjeta débito o crédito al guía de turismo para que realice los pagos a proveedores durante el servicio o cubre algunos gastos de los usuarios (cuando están incluidos dentro del servicio). Con la tarjeta débito, funciona para usar el dinero ingresado en una cuenta corriente o de ahorro en la que está asociada. Mientras con la tarjeta de crédito, se pueden realizar pagos hasta cierto límite sin necesariamente contar con dinero en la cuenta bancaria. Posteriormente, se debe reintegrar el dinero en los plazos estipulados.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h4.mb-0 (Fernández, 2016). 
        p Para el recaudo de pagos por parte de los turistas, se debe informar a los usuarios de los protocolos establecidos. En caso de que sea contratado por una agencia de viajes, hay que estudiar previamente los procedimientos de recepción de pagos antes del servicio. Y dentro de las generalidades, verificar siempre las condiciones que se explican a continuación:   
      .col-lg-5    
        img(src='@/assets/curso/tema5/img8.svg', alt='Texto que describa la imagen')
    .tarjeta.tarjeta--azul.p-4.mb-5.baga
      SlyderA(tipo="b")
        .row.justify-content-center.mt-4.mb-5
          .col-md-4.mb-4.mb-md-0
            h4 EFECTIVO
            p.mb-0 Los billetes deben ser:
            ul.lista-ul--color.mb-5
              li 
                i.fas.fa-brain
                p.mb-0 Sensibles al tacto al verificar impresiones por anverso y reverso.
              li 
                i.fas.fa-brain
                p.mb-0 La definición de hilos de seguridad y el número de estos pueden contarse.
              li 
                i.fas.fa-brain
                p.mb-0 Los contornos de imágenes y márgenes de agua se ven definidos y son claros.
              li 
                i.fas.fa-brain
                p.mb-0 Los elementos a contraluz se ven cuando se gira el billete. Son efectos de colores, así como las iniciales del Banco de la República de Colombia.
              li 
                i.fas.fa-brain
                p.mb-0 Usar luz ultravioleta para ver otros detalles.
          .col-md-7
            figure
              img(src='@/assets/curso/tema5/img9.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4.mb-5
          .col-md-5.mb-4.mb-md-0
            h4 TARJETA DE CRÉDITO
            ul.lista-ul--color.mb-5
              li 
                i.fas.fa-brain
                p.mb-0 Existe una gran variedad de franquicias: Visa, MasterCard, American Express, también varias categorías de tarjetas, como “oro”, “platino” o “clásica”.

              li 
                i.fas.fa-brain
                p.mb-0 Se identifica, previamente, cual está habilitada para ser recibida y se informa al usuario.
              li 
                i.fas.fa-brain
                p.mb-0 Se verifica documento de identidad.
              li 
                i.fas.fa-brain
                p.mb-0 Datos de vigencia y el nombre impreso en el plástico debe coincidir con el documento de identidad del usuario (en caso de tarjeta de crédito).
              li 
                i.fas.fa-brain
                p.mb-0 Registrar la tarjeta para operación mediante el datáfono: se introducen los datos correspondientes a la tarjeta y/o usuario en el datáfono para efectuar la operación.
              li 
                i.fas.fa-brain
                p.mb-0 Imprimir o enviar <i>voucher</i>, que firmará (en digital o en físico) el usuario como constancia de la operación y a su vez recibirá una copia. La firma ya no es necesaria en este tipo de transacciones.

          .col-md-6
            figure
              img(src='@/assets/curso/tema5/img10.png', alt='Texto que describa la imagen')
        .row.justify-content-center.mt-4.mb-5
          .col-md-4.mb-4.mb-md-0
            h4 CHEQUES
            ul.lista-ul--color.mb-5
              li 
                i.fas.fa-brain
                p.mb-0 Verificar números claros y señales de seguridad.
              li 
                i.fas.fa-brain
                p.mb-0 El valor en letras números debe coincidir con el valor en números.
              li 
                i.fas.fa-brain
                p.mb-0 La firma del cheque debe estar en el lugar correspondiente y sin enmendaduras.
              li 
                i.fas.fa-brain
                p.mb-0 El nombre del beneficiario del cheque girado debe corresponder al nombre o razón social del proveedor del servicio.
              li 
                i.fas.fa-brain
                p.mb-0 En la parte posterior del cheque deben estar claros los datos del girador.

          .col-md-7
            figure
              img(src='@/assets/curso/tema5/img11.png', alt='Texto que describa la imagen')    
    .bloque-texto-c.color-secundario.p-4
      i.fas.fa-quote-right
      .row.justify-content-center
        .col-lg-9
          p Aunque la banca virtual ha facilitado las transacciones, en el caso de los cheques, hay una categoría especial, el cheque de viajero, son documentos de crédito en los que los turistas o viajeros compran talonarios a un banco en su país para poder comprar bienes o servicios o cambiarlos en un banco en el extranjero. El librador o banco que provee los cheques brindará al usuario los datos de las sucursales o corresponsales para ser cobrado en el país o en el extranjero. “El beneficiario de un cheque de viajero deberá firmarlo al recibirlo y nuevamente al negociarlo. El que pague o reciba el cheque, deberá verificar la autenticidad de la firma del tenedor, cotejando con la firma puesta ante el banco que lo expidió” 
          h4.mb-0 (Chavarro, 2018).    
        .col-lg-2
          img.tamimg(src='@/assets/curso/tema5/img12.svg', alt='Texto que describa la imagen')    
    .row.mt-4
      .col-lg-2
        .row
          .col-lg-3
            img(src='@/assets/curso/tema3/img2.svg', alt='Texto que describa la imagen')
          .col-lg-9
            h4.mt-1 El recibo
    .row.mt-4
      .col-lg-5
        img(src='@/assets/curso/tema5/img13.png', alt='Texto que describa la imagen')

      .col-lg-7
        .bloque-texto-d.color-primario.p-4
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left.cal
            p Con este documento se certifica haber recibido una cantidad de dinero determinada persona. Habitualmente los recibos suelen ser numerados para facilitar su seguimiento. Contiene la siguiente información: número de recibo, nombre del cliente, fecha, valor del pago (en letra y número), concepto. Se sugiere generar una copia para el cliente y archivar el original 
            i.fas.fa-quote-right.cal
          .bloque-texto-d__autor 
            .h4.mb-0 (Fernández, 2016). 
        p Igualmente, en este caso, la digitalización y el uso de tecnologías han transformado el uso de formatos tipo papel y aunque este todavía se usa, por sistema de gestión de calidad, el manejo del papel no desaparece, un ejemplo de recibo se aprecia en la siguiente figura:
    .row.justify-content-center.mt-4
      .col-lg-4
        .titulo-sexto.color-acento-contenido
          h5 Figura 10
          span Ejemplo de recibo de pago    
        img(src='@/assets/curso/tema5/img14.svg', alt='Texto que describa la imagen')

</template>

<script>
export default {
  name: 'Tema5',
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
.tarjeta--azul
  background-color: #E4EAE3
.bloque-texto-c.color-secundario
  background-color: #FFECCD
.bloque-texto-c i
  font-size: 1.5em
.bloque-texto-d.color-secundario:before
  background-color: #FFECCD
.bloque-texto-d__autor, .bloque-texto-e__autor
  text-align: left
.bloque-texto-d
  border-top: 0px
.bloque-texto-d i
  font-size: 1.5em
.bloque-texto-d.color-primario:before
  background-color: #BCCAB8
</style>
