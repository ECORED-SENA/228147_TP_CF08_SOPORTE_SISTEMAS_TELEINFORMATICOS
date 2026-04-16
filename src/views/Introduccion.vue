<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p.mb-5 La comprobación de conectividad constituye un proceso fundamental dentro de la gestión técnica de redes, ya que permite determinar si los dispositivos, servicios y medios de transmisión intercambian información de forma estable, continua y conforme a los parámetros definidos. Este proceso no se limita a confirmar la existencia de comunicación entre equipos, sino que implica analizar variables como disponibilidad, capacidad, latencia, pérdida de paquetes, direccionamiento IP y funcionamiento de los servicios de infraestructura. Desde esta perspectiva, la validación técnica se convierte en una actividad clave para garantizar la operación adecuada de redes LAN, WAN y sistemas soportados sobre arquitectura IP.
    .caja-intro(data-aos="zoom-in").mb-5
      .row.align-items-center
        .col-xl.order-2.order-lg-1
          p.mb-0 De igual manera, la interpretación de planos de red, topologías, medios de transmisión y protocolos de comunicación aporta una base técnica indispensable para desarrollar diagnósticos ordenados y precisos. Comprender la estructura física y lógica de la red facilita la identificación de puntos críticos, rutas de comunicación, segmentos vulnerables y posibles causas de falla. A ello se suma el uso de herramientas de validación como #[i ping, traceroute, ipconfig, nslookup] y plataformas de monitoreo, las cuales permiten documentar hallazgos, sustentar decisiones técnicas y dar cumplimiento a la orden de trabajo bajo criterios normativos y de seguridad.
        .col-xl-auto.order-1.order-lg-2
          figure
            img(src='@/assets/curso/intro/img1.png', alt='').m-auto
    .caja-intro-1(data-aos="zoom-in")
      p.mb-0 En este contexto, la comprobación de conectividad también adquiere especial relevancia en la integración de sistemas de seguridad electrónica, como CCTV, control de acceso, alarmas y sensores de intrusión, cuya operación depende directamente de una infraestructura de red confiable. La correcta configuración de cámaras IP, grabadores, VLAN, acceso remoto, almacenamiento y servicios asociados permite asegurar continuidad en el monitoreo y respuesta oportuna ante eventos. Por ello, el estudio de estos fundamentos proporciona los elementos conceptuales y procedimentales necesarios para desarrollar procesos de instalación, validación y puesta en funcionamiento con rigor técnico, trazabilidad y coherencia con los requerimientos del entorno organizacional.
</template>

<script>
export default {
  name: 'Introduccion',
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
