const paragraphs = [
    "Typing is an important skill that improves productivity and communication.",
    "Practice makes a person perfect so keep typing every day.",
    "Web development includes HTML CSS and JavaScript technologies."
];

let timeLeft;
let timer;
let started = false;

const paragraph = document.getElementById("paragraph");
const input = document.getElementById("input");
const timeDisplay = document.getElementById("time");
const result = document.getElementById("result");

function startTest() {
    const selectedTime = document.getElementById("timeSelect").value;
    timeLeft = selectedTime;

    paragraph.innerText = paragraphs[Math.floor(Math.random() * paragraphs.length)];
    input.value = "";
    input.disabled = false;
    input.focus();
    result.innerHTML = "";
    timeDisplay.innerText = timeLeft;

    clearInterval(timer);
    timer = setInterval(updateTime, 1000);
    started = true;
}

function updateTime() {
    if (timeLeft > 0) {
        timeLeft--;
        timeDisplay.innerText = timeLeft;
    } else {
        endTest();
    }
}

function endTest() {
    clearInterval(timer);
    input.disabled = true;

    const typedText = input.value;
    const originalText = paragraph.innerText;

    let correct = 0;
    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) {
            correct++;
        }
    }

    const wordsTyped = typedText.trim().split(/\s+/).length;
    const minutes = document.getElementById("timeSelect").value / 60;
    const wpm = Math.round(wordsTyped / minutes);
    const accuracy = Math.round((correct / typedText.length) * 100) || 0;

    result.innerHTML = `
        ⌨️ WPM: ${wpm}<br>
        🎯 Accuracy: ${accuracy}%<br>
        ✅ Correct Characters: ${correct}<br>
        ❌ Wrong Characters: ${typedText.length - correct}
    `;
}