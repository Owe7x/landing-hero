console.log('file 1');



if (window.matchMedia('(max-width: 1400px)').matches)  {
     $('#block-1').hover(
        function(){
            $(this).animate({height:370});
            $('#block-3').animate({height:306});
            $('#block-1-text').animate({ opacity: 1 });
        },
        function(){    		
                $(this).animate({height:326});
                $('#block-3').animate({height:326});
                $('#block-1-text').animate({ opacity: 0 });
    });
} else {
    $('#block-1').hover(
        function(){
            $(this).animate({height:370});
            $('#block-4').animate({height:306});
            $('#block-1-text').animate({ opacity: 1 });
        },
        function(){    		
                $(this).animate({height:350});
                $('#block-4').animate({height:350});
                $('#block-1-text').animate({ opacity: 0 });
    });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
    $('#block-2').hover(
       function(){
           $(this).animate({height:370});
           $('#block-4').animate({height:306});
           $('#block-2-text').animate({ opacity: 1 });
       },
       function(){    		
               $(this).animate({height:350});
               $('#block-4').animate({height:350});
               $('#block-2-text').animate({ opacity: 0 });
   });
} else {
   $('#block-2').hover(
       function(){
           $(this).animate({height:370});
           $('#block-5').animate({height:306});
           $('#block-2-text').animate({ opacity: 1 });
       },
       function(){    		
               $(this).animate({height:350});
               $('#block-5').animate({height:350});
               $('#block-2-text').animate({ opacity: 0 });
   });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
    $('#block-3').hover(
       function(){
           $(this).animate({height:370});
           $('#block-5').animate({height:306});
           $('#block-3-text').animate({ opacity: 1 });
       },
       function(){    		
               $(this).animate({height:350});
               $('#block-5').animate({height:350});
               $('#block-3-text').animate({ opacity: 0 });
   });
} else {
   $('#block-3').hover(
       function(){
           $(this).animate({height:370});
           $('#block-6').animate({height:306});
           $('#block-3-text').animate({ opacity: 1 });
       },
       function(){    		
               $(this).animate({height:350});
               $('#block-6').animate({height:350});
               $('#block-3-text').animate({ opacity: 0 });
   });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
    $('#block-4').hover(
       function(){
           $(this).animate({height:370});
           $('#block-2').animate({height:306});
           $('#block-4-text').animate({ opacity: 1 });
       },
       function(){    		
               $(this).animate({height:350});
               $('#block-2').animate({height:350});
               $('#block-4-text').animate({ opacity: 0 });
   });
} else {
   $('#block-4').hover(
       function(){
           $(this).animate({height:370});
           $('#block-1').animate({height:306});
           $('#block-4-text').animate({ opacity: 1 });
       },
       function(){    		
               $(this).animate({height:350});
               $('#block-1').animate({height:350});
               $('#block-4-text').animate({ opacity: 0 });
   });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
   $('#block-5').hover(
      function(){
          $(this).animate({height:370});
          $('#block-3').animate({height:306});
          $('#block-5-text').animate({ opacity: 1 });
      },
      function(){    		
              $(this).animate({height:350});
              $('#block-3').animate({height:350});
              $('#block-5-text').animate({ opacity: 0 });
  });
} else {
  $('#block-5').hover(
      function(){
          $(this).animate({height:370});
          $('#block-2').animate({height:306});
          $('#block-5-text').animate({ opacity: 1 });
      },
      function(){    		
              $(this).animate({height:350});
              $('#block-2').animate({height:350});
              $('#block-5-text').animate({ opacity: 0 });
  });
}
if (window.matchMedia('(max-width: 1400px)').matches)  {
   $('#block-6').hover(
      function(){
          $(this).animate({height:370});
          $('#block-4').animate({height:306});
          $('#block-6-text').animate({ opacity: 1 });
      },
      function(){    		
              $(this).animate({height:350});
              $('#block-4').animate({height:350});
              $('#block-6-text').animate({ opacity: 0 });
  });
} else {
  $('#block-6').hover(
      function(){
          $(this).animate({height:370});
          $('#block-3').animate({height:306});
          $('#block-6-text').animate({ opacity: 1 });
      },
      function(){    		
              $(this).animate({height:350});
              $('#block-3').animate({height:350});
              $('#block-6-text').animate({ opacity: 0 });
  });
}