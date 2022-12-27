
$(function() {
    console.log("Jquery esta funcionando");
  
  // Funcion de efecto scroll

    $(window).scroll(function(){
      // console.log($(this).scrollTop())
      

      let navbar = document.getElementById('navbarScroll');
      
      

      navbar.classList.toggle('navbarScroll',$(this).scrollTop() > 846);
     
    })


    

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
    
