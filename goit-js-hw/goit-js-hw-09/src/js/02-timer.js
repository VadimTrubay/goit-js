import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const DELAY = 1000;
const calendar = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const pauseBtn = document.querySelector('[data-pause]');
const daysBtn = document.querySelector('[data-days]');
const hoursBtn = document.querySelector('[data-hours]');
const minutesBtn = document.querySelector('[data-minutes]');
const secondsBtn = document.querySelector('[data-seconds]');
let resumeBtn;
let interval;
let paused = false;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const currentDate = new Date();
    let selectedTime = selectedDates[0];
    let diffTime = selectedTime - currentDate.getTime();

    startBtn.disabled = selectedTime <= currentDate.getTime();

    const { days, hours, minutes, seconds } = convertMs(diffTime);
    updateDisplay(days, hours, minutes, seconds);
  }
};

const initFlatPick = flatpickr(calendar, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


const addLeadingZero = value => String(value).padStart(2, 0);

function updateDisplay(days, hours, minutes, seconds) {
  daysBtn.textContent = String(days);
  hoursBtn.textContent = addLeadingZero(hours);
  minutesBtn.textContent = addLeadingZero(minutes);
  secondsBtn.textContent = addLeadingZero(seconds);
}

function startTimer(selectedTime) {
  clearInterval(interval);

  interval = setInterval(() => {
    if (!paused) {
      const currentDate = new Date();
      const diffTime = selectedTime - currentDate.getTime();
      const { days, hours, minutes, seconds } = convertMs(diffTime);
      updateDisplay(days, hours, minutes, seconds);

      if (selectedTime <= currentDate.getTime()) {
        clearInterval(interval);
        resetDisplay();
      }
    }
  }, DELAY);
}

function stopTimer() {
  clearInterval(interval);
  resetDisplay();
}

function pauseTimer() {
  paused = true;
}

function resumeTimer() {
  paused = false;
}

function resetDisplay() {
  daysBtn.textContent = '00';
  hoursBtn.textContent = '00';
  minutesBtn.textContent = '00';
  secondsBtn.textContent = '00';
}

startBtn.addEventListener('click', () => {
  const selectedTime = initFlatPick.selectedDates[0].getTime();
  if (!isNaN(selectedTime)) {
    startTimer(selectedTime);
  }
});

stopBtn.addEventListener('click', stopTimer);
pauseBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
