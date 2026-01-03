/* LOADER */
window.addEventListener("load",()=>{
  document.getElementById("loader").style.display="none";
});


/* SCROLL PROGRESS */
window.addEventListener("scroll",()=>{
  const scrolled=(window.scrollY/
  (document.body.scrollHeight-window.innerHeight))*100;
  document.querySelector(".progress").style.width=scrolled+"%";

  document.querySelectorAll(".reveal").forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-100){
      el.classList.add("active");
    }
  });
});

/* TYPING EFFECT */
const text="Yenugula Kiran Chowdary";
let i=0;
function typing(){
  if(i<text.length){
    document.querySelector(".typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typing,120);
  }
}
typing();

/* SCROLL BUTTON */
function goTo(id){
  document.getElementById(id).scrollIntoView({behavior:"smooth"});
}



const sendBtn = document.getElementById("sendBtn");
const msgStatus = document.getElementById("msgStatus");

sendBtn.addEventListener("click", function () {

  // Success message
  msgStatus.innerText = "Message sent successfully ✅";
  msgStatus.style.color = "#38bdf8";
  msgStatus.style.marginTop = "15px";
  msgStatus.style.fontSize = "18px";

  // Clear inputs after send
  document.querySelectorAll(".contact input, .contact textarea")
    .forEach(input => input.value = "");

});