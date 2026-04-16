<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Direccionamiento IP y herramientas de validación de red
    p.mb-5 El direccionamiento IP es el mecanismo que permite identificar de manera única cada dispositivo dentro de una red. Una configuración incorrecta puede generar fallas de conectividad incluso cuando el medio físico y los protocolos funcionan adecuadamente. Por esta razón, la comprobación técnica debe incluir la validación del direccionamiento lógico conforme a los parámetros establecidos en la orden de trabajo y la normativa técnica vigente.
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Conceptos de direccionamiento IP
    .bg-1
      .px-5
        p.mb-5 Las direcciones Internet Protocol versión 4 (IPv4) se han dividido tradicionalmente en clases según el valor del primer octeto. Esta clasificación permite estimar el tamaño de la red y la cantidad aproximada de dispositivos que pueden conectarse. A continuación, se presenta la clasificación general.
        .row.justify-content-center.mb-5
          .col-xl-10
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 3.
              span Clases de direcciones Internet Protocol (IPv4)
            .tabla-a(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Clase
                    th.ajuste-border-tabla.texto-left Rango del primer octeto
                    th.ajuste-border-tabla.texto-left Máscara por defecto
                    th.texto-left Cantidad aproximada de hosts
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b A]
                    td.ajuste-border-tabla.texto-left 1 – 126
                    td.ajuste-border-tabla.texto-left 255.0.0.0
                    td.texto-left 16 millones
                  tr
                    td.ajuste-border-tabla.texto-left #[b B]
                    td.ajuste-border-tabla.texto-left 128 – 191
                    td.ajuste-border-tabla.texto-left 255.255.0.0
                    td.texto-left 65 mil
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b C]
                    td.ajuste-border-tabla.texto-left 192 – 223
                    td.ajuste-border-tabla.texto-left 255.255.255.0
                    td.texto-left 254
                  tr
                    td.ajuste-border-tabla.texto-left #[b D]
                    td.ajuste-border-tabla.texto-left 224 – 239
                    td.ajuste-border-tabla.texto-left #[i Multicast]
                    td.texto-left No aplica
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left #[b E]
                    td.ajuste-border-tabla.texto-left 240 – 255
                    td.ajuste-border-tabla.texto-left Experimental
                    td.texto-left No aplica
        .row.justify-content-center.align-items-center.mb-0
          .col-xl-7.mb-4.mb-lg-0
            .caja-tema1-1.ajuste-color-5(data-aos="flip-up")
              p.mb-0 Aunque en la actualidad se emplea el direccionamiento sin clase mediante #[i Classless Inter-Domain Routing] (CIDR), el conocimiento de esta clasificación facilita la identificación rápida del tipo de red durante el diagnóstico técnico. También es necesario diferenciar entre direcciones públicas, utilizadas para comunicación en Internet, y direcciones privadas destinadas a uso interno. A continuación, se presentan los rangos privados más utilizados.
          .col-xl-5(data-aos="fade-left")
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 4.
              span Rangos privados de direcciones Internet Protocol (IPv4)
            .tabla-a.ajuste-tabla-1(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Rango privado
                    th.texto-left Prefijo
                tbody
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 10.0.0.0
                    td.texto-left /8
                  tr
                    td.ajuste-border-tabla.texto-left 172.16.0.0
                    td.texto-left /12
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left 192.168.0.0
                    td.texto-left /16
    Separador
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Reglas de validación del direccionamiento IP
    p Durante la configuración y comprobación del direccionamiento IP deben cumplirse ciertos criterios técnicos que garantizan la conectividad adecuada.
    .row.justify-content-center.align-items-center.mb-5
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Dirección IP única por dispositivo]. Evita conflictos de comunicación.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b No asignar direcciones de red o #[i broadcast]]. Garantiza funcionamiento correcto del segmento.
          li.mb-2
            span.fa-li
              i
            | #[b Máscara coherente con el diseño]. Permite segmentación adecuada.
          li.mb-2
            span.fa-li
              i.fas.fa-check-circle
            | #[b Puerta de enlace en el mismo segmento]. Facilita salida hacia otras redes.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Uso de #[i Network Address Translation (NAT)] para direcciones privadas]. Permite acceso a Internet.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img1.png', alt='').m-auto
    .row.justify-content-center.align-items-center.mb-0
      .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/tema5/img2.png', alt='').m-auto
      .col-xl
        .caja-tema1-3.ajuste-color-3(data-aos="fade-left")
          p Durante los procesos de validación se detectan errores comunes que pueden afectar la conectividad.
          ul.fa-ul.estilo___ul.mb-3
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Dirección IP duplicada]. Interrupciones intermitentes o pérdida de conectividad.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Máscara incorrecta]. Comunicación limitada a segmentos equivocados.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b Puerta de enlace inexistente]. Imposibilidad de acceder a redes externas.
            li.mb-1
              span.fa-li
                i.fas.fa-check-circle
              | #[b #[i Domain Name System (DNS)] mal configurado]. Fallas en acceso a servicios por nombre.
            li.mb-0
              span.fa-li
                i.fas.fa-check-circle
              | #[b Configuración fuera del rango #[i Dynamic Host Configuration Protocol (DHCP)]].  Inconsistencias en asignación de direcciones.
          p.mb-0 El incumplimiento de estas reglas puede ocasionar pérdida parcial o total del servicio de red.
    Separador
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.3 Subredes y cálculo de hosts
    p.mb-5 La subdivisión de redes permite organizar la infraestructura en segmentos más pequeños, lo cual contribuye a mejorar la seguridad, el rendimiento y la administración del tráfico. Este proceso se realiza mediante la modificación de la máscara de subred utilizando bits adicionales para crear nuevos segmentos lógicos. A continuación, se presenta un ejemplo práctico de segmentación.
    .row.justify-content-center.mb-0
      .col-xl-10
        .caja-Tema5.mb-4
          .row.align-items-center
            .col-xl-6.mb-4.mb-lg-0
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Parámetros del ejemplo de segmentación de red
              .tabla-a.ajuste-tabla-1(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Parámetro
                      th.texto-left Valor
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Red base
                      td.texto-left 192.168.1.0 /24
                    tr
                      td.ajuste-border-tabla.texto-left Subredes requeridas
                      td.texto-left 4
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Bits adicionales necesarios
                      td.texto-left 2
                    tr
                      td.ajuste-border-tabla.texto-left Nueva máscara
                      td.texto-left /26
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left Equivalente decimal
                      td.texto-left 255.255.255.192
            .col-xl-6
              p Cada subred generada presenta las siguientes características.
              ul.fa-ul.estilo___ul.mb-0
                li.mb-2
                  span.fa-li
                    i.fas.fa-check-circle
                  | Direcciones totales: 64.
                li.mb-0
                  span.fa-li
                    i.fas.fa-check-circle
                  | Direcciones útiles: 62.
        .row.justify-content-center.mb-4
          .col-xl-10.text-center
            .caja-tema1-1(data-aos="flip-up")
              p.mb-0 Las subredes resultantes se distribuyen de la siguiente manera.
        .row.justify-content-center.mb-4
          .col-xl-8
            .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
              h5 Tabla 6.
              span Rangos de direcciones por subred
            .tabla-a.ajuste-tabla-1(data-aos="zoom-in")
              table
                thead
                  tr
                    th.ajuste-border-tabla.texto-left Subred
                    th.texto-left Rango de direcciones
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left Subred 1
                    td.texto-left 192.168.1.0 – 192.168.1.63
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Subred 2
                    td.texto-left 192.168.1.64 – 192.168.1.127
                  tr
                    td.ajuste-border-tabla.texto-left Subred 3
                    td.texto-left 192.168.1.128 – 192.168.1.191
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left Subred 4
                    td.texto-left 192.168.1.192 – 192.168.1.255
        p.mb-4 La segmentación adecuada facilita la implementación de #[i Virtual Local Area Network (VLAN)], el control del tráfico, la reducción de dominios de broadcast y el fortalecimiento de la seguridad lógica.
        .caja-Tema5
          h4 Cálculo de #[i hosts] disponibles
          p El número de dispositivos que pueden conectarse en una subred depende de la cantidad de #[i bits] disponibles para #[i hosts]. Este cálculo se realiza mediante la siguiente expresión.
          .row.justify-content-center.mb-3
            .col-xl-3.col-md-12.text-center
              .caja-tema5-1(data-aos="flip-up")
                p.mb-0 #[b #[i Hosts] = 2ⁿ − 2]
          p Donde n corresponde al número de bits asignados a hosts. A continuación, se presentan valores de referencia según el prefijo de red utilizado.
          .row.justify-content-center.mb-4
            .col-xl-9
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 7.
                span Relación entre prefijo #[i Classless Inter-Domain Routing (CIDR)] y cantidad de #[i hosts]
              .tabla-a.ajuste-tabla-1(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Prefijo CIDR
                      th.ajuste-border-tabla.texto-left Máscara decimal
                      th.texto-left #[i Hosts] útiles
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left /24
                      td.ajuste-border-tabla.texto-left 255.255.255.0
                      td.texto-left 254
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left /25
                      td.ajuste-border-tabla.texto-left 255.255.255.128
                      td.texto-left 126
                    tr
                      td.ajuste-border-tabla.texto-left /26
                      td.ajuste-border-tabla.texto-left 255.255.255.192
                      td.texto-left 62 
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left /27
                      td.ajuste-border-tabla.texto-left 255.255.255.224
                      td.texto-left 30
          p.mb-0 La correcta planificación del direccionamiento IP contribuye a optimizar el uso de la red y facilita los procesos de diagnóstico durante la comprobación de conectividad.
    Separador
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.4 Validación de configuración IP
    p.mb-5 La comprobación del direccionamiento IP debe realizarse mediante un procedimiento técnico estructurado que permita confirmar la correcta configuración lógica del dispositivo dentro de la red. Este proceso facilita la detección de errores que pueden afectar la conectividad aun cuando el medio físico funcione adecuadamente. A continuación, se presentan las principales actividades técnicas relacionadas con la verificación del direccionamiento IP y su incidencia en el proceso de comprobación de conectividad.
    .bg-slider.mb-0
      .px-5
        .ajuste-slider(data-aos="zoom-in")
          SlyderA(tipo="b")
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Actividades de verificación de direccionamiento
                p La validación técnica del direccionamiento IP incluye: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Verificación de la configuración local mediante #[i ipconfig /all o ifconfig] para confirmar parámetros asignados. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Validación de la dirección IP y máscara para garantizar coherencia con el diseño de red. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Comprobación de conectividad con la puerta de enlace mediante #[i ping]. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Verificación de resolución de nombres con nslookup para evaluar el servicio #[i Domain Name System (DNS)]. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Revisión de rutas activas con #[i route print o ip route]. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Análisis de la tabla #[i Address Resolution Protocol (ARP)] para detectar conflictos de direccionamiento.
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema5/img3.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Registro de parámetros en el diagnóstico
                p Durante la validación se deben documentar: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Dirección IP asignada para identificar el dispositivo. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tipo de asignación (#[i Dynamic Host Configuration Protocol – DHCP] o estática). 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Estado de la puerta de enlace. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Tiempo de respuesta o latencia. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Pérdida de paquetes. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Observaciones técnicas para la trazabilidad del proceso.
                p.mb-0 
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema5/img4.png', alt='' style="max-width: 500px").m-auto
            .row.justify-content-center.align-items-center
              .col-xl-6.mb-4
                h4 Relación con la comprobación de conectividad
                p La revisión del direccionamiento IP es una fase crítica, ya que una configuración incorrecta impide la comunicación entre dispositivos. El análisis estructurado permite: 
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Detectar fallas de configuración. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Identificar conflictos de red. 
                  li.mb-1
                    span.fa-li
                      i.fas.fa-check-circle
                    | Validar disponibilidad de servicios. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | Garantizar el funcionamiento adecuado y la continuidad operativa.
                p.mb-0 
              .col-xl-6
                figure
                  img(src='@/assets/curso/tema5/img5.png', alt='' style="max-width: 500px").m-auto
    .bg-1
      .px-5
        Separador
        #t_5_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 5.5 Herramientas de diagnóstico de conectividad
        p.mb-5 El uso de herramientas de diagnóstico permite validar el estado real de la red, identificar fallas y medir parámetros de desempeño durante la comprobación técnica de la conectividad.
        .row.justify-content-center.mb-0
          .col-xl-10
            AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="zoom-in")
              .row(titulo="<em>Ping</em>").ajuste-cajaAcordion
                p Utiliza el protocolo #[i Internet Control Message Protocol (ICMP)] para verificar conectividad básica entre dispositivos, medir latencia y detectar pérdida de paquetes. 
                p.mb-3 Ejemplo: ping 192.168.1.1. Valores de referencia en red local: latencia menor a 5 ms y pérdida de paquetes de 0 %. Si la prueba falla, se debe revisar configuración IP, estado del #[i gateway], reglas de #[i firewall] y conectividad física.
              .row(titulo="<em>Traceroute / Tracert</em>").ajuste-cajaAcordion
                p Permite identificar la ruta seguida por los paquetes hasta el destino, detectar el salto donde se pierde la comunicación y analizar problemas de enrutamiento o latencia por segmento. 
                p.mb-3 Ejemplo: #[i tracert] 8.8.8.8. Una interrupción puede indicar falla en un #[i router] intermedio, problemas con el proveedor o restricciones de seguridad.
              .row(titulo="<em>Ipconfig / Ifconfig / Ip addr</em>").ajuste-cajaAcordion
                p.mb-3 Permiten visualizar la configuración IP del equipo, incluyendo dirección IP, máscara de subred, puerta de enlace, servidores #[i Domain Name System (DNS)] y estado de asignación mediante #[i Dynamic Host Configuration Protocol (DHCP)]. Constituyen el primer paso en cualquier procedimiento de diagnóstico.
              .row(titulo="<em>Nslookup</em>").ajuste-cajaAcordion
                p Permite verificar la resolución de nombres en el servicio DNS. 
                p.mb-3 Ejemplo: #[i nslookup] www.ejemplo.com. Facilita comprobar si el servidor responde, si el nombre se traduce correctamente y si existen errores de configuración.
              .row(titulo="<em>Netstat</em>").ajuste-cajaAcordion
                p Permite visualizar conexiones activas, puertos abiertos y estadísticas de red. 
                p.mb-3 Ejemplo: #[i netstat] -an. Facilita la identificación de servicios activos, conexiones sospechosas, puertos en escucha y estado de sesiones #[i Transmission Control Protocol (TCP)].
              .row(titulo="<em>Address Resolution Protocol (ARP)</em>").ajuste-cajaAcordion
                p.mb-3 El comando arp -a permite revisar la asociación entre direcciones IP y direcciones físicas #[i Media Access Control (MAC)], facilitando la detección de conflictos de IP duplicada y la verificación de comunicación dentro de la red local.
              .row(titulo="Herramientas gráficas de monitoreo").ajuste-cajaAcordion
                p.mb-3 Aplicaciones como #[i Wireshark, SolarWinds], PRTG y Nagios permiten analizar tráfico en tiempo real, detectar congestión, identificar fallas intermitentes y medir el desempeño continuo de la infraestructura.
    Separador
    #t_5_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.6 Procedimiento estructurado de validación
    p.mb-5 La comprobación de la conectividad debe realizarse siguiendo una secuencia técnica que permita aislar fallas de manera ordenada y garantizar el cumplimiento de los criterios establecidos en la orden de trabajo.
    .row.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema5/img6.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-6")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Verificar configuración IP
            p.mb-0.text-center Confirmar coherencia del direccionamiento lógico del dispositivo.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Probar conectividad local mediante #[i ping] al #[i gateway]
            p.mb-0.text-center Validar comunicación dentro del segmento de red.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img9.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Probar conectividad externa mediante #[i ping] a una IP pública
            p.mb-0.text-center Determinar disponibilidad del enlace hacia redes externas.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img10.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Verificar resolución de nombres mediante #[i Domain Name System (DNS)]
            p.mb-0.text-center Confirmar funcionamiento de servicios de infraestructura.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img11.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Analizar rutas mediante herramientas de diagnóstico
            p.mb-0.text-center Identificar posibles fallas de enrutamiento.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img12.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Revisar puertos y servicios activos
            p.mb-0.text-center Validar disponibilidad de aplicaciones y procesos de red.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img13.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Documentar hallazgos técnicos
            p.mb-0.text-center Garantizar trazabilidad y soporte del diagnóstico.
    .row.justify-content-center.mb-5
      .col-xl-8.text-center 
        p.mb-0 Este enfoque estructurado facilita la identificación de la causa raíz de los problemas de conectividad y contribuye al cumplimiento de los procedimientos técnicos establecidos.
    .caja-tema2.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema2/img22.svg" style="max-width: 60px").m-auto
      .col
        h3 Registro y documentación de resultados
    p.mb-5 Toda prueba de conectividad debe registrarse de manera sistemática para asegurar la trazabilidad del proceso y la correcta interpretación de los resultados obtenidos.
    .row.justify-content-center.align-items-center.mb-0
      .col-xl.mb-4.mb-lg-0
        ul.fa-ul.estilo___ul.mb-3
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Fecha y hora de la prueba]. Permite contextualizar el evento y su ocurrencia.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Equipo evaluado]. Identifica el dispositivo analizado.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Herramienta utilizada]. Evidencia el método de validación aplicado.
          li.mb-1
            span.fa-li
              i.fas.fa-check-circle
            | #[b Resultados obtenidos]. Permiten sustentar el diagnóstico técnico.
          li.mb-0
            span.fa-li
              i.fas.fa-check-circle
            | #[b Interpretación técnica]. Facilita la toma de decisiones correctivas.
        .row.align-items-center
          .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
            figure
              img(src='@/assets/curso/tema3/img3.svg', alt='').m-auto
          .col-xl
            p.mb-0 La documentación adecuada contribuye al control del proceso, al seguimiento de incidentes y al cumplimiento de los requisitos establecidos en la orden de trabajo.
      .col-xl-auto.col-md-9(data-aos="fade-left")
        figure
          img(src='@/assets/curso/tema5/img14.png', alt='').m-auto
</template>

<script>
export default {
  name: 'Tema5',
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
