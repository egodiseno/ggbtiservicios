(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();document.querySelector("#app").innerHTML=`
  <div>
    
    <!-- TopBar -->
      <section id="topbar" class="topbar flex items-center justify-between w-full h-[38px] bg-gradient-to-r from-[#4d7c0f] to-[#84cc16] px-2 text-stone-900 text-xs fixed top-0 left-0 z-60 transition-transform duration-300" aria-labelledby="topbar-heading">
        <div class="container mx-auto px-0 md:px-15 flex justify-between w-full">
          <div class="flex items-center space-x-2">
            <!-- Mail icon and email as link -->
            <a href="mailto:info@ggbservicios.com" class="hover:underline" aria-label="Enviar correo a info@ggbservicios.com">info@ggbservicios.com</a>
          </div>
          <div class="flex space-x-4" aria-label="Redes sociales">
            <!-- Social media icons -->
            <a href="http://www.facebook.com/ggbserv/" target="_blank" aria-label="Visitar nuestra página de Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
            </a>
            <a href="https://ggbservicios.mercadoshops.com.mx/" target="_blank" aria-label="Visitar nuestra tienda en MercadoShops">
              <img loading="lazy" src="./images/mercadoshops.svg" alt="Logo de MercadoShops" class=" w-[26px] h-[26px] svg-black" />
            </a>
          </div>
        </div>
      </section>
      <!-- TopBar -->

<!-- Header with collapsible mobile menu -->
<header id="header" class="text-stone-600 body-font bg-stone-700 fixed top-[38px] left-0 w-full z-50 transition-transform duration-300" role="banner">
  <div class="container mx-auto flex flex-wrap items-center justify-between py-5">
    
    <!-- Logo aligned to the left and vertically centered -->
    <a class="flex title-font font-medium items-center text-stone-900" href="/" aria-label="Ir a la página principal">
      <img loading="lazy" class=" w-6/12 object-cover object-center" alt="Logo de GGB Servicios" src="./images/ggblogo-h.svg">
    </a>

    <!-- Botón de menú hamburguesa alineado a la derecha y centrado verticalmente (visible solo en xs, sm, md) -->
    <div class="block lg:hidden mr-2"> <!-- Oculto en pantallas grandes -->
      <button id="menu-btn" class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base" aria-controls="mobile-menu" aria-expanded="false" aria-label="Abrir menú móvil">
        <svg id="menu-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- Nav links, hidden on smaller screens and visible from lg upwards -->
    <nav id="menu" class="hidden lg:flex lg:ml-auto flex-wrap items-center text-base justify-center text-stone-200 cursor-pointer" role="navigation" aria-label="Navegación principal">
      <a href="#inicio" class="mr-5 hover:text-lime-400">INICIO</a>
      <a href="#servicios" class="mr-5 hover:text-lime-400">SERVICIOS</a>
      <a href="#shop" class="mr-5 hover:text-lime-400">TIENDA</a>
      <a href="#nosotros" class="mr-5 hover:text-lime-400">NOSOTROS</a>
      <a href="#redes" class="mr-5 hover:text-lime-400">REDES E INFRAESTRUCTURA</a>
      <a href="#seguridad" class="mr-5 hover:text-lime-400">SEGURIDAD</a>
      <a href="#proyectos" class="mr-5 hover:text-lime-400">PROYECTOS</a>
      <a href="#contacto" class="mr-5 hover:text-lime-400">CONTACTO</a>
    </nav>
  </div>
</header>

<!-- Menú móvil (oculto inicialmente) -->
<nav id="mobile-menu" class="fixed inset-x-0 bg-gradient-to-b from-stone-700 from-50% to-stone-700/70 text-stone-50 text-base z-50 hidden lg:hidden transition-transform duration-300 h-screen" role="navigation" aria-label="Menú móvil">
  <div class="flex flex-col items-center py-32">
    <a href="#inicio" class="py-2 hover:text-lime-400">INICIO</a>
    <a href="#servicios" class="py-2 hover:text-lime-400">SERVICIOS</a>
    <a href="#shop" class="py-2 hover:text-lime-400">TIENDA</a>
    <a href="#nosotros" class="py-2 hover:text-lime-400">NOSOTROS</a>
    <a href="#redes" class="py-2 hover:text-lime-400">REDES E INFRAESTRUCTURA</a>
    <a href="#seguridad" class="py-2 hover:text-lime-400">SEGURIDAD</a>
    <a href="#proyectos" class="py-2 hover:text-lime-400">PROYECTOS</a>
    <a href="#contacto" class="py-2 hover:text-lime-400">CONTACTO</a>
  </div>
</nav>



<!-- Hero Image -->
<section id="inicio" class="min-h-screen bg-cover bg-no-repeat bg-center flex items-center justify-center text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-0 items-center justify-center flex-col">
    <img loading="lazy" class=" lg:w-1/4 md:w-3/6 w-5/6 mb-10 object-cover object-center" 
         alt="Imagen del logotipo de GGB Servicios con fondo heroico" 
         src="./images/ggblogo.svg">
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font md:text-base text-base uppercase mb-4 font-bold text-stone-200" role="heading" aria-level="1">
        Redes, Seguridad, Soporte y Soluciones Web
      </h1>
      <p class="mb-8 leading-relaxed text-3xl text-stone-200 font-bold">
        Soluciones Tecnológicas para su Empresa
      </p>
      <div class="hidden lg:block file:flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-3 pt-2 pb-0 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <button id="services-btn" 
        class="transition duration-300 ease-in-out w-full md:w-[40%] lg:w-8/12 xl:w-6/12 2xl:w-5/12 bg-lime-500 hover:bg-lime-600 focus:outline-none focus:bg-lime-500 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto"
        aria-label="Conoce nuestros servicios"
        onclick="document.getElementById('servicios').scrollIntoView({ behavior: 'smooth' })">
        <span class="mr-2">Conoce nuestros servicios</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
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
    <h5 class="text-stone-200 text-base font-normal mb-8">Ofrecemos soporte técnico, videovigilancia y desarrollo web, adaptados a las necesidades de su negocio.</h5>

    <!-- Componente integrado -->
<div id="servicio01" class="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto py-10" role="region" aria-labelledby="servicio01-heading">
  
  <!-- Imagen -->
  <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
    <img loading="lazy" src="./images/soporte-tecnico.webp" 
         alt="Imagen que muestra a un técnico trabajando en un ordenador para soporte técnico" 
         class=" w-full h-auto object-cover rounded-lg">
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
      Ofrecemos la mejor calidad y el menor tiempo de respuesta en soluciones TI contratando el servicio por mes, semana o por hora - 24/7<br><br>
      GGB SERVICIOS TI+ A través del Soporte Técnico Empresarial ofrecemos completa satisfacción en soluciones en sistemas tecnológicos de su empresa. Si no cuenta con un departamento de sistemas, en GGB SERVICIOS TI+ nos adecuamos a sus necesidades utilizando la mejor tecnología de punta para su completa satisfacción.<br><br>
      La solución está a solo un clic de distancia. Envíenos un mensaje por WhatsApp o llámenos.
    </p>

    <!-- Botón (Solo en versión xl y mayores) -->
    <div class="hidden xl:block">
      <a href="https://wa.me/+5215513628057?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Soporte%20T%C3%A9cnico%20Empresarial.%20Podr%C3%ADan%20enviarme%20m%C3%A1s%20informaci%C3%B3n,%20por%20favor?" 
         target="_blank" 
         class="transition duration-300 ease-in-out xl:w-3/6 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded"
         aria-label="Hablemos por WhatsApp: contacta para más información sobre Soporte Técnico Empresarial">
        <span class="mr-2">¡Hablemos por WhatsApp!</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
      </a>
    </div>
  </div>
</div>
<!-- Fin del componente integrado -->


    <!-- Componente integrado -->
<div id="servicio02" class="flex flex-col lg:flex-row-reverse items-center justify-center w-full lg:w-auto py-10" role="region" aria-labelledby="servicio02-heading">
  <!-- Imagen -->
  <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
    <img loading="lazy" src="./images/seguridad.webp" 
         alt="Imagen que muestra un sistema de videovigilancia y seguridad" 
         class=" w-full h-auto object-cover rounded-lg">
  </div>

  <!-- Contenedor de texto -->
  <div class="w-full lg:w-1/2 lg:pr-8 px-4">
    <!-- Título h3 -->
    <h3 id="servicio02-heading" class="text-lime-600 text-base uppercase font-bold mb-4 text-center lg:text-left" role="heading" aria-level="3">
      Video Vigilancia y Acceso
    </h3>

    <!-- Título h4 -->
    <h4 class="text-stone-200 text-2xl lg:text-xl font-bold mb-4 text-center lg:text-left" role="heading" aria-level="4">
      Protección Total con Soluciones de Videovigilancia
    </h4>

    <!-- Párrafo -->
    <p class="text-stone-200 text-base mb-6 text-left">
      CCTV, Video IP, Video Portero, Asistencia-Lectores, Cerraduras Electro-Imán.<br><br>
      Las cámaras de red de GGB SERVICIOS TI+ pueden conectarse a cualquier red IP, incluyendo Internet, y permiten la visualización y grabación remota desde cualquier lugar. Además, ofrecen una serie de características avanzadas de análisis de vídeo como detección de movimiento o alarma anti manipulación, detección de audio, entradas y salidas de nivel o almacenamiento local.<br><br>
      Contamos con una extensa gama de cámaras:<br>
      Cámaras de red fijas, de red domo fijas, de red domo PTZ, de red para exteriores y térmicas.
    </p>

    <!-- Botón (Solo en versión xl y mayores) -->
    <div class="hidden xl:block">
      <a href="https://wa.me/+5215513628057?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Video%20Vigilancia%20y%20Acceso.%20Podr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20servicio,%20por%20favor?" 
         target="_blank" 
         class="transition duration-300 ease-in-out xl:w-3/6 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded"
         aria-label="Contacta para más información sobre Video Vigilancia y Acceso en WhatsApp">
        <span class="mr-2">¡Hablemos por WhatsApp!</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
      </a>
    </div>
  </div>
</div>
<!-- Fin del componente integrado -->


    <!-- Componente integrado -->
<div id="servicio03" class="flex flex-col lg:flex-row items-center justify-center w-full lg:w-auto py-10">
  <!-- Imagen -->
  <div class="w-full lg:w-1/2 mb-8 lg:mb-0">
    <img loading="lazy" src="./images/soluciones-web.webp" alt="Descripción de la imagen: Soluciones web" class=" w-full h-auto object-cover rounded-lg">
  </div>

  <!-- Contenedor de texto -->
  <div class="w-full lg:w-1/2 lg:pl-8 px-4">
    <!-- Título h3 -->
    <h3 class="text-lime-600 text-base uppercase font-bold mb-4 text-center lg:text-left" tabindex="0">Soluciones Web</h3>

    <!-- Título h4 -->
    <h4 class="text-stone-200 text-2xl lg:text-xl font-bold mb-4 text-center lg:text-left" tabindex="0">Web y Marketing a la Medida de su Negocio</h4>

    <!-- Párrafo -->
    <p class="text-stone-200 text-base mb-6 text-left">
      En GGB SERVICIOS TI+, nos encargamos de crear y alojar la página web de su empresa o negocio, asegurando que su presencia en línea sea visible desde cualquier dispositivo, ya sea un teléfono celular o una computadora. Su producto o servicio podrá ser conocido por millones.
      <br><br>
      Además, desarrollamos Micrositios, pequeños sitios web dentro de su página (o de manera independiente) con 1 a 4 diapositivas específicas, dedicadas a promocionar un servicio o producto en particular.
    </p>

    <!-- Botón (Solo en versión xl y mayores) -->
    <div class="hidden xl:block">
      <a href="https://wa.me/+5215513628057?text=Hola,%20estoy%20interesado%20en%20el%20servicio%20de%20Soluciones%20Web.%20Podr%C3%ADan%20proporcionarme%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20servicio,%20por%20favor?"
         target="_blank"
         class="transition duration-300 ease-in-out xl:w-3/6 bg-amber-400 hover:bg-amber-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded"
         aria-label="Hablemos por WhatsApp">
        <span class="mr-2">¡Hablemos por WhatsApp!</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
      </a>
    </div>
  </div>
</div>

  </div>
</section>



<!-- shop -->
<section id="shop" class="text-gray-600 body-font bg-cover bg-center">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-8">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-4 text-center" tabindex="0">Explora</h3>
      <h4 class="text-stone-200 text-2xl md:text-2xl font-bold mb-4 text-center" tabindex="0">Descubre Nuestra Tienda</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 md:w-1/12 mx-auto" aria-hidden="true">
      <p class="text-stone-200 text-base mb-6 text-center">Encuentra todo lo que necesitas en equipos tecnológicos y más.</p>
    </div>
    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-3 pt-0 pb-16 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
      <button onclick="window.open('https://ggbservicios.mercadoshops.com.mx/', '_blank');"
              class="transition duration-300 ease-in-out w-full marker:md:w-11/12 lg:w-[30%] bg-lime-500 hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-700 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto"
              aria-label="Visita la tienda">
        <span class="mr-2">Visita la tienda</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
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
      <img loading="lazy" src="./images/nosotrosSm.webp" alt="Imagen de nuestro equipo en soporte técnico" class=" w-full h-auto object-cover rounded-lg" role="img" aria-labelledby="imagen-description">
      <p id="imagen-description" class="sr-only">Imagen que muestra al equipo de soporte técnico trabajando en el campo.</p>
    </div>
    <!-- Texto y contenido -->
    <div class="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:order-2 lg:flex lg:items-center lg:justify-center">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-5" tabindex="0">Nosotros</h3>
      <h4 class="text-stone-200 text-2xl font-bold mb-4" tabindex="0">Soluciones TI para tu Empresa</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-2/12 mx-auto lg:mx-0" aria-hidden="true">
      <h5 class="text-stone-200 text-base font-normal mb-8" tabindex="0">Ofrecemos soporte técnico, videovigilancia y desarrollo web, adaptados a las necesidades de su negocio.</h5>
      <p class="text-stone-200 text-base font-normal mb-4 text-left" tabindex="0">Somos un equipo de expertos en Tecnología de la Información, con una sólida trayectoria brindando soluciones tecnológicas en diversos sectores: tiendas departamentales, fábricas, bares, locales comerciales, escuelas y más.
      <br><br>Nos especializamos en adaptar tecnología de punta a tus necesidades y presupuesto, asegurando resultados eficientes y oportunos.</p>
      <p class="text-stone-400 text-base font-normal mb-4 text-left" tabindex="0">Misión:<br>
      Ofrecer soluciones rápidas y efectivas, asesorando a nuestros clientes en la implementación de software y hardware que impulsen el éxito de sus negocios. Estamos comprometidos a cumplir con sus objetivos de manera confiable.</p>
      <p class="text-stone-400 text-base font-normal mb-8 text-left" tabindex="0">Visión:<br>
      Convertirnos en líderes en servicios de TI, proporcionando soluciones que generen confianza y seguridad en nuestros clientes.</p>
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
      <h5 class="text-stone-200 text-base font-normal mb-8" tabindex="0">Garantizamos redes confiables para su empresa, fabricadas con los mejores materiales y respaldadas por una asesoría experta a nuestros clientes.</h5>
      <p class="text-stone-200 text-base font-normal mb-4 text-left" tabindex="0">La experiencia en GGB SERVICIOS TI+ que hemos adquirido a lo largo de los años le permite a nuestro equipo ofrecer la más alta calidad de servicio y la mejor asesoría a nuestros clientes.</p>
      <p class="text-stone-200 text-base font-normal mb-8 text-left" tabindex="0">Las TI incluyen servicios que permiten trabajar en grupo, compartir recursos, y automatizar procesos como las copias de seguridad, las comunicaciones internas, la gestión del conocimiento, mejorando y incrementando los flujos de información dentro de la empresa.</p>
    </div>
    <!-- Imagen -->
    <div class="w-full lg:w-5/12 px-1 lg:px-6 flex justify-center lg:order-2 lg:flex lg:items-center lg:justify-center">
      <img loading="lazy" src="./images/redesSm.webp" alt="Imagen soporte técnico" class=" w-full h-auto object-cover rounded-lg" role="img" aria-labelledby="imagen-description">
      <p id="imagen-description" class="sr-only">Imagen que muestra una red de infraestructura tecnológica.</p>
    </div>
  </div>
</section>
<!-- redes -->




<!-- seguridad -->
<section id="seguridad" class="bg-stone-900 pt-10 pb-20 md:pt-20 px-4 min-h-screen flex flex-col items-center justify-center text-center">
  <div class="container mx-auto px-4">
    <!-- Contenido existente -->
    <h3 class="text-lime-600 text-base uppercase font-bold mb-5">Seguridad</h3>
    <h4 class="text-stone-200 text-2xl font-bold mb-4">Control de Acceso Simplificado</h4>
    <hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto">
    <h5 class="text-stone-200 text-base font-normal mb-8">Mantenga la seguridad de su hogar y oficina al alcance de su mano con nuestras soluciones avanzadas.</h5>
  </div>
  <div class="container mx-auto pt-12 pb-4">
    <!-- Grid en Desktop y Mobile -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Fila o Columna 1 -->
      <div class="flex flex-col items-center text-center lg:text-left justify-center min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg">Controles de acceso para tu hogar y oficina.</h6>
        <img loading="lazy" src="./images/seg01.webp" alt="Control de Acceso" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
        <p class="text-stone-200 text-left text-base pb-4">Control de acceso adaptado a diferentes puertas o portones. Instalamos sistemas en puertas de vidrio, madera, aluminio, rejas, y más, asegurando un control preciso y seguro.</p>
      </div>
      <!-- Fila o Columna 2 -->
      <div class="flex flex-col items-center text-center lg:text-left justify-center min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg">Control de acceso compatible con todo tipo de puertas y portones.</h6>
        <img loading="lazy" src="./images/seg02.webp" alt="Video Vigilancia" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
        <p class="text-stone-200 text-left text-base pb-4">Variedad de mecanismos de cierre. Desde chapas eléctricas y magnéticas hasta sistemas con pivotes, ofrecemos soluciones que se ajustan a sus necesidades.</p>
      </div>
      <!-- Fila o Columna 3 -->
      <div class="flex flex-col items-center text-center lg:text-left justify-center min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg">Control de acceso adaptable a distintos mecanismos de cierre.</h6>
        <img loading="lazy" src="./images/seg03.webp" alt="Soporte Técnico" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
        <p class="text-stone-200 text-left text-base pb-4">Diversos métodos de identificación. Nuestros sistemas de control de acceso pueden operar con tarjetas HID, códigos de barras, equipos biométricos, teclados, RFID, y otros métodos, adaptándose a la tecnología que prefiera.</p>
      </div>
      <!-- Fila o Columna 4 -->
      <div class="flex flex-col items-center text-center lg:text-left justify-center min-h-[300px]">
        <h6 class="text-stone-200 font-bold mb-2 text-lg">Control de acceso con varios tipos de identificación.</h6>
        <img loading="lazy" src="./images/seg04.webp" alt="Desarrollo Web" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
        <p class="text-stone-200 text-left text-base">¿Quiere abrir puertas con una tarjeta o su huella digital? En GGB SERVICIOS TI+ tenemos la tecnología para hacer que su control de acceso sea cómodo y seguro, ya sea con tarjetas, biometría, o teclados, asegurando que solo quienes usted autorice tengan acceso.</p>
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
    <div class="relative">
      <img loading="lazy" src="./images/galeria-01.webp" alt="Imagen 1" class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Instalación de red profesional.</h4>
      </div>
    </div>
    <div class="relative">
      <img loading="lazy" src="./images/galeria-02.webp" alt="Imagen 2" class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Conexiones seguras y confiables.</h4>
      </div>
    </div>
    <div class="relative">
      <img loading="lazy" src="./images/galeria-03.webp" alt="Imagen 3" class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Control de acceso seguro.</h4>
      </div>
    </div>
    <div class="relative">
      <img loading="lazy" src="./images/galeria-04.webp" alt="Imagen 4" class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Cámaras de seguridad instaladas.</h4>
      </div>
    </div>
    <div class="relative">
      <img loading="lazy" src="./images/galeria-05.webp" alt="Imagen 5" class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Instalación de teléfono IP.</h4>
      </div>
    </div>
    <div class="relative">
      <img loading="lazy" src="./images/galeria-06.webp" alt="Imagen 6" class=" w-full h-auto object-cover rounded-lg">
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
      <img loading="lazy" src="./images/dlink.webp" alt="Marca 1" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/cisco.webp" alt="Marca 2" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/siemens.webp" alt="Marca 3" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/yeahlink.webp" alt="Marca 4" class=" h-24 object-contain mx-auto">
    </div>
  </div>
</section>
<!-- Sección de proyectos -->



<!-- contacto -->
<section id="contacto" class="bg-stone-700 pt-10 md:pt-20 pb-15 flex flex-col items-center">
  <div class="container mx-auto px-4 flex flex-col md:flex-row items-center md:items-center md:justify-between">
    <!-- Texto y contenido -->
    <div class="w-full flex flex-col items-center text-center order-1 md:order-2">
      <h3 class="text-lime-600 text-base uppercase font-bold mb-5">Contacto</h3>
      <h4 class="text-stone-200 text-2xl font-bold mb-4">Estamos para brindarte el mejor servicio.</h4>
      <hr class="border-t-6 pb-4 border-lime-600 w-3/12 md:w-2/12 mx-auto">
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
      <label for="nombre" class="sr-only">Nombre Completo</label>
      <input id="nombre" type="text" name="nombre" placeholder="Nombre Completo" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded" required pattern="[A-Za-zs]{1,}">
      
      <!-- Correo electrónico -->
      <label for="correo" class="sr-only">Correo Electrónico</label>
      <input id="correo" type="email" name="correo" placeholder="Correo Electrónico" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded" required>
      
      <!-- Teléfono -->
      <label for="telefono" class="sr-only">Teléfono</label>
      <input id="telefono" type="tel" name="telefono" placeholder="Teléfono" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded" pattern="d{10}">
    </div>

    <!-- Segunda fila: Input para mensaje -->
    <div class="mb-6">
      <label for="mensaje" class="sr-only">Mensaje</label>
      <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded h-40" required></textarea>
    </div>

    <!-- Botón de envío -->
    <div class="flex justify-center">
      <button type="submit" class="transition duration-300 ease-in-out bg-lime-500 hover:bg-lime-600 focus:bg-lime-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-6 rounded">
        <span class="mr-2">Enviar</span>
        
      </button>
    </div>
  </form>



<!-- Botones visibles solo en versión móvil -->
<div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 pt-8 pb-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end lg:hidden">
  <!-- Botón de WhatsApp -->
  <button id="wp-btn-desk" onclick="window.open('https://wa.me/5215513628057', '_blank')" class="w-full md:w-11/12 lg:w-[30%] bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto">
    <span class="mr-2">¡Hablemos por WhatsApp!</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
  </button>
</div>
<div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 pt-0 pb-16 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end lg:hidden">
  <!-- Botón de llamada -->
  <button onclick="window.location.href='tel:+5266514388';" class="w-full md:w-11/12 lg:w-[30%] bg-lime-500 hover:bg-lime-600 focus:outline-none focus:bg-lime-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded mx-auto">
    <span class="mr-2">¡Llámanos ahora!</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
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
      <div class="flex flex-col">
        <p class="text-base mb-4">
          <span class="font-bold">Ubicación:</span> Gral. Juan Enriquez 545 Col. Juan Escutia C.P. 09100 Iztapalapa CDMX.
        </p>
        <a href="https://wa.me/+5215513628057" target="_blank" class="transition duration-300 ease-in-out text-lime-500 hover:text-lime-600 mb-2">WhatsApp 55 8462 0570</a>
        <a href="tel:+5266514388" target="_blank" class="transition duration-300 ease-in-out text-lime-500 hover:text-lime-600">Oficina 6651 4388</a>
      </div>
      <!-- Segunda columna -->
      <div id="map-container" class="flex flex-col">
        <!-- El iframe se insertará aquí -->
      </div>
      <!-- Tercera columna -->
      <div class="flex flex-col">
        <p class="text-lg font-bold mb-2">Suscríbete a nuestro boletín</p>
        <p class="mb-4">Recibe: ofertas, nuevos productos y más. ¡SIN SPAM!</p>
        <form action="enviar_boletin.php" method="POST" class="space-y-4">
          <!-- Token CSRF -->
          <input type="hidden" name="csrf_token" value="<?php echo htmlspecialchars($_SESSION['csrf_token']); ?>">
          
          <!-- Campo de Nombre -->
          <input type="text" name="nombre" placeholder="Nombre Completo" class="w-full p-4 bg-stone-800 text-stone-200 placeholder-stone-400 rounded" required>
          
          <!-- Campo de Correo -->
          <input type="email" name="correo" placeholder="Correo Electrónico" class="w-full p-4 bg-stone-800 text-stone-200 placeholder-stone-400 rounded" required>
          
          <!-- Botón de Envío -->
          <button type="submit" class="transition duration-300 ease-in-out bg-lime-500 hover:bg-lime-600 text-stone-950 font-semibold py-2 px-4 rounded flex items-center justify-center">
            <span class="mr-2">Suscribirse</span>
          </button>
        </form>
      </div>
      <!-- Cuarta columna -->
      <div class="flex flex-col">
        <p class="text-lg font-bold mb-2">Síguenos</p>
        <div class="flex space-x-4">
          <a href="http://www.facebook.com/ggbserv/" class="transition duration-300 ease-in-out text-lime-500 hover:text-lime-600">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
          </a>
          <a href="https://ggbservicios.mercadoshops.com.mx/" target="_blank" class="transition duration-300 ease-in-out">
            <img loading="lazy" src="./images/mercadoshops.svg" alt="MercadoShops" class=" w-[35px] h-[35px] svg-green" />
          </a>
        </div>
      </div>
    </div>

    <!-- Mobile -->
    <div class="lg:hidden flex flex-col space-y-4">
      <!-- Mapa -->
      <div id="map-container-mobile" class="flex flex-col">
        <!-- El iframe se insertará aquí -->
      </div>

      <!-- Dirección y enlaces -->
      <p class="text-base mb-4 text-center">
        <span class="font-bold">Ubicación:</span> Gral. Juan Enriquez 545 Col. Juan Escutia C.P. 09100 Iztapalapa CDMX.
      </p>
      <p class="text-lg text-center font-bold mb-2">Síguenos</p>
      <div class="flex space-x-4 mx-auto">
        <a href="http://www.facebook.com/ggbserv/" class="text-lime-500 hover:text-lime-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
        </a>
        <a href="https://ggbservicios.mercadoshops.com.mx/" target="_blank">
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
      <!-- Texto de copyright -->
      <p class="lg:text-base text-sm text-center mb-4 md:mb-0">© 2024 GGB Servicios TI+. Todos los derechos reservados.</p>
      
      <!-- Links de política y términos -->
      <div class="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between items-center">
        <!-- Enlaces en móviles -->
        <div class="flex w-full justify-between md:hidden">
          <a href="http://ggbservicios.com.mx/avisodeprivacidad.html" class="text-stone-400 hover:text-lime-600">Aviso de Privacidad</a>
          <a href="http://ggbservicios.com.mx/terminosycondiciones.html" class="text-stone-400 hover:text-lime-600">Términos y Condiciones</a>
        </div>
        
        <!-- Enlaces en pantallas grandes -->
        <div class="hidden md:flex flex-row space-x-4">
          <a href="http://ggbservicios.com.mx/avisodeprivacidad.html" class="text-stone-400 hover:text-lime-600">Aviso de Privacidad</a>
          <span class="text-stone-200">|</span>
          <a href="http://ggbservicios.com.mx/terminosycondiciones.html" class="text-stone-400 hover:text-lime-600">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- Fin Footer -->



<!-- CTA solo para Mobile / Tablet -->
<section id="cta" class="fixed bottom-0 left-0 w-full h-[68px] bg-lime-950 p-8 flex items-center justify-center md:hidden z-50" aria-live="polite">
  <button onclick="window.open('https://wa.me/+5215513628057', '_blank')" aria-label="Hablemos por WhatsApp" class="w-full bg-amber-400 hover:bg-amber-300 focus:outline-none focus:bg-amber-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-4 rounded">
    <span class="mr-2">¡Hablemos por WhatsApp!</span>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
  </button>
</section>
<!-- Fin CTA -->


  <!-- END -->
  </div>
`;const h=document.getElementById("menu-btn"),l=document.getElementById("mobile-menu"),c=document.getElementById("menu-icon"),g=document.body,d=document.querySelectorAll("nav a");let i=!1;h.addEventListener("click",()=>{l.classList.toggle("hidden"),g.classList.toggle("overflow-hidden"),i=!i,l.classList.contains("hidden")?c.innerHTML='<path d="M4 6h16M4 12h16m-7 6h7"></path>':c.innerHTML='<path d="M6 18L18 6M6 6l12 12"></path>'});d.forEach(e=>{e.addEventListener("click",function(){l.classList.add("hidden"),g.classList.remove("overflow-hidden"),i=!1,c.innerHTML='<path d="M4 6h16M4 12h16m-7 6h7"></path>'})});let p=0;const b=document.getElementById("topbar"),u=document.getElementById("header");window.addEventListener("scroll",function(){const e=window.scrollY||document.documentElement.scrollTop;e>p?(b.style.transform="translateY(-100%)",u.style.transform="translateY(-50%)",i&&(l.style.transform="translateY(-100%)")):(b.style.transform="translateY(0)",u.style.transform="translateY(0)",i&&(l.style.transform="translateY(0)")),p=e<=0?0:e});const x=document.getElementById("cta"),m=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?x.classList.remove("visible"):x.classList.add("visible")})},{threshold:0});m.observe(document.querySelector("#ubicacion"));m.observe(document.querySelector("footer"));m.observe(document.getElementById("wp-btn-desk"));function v(){let e=-1;document.querySelectorAll("section").forEach((t,n)=>{const a=t.getBoundingClientRect();a.top<=window.innerHeight/2&&a.bottom>=window.innerHeight/2&&(e=n)}),d.forEach(t=>t.classList.remove("activo")),e!==-1&&d.forEach(t=>{t.getAttribute("href")===`#${document.querySelectorAll("section")[e].id}`&&t.classList.add("activo")})}window.addEventListener("scroll",v);window.addEventListener("load",v);function f(){return`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.517616371986!2d-99.04210952402956!3d19.39002894203776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff87e220f72f%3A0x205133a14671241b!2sGGB%20Servicios%20TI%2B!5e0!3m2!1sen!2smx!4v1725665480714!5m2!1sen!2smx"
      width="100%" 
      height="300" 
      style="border:5px solid #84cc16;" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>`}document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("map-container");e?(e.innerHTML=f(),console.log("Iframe inserted successfully in desktop view")):console.log("Map container not found in desktop view");const t=document.getElementById("map-container-mobile");t?(t.innerHTML=f(),console.log("Iframe inserted successfully in mobile view")):console.log("Map container mobile not found")});
