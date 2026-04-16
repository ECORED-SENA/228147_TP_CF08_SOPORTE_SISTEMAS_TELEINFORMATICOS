<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Centro de datos, disponibilidad y procedimiento técnico
    p.mb-5 El centro de datos constituye el núcleo operativo de la infraestructura tecnológica de una organización. En este entorno se alojan los servidores, los sistemas de almacenamiento, los dispositivos de seguridad y las plataformas de virtualización que permiten la operación de los servicios digitales. La comprobación de la conectividad no se limita a la validación de enlaces o direcciones IP; también implica verificar la disponibilidad y el funcionamiento adecuado de los servicios que dependen del centro de datos.
    .bg-1
      .px-5
        #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.1 Concepto y características del centro de datos
        p.mb-5 Un centro de datos corresponde a una instalación física o virtual diseñada para alojar equipos tecnológicos encargados de procesar, almacenar y distribuir información dentro de una red. A continuación, se presentan sus componentes principales.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Servidores físicos o virtuales]. Ejecutan aplicaciones y gestionan servicios de red.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Equipos de red como #[i switches] y #[i routers]]. Permiten la interconexión y el direccionamiento del tráfico.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Sistemas de almacenamiento como #[i Network Attached Storage (NAS)] o #[i Storage Area Network (SAN)]]. Facilitan el resguardo y la disponibilidad de la información.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dispositivos de seguridad como #[i firewalls]]. Protegen la infraestructura frente a accesos no autorizados.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Sistemas de respaldo eléctrico como #[i Uninterruptible Power Supply (UPS)]].  Garantizan continuidad ante fallas de energía.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Sistemas de climatización]. Mantienen condiciones ambientales adecuadas para los equipos.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema6/img1.png', alt='').m-auto
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Características técnicas para la continuidad del servicio
        p.mb-5 Un centro de datos debe cumplir con condiciones técnicas que permitan garantizar la disponibilidad de los servicios y la estabilidad operativa de la infraestructura.
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema6/img2.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/img3.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Alta disponibilidad
            p.mb-0.text-center Permite mantener los servicios activos de manera continua.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/img4.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Redundancia de energía
            p.mb-0.text-center Reduce riesgos asociados a fallas eléctricas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Control ambiental
            p.mb-0.text-center Evita sobrecalentamiento y daños en los equipos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/img6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Seguridad física
            p.mb-0.text-center Protege la infraestructura frente a accesos no autorizados.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Segmentación de red
            p.mb-0.text-center Mejora la administración y seguridad del tráfico.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema6/img8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Monitoreo continuo
            p.mb-0.text-center Facilita la detección temprana de fallas.
    p.mb-0.text-center La ausencia o deficiencia de estos elementos puede afectar directamente la disponibilidad de los servicios y la operación general de la red.
    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.2 Disponibilidad del servicio y clasificación Tier
    p.mb-5 La disponibilidad corresponde al porcentaje de tiempo en el cual un servicio o infraestructura permanece operativa y accesible para los usuarios. Este indicador permite evaluar el nivel de continuidad del servicio y la confiabilidad del centro de datos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema6
          p La disponibilidad se calcula mediante la siguiente expresión:
          p #[b Disponibilidad (%) = (Tiempo operativo / Tiempo total) × 100]
          p.mb-0 Por ejemplo, si un servicio permanece activo durante 720 horas en un mes de 730 horas, el cálculo corresponde a una disponibilidad aproximada del 98.63 %.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img9.png', alt='').m-auto
    p.mb-5 En entornos empresariales se establecen niveles de disponibilidad que determinan el grado de criticidad de la infraestructura. A continuación, se presentan los valores de referencia más utilizados.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema6/img10.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center 99 %
            p.mb-0.text-center Nivel aceptable para servicios no críticos.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema6/img11.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center 99.9 %
            p.mb-0.text-center Alta disponibilidad en servicios organizacionales.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema6/img12.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center 99.99 %
            p.mb-0.text-center Disponibilidad requerida en entornos críticos.
    .bg-1
      .px-5
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Clasificación de centros de datos según nivel Tier
        p.mb-5 La clasificación Tier establece niveles de confiabilidad y redundancia en centros de datos, lo cual permite garantizar diferentes grados de continuidad operativa.
        .row.justify-content-center.mb-5
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 8.
              span Clasificación de centros de datos según nivel Tier
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Nivel Tier
                    th.ajuste-border-tabla.texto-left Disponibilidad estimada
                    th.texto-left Característica técnica
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Tier I
                    td.ajuste-border-tabla.texto-left 99.67 %
                    td.texto-left Infraestructura básica sin redundancia.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Tier II
                    td.ajuste-border-tabla.texto-left 99.75 %
                    td.texto-left Redundancia parcial en componentes críticos.
                  tr
                    td.ajuste-border-tabla.texto-left Tier III
                    td.ajuste-border-tabla.texto-left 99.98 %
                    td.texto-left Permite mantenimiento sin interrupción del servicio.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Tier IV
                    td.ajuste-border-tabla.texto-left 99.995 %
                    td.texto-left Infraestructura tolerante a fallas.
        p.mb-0 Esta clasificación facilita la planificación de la infraestructura tecnológica y permite establecer estrategias orientadas a mejorar la disponibilidad y la continuidad de los servicios de red.
        Separador
        #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.3 Redundancia y monitoreo de la infraestructura
    p.mb-5 La redundancia consiste en la duplicación de componentes críticos con el fin de evitar interrupciones del servicio y garantizar la continuidad operativa de la infraestructura tecnológica. Este principio permite mantener la conectividad aun cuando se presenten fallas en enlaces o dispositivos principales. A continuación, se presentan los tipos de redundancia más comunes.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Redundancia de enlaces]. Permite mantener comunicación mediante rutas alternas.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Redundancia de #[i switches]]. Garantiza continuidad en la conmutación del tráfico.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Redundancia de fuentes de poder]. Reduce riesgos asociados a fallas eléctricas.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Redundancia de servidores]. Permite mantener servicios activos ante fallas de equipos.
        .caja-tema1-1(data-aos="flip-up")
          p.mb-0 Durante la comprobación técnica es necesario validar el funcionamiento de enlaces secundarios y equipos de respaldo para asegurar la disponibilidad del servicio.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema6/img14.png', alt='').m-auto
    p.mb-5 A continuación, se presentan los principales aspectos relacionados con los servicios críticos del centro de datos y su incidencia en la conectividad de la red.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema6/img15.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Servicios críticos en el centro de datos").ajuste-cajaAcordion
            p.mb-3 La comprobación de conectividad debe incluir la verificación de servicios esenciales como el servidor #[i Dynamic Host Configuration Protocol (DHCP)], encargado de asignar direcciones IP automáticamente; el servidor #[i Domain Name System (DNS)], que permite la resolución de nombres; el servidor de archivos, que facilita el acceso a recursos compartidos; el servidor web, que posibilita la publicación de aplicaciones y servicios en línea; el servidor de autenticación, responsable del control de acceso de los usuarios; y los servicios de virtualización, que permiten ejecutar múltiples entornos en un mismo equipo. Una falla en cualquiera de estos servicios puede interpretarse como un problema general de conectividad.
          .row(titulo="Monitoreo y control de la infraestructura").ajuste-cajaAcordion
            p.mb-3 El monitoreo continuo permite detectar fallas antes de que afecten la operación de la red. Entre los parámetros que deben supervisarse se encuentran el uso de CPU para determinar el nivel de procesamiento de los equipos, el uso de memoria para evaluar la carga de trabajo, el ancho de banda para analizar posibles congestiones, la latencia para identificar variaciones en el desempeño, el estado de las interfaces para confirmar la disponibilidad de los enlaces y el estado de enlaces redundantes para validar la continuidad del servicio. Este monitoreo puede realizarse mediante sistemas basados en #[i Simple Network Management Protocol (SNMP)], plataformas de monitoreo centralizado y herramientas de análisis de tráfico.
          .row(titulo="Relación entre centro de datos y conectividad").ajuste-cajaAcordion
            p.mb-3 Los problemas de conectividad pueden originarse en distintos componentes del centro de datos. Entre las causas más comunes se encuentran la caída de servidores que genera interrupción de servicios, fallas en plataformas de virtualización que provocan inaccesibilidad a sistemas alojados, saturación de enlaces que reduce el rendimiento, errores en la configuración de firewalls que bloquean el tráfico y configuraciones incorrectas de #[i Virtual Local Area Network (VLAN)] que pueden aislar segmentos de red. Por esta razón, la validación técnica debe abarcar desde el dispositivo final hasta los servicios alojados en el centro de datos.
    Separador
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.4 Procedimiento técnico de comprobación de conectividad
    p.mb-5 A continuación, se presenta un pódcast sobre el procedimiento técnico de comprobación de conectividad y su impacto en la calidad del servicio en centros de datos.
    .row.align-items-center.m-0.mb-0
      .col-xl
        .row.align-items-center.justify-content-center.caja-tema6-1(data-aos="zoom-in")
          .col-auto.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src="@/assets/curso/tema6/img16.svg" style="max-width: 220px").m-auto
          .col
            h4.mb-4 Pódcast
            TarjetaAudio.color-acento-contenido.mb-3(
              texto="Procedimiento técnico de comprobación de conectividad y su impacto en la calidad del servicio"
              :audio="require('@/assets/componentes/audios/audio-ej.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
      .col-xl-auto.d-none.d-xl-block
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema6/img17.png" ).m-auto
    Separador
    #t_6_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 6.5 Secuencia operativa para la comprobación de conectividad
    p.mb-5 La comprobación de conectividad en infraestructuras tecnológicas debe ejecutarse mediante un procedimiento técnico estructurado que permita identificar la causa raíz de las fallas y garantizar la continuidad del servicio. A continuación, se presenta la secuencia recomendada para la intervención.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Recepción y análisis de la orden de trabajo
                p.mb-0 Revisar el alcance del requerimiento, identificar el área afectada, verificar antecedentes de fallas, confirmar tiempos de atención y aplicar normas de Seguridad y Salud en el Trabajo. La orden debe incluir tipo de falla reportada, ubicación, servicios afectados y nivel de prioridad.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img18.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Inspección física inicial
                p.mb-0 Verificar estado del cableado estructurado, conectores y patch cords, funcionamiento de #[i switches] y routers, indicadores LED de enlace y alimentación eléctrica. Posibles hallazgos incluyen cable desconectado, puerto dañado, fallo en fuente de poder o equipo apagado.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img19.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Validación de direccionamiento IP
                p.mb-0 Confirmar dirección IP, máscara de subred, puerta de enlace, servidor #[i Domain Name System (DNS)] y tipo de asignación mediante #[i Dynamic Host Configuration Protocol (DHCP)] o configuración estática. Utilizar comandos como #[i ipconfig /all, ifconfig o ip addr] y verificar coherencia con el diseño de red.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img20.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Pruebas de conectividad básica
                p.mb-0 Ejecutar pruebas de ping a la propia dirección IP, #[i al gateway], a un servidor interno y a una dirección pública. Posteriormente, validar resolución de nombres mediante #[i nslookup]. Esta secuencia permite determinar el punto donde se interrumpe la comunicación.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img21.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Análisis de rutas y tráfico
                p.mb-0 Aplicar herramientas como traceroute, revisar tabla de rutas, analizar posibles bloqueos en #[i firewall], validar configuración de #[i Network Address Translation (NAT)] y comprobar segmentación mediante #[i Virtual Local Area Network (VLAN)].
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img22.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Verificación de servicios de infraestructura
                p.mb-0 Confirmar operación de servicios críticos como DHCP, DNS, servidor de autenticación y estado de proxy o #[i firewall]. Una falla en estos servicios puede impedir el acceso aun cuando exista conectividad IP.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img23.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Evaluación de desempeño y disponibilidad
                p.mb-0 Medir parámetros como latencia, pérdida de paquetes, ancho de banda disponible y nivel de utilización de interfaces. Valores de referencia: latencia en redes LAN menor a 5 ms, pérdida inferior al 1 %, relación señal-ruido adecuada en redes inalámbricas e intensidad de señal (#[i Received Signal Strength Indicator – RSSI]) igual o superior a −65 dBm.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema6/img24.png', alt='' style="max-width: 500px").m-auto
    p.mb-0 La aplicación ordenada de estas etapas permite realizar un diagnóstico preciso, documentar los hallazgos técnicos y garantizar el cumplimiento de los procedimientos establecidos en la gestión de redes.
    .bg-1
      .px-5
        Separador
        #t_6_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 6.6 Documentación técnica y cierre de la orden de trabajo
        p.mb-5 Toda intervención técnica debe registrarse de manera sistemática con el fin de garantizar la trazabilidad del proceso, el cumplimiento de la normativa y la adecuada gestión del mantenimiento de la red. A continuación, se presentan los aspectos relacionados con la documentación técnica, el cumplimiento de normas de seguridad y el cierre del procedimiento de atención de fallas en la conectividad.
        TabsC.color-acento-contenido(data-aos="zoom-in")
          .py-3.py-md-4(titulo="Documentación del procedimiento técnico")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema6/img25.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Documentación del procedimiento técnico
                p.mb-0 El registro adecuado de la intervención permite el control del proceso y facilita auditorías posteriores. Debe incluir la fecha y hora de la intervención para contextualizar el evento, el equipo intervenido para identificar el dispositivo diagnosticado, el síntoma reportado para describir la condición inicial, las pruebas realizadas para evidenciar el procedimiento aplicado, los resultados obtenidos para sustentar el análisis, el diagnóstico final para establecer la causa raíz, la acción correctiva implementada para documentar la solución y las recomendaciones preventivas orientadas a reducir la probabilidad de fallas futuras.
          .py-3.py-md-4(titulo="Cumplimiento de normativa y Seguridad y Salud en el Trabajo")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema6/img26.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Cumplimiento de normativa y Seguridad y Salud en el Trabajo
                p.mb-0 Durante la intervención técnica es obligatorio aplicar medidas de seguridad que protejan al personal y a la infraestructura tecnológica. Entre estas se encuentran el cumplimiento de normas de seguridad eléctrica para prevenir accidentes, el uso de elementos de protección personal para reducir riesgos laborales, la adecuada gestión de residuos tecnológicos conforme a disposiciones ambientales y organizacionales, y la aplicación de procedimientos establecidos que garanticen la calidad y estandarización del servicio. El incumplimiento puede generar riesgos laborales, daños a la infraestructura o sanciones administrativas.
          .py-3.py-md-4(titulo="Cierre técnico del procedimiento")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema6/img27.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Cierre técnico del procedimiento
                p.mb-0 Una vez solucionada la falla, el técnico debe realizar actividades finales orientadas a garantizar la estabilidad del servicio. Estas incluyen confirmar la restauración de la conectividad, verificar la estabilidad operativa del sistema, informar al usuario o al área responsable sobre la solución implementada, cerrar formalmente la orden de trabajo y actualizar el inventario tecnológico cuando sea necesario. Este proceso asegura que el servicio quede restablecido conforme a los parámetros técnicos definidos.
          .py-3.py-md-4(titulo="Matriz básica de diagnóstico de fallas")
            .row.justify-content-center.align-items-center
              .col-xl-5.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/tema6/img28.png', alt="" ).m-auto
              .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
                h4.txt--purpura.mb-4 Matriz básica de diagnóstico de fallas
                p.mb-0 Las matrices de diagnóstico permiten identificar de forma rápida posibles causas de problemas de conectividad. Por ejemplo, la ausencia de acceso a la red puede asociarse a fallas en la capa física como cableado dañado o desconectado; la falta de navegación en Internet puede relacionarse con errores de direccionamiento en la capa de red; y la inaccesibilidad a aplicaciones web puede indicar fallas en la capa de aplicación, como indisponibilidad del servicio #[i Domain Name System (DNS)]. El uso de estas matrices contribuye a optimizar el análisis técnico y reducir los tiempos de respuesta en la solución de incidentes.
</template>

<script>
export default {
  name: 'Tema6',
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
