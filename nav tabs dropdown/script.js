const triggers = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

function handleEnter(e) {
  //   console.log("Enter");
  //   console.log(this);

  this.classList.add("trigger-enter");
  if (this.classList.contains("trigger-enter")) {
    setTimeout(() => {
      this.classList.add("trigger-enter-active");
    }, 150);
  }

  background.classList.add("open");
  const dropdown = this.querySelector(".dropdown");
  //   console.log(dropdown);
  const dropdowncoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();
  console.log(dropdowncoords, navCoords);

  const coords = {
    height: dropdowncoords.height,
    width: dropdowncoords.width,
    left: dropdowncoords.left - navCoords.left,
    top: dropdowncoords.top - navCoords.top,
  };

  background.style.setProperty("width", `${coords.width}px`);
  background.style.setProperty("height", `${coords.height}px`);
  background.style.setProperty(
    "transform",
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  //   console.log("Leave");
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

triggers.forEach((trigger) =>
  trigger.addEventListener("mouseenter", handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener("mouseleave", handleLeave)
);
