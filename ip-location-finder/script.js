const btn = document.getElementById("findBtn");
const resultBox = document.getElementById("result");

btn.addEventListener("click", () => {
  btn.innerText = "Fetching...";
  btn.disabled = true;

  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      document.getElementById("ip").innerText = data.ip;
      document.getElementById("country").innerText = data.country_name;
      document.getElementById("region").innerText = data.region;
      document.getElementById("city").innerText = data.city;
      document.getElementById("org").innerText = data.org;

      resultBox.classList.add("show");
      btn.innerText = "✔ Location Found";
    })
    .catch(() => {
      alert("Unable to fetch IP details");
      btn.innerText = "Try Again";
      btn.disabled = false;
    });
});