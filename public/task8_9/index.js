const slider = document.querySelector('.menu_stepshow');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e)=>{
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseup', (e)=>{
  isDown = false;
})
slider.addEventListener('mousemove', (e)=>{
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX);
  slider.scrollLeft = scrollLeft - walk;
})