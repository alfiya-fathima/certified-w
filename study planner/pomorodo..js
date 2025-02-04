// DOM Elements
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');
const sessionType = document.getElementById('sessionType');

// Timer Variables
let workTime = 25 * 60; // 25 minutes in seconds
let breakTime = 5 * 60; // 5 minutes in seconds
let timeLeft = workTime;
let timerInterval;
let isWorkSession = true;
let isPaused = true;

// Update the timer display
function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')};
}

// Start the timer
function startTimer() {
  if (isPaused) {
    isPaused = false;
    timerInterval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft--;
        updateTimer();
      } else {
        clearInterval(timerInterval);
        switchSession();
      }
    }, 1000);
  }
}

// Pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
  isPaused = true;
}

// Reset the timer
function resetTimer() {
  clearInterval(timerInterval);
  isPaused = true;
  isWorkSession = true;
  timeLeft = workTime;
  sessionType.textContent = 'Work Session';
  updateTimer();
}

// Switch between work and break sessions
function switchSession() {
  if (isWorkSession) {
    isWorkSession = false;
    timeLeft = breakTime;
    sessionType.textContent = 'Break Session';
  } else {
    isWorkSession = true;
    timeLeft = workTime;
    sessionType.textContent = 'Work Session';
  }
  startTimer();
}

// Event Listeners
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);

// Initialize timer display
updateTimer();