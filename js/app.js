
$(function() {
    console.log("Jquery esta funcionando");
  
  // Funcion de efecto scroll

    $(window).scroll(function(){
      // console.log($(this).scrollTop())
      

      let navbar = document.getElementById('navbarScroll');
      let opAboutme = document.getElementById('op-aboutme');
      let opPortafolio = document.getElementById('op-portafolio');
      let opContacto = document.getElementById('op-contacto');
      

      navbar.classList.toggle('navbarScroll',$(this).scrollTop() > 846);

      let opHome = document.getElementById('op-home');
      if($(this).scrollTop() > 0 && $(this).scrollTop() < 846){

        opPortafolio.classList.remove('activado');
        opHome.classList.add('activado');
        opAboutme.classList.remove('activado');
        opContacto.classList.remove('activado');
      }else if($(this).scrollTop() > 845 && $(this).scrollTop() < 2000){
        opPortafolio.classList.remove('activado');
        opHome.classList.remove('activado');
        opAboutme.classList.add('activado');
        opContacto.classList.remove('activado');

      }else if($(this).scrollTop() > 2156 && $(this).scrollTop() < 3591){
        opAboutme.classList.remove('activado');
        
        opPortafolio.classList.add('activado');
        opContacto.classList.remove('activado');

      }else if($(this).scrollTop() > 3591 && $(this).scrollTop() < 3893){
        opPortafolio.classList.remove('activado');
        opContacto.classList.add('activado');
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

    $('.gallery').magnificPopup({

      delegate: 'a',
      type: 'image',
      gallery:{
        enabled: true
      }

    })
   
})

$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 900, function(){
  
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
    
