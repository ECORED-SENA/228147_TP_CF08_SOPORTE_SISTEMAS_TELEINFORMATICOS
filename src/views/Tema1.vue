<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Fundamentos de la comprobación de conectividad
    p.mb-5 Este apartado aborda los principios técnicos que permiten comprender cómo se garantiza el intercambio eficiente de información en una red de datos. La comprobación de conectividad implica analizar no solo la existencia de comunicación entre dispositivos, sino también las condiciones de rendimiento, estabilidad y disponibilidad que aseguran el funcionamiento adecuado de los servicios de red, en coherencia con los lineamientos de calidad textual y estructural establecidos en la guía institucional.
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Concepto de conectividad en redes
    p.mb-5 La conectividad en redes de datos se define como la capacidad de los dispositivos para intercambiar información de manera efectiva mediante un medio de transmisión y bajo protocolos de comunicación previamente establecidos. Este proceso puede desarrollarse a través de medios físicos como el cableado estructurado o la fibra óptica, así como mediante enlaces inalámbricos.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La comprobación de conectividad trasciende la verificación de comunicación básica entre dos equipos. Desde una perspectiva técnica, implica evaluar si la comunicación cumple con parámetros asociados al #[b rendimiento, la disponibilidad y la estabilidad], teniendo en cuenta factores como la latencia, la pérdida de paquetes y la capacidad de transmisión.
    p.mb-5 En este contexto, la conectividad se analiza en diferentes capas del modelo OSI. En la capa física se valida el estado de los medios de transmisión; en la capa de red se comprueba el direccionamiento IP; y en capas superiores se examina el funcionamiento de los servicios y las aplicaciones. A continuación, se sintetizan los niveles de evaluación técnica de la conectividad: 
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Capa física
          p.mb-0.text-center Estado de cables, conectores y medios de transmisión.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Capa de red
          p.mb-0.text-center Configuración y validez del direccionamiento IP.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Capas superiores
          p.mb-0.text-center Operación correcta de servicios y aplicaciones.
    .row.justify-content-center.text-center
      .col-xl-9
          p.mb-0 Esta organización permite comprender que la conectividad constituye un proceso integral que involucra componentes físicos, lógicos y funcionales.
    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Disponibilidad y capacidad
    p.mb-5 La disponibilidad representa el tiempo durante el cual la red permanece operativa y accesible para los usuarios. Este indicador resulta crítico en entornos organizacionales, ya que la continuidad del servicio influye directamente en la productividad y en la ejecución de procesos.
    .caja-tema1-1.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
          p.mb-0 Por su parte, la capacidad se relaciona con el volumen máximo de datos que la red puede transmitir en un periodo determinado. Durante la comprobación técnica se evalúan diversos factores que influyen en el desempeño general de la infraestructura. Los principales elementos asociados a la capacidad de la red se presentan a continuación:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img3.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Ancho de banda disponible
            p.mb-0.text-center Cantidad de datos que pueden transmitirse simultáneamente.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-right")
                img(src='@/assets/curso/tema1/img4.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Congestión de red
            p.mb-0.text-center Saturación del tráfico que afecta la eficiencia de la comunicación.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img5.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Rendimiento de interfaces
            p.mb-0.text-center Capacidad operativa de los puertos y dispositivos de conexión.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1-2.h-100
          .row.justify-content-center.mb-3
            .col-7
              figure.mb-4(data-aos="fade-left")
                img(src='@/assets/curso/tema1/img6.svg', alt="" style="max-width: 90px").m-auto
            h4.text-center Uso de recursos del sistema
            p.mb-0.text-center Consumo de memoria, procesamiento y otros recursos del equipo.
    p.mb-0 El análisis conjunto de la disponibilidad y la capacidad permite determinar si la red cumple con los requerimientos definidos en la orden de trabajo y con los niveles de servicio esperados.
    .bg-1
      .px-5
        Separador
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Parámetros de validación técnica
        p La validación técnica de la conectividad requiere considerar múltiples condiciones que garantizan el funcionamiento adecuado de la red. Estas condiciones deben evaluarse conforme a estándares técnicos y procedimientos previamente establecidos. Los parámetros fundamentales para la comprobación técnica se sintetizan:
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Estado físico de cables y conectores]. Garantizar continuidad y calidad en la transmisión.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Integridad de puertos y tarjetas de red]. Verificar la operatividad del hardware de comunicación.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Configuración correcta de direcciones IP]. Asegurar la identificación lógica de los dispositivos.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Funcionamiento de servicios de infraestructura]. Confirmar la disponibilidad de servicios como DHCP o DNS.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Respuesta a pruebas de diagnóstico]. Determinar estabilidad y rendimiento de la conectividad.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema1/img8.png', alt='').m-auto
        p.mb-0 La evaluación sistemática de estos parámetros permite establecer diagnósticos técnicos confiables y tomar decisiones orientadas a la optimización del desempeño de la red.
        Separador
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Normativa técnica y orden de trabajo
        p.mb-5 La comprobación de la conectividad de una red se desarrolla bajo lineamientos técnicos previamente establecidos. Estos lineamientos incluyen estándares internacionales, regulaciones nacionales y políticas internas organizacionales, los cuales garantizan procedimientos sistemáticos, seguros y verificables. Las redes de datos se rigen por marcos normativos que promueven la interoperabilidad, la calidad del servicio y la seguridad en la transmisión de la información. Entre los principales referentes técnicos se encuentran los siguientes:
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Estándares IEEE 802.3 y 802.11
          p.mb-0.text-center Definir especificaciones para redes Ethernet y redes inalámbricas.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Normas TIA/EIA de cableado estructurado
          p.mb-0.text-center Establecer categorías de cable, distancias máximas y condiciones de instalación.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Regulación nacional de telecomunicaciones
          p.mb-0.text-center Determinar lineamientos para el uso del espectro radioeléctrico y la operación de infraestructuras.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Normas de Seguridad y Salud en el Trabajo (SST)
          p.mb-0.text-center Prevenir riesgos durante la manipulación de equipos eléctricos y electrónicos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema1/img9.png', alt='').m-auto
      .col-xl
        .caja-tema1-3(data-aos="fade-left")
          p El cumplimiento de estas disposiciones permite asegurar que la red opere dentro de parámetros técnicos aceptables y conforme a los requisitos regulatorios vigentes. En relación con los criterios de validación establecidos por la normativa técnica, se consideran diversos parámetros que permiten caracterizar el estado de la infraestructura de red:
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Distancias máximas de cableado]. Cumplimiento de longitudes permitidas según categoría.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Categorías de cable].  Correspondencia con la velocidad de transmisión requerida.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Niveles de pérdida de señal].  Valores dentro de rangos técnicos aceptables.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Certificación de enlaces].  Verificación de pruebas de conformidad técnica.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Configuración de equipos].  Ajuste conforme a especificaciones del fabricante.
    .bg-1
      .px-5
        p.mb-5 La aplicación de estos parámetros facilita la identificación de desviaciones técnicas y la definición de acciones correctivas. Por otra parte, la orden de trabajo constituye el documento que define el alcance operativo del proceso de comprobación. Este instrumento orienta la ejecución de actividades técnicas y asegura la trazabilidad del procedimiento. Los elementos esenciales de una orden de trabajo se presentan a continuación:
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema1/img10.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Objetivo de la intervención
                p.mb-0.text-center Finalidad técnica de la verificación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Segmentos o equipos a evaluar
                p.mb-0.text-center Infraestructura incluida en el proceso.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Parámetros técnicos
                p.mb-0.text-center Variables que deben comprobarse.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Herramientas requeridas
                p.mb-0.text-center Instrumentos de medición y diagnóstico.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Responsable de la actividad
                p.mb-0.text-center Técnico o equipo encargado.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema1/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Registro de resultados
                p.mb-0.text-center Evidencias documentadas del proceso.
        p.mb-0 La ejecución de la comprobación conforme a la orden de trabajo permite que los resultados obtenidos sean verificables y reproducibles en procesos de auditoría o mejora continua. Asimismo, durante la validación técnica deben aplicarse normas ambientales y de seguridad que protejan tanto al personal como a la infraestructura tecnológica. Estas disposiciones incluyen el uso de herramientas certificadas, la verificación previa de condiciones eléctricas, la gestión responsable de residuos electrónicos y la protección de la información tratada durante la intervención.
    Separador
    #t_1_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.5 Indicadores técnicos y métricas de desempeño
    p.mb-5 La comprobación de la conectividad requiere la medición de indicadores cuantificables que permitan evaluar objetivamente el desempeño de la red. Estos indicadores facilitan la toma de decisiones técnicas relacionadas con la optimización del servicio y el cumplimiento de niveles de calidad establecidos. Los principales indicadores técnicos utilizados en procesos de diagnóstico se sintetizan a continuación:
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img12.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Latencia (ms)").ajuste-cajaAcordion
            p.mb-3 Tiempo que tarda un paquete en transmitirse y regresar. En redes LAN se recomienda un valor menor a 5 ms y en redes WAN menor a 50 ms.
          .row(titulo="Pérdida de paquetes (%)").ajuste-cajaAcordion
            p.mb-3 Porcentaje de paquetes que no llegan a su destino. El valor aceptable se sitúa por debajo del 1 %.
          .row(titulo="<em>Jitter</em>").ajuste-cajaAcordion
            p.mb-3 Variación en el tiempo de llegada de los paquetes. En servicios #[i VoIP] se recomienda un valor inferior a 30 ms.
          .row(titulo="<em>Throughput</em>").ajuste-cajaAcordion
            p.mb-3 Velocidad efectiva de transmisión de datos en condiciones reales de operación.
          .row(titulo="<em>SLA (Service Level Agreement)</em>").ajuste-cajaAcordion
            p.mb-3 Nivel de servicio garantizado contractualmente, expresado generalmente como porcentaje de disponibilidad.
    p.mb-0 El análisis sistemático de estas métricas permite determinar el estado funcional de la red y establecer acciones orientadas a mejorar su rendimiento, estabilidad y confiabilidad.
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
