$(function() {
    console.log("Jquery esta funcionando");
    
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
    