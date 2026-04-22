<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario - Comprobación y Validación de Conectividad de Red',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Evaluar la comprensión conceptual, técnica y procedimental del aprendiz respecto a la comprobación de la conectividad en redes de datos, mediante la aplicación de conocimientos sobre topologías, medios de transmisión, protocolos, direccionamiento IP, herramientas de validación y procedimientos técnicos, garantizando coherencia con la normativa de telecomunicaciones y los lineamientos establecidos en la orden de trabajo.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué significa comprobar la conectividad de una red?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Instalar nuevos dispositivos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Verificar el estado físico y lógico conforme a normativa técnica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reiniciar los equipos de red.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar direcciones IP manualmente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál parámetro indica el tiempo que tarda un paquete en ir y regresar?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Throughput.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Jitter.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Latencia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'MTTR.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es el valor aceptable de pérdida de paquetes en una red LAN estable?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10%.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5%.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '1% o menos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '15%.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto: 'En una topología en estrella, el punto único de falla es:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El cableado secundario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El switch central.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El router externo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El servidor DNS.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué norma regula las distancias máximas en cableado estructurado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'IEEE 802.11.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'TIA/EIA.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'ICMP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'SMTP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es la distancia máxima recomendada para cable UTP en Ethernet?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '50 metros.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '150 metros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '100 metros.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '300 metros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué protocolo asigna direcciones IP automáticamente?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'DNS.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'DHCP.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'HTTP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'FTP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué protocolo asigna direcciones IP automáticamente?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cableado físico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puerto del switch.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servicio DNS.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Fuente de poder.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué herramienta permite identificar la ruta que siguen los paquetes?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Netstat.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ping.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Traceroute.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'ARP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Qué comando muestra la configuración IP en Windows?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Route print.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Tracert.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ipconfig/all.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Netstat.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Cuál es la fórmula para calcular hosts disponibles en una subred?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2n.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2n-2.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'n2.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '2 + n.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué rango corresponde a direcciones privadas clase C?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '10.0.0.0 /8',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '172.16.0.0 /12',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '192.168.0.0 /16',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '224.0.0.0 /4',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuál es el puerto estándar del protocolo HTTPS?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '80.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '253.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '443.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '21.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué comando permite verificar resolución de nombres?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ping.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ipconfig.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Nslookup.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Arp.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Qué indicador mide el porcentaje de tiempo que un servicio está activo?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Jitter.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'SLA.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Disponibilidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Throughput.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: 'En una red WAN, la latencia suele ser:',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Menor que el LAN.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Igual que en LAN.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mayor que en LAN.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Nula.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Qué elemento garantiza continuidad del servicio en un centro de datos?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cable UTP adicional.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Redundancia de equipos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Configuración manual de IP.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Switch no gestionable.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Qué herramienta permite visualizar conexiones activas y puertos abiertos?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ping.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Netstat.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Traceroute.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'DHCP.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            '¿Qué debe hacerse primero en un procedimiento técnico estructurado?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ejecutar traceroute.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cambiar IP.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Inspección física inicial.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Reiniciar el servidor.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Cuál es el objetivo final del procedimiento técnico de comprobación?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reconfigurar toda la red.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Sustituir equipos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Restablecer y documentar la conectividad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Actualizar el firmware.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
