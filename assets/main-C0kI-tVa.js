(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
  <div>
    
    <!-- TopBar -->
<section id="topbar" class="topbar flex items-center justify-between w-full h-[38px] bg-gradient-to-r from-[#4d7c0f] to-[#84cc16] px-2 text-stone-900 text-xs fixed top-0 left-0 z-60 transition-transform duration-300" aria-labelledby="topbar-heading">
  <div class="container mx-auto px-0 md:px-15 flex justify-between w-full">
    <div class="flex items-center space-x-2">
      <!-- Mail icon and email as link -->
      <a href="mailto:info@ggbservicios.com" class="hover:underline" aria-label="Enviar correo a info@ggbservicios.com">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3 mr-1" width="16" height="16" fill="currentColor" aria-hidden="true" focusable="false" class="bi bi-envelope-fill" viewBox="0 0 16 16">
          <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/>
        </svg>
        info@ggbservicios.com
      </a>
    </div>
    <div class="flex space-x-4" aria-label="Redes sociales">
      <!-- Facebook -->
      <a href="http://www.facebook.com/ggbserv/" target="_blank" aria-label="Visitar nuestra página de Facebook" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
        </svg>
      </a>
      <!-- MercadoShops -->
      <a href="https://ggbservicios.mercadoshops.com.mx/" target="_blank" aria-label="Visitar nuestra tienda en MercadoShops" rel="noopener noreferrer">
        <img loading="lazy" src="./images/mercadoshops.svg" alt="Logo de MercadoShops" class="w-[26px] h-[26px] svg-black" />
      </a>
    </div>
  </div>
</section>
<!-- TopBar -->


<!-- Header with collapsible mobile menu -->
<header id="header" class="text-stone-600 body-font bg-stone-700 fixed top-[38px] left-0 w-full z-50 transition-transform duration-300" role="banner" aria-labelledby="main-navigation">
  <div class="container mx-auto flex flex-wrap items-center justify-between py-5">

    <!-- Logo aligned to the left and vertically centered -->
    <a class="flex title-font font-medium items-center text-stone-900" href="/" aria-label="Ir a la página principal">
      <img loading="lazy" class="w-6/12 object-cover object-center" alt="Logo de GGB Servicios" src="./images/ggblogo-h.svg" aria-hidden="true">
    </a>

    <!-- Botón de menú hamburguesa alineado a la derecha y centrado verticalmente (visible solo en xs, sm, md) -->
    <div class="block lg:hidden mr-2">
      <button id="menu-btn" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menú móvil">
        <svg id="menu-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Nav links, hidden on smaller screens and visible from lg upwards -->
    <nav id="menu" class="hidden lg:flex lg:ml-auto flex-wrap items-center text-base justify-center text-stone-200 cursor-pointer" role="navigation" aria-label="Navegación principal">
      <a href="#inicio" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección INICIO">INICIO</a>
      <a href="#servicios" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección SERVICIOS">SERVICIOS</a>
      <a href="#shop" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección TIENDA">TIENDA</a>
      <a href="#nosotros" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección NOSOTROS">NOSOTROS</a>
      <a href="#redes" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección REDES E INFRAESTRUCTURA">REDES E INFRAESTRUCTURA</a>
      <a href="#seguridad" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección SEGURIDAD">SEGURIDAD</a>
      <a href="#proyectos" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección PROYECTOS">PROYECTOS</a>
      <a href="#contacto" class="mr-5 hover:text-lime-400" aria-label="Ir a la sección CONTACTO">CONTACTO</a>
    </nav>
  </div>
</header>

<!-- Menú móvil (oculto inicialmente) -->
<nav id="mobile-menu" class="fixed inset-x-0 bg-gradient-to-b from-stone-700 from-50% to-stone-700/70 text-stone-50 text-base z-50 hidden lg:hidden transition-transform duration-300 h-screen" role="navigation" aria-labelledby="menú móvil">
  <div class="flex flex-col items-center py-32">
    <a href="#inicio" class="py-2 hover:text-lime-400" aria-label="Ir a la sección INICIO">INICIO</a>
    <a href="#servicios" class="py-2 hover:text-lime-400" aria-label="Ir a la sección SERVICIOS">SERVICIOS</a>
    <a href="#shop" class="py-2 hover:text-lime-400" aria-label="Ir a la sección TIENDA">TIENDA</a>
    <a href="#nosotros" class="py-2 hover:text-lime-400" aria-label="Ir a la sección NOSOTROS en móvil">NOSOTROS</a>
    <a href="#redes" class="py-2 hover:text-lime-400" aria-label="Ir a la sección REDES E INFRAESTRUCTURA">REDES E INFRAESTRUCTURA</a>
    <a href="#seguridad" class="py-2 hover:text-lime-400" aria-label="Ir a la sección SEGURIDAD">SEGURIDAD</a>
    <a href="#proyectos" class="py-2 hover:text-lime-400" aria-label="Ir a la sección PROYECTOS">PROYECTOS</a>
    <a href="#contacto" class="py-2 hover:text-lime-400" aria-label="Ir a la sección CONTACTO">CONTACTO</a>
  </div>
</nav>




<!-- Hero Image -->
<section id="inicio" class="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-gray-600 body-font" role="region" aria-labelledby="hero-title">
  <div class="container mx-auto flex px-5 py-0 items-center justify-center flex-col">
    
    <!-- Imagen con descripción accesible -->
    <img class="lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center" 
    rel="preload" alt="Logotipo de GGB Servicios" 
         src="./images/ggblogo.svg">
    
    <!-- Contenedor de texto central -->
    <div class="text-center lg:w-2/3 w-full">
      
      <!-- Título del hero con rol de encabezado principal -->
      <h1 id="hero-title" class="title-font md:text-base text-base uppercase mb-4 font-bold text-stone-200" role="heading" aria-level="1">
        Redes, Seguridad, Soporte y Soluciones Web
      </h1>
      
      <!-- Subtítulo accesible -->
      <p class="mb-8 leading-relaxed text-3xl text-stone-200 font-bold">
        Soluciones Tecnológicas para su Empresa
      </p>
      
      <!-- Botón accesible que desplaza suavemente a la sección de servicios -->
      <div class="hidden lg:block lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-3 pt-2 pb-0 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
        <button id="services-btn" 
          class="transition duration-300 ease-in-out w-full md:w-[40%] lg:w-8/12 xl:w-6/12 2xl:w-5/12 bg-lime-500 hover:bg-lime-600 focus:outline-none focus:bg-lime-500 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto"
          aria-label="Conoce nuestros servicios"
          onclick="document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })"
          onkeydown="if(event.key === 'Enter') document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })">
          <span class="mr-2">Conoce nuestros servicios</span>
          
          <!-- Icono SVG accesible -->
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16" role="img" aria-label="Flecha hacia la derecha">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>
<!-- Hero Image -->



<!-- Servicios -->
<section id="servicios" class="bg-stone-900 pt-10 md:pt-20 pb-20  md:pb-40 min-h-screen flex flex-col items-center justify-center text-center">
  <div class="container mx-auto px-4">
    <!-- Contenido existente -->
    <h3 class="text-lime-600 text-base uppercase font-bold mb-5">Servicios</h3>
    <h4 class="text-stone-200 text-2xl font-bold mb-4">Soluciones TI para su Empresa</h4>
    <hr class="border-t-6 pb-4 border-lime-600 w-3/12 md:w-1/12 mx-auto">
    <h5 class="text-stone-200 text-base font-normal mb-12">Ofrecemos soporte técnico, videovigilancia y desarrollo web, adaptados a las necesidades de su negocio.</h5>

    <!-- Componente integrado -->
    <div id="servicio01" class="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto py-10" role="region" aria-labelledby="servicio01-heading">
      
      <!-- Imagen -->
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img loading="lazy" src="./images/soporte-tecnico.webp" 
             alt="Técnico trabajando en soporte técnico en un ordenador" 
             class="w-full h-auto object-cover rounded-lg">
      </div>

      <!-- Contenedor de texto -->
      <div class="w-full lg:w-1/2 lg:pl-8 px-4">
        <!-- Título h3 -->
        <h3 id="servicio01-heading" class="text-lime-600 text-base uppercase font-bold mb-4 text-center lg:text-left" role="heading" aria-level="3">
          Soporte Técnico Empresarial
        </h3>

        <!-- Título h4 -->
        <h4 class="text-stone-200 text-2xl lg:text-xl font-bold mb-4 text-center lg:text-left" role="heading" aria-level="4">
          Asistencia TI Inmediata y Eficiente
        </h4>

        <!-- Párrafo -->
        <p class="text-stone-200 text-base mb-6 text-left">
          Ofrecemos la mejor calidad y el menor tiempo de respuesta en soluciones TI contratando el servicio por mes, semana o por hora - 24/7.<br><br>
          <b>GGB Servicios TI+</b> ofrece completa satisfacción en soluciones tecnológicas. Si no cuenta con un departamento de sistemas, nos adecuamos a sus necesidades con tecnología de punta para su completa satisfacción.<br><br>
          La solución está a solo un clic de distancia. Envíenos un mensaje por WhatsApp o llámenos.
        </p>

        <!-- Botón (Solo en versión xl y mayores) -->
        <div class="hidden xl:block">
          <a href="https://wa.me/+5215513628057?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Soporte%20T%C3%A9cnico%20Empresarial.%20Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n,%20por%20favor?" 
             target="_blank" rel="noopener noreferrer"
             class="transition duration-300 ease-in-out xl:w-3/6 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded"
             aria-label="Contacta para más información sobre Soporte Técnico Empresarial">
            <span class="mr-2">¡Hablemos por WhatsApp!</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <!-- Segundo componente -->
    <div id="servicio02" class="flex flex-col lg:flex-row-reverse items-center justify-center w-full lg:w-auto py-10" role="region" aria-labelledby="servicio02-heading">
      <!-- Imagen -->
      <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
        <img loading="lazy" src="./images/seguridad.webp" 
             alt="Sistema de videovigilancia en acción" 
             class="w-full h-auto object-cover rounded-lg">
      </div>

      <!-- Contenedor de texto -->
      <div class="w-full lg:w-1/2 lg:pr-8 px-4">
        <!-- Título h3 -->
        <h3 id="servicio02-heading" class="text-lime-600 text-base uppercase font-bold mb-4 text-center lg:text-left" role="heading" aria-level="3">
          Video Vigilancia y Acceso
        </h3>

        <!-- Título h4 -->
        <h4 class="text-stone-200 text-2xl lg:text-xl font-bold mb-4 text-center lg:text-left" role="heading" aria-level="4">
          Seguridad Integral con Tecnología Avanzada
        </h4>

        <!-- Párrafo -->
        <p class="text-stone-200 text-base mb-6 text-left">
          Realizamos análisis de vulnerabilidad para la instalación de soluciones integrales de videovigilancia y acceso. Diseñamos circuitos cerrados con cámaras IP, TVI, HDCVI, visión nocturna y audio. ¡Contacte con nosotros para más información sobre nuestra oferta de sistemas de seguridad!
        </p>

        <!-- Botón (Solo en versión xl y mayores) -->
        <div class="hidden xl:block">
          <a href="https://wa.me/+5215513628057?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Video%20Vigilancia%20y%20Acceso.%20Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n,%20por%20favor?" 
             target="_blank" rel="noopener noreferrer"
             class="transition duration-300 ease-in-out xl:w-3/6 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded"
             aria-label="Contacta para más información sobre Video Vigilancia y Acceso">
            <span class="mr-2">¡Hablemos por WhatsApp!</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
            </svg>
          </a>
        </div>
      </div>
    </div>

<!-- Tercer Componente -->
<div id="servicio03" class="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto py-10">
  <!-- Imagen -->
  <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
    <img loading="lazy" src="./images/soluciones-web.webp" alt="Presentación de Soluciones Web de GGB TI+" class="w-full h-auto object-cover rounded-lg">
  </div>

  <!-- Contenedor de texto -->
  <div class="w-full lg:w-1/2 lg:pl-8 px-4">
    <!-- Título h3 -->
    <h3 class="text-lime-600 text-base uppercase font-bold mb-4 text-center lg:text-left" tabindex="0">Soluciones Web</h3>

    <!-- Título h4 -->
    <h4 class="text-stone-200 text-2xl lg:text-xl font-bold mb-4 text-center lg:text-left" tabindex="0">
      Web y Marketing a la Medida de su Negocio
    </h4>

    <!-- Párrafo -->
    <p class="text-stone-200 text-base mb-6 text-left">
      En <b>GGB Servicios TI+</b>, nos encargamos de crear y alojar la página web de su empresa o negocio, asegurando que su presencia en línea sea visible desde cualquier dispositivo, ya sea un teléfono celular o una computadora. Su producto o servicio podrá ser conocido por millones.
      <br><br>
      Además, desarrollamos Micrositios, pequeños sitios web dentro de su página (o de manera independiente) con 1 a 4 diapositivas específicas, dedicadas a promocionar un servicio o producto en particular.
    </p>

    <!-- Botón (Solo en versión xl y mayores) -->
    <div class="hidden xl:block">
      <a href="https://wa.me/+5215513628057?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Soluciones%20Web.%20Podrían%20proporcionarme%20más%20información%20sobre%20este%20servicio,%20por%20favor?"
         target="_blank" rel="noopener noreferrer"
         class="transition duration-300 ease-in-out xl:w-3/6 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded"
         aria-label="Contacta para más información sobre Soluciones Web">
        <span class="mr-2">¡Hablemos por WhatsApp!</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
        </svg>
      </a>
    </div>
  </div>
</div>

</div>
</section>


<!-- shop --> 
<section id="shop" class="text-gray-600 body-font bg-cover bg-center relative">
  <div class="overlay"></div>
  <div class="container px-5 py-24 mx-auto relative z-10">
    <div class="flex flex-col text-center w-full mb-8">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-4 text-center" tabindex="0">Explora</h3>
      <h4 class="text-stone-200 text-2xl md:text-2xl font-bold mb-4 text-center" tabindex="0">Descubre Nuestra Tienda</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 md:w-1/12 mx-auto" aria-hidden="true">
      <p class="text-stone-200 text-base mb-6 text-center">Encuentra todo lo que necesitas en equipos tecnológicos y más.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-3 pt-0 pb-16 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <button onclick="window.open('https://ggbservicios.mercadoshops.com.mx/', '_blank');"
              class="transition duration-300 ease-in-out w-full marker:md:w-11/12 lg:w-[30%] bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-700 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto"
              aria-label="Visita la tienda en MercadoShops"
              aria-haspopup="true">
        <span class="mr-2">Visita la tienda</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
      </button>
    </div>
  </div>
</section>



<!-- nosotros -->
<section id="nosotros" class="bg-stone-700 pt-10 pb-20 md:pt-20 md:pb-10 min-h-screen flex flex-col items-center">
  <div class="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen">
    <!-- Imagen -->
    <div class="w-full lg:w-1/2 px-1 lg:px-6 flex justify-center lg:justify-end mb-8 lg:mb-0 lg:order-1 lg:flex lg:items-center">
      <img loading="lazy" src="./images/nosotrosSm.webp" alt="Imagen de nuestro equipo en soporte técnico" class="w-full h-auto object-cover rounded-lg" aria-labelledby="imagen-description">
      <p id="imagen-description" class="sr-only">Imagen que muestra al equipo de soporte técnico trabajando en el campo.</p>
    </div>
    <!-- Texto y contenido -->
    <div class="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:order-2 lg:flex lg:items-center lg:justify-center">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-5" tabindex="0">Nosotros</h3>
      <h4 class="text-stone-200 text-2xl font-bold mb-4" tabindex="0">Soluciones TI para tu Empresa</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-2/12 mx-auto lg:mx-0" aria-hidden="true">
      <h5 class="text-stone-200 text-base font-normal mb-12" tabindex="0">Ofrecemos soporte técnico, videovigilancia y desarrollo web, adaptados a las necesidades de su negocio.</h5>
      <p class="text-stone-200 text-base font-normal mb-4 text-left" tabindex="0">
        Somos un equipo de expertos en Tecnología de la Información, con una sólida trayectoria brindando soluciones tecnológicas en diversos sectores: tiendas departamentales, fábricas, bares, locales comerciales, escuelas y más.
        <br><br>
        Nos especializamos en adaptar tecnología de punta a tus necesidades y presupuesto, asegurando resultados eficientes y oportunos.
      </p>
      <p class="text-stone-400 text-base font-normal mb-4 text-left" tabindex="0">
        <strong class="text-lime-600">Misión:</strong><br>
        Ofrecer soluciones rápidas y efectivas, asesorando a nuestros clientes en la implementación de software y hardware que impulsen el éxito de sus negocios. Estamos comprometidos a cumplir con sus objetivos de manera confiable.
      </p>
      <p class="text-stone-400 text-base font-normal mb-8 text-left" tabindex="0">
        <strong class="text-lime-600">Visión:</strong><br>
        Convertirnos en líderes en servicios de TI, proporcionando soluciones que generen confianza y seguridad en nuestros clientes.
      </p>
    </div>
  </div>
</section>
<!-- nosotros -->


<!-- redes -->
<section id="redes" class="bg-lime-950 pt-10 pb-20 md:pt-20 lg:pb-0 min-h-screen flex flex-col items-center">
  <div class="container mx-auto px-4 flex flex-col lg:flex-row lg:items-center lg:justify-between min-h-screen">
    <!-- Texto y contenido -->
    <div class="w-full lg:w-7/12 flex flex-col items-center text-center lg:text-left mb-8 lg:mb-0 lg:order-1 lg:flex lg:items-center lg:justify-center">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-5" tabindex="0">Redes e Infraestructura</h3>
      <h4 class="text-stone-200 text-2xl font-bold mb-4" tabindex="0">Optimización Empresarial con Soluciones TI</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-2/12 mx-auto lg:mx-0" aria-hidden="true">
      <h5 class="text-stone-200 text-base font-normal mb-12" tabindex="0">Garantizamos redes confiables para su empresa, fabricadas con los mejores materiales y respaldadas por una asesoría experta a nuestros clientes.</h5>
      <p class="text-stone-200 text-base font-normal mb-4 text-left" tabindex="0">La experiencia en <b>GGB Servicios TI+</b> que hemos adquirido a lo largo de los años le permite a nuestro equipo ofrecer la más alta calidad de servicio y la mejor asesoría a nuestros clientes.</p>
      <p class="text-stone-200 text-base font-normal mb-8 text-left" tabindex="0">Las TI incluyen servicios que permiten trabajar en grupo, compartir recursos, y automatizar procesos como las copias de seguridad, las comunicaciones internas, la gestión del conocimiento, mejorando y incrementando los flujos de información dentro de la empresa.</p>
    </div>
    <!-- Imagen -->
    <div class="w-full lg:w-5/12 px-1 lg:px-6 flex justify-center lg:order-2 lg:flex lg:items-center lg:justify-center">
      <img loading="lazy" src="./images/redesSm.webp" alt="Imagen de una red de infraestructura tecnológica" class="w-full h-auto object-cover rounded-lg" aria-labelledby="imagen-description">
      <p id="imagen-description" class="sr-only">Imagen que muestra una red de infraestructura tecnológica, resaltando la confiabilidad y robustez de la red empresarial.</p>
    </div>
  </div>
</section>
<!-- redes -->


<!-- seguridad -->
<section id="seguridad" class="bg-stone-900 pt-10 pb-20 md:pt-20 px-4 min-h-screen flex flex-col items-center justify-center text-center">
  <div class="container mx-auto px-4">
    <!-- Contenido existente -->
    <h3 class="text-lime-600 text-base uppercase font-bold mb-5" tabindex="0">Seguridad</h3>
    <h4 class="text-stone-200 text-2xl font-bold mb-4" tabindex="0">Control de Acceso Simplificado</h4>
    <hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto" aria-hidden="true">
    <h5 class="text-stone-200 text-base font-normal mb-8" tabindex="0">Mantenga la seguridad de su hogar y oficina al alcance de su mano con nuestras soluciones avanzadas.</h5>
  </div>
  <div class="container mx-auto pt-12 pb-4">
    <!-- Grid en Desktop y Mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Fila o Columna 1 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg" tabindex="0">Controles de acceso para tu hogar y oficina.<br>&nbsp;</h6>
        <img loading="lazy" src="./images/seg01.webp" alt="Control de Acceso en diferentes tipos de puertas" class="w-1/2 h-auto object-cover rounded-lg mb-4 mx-auto" aria-describedby="desc1">
        <p id="desc1" class="sr-only">Control de acceso adaptado a diferentes puertas o portones, incluyendo vidrio, madera, aluminio, y rejas, asegurando un control preciso y seguro.</p>
        <p class="text-stone-200 text-left text-base pb-4" tabindex="0">Control de acceso adaptado a diferentes puertas o portones. Instalamos sistemas en puertas de vidrio, madera, aluminio, rejas, y más, asegurando un control preciso y seguro.</p>
      </div>
      <div class="lg:hidden"><hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto" aria-hidden="true"></div>
      <!-- Fila o Columna 2 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg" tabindex="0">Control de acceso compatible con todo tipo de puertas y portones.</h6>
        <img loading="lazy" src="./images/seg02.webp" alt="Variedad de mecanismos de cierre" class="w-1/2 h-auto object-cover rounded-lg mb-4 mx-auto" aria-describedby="desc2">
        <p id="desc2" class="sr-only">Variedad de mecanismos de cierre, desde chapas eléctricas y magnéticas hasta sistemas con pivotes, adaptados a sus necesidades.</p>
        <p class="text-stone-200 text-left text-base pb-4" tabindex="0">Variedad de mecanismos de cierre. Desde chapas eléctricas y magnéticas hasta sistemas con pivotes, ofrecemos soluciones que se ajustan a sus necesidades.</p>
      </div>
      <div class="lg:hidden"><hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto" aria-hidden="true"></div>
      <!-- Fila o Columna 3 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg" tabindex="0">Control de acceso adaptable a distintos mecanismos de cierre.</h6>
        <img loading="lazy" src="./images/seg03.webp" alt="Métodos de identificación en control de acceso" class="w-1/2 h-auto object-cover rounded-lg mb-4 mx-auto" aria-describedby="desc3">
        <p id="desc3" class="sr-only">Diversos métodos de identificación, incluyendo tarjetas HID, códigos de barras, equipos biométricos, teclados, RFID, y otros métodos.</p>
        <p class="text-stone-200 text-left text-base pb-4" tabindex="0">Diversos métodos de identificación. Nuestros sistemas de control de acceso pueden operar con tarjetas HID, códigos de barras, equipos biométricos, teclados, RFID, y otros métodos, adaptándose a la tecnología que prefiera.</p>
      </div>
      <div class="lg:hidden"><hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto" aria-hidden="true"></div>
      <!-- Fila o Columna 4 -->
      <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg" tabindex="0">Control de acceso con varios tipos de identificación.</h6>
        <img loading="lazy" src="./images/seg04.webp" alt="Opciones de control de acceso con tarjeta o huella digital" class="w-1/2 h-auto object-cover rounded-lg mb-4 mx-auto" aria-describedby="desc4">
        <p id="desc4" class="sr-only">Opciones de control de acceso que incluyen tarjetas, biometría, o teclados, asegurando que solo quienes usted autorice tengan acceso.</p>
        <p class="text-stone-200 text-left text-base" tabindex="0">¿Quiere abrir puertas con una tarjeta o su huella digital? En <b>GGB Servicios TI+</b> tenemos la tecnología para hacer que su control de acceso sea cómodo y seguro, ya sea con tarjetas, biometría, o teclados, asegurando que solo quienes usted autorice tengan acceso.</p>
      </div>
    </div>
  </div>
</section>
<!-- seguridad -->



 
<!-- Sección de proyectos -->
<section id="proyectos" class="bg-lime-950 pt-10 md:pt-20 pb-20 px-4 min-h-screen flex flex-col items-center justify-center text-center">
  <div class="container mx-auto px-4">
    <h3 class="text-lime-600 text-base uppercase font-bold mb-5">Proyectos</h3>
    <h4 class="text-stone-200 text-2xl font-bold mb-4">Nuestro Trabajo en Acción</h4>
    <hr class="border-t-6 pb-4 border-lime-600 w-3/12 md:w-1/12 mx-auto">
    <h5 class="text-stone-200 text-base font-normal mb-8">Un vistazo a los proyectos que han marcado la diferencia para nuestros clientes.</h5>
  </div>

  <!-- Contenedor de la galería -->
  <div id="gallery" class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 p-0 md:p-16">
    <!-- Imágenes de la galería -->
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-01.webp" alt="Instalación de red profesional mostrando cables y equipos en un entorno de oficina." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Instalación de red profesional.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-02.webp" alt="Conexiones seguras y confiables en un entorno de red." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Conexiones seguras y confiables.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-03.webp" alt="Sistema de control de acceso seguro con lector de tarjetas y teclado." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Control de acceso seguro.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-04.webp" alt="Instalación de cámaras de seguridad en una propiedad." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Cámaras de seguridad instaladas.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-05.webp" alt="Instalación de teléfono IP en una oficina moderna." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Instalación de teléfono IP.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-06.webp" alt="Cableado de red eficiente en un entorno de oficina." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Cableado de red eficiente.</h4>
      </div>
    </div>
  </div>
  
  <!-- Sección de marcas -->
  <div class="container mx-auto text-center pt-8">
    <p class="text-stone-200 text-xl mb-6 pt-4 lg:pt-0">Trabajamos con las mejores marcas.</p>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 lg:pt-12">
      <img loading="lazy" src="./images/dlink.webp" alt="Logotipo de DLink" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/cisco.webp" alt="Logotipo de Cisco" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/siemens.webp"  alt="Logotipo de Siemens" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/yeahlink.webp"  alt="Logotipo de Yeah Link" class=" h-24 object-contain mx-auto">
    </div>
  </div>
</section>
<!-- Sección de proyectos -->




<!-- contacto -->
<section id="contacto" class="bg-stone-700 pt-10 md:pt-20 pb-15 flex flex-col items-center">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-start md:justify-between">
    <!-- Texto y contenido -->
    <div class="w-full flex flex-col items-center text-center md:text-left order-1 md:order-2">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-5">Contacto</h3>
      <h4 class="text-stone-200 text-2xl font-bold mb-4">Estamos para brindarte el mejor servicio.</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 md:w-1/12 mx-auto">
      <h5 class="text-stone-200 text-base font-normal mb-8">Resolvemos tus dudas rápidamente. Hablemos por WhatsApp o llámanos.</h5>
    </div>
  </div>

  <!-- Formulario para desktop -->
  <form action="enviar_mensaje.php" method="POST" class="hidden lg:flex lg:flex-col lg:w-2/3 w-full mx-auto px-8 pb-20">
    <!-- Token CSRF -->
    <input type="hidden" name="csrf_token" value="<?php echo $_SESSION['csrf_token']; ?>">

    <!-- Primera fila: 3 inputs -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <!-- Nombre completo -->
      <div>
        <label for="nombre" class="block text-stone-200 text-sm font-medium mb-2">Nombre Completo</label>
        <input id="nombre" type="text" name="nombre" placeholder="Nombre Completo" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded focus:bg-stone-950 focus:text-stone-400 focus:outline-none" required pattern="[A-Za-zÀ-ÿs'-]{1,}" aria-required="true" aria-label="Nombre Completo" title="Utiliza solo letras, espacios, apóstrofes o guiones">
      </div>
      
      <!-- Correo electrónico -->
      <div>
        <label for="correo" class="block text-stone-200 text-sm font-medium mb-2">Correo Electrónico</label>
        <input id="correo" type="email" name="correo" placeholder="Correo Electrónico" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded focus:bg-stone-950 focus:text-stone-400 focus:outline-none" required aria-required="true" aria-label="Correo Electrónico">
      </div>
      
      <!-- Teléfono -->
      <div>
        <label for="telefono" class="block text-stone-200 text-sm font-medium mb-2">Teléfono</label>
        <input id="telefono" type="tel" name="telefono" placeholder="Teléfono" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded focus:bg-stone-950 focus:text-stone-400 focus:outline-none" pattern="(+d{1,3}[- ]?)?(?d{1,4})?[- ]?d{1,4}[- ]?d{1,9}" aria-label="Teléfono" title="Introduce un número de teléfono válido, incluyendo espacios, guiones o paréntesis si es necesario">
      </div>
    </div>

    <!-- Segunda fila: Input para mensaje -->
    <div class="mb-6">
      <label for="mensaje" class="block text-stone-200 text-sm font-medium mb-2">Mensaje</label>
      <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded h-40 focus:bg-stone-950 focus:text-stone-400 focus:outline-none" aria-label="Mensaje"></textarea>
    </div>

    <!-- Botón de envío -->
    <div class="flex justify-center">
      <button type="submit" class="transition duration-300 ease-in-out bg-lime-500 hover:bg-lime-600 focus:bg-lime-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-6 rounded" aria-label="Enviar mensaje">
        <span>Enviar</span>
      </button>
    </div>
  </form>





<div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 pt-8 pb-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end lg:hidden">
  <!-- Botón de WhatsApp -->
  <button 
    id="wp-btn-desk" 
    onclick="window.open('https://wa.me/5215513628057', '_blank')" 
    aria-label="Contactar por WhatsApp"
    class="w-full md:w-11/12 lg:w-[30%] bg-amber-400 hover:bg-amber-300 focus:outline-none focus-visible:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto">
    <span class="mr-2">¡Hablemos por WhatsApp!</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden="true" class="bi bi-whatsapp" viewBox="0 0 16 16">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  </button>
  
  <!-- Botón de llamada -->
  <button 
    onclick="window.location.href='tel:+5266514388';" 
    aria-label="Llamar por teléfono"
    class="w-full md:w-11/12 lg:w-[30%] bg-lime-500 hover:bg-lime-600 focus:outline-none focus-visible:bg-lime-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto">
    <span class="mr-2">¡Llámanos ahora!</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" aria-hidden="true" class="bi bi-telephone-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
    </svg>
  </button>
</div>


<!-- Ubicación -->
<section id="ubicacion" class="bg-stone-900 text-stone-200 p-8 w-full">
  <div class="container mx-auto px-4">
    <!-- Desktop -->
    <div class="hidden lg:grid lg:grid-cols-4 gap-8">
      <!-- Primera columna -->
      <address class="flex flex-col not-italic">
        <p class="text-base mb-4">
          <strong>Ubicación:</strong> Gral. Juan Enriquez 545 Col. Juan Escutia C.P. 09100 Iztapalapa CDMX.
        </p>
        <a href="https://wa.me/+5215513628057" target="_blank" rel="noopener noreferrer" class="transition duration-300 ease-in-out text-lime-500 hover:text-lime-600 mb-2">WhatsApp 55 8462 0570</a>
        <a href="tel:+5266514388" target="_blank" rel="noopener noreferrer" class="transition duration-300 ease-in-out text-lime-500 hover:text-lime-600">Oficina 6651 4388</a>
      </address>
      
      <!-- Segunda columna -->
      <div id="map-container" class="flex flex-col">
        <!-- El iframe se insertará aquí -->
      </div>

      <!-- Tercera columna -->
      <div class="flex flex-col">
        <p class="text-lg font-bold mb-2">Suscríbete a nuestro boletín</p>
        <p class="mb-4">Recibe: ofertas, nuevos productos y más. ¡SIN SPAM!</p>
        <form action="enviar_boletin.php" method="POST" class="space-y-4">
          <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token']); ?>">
          
          <input type="text" name="nombre" placeholder="Nombre Completo" class="w-full p-4 bg-stone-800 text-stone-200 placeholder-stone-400 rounded" required>
          <input type="email" name="correo" placeholder="Correo Electrónico" class="w-full p-4 bg-stone-800 text-stone-200 placeholder-stone-400 rounded" required>
          
          <button type="submit" class="transition duration-300 ease-in-out bg-lime-500 hover:bg-lime-600 text-stone-950 font-semibold py-2 px-4 rounded flex items-center justify-center">
            Suscribirse
          </button>
        </form>
      </div>
      
      <!-- Cuarta columna -->
      <div class="flex flex-col">
        <p class="text-lg font-bold mb-2">Síguenos</p>
        <div class="flex space-x-4">
          <a href="http://www.facebook.com/ggbserv/" aria-label="Facebook" class="transition duration-300 ease-in-out text-lime-500 hover:text-lime-600">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
            </svg>
          </a>
          <a href="https://ggbservicios.mercadoshops.com.mx/" target="_blank" aria-label="MercadoShops" class="transition duration-300 ease-in-out">
            <img loading="lazy" src="./images/mercadoshops.svg" alt="MercadoShops" class="w-[35px] h-[35px] svg-green" />
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="lg:hidden flex flex-col space-y-4">
      <div id="map-container-mobile" class="flex flex-col">
        <!-- El iframe se insertará aquí -->
      </div>
      
      <p class="text-base mb-4 text-center">
        <strong>Ubicación:</strong> Gral. Juan Enriquez 545 Col. Juan Escutia C.P. 09100 Iztapalapa CDMX.
      </p>
      <p class="text-lg text-center font-bold mb-2">Síguenos</p>
      <div class="flex space-x-4 mx-auto">
        <a href="http://www.facebook.com/ggbserv/" aria-label="Facebook" class="text-lime-500 hover:text-lime-600 ">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
        </svg>
        </a>
        <a href="https://ggbservicios.mercadoshops.com.mx/" target="_blank" aria-label="MercadoShops">
          <img loading="lazy" src="./images/mercadoshops.svg" alt="MercadoShops" class="w-[35px] h-[35px] svg-green" />
        </a>
      </div>
    </div>
  </div>
</section>

<!-- Fin Ubicación -->


<!-- Footer -->
<footer id="footer" class="bg-stone-800 text-stone-200 py-8 w-full">
  <div class="container mx-auto px-4">
    <div class="flex flex-col md:flex-row justify-between items-center">
      <p class="lg:text-base text-sm text-center mb-4 md:mb-0">© 2025 <b>GGB Servicios TI+</b>. Todos los derechos reservados.</p>
      
      <div class="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between items-center">
        <!-- Enlaces para móviles -->
        <div class="flex w-full justify-between md:hidden">
          <a href="#" id="open-privacidad-mobile" aria-label="Leer aviso de privacidad" class="text-center text-stone-400 hover:text-lime-600 focus:outline focus:outline-lime-600">Aviso de Privacidad</a>
          <span class="text-stone-200">|</span>
          <a href="#" id="open-terminos-mobile" aria-label="Leer términos y condiciones" class="text-center text-stone-400 hover:text-lime-600 focus:outline focus:outline-lime-600">Términos y Condiciones</a>
        </div>

        <!-- Enlaces para escritorio -->
        <div class="hidden md:flex flex-row space-x-4">
          <a href="#" id="open-privacidad-desktop" aria-label="Leer aviso de privacidad" class="text-stone-400 hover:text-lime-600 focus:outline focus:outline-lime-600">Aviso de Privacidad</a>
          <span class="text-stone-200">|</span>
          <a href="#" id="open-terminos-desktop" aria-label="Leer términos y condiciones" class="text-stone-400 hover:text-lime-600 focus:outline focus:outline-lime-600">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- Fin Footer -->

<div id="end-of-page" class="h-1"></div>


<!-- CTA solo para Mobile / Tablet -->
<section id="cta" class="fixed bottom-0 left-0 w-full h-[68px] bg-lime-950 p-8 flex items-center justify-center md:hidden z-50" aria-live="polite">
  <button onclick="window.open('https://wa.me/+5215513628057', '_blank')" aria-label="Hablemos por WhatsApp" role="button" class="btn-whatsapp w-full bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded">
    <span class="mr-2">¡Hablemos por WhatsApp!</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
    </svg>
  </button>
</section>
<!-- Fin CTA -->



<!-- Modal de Aviso de Privacidad -->
<div id="modal-privacidad" class="modal fixed inset-0 bg-stone-900 bg-opacity-50 flex justify-center items-center hidden">
  <div class="modal-content bg-stone-900 text-stone-200 p-6 w-full lg:w-8/12 h-[50vh] xl:h-[80vh] flex flex-col rounded-lg overflow-auto overflow-x-hidden">
    <!-- Header del Modal -->
    <div class="modal-header bg-stone-900 p-4 flex justify-between items-center">
      <h2 class="text-xl font-bold text-center flex-grow">Aviso de Privacidad</h2>
      <button data-close="modal-privacidad" class="text-lime-500 hover:text-lime-600 text-lg font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Contenido del Modal -->
    <div id="contenido-privacidad" class="modal-body flex-1 overflow-auto p-4 text-slate-100">
    </div>
  </div>
</div>

<!-- Modal de Términos y Condiciones -->
<div id="modal-terminos" class="modal fixed inset-0 bg-stone-900 bg-opacity-50 flex justify-center items-center hidden">
  <div class="modal-content bg-stone-900 text-stone-200 p-6 w-full lg:w-8/12 h-[50vh] xl:h-[80vh] flex flex-col rounded-lg overflow-auto overflow-x-hidden">
    <!-- Header del Modal -->
    <div class="modal-header bg-stone-900 p-4 flex justify-between items-center">
      <h2 class="text-xl font-bold text-center flex-grow">Términos y Condiciones</h2>
      <button data-close="modal-terminos" class="text-lime-500 hover:text-lime-600 text-lg font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Contenido del Modal -->
    <div id="contenido-terminos" class="modal-body flex-1 overflow-auto p-4 text-slate-100">
    </div>
  </div>
</div>












  <!-- END -->
  </div>
`;const T=document.getElementById("menu-btn"),d=document.getElementById("mobile-menu"),f=document.getElementById("menu-icon"),S=document.body,x=document.querySelectorAll("nav a");let m=!1;T.addEventListener("click",()=>{d.classList.toggle("hidden"),S.classList.toggle("overflow-hidden"),m=!m,d.classList.contains("hidden")?f.innerHTML='<path d="M4 6h16M4 12h16m-7 6h7"></path>':f.innerHTML='<path d="M6 18L18 6M6 6l12 12"></path>'});x.forEach(t=>{t.addEventListener("click",function(){d.classList.add("hidden"),S.classList.remove("overflow-hidden"),m=!1,f.innerHTML='<path d="M4 6h16M4 12h16m-7 6h7"></path>'})});let v=0;const w=document.getElementById("topbar"),y=document.getElementById("header");window.addEventListener("scroll",function(){const t=window.scrollY||document.documentElement.scrollTop;t>v?(w.style.transform="translateY(-100%)",y.style.transform="translateY(-50%)",m&&(d.style.transform="translateY(-100%)")):(w.style.transform="translateY(0)",y.style.transform="translateY(0)",m&&(d.style.transform="translateY(0)")),v=t<=0?0:t});const I=document.getElementById("cta"),u=new IntersectionObserver(t=>{t.forEach(o=>{o.isIntersecting?I.classList.remove("visible"):I.classList.add("visible")})},{threshold:0});u.observe(document.querySelector("#ubicacion"));u.observe(document.querySelector("footer"));u.observe(document.getElementById("wp-btn-desk"));u.observe(document.querySelector("#end-of-page"));function j(){let t=-1;document.querySelectorAll("section").forEach((o,n)=>{const l=o.getBoundingClientRect();l.top<=window.innerHeight/2&&l.bottom>=window.innerHeight/2&&(t=n)}),x.forEach(o=>o.classList.remove("activo")),t!==-1&&x.forEach(o=>{o.getAttribute("href")===`#${document.querySelectorAll("section")[t].id}`&&o.classList.add("activo")})}window.addEventListener("scroll",j);window.addEventListener("load",j);function C(){return`
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.517616371986!2d-99.04210952402956!3d19.39002894203776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff87e220f72f%3A0x205133a14671241b!2sGGB%20Servicios%20TI%2B!5e0!3m2!1sen!2smx!4v1725665480714!5m2!1sen!2smx"
      width="100%" 
      height="300" 
      style="border:5px solid #84cc16; border-radius: 0.5rem;" 
      allowfullscreen="" 
      loading="lazy"
      title="Mapa de ubicación de GGB Servicios TI+">
    </iframe>`}document.addEventListener("DOMContentLoaded",function(){const t=document.getElementById("map-container");t?(t.innerHTML=C(),console.log("Iframe inserted successfully in desktop view")):console.log("Map container not found in desktop view");const o=document.getElementById("map-container-mobile");o?(o.innerHTML=C(),console.log("Iframe inserted successfully in mobile view")):console.log("Map container mobile not found")});document.addEventListener("DOMContentLoaded",()=>{var g,h;const t=document.getElementById("modal-privacidad"),o=document.getElementById("modal-terminos"),n=document.getElementById("open-privacidad-mobile"),l=document.getElementById("open-terminos-mobile"),e=document.getElementById("open-privacidad-desktop"),s=document.getElementById("open-terminos-desktop");async function r(a,i){try{const c=await fetch(i);if(!c.ok)throw new Error("Error de red");const E=await c.text();a.querySelector(".modal-body").innerHTML=E}catch(c){console.error("Error al cargar el contenido del modal:",c),a.querySelector(".modal-body").innerHTML="<p>Error al cargar el contenido.</p>"}}function b(a,i){r(a,i),a.classList.remove("hidden"),document.body.style.overflow="hidden"}function p(a){const i=a.currentTarget.getAttribute("data-close");document.getElementById(i).classList.add("hidden"),document.body.style.overflow=""}n==null||n.addEventListener("click",a=>{a.preventDefault(),b(t,"aviso-privacidad.html")}),l==null||l.addEventListener("click",a=>{a.preventDefault(),b(o,"terminos-condiciones.html")}),e==null||e.addEventListener("click",a=>{a.preventDefault(),b(t,"aviso-privacidad.html")}),s==null||s.addEventListener("click",a=>{a.preventDefault(),b(o,"terminos-condiciones.html")}),(g=document.querySelector('button[data-close="modal-privacidad"]'))==null||g.addEventListener("click",p),(h=document.querySelector('button[data-close="modal-terminos"]'))==null||h.addEventListener("click",p),document.querySelectorAll(".modal").forEach(a=>{a.addEventListener("click",i=>{i.target===a&&p(i)})})});
//# sourceMappingURL=main-C0kI-tVa.js.map
