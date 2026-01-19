let index = 0;
const slides = document.querySelectorAll('.slides');
const dots = document.querySelectorAll('.dot');
const contents = document.querySelectorAll('.content');

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  dots.forEach(d=>d.classList.remove('active'));

  contents.forEach(c=>c.classList.remove('flip'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');

  setTimeout(()=>{
    contents[i].classList.add('flip');
  },200);
}



dots.forEach((dot,i)=>{
  dot.onclick = ()=>{ index=i; showSlide(index); };
});

setInterval(()=>{
  index = (index+1) % slides.length;
  showSlide(index);
}, 5000);

const anime = document.querySelector('.anime');

anime.addEventListener('mousemove', e=>{
  const x = (e.clientX / window.innerWidth - .5) * 30;
  anime.style.backgroundPosition = `${50 + x}% 50%`;
});


/* Smooth reveal on scroll */
const revealElements = document.querySelectorAll(
  '.container1, .container3, .container4, .container5'
);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

revealElements.forEach(el => revealObserver.observe(el));


/* Animated Counters */
const counters = document.querySelectorAll('.container5 h3');

counters.forEach(counter => {
  let target = parseInt(counter.innerText.replace(/\D/g, ''));
  let current = 0;

  const update = () => {
    if (current < target) {
      current += Math.ceil(target / 60);
      counter.innerText = current + (counter.innerText.includes('+') ? '+' : '');
      requestAnimationFrame(update);
    } else {
      counter.innerText = target + (counter.innerText.includes('+') ? '+' : '');
    }
  };

  update();
});



const carousel = document.getElementById('testimonialCarousel');

carousel.addEventListener('slide.bs.carousel', () => {
  document.querySelectorAll('.testimonial-card').forEach(card=>{
    card.style.opacity=0;
    card.style.transform='translateY(40px) scale(.95)';
  });
});


const footerCols = document.querySelectorAll('.footer-col');

footerCols.forEach(col=>{
  col.style.opacity=0;
  col.style.transform="translateY(40px)";
});

const footerObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity=1;
      entry.target.style.transform="translateY(0)";
      entry.target.style.transition="1s";
    }
  });
});

footerCols.forEach(col=>footerObserver.observe(col));


// Pause scroll when mouse enters the section
const logoStrip = document.querySelector('.company');

logoStrip.addEventListener('mouseenter', () => {
  logoStrip.style.animationPlayState = 'paused';
});

logoStrip.addEventListener('mouseleave', () => {
  logoStrip.style.animationPlayState = 'running';
});


// Subtle floating glow effect on hover
document.querySelectorAll('.com').forEach(logo => {
  logo.addEventListener('mouseenter', () => {
    logo.style.boxShadow = '0 0 25px rgba(59,130,246,0.6)';
    logo.style.borderRadius = '12px';
    logo.style.transition = '0.3s';
  });

  logo.addEventListener('mouseleave', () => {
    logo.style.boxShadow = 'none';
  });
});


const reveal = document.querySelectorAll('.ignite-image, .ignite-content, .stat');

const obs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.style.opacity=1;
      e.target.style.transform='translateY(0)';
    }
  });
},{threshold:0.2});

reveal.forEach(el=>{
  el.style.opacity=0;
  el.style.transform='translateY(40px)';
  el.style.transition='1s';
  obs.observe(el);
});


document.querySelector('.play-btn').onclick = ()=>{
  alert("Here you can open Oppty introduction video");
};


function playVideo(){
  const video = document.getElementById("opptyVideo");
  const img = document.querySelector(".card-video img");
  const btn = document.querySelector(".play-btn");

  img.style.display = "none";
  btn.style.display = "none";
  video.style.display = "block";

  video.play();
}


const featureCards = document.querySelectorAll('.feature-card');

const featureObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.transform = "translateY(0)";
      entry.target.style.opacity = 1;
    }
  });
},{ threshold:.2 });

featureCards.forEach(card=>{
  card.style.transform = "translateY(40px)";
  card.style.opacity = 0;
  card.style.transition = "0.8s";
  featureObserver.observe(card);
});



const connectSection = document.querySelector('.oppty-connect');
const videoCard = document.querySelector('.video-card');
const formCard = document.querySelector('.connect-form');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      videoCard.classList.add('show-video');
      formCard.classList.add('show-form');
    }
  });
},{ threshold:0.3 });

observer.observe(connectSection);






const aboutItems = document.querySelectorAll('.img, .about-content');

const aboutObserver = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.style.opacity = 1;
      entry.target.style.transform = "translateY(0)";
    }
  });
},{ threshold:0.2 });

aboutItems.forEach(item=>{
  item.style.opacity = 0;
  item.style.transform = "translateY(40px)";
  item.style.transition = "1s";
  aboutObserver.observe(item);
});


