const imageSlider = document.querySelector('.carousel-slider');
const images = document.querySelectorAll('.carousel-slider img');
const serviceDescriptions = document.querySelectorAll('.service-type');

let counter = 1;
const size = images[0].clientWidth;

imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
serviceDescriptions[counter-1].style.opacity = "1";

setInterval(()=>{
  counter++;
  //slider
  imageSlider.style.transition = 'all 1s ease-in-out';
  imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  //service description change
  if(counter === 1){
    serviceDescriptions[serviceDescriptions.length-1].style.opacity = '0';
    serviceDescriptions[counter - 1].style.opacity = '1';
  }
  if(counter !== 1){
    serviceDescriptions[counter-2].style.opacity = '0';
    serviceDescriptions[counter-1].style.opacity = '1';
  }
}, 4000);

imageSlider.addEventListener('transitionend', ()=>{
  if(images[counter].id === 'lastImage'){
    imageSlider.style.transition = 'none';
    counter = 0;
    imageSlider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
});




$(document).ready(function(){
  $('.to_top').on('click', function(e){
      $('body, html').animate({'scrollTop': 0}, 500);
  });
});