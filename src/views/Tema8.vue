<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Integración, configuración y pruebas de sistemas de seguridad sobre red 
    p.mb-5 La integración de sistemas de seguridad electrónica corresponde al proceso mediante el cual diferentes dispositivos y plataformas tecnológicas se conectan y configuran para operar como un sistema unificado de vigilancia, control y monitoreo. En infraestructuras modernas, equipos como cámaras de videovigilancia, sensores de intrusión, sistemas de control de acceso y alarmas se enlazan a la red de datos, lo cual permite su administración desde plataformas centralizadas.  Esta integración facilita el intercambio de información entre los componentes del sistema, la generación automática de alertas y la gestión eficiente de eventos de seguridad. A continuación, se presentan los principales beneficios asociados a la integración de sistemas de seguridad sobre red.
    .bg-2 
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema8/img1.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Centralización del monitoreo
                p.mb-0.text-center Permite supervisión unificada desde centros de control.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema8/img2.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Automatización de eventos de seguridad
                p.mb-0.text-center Facilita la activación de acciones ante incidentes detectados.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema8/img3.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Mayor eficiencia operativa
                p.mb-0.text-center Optimiza la administración de recursos tecnológicos.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema8/img4.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Mejora en la capacidad de respuesta
                p.mb-0.text-center Reduce tiempos de reacción ante situaciones de riesgo.
        p.mb-5 Los sistemas de seguridad electrónica utilizan plataformas de software conocidas como #[i Video Management System (VMS)] u otras soluciones de gestión integral que permiten administrar los dispositivos conectados a la red. Estas plataformas facilitan la supervisión, el control de eventos y la configuración del sistema de videovigilancia y seguridad. A continuación, se sintetizan las funciones principales de estas plataformas.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Registro de cámaras y dispositivos]. Permite integrar los equipos a la plataforma de monitoreo.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Visualización de video en tiempo real]. Facilita la supervisión operativa de las instalaciones.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Configuración de grabaciones]. Permite definir horarios, calidad y políticas de almacenamiento.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Gestión de usuarios y permisos]. Garantiza control de acceso al sistema.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Generación de alertas de seguridad]. Permite notificación automática ante eventos críticos.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema8/img5.png', alt='').m-auto
    p.mb-5 Entre las plataformas de gestión más utilizadas en entornos empresariales se encuentran soluciones como #[i HikCentral], #[i Milestone], #[i Genetec] y #[i Dahua DSS]. La configuración de estas herramientas debe realizarse conforme a la arquitectura de seguridad definida y a los requerimientos técnicos de la organización.
    .caja-tema7.mb-3(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema7/img2.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Protocolo técnico: integración del sistema de seguridad con la red 
          p.mb-0 Se invita a consultar este documento, donde se explica el proceso de integración de sistemas de videovigilancia con la infraestructura de red, incluyendo segmentación mediante VLAN, direccionamiento IP, verificación de conectividad y acceso remoto seguro. Material de apoyo para fortalecer la configuración y validación técnica de sistemas CCTV sobre redes de datos.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/anexos/Anexo2.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    .caja-tema7.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema7/img2.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Protocolo técnico para pruebas y puesta en funcionamiento del sistema de seguridad electrónica (CCTV IP) 
          p.mb-0 Se invita a consultar este documento, donde se describen los procedimientos para verificar la conectividad, validar la grabación, comprobar el acceso remoto y evaluar el funcionamiento general del sistema de videovigilancia IP. Material de apoyo para fortalecer la validación técnica y la puesta en marcha de sistemas CCTV sobre redes de datos.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/anexos/Anexo3.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    Separador
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.1 Integración de sistemas de seguridad con la red de datos
    p.mb-5 Los dispositivos de seguridad electrónica modernos operan mediante redes basadas en Internet Protocol (IP), por lo cual deben integrarse correctamente dentro de la infraestructura de red de la organización. Esta integración permite la comunicación entre cámaras, servidores de grabación y plataformas de monitoreo centralizado. A continuación, se presentan los parámetros de red que deben configurarse en los dispositivos de seguridad.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Dirección IP del dispositivo
          p.mb-0.text-center Permite identificar el equipo dentro de la red.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Máscara de subred
          p.mb-0.text-center Determina el segmento lógico de comunicación.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Puerta de enlace
          p.mb-0.text-center Permite la comunicación con otras redes.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Servidor #[i Domain Name System (DNS)]
          p.mb-0.text-center Facilita la resolución de nombres de red.
    .row.justify-content-center.mb-5
      .col-xl-10
        .caja-tema4.ajuste-color-2(data-aos="flip-up")
          p.mb-0 Ejemplo de configuración en una cámara de videovigilancia: dirección IP 192.168.10.25, máscara 255.255.255.0 y puerta de enlace 192.168.10.1. Una configuración adecuada garantiza la comunicación con los sistemas de grabación y monitoreo.
    p.mb-5 A continuación, se describen los principales procesos de configuración, gestión e integración que permiten optimizar el funcionamiento de los sistemas de seguridad electrónica.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema8/img6.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Configuración de reglas de acceso").ajuste-cajaAcordion
            p.mb-3 Los sistemas integrados de seguridad requieren la definición de políticas que permitan controlar la administración y supervisión de los dispositivos conectados. Esto incluye la definición de usuarios autorizados para controlar quién accede al sistema, el establecimiento de niveles de permisos para asignar funciones operativas, la restricción de acceso a cámaras o áreas con el fin de proteger información sensible y el registro de actividades de los operadores para garantizar auditoría y trazabilidad. Un adecuado control de accesos contribuye a preservar la integridad del sistema y prevenir manipulaciones no autorizadas.
          .row(titulo="Gestión de alertas y eventos").ajuste-cajaAcordion
            p.mb-3 Los sistemas de seguridad electrónica pueden generar alertas automáticas ante eventos relacionados con vigilancia o control de accesos. Por ejemplo, la detección de movimiento puede activar notificaciones o iniciar la grabación; el acceso no autorizado puede generar alarmas o bloqueos del sistema; la pérdida de conexión con un dispositivo puede originar alertas en la plataforma de monitoreo y la activación de sensores de intrusión puede registrar el evento y enviar notificaciones al personal de seguridad. Estas acciones mejoran la capacidad de respuesta ante incidentes.
          .row(titulo="Plataformas de gestión centralizada").ajuste-cajaAcordion
            p.mb-3 Permiten administrar múltiples sistemas de seguridad desde una única interfaz, lo cual facilita el control integral de la infraestructura. Integran tecnologías como sistemas de videovigilancia CCTV para supervisión visual continua, sistemas de control de acceso para gestionar el ingreso a áreas restringidas, sistemas de alarma para la detección temprana de incidentes y sensores de intrusión que refuerzan la protección de zonas críticas. La administración centralizada contribuye a optimizar la supervisión y reducir los tiempos de respuesta.
          .row(titulo="Integración con otros sistemas tecnológicos").ajuste-cajaAcordion
            p.mb-3 Los sistemas de seguridad electrónica pueden integrarse con diversas plataformas organizacionales para construir soluciones más completas. Entre estas se encuentran los sistemas de control de acceso para sincronizar eventos de seguridad, los sistemas de automatización de edificios que permiten ejecutar acciones automáticas en la infraestructura, las plataformas de monitoreo de red que facilitan correlacionar eventos técnicos y de seguridad y los sistemas de gestión de incidentes que permiten realizar seguimiento y atención de eventos. Esta integración favorece entornos operativos más seguros y coordinados.
    Separador
    #t_8_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.2 Configuración de red para dispositivos de seguridad
    p.mb-5 La configuración de dispositivos de seguridad electrónica consiste en establecer los parámetros técnicos necesarios para garantizar el funcionamiento adecuado de los sistemas de vigilancia y monitoreo dentro de la infraestructura de red. Esta configuración debe realizarse conforme a la arquitectura de seguridad definida, asegurando la integración correcta de cada componente. A continuación, se presentan los dispositivos que requieren configuración dentro de un sistema de seguridad electrónica.
    SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema8/img7.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Cámaras de videovigilancia
        p.mb-0.text-center Permiten la captura y transmisión de video.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema8/img8.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Grabadores de video como #[i Network Video Recorder (NVR)] o #[i Digital Video Recorder (DVR)]
        p.mb-0.text-center Facilitan el almacenamiento y la gestión de grabaciones.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema8/img9.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Sensores de intrusión
        p.mb-0.text-center Permiten detectar eventos de seguridad en áreas protegidas.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema8/img10.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Sistemas de control de acceso
        p.mb-0.text-center Gestionan la autorización de ingreso a zonas restringidas.
      .tarjeta.color-acento-botones.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/tema8/img11.svg' style="max-width: 90px").m-auto
        h4.mb-3.estilo-text Servidores de monitoreo
        p.mb-0.text-center Centralizan la supervisión y administración del sistema.
    .row.justify-content-center.mb-5
      .col-xl-8
        .caja-tema1-1.ajuste-color-2(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 Una configuración adecuada contribuye a garantizar la disponibilidad del sistema, la calidad de las grabaciones y la protección de la información.
    p.mb-5 A continuación, se describen los principales procesos de configuración de cámaras, grabadores y parámetros de red necesarios para garantizar el funcionamiento adecuado de los sistemas de videovigilancia.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema8/img12.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Configuración de cámaras basadas en #[i Internet Protocol (IP)]
                p.mb-0 Las cámaras IP se conectan directamente a la red de datos, por lo cual requieren la definición de parámetros de comunicación como la dirección IP del dispositivo para su identificación dentro de la red, la máscara de subred para definir el segmento lógico, la puerta de enlace para facilitar la comunicación con otros segmentos, el servidor #[i Domain Name System (DNS)] para la resolución de nombres y las credenciales de acceso que garantizan la seguridad administrativa. Por ejemplo, se puede configurar la dirección IP 192.168.10.50, máscara 255.255.255.0 y puerta de enlace 192.168.10.1. También es necesario ajustar parámetros de video como la resolución de imagen, que determina la calidad visual, la velocidad de cuadros por segundo #[i (Frames per second - FPS)], que influye en la fluidez; la compresión, que optimiza el uso del ancho de banda y almacenamiento; y la activación de detección de movimiento, que facilita la generación de eventos automáticos.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema8/img13.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Configuración de grabadores de video
                p.mb-0 Los grabadores constituyen el elemento encargado de almacenar y gestionar las imágenes capturadas por las cámaras. Entre las actividades de configuración se encuentran el registro de cámaras en el sistema para integrarlas al grabador, la configuración del almacenamiento para definir la capacidad y el método de conservación del video, la programación de horarios de grabación para optimizar el uso de recursos, la configuración de usuarios y permisos para garantizar el control de acceso y la configuración de alertas que permite la notificación automática de eventos. En sistemas basados en #[i Network Video Recorder (NVR)], las cámaras se agregan mediante su dirección IP dentro de la plataforma de grabación.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema8/img14.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Configuración de red en sistemas de videovigilancia
                p.mb-0 Para garantizar la operación adecuada del sistema #[i Closed Circuit Television (CCTV)], los dispositivos deben integrarse correctamente dentro de la red empresarial. Esto implica definir el direccionamiento IP para la identificación y comunicación, implementar segmentación mediante Virtual Local Area Network (VLAN) para mejorar la seguridad y el rendimiento, configurar los puertos de comunicación que permiten el acceso a servicios de monitoreo y aplicar priorización del tráfico mediante #[i Quality of Service (QoS)] para asegurar la transmisión eficiente del video. En entornos empresariales, se recomienda asignar una VLAN exclusiva para videovigilancia con el fin de optimizar el desempeño y reforzar la seguridad.
    Separador
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.3 Configuración de acceso remoto y almacenamiento
    p.mb-5 Los sistemas modernos de seguridad electrónica permiten el acceso remoto para facilitar la supervisión desde dispositivos externos autorizados.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Puertos de acceso]. Permiten la conexión remota al sistema.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Direcciones IP públicas o servicios de #[i Dynamic Domain Name System (DDNS)]]. Facilitan el acceso desde Internet.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Certificados de seguridad]. Permiten establecer conexiones cifradas.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Usuarios y contraseñas seguras]. Garantizan la protección del sistema.
        .caja-tema1-1(data-aos="flip-up")
          .row.align-items-center
            .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
            .col-xl.col-md-10
              p.mb-0 Esta configuración permite a los administradores acceder al sistema mediante aplicaciones móviles o plataformas web.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8/img15.png', alt='').m-auto
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Configuración de almacenamiento y respaldo
    p.mb-5 El almacenamiento de video constituye un elemento crítico dentro de los sistemas de videovigilancia, ya que las grabaciones deben mantenerse disponibles conforme a las políticas de seguridad de la organización.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Capacidad de almacenamiento
          p.mb-0.text-center Determina el volumen de información que puede conservarse.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Tiempo de retención de grabaciones
          p.mb-0.text-center Define el periodo durante el cual el video permanece disponible.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Políticas de sobrescritura automática
          p.mb-0.text-center Permiten gestionar el uso eficiente del espacio.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Copias de seguridad
          p.mb-0.text-center Garantizan la protección de la información.
    p.mb-0 Los sistemas de almacenamiento pueden incluir discos internos, servidores dedicados, soluciones #[i Network Attached Storage (NAS)] o #[i Storage Area Network (SAN)], así como servicios de almacenamiento en la nube. Una gestión adecuada permite asegurar la disponibilidad de evidencias cuando se requieran.
    Separador
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.4 Seguridad en la configuración de dispositivos
    p.mb-5 La seguridad en la configuración de los dispositivos constituye un aspecto fundamental para prevenir accesos no autorizados y proteger la integridad del sistema de videovigilancia y control electrónico. La aplicación de prácticas técnicas adecuadas contribuye a reducir vulnerabilidades y a fortalecer la protección de la infraestructura tecnológica. A continuación, se presentan las prácticas recomendadas para asegurar la configuración de los dispositivos de seguridad.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Cambio de contraseñas predeterminadas]. Reduce el riesgo de accesos no autorizados.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Uso de protocolos de acceso seguro]. Permite proteger la comunicación mediante cifrado.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Restricción de accesos por dirección #[i Internet Protocol (IP)]]. Facilita el control de dispositivos autorizados.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Actualización periódica del #[i firmware]]. Permite corregir vulnerabilidades y mejorar el desempeño.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Implementación de políticas de control de acceso]. Garantiza administración segura del sistema.
        .row.align-items-center
          .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='').m-auto
          .col-xl
            p.mb-0 La aplicación sistemática de estas medidas contribuye a proteger la infraestructura de seguridad electrónica frente a ataques, configuraciones indebidas o manipulación no autorizada.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema8/img16.png', alt='').m-auto
    Separador
    #t_8_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 8.5 Pruebas de funcionamiento y validación final del sistema
    p.mb-5 Las pruebas de funcionamiento permiten verificar que todos los componentes del sistema de seguridad electrónica operen correctamente conforme a la arquitectura definida y a los requerimientos técnicos establecidos. Estas pruebas se realizan después de la instalación y configuración de los dispositivos, con el propósito de asegurar la operatividad del sistema antes de su puesta en servicio.
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/img17.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El proceso de verificación facilita la identificación de fallas de configuración, problemas de conectividad o inconsistencias en la integración de los dispositivos. Las pruebas deben ejecutarse siguiendo procedimientos técnicos documentados y registrando los resultados obtenidos.
    .bg-1
      .px-5
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Tipos de pruebas en sistemas de seguridad electrónica
        p.mb-5 En la validación técnica del sistema se deben realizar diferentes pruebas orientadas a comprobar el funcionamiento de cada componente.
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema8/img18.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema8/img19.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Pruebas de conectividad de red
                p.mb-0.text-center Permiten confirmar la integración de los dispositivos a la infraestructura.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema8/img20.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Pruebas de funcionamiento de cámaras
                p.mb-0.text-center Verifican la captura y transmisión adecuada de video.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema8/img21.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Pruebas de grabación de video
                p.mb-0.text-center Permiten confirmar el almacenamiento correcto de las evidencias.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema8/img22.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Pruebas de acceso remoto
                p.mb-0.text-center Validan la supervisión del sistema desde ubicaciones externas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema8/img23.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Pruebas de detección de eventos
                p.mb-0.text-center Permiten comprobar la generación de alertas automáticas.
        p.mb-5 A continuación, se presentan las principales pruebas técnicas que permiten verificar el correcto funcionamiento del sistema de seguridad electrónica sobre red.
        .row.justify-content-center.mb-0
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="Pruebas de conectividad").ajuste-cajaAcordion
                p.mb-3 Las pruebas de conectividad permiten comprobar que los dispositivos de seguridad se encuentran correctamente enlazados a la red de datos. Incluyen la ejecución del comando ping para confirmar la comunicación entre equipos, el uso de #[i traceroute] o #[i tracert] para identificar la ruta de transmisión, la verificación del direccionamiento IP para validar la configuración lógica y la revisión de enlaces físicos para comprobar el estado del cableado y las conexiones. Por ejemplo, al ejecutar ping a la dirección 192.168.10.50, si el dispositivo responde, se confirma la existencia de conectividad. Estas pruebas permiten detectar fallas como direcciones IP incorrectas, problemas de cableado, dispositivos desconectados o conflictos de red.
              .row(titulo="Pruebas de funcionamiento de cámaras").ajuste-cajaAcordion
                p.mb-3 Permiten comprobar que cada cámara capture y transmita video de manera adecuada. Comprenden la validación de imagen en tiempo real para confirmar la transmisión, la comprobación del ángulo de cobertura para garantizar la supervisión del entorno, la evaluación de la calidad de imagen para determinar la resolución efectiva, la prueba de visión nocturna para verificar el funcionamiento en condiciones de baja iluminación y la validación de la detección de movimiento para confirmar la generación de eventos. Estas pruebas aseguran que las cámaras cubran correctamente las áreas definidas en el sistema de vigilancia.
              .row(titulo="Pruebas de grabación de video").ajuste-cajaAcordion
                p.mb-3 Permiten confirmar que las grabaciones se almacenen correctamente en el grabador o servidor de video. Incluyen la verificación de grabación continua para confirmar el registro permanente, la validación de grabación por eventos para comprobar la activación automática, la comprobación del almacenamiento en disco para garantizar disponibilidad de espacio y la verificación de la reproducción de grabaciones para confirmar el acceso a evidencias. Estas pruebas garantizan la disponibilidad del material registrado cuando sea necesario.
              .row(titulo="Pruebas de acceso remoto").ajuste-cajaAcordion
                p.mb-3 Permiten verificar que el sistema pueda ser supervisado desde ubicaciones externas autorizadas. Incluyen el acceso mediante navegador web para confirmar la conexión al sistema, el acceso mediante aplicación móvil para validar la supervisión remota, la verificación de credenciales de usuario para confirmar la autenticación correcta y la comprobación de la transmisión remota de video para validar el funcionamiento fuera de la red local. Estas pruebas aseguran la administración y el monitoreo del sistema desde diferentes ubicaciones.
              .row(titulo="Registro de resultados y validación final").ajuste-cajaAcordion
                p.mb-3 Consiste en documentar los resultados obtenidos durante las pruebas en informes técnicos que permitan el seguimiento del estado del sistema. Se registra la fecha de la prueba para garantizar la trazabilidad, el dispositivo evaluado para identificar el componente analizado, el tipo de prueba realizada para clasificar la validación, el resultado obtenido para valorar el desempeño y las observaciones técnicas para facilitar decisiones correctivas. Una vez finalizadas las pruebas, se realiza la validación integral del sistema para confirmar el funcionamiento de la conectividad, cámaras, grabaciones, acceso remoto y gestión de alertas. Cuando los resultados cumplen los requerimientos técnicos establecidos, el sistema puede entrar en operación.
</template>

<script>
export default {
  name: 'Tema8',
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
