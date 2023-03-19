$(document).ready(function() { 
      var id = '#dialog';
      var maskHeight = $(document).height();
      var maskWidth = $(window).width();
      $('#mask').css({'width':maskWidth,'height':maskHeight}); 
      $('#mask').fadeIn(500); 
      $('#mask').fadeTo("slow",0.9); 
      var winH = $(window).height();
      var winW = $(window).width();
      console.log(winW);
      $(id).css('top',  winH/2-$(id).height()/2);
      $(id).css('left', winW/4);
      $(id).css('width', winW/2);
      $(id).fadeIn(2000);  
      
      $('.window .close').click(function (e) {
            e.preventDefault();
            $('#mask').hide();
            $('.window').hide();
      });  
      
      $('#mask').click(function () {
            $(this).hide();
            $('.window').hide();
      });  
   
  });

  const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
   }
   animate();
});