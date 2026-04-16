<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Planos de redes y análisis estructural
    p.mb-5 La comprobación de la conectividad requiere comprender previamente la estructura de la red. Los planos constituyen la representación de la infraestructura y permiten reconocer la interconexión de los dispositivos, los puntos críticos y los segmentos con posibles fallas.
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La interpretación adecuada de un plano facilita la identificación de rutas de comunicación, equipos activos, enlaces físicos y segmentaciones lógicas. Este análisis es esencial para ejecutar pruebas de conectividad de manera organizada y eficiente, en coherencia con los lineamientos de producción de contenidos educativos digitales establecidas institucionalmente.
    .bg-1
      .px-5
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Simbología universal
        p.mb-5 La simbología universal en los planos de red corresponde a las representaciones empleadas para identificar dispositivos, enlaces y elementos estructurales dentro de una infraestructura de telecomunicaciones. Su uso permite estandarizar la documentación técnica y facilita la comprensión del diseño de la red. A continuación, se presentan los símbolos más utilizados y su significado funcional.
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema2/img2.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img3.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Router]
                p.mb-0.text-center Indica la interconexión entre diferentes redes y el direccionamiento del tráfico IP.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img4.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Switch]
                p.mb-0.text-center Representa el equipo encargado de la conmutación de datos dentro de una red local.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img5.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Servidor
                p.mb-0.text-center Señala el dispositivo que provee servicios como almacenamiento, autenticación, bases de datos o aplicaciones.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img6.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Estación de trabajo
                p.mb-0.text-center Identifica un equipo final conectado a la red, como un PC o cliente.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img7.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Access Point]
                p.mb-0.text-center Representa la provisión de conectividad inalámbrica dentro de la infraestructura.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img8.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Firewall]
                p.mb-0.text-center Indica el dispositivo responsable de filtrar y proteger el tráfico de red.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img9.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Nube (Internet o WAN)
                p.mb-0.text-center Simboliza la conexión con redes externas o servicios de Internet.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Cableado estructurado
                p.mb-0.text-center Representa enlaces físicos mediante cable UTP o fibra óptica.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img11.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Enlace inalámbrico
                p.mb-0.text-center Indica comunicación sin medio físico mediante ondas de radio.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img12.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Rack] de comunicaciones
                p.mb-0.text-center Señala el gabinete donde se alojan equipos activos y pasivos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema2/img13.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text #[i Patch] Panel
                p.mb-0.text-center Representa el punto de distribución del cableado estructurado.
        p.mb-0 La identificación correcta de estos símbolos permite interpretar la estructura de la red, analizar rutas de comunicación y localizar puntos críticos durante la comprobación de conectividad. Además, facilita la actualización del inventario tecnológico y la documentación técnica conforme a la normativa vigente.
    Separador
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos de planos
    p.mb-5 Los planos de red pueden clasificarse según el contexto espacial y funcional en el que se emplean. El plano geográfico representa la distribución de la red en relación con un espacio físico amplio, como un edificio, un campus o una ciudad, lo cual resulta especialmente relevante en redes WAN o infraestructuras distribuidas.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl
        .caja-tema1-3.ajuste-color-1.mb-4.mb-lg-0(data-aos="fade-right")
          p Entre los principales aportes de este tipo de plano se encuentran los siguientes aspectos:
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Identificación de enlaces entre sedes.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | Análisis de cobertura inalámbrica.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | Evaluación de distancias y niveles de redundancia.
          p.mb-0 Este tipo de representación permite planificar la conectividad considerando variables físicas y operativas que influyen en el desempeño global de la red.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img14.png', alt='').m-auto
    Separador
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Base geográfica
    p.mb-5 La base geográfica corresponde al contexto espacial donde opera la red. Factores como la distancia, los obstáculos físicos, las interferencias y la distribución arquitectónica inciden directamente en la calidad de la conectividad. En redes inalámbricas, la cobertura depende de múltiples variables técnicas, las cuales se sintetizan a continuación.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Potencia de transmisión
          p.mb-0.text-center Determina el alcance efectivo de la señal emitida.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Tipo de antena
          p.mb-0.text-center Define el patrón de propagación y la dirección de la señal.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Frecuencia utilizada
          p.mb-0.text-center Incide en la penetración de obstáculos y el nivel de interferencia.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Interferencias electromagnéticas
          p.mb-0.text-center Pueden degradar la calidad y estabilidad de la comunicación.
    .bg-2
      .px-5
        .row.justify-content-center.text-center.mb-5
          .col-xl-9
              p.mb-0 En redes cableadas, la cobertura se relaciona con condiciones físicas y técnicas del medio de transmisión, como se describe a continuación.
        .row.justify-content-center.mb-5
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema2/img16.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Categoría del cable
                p.mb-0.text-center Define la capacidad de transmisión y el ancho de banda soportado.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-right")
                    img(src='@/assets/curso/tema2/img17.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Distancia máxima permitida
                p.mb-0.text-center Establece el límite operativo sin degradación significativa de la señal.
          .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema2/img18.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Calidad de conectores
                p.mb-0.text-center Garantiza continuidad eléctrica y reducción de pérdidas.
          .col-xl-3.col-md-9(data-aos="zoom-in")
            .caja-tema1-2.h-100
              .row.justify-content-center.mb-3
                .col-7
                  figure.mb-4(data-aos="fade-left")
                    img(src='@/assets/curso/tema2/img19.svg', alt="" style="max-width: 90px").m-auto
                h4.text-center Certificación del enlace
                p.mb-0.text-center Confirma el cumplimiento de estándares técnicos de instalación.
        .row.justify-content-center.mb-0
          .col-xl-9
            .caja-tema1-1(data-aos="flip-up")
              .row.align-items-center
                .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
                  figure
                    img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
                .col-xl.col-md-10
                    p.mb-0 La comprobación técnica debe considerar estos factores para determinar si la red satisface los requerimientos de alcance, estabilidad y desempeño.
        Separador
        #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.4 Interpretación técnica
    p La interpretación técnica de un plano implica analizar de manera sistemática la infraestructura representada, con el fin de reconocer el trayecto de la comunicación y los elementos que intervienen en ella. Este proceso permite identificar el punto inicial y final de transmisión, los equipos intermedios, los segmentos críticos, los posibles puntos únicos de falla y los mecanismos de redundancia existentes. Para realizar esta interpretación durante la comprobación de conectividad, se recomienda aplicar el siguiente procedimiento estructurado:
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | Identificar el dispositivo de origen.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | Seguir el trayecto del enlace hasta el destino.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | Verificar el funcionamiento de cada equipo intermedio.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | Comparar el plano físico con la configuración real instalada.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | Confirmar la coherencia con el plano lógico de la red.
        .caja-tema1-1(data-aos="flip-up")
          p.mb-0 Este análisis sistemático contribuye a reducir el tiempo de diagnóstico, optimizar la localización de fallas y garantizar una comprobación técnica organizada y eficiente.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img21.png', alt='').m-auto
    Separador
    #t_2_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Topologías de red
    p.mb-5 La topología de red define la forma en que los dispositivos se interconectan dentro de una infraestructura de telecomunicaciones. Comprender esta estructura resulta fundamental durante la comprobación de conectividad, ya que permite identificar el flujo de la información, los puntos críticos y los dispositivos que pueden incidir en la operación general del sistema. Asimismo, el análisis de la topología facilita la detección de fallas físicas y lógicas, así como la identificación de puntos únicos de falla o segmentos con redundancia. La forma de interconexión influye directamente en la disponibilidad, el rendimiento y la capacidad de recuperación ante incidentes.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Fundamentos
    p.mb-5 La topología puede analizarse desde dos perspectivas complementarias, necesarias para comprender el comportamiento real de la red.
    TabsC.color-acento-contenido.mb-3(data-aos="zoom-in")
      .py-3.py-md-4(titulo="Topología física")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema2/img23.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Topología física
            p.mb-0 Describe la forma en que los dispositivos se conectan mediante cableado o enlaces inalámbricos.
      .py-3.py-md-4(titulo="Topología lógica")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure
              img(src='@/assets/curso/tema2/img24.png', alt="" ).m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Topología lógica
            p.mb-0 Representa la manera en que circulan los datos dentro de la red, independientemente de la disposición física.
    .caja-tema1-1.ajuste-color-2.mb-5(data-aos="flip-up")
      .row.align-items-center
        .col-xl-auto.col-md-2.mb-3.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/tema1/img2.svg', alt='' style="width: 85px").m-auto
        .col-xl.col-md-10
            p.mb-0 Durante la comprobación técnica es indispensable considerar ambas perspectivas, debido a que una red puede presentar diferencias entre su estructura física y su funcionamiento lógico. Por ejemplo, una red con disposición física en estrella puede operar lógicamente como una red en bus cuando los dispositivos comparten el mismo medio de transmisión.
    p.mb-5 A continuación, se presentan las principales topologías de red utilizadas en infraestructuras de datos y su incidencia en el proceso de comprobación de conectividad.
    .bg-slider.mb-5
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Topología en bus
                p.mb-0 Todos los dispositivos se conectan a un único medio de transmisión compartido. La información se desplaza a lo largo del cable principal y cada equipo identifica si el paquete recibido corresponde a su dirección. Se caracteriza por una configuración sencilla basada en un cable troncal, bajo nivel de inversión en infraestructura y alta dependencia de la integridad del medio físico. Durante la comprobación de conectividad, una falla en el cable principal puede afectar toda la red, por lo que el diagnóstico requiere validar la continuidad del enlace y el estado de los terminadores.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 1.
                  span Topología en bus
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img25.png', alt='Ilustración de topología en bus con varios equipos conectados a un único cable troncal compartido. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Topología en estrella
                p.mb-0 Todos los dispositivos se conectan a un equipo central, como un switch o concentrador. Esta organización permite gestionar la red de forma centralizada y facilita el aislamiento de fallas en nodos individuales. Sin embargo, el funcionamiento general depende del dispositivo central. En la comprobación de conectividad, si un nodo presenta fallas solo ese equipo resulta afectado; no obstante, una interrupción en el equipo central puede generar la inoperatividad total de la red.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 2.
                  span Topología en estrella
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img26.png', alt='Ilustración de topología en estrella con múltiples dispositivos enlazados a un switch central.').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Topología de anillo
                p.mb-0 Cada dispositivo se conecta con otros dos formando un circuito cerrado. Los datos circulan de manera ordenada en un solo sentido o en ambos, según el diseño implementado. Esta estructura reduce la probabilidad de colisiones, pero presenta sensibilidad ante interrupciones físicas en el enlace. Durante la comprobación técnica, una falla en cualquier punto del anillo puede afectar la comunicación global, salvo que exista redundancia que permita mantener la continuidad del servicio.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 3.
                  span Topología de anillo
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img27.png', alt='Ilustración de topología en anillo con equipos conectados en circuito cerrado formando una trayectoria continua. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Topología en malla
                p.mb-0 Los dispositivos establecen múltiples interconexiones que generan rutas alternativas para la transmisión de datos. Esta característica incrementa la disponibilidad del servicio y mejora la tolerancia ante fallas, aunque requiere mayor inversión en infraestructura. En la comprobación de conectividad, la redundancia permite mantener la operación incluso si uno de los enlaces presenta fallas, por lo que el diagnóstico debe considerar la evaluación de las diferentes rutas posibles.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 4.
                  span Topología en malla
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img28.png', alt='Ilustración de topología en malla con dispositivos interconectados mediante múltiples enlaces redundantes. ').m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Topología híbrida
                p.mb-0 Integra dos o más estructuras dentro de una misma red. Es frecuente en entornos empresariales donde se combinan segmentos en estrella con enlaces en malla o anillo. En el proceso de comprobación, esta disposición exige analizar cada segmento de forma detallada, ya que una falla puede localizarse en un componente específico sin afectar toda la infraestructura. Este enfoque facilita el diagnóstico técnico y contribuye a garantizar la continuidad operativa mediante la identificación precisa de los puntos críticos.
              .col-xl-6
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 5.
                  span Topología híbrida
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema2/img29.png', alt='Ilustración de topología híbrida con combinación de segmentos en estrella y enlaces adicionales entre nodos. ').m-auto
    .bg-1
      .px-5
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Comparación técnica de topologías
        p.mb-5 El análisis comparativo de las topologías de red permite identificar sus ventajas operativas, limitaciones estructurales y el impacto que pueden generar durante la comprobación de conectividad. A continuación, se presenta una síntesis de los principales criterios técnicos asociados a cada estructura.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 1.
              span Comparación técnica de topologías
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Topología
                    th.ajuste-border-tabla.texto-left Redundancia
                    th.ajuste-border-tabla.texto-left Punto único de falla
                    th.ajuste-border-tabla.texto-left Nivel de disponibilidad
                    th.texto-left Costo
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left #[b Bus]
                    td.ajuste-border-tabla.texto-left Baja
                    td.ajuste-border-tabla.texto-left Cable principal
                    td.ajuste-border-tabla.texto-left Bajo
                    td.texto-left Bajo
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Estrella]
                    td.ajuste-border-tabla.texto-left Media
                    td.ajuste-border-tabla.texto-left #[i Switch] central
                    td.ajuste-border-tabla.texto-left Medio
                    td.texto-left Medio
                  tr
                    td.ajuste-border-tabla.texto-left #[b Anillo]
                    td.ajuste-border-tabla.texto-left Media
                    td.ajuste-border-tabla.texto-left Interrupción física del enlace
                    td.ajuste-border-tabla.texto-left Medio
                    td.texto-left Medio
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b Malla]
                    td.ajuste-border-tabla.texto-left Alta
                    td.ajuste-border-tabla.texto-left No aplica
                    td.ajuste-border-tabla.texto-left Alto
                    td.texto-left Alto
        p.mb-0 Esta comparación facilita la selección de la topología más adecuada según los requerimientos de disponibilidad, inversión y continuidad del servicio dentro de la infraestructura de red.
        Separador
        #t_2_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.6 Caso práctico aplicado
    p El análisis de situaciones reales permite comprender la incidencia de la topología en la operación de la red. En este caso, una empresa con topología en estrella presenta una caída total del servicio como consecuencia de la falla del switch central, lo cual evidencia la dependencia estructural de este dispositivo. Para sintetizar el análisis técnico del escenario descrito, se presenta la siguiente relación.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Situación]. Interrupción total del servicio en una red con topología en estrella.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Diagnóstico]. Existencia de un punto único de falla sin mecanismos de redundancia.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Recomendación técnica].  Implementar un switch de respaldo y configurar el protocolo #[i Spanning Tree Protocol (STP)] para mejorar la disponibilidad.
        .caja-tema1-1(data-aos="flip-up")
          p.mb-0 El estudio de este tipo de casos contribuye a fortalecer la capacidad de diagnóstico y favorece la toma de decisiones orientadas a optimizar la continuidad operativa de la red.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema2/img30.png', alt='').m-auto
</template>

<script>
export default {
  name: 'Tema2',
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
