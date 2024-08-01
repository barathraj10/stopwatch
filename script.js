let timer;
let isRunning = false;
let [hours, minutes, seconds] = [0, 0, 0];
const lapContainer = document.getElementById('laps');
let lapCount = 0;

function startStop() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').textContent = 'Stop';
        isRunning = true;
    } else {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
        isRunning = false;
    }
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

function displayTime() {
    const display = document.getElementById('display');
    display.textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}

function reset() {
    clearInterval(timer);
    [hours, minutes, seconds] = [0, 0, 0];
    displayTime();
    document.getElementById('startStop').textContent = 'Start';
    isRunning = false;
    lapContainer.innerHTML = ''; 
    lapCount = 0;
}

function recordLap() {
    if (!isRunning) return; 
    
    lapCount++;
    const lapTime = document.createElement('div');
    lapTime.textContent = `Lap ${lapCount}: ${displayTimeString()}`;
    lapContainer.appendChild(lapTime);
}

function displayTimeString() {
    return 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds);
}
