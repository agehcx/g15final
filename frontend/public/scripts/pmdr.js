let timer;
let isTimerRunning = false;
let initialTimeInSeconds = 1500;

const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');
const timerDisplay = document.getElementById('timer');

function startTimer(durationInSeconds) {
    let startTime = Date.now();
    const endTime = startTime + durationInSeconds * 1000;

    updateTimerDisplay(durationInSeconds);

    timer = setInterval(function () {
        const currentTime = Date.now();
        const remainingTime = Math.max(0, endTime - currentTime);
        updateTimerDisplay(Math.floor(remainingTime / 1000));

        if (remainingTime <= 0) {
            clearInterval(timer);
            isTimerRunning = false;
            startButton.innerText = 'Start';
        }
    }, 1000);
}

function updateTimerDisplay(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    timerDisplay.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function resetTimer() {
    clearInterval(timer);
    isTimerRunning = false;
    startButton.innerText = 'Start';
    updateTimerDisplay(initialTimeInSeconds);
}

startButton.addEventListener('click', function () {
    if (isTimerRunning) {
        clearInterval(timer);
        isTimerRunning = false;
        startButton.innerText = 'Start';
    } else {
        startTimer(1500); // 25 minutes in seconds
        isTimerRunning = true;
        startButton.innerText = 'Pause';
    }
});

resetButton.addEventListener('click', resetTimer);
