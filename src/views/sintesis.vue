<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p La coordinación de actividades que debe efectuar el guía turístico, se relacionan con procesos de gestión y administración, para asegurar un éxito en las mismas se debe hacer uso de algunas herramientas que están a disposición, como el diagrama de Gantt y el plan de acción. 

    p.mb-5 Así mismo, es necesario tener en cuenta los recursos físicos y financieros dispuestos para realizar dicha coordinación, a continuación, se presenta un mapa conceptual que resume el proceso:


    .row.justify-content-center
      .col-lg-7.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
