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

$('.stage').scroll(function() {

	var target = $(this).scrollTop();

	if(target == 0) {
        $('#stage-block-1').addClass('stages-flex')
        $('#stage-block-1').removeClass('stages-none')
        $('#stage-block-2').removeClass('stages-flex')
	}
    if(target >= 100) {
        $('#stage-block-2').addClass('stages-flex')
        $('#stage-block-2').removeClass('stages-none')
        $('#stage-block-3').addClass('stages-none')
        $('#stage-block-4').addClass('stages-none')
    }
    if(target >= 200) {
        $('#stage-block-3').addClass('stages-flex')
        $('#stage-block-4').removeClass('stages-flex')
        $('#stage-block-3').removeClass('stages-none')
    } 
    if(target >= 300) {
        $('#stage-block-4').addClass('stages-flex')
        $('#stage-block-4').removeClass('stages-none')
        
    } 
    console.log(target);

});

$(document).ready(function() {
	$('.menu-burger__header').click(function(){
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header-content__mobile').toggleClass('open-menu');
	});
});



$("#key-click").on("click", function (event) {
    event.preventDefault();
    ScrollTop ("#key")
});
$(".scrollToForm").on("click", function (event) {
    event.preventDefault();
    ScrollTop ("#contact")
});


function ScrollTop (scrollTo) {
    var top = $(scrollTo).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
}