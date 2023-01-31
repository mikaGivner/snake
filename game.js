import {
  update as updateSnake,
  draw as drawSnake,
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
} from "./snake.js"; //מקשר את הדף גבה השני

import { update as updateFood, draw as drawFood } from "./food.js";
import { outSideGrid } from "./grid.js";
let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.querySelector("#game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("you lost, press ok to restart")) {
      window.location = "/";
    }
    return;
  }

  window.requestAnimationFrame(main); //גורם לפונקציה לחזור על עצמה שוב ושוב
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return;

  lastRenderTime = currentTime;

  update(); //מעדכנת את כל הנתונים בסוף המשחק
  draw(); //מציירת את הריבועים על המסך
}

window.requestAnimationFrame(main);

function update() {
  updateSnake(gameBoard);
  updateFood();
  checkDeath();
}
function draw() {
  gameBoard.innerHTML = "";
  drawSnake(gameBoard);
  drawFood(gameBoard);
}

function checkDeath() {
  gameOver = outSideGrid(getSnakeHead()) || snakeIntersection();
}
