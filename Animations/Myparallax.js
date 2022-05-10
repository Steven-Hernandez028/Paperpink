
let frase = document.querySelector(".frase-button");




window.addEventListener('scroll',function(){
        var value = window.scrollY;

       
        frase.style.bottom = -value * 0.30 + 'px';

})

$(document).ready(function(){
 
        $("a").on('click', function(event) {
      
        
          if (this.hash !== "") {
      
            event.preventDefault();
      
            var hash = this.hash;
      
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
         
              
              window.location.hash = hash;
            });
          } 
        });
      });