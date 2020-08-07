$(document).ready(function(){
  let imagesLoaded = 0;
  const totalImages = $('.slideImage').length;
  const sliderDescs = $('.service-type');

  $('.slideImage').on('load', function(){
    imagesLoaded++;
    if(imagesLoaded == totalImages){
      const width = $(this).width();
      let counter = 1;
      //slider
      $('.carousel-slider').css('transform', 'translateX(' + (-width * counter) + 'px)');
      //text change
      $(`.service-type:eq(${counter-1})`).css('opacity', '1');
      setInterval(()=>{
        counter++;
        //slider
        $('.carousel-slider').css('transition', 'all 1s ease-in-out');
        $('.carousel-slider').css('transform', 'translateX(' + (-width * counter) + 'px)');
        //text change
        $(`.service-type:eq(${counter-2})`).css('opacity', '0');
        $(`.service-type:eq(${counter-1})`).css('opacity', '1');
      },4000);

      $('.carousel-slider').on('transitionend webkitTransitionEnd oTransitionEnd', function(){
        if(counter == totalImages - 1){
          $(this).css('transition', 'none');
          counter = 0;
          $('.carousel-slider').css('transform', 'translateX(' + (-width * counter) + 'px)');
        }
      });
    }
  });

  $('.to_top').on('click', function(){
    $('html, body').animate({'scrollTop': 0}, 1000);
  });
});
