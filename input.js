let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

let up = document.querySelector("#btnUp");
let down = document.querySelector("#btnDown");
let left = document.querySelector("#btnLeft");
let right = document.querySelector("#btnRight");

// window.addEventListener("click", (l) => {
//   console.log(l);
// });
window.addEventListener("touchmove", (l) => {
  console.log(l);
});

window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case "ArrowDown":
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case "ArrowLeft":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case "ArrowRight":
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
