const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled");
const toggle = player.querySelector(".toggle");
const ranges = player.querySelectorAll(".player_slider");
const skipBtn = player.querySelectorAll("[data-skip]");

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
  //   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
}

function updatePlayButton() {
  //   console.log(this);
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;
}

function skip() {
  //   console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  //   console.log(this.value);
  //   console.log(this.name);
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  console.log(e.offsetX);
  console.log(progress.offsetWidth);
  console.log(e.offsetX / progress.offsetWidth);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  console.log(scrubTime);
}
video.addEventListener("click", togglePlay);
video.addEventListener("play", updatePlayButton);
video.addEventListener("pause", updatePlayButton);
toggle.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", handleProgress);

skipBtn.forEach((button) => button.addEventListener("click", skip));
ranges.forEach((range) => range.addEventListener("change", handleRangeUpdate));
ranges.forEach((range) =>
  range.addEventListener("mousemove", handleRangeUpdate)
);

let mousedown = false;
progress.addEventListener("click", scrub);
progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
