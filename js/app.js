
$(document).ready(function() {
    console.log("Jquery esta funcionando");
  
  // Funcion de efecto scroll

    // $(window).scroll(function(){
    
    //   let navbar = document.getElementById('navbarScroll');

    //   navbar.classList.toggle('navbarScroll',$(this).scrollTop() > 846);
            
    // })

    $(document).ready(function() {
      $('#btn-mostrarADS').click();
  });

    
    let prevScrollpos = window.pageYOffset;
    let visible = false;
    let navbar = document.getElementById("navbarScroll");

    window.addEventListener("scroll", function() {
      let currentScrollPos = window.pageYOffset;
      

      if (prevScrollpos >= currentScrollPos) {
        // El usuario se está desplazando hacia arriba
        if (!visible) {
          // Mostrar la barra de navegación si estaba oculta
          navbar.classList.add("navbarScroll");
          visible = true;
        }
      } else {
        // El usuario se está desplazando hacia abajo
        if (visible) {
          // Ocultar la barra de navegación si estaba visible
          navbar.classList.remove("navbarScroll");
          visible = false;
        }
      }

      prevScrollpos = currentScrollPos;

      if(prevScrollpos <=846){
        navbar.classList.remove("navbarScroll");
        
      }

    });

    
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        // console.log(id);
        const menuLink = document.querySelectorAll(`.navbar a[href="#${id}"]`);
        // console.log(menuLink);
        if(entry.isIntersecting){
          document.querySelector(".navbar a.activado").classList.remove("activado");
          // menuLink.classList.add('activado');
          $(menuLink).addClass('activado')
        }
        

      })
    }, {rootMargin: "-30% 0px -70% 0px" }
    );

    const navbarLink = document.querySelectorAll('.navbar a[href^="#"]');
    // console.log(navbarLink);
    navbarLink.forEach(navbarLink => {
      const hash = navbarLink.getAttribute("href");
      // console.log(hash)
      const target = document.querySelector(hash);
      // console.log(target)
      if(target){
        observer.observe(target);
      }
    })

    $('.btn-miWork').hover(function () {

        let iconoFlecha = document.getElementById('iconoFlecha');
        iconoFlecha.classList.toggle('rotar');

        let contTitle = document.getElementById('cont-title');
        contTitle.classList.toggle('btn-miWork-hover');

    })

    

    $('.buttons').click(function(){

      $(this).addClass('active').siblings().removeClass('active');
      
      let filter = $(this).attr('data-filter');

      if(filter == 'all'){
        $('.image').show(400);
      }else{
        $('.image').not('.'+filter).hide(200);
        $('.image').filter('.'+filter).show(400);
      }
      console.log(filter)
    })

    // $('.gallery').magnificPopup({

    //   delegate: 'a',
    //   type: 'image',
    //   gallery:{
    //     enabled: true
    //   }

    // })
   
    $("#cont-img-description-1").hover(function(){
      //console.log("hover...");
      let contDescript = document.getElementById("cont-description");
      contDescript.classList.toggle("desaparecer");
      
    })
    $("#cont-img-description-2").hover(function(){
      //console.log("hover...");
      let contDescript = document.getElementById("cont-desciption-2");
      contDescript.classList.toggle("desaparecer");
      
    })
    $("#cont-img-description-3").hover(function(){
      //console.log("hover...");
      let contDescript = document.getElementById("cont-desciption-3");
      contDescript.classList.toggle("desaparecer");
      
    })
    $("#cont-img-description-4").hover(function(){
      //console.log("hover...");
      let contDescript = document.getElementById("cont-desciption-4");
      contDescript.classList.toggle("desaparecer");
      
    });
    $("#cont-img-description-5").hover(function(){
      //console.log("hover...");
      let contDescript = document.getElementById("cont-desciption-5");
      contDescript.classList.toggle("desaparecer");
      
    })
    $("#cont-img-description-6").hover(function(){
      //console.log("hover...");
      let contDescript = document.getElementById("cont-desciption-6");
      contDescript.classList.toggle("desaparecer");
      
    })
})



// codigo para resetiar formulario

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSumit);

async function handleSumit(event){
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarme, te escribiré pronto!!')
    }else{
        alert('Ocurrio un error con el servidor, vuelva a intentarlo mas tarde')
    }
}


// Fin codigo para resetiar formulario
