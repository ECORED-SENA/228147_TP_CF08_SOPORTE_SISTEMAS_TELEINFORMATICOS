export default {
  global: {
    Name: 'Comprobación y validación de conectividad de red',
    Description:
      'Este componente desarrolla los fundamentos técnicos y procedimentales para comprobar la conectividad de redes de datos mediante el análisis de planos, topologías, protocolos, direccionamiento IP y herramientas de validación, aplicando normativa de telecomunicaciones y lineamientos establecidos en la orden de trabajo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Fundamentos de la comprobación de conectividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de conectividad en redes',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Disponibilidad y capacidad',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Parámetros de validación técnica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Normativa técnica y orden de trabajo',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Indicadores técnicos y métricas de desempeño',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Planos de redes y análisis estructural',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Simbología universal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de planos',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Base geográfica',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Interpretación técnica',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Topologías de red',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Caso práctico aplicado',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Redes de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Conceptos generales',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Redes LAN',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Instalación y configuración básica de equipos de red',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Configuración de VLAN en redes LAN',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Seguridad en redes LAN',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Equipos activos de interconexión',
            hash: 't_3_6',
          },
          {
            numero: '3.7',
            titulo: 'Redes WAN',
            hash: 't_3_7',
          },
          {
            numero: '3.8',
            titulo:
              'Relación entre redes LAN y WAN en la comprobación de conectividad',
            hash: 't_3_8',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Medios de transmisión y protocolos de comunicación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y clasificación de medios de transmisión',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Cableado estructurado y procedimientos de interconexión',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Fibra óptica y medios inalámbricos',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Impacto del medio en la detección de fallas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Parámetros técnicos de medios guiados',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Modelo TCP/IP y funcionamiento de protocolos',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Servicios de infraestructura y verificación operativa',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Direccionamiento IP y herramientas de validación de red',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Conceptos de direccionamiento IP',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Reglas de validación del direccionamiento IP',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Subredes y cálculo de hosts',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Validación de configuración IP',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Herramientas de diagnóstico de conectividad',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Procedimiento estructurado de validación',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Centro de datos, disponibilidad y procedimiento técnico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Concepto y características del centro de datos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Disponibilidad del servicio y clasificación Tier',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Redundancia y monitoreo de la infraestructura',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Procedimiento técnico de comprobación de conectividad',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Secuencia operativa para la comprobación de conectividad',
            hash: 't_6_5',
          },
          {
            numero: '6.6',
            titulo: 'Documentación técnica y cierre de la orden de trabajo',
            hash: 't_6_6',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Arquitectura de sistemas de seguridad electrónica y CCTV',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Concepto y componentes de la seguridad electrónica',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Sistemas de control de acceso y detección de intrusión',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo:
              'Sistemas de alarma y ubicación estratégica de dispositivos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo:
              'Sistemas de videovigilancia <em>Closed Circuit Television (CCTV)</em>',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Tipos de cámaras y parámetros técnicos',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Monitoreo y almacenamiento de video',
            hash: 't_7_6',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo:
          'Integración, configuración y pruebas de sistemas de seguridad sobre red ',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Integración de sistemas de seguridad con la red de datos',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Configuración de red para dispositivos de seguridad',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Configuración de acceso remoto y almacenamiento',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Seguridad en la configuración de dispositivos',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: 'Pruebas de funcionamiento y validación final del sistema',
            hash: 't_8_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Centro de datos',
      significado:
        'Infraestructura digital o física donde se alojan sistemas informáticos encargados de procesar, almacenar, gestionar o respaldar la información de una organización.',
    },
    {
      termino: 'CIDR',
      significado:
        'Método de asignación de direcciones IP denominado Classless Inter-Domain Routing (CIDR) que mejora la eficiencia del enrutamiento en internet al permitir una gestión más flexible de los rangos de direcciones.',
    },
    {
      termino: 'Conectividad',
      significado:
        'Capacidad de establecer enlaces o conexiones entre personas, dispositivos, sistemas o ideas, lo que permite la transferencia de información, recursos o energía y facilita la comunicación y la colaboración.',
    },
    {
      termino: 'DHCP',
      significado:
        'Protocolo derivado de Bootstrap Protocol (BOOTP) que permite asignar automáticamente direcciones IP y otros parámetros de configuración de red, especialmente en entornos con gran cantidad de dispositivos o equipos móviles.',
    },
    {
      termino: 'DNS',
      significado:
        'Sistema denominado Domain Name System (DNS) que traduce los nombres de dominio comprensibles para las personas en direcciones IP utilizadas por los servidores para identificar recursos en la red.',
    },
    {
      termino: 'MTTR',
      significado:
        'Métrica conocida como Mean Time to Restore (MTTR) que indica el tiempo promedio necesario para recuperar la operación normal de un sistema, servicio o producto después de una falla o incidente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cruz, W. C. (2024). El CIDR – prefijo de red – máscara. Apuntes de Walther Curo.',
      link: 'https://blog.walthercuro.com/el-cidr-prefijo-de-red-mascara/',
    },
    {
      referencia: 'IONOS. (2019). El DHCP y la configuración de redes.',
      link: '',
    },
    {
      referencia: 'IONOS. (2023). ¿Qué es el DNS (Domain Name System)?',
      link:
        'https://www.ionos.com/es-us/digitalguide/servidores/know-how/domain-name-system/',
    },
    {
      referencia:
        'Ortiz, A. E. (2025). ¿Qué es la conectividad? Origen del término, significado, definición y ejemplos. HostDime Blog.',
      link:
        'https://blog.hostdime.com.co/que-es-conectividad-orige-termino-significa-definicion-ejemplos/',
    },
    {
      referencia:
        'Quiñonez, J. (2024). El significado del MTTR en la ciberseguridad. a3sec.',
      link:
        'https://a3sec.com/blog/el-significado-del-mttr-en-la-ciberseguridad',
    },
    {
      referencia:
        'Villalba, D. (2020). ¿Qué es un centro de datos y cuáles son sus beneficios? Pragma.',
      link:
        'https://www.pragma.co/es/blog/que-es-un-centro-de-datos-y-cuales-son-sus-beneficios',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable del ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Javier Ricardo Ortiz Puentes',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
