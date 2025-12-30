
const btn = document.getElementById("backToTop");

window.onscroll = () => {
  btn.style.display = window.scrollY > 300 ? "block" : "none";
};

btn.onclick = () => window.scrollTo({ top:0, behavior:"smooth" });


const form = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function(e){
  e.preventDefault(); // page reload stop

  successMsg.style.display = "block"; // show message
  form.reset(); // inputs clear
});



