(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();document.querySelector("#app").innerHTML=`
  <div>
    <div class="mediaquery">
      <div class="visible sm:invisible md:invisible lg:invisible xl:invisible 2xl:invisible">XS</div>
      <div class="invisible sm:visible md:invisible lg:invisible xl:invisible 2xl:invisible">SM</div>
      <div class="invisible md:visible lg:invisible xl:invisible 2xl:invisible">MD</div>
      <div class="invisible lg:visible xl:invisible 2xl:invisible">LG</div>
      <div class="invisible xl:visible 2xl:invisible">XL</div>
      <div class="invisible 2xl:visible">XXL</div>
    </div>
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
         alt="Imagen del logotipo de GGB Servicios" 
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
    <h5 class="text-stone-200 text-base font-normal mb-12">Ofrecemos soporte técnico, videovigilancia y desarrollo web, adaptados a las necesidades de su negocio.</h5>

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
    <img loading="lazy" src="./images/soluciones-web.webp" alt="Soluciones web" class=" w-full h-auto object-cover rounded-lg">
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
      <h5 class="text-stone-200 text-base font-normal mb-12" tabindex="0">Ofrecemos soporte técnico, videovigilancia y desarrollo web, adaptados a las necesidades de su negocio.</h5>
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
      <h5 class="text-stone-200 text-base font-normal mb-12" tabindex="0">Garantizamos redes confiables para su empresa, fabricadas con los mejores materiales y respaldadas por una asesoría experta a nuestros clientes.</h5>
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
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
      <h6 class="text-stone-200 font-bold mb-2 text-lg">Controles de acceso para tu hogar y oficina.</h6>
      <img loading="lazy" src="./images/seg01.webp" alt="Control de Acceso" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
      <p class="text-stone-200 text-left text-base pb-4">Control de acceso adaptado a diferentes puertas o portones. Instalamos sistemas en puertas de vidrio, madera, aluminio, rejas, y más, asegurando un control preciso y seguro.</p>
    </div>
    <div class="lg:hidden"><hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto"></div>
    <!-- Fila o Columna 2 -->
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
      <h6 class="text-stone-200 font-bold mb-2 text-lg">Control de acceso compatible con todo tipo de puertas y portones.</h6>
      <img loading="lazy" src="./images/seg02.webp" alt="Video Vigilancia" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
      <p class="text-stone-200 text-left text-base pb-4">Variedad de mecanismos de cierre. Desde chapas eléctricas y magnéticas hasta sistemas con pivotes, ofrecemos soluciones que se ajustan a sus necesidades.</p>
    </div>
    <div class="lg:hidden"><hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto"></div>
    <!-- Fila o Columna 3 -->
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
      <h6 class="text-stone-200 font-bold mb-2 text-lg">Control de acceso adaptable a distintos mecanismos de cierre.</h6>
      <img loading="lazy" src="./images/seg03.webp" alt="Soporte Técnico" class=" w-1/2 h-auto object-cover rounded-lg mb-4">
      <p class="text-stone-200 text-left text-base pb-4">Diversos métodos de identificación. Nuestros sistemas de control de acceso pueden operar con tarjetas HID, códigos de barras, equipos biométricos, teclados, RFID, y otros métodos, adaptándose a la tecnología que prefiera.</p>
    </div>
    <div class="lg:hidden"><hr class="border-t-6 pb-4 border-lime-600 w-3/12 lg:w-1/12 mx-auto"></div>
    <!-- Fila o Columna 4 -->
    <div class="flex flex-col items-center lg:items-start text-center lg:text-left justify-start min-h-[300px]">
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
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-01.webp" alt="Instalación de red profesional." class=" w-full h-auto object-cover rounded-lg ">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Instalación de red profesional.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-02.webp" alt="Conexiones seguras y confiables." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Conexiones seguras y confiables.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-03.webp" alt="Control de acceso seguro." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Control de acceso seguro.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-04.webp" alt="Cámaras de seguridad instaladas." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Seguridad</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Cámaras de seguridad instaladas.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-05.webp" alt="Instalación de teléfono IP." class=" w-full h-auto object-cover rounded-lg">
      <!-- Pleca sobre la imagen -->
      <div class="absolute bottom-0 left-0 w-full h-1/3 bg-stone-900 bg-opacity-80 flex flex-col items-center justify-center text-center pt-6 pb-6 px-4 rounded-b-lg">
        <h3 class="text-lime-600 text-base uppercase font-bold mb-1">Red</h3>
        <h4 class="text-stone-200 text-base font-bold mb-1">Instalación de teléfono IP.</h4>
      </div>
    </div>
    <div class="relative rounded-lg border-8 border-stone-200">
      <img loading="lazy" src="./images/galeria-06.webp" alt="Cableado de red eficiente." class=" w-full h-auto object-cover rounded-lg">
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
      <img loading="lazy" src="./images/dlink.webp" alt="DLink" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/cisco.webp" alt="Cisco" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/siemens.webp" alt="Siemens" class=" h-24 object-contain mx-auto">
      <img loading="lazy" src="./images/yeahlink.webp" alt="Yeah Link" class=" h-24 object-contain mx-auto">
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
    <input id="nombre" type="text" name="nombre" placeholder="Nombre Completo" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded focus:bg-stone-950 focus:text-stone-400 focus:outline-none" required pattern="[A-Za-zÀ-ÿs'-]{1,}" title="Utiliza solo letras, espacios, apóstrofes o guiones">
    
    <!-- Correo electrónico -->
    <label for="correo" class="sr-only">Correo Electrónico</label>
    <input id="correo" type="email" name="correo" placeholder="Correo Electrónico" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded focus:bg-stone-950 focus:text-stone-400 focus:outline-none" required>
    
    <!-- Teléfono -->
    <label for="telefono" class="sr-only">Teléfono</label>
    <input id="telefono" type="tel" name="telefono" placeholder="Teléfono" class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded focus:bg-stone-950 focus:text-stone-400 focus:outline-none" pattern="(+d{1,3}[- ]?)?(?d{1,4})?[- ]?d{1,4}[- ]?d{1,9}" title="Introduce un número de teléfono válido, incluyendo espacios, guiones o paréntesis si es necesario">
  </div>

  <!-- Segunda fila: Input para mensaje -->
  <div class="mb-6">
    <label for="mensaje" class="sr-only">Mensaje</label>
    <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí..." class="w-full p-4 bg-stone-950 text-stone-400 placeholder-stone-400 rounded h-40 focus:bg-stone-950 focus:text-stone-400 focus:outline-none"></textarea>
  </div>

  <!-- Botón de envío -->
  <div class="flex justify-center">
    <button type="submit" class="transition duration-300 ease-in-out bg-lime-500 hover:bg-lime-600 focus:bg-lime-400 text-stone-950 text-base font-semibold flex items-center justify-center py-2 px-6 rounded">
      <span>Enviar</span>
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
            <span class="">Suscribirse</span>
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
      <p class="lg:text-base text-sm text-center mb-4 md:mb-0">© 2025 <b>GGB Servicios TI+</b>. Todos los derechos reservados.</p>
      
      <!-- Links de política y términos -->
      <div class="flex flex-col md:flex-row w-full md:w-auto justify-center md:justify-between items-center">
        <!-- Enlaces móviles para abrir modales -->
        <div class="flex w-full justify-between md:hidden">
          <a href="#" id="open-privacidad" class="text-stone-400 hover:text-lime-600">Aviso de Privacidad</a>
          <a href="#" id="open-terminos" class="text-stone-400 hover:text-lime-600">Términos y Condiciones</a>
        </div>

        <!-- Enlaces en pantallas grandes -->
        <div class="hidden md:flex flex-row space-x-4">
          <a href="#" id="open-privacidad-desktop" class="text-stone-400 hover:text-lime-600">Aviso de Privacidad</a>
          <span class="text-stone-200">|</span>
          <a href="#" id="open-terminos-desktop" class="text-stone-400 hover:text-lime-600">Términos y Condiciones</a>
        </div>
      </div>
    </div>
  </div>
</footer>
<!-- Fin Footer -->
<div id="end-of-page" class="h-1"></div>


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



<!-- Modal de Aviso de Privacidad -->
<div id="modal-privacidad" class="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden">
  <div class="modal-content bg-stone-900 text-stone-200 p-6 w-full lg:w-8/12 h-[50vh] xl:h-[80vh] flex flex-col rounded-lg overflow-auto overflow-x-hidden">
    <!-- Header del Modal -->
    <div class="modal-header bg-stone-800 p-4 flex justify-between items-center">
      <h2 class="text-xl font-bold text-center flex-grow">Aviso de Privacidad</h2>
      <button data-close="modal-privacidad" class="text-lime-500 hover:text-lime-600 text-lg font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Contenido del Modal -->
    <div class="modal-body flex-1 overflow-auto p-4">
      <p class="text-base">

GGB TI Experts S.A. de C.V. , en su carácter de Responsable del tratamiento de los datos personales de sus Clientes, pone a su disposición el presente Aviso de Privacidad Integral, el cual ha sido elaborado en apego a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y su regulación secundaria.
<br>
IDENTIFICACIÓN DEL RESPONSABLE<br>
Razón social<br>
GGB TI EXPERTS, S.A DE C.V.<br>
Giro Comercio al por menor de computadoras y sus accesorios
Servicios de consultaría en computacion<br>
Nombre Comercial<br>
GGB SERVICIOS TI+<br>
Sitio web<br>
https://ggbservicios.com.mx/<br>
Telefono<br>
55 66 51 43 88<br>
Domicilio<br>
Gral. Juan Enriquez 545<br>
Correo Electronico<br>
privacidad@ggbservicios.com.mx<br>
Horario de Atencion<br>
Lunes a Sabado de 8:00 a 20:00<br>
<br><br>
PÚBLICO AL QUE DIRIGIMOS ESTE AVISO DE PRIVACIDAD<br>
Este Aviso de Privacidad en su versión Integral está dirigido a nuestros Clientes.<br>
<br><br>
DATOS PERSONALES<br>
Le informamos que en GGB TI EXPERTS, S.A. DE C.V. realizamos el tratamiento de diversas categorías de datos personales. Para su mejor entendimiento, a continuación, detallamos cuáles categorías y datos personales específicos son las que están bajo nuestro tratamiento:
<br><br>
Datos Biométricos<br>
Datos de Contacto<br>
Datos de Identificación<br>
Datos Financieros<br>
De las categorías que se indican, el tipo de datos personales de los cuales realizamos tratamiento, en forma específica, son:<br>
Categoría<br>
Dato personal<br>
Datos Biométricos<br>
Firma Autógrafa<br>
Datos de Contacto<br>
Correo electrónico institucional<br>
Correo electrónico particular<br>
Teléfono particular<br>
Teléfono institucional<br>

<br><br>
Datos de Identificación<br>
Nombre completo<br>
Domicilio particular<br>
Domicilio de trabajo<br>
Identificación oficial<br>
RFC (Registro Federal de Contribuyentes)

<br><br>
Datos Financieros<br>
Número de cuenta bancaria<br>
CLABE Interbancaria<br>
Nombre de tiular de cuenta bancaria<br>

<br>
<br>
DATOS PERSONALES SENSIBLES<br>
Le informamos que No recabamos ni realizamos el tratamiento de datos personales de carácter sensible de nuestros Clientes. En caso de que sea requerido un cambio al respecto, le haremos de su conocimiento dicha modificación en nuestro Aviso de Privacidad Integral.
<br><br>
¿CÓMO OBTENEMOS SUS DATOS PERSONALES?<br>
Los datos personales que recabamos los obtenemos de las siguientes formas:
<br><br>
a. a través de nuestras redes sociales oficiales<br>
b. a través de nuestro chat en línea<br>
c. a través de nuestros formatos electrónicos de registro<br>
d. a través de nuestros formularios de contacto vía web<br>
e. vía correo electrónico<br>
f. vía telefónica<br>
<br><br>
FINALIDADES DEL TRATAMIENTO DE DATOS PERSONALES<br>
Las finalidades son aquellas que motivan el tratamiento de sus datos personales, para su entendimiento y por disposición de ley se clasifican en primarias y secundarias, siendo las primarias aquellas que son necesarias para el desarrollo de una obligación jurídica o del motivo principal por el cual existe una relación entre el Titular (usted) y el Responsable (nosotros); la finalidad secundaria es aquella que no es necesaria para el desarrollo de una relación jurídica, por lo cual usted puede indicarnos que no autoriza el tratamiento de sus datos personales en alguna o todas las que se mencionan.
<br><br>
FINALIDADES PRIMARIAS<br>
i. Relacionadas con Atención a Clientes<br>
a. Atención a dudas, quejas y sugerencias de clientes<br>
ii. Relacionadas con Facturación y Cobranza<br>
a. Cobranza de servicios contratados<br>
b. Facturación y envío de comprobante fiscal<br>
iii. Relacionadas con Prestación de Servicios<br>
a. Compra de servicios<br>
b. Creación de cuenta de usuario<br>
c. Devolución de pagos de servicios derivados de la aplicación de garantías<br>
d. Elaboración de cotizaciones<br>
e. Reestablecer cuenta de usuario<br>
f. Registro de dominio en whois (Sistema de base de datos utilizado para la consulta de nombres de dominio y sus datos personales, así como para comprobar y verificar la titularidad de los mismos y la asignación de Recursos de Internet). Por disposiciones internacionales los datos personales correspondientes a su nombre completo, correo electrónico, domicilio y teléfono serán públicos para efectos de identificación y registro en el sistema de WHOIS.
<br>g. Registro de método de pago para compras<br>
h. Renovaciones de servicios<br>
iv. Relacionadas con Soporte Técnico<br>
a. Brindar soporte técnico general y especializado<br>
<br><br>
FINALIDADES SECUNDARIAS<br>
i. Relacionadas con Mercadotecnia<br>
a. Envío de información de descuentos<br>

<br>
<br>

MECANISMO PARA MANIFESTAR SU NO ACEPTACIÓN A LAS FINALIDADES SECUNDARIAS<br>
En caso de que usted esté realizando el uso de nuestro chat en línea, la persona que le esté atendiendo le indicará si quiere manifestar su negativa a las finalidades secundarias
En cualquier otro momento, usted deberá hacer uso del ejercicio de su Derecho de Oposición establecido en la sección “Derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)”
<br>TRANSFERENCIAS DE DATOS PERSONALES<br>
No realizamos transferencia nacional ni internacional de sus datos personales a terceros.<br>
<br><br>
DERECHOS DE ACCESO, RECTIFICACIÓN, CANCELACIÓN Y OPOSICIÓN (ARCO)<br>
¿QUÉ SON LOS DERECHOS ARCO?<br>
Los Derechos ARCO son el mecanismo legal que le permiten ejercer sus Derechos de Acceso, Rectificación, Cancelación y Oposición, los cuales consisten en:
<br><br>
Acceder a los datos personales, exclusivamente a los suyos salvo que sea representante legal o tutor de otro titular, que se encuentran bajo nuestro tratamiento
<br>Solicitar que realicemos correcciones o actualizaciones de sus datos personales<br>
Solicitar que eliminemos sus datos personales, cuando esto sea legalmente procedente<br>
Oponerse a la realización de las finalidades primarias establecidas en este Aviso de Privacidad – supuesto bajo el cual no seguirán prestándose los servicios que ofrecemos
<br>Solicitar su oposición a la realización de las finalidades secundarias indicadas<br>
Solicitar que sus datos personales no sean transferidos a terceros<br>
Limitar el uso o bien revocar el consentimiento al tratamiento de sus datos personales<br>
MEDIOS PARA EJERCER LOS DERECHOS ARCO<br>
Para que usted ejerza cualesquiera de sus derechos ARCO, deberá realizarlo en forma personal siguiendo el procedimiento que se indica en la sección “Procedimiento para ejercer los Derechos ARCO” de este Aviso.
<br>  PROCEDIMIENTO PARA EJERCER LOS DERECHOS ARCO<br>
El titular de los datos personales deberá presentar en Paseo de la Reforma 412 Piso 7 Col. Juarez. 06600. Ciudad de México, México en un horario de atención de Lunes a Jueves de 10:00 a 14:00 y 16:00 a 18:00, un escrito libre que incluya como mínimo los siguientes datos:
<br><br>
Nombre completo del titular de los datos personales<br>
Formas de contactarlo y comunicarle la respuesta, ya sea cualquiera de los siguientes:<br>
Dirección para recibir mensajería de SEPOMEX<br>
Número de teléfono particular<br>
Número de teléfono celular<br>
Dirección de correo electrónico<br>
Mención clara y precisa del derecho que busca ejercer, debiendo señalar uno a la vez<br>
Identificación oficial vigente, la cual deberá de presentarse en original y copia para su cotejo<br>
En caso de no ser usted el titular de los datos personales, deberá adjuntar el documento que lo acredite como representante legal<br>
En caso de solicitar cambios derivados de correcciones o actualizaciones, deberá presentar el documento legal que acredite este hecho<br>
Información adicional y precisa que nos facilite la búsqueda de los datos solicitados, señalando - en medida de lo posible - aquellos que nos haya proporcionado y/o el periodo en el que fueron proporcionados<br>
Firma autógrafa, la cual deberá de coincidir con la identificación oficial que presente para realizar el trámite.<br>
En un plazo no mayor a 5 días hábiles siguientes a recibir su solicitud, en caso de que exista una duda o requiramos más información sobre su solicitud, lo contactaremos a efectos de comunicarle dicha situación y obtener más información de su parte respecto a la solicitud. La respuesta a nuestra solicitud deberá hacerla en un plazo que no deberá exceder de 10 días hábiles.<br>
<br>
En un plazo no mayor a 20 días hábiles siguientes a recibir su solicitud, o posteriores a haber respondido las aclaraciones solicitadas por nuestra parte, lo contactaremos a efectos de comunicarle la respuesta a su solicitud, esta respuesta será entregada de manera personal en nuestro domicilio, previa acreditación del titular o de su representante.<br>
<br>
Para más información acerca de este Aviso de Privacidad o cualquier duda sobre como ejercer sus Derechos de Acceso, Revocación, Cancelación y Oposición (ARCO), limitar el uso o Revocar su consentimiento, deberá enviar un correo electrónico a: privacidad@hosting-mexico.net, con el asunto “Información de Derechos ARCO” o bien llamar al número telefónico: Ciudad de México: (55) 2000 2617 | Interior de la República: 01800 062 0475 en los días y horarios de atención previamente mencionados.
<br><br>
CONSENTIMIENTO<br>
Le informamos que No recabamos, ni tratamos datos personales de carácter sensible, por lo que no es necesario que manifieste su consentimiento de manera expresa en este documento. Salvo que ejerza alguno de sus Derechos de Acceso, Rectificación, Cancelación u Oposición (ARCO), limite el uso o revoque el consentimiento al tratamiento de sus datos personales, consideramos que usted acepta lo establecido en el presente Aviso de Privacidad Integral.
<br>
MECANISMO PARA REVOCAR EL CONSENTIMIENTO OTORGADO PARA EL TRATAMIENTO DE SUS DATOS PERSONALES<br>
En caso de que usted quiera revocar el consentimiento al tratamiento de sus datos personales, usted deberá realizar el mismo procedimiento que está establecido en la sección “Derechos de Acceso, Rectificación, Cancelación y Oposición (ARCO)”.
<br><br>
Su solicitud quedará sujeta a la revisión de la misma en nuestra Área de Privacidad; en caso de que no se cumpla con una excepción de ley o no exista alguna disposición jurídica que nos sujete a realizar el tratamiento de sus datos personales, su solicitud será procedente y le será comunicada la decisión en un término de 10 días hábiles.
<br><br>
LIMITACIÓN PARA USO Y DIVULGACIÓN DE DATOS PERSONALES<br>
En caso de que usted quiera solicitar la limitación al uso y/o divulgación de sus datos personales, usted deberá realizar cualquiera de las siguientes acciones:
<br><br>
PARA USO EXCLUSIVO CON GGB TI EXPERTS, S.A. DE C.V.<br>
Si usted desea manifestar su negativa a seguir recibiendo comunicados o promociones de nuestra parte, envíe un correo electrónico a privacidad@ggbservicios.com.mx indicando en el asunto del correo: “Desuscribirme”.
<br><br>
La dirección de correo electrónico que desea desuscribir deberá ser la misma desde la cual se recibe su solicitud; ésta será eliminada en un plazo de 24 horas hábiles hasta 72 horas hábiles posteriores a la recepción de su correo.
<br><br>
PARA TEMAS COMERCIALES<br>
Visite el sitio web de la Procuraduría Federal de Consumidor en donde está a su disposición el Registro Público de Consumidores (RPC) previsto en la Ley Federal de Protección al Consumidor, donde usted decidirá sobre el uso de sus datos personales en el sector comercial, turístico y de telecomunicaciones.
<br><br>
PARA TEMAS FINANCIEROS<br>
Visite el sitio web de la Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros en donde está a su disposición Registro Público de Usuarios (REUS) previsto en la Ley de Protección y Defensa al Usuario de Servicios Financieros, donde usted decidirá sobre el uso de sus datos personales en el sector financiero.
<br>
AUTORIDAD COMPETENTE<br>
Una vez ejercido sus Derechos de Acceso, Rectificación, Cancelación u Oposición; Haber limitado el uso o divulgación de sus datos personales, o Haber revocado su consentimiento para el uso de sus datos personales, sí usted considera que hemos realizado alguna omisión o alguna acción violatoria a lo establecido en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, le informamos que la autoridad mexicana competente ante la cual deberá interponer su denuncia o inconformidad es el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI).
<br><br>
MEDIDAS DE SEGURIDAD INFORMÁTICA IMPLEMENTADAS<br>
Como medida de seguridad en nuestro sitio y sus subdominios tenemos mecanismos de seguridad suficientes para proveer conexiones seguras vía https, así como protocolos de cifrado tales como certificados de seguridad vigentes SSL (Secure Sockets Layer), la información relacionada con la vigencia y validez de estos está disponible para su consulta al dar clic en el ícono de candado de seguridad que se muestra a la izquierda del nombre de dominio en la barra de navegación de su explorador web:
<br><br>
USO DE COOKIES, WEB BEACONS U OTRAS TECNOLOGÍAS SIMILARES<br>
En nuestro sitio web y sus dominios, Sí recabamos cookies y sí recabamos web beacons.
<br><br>
Esta información nos permite conocer:
<br>
Anuncios que visita en nuestro sitio (en forma anónima)<br>
Información del navegador: programa y versión (en forma anónima)<br>
Fecha y hora de su visita (en forma anónima)<br>
Información que intercambia con nuestro sitio (en forma anónima)<br>
Páginas visitadas (en forma anónima)<br>
Dirección IP desde la cual nos visita (en forma anónima)<br>
En lo general, su ubicación y su actividad dentro de nuestro sitio web, para optimizar la búsqueda de sus servicios preferidos dentro de nuestro sitio web empresarial.
<br>  Para oponerse a que recabemos estos datos sobre su visita, le recomendamos consultar las guías de configuración de privacidad del navegador que usa, a continuación, compartimos la información de los navegadores más utilizados:

<br><br>
Firefox <br>(
support.mozilla.org/es/kb/configuracion-de-la-privacidad-el-historial-de-nav
);<br>
Chrome<br> (
support.google.com/chrome/answer/114836?hl=es-419
);<br>
Safari <br>(
support.apple.com/kb/HT1677?viewlocale=es_ES
);<br>
Internet Explorer<br> (
windows.microsoft.com/es-es/windows/change-internet-explorer-privacy-settings#1TC=windows-7
)<br><br>
ACTUALIZACIONES<br>
Este Aviso de Privacidad Integral será actualizado en tiempo futuro derivado de modificaciones al marco jurídico en materia de protección de datos personales, cambios en el modelo de negocio, nuevos datos personales que se recaben y/o cambio en las finalidades.
<br>
Las actualizaciones y modificaciones que se realicen al presente Aviso de Privacidad Integral se harán de su conocimiento a través de una comunicación vía nuestro panel de clientes en la sección de Anuncios, en el INICIO de nuestro sitio web (http://hosting-mexico.net) y por medio de una publicación en: http://hosting-mexico.net/privacidad.htm
<br>
La versión actualizada de este Aviso de Privacidad se ha realizado con fecha 10 de junio de 2020.

</p>
    </div>
  </div>
</div>


<!-- Modal de Términos y Condiciones -->
<div id="modal-terminos" class="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center hidden">
  <div class="modal-content bg-stone-900 text-stone-200 p-6 w-full lg:w-8/12 h-[50vh] xl:h-[80vh] flex flex-col rounded-lg overflow-auto overflow-x-hidden">
    <!-- Header del Modal -->
    <div class="modal-header bg-stone-800 p-4 flex justify-between items-center">
      <h2 class="text-xl font-bold text-center flex-grow">Términos y Condiciones</h2>
      <button data-close="modal-terminos" class="text-lime-500 hover:text-lime-600 text-lg font-bold flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 ml-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <!-- Contenido del Modal -->
    <div class="modal-body flex-1 overflow-auto p-4">
      <p class="text-base">Los presentes términos y condiciones constituyen un contrato (en lo sucesivo referido como el Contrato) entre usted (en lo sucesivo referido como el Cliente) y GGB SERVICIOS TI+ (en lo sucesivo referido como la Empresa). En caso de que usted este celebrando el presente Contrato en nombre de un tercero u alguna persona física, persona moral o cualquier otra entidad legal, en este acto usted declara ser mayor de edad y que cuenta con las facultades legales suficientes para obligar a dicha persona física, persona moral o cualquier otra entidad legal a lo establecido en el presente Contrato, en cuyo caso el término Cliente se referirá a dicha persona física, persona moral o entidad legal representada por usted. El Cliente reconoce y acepta que la Empresa no es responsable de ninguna disputa suscitada entre el Cliente y terceros que llegaren a alegar algún interés en cuanto a lo establecido en el presente Contrato. La Empresa no establecerá ninguna comunicación, no proporcionará información a persona diferente a la persona física o moral que en su carácter de representante o mandante suscriba el presente Contrato.<br>
  (La Empresa y el Cliente pueden ser referidos individualmente como una "Parte" y colectivamente como las "Partes"). Este Contrato establece los términos y condiciones generales de uso para el Cliente de los productos y servicios puestos a disposición por GGB TI EXPERTS, S.A. DE C.V., haciendo negocios como GGB SERVICIOS TI+, en concordancia a las siguientes:
<br><br>
  CLÁUSULAS
<br><br>
<br>  PRIMERA.- DEFINICIONES.
<br>  "Información para Autenticación" Es toda información personal otorgada por el Cliente a la Empresa, la cual podrá ser utilizada por la Empresa para verificar la propiedad de la cuenta del Cliente.
<br>  "Fondos Bloqueados” Se refiere a todo pago efectuado por personas que intenten registrar nombres de dominios prohibidos, en concordancia a los presentes términos y condiciones. Los Fondos Bloqueados serán puestos a disposición de las autoridades judiciales correspondientes o en la cuenta que la persona que pretenda registrar indique por cualquier medio escrito.
<br>  "Información Propietaria" como se usa en el presente Contrato, se entenderá como todos los datos, informaciones y materiales, incluyendo, sin limitación, software informático, datos, informaciones, bases de datos, protocolos, implementación de referencia, documentaciones, especificaciones funcionales y de interfaz, proporcionados por la Empresa para el Cliente en virtud de este Contrato, ya sean transmitidos de manera escrita, oral, mediante el Sitio Web de la Empresa o de cualquier otra forma.
<br>  "Datos de Contacto del Cliente" se refiere a la información de contacto del Cliente que se enumeran en la base de datos de la Empresa, los cuales deberán ser veraces y comprobables.
<br>  "Panel de Control del Cliente" se refiere al conjunto de interfaces basadas en Web proporcionadas por la Empresa y sus proveedores de servicios al Cliente y que permite al Cliente gestionar operaciones.
<br>  "Proveedor de Servicios" son los terceros que intervienen en la operación, para hacer posible brindar el servicio ofrecido por la Empresa. Los términos y condiciones de terceros serán aplicables a los Clientes. Es responsabilidad del Cliente conocer y aceptar los términos y condiciones de los Proveedores de Servicios. La Empresa por ningún motivo se hace responsable de la calidad, continuidad o adecuada prestación de un servicio proveído por los Proveedores de Servicio.
<br>  "Tickets" Son las solicitudes de soporte generadas por los Clientes a través de los medios proporcionados por la Empresa. Los Tickets serán utilizados como un medio de administración y control para brindar un servicio eficiente.
<br>  "Sistema de la Empresa" se refiere al conjunto de Servidores, Software, Interfaces, servicios de la Empresa y API que son provistos para utilización directa o indirectamente bajo el presente Contrato por la Empresa y/o sus Proveedores de Servicios.
<br>  "Base de Datos de la Empresa" es el conjunto de elementos de datos almacenados en los Servidores de la Empresa.
<br>  "Servicios de la Empresa" se refiere a todos los productos y servicios puestos a disposición o suministrados, prestados o vendidos por la Empresa.
<br>  "Sitio Web de la Empresa" se refiere al sitio web por medio del cual la Empresa hace negocios.
<br>  "Proveedores de Servicios" se refiere individual y colectivamente a terceros que puedan, directa o indirectamente contribuyan a proveer los servicios ofrecidos por la Empresa.
<br>  "Personas Prohibidas" se refiere a personas, organizaciones o entidades situadas en ciertos países sancionados (cada uno un "País Sancionado") y ciertos individuos, organizaciones, entidades o nombres de dominio, incluyendo, sin limitación, "Ciudadanos Especialmente Designados" ("SDN", en inglés), como listados por el gobierno de los Estados Unidos de América por medio de la Oficina de Control de Activos Extranjeros ("OFAC") del Departamento de Tesoro, con los cuales todas o ciertas actividades comerciales están prohibidas.

<br><br>  SEGUNDA.- PRIVACIDAD.
<br>  El Cliente deberá conocer y aceptar el aviso de privacidad de la EMPRESA (el cual podrá consultar aquí) y conocer y cumplir con la Política de Uso de Recursos.
<br>  El uso de los Servicios de la Empresa se regirá adicionalmente por cada uno de los términos y condiciones de terceros que intervengan en la operación, para efecto de proporcionar adecuadamente el servicio ofrecido por la Empresa.
<br>  TERCERA.- OBLIGACIONES DE LA EMPRESA.

<br>  La Empresa pondrá a disposición las últimas versiones del presente, el aviso de privacidad y la política de uso de recursos en http://hosting-mexico.net/terminos.htm.

<br><br>

<br>  CUARTA.- OBLIGACIONES DEL CLIENTE.
<br>  El Cliente declara que se encuentra en pleno uso de sus facultades físicas, mentales y legales para hacer uso de los servicios y gozar de los productos ofrecidos por el Cliente.
<br>  El Cliente deberá en todo momento estar al tanto de cualquier cambio que pueda integrarse a los presentes Términos y Condiciones, al Aviso de Privacidad y la Política de Uso de Recursos.
<br>  El cliente reconoce y acepta que por ningún motivo o causa la Empresa responderá por pérdidas ocasionadas, ingresos esperados no obtenidos o lucro cesante, daños consecuenciales o indirectos en concordancia a lo establecido en el presente Contrato. El Cliente reconoce que en caso de cualquier controversia y/o discrepancia en relación con cualquier servicio solicitado, la información ingresada en los sistemas de la Empresa prevalecerá.
<br>  El Cliente se compromete a proveer, mantener y actualizar informaciones vigentes, completas y precisas para todos los elementos de datos sobre el Cliente en la base de datos de la Empresa y en el Whois de cada dominio contratado.
<br>  Es obligación del Cliente solicitar la renovación de sus servicios en tiempo y forma. El Cliente en este acto reconoce y acepta que la EMPRESA no será responsable de los efectos que deriven de la falta de renovación de contrato.
<br>  El Cliente reconoce que los Servicios de la Empresa podrán obtenerse por medio de Proveedores de Servicios y, como tal, de tiempo en tiempo pueden ocurrir cambios; consecuentemente, estos servicios pueden verse modificados. El Cliente deberá cumplir con todos los términos y condiciones establecidos por la Empresa y/o sus proveedores de servicios. El Cliente reconoce y acepta que la Empresa no tendrá ninguna responsabilidad relacionada con cualquier tipo de interrupciones en el servicio.
<br>  El Cliente no podrá realizar transacciones con Persona Prohibida o actuar en su nombre. Si el Cliente es una Persona Prohibida, se prohíbe al Cliente registrarse, suscribirse o utilizar cualquier servicio de la Empresa. Cualquier violación de esta cláusula tendrá como consecuencia la terminación inmediata del Contrato sin que el Cliente reciba reembolso o compensación de ningún tipo.
<br>  La Empresa y EL Cliente reconocen y aceptan que el Cliente es el único responsable de:
<br>  El contenido de su cuenta y el uso del sitio.
<br>  El uso del nombre de dominio contratado.
<br>  Evitar llevar a cabo actividades ilícitas con el dominio y/o hospedaje contratado.
<br>  La adecuada realización de copias de seguridad y resguardo fuera de sistemas de La Empresa de su información.
<br>  Verificar la seguridad de su sitio, actualizando sus aplicaciones instaladas.
<br>  Mantener su información de contacto actualizada.
<br>  Mantener sus claves de acceso resguardadas de forma segura.
<br>  Abstenerse de enderezar cualquier demanda en contra de la EMPRESA, sus afiliadas, subsidiarias o sus representantes, como resultado de cualquier error cometido por el Cliente.
<br>  El uso y resguardo de códigos de transferencia de dominios.
<br>  Verificar la fecha de vencimiento de los dominios contratados en sistemas públicos WHOIS y solicitar la renovación de los dominios.
<br>  Verificar la exactitud de los datos publicados en Whois para cada dominio contratado.
<br>  El Cliente garantiza a la EMPRESA que usará el servicio prestado solo para propósitos o fines legales. El Cliente no usará el servicio de ninguna forma que infrinja cualquier ley o regulación Mexicana o Internacional, o que dañe los derechos de terceros, la moral y las buenas costumbres, de igual forma garantiza que no autorizará ni permitirá a otra persona, física o moral realizarlo.
<br>  El Cliente es el único responsable del uso y contenido de los servicios contratados, deslindando a la EMPRESA, su controladora, titulares, afiliadas, subsidiarias, así como a los directivos, funcionarios, empleados y demás personal, de cualquier responsabilidad derivado de cualquier acción u omisión del Cliente.
<br>  En caso de comisión de ilícitos, delitos, infracciones o sanciones previstas en las legislaciones mexicanas o internacionales, el Cliente será el único responsable por la utilización de su cuenta y contenido en la comisión de los mismos, deslindando en todo momento a la EMPRESA, su controladora, titulares, afiliadas, subsidiarias, así como a los directivos, funcionarios, empleados y demás personal, de cualquier responsabilidad civil, penal o administrativa.
<br>  Debido a que nuestros proveedores de infraestructura de servidores y registros de dominios TLD son empresas establecidas en los Estados Unidos de América, no es posible hacer uso de nuestros servicios por individuos o empresas que sean sujetos de sanciones de embargo impuestas por los Estados Unidos de América.
<br>  El Cliente tiene total y completa responsabilidad de realizar y mantener copias de seguridad actualizadas de la información o datos contenidos en los servicios proporcionados por La Empresa. La Empresa se deslinda de cualquier responsabilidad presente o futura referente a copias de seguridad del sitio o pérdida de información. El Cliente libera a La Empresa de cualquier responsabilidad por la pérdida de información o datos almacenados en cualquier servicio proporcionado por La Empresa.
<br>  QUINTA.- DERECHOS DE LA EMPRESA Y PROVEEDORES DE SERVICIOS.
<br>  La Empresa y los Proveedores de Servicios pueden cambiar cualquier información, incluyendo Información de autenticación del Cliente en la base de datos de la Empresa después de recibir autorización del Cliente en cualquier forma como puede ser prescrita por la Empresa periódicamente.
<br>  La Empresa y los Proveedores de Servicios, a su entera discreción, podrán, en cualquier momento, temporal o permanentemente, dejar de prestar algún servicio.
<br>  La Empresa se reserva el derecho de cambiar los precios, los niveles mínimos de pedido y descuentos de cualquier servicio en cualquier momento.
<br>  La Empresa y sus Proveedores de Servicios, a su entera discreción, se reservan expresamente el derecho a denegar o cancelar cualquier Servicio. En este caso, la Empresa podrá reembolsar los pagos cobrados por el pedido después de deducir los respectivos costos de tramitación.
<br>  La Empresa y sus Proveedores de Servicios, a su entera discreción, se reservan expresamente el derecho de modificar, suspender, cancelar o anular Servicios de la Empresa en cualquier momento.
<br>  El Cliente reconoce y acepta que la EMPRESA está a cargo de las direcciones IP y que por lo tanto puede modificar las direcciones sin previo aviso y en cualquier momento.
<br>  No obstante cualquier disposición en contrario, la Empresa y sus Proveedores de Servicios, a su entera discreción, se reservan expresamente el derecho de, sin previo aviso ni reembolso, acceder, eliminar, suspender, denegar, cancelar, modificar, interceptar y analizar el tráfico de, copiar, hacer copia de seguridad, acceder datos de, redirigir, registrar el uso de, monitorear, limitar el acceso a, limitar el acceso de, tomar posesión de, suspender o transferir cualquier pedido, o eliminar, suspender, congelar, o modificar el acceso del Cliente al sistema de la Empresa en virtud de cualquiera de las siguientes circunstancias:
<br>  i. En caso de cualquier incumplimiento o potencial incumplimiento, o cualquier violación o potencial violación de este Contrato, según lo determinado por la Empresa a su entera discreción;
<br>  ii. Para proteger la integridad y estabilidad del sistema de la Empresa;
<br>  iii. Para cumplir con las leyes aplicables, las normas o requisitos gubernamentales, las solicitudes de aplicación de la ley, cualquier proceso de resolución de conflictos;
<br>  iv. Para cumplir con cualquier contrato celebrado por la Empresa;
<br>  v. Para evitar cualquier responsabilidad civil o penal, por parte de la Empresa o de sus Proveedores de Servicios, así como sus filiales, subsidiarias, funcionarios, directores y empleados; o vi. Si el Cliente y/o sus agentes o cualquier otro representante autorizado del Cliente violar cualquier ley aplicable, norma gubernamental o política de uso, incluyendo violación de la propiedad intelectual, pero no limitándose a eso, según lo determinado por la Empresa a su entera discreción.
<br>  El Cliente acepta que la Empresa y Proveedores de Servicios, y los contratistas, empleados, directores, funcionarios, representantes, agentes, afiliados de la Empresa y Proveedores de Servicios no son responsables de los daños o perjuicios que puedan deberse a cualquiera de las acciones mencionadas anteriormente.
<br>  El Cliente autoriza a la Empresa y sus Proveedores de Servicios para publicar, transmitir o compartir los datos en la base de datos de Clientes con cualquier persona o entidad, o ponerse en contacto con cualquier entidad en la base de datos de Clientes, con el fin de recuperar cualquier pago por parte del Cliente para cualquier servicio prestado por la Empresa, incluidos los servicios prestados fuera del ámbito del presente Contrato por los cuales el Cliente ha sido notificado y ha solicitado para remitir el pago. La Empresa y sus Proveedores de Servicios pueden corregir los errores cometidos por la Empresa o sus Proveedores de Servicios en el procesamiento o ejecución de un servicio;
<br>  La Empresa tiene derecho a rectificar cualquier error en los datos en su base de datos con efecto retroactivo.
<br>  La Empresa y sus Proveedores de Servicios se reservan el derecho de prohibir el uso de cualquier de sus servicios en relación con cualquier dominio.
<br>  La Empresa y sus Proveedores de Servicios se reservan expresamente el derecho de suspender o cancelar la cuenta del Cliente, sin previo aviso y sin emitir un reembolso o compensación de ningún tipo, si la Empresa o su Proveedor de Servicios determinan, a su entera discreción, que el Cliente ha incumplido el presente Contrato. La Empresa y su Proveedor de Servicios no serán responsables por cualquier daño o perjuicio resultante de dicha acción si tal daño o perjuicio se incurre por el Cliente o un tercero. La Empresa no reembolsará, directa o indirectamente, ningún monto a cualquier Persona Prohibida, incluyendo, sin limitación, cualquier monto en una cuenta del Cliente debidamente señalada por escrito.
<br>  SEXTA. DOMINIOS Y DISEÑO DE SITIOS.
<br>  El Cliente y/o titular del nombre de dominio declara que el registro o uso del nombre de dominio no viola los derechos legales de otros. De igual forma asegura que el nombre de dominio no está siendo registrado para cumplir con propósitos ilegales y no será usado para violar ninguna ley mexicana o internacional. La Empresa podrá eliminar/suspender sin previo aviso el nombre de dominio registrado. Si el usuario o titular del nombre de dominio registrado proporciona intencionalmente información inexacta, no confiable, falsa, o no responde durante las siguientes veinticuatro (24) horas a la solicitud de actualización de información enviada por la Empresa para la actualización de sus datos, el registro de su nombre de dominio podrá ser cancelado.
<br>  La Empresa podrá solicitar copias de identificaciones oficiales para corroborar la exactitud de los datos proporcionados para el registro del dominio, si el usuario o titular no proporciona las identificaciones oficiales fidedignas dentro de las siguientes veinticuatro (24) horas, el nombre de dominio podrá ser cancelado a consideración de la Empresa.
<br>  El Cliente debe de garantizar que el uso del nombre de dominio no viole ningún término o condición del presente documento o política de privacidad, así mismo garantizar que el nombre de dominio es utilizado para fines lícitos. Si La Empresa detecta alguna violación a los términos y condiciones del servicio o Aviso de Privacidad, podrá suspender y/o cancelar el nombre de dominio en cualquier momento sin necesidad de notificación previa dirigida al Cliente.
<br>  El Cliente es el único responsable del uso del nombre, deslindando a la Empresa, su controladora, titulares, afiliadas, subsidiarias, así como a los directivos, funcionarios, empleados y demás personal, de cualquier responsabilidad derivado de cualquier acción u omisión en que incurra el Cliente.
<br>  El Cliente puede transferir cualquier dominio de extensiones soportadas a la Empresa mientras el dominio aún se encuentre con más de (diez) 10 días de vigencia y en un estatus y medio apropiado para su transferencia.
<br>  La Empresa podrá negar la transferencia de un dominio si este ha incumplido con algún término o condición del servicio y el registro podrá ser cancelado.
<br>  La transferencia de un dominio puede ser negada por alguna de las siguientes razones o por el cumplimiento de alguna política de ICANN o Registry MX:
<br>  Existe evidencia de algún fraude.
<br>  Existe una disputa por la titularidad del dominio en curso.
<br>  Existe algún requerimiento por parte de alguna autoridad para negar la transferencia.
<br>  Cuando un dominio se encuentra vencido.
<br>  Cuando los contactos del dominio han sido actualizados, existirá un bloqueo de 60 días a partir de la fecha en la que los contactos del dominio sean actualizados. Por lo que no se podrá realizar la transferencia dentro de los siguientes 60 días a la mofificación de contactos.
<br>  Cuando el dominio se encuentra dentro de los siguientes 60 días a partir la fecha de registro mostrada en Whois.
<br>  Cuando el dominio se encuentra dentro de los siguientes 60 días a partir de la fecha de transferencia.
<br>  El hecho de que una orden haya sido levantada no garantiza la disponibilidad del dominio. El dominio será registrado hasta que se haya confirmado su pago y en ese momento se valida nuevamente la disponibilidad del dominio con la acción del registro ante el Registry.
<br>  La Empresa no se hace responsable si un dominio es registrado por un tercero durante el transcurso de tiempo entre la generación de la orden de pago y la confirmación del pago correspondiente al dominio.
<br>  La Empresa no se hace responsable si el servicio de WHOIS presenta fallas o arroja información errónea sobre la disponibilidad del dominio a contratar.
<br>  La confirmación de la orden de compra o el pago del dominio no implica la garantía de adquisición o renovación del dominio debido a que el Registry al momento de intentar realizar el registro puede tener restricciones.
<br>  El Registry MX o ICANN pueden mantener listas de dominios reservados que pueden mostrarse disponibles para su registro, sin embargo estos dominios al momento de intentar registrarlos podrán ser negados por el Registry correspondiente.
<br>  El cliente tiene la responsabilidad de validar las fechas de expiración desde un sistema de Whois público, cotejar las fechas de expiración y renovación que muestra el sistema y reportar cualquier discrepancia.
<br>  Es responsabilidad del Cliente proporcionar correctamente los datos solicitados para el cumplimiento del objeto principal del servicio proporcionado por La empresa.
<br>  La Empresa no será responsable de cualquier contratación o renovación de contrato no terminada o perfeccionada, derivado de solicitudes ingresadas por los Clientes las cuales contengan datos erróneos o incompletos.
<br>  El Cliente tendrá un periodo de treinta (30) días después de su fecha de expiración para poder renovar el dominio normalmente con un costo del cien por ciento (100%) sobre el costo normal del dominio.
<br>  Pasados los treinta (30) días de gracia, para dominios de TLD internacional el dominio podrá entrar en un periodo de treinta (30) días más denominado periodo de redención en el cual puede renovar su dominio con un costo de ciento veinte (USD $120) dólares moneda de curso legal de los Estados Unidos de América, más cualquier otro gasto adicional. El periodo de redención no es garantizado, ya que después de los primeros 30 días de gracia, el dominio puede ser eliminado en cualquier momento por el Registry.
<br>  Excepciones de periodo de redención:
    Un dominio no entrará en periodo de redención si es eliminado dentro del periodo de gracia de registro nuevo del dominio.
    Un dominio no entrará en periodo de redención si existe una orden de "Backorder" en cualquier proveedor. Es decir, si existe la petición de registro de dominio automática tras su fecha de expiración.
<br>  Si un dominio no es renovado a tiempo y se vencen los días de gracia, el dominio quedará libre y podrá ser registrado por cualquier persona.
<br>  Todos los dominios con terminación MX tienen activada la bandera "ClientRenewProhibited", por lo que un dominio expirado permanecerá activo cuarenta y cinco (45) días posteriores a su fecha de expiración, aún sin recibir pago de renovación. Asimismo, si el dominio no se renueva dentro de esos cuarenta y cinco (45) días, el dominio será eliminado.
<br>  Los dominios con terminación “MX” tendrán un cargo extra de restauración, si no son renovados conforme a los presentes términos y condiciones. El monto antes mencionado será expresamente determinado y señalado al cliente al momento de la renovación extemporánea.
<br>  Todos los dominios deberán de acatar las disposiciones publicadas por ICANN y Registry MX. ICANN y Registry MX pueden suspender, bloquear, transferir o eliminar cualquier dominio a su discreción.
<br>  El Cliente acepta que el registro del nombre de dominio está sujeto a suspensión, cancelación, bloqueo o transferencia por las razones siguientes:
<br>  Por algún requerimiento o política de ICANN o Registry MX.
<br>  Por la resolución de disputas UDRP (Uniform Domain-Name Dispute Resolution Policy), ICANN es la autoridad encargada de la administración de los dominios y puede solicitar la transferencia de cualquier dominio como resultado de la resolución de alguna disputa.
<br>  En caso de alguna disputa de titularidad de cualquier dominio registrado con La Empresa, El Cliente acepta el proceso UDRP (Uniform Domain-Name Dispute Resolution Policy) estipulado por la ICANN y deberá de acatar la resolución de dicho proceso, librando a La Empresa de cualquier responsabilidad sobre dicha resolución.
<br>  Es responsabilidad del cliente conocer las políticas y procedimientos de administración y de resolución de disputas de nombres de dominio publicados por el ICANN y por Registry MX.
<br>  La Empresa no se hace responsable si el dominio no es renovado a tiempo, ni de la pérdida o bloqueo del dominio por negligencia o desconocimiento del Cliente. El Cliente es responsable de conocer la fecha de expiración del dominio por medio de servicios Whois públicos y de asegurarse de su correcta renovación después de aplicado el pago, verificando la nueva fecha de expiración del dominio desde servicios de Whois públicos.
<br>  Asimismo, el Cliente es único responsable del uso del nombre del dominio y de conocer la fecha de expiración de su dominio. La fecha antes mencionada podrá ser consultada por el Cliente a través de un servicio de "Whois". La Empresa se deslinda de cualquier responsabilidad presente o futura que pueda derivarse si el Cliente no renueva el dominio a tiempo, así como de la pérdida del dominio por falta de renovación en tiempo y forma. La Empresa podrá de tiempo en tiempo enviar notificaciones de cortesía, en las cuales informará sobre la fecha de terminación del presente Contrato, sin embargo dicha notificación no obliga ni genera responsabilidad u obligación alguna a la Empresa frente a sus Clientes.
<br>  El cliente podrá actualizar los datos de contactos del dominio desde su panel de clientes. Para dominios distintos a .COM.MX, .MX, .ORG.MX, la modificación de contactos generará un bloqueo de 60 días sobre el dominio. Periodo durante el cual el dominio no podrá ser transferido a otro Registry.
<br>  El soporte ofrecido se administra por medio de Tickets, que pueden ser creados desde el panel de clientes y desde la dirección de correo electrónico del departamento de soporte (soporte@hosting-mexico.net).
<br>  El soporte se limita al funcionamiento del servicio de hospedaje y administración del registro del dominio. En ningún caso se brindará soporte en programación o en aplicaciones instaladas por el usuario.
<br>  Peticiones de ventas y soporte de primer nivel podrán ser atendidos vía chat en línea desde nuestro sitio web
<br>  Las partes reconocen y acuerdan que el Cliente es el único responsable del uso y contenido de los servicios contratados, deslindando a la EMPRESA, su controladora, titulares, afiliadas, subsidiarias, así como a los directivos, funcionarios, empleados y demás personal, de cualquier responsabilidad derivado de cualquier acción u omisión del Cliente.
<br>  Es importante señalar que por ningún motivo la Empresa brindará soporte a Clientes vía telefónica.
<br>  SÉPTIMA.- CENTRO DE DATOS.
<br>  Las partes reconocen y aceptan que la EMPRESA hará su mejor esfuerzo para que los centros de datos estén disponibles .El Cliente reconoce y acepta que la EMPRESA no será responsable de las demoras o incumplimiento de las obligaciones a su cargo derivados de casos fortuitos o de fuerza mayor, guerras, huelgas, litigios laborales, suspensión de labores, incendio, terremoto o cualquier otra causa de fuerza mayor que llegaré a presentarse.
<br>  Únicamente en situaciones especiales las cuales deberán ser debidamente probadas y justificadas por parte del Cliente con elementos fidedignos y reales, la EMPRESA reembolsará a sus Clientes el dinero pagado por los Servicios no recibidos derivado de fallas en el centro de datos, en concordancia con la formula siguiente:
<br>  Cualquier rembolso operará únicamente si el cliente se encuentra al corriente en sus pagos por servicios prestados por la Empresa y si no se tiene acceso al sistema en un lapso mayor a veinticinco (25) horas consecutivas. El monto reembolsado será el equivalente al cincuenta por ciento (50%) del monto obtenido al dividir el costo del servicio entre los trescientos sesenta y cinco (365) días del año multiplicado por el número de días sin servicio.
<br>  La Empresa puede migrar servicios entre diferentes centros de datos cuando lo requiera. Siempre buscando la mejor calidad posible en la selección de los centros de datos utilizados por La Empresa.
<br>  OCTAVA.- RESOLUCIÓN DE DISPUTAS SOBRE NOMBRES DE DOMINIO.
<br>  En caso de que exista alguna disputa derivada de la alegación de titularidad de nombres de dominio, el Cliente deberá someterse a las políticas y los lineamientos establecidos por ICANN los cuales podrá consultar en la página web www.icann.org.
<br>  NOVENA.- CONTENIDO NO ADMITIDO.
<br>  La Empresa podrá eliminar de forma inmediata sin derecho a reembolso ni notificación previa, cualquier cuenta que contenga, promocione y/o distribuya algún tipo de contenido igual o similar a los señalados enunciativamente pero no limitativamente, a continuación:
  • Cualquier contenido que viole las leyes mexicanas e internacionales.
  • Contenido para adultos, pornográfico o acosador.
  • Contenido que viole derechos de propiedad intelectual.
  • Contenido extremadamente violento, que incite violencia, tratos de violencia o contenga contenido violeto o discursos ofensivos.
  • Contenido difamatorio o que viole la integridad de las personas.
  • Contenido que sea un riesgo para la seguridad o salud de una persona, comprometa la seguridad de alguna nación, o interfiera con alguna investigación judicial.
  • Exponga cables secretos u otro tipo de información confidencial propiedad de otro individuo.
  • Contenido que trate de ayudar a otros en romper protecciones de derechos de autor.
  • Sitios que realicen actividades fraudulentas.
  • Sitios que promuevan esquemas piramidales.
  • Sitios que realicen la venta o distribución de medicamentos.
  • Cualquier intento de penetración o que propicie vulnerabilidades de seguridad.
  • Servicios de chat.
  • Programas residentes de lectura de sockets, sean TCP, UDP o UNIX
  • Spam: el spam está estrictamente prohibido.
  • Envío de correo no solicitado en cualquiera de nuestros servicios está prohibido.
  • Venta o distribución de directorios de direcciones de correo electrónico.
  • Bots: no están permitidos incluyendo: bots IRC, proxies, IRC, spiders transversales, anonimizadores.
  • Programas no autorizados que representen un uso excesivo de recursos.
  • Contenido que insulte a la moral.
  Queda estrictamente prohibido contener y/o distribuir o promocionar en los servicios provistos por la Empresa:
  • Piratería.
  • Malware.
  • Warez.
  • Sitios que promuevan o realicen la venta de medicamentos o suplementos alimenticios.
  • Contenido que viole alguna patente, marca, secreto comercial, derecho de autor o cualquier derecho de propiedad intelectual de algún tercero.
  • Pornografía y/o contenido acosador.
  • Links dirigidos a sitios web que contengan piratería y/o distribución, streaming o promoción de contenido protegido por derechos de autor.
  • Links dirigidos a sitios web que contengan pornografía, contenido para adultos o contenido acosador.
  • Contenido que represente phishing (se entenderá como phishing a cualquier modelo de abuso informático que se cometa mediante el uso de un tipo de ingeniería social caracterizado por intentar adquirir información confidencial de forma fraudulenta).
  • Utilizar el servidor como servidor de descargas.
  • Utilizar el servidor para almacenar respaldos, archivos .zip, archivos de audio y videos.
  • Utilizar el servidor como servidor de reproducción de videos.
  • Utilizar el servidor como un disco duro virtual.
  • Utilizar el servidor como servidor de almacenamiento virtual.
  • Sitios con links o contenido de Torrents.
  • Archivos Mp3.


<br>  Bajo ninguna circunstancia está permitido el almacenamiento, promoción y/o distribución de contenido para adultos, pornográfico o acosador a través de los Servicios prestados por la Empresa. Por lo tanto, cualquier imagen, video, enlace, contenido escrito o similar queda TOTALMENTE PROHIBIDO, consecuentemente, a cualquier usuario que sea sorprendido practicando ese tipo de actividades o cualquier otra similar, o que a consideración de la Empresa sea dañina o prohibida en su contenido, se le cancelará el servicio sin responsabilidad alguna para la Empresa.
<br>  DÉCIMA.- REVENDER.
<br>  El Cliente tiene estrictamente prohibido dividir el espacio de su hospedaje y revenderlo, en caso de llegar a sorprender a algún Cliente realizando esta acción, su cuenta puede ser suspendida y sin derecho a reembolso.
<br>  El Cliente puede revender únicamente bajo las siguientes condiciones:
  <br>Adquiriendo un plan de Reseller.
<br>  Comprar un plan compartido y revenderlo en su totalidad, es decir, no dividirlo en porciones más pequeñas.
<br>  Está totalmente prohibido revender el plan Ultimate ya sea en su totalidad o en partes. Si el Cliente es sorprendido revendiendo el plan Ultimate o dividiéndolo para su reventa, la cuenta será eliminada de manera inmediata invalidando cualquier reembolso, sin responsabilidad para la Empresa.
<br>  El Cliente que contrate un servicio de revendedor de hosting / reseller hosting / reseller dominios es responsable de sus clientes y debe garantizar que sus clientes no violan ningún término o condición de este documento, política de privacidad ni política de uso de recursos. Asimismo debe garantizar que los servicios no son utilizados para actividades ilícitas.
<br>  En caso de que la Empresa detecte que alguna cuenta dentro del revendedor viola algún término o condición del Servicio podrá suspender o cancelar dicha cuenta, de igual forma puede eliminar la cuenta de revendedor del Cliente.
<br>  El Cliente revendedor es completamente responsable de los actos que realicen sus clientes, por lo tanto responderá como responsable sobre cualquier violación a los presentes términos y condiciones así como a cualquier otro término y condición aplicable, así como a cualquier otra legislación o reglamento aplicable.
<br>  La Empresa, su controladora, titulares, afiliadas, subsidiarias, así como directivos, funcionarios, empleados y demás personal no se hace responsable por las acciones que realicen los Clientes revendedores que contraten sus servicios, tampoco se hace responsable de las acciones realizadas por los clientes de los revendedores.
<br>  En los planes de revendedor no existe un límite expreso en la cantidad de cuentas que pueden ser creadas. Sin embargo, el número de cuentas que pueden ser creadas está limitado a los recursos (espacio en disco y transferencia) que el plan contiene. El Overselling no está habilitado en los planes de revendedor.
<br>  El Cliente que contrate un servicio de revendedor de hosting / reseller hosting / reseller dominios es responsable de sus clientes y debe garantizar que sus clientes no violan ningún término o condición de este documento, política de privacidad ni política de uso de recursos. Asimismo debe garantizar que los servicios no son utilizados para actividades ilícitas.
<br>  En caso de que la Empresa detecte que alguna cuenta dentro del revendedor viola algún término o condición del servicio podrá suspender o cancelar dicha cuenta, de igual forma podrá eliminar la cuenta de revendedor.
<br>  El Cliente revendedor es completamente responsable de los actos que realicen sus clientes, por lo tanto responderá respecto a cualquier violación a los presentes términos y condiciones, el Aviso de Privacidad, leyes nacionales e internacionales aplicables.
<br>  La Empresa, su controladora, titulares, afiliadas, subsidiarias, así como directivos, funcionarios, empleados y demás personal no se hace responsable por las acciones que realicen los Clientes revendedores que contraten sus servicios, tampoco se hace responsable de las acciones realizadas por los clientes de los Clientes revendedores.
<br>  DÉCIMA PRIMERA.- PLAZO DE CONTRATO Y RENOVACIÓN.
<br>  El plazo de este Contrato será por el período establecido en el formulario de inscripción presentado a usted en el momento de adquirir el Servicio de la Empresa (el "Plazo Inicial") y no se renovará automáticamente. Es responsabilidad del Cliente estar al tanto de la fecha de terminación del Contrato para efecto de renovar el mismo o en dado caso hacer lo que a su interés convenga.
<br>  El Contrato se termina según lo previsto en la sección de rescisión; o por la falta de renovación por parte del Cliente de cualquier Servicio de la Empresa al final del Plazo Inicial o de cualquier plazo de renovación.
<br>  DÉCIMA SEGUNDA.- RESCISIÓN DEL CONTRATO.
<br>  La Empresa puede terminar este Contrato y/o cualquier Extensión de Contrato del servicio del Cliente: i. Con efecto inmediato, si el Cliente está declarado insolvente o en quiebra, o bien mediante demanda presentada por o en contra de los Clientes que buscan alivio, reorganización, arreglo, compromiso o contrato en virtud de las leyes en materia de insolvencia, o en búsqueda de cualquier cesión en beneficio de acreedores, o en búsqueda del nombramiento de un liquidador o síndico de los bienes o activos de los Clientes o la liquidación o disolución del negocio de un Cliente. ii. Al notificar el Cliente por escrito, a partir de la fecha indicada en la notificación de rescisión en las siguientes circunstancias: iii. En el caso de que el Cliente o un agente, funcionario, autorizado o representante del Cliente incumple materialmente cualquier de los términos de este Contrato y/o cualquier Extensión de Contrato del servicio del Cliente, incluyendo cualquiera de sus representaciones, garantías, pactos y contratos en virtud del presente iv. Hubo una declaración material falsa y/o inexactitud material, y/o una declaración materialmente engañosa en la información del Cliente provista a la Empresa. v. Con efecto inmediato si (a) el Cliente es declarado culpable de un delito grave u otro delito grave relacionado con actividades financieras, o es juzgado por un tribunal por haber fraude o incumplimiento de deber fiduciario, o es objeto de una determinación judicial que la Empresa considere razonablemente como equivalente sustantivo de alguno de ellos; (B) el Cliente es disciplinado por el gobierno de su domicilio por deshonestidad o mal uso de los fondos de los demás; o (c) cualquier funcionario o director del Cliente es declarado culpable de un delito grave o de un delito menor relacionado con actividades financieras, o es juzgado por un tribunal por haber fraude o incumplimiento de deber fiduciario, o es objeto de una determinación judicial que la Empresa considera como el equivalente sustantivo de alguno de ellos o alguna otra causal de recisión contenida en el presente Contrato.
<br>  Cualquier renovación de Contrato de servicio terminará con efecto inmediato en caso de que:
<br>  La Empresa deja de vender el servicio de la Empresa en particular cubierto en virtud de esa renovación de Contrato del servicio.
<br>  El contrato de la Empresa con el Proveedor de Servicios para un servicio de la Empresa en particular termina o expira sin renovación
<br>  Efecto de la rescisión del presente Contrato
<br>  La Empresa suspenderá todo el acceso del Cliente a todo el sistema de la Empresa, inmediatamente después de recibir un aviso de rescisión del Cliente o en tomando conocimiento de cualquier evento, que la Empresa determine de manera razonable, daría lugar a la rescisión del Contrato.
<br>  A la terminación o rescisión del presente Contrato, todas las renovaciones de Contrato del servicio del Cliente firmadas por el Cliente se considerará que se han terminado con efecto inmediato.
<br>  La Empresa podrá suspender el acceso del Cliente a los Servicios de la Empresa aplicables inmediatamente después de recibir un aviso de rescisión del Cliente o tomando conocimiento de cualquier evento, que la Empresa determine de manera razonable, daría lugar a la rescisión de cualquier renovación de Contrato del servicio del Cliente.
<br>  El Cliente no obstante se hace responsable por cualquier daño derivado de cualquier incumplimiento por su parte de este Contrato o cualquier Extensión de Contrato del servicio del Cliente.
<br>  DÉCIMA TERCERA.- COMISIONES/RENOVACIÓN.
<br>  El Cliente deberá pagar todos los honorarios/avances aplicables según los términos y condiciones de Pago establecidas en el presente Contrato.
<br>  El Cliente reconoce que es responsabilidad del Cliente mantener registros y mantener los recordatorios con respecto a la expiración de cualquier pedido. Como una conveniencia para el Cliente, y no como un compromiso vinculante, podemos notificar al Cliente de cualquier servicio que expira, a través de un mensaje de correo electrónico enviado a la información de contacto asociada con el Cliente en la base de datos de la Empresa.
<br>  La Empresa no ofrece ninguna garantía sobre el número de días, después de la eliminación de un Pedido, en lo cual el mismo Pedido estará de nuevo disponible para compra.
<br>  DÉCIMA CUARTA. LIMITACIÓN DE RESPONSABILIDAD
<br>  EN NINGÚN CASO LA EMPRESA O PROVEEDORES DE SERVICIOS O CONTRATISTAS O BENEFICIARIOS DE TERCEROS SERÁN RESPONSABLES ANTE EL CLIENTE POR CUALQUIER PÉRDIDA DE REGISTRO Y USO DE NOMBRE DE DOMINIO, O POR LAS INTERRUPCIONES DE NEGOCIO, O CUALQUIER DAÑO ESPECIAL, INDIRECTO, ACCESORIO, INCIDENTAL, PUNITIVO, EJEMPLAR O CONSECUENTE, O CUALQUIER DAÑO CAUSADO POR PÉRDIDA DE LUCROS, DERIVADO DE O EN RELACIÓN CON ESTE CONTRATO, SIN IMPORTAR LA FORMA DE LA ACCIÓN, YA SEA EN CONTRATO, AGRAVIO (INCLUYENDO NEGLIGENCIA), O CUALQUIER OTRA FORMA, AUN CUANDO LA EMPRESA Y/O SUS PROVEEDORES DE SERVICIOS HAN SIDO ADVERTIDOS DE LA POSIBILIDAD DE TALES DAÑOS.
<br>  LA EMPRESA RECHAZA TODAS LAS PÉRDIDAS O RESPONSABILIDADES QUE RESULTEN DE, PERO NO LIMITÁNDOSE A:
<br>  PÉRDIDA O RESPONSABILIDAD COMO RESULTADO DEL USO NO AUTORIZADO O MAL USO DE LA INFORMACIÓN DE AUTENTICACIÓN;
<br>  PÉRDIDA O RESPONSABILIDAD COMO RESULTADO DE ACONTECIMIENTOS DE FUERZA MAYOR;
<br>  PÉRDIDA O RESPONSABILIDAD COMO RESULTADO DE DEMORAS O INTERRUPCIONES EN EL ACCESO;
<br>  PÉRDIDA O RESPONSABILIDAD COMO RESULTADO DE LA NO ENTREGA O ENTREGA EQUIVOCADA DE INFORMACIÓN;
<br>  PÉRDIDA O RESPONSABILIDAD COMO RESULTADO DE ERRORES, OMISIONES O INEXACTITUDES EN CUALQUIER INFORMACIÓN O SERVICIOS(S) DE LA EMPRESA PROVISTOS EN VIRTUD DE ESTE CONTRATO;
<br>  PÉRDIDA O RESPONSABILIDAD COMO RESULTADO DE LA INTERRUPCIÓN DEL SERVICIO.
<br>  Si cualquier acción u otro procedimiento legal (incluyendo arbitraje) en relación con el cumplimiento del Contrato o la ejecución de cualquier cláusula de este Contrato es dirigida contra la Empresa por el Cliente, en ningún caso la responsabilidad de la Empresa excederá el monto real pagado a la Empresa por el Cliente para el servicio en cuestión menos costos directos incurridos con respecto a dicho Pedido.
<br>  AMBAS PARTES RECONOCEN QUE LA CONSIDERACIÓN ACORDADA POR AMBAS PARTES SE BASA EN PARTE EN ESTAS LIMITACIONES Y QUE ESTAS LIMITACIONES SE APLICARÁN A PESAR DE CUALQUIER FALLA DE PROPÓSITO ESENCIAL DE CUALQUIER RECURSO EN CONCORDANCIA CON LO ESTABLECIDO EN LA CLÁUSULA SÉPTIMA.
<br>  DÉCIMA QUINTA.- INDEMNIZACIÓN.
<br>  El Cliente, a su propio costo, deberá indemnizar, defender y mantener a salvo a la Empresa y sus Proveedores de Servicios y sus contratistas, empleados, directores, funcionarios, representantes, agentes y afiliados, contra cualquier reclamación, demanda, acción u otro procedimiento interpuesto contra la Empresa o sus Proveedores de Servicios basados ​​en o que surjan de cualquier reclamación o demanda alegada, de terceros en relación con o que surja de este Contrato, Servicios de la Empresa aquí provistos o uso de los Servicios de la Empresa, incluyendo, pero sin limitación:
<br>  La infracción sea efectuada por el Cliente u otra persona utilizando un servicio de la Empresa con el ordenador del Cliente, de cualquier propiedad intelectual u otro derecho de propiedad de cualquier persona o entidad.
<br>  Que surja de cualquier incumplimiento de este Contrato por parte del Cliente.
<br>  En relación a cualquier acción de la Empresa llevada a cabo en nombre del Cliente como se describe en el presente Contrato.
<br>  El Cliente no entrará en ningún contrato o compromiso de dicha reclamación resarcible sin el consentimiento previo por escrito de la Empresa, que no podrá ser retenido sin justificación.
<br>  El Cliente pagará cualquier y todos los costos, daños y gastos, incluyendo, pero no limitado a, honorarios y costes reales con abogados imputados o efectuados por la Empresa en relación con o derivados de cualquier reclamo, demanda, acción o procedimiento resarcible.
<br>  La ejecución, promoción y /o almacenamiento de información referente a actividades ilícitas.
<br>  Errores atribuibles al Cliente.
<br>  Cualquier incumplimiento al presente Contrato, el Aviso de Privacidad, las Políticas de Uso de Recursos y cualquier ley o reglamento aplicable a las operaciones realizadas por el Cliente.
  <br>Es obligación del cliente solicitar la renovación de sus servicios en tiempo y forma. El Cliente en este acto acepta que la Empresa no será responsable de los efectos que deriven de la falta de renovación de contrato en tiempo y forma.
<br>  El Cliente deberá en todo momento estar al tanto de cualquier cambio que pueda integrarse al presente Contrato, el Aviso de Privacidad y cualquier Política de Uso de Recursos.
<br>  DÉCIMA SEXTA.- PROPIEDAD INTELECTUAL.
<br>  Sujeto a las cláusulas del presente Contrato, cada Parte continuará en poder de su propiedad intelectual de forma independiente, incluyendo todas las patentes, marcas comerciales, nombres comerciales, nombres de dominio, marcas de servicio, derechos de autor, secretos comerciales, procesos patentados y todas las demás formas de propiedad intelectual. Cualquier mejora a la propiedad intelectual existente continuará siendo propiedad de la Parte ya titular de dicha propiedad intelectual.
<br>  Sin limitar la generalidad de lo anterior, no hay derechos de uso comercial o cualquier licencia en virtud de cualquier patente, solicitud de patente, derechos de autor, marca registrada, conocimientos, secretos comerciales o cualquier otro derecho de propiedad intelectual que sean otorgados por la Empresa al Cliente, o por cualquier divulgación de cualquier Información Propietaria al Cliente en virtud de este Contrato.
<br>  Además, el Cliente deberá garantizar que el Cliente no infringe ningún derecho de propiedad intelectual u otros derechos de cualquier persona o entidad, o no publica cualquier contenido que sea difamatorio o ilegal durante el uso de servicios en virtud de este Contrato. El Cliente reconoce que la Empresa no puede y no comprobará para ver si alguno de los servicios o el uso de los servicios por parte del Cliente en virtud de este Contrato, infrinja o viole los derechos legales de otros.
<br>  Asimismo, el Cliente será el único responsable de responder respecto a cualquier juicio o controversia derivada de infringir cualquier derecho de algún tercero en materia de propiedad intelectual, usurpación de identidad o atribución de facultades falsas.
<br>  DÉCIMA SÉPTIMA.- PROPIEDAD Y USO DE DATOS.
  <br>(1) La Empresa que el Cliente proporcione serán recabados y tratados en concordancia con la ley Federal de Datos Personales en Posesión de los Particulares para los Estados Unidos Mexicanos. Asimismo podrá procesar estos datos en la forma y manera que puedan ser necesarios para el cumplimiento de los contratos celebrados por la Empresa o sus Proveedores de Servicios con el fin de cumplir con los servicios en virtud de este Contrato, en concordancia con el Aviso de Privacidad y las leyes y reglamentos aplicables.
<br>  DÉCIMA OCTAVA.- DERECHO DE MODIFICAR EL CONTRATO.
<br>  La Empresa se reserva el derecho a revisar los términos y condiciones de este Contrato; y cambiar los Servicios de la Empresa a la entera discreción de la Empresa. Salvo disposición en contrario, cualquier modificación será vinculante y efectiva inmediatamente después de la publicación de la revisión en http://hosting-mexico.net/terminos.htm.
<br>  El cliente se compromete a revisar el Panel de Control del Cliente y el Sitio Web de la Empresa (www.hosting-mexico.net) incluyendo los contratos, periódicamente, para estar al corriente de dichas previsiones.
<br>  Si el Cliente no está de acuerdo con cualquier revisión, el Cliente podrá rescindir el presente Contrato, de conformidad con los términos y condiciones aquí establecidas.
<br>  El Cliente está de acuerdo en que la continuación del uso de los Servicios previo a la notificación de cualquier cambio, constituirá una aceptación plena de los nuevos términos y condiciones establecidos.
<br>  DÉCIMA NOVENA.- IMPUESTOS.
<br>El Cliente será responsable de impuesto sobre las ventas, impuesto al consumo, impuesto sobre transmisiones, impuestos de aduana, impuestos sobre el consumo, impuestos especiales, impuesto sobre la renta, y todos los demás impuestos y derechos, ya sean internacionales, nacionales, estatales o locales, no importa cómo designados, que se aplican o son impuestos o que se puedan aplicar o imponer, con respecto a este Contrato y los Servicios de la Empresa.
<br>  VIGÉSIMA.- FUERZA MAYOR.
<br>  Ninguna de las Partes será responsable ante la otra por cualquier pérdida o daño resultante de cualquier causa fuera de su control razonable (una "Causa de Fuerza Mayor"), incluyendo, pero no limitado a, insurrección o disturbios civiles, disturbios, guerra u operaciones militares, emergencia nacional o local, actos o directivas u omisiones del gobierno u otra autoridad competente, cumplimiento de cualquier obligación legal o decreto, huelga, cierre patronal, interrupción del trabajo, los conflictos laborales de cualquier tipo (envolviendo o no los empleados de las Partes), cualquier Acto de Dios, incendio, rayo, explosión, inundación, terremoto, erupción de volcán, tormenta, hundimiento, clima de excepcional gravedad, roturas/escasez de equipos o instalaciones que se están experimentado por los proveedores de servicios de telecomunicaciones en general, u otra fuerza similar más allá de control razonable por dicha Parte, y los actos u omisiones de personas por las que ninguna de las Partes es responsable. Tras la ocurrencia de un Evento de Fuerza Mayor y en la medida que tal ocurrencia interfiere con la actuación de cualquier de las Partes firmando el presente Contrato, dicha Parte deberá ser excusado de cumplimiento de sus obligaciones (distintas de las obligaciones de pago) durante los tres primeros meses de tal interferencia, siempre considerando que dicha Parte utiliza los mejores esfuerzos para evitar o eliminar dichas causas de la no actuación tan pronto como sea posible.
<br>  VIGÉSIMA PRIMERA.- CESIÓN/SUBLICENCIA.
<br>  . El Cliente no podrá ceder, sublicenciar o transferir sus derechos u obligaciones en virtud de este Contrato a cualquier tercera persona(s)/parte(s) sin el consentimiento previo y por escrito de la Empresa.
<br>  VIGÉSIMA SEGUNDA.- RENUNCIA DE RESPONSABILIDAD LEGAL.
<br>  EL SISTEMA DE LA EMPRESA SE PROPORCIONA "TAL CUAL" Y "DONDE ESTÁ" Y SIN NINGUNA GARANTÍA DE NINGÚN TIPO.
  LA EMPRESA Y PROVEEDORES DE SERVICIOS NO ASUMEN CUALQUIER RESPONSABILIDAD Y NO SERÁN RESPONSABLES POR NINGÚN DAÑO O VIRUS QUE PUEDAN AFECTAR SU EQUIPO INFORMÁTICO U OTRA PROPIEDAD EN RELACIÓN CON SU ACCESO, USO, SISTEMA DE LA EMPRESA O AL ACCEDER SERVIDORES DE LA EMPRESA. SIN PERJUICIO DE LO ANTERIOR, LA EMPRESA Y PROVEEDORES DE SERVICIOS NO REPRESENTAN NI GARANTIZAN QUE (A) CUALQUIER INFORMACIÓN/DATOS/DESCARGA DISPONIBLE EN O A TRAVÉS DEL SISTEMA DE LA EMPRESA O SERVIDORES DE LA EMPRESA ESTARÁN LIBRES DE INFECCIÓN POR VIRUS, GUSANOS, CABALLOS DE TROYA O CUALQUIER OTRA COSA MANIFESTANDO PROPIEDADES DESTRUCTIVAS; O (B) LA INFORMACIÓN DISPONIBLE EN O A TRAVÉS DEL SISTEMA DE LA EMPRESA/SERVIDORES DE LA EMPRESA NO CONTIENEN MATERIAL ORIENTADO A ADULTOS O MATERIAL QUE ALGUNAS PERSONAS CONSIDERE OBJETABLE; O (C) LAS FUNCIONES O SERVICIOS REALIZADOS POR LA EMPRESA Y PROVEEDORES DE SERVICIOS SERÁN SEGUROS, OPORTUNOS, ININTERRUMPIDOS O LIBRES DE ERRORES O QUE LOS DEFECTOS DEL SISTEMA DE LA EMPRESA SERÁN CORREGIDOS; O (D) EL SERVICIO CUMPLIRÁ CON SUS NECESIDADES O EXPECTATIVAS O (E) LOS SERVICIOS PRESTADOS EN VIRTUD DE ESTE CONTRATO OPERAN EN COMBINACIÓN CON CUALQUIER HARDWARE, SOFTWARE, SISTEMA O DATOS ESPECÍFICOS.
  LA EMPRESA Y PROVEEDORES DE SERVICIOS NO HACEN REPRESENTACIONES O GARANTÍAS EN CUANTO A LA IDONEIDAD DE LA INFORMACIÓN DISPONIBLE O CON RESPECTO A SU LEGITIMIDAD, LEGALIDAD, VALIDEZ, CALIDAD, ESTABILIDAD, INTEGRIDAD, EXACTITUD O FIABILIDAD. LA EMPRESA Y PROVEEDORES DE SERVICIOS NO RESPALDAN, VERIFICAN O DE CUALQUIER OTRA FORMA CERTIFICÁN EL CONTENIDO DE DICHA INFORMACIÓN.
  ADEMÁS, LA EMPRESA NO GARANTIZA NI HACE NINGUNA REPRESENTACIÓN SOBRE EL USO O LOS RESULTADOS DEL SISTEMA DE LA EMPRESA, LOS SERVIDORES DEL SISTEMA DE LA EMPRESA, EL SITIO WEB DE LA EMPRESA Y CUALQUIER OTRO SOFTWARE / API / ESPECIFICACIÓN / DOCUMENTACIÓN / SERVICIOS DE APLICACIONES EN TÉRMINOS DE SU VERACIDAD, EXACTITUD, CONFIABILIDAD U OTROS.
<br>  VIGÉSIMA TERCERA.- JURISDICCIÓN Y HONORARIOS DE ABOGADO.
<br>  Este Contrato se regirá e interpretará y aplicará de conformidad con las leyes del País, Estado y Ciudad donde se incorpora la Empresa, aplicable en él sin hacer referencia a las normas que rigen la elección de las leyes. Cualquier acción relacionada con este Contrato debe ser presentada en un tribunal de la Ciudad, Estado, País en el que se incorpora la Empresa.
<br>  VIGÉSIMA CUARTA.- MISCELANEOS.
<br>  Toda referencia en el presente Contrato a género incluirá todos los géneros y las palabras usadas sólo en el número singular incluirán el plural y viceversa.
<br>  No hay representaciones, garantías, condiciones u otros contratos, expresas o implícitas, legales o de otro tipo, entre las Partes en relación con la materia objeto del presente Contrato, salvo las expresamente mencionadas en este documento.
<br>  Las Partes tratarán de resolver cualquier disputa entre ellas antes de recurrir a un litigio a través del entendimiento mutuo.
<br>  El presente Contrato se aplicará en beneficio de y será vinculante para la Empresa y el Cliente, así como los respectivos sucesores y cesionarios autorizados.
<br>  El presente Contrato no proporciona y no se interpretará en prestar a terceros (es decir, a las personas que no son Partes en el presente Contrato), con ningún recurso, reclamación y causa de acción o privilegio contra la Empresa.
<br>  El Cliente, Empresa, y sus Proveedores de Servicios son contratistas independientes, y nada en este Contrato creará ninguna asociación, empresa conjunta, agencia, franquicia, representación de ventas o relación laboral entre las partes. El presente Contrato sustituye cualquier previo contrato, representación, declaración, negociación, entendimiento, propuesta o empresa, verbales o escritos, con respecto a la materia que se encuentra expresamente descrita en este documento. Si alguna cláusula de este Contrato será considerada ilegal, inválida o no ejecutable, cada Parte acuerda que dicha cláusula se ejecutará en la máxima medida permisible para mantener vigente la intención de las Partes, y la validez, legalidad y aplicabilidad de las restantes cláusulas del presente Contrato no deberán ser de ninguna manera afectadas o perjudicadas por el mismo. Si es necesario para mantener vigente la intención de las Partes, las Partes negociarán de buena fe para modificar el presente Contrato para sustituir lenguaje no ejecutable con lenguaje ejecutable que refleja esa intención lo más cerca posible.
<br>  Idioma. Todas las notificaciones, designaciones y especificaciones realizadas en virtud del presente Contrato se harán sólo en el idioma español.
<br>  Fechas y Horas. Todas las fechas y horas relevantes a este Contrato o su ejecución serán calculadas con base en la fecha y hora observadas en la Ciudad de México en los Estados Unidos Mexicanos.
<br>  VIGÉSIMA QUINTA.- INCUMPLIMIENTO.
<br>  En el caso de que la Empresa sospeche del incumplimiento de cualquier de los términos y condiciones de este Contrato:
<br>  La Empresa puede inmediatamente, sin notificación alguna y sin dar razón alguna, suspender/terminar el acceso de los Clientes a todos los Servicios de la Empresa y el Sistema de la Empresa.
<br>  El Cliente será inmediatamente responsable por los daños causados ​​por el incumplimiento de cualquier de los términos y condiciones de este Contrato.
  VIGÉSIMA SEXTA.- AVISO.
<br>  Toda notificación u otra comunicación que deba o pueda ser entregada a la Empresa en virtud de este Contrato se harán por escrito y se considerarán entregadas debidamente, cuando se envían a la dirección de contacto de la Empresa especificada en el Panel de Control del Cliente o en el Sitio Web de la Empresa (www.ggbservicios.com.mx) por correo certificado o mensajería. Toda comunicación se considerará que se ha dado válida y eficazmente, en la fecha de la recepción de dicha comunicación, si dicha fecha es un día hábil y dicha entrega se hizo antes de las 17:30 horas, hora local, y de otra manera en el siguiente día hábil.
<br>  Cualquier notificación u otra comunicación que deba o pueda ser entregada al Cliente en virtud de este Contrato, se considerarán entregadas debidamente, dadas y recibidas cuando se entrega a la dirección de correo electrónico o dirección de contacto del Cliente en la Base de Datos del sistema de la Empresa.
<br>  Aparte de esas notificaciones mencionadas en este contrato, la Empresa NO está obligada a comunicar con el Cliente a respecto de ningún de los servicios providenciados en el presente Contrato. Como una conveniencia para el Cliente, la Empresa puede enviar proactivamente avisos sobre aspectos con respecto a los servicios prestados en virtud del presente Contrato, sin embargo, estos avisos pueden ser suprimidos por la Empresa en cualquier momento.
<br>  VIGÉSIMO SÉPTIMA.- POLÍTICAS DE USO ACEPTABLE.
  <br>Términos de acceso al sistema de la Empresa. Cualquier violación de estos términos constituirá un incumplimiento de Contrato, y será motivo para la rescisión inmediata de este Contrato.
  <br>1. ACCESO AL sistema de la Empresa
  <br>La Empresa podrá en su ABSOLUTA, ÚNICA E IRRESTRICTA DISCRECIÓN suspender temporalmente el acceso de los Clientes al sistema de la Empresa en caso de una degradación significativa del sistema de la Empresa, o en cualquier momento que la Empresa considere necesario.
  <br>Está prohibido consumir una cantidad excesiva de recursos del servidor. Esto conduce a problemas de rendimiento del servidor y puede causar una interrupción en nuestros sistemas u otros clientes. Se prohíbe el uso de cualquier script o proceso que pueda tener un impacto adverso en nuestros sistemas. El equipo de administración de servidores determinará si alguna cuenta está abusando de recursos del servidor y pone en riesgo a otros clientes para poder suspender o terminar la cuenta abusadora.
<br>  La Empresa podrá en su ABSOLUTA, ÚNICA E IRRESTRICTA DISCRECIÓN realizar modificaciones en el sistema de la Empresa periódicamente.
<br>  Acceso al sistema de la Empresa es controlado por Información de Autenticación providenciada por la Empresa. La Empresa no se hace responsable por cualquier acción en el sistema de la Empresa llevado a cabo utilizando esta Información de Autenticación, ya sea autorizada o no.
<br>  La Empresa no se hace responsable de cualquier acción en el sistema de la Empresa por un Cliente.
<br>  El Cliente no intentará piratear, romper, obtener acceso no autorizado, mal uso o participar en cualquier práctica que pueda dificultar las operaciones del sistema de la Empresa, incluyendo, pero no limitado a ralentización temporal/permanente del sistema de la Empresa, daños a los datos, software, sistema operativo, aplicaciones, componentes de hardware, conectividad de red o cualquier otro hardware/software que constituye el sistema de la Empresa y arquitectura necesaria para continuar con su operación.
<br>  El Cliente no enviará o causará el envío de solicitudes de redes irrazonables y repetidas al sistema de la Empresa o establecer conexiones irrazonables repetidas con el sistema de la Empresa. La Empresa, en su ABSOLUTA, ÚNICA E IRRESTRICTA DISCRECIÓN, decidirá lo que constituye como un número razonable de solicitudes o conexiones.
<br>  El Cliente tomará medidas y precauciones razonables para garantizar el secreto de la Información de Autenticación.
<br>  El Cliente tomará las precauciones necesarias para proteger los Datos del sistema de la Empresa de un mal uso, acceso o divulgación no autorizados, alteración o destrucción.
<br>  La Empresa no será responsable por los daños causados ​​debido al compromiso de su Información de Autenticación de cualquier manera O cualquier uso autorizado/no autorizado de la Información de Autenticación.
<br>  La Empresa no será responsable por ningún daño debido al tiempo de inactividad o interrupción del sistema de la Empresa para cualquier duración y cualquier causa que sea.
<br>  La Empresa tendrá el derecho de suspender temporal o permanentemente el acceso de un Cliente al sistema de la Empresa si la Empresa en su ABSOLUTA, ÚNICA E IRRESTRICTA DISCRECIÓN sospecha de mal uso del acceso al sistema de la Empresa, o se entera de cualquier posible mal uso que ha ocurrido, o va a ocurrir con respecto a un Cliente.
<br>  La Empresa y Proveedores de Servicios se reservan el derecho, a su entera discreción, de rechazar cualquier solicitud, conexión de red, correo electrónico o mensaje para, o pasando por, el sistema de la Empresa
<br>  2. Condiciones de USO del sistema de la Empresa:
<br>  El Cliente, o sus contratistas, empleados, directores, funcionarios, representantes, agentes y afiliados y Clientes, ya sea directa o indirectamente, no podrá utilizar ni permitir el uso del sistema de la Empresa o de un Pedido, directa o indirectamente, en violación de cualquier norma, reglamento o ley, federal, estatal o local, o para cualquier fin ilegal, o de una manera perjudicial para la Empresa, Proveedores de Servicios o sus Distribuidores y Clientes, o su reputación, incluyendo pero no limitado a las siguientes actividades:
<br>  Usenet spam (fuera de tema, envío de mensajes en masa, publicación cruzada, publicidad en grupos de noticias no comerciales, etc.)
<br>  Publicar un solo artículo o artículos sustancialmente similares en un número excesivo de grupos de noticias (es decir, más de 2-3) o publicar artículos que sean fuera de tema (es decir, fuera del tema de contrato con el grupo de noticias o el artículo provoca quejas de los lectores del grupo de noticias por estar fuera de tema)
<br>  Enviar correos electrónicos masivos no solicitados (es decir, a más de 10 personas, generalmente conocido como correo basura, o lo que provoca quejas de los destinatarios; o participar en correo basura de cualquier proveedor
<br>  Ofrecer en venta o de otra manera permitir el acceso a productos de software que facilitan el envío de correos electrónicos no solicitados o facilitar el montaje de varias direcciones de correo electrónico.
<br>  Publicitar, transmitir, unir a, o de otra forma poner a disposición cualquier software, programa o servicio que está diseñado para violar estos términos, incluyendo pero no limitado a facilitar las acciones de spam, iniciar el ping, flooding, mailbombing, ataques de denegación de servicio, y la piratería de software.
<br>  Acosar otras personas que utilizan la Internet después de ser solicitado a parar por esos individuos, un tribunal, una agencia y/o Empresa de aplicación de la ley.
<br>  Hacerse pasar por otro usuario o entidad o una empresa/usuario/servicio existente o de otra manera falsificar la identidad de uno con fines fraudulentos en el correo electrónico, publicaciones de Usenet, en el IRC, o con cualquier otro servicio de Internet, o con el propósito de dirigir el tráfico de dicho usuario o entidad para otra parte.
<br>  Señalar para o de otra forma dirigir el tráfico, directa o indirectamente, para cualquier material que, a juicio exclusivo de la Empresa, se asocia con el correo basura, correo electrónico masivo, cosecha de direcciones, warez (o enlaces a dicho material), que está en violación de la ley de derechos de autor, o que contiene material juzgado, a juicio exclusivo de la Empresa, como amenazador u obsceno o inapropiado.
<br>  Participar en o solicitar actividades ilegales, o realizar cualquier otra actividad que infrinja los derechos de la Empresa, Proveedores de Servicios o cualquier otro tercero.<br>
  Transmitir mensajes comerciales no solicitados.<br>
  Transmitir correo electrónico masivo.<br>
  Estar listado, o bien, en nuestra opinión exclusiva estar a punto de ser incluido en cualquier lista negra de spam o Lista Negra de DNS.<br>
  Publicar artículos de Usenet/grupos de noticias masivos.<br>
  Ataques de denegación de servicio de cualquier tipo.<br>
  Uso excesivo de cualquier servicio web obtenido en virtud de este contrato más allá de los límites razonables según lo determinado por la Empresa a su entera discreción.<br>
  Infringir derechos de autor o marca comercial.<br>
  Actividades ilegales o ilícitas de cualquier tipo.<br>
  Promover abuso de la red de cualquier manera (proporcionando software, herramientas o información que permite, facilita o que de alguna manera apoye el abuso de la red).<br>
  Causar lossage o crear degradación del servicio para otros usuarios de forma intencionada o involuntaria.<br>
  Distribuir cadenas de mensajes.<br>
  Enviar archivos o mensajes grandes o múltiples a un solo destinatario con malas intenciones.<br>
  Publicar artículos cruzados a un número excesivo o inapropiado de grupos de noticias, foros, listas de correo o sitios web.<br>
  Phishing (robo de identidad), pharming, distribución de virus o malware, pornografía infantil, técnicas Fast Flux, ejecutar comando y control Botnet, ataques de red, esquemas de lavado de dinero (Ponzi, Pirámide, Money Mule, etc.)<br>
  Utilizar los servicios para participar en la distribución ilegal de medicamentos recetados, incluyendo, pero no limitado a, promoción, comercialización o venta de medicamentos recetados sin una receta válida.<br>
  Hacer referencia a un servicio proporcionado por el sistema de la Empresa o un pedido dentro de un mensaje de spam.<br>
  (Alojar, transmitir, proporcionar, publicar o almacenar contenido ilegal, incluyendo, pero no limitado a, los siguientes materiales, informaciones, mensajes, datos o imágenes:<br>
  (1) contenido injurioso o difamatorio.<br>
  (2) contenido que infrinja cualquier derecho de privacidad.<br>
  (3) contenido que amenaza daño físico o daño a la propiedad.<br>
  (4) contenido que sea obsceno, pornográfico, explícitamente erótico u ofensivo.<br>
  (5) contenido que viole las leyes o reglamentos aplicables de propiedad intelectual, incluyendo pero no limitado a, la transmisión de material con derechos de autor o secretos comerciales y la infracción de patentes y marcas comerciales.<br>
  (6) contenido que infrinja las leyes y regulaciones de exportación, reexportación o importación de cualquier jurisdicción aplicable.<br>
  (7) programas o archivos de hackers, warez, contraseñas o cracks.<br>
  (8) Servidores de Internet Relay Chat, IRC bots.<br>
  (9) Cualquier contenido que la Empresa a su entera discreción determina como ilegal o inapropiada.<br>
  (La Empresa, a su entera discreción, determinará qué constituye como violación del uso apropiado, incluyendo pero no limitado a todos los anteriores.<br>
  Los datos en la base de datos del sistema de la Empresa no pueden ser utilizado para cualquier propósito que no sean los enumerados a continuación, salvo si la autorización por escrito se ha obtenido de la Empresa:<br>
  Llevar a cabo servicios contemplados en virtud de este contrato; y<br>
  Comunicarse con la Empresa sobre cualquier cuestión relacionada con la Empresa o sus servicios.<br>
  VIGÉSIMA OCTAVA.- TÉRMINOS Y CONDICIONES DE PAGO.<br>
  La Empresa tiene el derecho de modificar la moneda de pago en cualquier momento.<br>
  Cualquier saldo negativo en la cuenta del Cliente será inmediatamente exigible. Si un Cliente no remedia un saldo negativo en su cuenta dentro de veinticuatro (24) horas, la Empresa tiene el derecho de rescindir este Contrato con efecto inmediato y sin previo aviso. Tras la rescisión o similar la Empresa seguirá teniendo el derecho de iniciar una acción judicial contra el Cliente para recuperar cualquier saldo negativo en la cuenta del Cliente.
  <br>Cualquier discrepancia, equívoco, error, en el crédito/débito/monto en las transacciones de Clientes podrá ser corregida por la Empresa en cualquier momento.<br>
  Términos de pago<br>
  La Empresa tiene un sistema de servicios pagados por adelantado es decir que el cliente obtendrá el servicio contratado en un lapso de tres (3) a cuarenta y ocho (48) horas después de haber realizado y confirmado el pago correspondiente.<br>
  Pago no oportuno<br>
<br>  Si su pago no se presenta oportuno a la fecha señalada la Empresa, podrá dejar de prestar los servicios sin previo aviso ni notificaciones, sin necesidad de una declaración ante las autoridades. Todo el contenido de un hospedaje no pagado en un periodo máximo de (5) días posteriores a la fecha de pago señalada, será eliminado de manera definitiva de nuestros servidores.
<br>  En el caso de que el Cliente vuelve un pago realizado a través de la Tarjeta de Crédito o el instrumento de pago enviado por el Cliente rebote por Falta de Fondos o cualquier otra Razón, entonces la Empresa podrá terminar de inmediato los servicios contratados.
<br>  La Empresa tiene el derecho de rescindir este contrato con efecto inmediato y sin previo aviso.<br>
  La Empresa en su ABSOLUTA, ÚNICA E IRRESTRICTA DISCRECIÓN puede eliminar, suspender, denegar, cancelar, modificar, tomar posesión de, o transferir cualquier o todos los Pedidos realizados por el Cliente, así como detener/suspender/eliminar/transferir cualquier Pedido que actualmente se está procesando.
<br>  La Empresa en su ABSOLUTA, ÚNICA E IRRESTRICTA DISCRECIÓN puede aplicar comisiones adicionales.<br>
  La Empresa tendrá el derecho de iniciar una acción judicial contra el Cliente para recuperar dichas responsabilidades.<br>
<br><br>
  VIGÉSIMA NOVENA.- PRECIOS.<br>
  Todos los precios en este Contrato, así como cada Extensión de Contrato del servicio del Cliente se refieren al precio al que el Cliente puede adquirir el servicio de la Empresa correspondiente. Esto es excluyendo impuestos, cargos adicionales o cualquier otro costo.
  La Empresa puede en cualquier momento modificar el precio de cualquier servicio de la Empresa.<br><br>
  TRIGÉSIMA. FACTURACIÓN.<br>
  El Cliente recibirá su factura y tendrá 5 dias naturales para la realización del pago<br>
  TRIGÉSIMA PRIMERA.- DEVOLUCIONES Y TÉRMINOS DE REEMBOLSO.<br>
  Las tarifas de registro de dominios no son reembolsables.<br>
  Las comisiones bancarias aplicables y una comisión de procesamiento razonable se deducirán de este monto. Todos los Reembolsos tendrán un máximo de veinticuatro (24) Días Hábiles para procesar desde la fecha de recepción de la solicitud.<br>
  La Empresa no será responsable por cualquier diferencia en el monto de reembolso debido a la fluctuación de las tasas de cambio internacional. La Empresa determinará, a su entera discreción, las tasas de cambio adecuadas para cambio de divisas<br>
  <br>TRIGÉSIMA SEGUNDA.- CONTACTO.<br>
  Cualquier duda o comentario por favor comunicarse con nosotros a través del correo electrónico soporte@ggbservicios.com.mx<br>
  Si es necesario reportar algún abuso o violación a los presentes Términos y Condiciones, Aviso de Privacidad o Política de Uso de Recursos es necesario ponerse en contacto por medio del correo abuso@ggbservicios.com.mx<br>
  En caso de que requiera enviar documentación física a la Empresa, deberá notificar a la Empresa previamente al correo electrónico soporte@ggbservicios.com.mx con 48 horas de anticipación.
</p>
    </div>
  </div>
</div>







  <!-- END -->
  </div>
`;const y=document.getElementById("menu-btn"),l=document.getElementById("mobile-menu"),p=document.getElementById("menu-icon"),A=document.body,b=document.querySelectorAll("nav a");let d=!1;y.addEventListener("click",()=>{l.classList.toggle("hidden"),A.classList.toggle("overflow-hidden"),d=!d,l.classList.contains("hidden")?p.innerHTML='<path d="M4 6h16M4 12h16m-7 6h7"></path>':p.innerHTML='<path d="M6 18L18 6M6 6l12 12"></path>'});b.forEach(a=>{a.addEventListener("click",function(){l.classList.add("hidden"),A.classList.remove("overflow-hidden"),d=!1,p.innerHTML='<path d="M4 6h16M4 12h16m-7 6h7"></path>'})});let E=0;const f=document.getElementById("topbar"),C=document.getElementById("header");window.addEventListener("scroll",function(){const a=window.scrollY||document.documentElement.scrollTop;a>E?(f.style.transform="translateY(-100%)",C.style.transform="translateY(-50%)",d&&(l.style.transform="translateY(-100%)")):(f.style.transform="translateY(0)",C.style.transform="translateY(0)",d&&(l.style.transform="translateY(0)")),E=a<=0?0:a});const x=document.getElementById("cta"),c=new IntersectionObserver(a=>{a.forEach(o=>{o.isIntersecting?x.classList.remove("visible"):x.classList.add("visible")})},{threshold:0});c.observe(document.querySelector("#ubicacion"));c.observe(document.querySelector("footer"));c.observe(document.getElementById("wp-btn-desk"));c.observe(document.querySelector("#end-of-page"));function S(){let a=-1;document.querySelectorAll("section").forEach((o,t)=>{const r=o.getBoundingClientRect();r.top<=window.innerHeight/2&&r.bottom>=window.innerHeight/2&&(a=t)}),b.forEach(o=>o.classList.remove("activo")),a!==-1&&b.forEach(o=>{o.getAttribute("href")===`#${document.querySelectorAll("section")[a].id}`&&o.classList.add("activo")})}window.addEventListener("scroll",S);window.addEventListener("load",S);function h(){return`
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.517616371986!2d-99.04210952402956!3d19.39002894203776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff87e220f72f%3A0x205133a14671241b!2sGGB%20Servicios%20TI%2B!5e0!3m2!1sen!2smx!4v1725665480714!5m2!1sen!2smx"
      width="100%" 
      height="300" 
      style="border:5px solid #84cc16; border-radius: 0.5rem;" 
      allowfullscreen="" 
      loading="lazy">
    </iframe>`}document.addEventListener("DOMContentLoaded",function(){const a=document.getElementById("map-container");a?(a.innerHTML=h(),console.log("Iframe inserted successfully in desktop view")):console.log("Map container not found in desktop view");const o=document.getElementById("map-container-mobile");o?(o.innerHTML=h(),console.log("Iframe inserted successfully in mobile view")):console.log("Map container mobile not found")});document.addEventListener("DOMContentLoaded",()=>{var v,g;const a=document.getElementById("modal-privacidad"),o=document.getElementById("modal-terminos"),t=document.getElementById("open-privacidad"),r=document.getElementById("open-terminos"),e=document.getElementById("open-privacidad-desktop"),i=document.getElementById("open-terminos-desktop");function n(s){s.classList.remove("hidden"),document.body.style.overflow="hidden"}function u(s){const m=s.currentTarget.getAttribute("data-close");document.getElementById(m).classList.add("hidden"),document.body.style.overflow=""}t==null||t.addEventListener("click",s=>{s.preventDefault(),n(a)}),r==null||r.addEventListener("click",s=>{s.preventDefault(),n(o)}),e==null||e.addEventListener("click",s=>{s.preventDefault(),n(a)}),i==null||i.addEventListener("click",s=>{s.preventDefault(),n(o)}),(v=document.querySelector('button[data-close="modal-privacidad"]'))==null||v.addEventListener("click",u),(g=document.querySelector('button[data-close="modal-terminos"]'))==null||g.addEventListener("click",u),document.querySelectorAll(".modal").forEach(s=>{s.addEventListener("click",m=>{m.target===s&&u({currentTarget:{getAttribute:()=>s.id}})})})});
