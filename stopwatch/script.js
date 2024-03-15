let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startTimer() {
  if (!isRunning) {
    timer = setInterval(updateTimer, 1000);
    isRunning = true;
  }
}

function stopTimer() {
  clearInterval(timer);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
}

function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

function updateDisplay() {
  const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  document.getElementById('timer').innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);