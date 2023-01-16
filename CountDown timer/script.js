let countdown;
const buttons = document.querySelectorAll("[data-time]");
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display_end-time");

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimerLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    //display it
    displayTimerLeft(secondsLeft);
  }, 1000);
}

function displayTimerLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainSeconds = seconds % 60;
  const display = `${minutes} : ${
    remainSeconds < 10 ? "0" : ""
  }${remainSeconds}`;
  timerDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  endTime.textContent = `Be Back At ${adjustedHour} : ${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}
buttons.forEach((button) => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
