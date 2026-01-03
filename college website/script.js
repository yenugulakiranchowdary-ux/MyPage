
const slides = document.querySelectorAll(".slides");
let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}, 4000);


const hidden = document.querySelectorAll(".hidden");

window.addEventListener("scroll", () => {
  hidden.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});

const modal = document.getElementById("bookingModal");
const closeBtn = document.querySelector(".close-btn");


document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", () => {
    modal.classList.add("active");
  });
});


closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});


const bookingForm = document.querySelector(".modal-form");
const successMsg = document.getElementById("successMsg");

bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();

  successMsg.classList.add("show");


  setTimeout(() => {
    modal.classList.remove("active");
    successMsg.classList.remove("show");
    bookingForm.reset();
  }, 2500);
});
