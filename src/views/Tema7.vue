<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Arquitectura de sistemas de seguridad electrónica y CCTV
    p.mb-5 La seguridad electrónica comprende el conjunto de tecnologías y dispositivos diseñados para proteger personas, instalaciones, información y activos mediante sistemas automatizados de vigilancia, control y detección. Estos sistemas utilizan la infraestructura de red para transmitir datos, video y alertas en tiempo real, lo cual facilita la supervisión centralizada y la respuesta oportuna ante eventos de seguridad.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En entornos empresariales, la arquitectura de seguridad electrónica integra diferentes subsistemas que operan de forma coordinada, como la videovigilancia, el control de acceso, la detección de intrusión y los sistemas de alarma. La adecuada integración de estos elementos permite fortalecer la capacidad de monitoreo, análisis y reacción ante incidentes.
    p.mb-5 La implementación de estos sistemas debe desarrollarse conforme a la arquitectura definida, considerando aspectos técnicos relacionados con conectividad, disponibilidad, seguridad de la información y escalabilidad de la infraestructura.
    .caja-tema7.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema7/img2.svg', alt='' style="max-width: 85px").m-auto
        .col-xl.mb-4.mb-lg-0
          h4 Protocolo técnico para la instalación e integración de cámaras IP en sistema NVR
          p.mb-0 Se invita a consultar este documento, donde se explica el procedimiento para la conexión, direccionamiento, configuración y validación de cámaras IP en sistemas de videovigilancia. Material de apoyo para fortalecer la instalación y verificación técnica de sistemas CCTV sobre redes de datos.
        .col-xl-2
          a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/anexos/Anexo1.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.1 Concepto y componentes de la seguridad electrónica
    p.mb-5 La seguridad electrónica corresponde al conjunto de tecnologías basadas en dispositivos electrónicos y sistemas informáticos que permiten supervisar, controlar y proteger espacios físicos mediante la detección de eventos o comportamientos anómalos.
    .caja-tema7-1.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-xl-auto
          figure
            img(src='@/assets/curso/tema7/img3.png', alt='').m-auto
        .col-xl
          p.mb-0 A diferencia de los sistemas tradicionales, los sistemas electrónicos facilitan la automatización de los procesos de vigilancia y la generación de alertas en tiempo real, lo cual favorece la toma de decisiones y la intervención preventiva ante situaciones de riesgo. Estos sistemas pueden operar de forma independiente o integrarse en plataformas centralizadas de gestión. A continuación, se presentan los componentes básicos de un sistema integrado de seguridad electrónica.
    .bg-1
      .px-5
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema7/img4.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cámaras de videovigilancia
            p.mb-0.text-center Capturan imágenes o video para monitoreo en tiempo real o almacenamiento posterior.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema7/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Grabadores de video digital
            p.mb-0.text-center Permiten almacenar y gestionar el material audiovisual registrado.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema7/img6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Sensores de intrusión
            p.mb-0.text-center Detectan movimientos o accesos no autorizados en áreas protegidas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema7/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Paneles de control
            p.mb-0.text-center Centralizan la información proveniente de los dispositivos y gestionan eventos o alarmas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema7/img8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Dispositivos de control de acceso
            p.mb-0.text-center Permiten autorizar o restringir el ingreso mediante tarjetas, códigos o biometría.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema7/img9.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Plataformas de gestión
            p.mb-0.text-center Aplicaciones de #[i software] que permiten monitorear, administrar y registrar eventos del sistema.
        p.mb-0 La adecuada selección e integración de estos componentes permite construir una infraestructura de seguridad electrónica robusta, confiable y alineada con los requerimientos operativos de la organización.
        Separador
        #t_7_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 7.2 Sistemas de control de acceso y detección de intrusión
    p.mb-5 Los sistemas de control de acceso permiten gestionar el ingreso de personas a áreas restringidas mediante mecanismos de autenticación y autorización. La integración de estos sistemas con la infraestructura de red facilita el registro de eventos, la generación de reportes y la aplicación de políticas de seguridad organizacional. A continuación, se presentan los principales métodos, dispositivos y sensores utilizados en sistemas de control de acceso y detección de intrusión.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema7/img10.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Métodos de identificación en control de acceso").ajuste-cajaAcordion
            p.mb-3 Los sistemas de control de acceso emplean diferentes mecanismos para autenticar a los usuarios. Entre ellos se encuentran las tarjetas de proximidad, que permiten la autenticación mediante tecnología de radiofrecuencia; los códigos #[i Personal Identification Number (PIN)], que facilitan el ingreso mediante validación numérica; la identificación biométrica, basada en características físicas como huella, rostro o iris; y las credenciales móviles, que posibilitan el acceso mediante dispositivos autorizados.
          .row(titulo="Dispositivos del sistema de control de acceso").ajuste-cajaAcordion
            p.mb-3 Estos sistemas integran varios dispositivos que interactúan para gestionar el ingreso de manera segura. Los lectores de tarjetas o biométricos capturan y validan la identidad del usuario; los controladores de acceso procesan la información y autorizan o rechazan el ingreso; las cerraduras eléctricas ejecutan la apertura o el bloqueo físico de puertas; los sensores de puerta detectan el estado de apertura o cierre; y el software de administración permite configurar usuarios, horarios y registros de acceso.
          .row(titulo="Sistemas de detección de intrusión").ajuste-cajaAcordion
            p.mb-3 Tienen como finalidad identificar accesos no autorizados o movimientos sospechosos dentro de áreas protegidas. Utilizan sensores que supervisan condiciones específicas del entorno, como los sensores de movimiento Passive Infrared (PIR), que detectan variaciones de radiación infrarroja; los sensores magnéticos, que identifican la apertura de puertas o ventanas; los sensores de ruptura de vidrio que reconocen vibraciones asociadas a fracturas; y los sensores volumétricos, que detectan movimiento dentro de una zona definida. Cuando se presenta una condición anómala, el sensor envía una señal al panel de control, el cual puede activar alarmas, generar notificaciones al sistema central o emitir alertas al personal de seguridad para permitir una respuesta oportuna.
    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.3 Sistemas de alarma y ubicación estratégica de dispositivos
    p.mb-5 Los sistemas de alarma constituyen mecanismos diseñados para alertar sobre eventos de seguridad mediante señales visuales, sonoras o digitales. Estos sistemas permiten notificar situaciones de riesgo de manera inmediata y pueden integrarse con plataformas de monitoreo centralizado para facilitar la gestión de incidentes. A continuación, se presentan los eventos más comunes que pueden activar un sistema de alarma.
    TabsC.color-acento-contenido(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Eventos de activación de sistemas de alarma")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema7/img11.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Eventos de activación de sistemas de alarma
            p.mb-0 Los sistemas de alarma se activan ante situaciones que representan riesgos para la seguridad de una instalación. Entre los eventos más comunes se encuentran las intrusiones detectadas por sensores, la apertura indebida de puertas o accesos y las fallas en sistemas críticos. También se incluyen los incidentes identificados mediante análisis de video en cámaras de vigilancia. La integración con plataformas centralizadas permite el envío automático de notificaciones a operadores o centros de control.
      .py-3.py-md-4(titulo="Ubicación estratégica de dispositivos de seguridad")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema7/img12.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Ubicación estratégica de dispositivos de seguridad
            p.mb-0 La ubicación adecuada de los dispositivos es esencial para el desempeño de un sistema de seguridad electrónica. La planificación debe asegurar la cobertura de áreas críticas, reducir puntos ciegos y proteger accesos principales. Asimismo, es importante supervisar zonas de alto tránsito y ubicar sensores y cámaras en posiciones que faciliten la detección temprana de incidentes. Para ello, se analizan planos arquitectónicos, rutas de acceso, iluminación y riesgos potenciales.
    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.4 Sistemas de videovigilancia #[i Closed Circuit Television (CCTV)]
    p.mb-5 Los sistemas de videovigilancia #[i Closed Circuit Television (CCTV)] corresponden a tecnologías utilizadas para supervisar, registrar y analizar eventos que ocurren en un área determinada mediante el uso de cámaras conectadas a sistemas de grabación y monitoreo. Estos sistemas constituyen un componente esencial dentro de la seguridad electrónica en organizaciones públicas y privadas, ya que permiten prevenir incidentes, supervisar instalaciones y generar evidencia ante situaciones de riesgo.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/img13.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La integración de sistemas #[i CCTV] con redes de datos facilita la gestión de cámaras #[i Internet Protocol (IP)], el almacenamiento digital de video y el acceso remoto a las grabaciones mediante plataformas de monitoreo centralizado.
    .bg-1
      .px-5
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Arquitectura de un sistema #[i CCTV]
        p.mb-5 Un sistema de videovigilancia está conformado por diversos elementos que interactúan para capturar, transmitir, almacenar y reproducir el video. A continuación, se presentan los componentes principales.
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema7/img14.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/img15.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cámaras de videovigilancia
                p.mb-0.text-center Capturan imágenes o video de áreas supervisadas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/img16.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Grabadores de video
                p.mb-0.text-center Permiten almacenar y gestionar las grabaciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/img17.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Dispositivos de red
                p.mb-0.text-center Facilitan la transmisión de datos dentro de la infraestructura.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/img18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Sistemas de almacenamiento
                p.mb-0.text-center Permiten conservar el material audiovisual.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/img19.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Software] de gestión de video
                p.mb-0.text-center Facilita la administración, configuración y monitoreo del sistema.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema7/img20.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Monitores de visualización
                p.mb-0.text-center Permiten la supervisión en tiempo real de las imágenes.
        p.mb-5 En sistemas modernos, las cámaras se conectan a la red mediante tecnología IP, lo cual permite su administración desde plataformas centralizadas y mejora la escalabilidad del sistema.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Grabadores de video en sistemas de videovigilancia
    p.mb-5 Los grabadores constituyen dispositivos encargados de almacenar las imágenes captadas por las cámaras y facilitar su reproducción o análisis posterior.
    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Digital Video Recorder (DVR)</em>")
        h4 #[i Digital Video Recorder (DVR)]
        p.mb-0 Utilizado principalmente en sistemas analógicos. Emplea conexión mediante cable coaxial, convierte la señal analógica a digital, permite almacenamiento en discos internos y facilita la supervisión local o remota.
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Network Video Recorder (NVR)</em>")
        h4 #[i Network Video Recorder (NVR)]
        p.mb-0 Utilizado en sistemas de videovigilancia basados en red. Recibe video digital mediante conexión #[i Ethernet], ofrece mayor calidad de imagen y permite administración mediante software especializado.
      .tarjeta.color-acento-botones--borde.p-4(titulo="<em>Hybrid Video Recorder (HVR)</em>")
        h4 #[i Hybrid Video Recorder (HVR)]
        p.mb-0 Permite integrar cámaras analógicas y cámaras IP en una misma infraestructura, facilitando la migración gradual hacia sistemas de videovigilancia digitales.
    p.mb-0 La adecuada selección del tipo de grabador depende de la arquitectura tecnológica existente, los requerimientos de calidad de imagen y las estrategias de modernización de la infraestructura de seguridad.
    Separador
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.5 Tipos de cámaras y parámetros técnicos
    p.mb-5 Las cámaras de videovigilancia constituyen los dispositivos encargados de capturar imágenes o video que posteriormente serán transmitidos al sistema de grabación y monitoreo. La selección del tipo de cámara depende de las condiciones del entorno, los requerimientos de cobertura y los objetivos de seguridad establecidos. A continuación, se presentan los tipos de cámaras más utilizados en sistemas de videovigilancia.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema7/img21.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cámaras #[i Internet Protocol (IP)]
                p.mb-0 Transmiten video a través de redes de datos. Ofrecen alta resolución, acceso remoto e integración con sistemas de red.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema7/img22.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cámaras análogas
                p.mb-0 Transmiten señal mediante cable coaxial hacia un Digital #[i Video Recorder (DVR)]. Presentan menor costo e instalación sencilla, con resolución limitada frente a cámaras IP.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema7/img24.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cámaras domo
                p.mb-0 Dispositivos compactos utilizados principalmente en interiores. Ofrecen diseño discreto, amplio ángulo de visión e instalación en techos.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema7/img26.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cámaras bala
                p.mb-0 Cámaras de forma cilíndrica utilizadas en exteriores. Proporcionan mayor alcance y resistencia a condiciones ambientales adversas.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema7/img23.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cámaras #[i Pan-Tilt-Zoom (PTZ)]
                p.mb-0 Permiten control remoto del movimiento horizontal, vertical y del nivel de acercamiento, facilitando la supervisión de grandes áreas.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema7/img25.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Cámaras 360°
                p.mb-0 Permiten capturar imágenes panorámicas del entorno mediante lentes especiales.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Parámetros técnicos de cámaras de videovigilancia
    p.mb-5 La selección adecuada de cámaras requiere analizar diferentes parámetros técnicos que influyen en la calidad de la supervisión y el desempeño del sistema.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Resolución]. Determina la calidad de la imagen capturada. Valores comunes incluyen 720p, 1080p y 4K.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b #[i Frames per second (FPS)]]. Indica la cantidad de cuadros capturados por segundo. Valores habituales son 15 o 30 fps.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Ángulo de visión]. Define el área que puede cubrir la cámara según el tipo de lente.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Visión nocturna]. Permite capturar imágenes en condiciones de baja iluminación mediante tecnología infrarroja.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Analítica de video]. Facilita la identificación automática de eventos como detección de movimiento, reconocimiento facial, conteo de personas, detección de intrusión o seguimiento de objetos.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema7/img27.png', alt='').m-auto
    .caja-tema4.ajuste-color-2.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 La correcta selección de los parámetros técnicos permite optimizar la capacidad de vigilancia, mejorar la detección de incidentes y fortalecer la seguridad de la infraestructura supervisada.
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
    Separador
    #t_7_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 7.6 Monitoreo y almacenamiento de video
    p.mb-5 El monitoreo corresponde al proceso de supervisión continua de las cámaras de videovigilancia mediante centros de control o plataformas de gestión especializadas. Este proceso permite detectar eventos de seguridad, analizar situaciones en tiempo real y gestionar la operación del sistema de vigilancia. A continuación, se sintetizan las funciones principales de las plataformas de monitoreo.
    .ajuste-width-final
      .bg-slider.mb-0
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Funciones del monitoreo en sistemas de videovigilancia
                  p.mb-0 El monitoreo permite la supervisión en tiempo real de las áreas protegidas, facilita la revisión de grabaciones para el análisis de eventos ocurridos, posibilita la generación de alertas automáticas ante situaciones de riesgo y permite la administración de usuarios y permisos para garantizar el control de acceso al sistema. Estas funciones contribuyen a la operación continua y a la gestión oportuna de incidentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/tema7/img29.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Medios de acceso al sistema de monitoreo
                  p.mb-0 El acceso puede realizarse mediante estaciones de monitoreo que permiten el control centralizado del sistema, aplicaciones móviles que facilitan la supervisión remota desde dispositivos portátiles y navegadores web que permiten la gestión mediante interfaces en red. Estos medios favorecen la flexibilidad operativa y la supervisión desde diferentes ubicaciones.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/tema7/img30.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Almacenamiento y respaldo de video
                  p.mb-0 Las grabaciones deben almacenarse de manera segura para garantizar su disponibilidad como evidencia o para análisis posterior. Entre los métodos más utilizados se encuentran los discos duros internos en grabadores que permiten almacenamiento local inmediato, los servidores de almacenamiento que facilitan la gestión centralizada del video, los sistemas #[i Network Attached Storage (NAS)] o #[i Storage Area Network (SAN)] que ofrecen alta capacidad y disponibilidad, y el almacenamiento en la nube que posibilita acceso remoto y respaldo externo. La aplicación de políticas de retención y respaldo contribuye a la protección de la información y a la continuidad operativa del sistema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/tema7/img31.png', alt='' style="max-width: 500px").m-auto
</template>

<script>
export default {
  name: 'Tema7',
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
