$(document).ready(function() {
	


// Sticky header
	 $window = $(window);
		$window.scroll(function() {
			if ( $window.scrollTop() > 0 ) {
				$("body").addClass('sticky');
			}else {
				$("body").removeClass('sticky');
			}
		}); 
		
		
			// Mobile-menu
			$('.nav-icon, .overlay').click(function(e) {
                $('body').toggleClass('open-menu');
				$(this).toggleClass('open');
            });
			
			// FOR Equalheight --------------------------
equalheight = function(container){
var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}
$(window).load(function() {  equalheight(' .ehgt'); });
$(window).resize(function(){  equalheight(' .ehgt'); });
$(document).ready(function(){  equalheight(' .ehgt'); });

/* 03-08-2017 add slick here  slick slider */
			$('.multiple-items').slick({
  centerMode: true,
 arrows:false,                
  centerPadding: '5px',
  slidesToShow: 3,
  slideSpeed:10000,
  autoplay: true,
  /* 08-07-2017 add slick here  slick slider */
  autoplaySpeed: 10000,
  /* 08-07-2017 add slick here  slick slider */
  infinite: true,
  speed: 1000,
   
  responsive: [
    {
      breakpoint:992,
      settings: {
        //arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2,
		
      }
    },
	{
      breakpoint: 768,
      settings: {
        //arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1,
		
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1,
		//vertical: true,
		
      }
    }
  ]
});
/* slick slider end   03-08-2017 */


  });