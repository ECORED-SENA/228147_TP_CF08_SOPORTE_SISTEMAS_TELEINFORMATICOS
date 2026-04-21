<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Medios de transmisión y protocolos de comunicación
    p.mb-5 Los medios de transmisión constituyen el soporte físico o inalámbrico a través del cual se transportan los datos dentro de una red. La correcta operación de estos medios resulta esencial para garantizar la conectividad, la estabilidad y el rendimiento de la infraestructura. Durante la comprobación técnica, la evaluación del medio de transmisión permite identificar fallas físicas, degradación de señal o problemas de instalación que pueden afectar la comunicación entre dispositivos.
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.1 Concepto y clasificación de medios de transmisión
    .bg-2
      .px-5
        p.mb-5 El medio de transmisión corresponde al canal que permite el envío de señales eléctricas, ópticas o electromagnéticas desde un dispositivo origen hasta un dispositivo destino. La selección adecuada del medio incide directamente en la calidad del servicio de red y en la eficiencia de la comunicación. A continuación, se presenta la clasificación general de los medios de transmisión.
        .row.justify-content-center.mb-5
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
            .caja-tema3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema4/img1.jpg', alt="" ).m-auto
                h4.text-center Medios guiados
                p.mb-0.text-center Utilizan un canal físico definido, como el cable de par trenzado o la fibra óptica.
          .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-left")
            .caja-tema3.h-100
              .row.justify-content-center.mb-3
                .col-12
                  figure.mb-4
                    img(src='@/assets/curso/tema4/img2.jpg', alt="" ).m-auto
                h4.text-center Medios no guiados
                p.mb-0.text-center Transmiten señales a través del espacio mediante ondas electromagnéticas, como las redes inalámbricas.
        .row.justify-content-center.mb-0.text-center
          .col-xl-9
            p.mb-0 La elección del medio depende de factores como la distancia de transmisión, la velocidad requerida, la presencia de interferencias y los costos de implementación de la infraestructura.
    Separador
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.2 Cableado estructurado y procedimientos de interconexión
    p.mb-5 El cableado estructurado es un sistema organizado de cables, conectores y dispositivos que permite la transmisión de datos dentro de un edificio o campus. Este sistema facilita la administración de la red y contribuye a mantener niveles adecuados de desempeño y confiabilidad. El cable de par trenzado constituye el medio más utilizado en redes LAN. Está conformado por pares de conductores trenzados que reducen las interferencias electromagnéticas y mejoran la calidad de la señal transmitida. A continuación, se presentan las principales categorías empleadas en la implementación de cableado estructurado.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Categoría 5e
          p.mb-0.text-center Soporta redes de velocidad media en entornos empresariales.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Categoría 6
          p.mb-0.text-center Permite mayores velocidades y mejor desempeño frente a interferencias.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Categoría 6A
          p.mb-0.text-center Ofrece mayor ancho de banda y estabilidad en enlaces de alta demanda.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Categoría 7
          p.mb-0.text-center Proporciona altos niveles de blindaje y rendimiento superior.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema4/img3.png', alt='').m-auto
      .col-xl
        .caja-tema1-3.ajuste-color-3(data-aos="fade-left")
          p Durante la comprobación técnica del cableado estructurado, es necesario verificar los siguientes aspectos.
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Integridad del cable]. Confirmar ausencia de daños físicos o cortes.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Terminación en conectores RJ45]. Garantizar continuidad y correcta transmisión.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Distancia máxima permitida]. Validar cumplimiento del límite operativo de 100 metros en #[i Ethernet].
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Certificación del enlace]. Confirmar desempeño mediante equipos de prueba especializados.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Procedimientos de interconexión
    p La correcta interconexión del cableado estructurado requiere la aplicación de procedimientos técnicos que aseguren la calidad del enlace y la estabilidad de la comunicación. A continuación, se sintetizan las actividades principales asociadas a este proceso.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Pelado adecuado del cable]. Evita daños en los conductores internos.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Orden correcto de colores según norma T568A o T568B]. Garantiza compatibilidad y funcionamiento del enlace.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Uso de herramientas certificadas]. Permite realizar terminaciones confiables.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Verificación con equipos de prueba]. Confirma continuidad y calidad de la señal.
        .caja-tema1-1(data-aos="flip-up")
          p.mb-0 Una conectorización inadecuada puede generar pérdida de paquetes, disminución de la velocidad de transmisión o desconexiones intermitentes que afectan el rendimiento de la red.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img4.png', alt='').m-auto
    Separador
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.3 Fibra óptica y medios inalámbricos
    p.mb-5 La fibra óptica permite la transmisión de datos mediante pulsos de luz que circulan a través de un núcleo de vidrio o plástico. Este medio se caracteriza por su alta capacidad de transmisión, baja atenuación y gran alcance, lo cual favorece su uso en redes troncales y enlaces WAN.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Tipos de fibra óptica
    p Existen diferentes tipos de fibra óptica según su diseño y capacidad de transmisión. A continuación, se presenta una síntesis de los principales tipos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        .caja-tema1-1.ajuste-color-4.mb-3(data-aos="flip-up")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-4
              span.fa-li
                i.fas.fa-check-circle
              | #[b Fibra monomodo]: permite transmisiones a larga distancia con baja atenuación.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Fibra multimodo]: se utiliza en distancias medias dentro de infraestructuras internas.
        p Durante la comprobación técnica de enlaces en fibra óptica, es necesario verificar diversos aspectos operativos.
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Limpieza de conectores]. Garantiza adecuada transmisión de la señal óptica.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Atenuación de señal]. Permite identificar pérdidas en el enlace.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Integridad del cable]. Confirma ausencia de daños físicos.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Estado de módulos #[i Small Form-factor Pluggable (SFP)]]. Verifica funcionamiento del transceptor óptico.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema4/img5.png', alt='').m-auto
    .bg-3
      .px-5
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Medios inalámbricos
        p Los medios inalámbricos transmiten información mediante ondas electromagnéticas sin necesidad de cableado físico. Este tipo de conectividad facilita la movilidad de los dispositivos y la expansión de la red en entornos donde el cableado resulta limitado. A continuación, se presentan los factores que pueden afectar la conectividad inalámbrica.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Interferencias]. Pueden degradar la calidad de la señal.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Obstáculos físicos]. Reducen el alcance efectivo de transmisión.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Frecuencia utilizada]. Influye en cobertura y estabilidad.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Potencia de transmisión]. Determina el alcance del enlace inalámbrico.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Saturación de canales]. Genera congestión y disminución del rendimiento.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4/img6.png', alt='').m-auto
        p.mb-5.text-center Durante la validación técnica se deben analizar indicadores operativos relevantes.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema4/img7.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Intensidad de señal (Received Signal Strength Indicator – RSSI)
                p.mb-0.text-center Permite estimar la calidad del enlace.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema4/img7.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Relación señal-ruido
                p.mb-0.text-center Determina estabilidad de la comunicación.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema4/img7.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Canal configurado
                p.mb-0.text-center Facilita la detección de interferencias.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema4/img7.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Estándar inalámbrico implementado
                p.mb-0.text-center Define capacidad y velocidad de transmisión.
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Procedimientos de comprobación del medio de transmisión
        p La verificación del estado del medio de transmisión requiere la aplicación de un procedimiento técnico estructurado que permita identificar fallas físicas o degradaciones del enlace. A continuación, se sintetizan las actividades recomendadas.
        .row.justify-content-center.align-items-center.mb-0
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Inspección del cableado]. Detectar daños físicos visibles.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Verificación de conectores]. Confirmar correcta terminación.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Uso de equipos de prueba]. Validar continuidad del enlace.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Medición de pérdida de señal]. Determinar nivel de atenuación.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Pruebas de rendimiento].  Evaluar estabilidad y velocidad de transmisión.
            .caja-tema1-1(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                  p.mb-0 En entornos inalámbricos es necesario realizar mediciones de cobertura y análisis de interferencias para garantizar la calidad del servicio.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema4/img9.png', alt='').m-auto
    Separador
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.4 Impacto del medio en la detección de fallas
    .bg-1
      .px-5
        p.mb-5 Un porcentaje significativo de fallas en redes está asociado a problemas físicos en el medio de transmisión. La identificación temprana de estas situaciones contribuye a reducir tiempos de inactividad y mejorar la disponibilidad del servicio. A continuación, se presentan las causas más frecuentes relacionadas con este tipo de fallas.
        .row.align-items-center.mb-0
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema4/img10.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Conectores mal terminados
                p.mb-0.text-center Generan pérdida de señal o desconexiones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cables dañados
                p.mb-0.text-center Provocan interrupciones en la comunicación.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Interferencias electromagnéticas
                p.mb-0.text-center Reducen la estabilidad del enlace.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Distancias superiores a las permitidas
                p.mb-0.text-center Incrementan la atenuación de la señal.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema4/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Equipos mal conectados
                p.mb-0.text-center Afectan la continuidad operativa de la red.
        Separador
        #t_4_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.5 Parámetros técnicos de medios guiados
        p.mb-5 El desempeño de los medios guiados depende de parámetros técnicos específicos relacionados con distancia, atenuación y capacidad de transmisión. A continuación, se sintetizan los valores de referencia más relevantes.
    .bg-1
      .px-5
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 2.
              span Parámetros técnicos de medios guiados
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Medio
                    th.ajuste-border-tabla.texto-left Distancia máxima
                    th.ajuste-border-tabla.texto-left Velocidad
                    th.texto-left Uso recomendado
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Categoría 5e]
                    td.ajuste-border-tabla.texto-left 100 m
                    td.ajuste-border-tabla.texto-left 1 Gbps
                    td.texto-left Redes de oficina.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Categoría 6A]
                    td.ajuste-border-tabla.texto-left 100 m
                    td.ajuste-border-tabla.texto-left 10 Gbps
                    td.texto-left Entornos de alta densidad.
                  tr
                    td.ajuste-border-tabla.texto-left #[b Fibra multimodo]
                    td.ajuste-border-tabla.texto-left 550 m
                    td.ajuste-border-tabla.texto-left 10 Gbps
                    td.texto-left #[i Backbone] interno.
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Fibra monomodo]
                    td.ajuste-border-tabla.texto-left Hasta 40 km
                    td.ajuste-border-tabla.texto-left 10+ Gbps
                    td.texto-left Enlaces WAN.
        p.mb-0 Otros parámetros técnicos relevantes incluyen la impedancia típica de 100 ohmios en cable de par trenzado y valores aproximados de atenuación como 22 dB por cada 100 metros en cable Categoría 6. En fibra óptica, la atenuación típica corresponde aproximadamente a 0.35 dB/km en enlaces monomodo y 3 dB/km en enlaces multimodo.
        Separador
        #t_4_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 4.6 Modelo TCP/IP y funcionamiento de protocolos
        p.mb-5 Los protocolos de comunicación establecen las reglas que permiten el intercambio de información entre dispositivos dentro de una red. Sin la existencia de protocolos definidos, la transmisión de datos sería desorganizada e incompatible entre equipos de distintos fabricantes. Durante la comprobación de conectividad, es indispensable verificar que los protocolos y los servicios de infraestructura operen correctamente, debido a que una falla en estos puede impedir la comunicación incluso cuando el medio físico se encuentra en buen estado. A continuación, se presenta la organización funcional del modelo TCP/IP y su relación con el diagnóstico técnico de la conectividad.
    .row.align-items-center.mb-5
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema4/img12.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Capa de acceso a la red").ajuste-cajaAcordion
            p.mb-3 Gestiona la transmisión física de los datos y el acceso al medio de comunicación. En la validación técnica pueden presentarse fallas asociadas a daños en el cableado, problemas en interfaces de red o desconexiones físicas.
          .row(titulo="Capa de Internet").ajuste-cajaAcordion
            p.mb-3 Permite el direccionamiento lógico y el enrutamiento de los paquetes entre redes. Durante el diagnóstico pueden identificarse errores de configuración IP, rutas incorrectas o fallas en el proceso de encaminamiento.
          .row(titulo="Capa de transporte").ajuste-cajaAcordion
            p.mb-3 Garantiza la comunicación entre aplicaciones mediante mecanismos de control de errores, segmentación y gestión de sesiones. Las fallas pueden manifestarse como interrupciones en la comunicación, pérdida de segmentos o degradación del rendimiento.
          .row(titulo="Capa de aplicación").ajuste-cajaAcordion
            p.mb-3 Facilita la interacción de los servicios de red con el usuario final, permitiendo el funcionamiento de protocolos como HTTP, FTP o DNS. En la comprobación técnica pueden detectarse servicios inactivos, configuraciones incorrectas o fallas en la disponibilidad de aplicaciones.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Funcionamiento de protocolos
    p.mb-5 Los protocolos operan en diferentes capas del modelo TCP/IP y permiten el direccionamiento, la entrega confiable de datos y el diagnóstico de la conectividad.
    .row.justify-content-center.mb-0
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="<em>Internet Protocol (IP)</em>").ajuste-cajaAcordion
            p.mb-3 Se encarga del direccionamiento lógico y del enrutamiento de paquetes dentro de la red. Cada dispositivo debe contar con una dirección IP única para garantizar la comunicación. Durante la comprobación técnica, se deben validar la dirección IP asignada para confirmar la identificación del equipo, la máscara de subred para determinar el alcance de la red local, la puerta de enlace para permitir el acceso a redes externas y la configuración de rutas para asegurar el encaminamiento adecuado.
          .row(titulo="<em>Transmission Control Protocol (TCP)</em>").ajuste-cajaAcordion
            p.mb-3 Garantiza la entrega confiable de los datos mediante confirmaciones de recepción y mecanismos de control de errores. Problemas como retransmisiones frecuentes pueden generar disminución del rendimiento, la latencia elevada puede incrementar el tiempo de respuesta y las interrupciones de sesión pueden afectar el funcionamiento de aplicaciones o servicios.
          .row(titulo="<em>User Datagram Protocol (UDP)</em>").ajuste-cajaAcordion
            p.mb-3 Permite la transmisión de datos sin confirmación de recepción, priorizando la velocidad sobre la confiabilidad. Es utilizado en servicios como transmisión de video o #[i Voice over IP (VoIP)]. Durante la validación técnica, se debe considerar que este protocolo no reporta la pérdida de paquetes de la misma manera que TCP.
          .row(titulo="<em>Internet Control Message Protocol (ICMP)</em>").ajuste-cajaAcordion
            p.mb-3 Permite el envío de mensajes de diagnóstico y notificación de errores en la red. Constituye la base de herramientas de comprobación de conectividad como ping, que permite verificar la comunicación básica entre dispositivos, y traceroute, que facilita la identificación de la ruta seguida por los paquetes.
          .row(titulo="Puertos de comunicación más utilizados").ajuste-cajaAcordion
            p.mb-3 La asignación de puertos permite identificar servicios específicos dentro de la red. Entre los más comunes se encuentran el puerto 53 para #[i Domain Name System (DNS)] en la resolución de nombres, los puertos 67 y 68 para #[i Dynamic Host Configuration Protocol (DHCP)] en la asignación automática de direcciones IP, el puerto 80 para #[i Hypertext Transfer Protocol (HTTP)] en el acceso a servicios web, el puerto 443 para #[i Hypertext Transfer Protocol Secure (HTTPS)] en el acceso seguro, el puerto 21 para #[i File Transfer Protocol (FTP)] en la transferencia de archivos y el puerto 25 para #[i Simple Mail Transfer Protocol (SMTP)] en el envío de correo electrónico.
    Separador
    #t_4_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 4.7 Servicios de infraestructura y verificación operativa
    p.mb-5 Los servicios de infraestructura permiten el funcionamiento adecuado de la red y facilitan la obtención automática de configuraciones, la resolución de nombres y el acceso a recursos externos.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Servicio Dynamic Host Configuration Protocol (DHCP)]
                p.mb-0 Permite asignar automáticamente direcciones IP a los dispositivos conectados a la red. Durante la comprobación técnica, se debe validar el estado del servidor DHCP para confirmar la disponibilidad del servicio, el rango de direcciones disponibles para garantizar la capacidad de asignación, el tiempo de concesión para verificar los parámetros configurados y la asignación correcta a los dispositivos para confirmar la obtención de una dirección IP válida. Una falla en este servicio puede impedir la comunicación en la red.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img13.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 #[i Servicio Domain Name System (DNS)]
                p.mb-0 Permite traducir nombres de dominio en direcciones IP. Para validar su funcionamiento, se debe verificar la respuesta a consultas realizadas al servidor, revisar la configuración de los servidores definidos y analizar la resolución interna y externa para confirmar el acceso a recursos locales y remotos. Un error en este servicio puede impedir el acceso a aplicaciones o plataformas aun cuando exista conectividad IP.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img14.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Servicio Proxy
                p.mb-0 Actúa como intermediario entre los dispositivos internos y la red externa. Su correcta configuración permite controlar el acceso a Internet y registrar el tráfico de red. En la comprobación técnica se debe validar la configuración general del servicio, la autenticación de usuarios para asegurar el control de acceso, las reglas de navegación establecidas y el registro del tráfico para facilitar procesos de auditoría y monitoreo. Una configuración incorrecta puede limitar o bloquear el acceso a recursos externos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img15.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Verificación operativa de servicios
                p.mb-0 La comprobación de los servicios de red requiere un procedimiento estructurado que permita identificar el origen de posibles fallas. Este proceso incluye validar la conectividad IP básica para confirmar la comunicación inicial, verificar el acceso a la puerta de enlace para determinar la salida hacia redes externas, probar la resolución de nombres para confirmar el funcionamiento del servicio DNS, validar el acceso a aplicaciones para identificar fallas en niveles superiores y revisar los registros del sistema con el fin de detectar eventos o errores operativos.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema4/img16.png', alt='' style="max-width: 500px").m-auto
    .caja-tema4.mb-0(data-aos="flip-up")
      .row.align-items-center
        .col-xl.col-md-10.order-2.order-lg-1
          p.mb-0 Las fallas de conectividad pueden originarse en diferentes niveles de la infraestructura de red. Entre las causas más comunes se encuentran problemas de direccionamiento IP, servicios DHCP inactivos, errores en resolución DNS, rutas mal configuradas o restricciones aplicadas por firewalls. El análisis estructurado por capas permite aislar la causa raíz del problema y documentar adecuadamente el hallazgo conforme a los procedimientos técnicos establecidos.
        .col-xl-auto.col-md-2.order-1.order-lg-2.mb-3.mb-lg-0(data-aos="fade-left")
          figure
            img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
</template>

<script>
export default {
  name: 'Tema4',
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
