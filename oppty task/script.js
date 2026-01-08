let slides = document.querySelectorAll('.slides');
let dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i){
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

setInterval(()=>{
  index++;
  if(index >= slides.length) index = 0;
  showSlide(index);
}, 4000);






if(!window.carouselInitialized){

  window.carouselInitialized = true;

  const track = document.querySelector('.carousel-track');
  const dots = document.querySelectorAll('.dot');

  let page = 0;

  function slide(){
    track.style.transform = `translateX(-${page * 100}%)`;

    dots.forEach(d => d.classList.remove('active'));
    dots[page].classList.add('active');
  }

  setInterval(() => {
    page = (page + 1) % dots.length;
    slide();
  }, 3500);

}



document.addEventListener("DOMContentLoaded", function () {
  const carouselElement = document.querySelector("#testimonialCarousel");

  new bootstrap.Carousel(carouselElement, {
    interval: 4000,
    ride: "carousel",
    pause: "hover",
    wrap: true
  });
});


let i=0;
const track=document.querySelector('.review-track');

setInterval(()=>{
  i=(i+1)%3;
  track.style.transform=`translateX(-${i*320}px)`;
},3000);



