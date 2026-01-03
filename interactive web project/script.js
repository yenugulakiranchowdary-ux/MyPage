// TO DO LIST
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, i) => {
    let li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = task;
    span.style.marginRight = "12px";

    let btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.className = "btn";
    btn.onclick = () => { tasks.splice(i, 1); saveTasks(); };
    li.appendChild(span);
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value);
    input.value = "";
    saveTasks();
  }
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
  renderTasks();
}

function clearTasks() {
  tasks = [];
  saveTasks();
}

renderTasks();

// TIMER
let seconds = 0;
let interval = setInterval(updateTimer, 1000);

function updateTimer() {
  seconds++;
  let h = String(Math.floor(seconds / 3600)).padStart(2, "0");
  let m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  let s = String(seconds % 60).padStart(2, "0");
  document.getElementById("timer").innerText = `Time elapsed: ${h}:${m}:${s}`;
}

function pauseTimer() {
  clearInterval(interval);
}

function resetTimer() {
  seconds = 0;
}

// CONTACT FORM
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function clearForm() {
  nameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

// VALIDATION
nameInput.addEventListener("blur", () => {
  nameError.innerText = nameInput.value ? "" : "Please enter your name.";
});

emailInput.addEventListener("blur", () => {
  emailError.innerText = emailInput.value.includes("@") ? "" : "Please enter a valid email address.";
});

passwordInput.addEventListener("blur", () => {
  passwordError.innerText = passwordInput.value.length >= 6 ? "" : "Password must be at least 6 characters long.";
});

function toggleMap(mapId) {
  const map = document.getElementById(mapId);
  map.style.display = (map.style.display === "none") ? "block" : "none";
}

