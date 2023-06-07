// Variables
let hoursEl = document.querySelector('.hours');
let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');
let hours, minutes, seconds = 0;
let isPaused = true;
let interval;

// Buttons
let buttonStart = document.querySelector('.start');
let buttonPause = document.querySelector('.pause');
let buttonReset = document.querySelector('.reset');

buttonPause.style.display = 'none';
buttonStart.addEventListener('click', startTimer);
buttonPause.addEventListener('click', pauseTimer);
buttonReset.addEventListener('click', resetTimer);

// Functions
function formatNumber(number) {
        if (number < 10) {
            return `0${number}`;
        } else {
            return `${number}`;
        }
}

// Start Timer
function startTimer() {
    isPaused = false;
    buttonStart.style.display = 'none';
    buttonPause.style.display = 'inline-flex';
    interval = setInterval(() => {
        if (!isPaused) {
           seconds++;
           secondsEl.textContent = formatNumber(seconds);

           if (seconds === 60) {
            seconds = 0;
            minutes++;
            minutesEl.textContent = formatNumber(minutes);
           }

           if (minutes === 60) {
            minutes = 0;
            minutesEl.textContent = `0${minutes}`;
            hours++;
            hoursEl.textContent = formatNumber(hours);
           }
        }
    }, 1000)
}

// Pause Timer
function pauseTimer() {
    clearInterval(interval);
    isPaused = true;
    buttonPause.style.display = 'none';
    buttonStart.style.display = 'inline-flex';
}

// Reset Timer
function resetTimer() {
    clearInterval(interval);
    isPaused = true;
    buttonPause.style.display = 'none';
    buttonStart.style.display = 'inline-flex';
    seconds = 0;
    secondsEl.textContent = formatNumber(seconds);
    minutes = 0;
    minutesEl.textContent = formatNumber(minutes);
    hours = 0;
    hoursEl.textContent = formatNumber(hours);
}
