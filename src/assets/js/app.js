console.log('file 1');



if (window.matchMedia('(max-width: 1400px)').matches)  {
     $('#block-1').hover(
        function(){
            $(this).animate({height:370});
            $('#block-3').animate({height:282});
            $('#block-1-text').fadeIn();
        },
        function(){    		
                $(this).animate({height:326});
                $('#block-3').animate({height:326});
                $('#block-1-text').fadeOut();
    });
} else {
    $('#block-1').hover(
        function(){
            $(this).animate({height:370});
            $('#block-4').animate({height:282});
            $('#block-1-text').fadeIn();
        },
        function(){    		
                $(this).animate({height:326});
                $('#block-4').animate({height:326});
                $('#block-1-text').fadeOut();
    });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
    $('#block-2').hover(
       function(){
           $(this).animate({height:370});
           $('#block-4').animate({height:282});
           $('#block-2-text').fadeIn();
       },
       function(){    		
               $(this).animate({height:326});
               $('#block-4').animate({height:326});
               $('#block-2-text').fadeOut();
   });
} else {
   $('#block-2').hover(
       function(){
           $(this).animate({height:370});
           $('#block-5').animate({height:282});
           $('#block-2-text').fadeIn();
       },
       function(){    		
               $(this).animate({height:326});
               $('#block-5').animate({height:326});
               $('#block-2-text').fadeOut();
   });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
    $('#block-3').hover(
       function(){
           $(this).animate({height:370});
           $('#block-5').animate({height:282});
           $('#block-3-text').fadeIn();
       },
       function(){    		
               $(this).animate({height:326});
               $('#block-5').animate({height:326});
               $('#block-3-text').fadeOut();
   });
} else {
   $('#block-3').hover(
       function(){
           $(this).animate({height:370});
           $('#block-6').animate({height:282});
           $('#block-3-text').fadeIn();
       },
       function(){    		
               $(this).animate({height:326});
               $('#block-6').animate({height:326});
               $('#block-3-text').fadeOut();
   });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
    $('#block-4').hover(
       function(){
           $(this).animate({height:370});
           $('#block-2').animate({height:282});
           $('#block-4-text').fadeIn();
       },
       function(){    		
               $(this).animate({height:326});
               $('#block-2').animate({height:326});
               $('#block-4-text').fadeOut();
   });
} else {
   $('#block-4').hover(
       function(){
           $(this).animate({height:370});
           $('#block-1').animate({height:282});
           $('#block-4-text').fadeIn();
       },
       function(){    		
               $(this).animate({height:326});
               $('#block-1').animate({height:326});
               $('#block-4-text').fadeOut();
   });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
   $('#block-5').hover(
      function(){
          $(this).animate({height:370});
          $('#block-3').animate({height:282});
          $('#block-5-text').fadeIn();
      },
      function(){    		
              $(this).animate({height:326});
              $('#block-3').animate({height:326});
              $('#block-5-text').fadeOut();
  });
} else {
  $('#block-5').hover(
      function(){
          $(this).animate({height:370});
          $('#block-2').animate({height:282});
          $('#block-5-text').fadeIn();
      },
      function(){    		
              $(this).animate({height:326});
              $('#block-2').animate({height:326});
              $('#block-5-text').fadeOut();
  });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
   $('#block-6').hover(
      function(){
          $(this).animate({height:370});
          $('#block-4').animate({height:282});
          $('#block-6-text').fadeIn();
      },
      function(){    		
              $(this).animate({height:326});
              $('#block-4').animate({height:326});
              $('#block-6-text').fadeOut();
  });
} else {
  $('#block-6').hover(
      function(){
          $(this).animate({height:370});
          $('#block-3').animate({height:282});
          $('#block-6-text').fadeIn();
      },
      function(){    		
              $(this).animate({height:326});
              $('#block-3').animate({height:326});
              $('#block-6-text').fadeOut();
  });
}