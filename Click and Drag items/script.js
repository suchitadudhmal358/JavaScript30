const slider = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  //   console.log(e);
  startX = e.pageX - slider.offsetLeft;
  //   console.log(startX);
  scrollLeft = slider.scrollLeft;
  //   console.log(scrollLeft);
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  // console.log(isDown);
  //   console.log(e);
  const x = e.pageX - slider.offsetLeft;
  //   console.log(x, startX);
  //   const walk = x - startX;
  const walk = (x - startX) * 3; // fast scroll

  //   console.log(walk);
  slider.scrollLeft = scrollLeft - walk;
  console.log(slider.scrollLeft);
});
