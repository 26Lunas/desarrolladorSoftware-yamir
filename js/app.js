
$(document).ready(function() {
  console.log("Jquery esta funcionando");

  // Cargar proyectos desde proyectos.json
  fetch('proyectos.json')
    .then(function(response) {
      if (!response.ok) {
        throw new Error('Error al cargar proyectos.json');
      }
      return response.json();
    })
    .then(function(proyectos) {
      var contenedor = document.getElementById('contenedor-proyectos');
      if (!contenedor) return;

      proyectos.forEach(function(proyecto) {
        var categoria = proyecto.categoria ? proyecto.categoria : 'filter-1';

        var tecnologiasHTML = '';
        if (Array.isArray(proyecto.tecnologias)) {
          tecnologiasHTML = proyecto.tecnologias.map(function(tec) {
            return '<li>' + tec + '</li>';
          }).join('');
        }

        var tarjeta = document.createElement('div');
        tarjeta.className = 'image ' + categoria;
        tarjeta.setAttribute('data-aos', 'fade-up');
        tarjeta.setAttribute('data-aos-duration', '1000');

        tarjeta.innerHTML = ''
          + '<div class="cont-img-decript">'
          + '  <img class="img-proyecto" src="' + proyecto.imagen + '" alt="Proyecto">'
          + '  <div class="cont-description desaparecer"'
          + '       data-aos="flip-right"'
          + '       data-aos-easing="ease-out-cubic"'
          + '       data-aos-duration="2000">'
          + '    <h5>' + proyecto.titulo + '</h5>'
          + '    <p>' + proyecto.descripcion + '</p>'
          + '    <div class="lenguajes-utilizados">'
          + '      <ul>' + tecnologiasHTML + '</ul>'
          + '    </div>'
          + '    <div class="enlaces-sitio">'
          + '      <a href="' + proyecto.url + '" target="_blank">'
          + '        <i class="fa-solid fa-globe"></i>Visitar web'
          + '      </a>'
          + '    </div>'
          + '  </div>'
          + '</div>';

        contenedor.appendChild(tarjeta);
      });

      // Hover genérico para todas las tarjetas
      $(".cont-img-decript").hover(function () {
        $(this).find(".cont-description").toggleClass("desaparecer");
      });

      // Refrescar AOS para los nuevos elementos
      if (window.AOS && typeof window.AOS.refreshHard === 'function') {
        window.AOS.refreshHard();
      } else if (window.AOS && typeof window.AOS.refresh === 'function') {
        window.AOS.refresh();
      }
    })
    .catch(function(error) {
      console.error(error);
    });

  // Funcion de efecto scroll
  let prevScrollpos = window.pageYOffset;
  let visible = false;
  let navbar = document.getElementById("navbarScroll");

  window.addEventListener("scroll", function() {
    let currentScrollPos = window.pageYOffset;

    if (prevScrollpos >= currentScrollPos) {
      if (!visible) {
        navbar.classList.add("navbarScroll");
        visible = true;
      }
    } else {
      if (visible) {
        navbar.classList.remove("navbarScroll");
        visible = false;
      }
    }

    prevScrollpos = currentScrollPos;

    if (prevScrollpos <= 846) {
      navbar.classList.remove("navbarScroll");
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute('id');
      const menuLink = document.querySelectorAll(`.navbar a[href="#${id}"]`);
      if (entry.isIntersecting) {
        document.querySelector(".navbar a.activado").classList.remove("activado");
        $(menuLink).addClass('activado');
      }
    });
  }, { rootMargin: "-30% 0px -70% 0px" });

  const navbarLink = document.querySelectorAll('.navbar a[href^="#"]');
  navbarLink.forEach(link => {
    const hash = link.getAttribute("href");
    const target = document.querySelector(hash);
    if (target) {
      observer.observe(target);
    }
  });

  $('.btn-miWork').hover(function () {
    let iconoFlecha = document.getElementById('iconoFlecha');
    iconoFlecha.classList.toggle('rotar');

    let contTitle = document.getElementById('cont-title');
    contTitle.classList.toggle('btn-miWork-hover');
  });

  $('.buttons').click(function() {
    $(this).addClass('active').siblings().removeClass('active');

    let filter = $(this).attr('data-filter');

    if (filter == 'all') {
      $('.image').show(400);
    } else {
      $('.image').not('.' + filter).hide(200);
      $('.image').filter('.' + filter).show(400);
    }
    console.log(filter);
  });

  // Código de popup magnific (comentado)
  // $('.gallery').magnificPopup({
  //   delegate: 'a',
  //   type: 'image',
  //   gallery:{
  //     enabled: true
  //   }
  // })

});



// codigo para resetiar formulario + anti-spam y anti-palabras inapropiadas

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSumit);

// Lista de palabras inapropiadas (insultos, groserías, obscenidades)
const PALABRAS_BLOQUEADAS = [
    'idiota', 'estupido', 'estúpido', 'imbecil', 'imbécil', 'tonto', 'pendejo', 'pendeja',
    'puta', 'puto', 'mierda', 'carajo', 'coño', 'verga', 'chingar', 'chingada', 'chingado',
    'cabron', 'cabrón', 'maricon', 'maricón', 'hijueputa', 'malparido', 'malparida',
    'culero', 'culera', 'pendejada', 'mamón', 'mamona', 'güevón', 'guevon',
    'gilipollas', 'cabron', 'joder', 'hostia', 'mierda', 'cojones', 'coño',
    'fuck', 'shit', 'asshole', 'bitch', 'damn', 'dick', 'crap'
];

function contienePalabrasInapropiadas(texto) {
    if (!texto || typeof texto !== 'string') return false;
    const normalizado = texto.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return PALABRAS_BLOQUEADAS.some(function(palabra) {
        const p = palabra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const regex = new RegExp('\\b' + p.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
        return regex.test(normalizado);
    });
}

async function handleSumit(event){
    event.preventDefault();
    var form = this;

    // Anti-spam: honeypot (si lo llenó un bot, no enviar)
    var honeypot = form.querySelector('.form-honeypot');
    if (honeypot && honeypot.value && honeypot.value.trim() !== '') {
        form.reset();
        return;
    }

    // Anti-palabras inapropiadas
    var nombre = (form.Nombre && form.Nombre.value) || '';
    var mensaje = (form.Mensaje && form.Mensaje.value) || '';
    if (contienePalabrasInapropiadas(nombre) || contienePalabrasInapropiadas(mensaje)) {
        alert('Por favor, evita usar lenguaje ofensivo o inapropiado en tu mensaje.');
        return;
    }

    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers:{
            'Accept': 'application/json'
        }
    });
    if (response.ok){
        form.reset();
        alert('Gracias por contactarme, te escribiré pronto!!');
    }else{
        alert('Ocurrió un error con el servidor, vuelve a intentarlo más tarde');
    }
}


// Fin codigo para resetiar formulario
