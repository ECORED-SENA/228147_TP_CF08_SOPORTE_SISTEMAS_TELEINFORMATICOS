<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Redes de datos
    p.mb-5 Las redes de datos permiten la interconexión de dispositivos con el propósito de compartir información, recursos y servicios. Su correcta operación depende de una infraestructura física y lógica que garantice comunicación eficiente, segura y estable. Comprender su estructura resulta fundamental durante la comprobación de conectividad, ya que facilita la identificación de fallas y la validación del estado operativo de la infraestructura.
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Conceptos generales
    p.mb-5 A continuación, se presenta un video sobre las redes de datos, sus funciones operativas, características técnicas y beneficios en el entorno organizacional.
    figure(data-aos="zoom-in").mb-0
      .video.mb-1
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Tj8ibpl5fTA?si=ZxtoIRuV9ufxjd0O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption(data-aos="zoom-in") #[b Video]. Redes de datos: funciones, arquitectura y validación técnica.
    Separador
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Redes LAN
    p.mb-5 Una Red de Área Local permite interconectar dispositivos dentro de un espacio geográfico reducido, como una oficina, un edificio o un campus. Este tipo de red facilita la comunicación interna y el uso compartido de recursos tecnológicos, lo cual favorece la eficiencia operativa y la administración centralizada. A continuación, se presentan sus principales características técnicas.
    .row.justify-content-center.mb-5
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Velocidad de transmisión
          p.mb-0.text-center Alto desempeño en el intercambio de datos.
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Tecnología predominante
          p.mb-0.text-center Uso del estándar Ethernet (IEEE 802.3).
      .col-xl-3.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Cobertura
          p.mb-0.text-center Distancias limitadas dentro de espacios definidos.
      .col-xl-3.col-md-9(data-aos="zoom-in")
        .caja-tema1.h-100
          h4.mb-0.text-center Administración
          p.mb-0.text-center Control interno por parte de la organización.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1-3.ajuste-color-3.mb-4.mb-lg-0(data-aos="fade-right")
          p Las redes LAN suelen implementar topologías en estrella utilizando #[b #[i switches]] como dispositivos centrales. Durante la comprobación de conectividad, se deben validar diversos aspectos operativos relacionados con la infraestructura.
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Estado de puertos del #[i switch]]. Confirmar la conectividad física y lógica de los enlaces.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Integridad del cableado estructurado]. Garantizar continuidad y calidad de la transmisión.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Configuración IP]. Asegurar coherencia con el esquema de direccionamiento.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Funcionamiento de #[i Virtual Local Area Network (VLAN)]]. Validar la segmentación lógica del tráfico.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='').m-auto
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Diseño de redes LAN
    p.mb-5 El diseño de una red LAN considera factores técnicos y operativos que inciden directamente en su desempeño. Entre los aspectos más relevantes se encuentran los siguientes elementos.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img2.png', alt='').m-auto
      .col-xl
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Distribución física del espacio]. Determina la ubicación de equipos y trayectos de cableado.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Número de dispositivos]. Influye en la capacidad de conmutación requerida.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Segmentación del tráfico]. Permite mejorar seguridad y rendimiento.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Requerimientos de ancho de banda]. Define la tecnología y velocidad necesarias.
        .row.align-items-center
          .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='').m-auto
          .col-xl
            p.mb-0 Durante la comprobación técnica, es indispensable verificar que el diseño implementado coincida con el plano físico y lógico de la red, garantizando coherencia entre la documentación y la infraestructura instalada.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Equipos de conectividad en redes LAN
    .bg-2
      .px-5
        p.mb-5 La operación de una red LAN depende del funcionamiento adecuado de diferentes dispositivos de interconexión. A continuación, se sintetizan los equipos principales y su función general.
        SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img4.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text #[i Switches] de acceso
            p.mb-0.text-center Permiten la conexión directa de los dispositivos finales.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text #[i Switches] de distribución
            p.mb-0.text-center Gestionan el tráfico entre segmentos de red.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text #[i Routers]
            p.mb-0.text-center Interconectan redes diferentes y gestionan el direccionamiento.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Puntos de acceso inalámbricos
            p.mb-0.text-center Proveen conectividad a dispositivos móviles.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema3/img8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Servidores
            p.mb-0.text-center Ofrecen servicios de red y almacenamiento de información.
        p.mb-0 Cada equipo debe evaluarse durante la comprobación en función de su estado operativo, consumo de recursos, coherencia de configuración y actualización del #[i firmware].
        Separador
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Instalación y configuración básica de equipos de red
    .bg-1
      .px-5
        p.mb-5 La instalación de equipos de comunicación constituye una fase crítica dentro de la implementación de redes de datos. Los dispositivos deben ubicarse y configurarse conforme a las recomendaciones del fabricante y a los estándares de infraestructura de telecomunicaciones, con el fin de garantizar seguridad, estabilidad y continuidad del servicio. El proceso general de instalación contempla las siguientes actividades: 
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img9.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Ubicación en rack de comunicaciones
                p.mb-0.text-center Permite organización, ventilación y acceso adecuado a los equipos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Conexión a la fuente de energía
                p.mb-0.text-center Garantiza el suministro eléctrico estable.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Conexión de interfaces de red
                p.mb-0.text-center Integración mediante cableado estructurado o fibra óptica.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Verificación de indicadores LED
                p.mb-0.text-center Confirmación del estado de enlace y actividad.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img10.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Acceso al equipo
                p.mb-0.text-center Configuración inicial mediante consola o interfaz #[i web].
        p.mb-5 A continuación, se presentan ejemplos básicos de configuración de dispositivos de red, incluyendo comandos utilizados para establecer la conectividad inicial y la administración técnica.  
    .row.justify-content-center
      .col-xl-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
          .row(titulo="Configuración básica de <em>router</em>").ajuste-cajaAcordion
            p Los routers permiten interconectar diferentes redes y gestionar el direccionamiento del tráfico. Un ejemplo de configuración en equipos Cisco es el siguiente:
            .code-window.ajuste___pre_1.mb-3
              pre
                code.
                  enable
                  configure terminal
                  hostname Router1
                  interface gigabitEthernet0/0
                  ip address 192.168.1.1 255.255.255.0
                  no shutdown
                  exit
            p.mb-3 Esta configuración permite asignar una dirección IP a la interfaz y habilitarla para la comunicación dentro de la red.
          .row(titulo="Configuración básica de <em>switch</em>").ajuste-cajaAcordion
            p Los #[i switches] permiten la interconexión de dispositivos dentro de una red LAN y facilitan la administración del tráfico local. Un ejemplo de configuración inicial es el siguiente:
            .code-window.ajuste___pre_1.mb-3
              pre
                code.
                  enable
                  configure terminal
                  hostname Switch1
                  interface vlan 1
                  ip address 192.168.1.2 255.255.255.0
                  no shutdown
            p.mb-3 Esta configuración posibilita la asignación de una dirección IP para la gestión remota del dispositivo.
          .row(titulo="Configuración de punto de acceso inalámbrico").ajuste-cajaAcordion
            p Un punto de acceso inalámbrico requiere definir parámetros técnicos que garanticen conectividad segura y estable. Entre los principales elementos se encuentran:
            ul.fa-ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b SSID]: identificación de la red inalámbrica.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Canal inalámbrico]: optimización de cobertura y reducción de interferencias.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Seguridad (WPA2 o WPA3)]: protección frente a accesos no autorizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dirección IP]: integración del dispositivo dentro del esquema de red.
            p.mb-3 La correcta configuración de estos parámetros contribuye a garantizar la continuidad del servicio y facilita los procesos de comprobación técnica posteriores.
    Separador
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.4 Configuración de VLAN en redes LAN
    p.mb-5 Las #[i Virtual Local Area Network (VLAN)] permiten segmentar una red física en múltiples redes lógicas, lo cual contribuye a mejorar la seguridad, la administración del tráfico y el rendimiento general de la infraestructura. Esta segmentación facilita el control del flujo de información y reduce la propagación innecesaria de tráfico dentro de la red. A continuación, se presentan los principales beneficios de la implementación de VLAN.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl
        .caja-tema1-3.ajuste-color-1.mb-4.mb-lg-0(data-aos="fade-right")
          ul.fa-ul.estilo___ul.mb-0
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Reducción de dominios de broadcast]. Disminuye la congestión y optimiza el desempeño de la red.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Mayor seguridad]. Permite aislar segmentos y restringir accesos no autorizados.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Segmentación organizacional]. Facilita la separación de departamentos o servicios.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Control del tráfico]. Mejora la administración del ancho de banda disponible.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img15.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-5
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema3/img16.png', alt='').m-auto
      .col-xl
        p Ejemplo de configuración básica de VLAN en un #[i switch]:
        .code-window(data-aos="fade-left")
          pre
            code.
              enable  
              configure terminal  
              vlan 10  
              name Administracion  
              exit  

              vlan 20  
              name Ventas  
              exit  
              
              Asignación de puertos a VLAN:
              
              interface fastEthernet0/1  
              switchport mode access  
              switchport access vlan 10  




    
    .bg-1
      .px-5
        .caja-tema2.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
          .col
            h3 Administración de redes LAN
        p.mb-5 La administración de redes comprende actividades orientadas al monitoreo, mantenimiento y optimización del funcionamiento de la infraestructura. Estas acciones permiten garantizar la continuidad del servicio y el uso eficiente de los recursos tecnológicos. Las principales tareas se sintetizan a continuación: 
        .row.align-items-center.mb-5
          .col-xl-4(data-aos="fade-right")
            figure.d-none.d-xl-block
              img(src='@/assets/curso/tema3/img17.png', alt='' style="max-width: 350px").m-auto
          .col-xl-8(data-aos="fade-left")
            SlyderF(columnas="col-lg-6 col-xl-6")
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img18.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Monitoreo del tráfico de red
                p.mb-0.text-center Permite detectar congestión o comportamientos anómalos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img19.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Actualización de #[i firmware]
                p.mb-0.text-center Mejora estabilidad, compatibilidad y seguridad de los dispositivos.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img20.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Gestión de usuarios y permisos
                p.mb-0.text-center Controla el acceso a recursos y servicios.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img21.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Control de acceso a la red
                p.mb-0.text-center Restringe conexiones no autorizadas.
              .tarjeta.color-acento-botones.p-4
                .row.justify-content-center.mb-3
                  .col-8
                    img(src='@/assets/curso/tema3/img22.svg' style="max-width: 90px").m-auto
                h4.mb-3.estilo-text Registro de eventos
                p.mb-0.text-center Facilita auditorías y diagnóstico de fallas.
        p.mb-5 Entre las herramientas utilizadas se encuentran las siguientes.
    .row.justify-content-center.mb-0
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        .caja-tema3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img23.jpg', alt="" ).m-auto
            h4.text-center #[i Simple Network Management Protocol (SNMP)]
            p.mb-0.text-center Permite supervisar dispositivos de red.
      .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
        .caja-tema3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img24.jpg', alt="" ).m-auto
            h4.text-center Sistemas de monitoreo como PRTG o Nagios
            p.mb-0.text-center Facilitan el control del desempeño y la disponibilidad.
      .col-xl-4.col-md-9(data-aos="fade-left")
        .caja-tema3.h-100
          .row.justify-content-center.mb-3
            .col-12
              figure.mb-4
                img(src='@/assets/curso/tema3/img25.jpg', alt="" ).m-auto
            h4.text-center Consolas de administración centralizada
            p.mb-0.text-center Integran la gestión de múltiples dispositivos.
    .bg-1
      .px-5
        Separador
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Seguridad en redes LAN
        p La seguridad en redes LAN busca proteger la infraestructura frente a accesos no autorizados y amenazas internas o externas. La implementación de mecanismos de control permite preservar la confidencialidad, integridad y disponibilidad de la información. A continuación, se presentan los mecanismos más utilizados.
        .row.justify-content-center.align-items-center.mb-0
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Autenticación mediante IEEE 802.1X]. Controla el acceso de dispositivos a la red.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Implementación de VLAN]. Permite segmentar el tráfico y aislar servicios.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Listas de control de acceso #[i (Access Control List – ACL)]]. Filtran el tráfico según reglas definidas.
              li.mb-2
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Monitoreo del tráfico de red]. Facilita la detección de incidentes.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Desactivación de puertos no utilizados]. Reduce riesgos de intrusión.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img26.png', alt='').m-auto
        Separador
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Equipos activos de interconexión
        p.mb-5 Los equipos activos de interconexión permiten administrar el tráfico de red, aplicar políticas de seguridad y optimizar el uso del ancho de banda. Estos dispositivos operan en diferentes capas del modelo #[i Open Systems Interconnection (OSI)] y resultan esenciales para garantizar la conectividad, el rendimiento y la disponibilidad de los servicios. Entre sus funciones principales se encuentran la segmentación de redes, la asignación automática de direcciones IP, el control del acceso remoto y la priorización del tráfico. A continuación, se presentan los principales servicios y configuraciones utilizadas para optimizar la conectividad, la administración y el rendimiento de la red.
    .row.align-items-center.mb-0
      .col-xl-auto(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema3/img27.png", alt="" ).m-auto
      .col-xl
        AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
          .row(titulo="Traducción de direcciones de red <em>(Network Address Translation – NAT)</em>").ajuste-cajaAcordion
            p Permite traducir direcciones IP privadas de la red interna a una dirección IP pública para el acceso a Internet. Esto posibilita que múltiples dispositivos compartan una única dirección pública, contribuye a conservar direcciones IPv4 y mejora la seguridad al ocultar la estructura interna de la red. 
            .caja-tema3-1.mb-3 
              p.mb-0 Ejemplo de configuración: 
              p.mb-0 #[b ip nat inside source list 1 interface GigabitEthernet0/1 overload]
          .row(titulo="Asignación dinámica de direcciones <em>(Dynamic Host Configuration Protocol – DHCP)</em>").ajuste-cajaAcordion
            p Permite asignar automáticamente direcciones IP a los dispositivos conectados a la red, lo cual simplifica la administración, evita conflictos por duplicidad de direcciones y facilita la gestión en redes de mayor tamaño. 
            .caja-tema3-1.mb-3
              p.mb-0 Ejemplo de configuración: 
              p.mb-0 #[b ip dhcp pool RED_LAN / network 192.168.1.0 255.255.255.0 / default-router 192.168.1.1 / dns-server 8.8.8.8]
              p.mb-0 #[b ]
          .row(titulo="Administración remota segura <em>(Secure Shell – SSH)</em>").ajuste-cajaAcordion
            p Permite administrar dispositivos de red mediante una conexión cifrada, evitando la necesidad de acceso físico al equipo y fortaleciendo la seguridad en la gestión. 
            .caja-tema3-1.mb-3 
              p.mb-0 Ejemplo de configuración: 
              p.mb-0 #[b ip domain-name empresa.local / crypto key generate rsa / line vty 0 4 / transport input ssh / login local]
          .row(titulo="Sistema de nombres de dominio <em>(Domain Name System – DNS)</em>").ajuste-cajaAcordion
            p Permite traducir nombres de dominio en direcciones IP, facilitando el acceso a recursos de red mediante identificadores comprensibles. Durante la comprobación técnica se debe validar la respuesta del servidor DNS.
            .caja-tema3-1.mb-3 
              p.mb-0 Ejemplo: 
              p.mb-0 #[b www.google.com → 142.250.184.78]
          .row(titulo="Calidad de servicio <em>(Quality of Service – QoS)</em>").ajuste-cajaAcordion
            p.mb-3 Permite priorizar determinados tipos de tráfico dentro de la red, garantizando el ancho de banda requerido por aplicaciones críticas como voz sobre IP, videoconferencias o servicios empresariales. Esta priorización contribuye a mantener la estabilidad y continuidad del servicio.
          .row(titulo="Gestión del ancho de banda").ajuste-cajaAcordion
            p.mb-3 Permite controlar el uso del enlace de red para evitar saturación y garantizar acceso adecuado a los recursos disponibles. Incluye técnicas como limitación de velocidad por usuario, priorización de aplicaciones críticas y balanceo de carga entre enlaces, lo cual optimiza el rendimiento general y la disponibilidad del servicio.
    .bg-1
      .px-5
        Separador
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Redes WAN
        p.mb-3 Una Red de Área Amplia permite interconectar dispositivos y redes ubicadas en espacios geográficos extensos, como ciudades o países. Este tipo de red facilita la comunicación entre múltiples sedes organizacionales y el acceso a servicios externos, lo cual resulta fundamental para la operación empresarial. A continuación, se presentan sus características principales.
        .row.justify-content-center.align-items-center.mb-5
          .col-xl.mb-4.mb-lg-0
            ul.fa-ul.estilo___ul.mb-3
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Uso de enlaces dedicados o servicios de proveedores]. Permite establecer comunicación entre ubicaciones remotas.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Mayor latencia frente a redes LAN]. Influye en el tiempo de respuesta de las aplicaciones.
              li.mb-1
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Interconexión de múltiples sedes]. Facilita la integración operativa de la organización.
              li.mb-0
                span.fa-li
                  i.fas.fa-check-circle
                | #[b Dependencia de infraestructura externa]. Requiere disponibilidad del proveedor de servicios.
            .row.align-items-center
              .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/tema3/img3.svg', alt='').m-auto
              .col-xl
                p.mb-0 Durante la comprobación de conectividad en redes WAN es necesario validar diversos elementos operativos.
          .col-xl-auto.col-md-9(data-aos="fade-left")
            figure
              img(src='@/assets/curso/tema3/img28.png', alt='').m-auto
        p.mb-5 A continuación, se presentan los principales elementos relacionados con el diseño, los estándares y los equipos utilizados en redes WAN.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema3/img29.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Protocolos en redes WAN
                p.mb-0 Las redes WAN emplean protocolos específicos para la transmisión de datos y el enrutamiento entre redes. Entre los más utilizados se encuentran #[i Point-to-Point Protocol (PPP)], que establece enlaces directos entre nodos; #[i Multiprotocol Label Switching (MPLS)], que optimiza el encaminamiento mediante el uso de etiquetas; #[i Internet Protocol Security (IPsec)], que permite la creación de túneles seguros cifrados; #[i Border Gateway Protocol (BGP)], encargado de gestionar el enrutamiento entre sistemas autónomos; y #[i Open Shortest Path First (OSPF)], utilizado para el enrutamiento dinámico en redes extensas. En el diagnóstico técnico se debe revisar la configuración de rutas y la estabilidad del enlace.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema3/img30.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Equipos de conectividad en redes WAN
                p.mb-0 El funcionamiento de una red WAN depende de dispositivos como los routers perimetrales, encargados de interconectar la red interna con redes externas; los firewalls, que aplican políticas de seguridad y controlan el tráfico; los equipos de acceso del proveedor, que permiten la conexión física al servicio contratado; y los dispositivos de balanceo de carga, que distribuyen el tráfico entre múltiples enlaces.
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                figure
                  img(src='@/assets/curso/tema3/img31.png', alt='' style="max-width: 500px").m-auto
              .col-xl-6
                h4 Indicadores operativos para comprobación técnica
                p.mb-0 Durante la verificación del funcionamiento de la red se deben analizar indicadores como el uso de CPU para determinar el nivel de procesamiento del equipo, el estado de las interfaces para comprobar la disponibilidad del enlace, los errores de transmisión que pueden indicar fallas físicas o lógicas, y las estadísticas de tráfico que permiten evaluar el rendimiento general de la infraestructura.
    Separador
    #t_3_8.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.8 Relación entre redes LAN y WAN en la comprobación de conectividad
    p En entornos empresariales, la red LAN depende de la red WAN para acceder a servicios externos. Una falla en el enlace WAN puede interpretarse como un problema interno si no se realiza un diagnóstico estructurado. Por esta razón, el procedimiento técnico debe seguir un orden lógico de verificación.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Verificar conectividad local]. Confirmar funcionamiento de la red LAN.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Validar puerta de enlace]. Asegurar comunicación con el #[i router] perimetral.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Comprobar acceso a red externa]. Determinar disponibilidad del enlace WAN.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Analizar resolución de nombres]. Verificar operación del servicio DNS.
        .caja-tema1-1(data-aos="flip-up")
          p.mb-0 Este enfoque permite aislar fallas con precisión y establecer si el problema se origina en la red interna o en el enlace externo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema3/img32.png', alt='').m-auto
</template>

<script>
export default {
  name: 'Tema3',
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
