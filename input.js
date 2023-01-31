let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

let up = 4;

// window.addEventListener("swiped", function (m) {
//   switch (m.detail.dir) {
//     case "up":
//       if (lastInputDirection.y !== 0) break;
//       inputDirection = { x: 0, y: -1 };
//       break;
//     case "down":
//       if (lastInputDirection.y !== 0) break;
//       inputDirection = { x: 0, y: 1 };
//       break;
//     case "left":
//       if (lastInputDirection.x !== 0) break;
//       inputDirection = { x: -1, y: 0 };
//       break;
//     case "right":
//       if (lastInputDirection.x !== 0) break;
//       inputDirection = { x: 1, y: 0 };
//       break;
//   }
//   console.log(m.detail.dir);
// });

window.addEventListener("touchstart", function () {
  if (up === 1) up = 2;
  else if (up === 2) up = 3;
  else if (up === 3) up = 4;
  else if (up === 4) up = 1;

  switch (up) {
    case 1:
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: -1 };
      break;
    case 3:
      if (lastInputDirection.y !== 0) break;
      inputDirection = { x: 0, y: 1 };
      break;
    case 4:
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: -1, y: 0 };
      break;
    case 2:
      if (lastInputDirection.x !== 0) break;
      inputDirection = { x: 1, y: 0 };
      break;
  }
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
