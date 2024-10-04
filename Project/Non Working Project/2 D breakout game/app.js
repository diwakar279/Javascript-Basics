const displayScore = document.querySelector("#score");
const grid = document.querySelector('.grid');

const blockWidth = 100;
const blockHeight = 20;

const boardWidth = 560;
const boardHeight = 510;

const useStart = [230, 20];
let currentPosition = useStart;

const ballStart = [100, 160];
let ballPosition = ballStart;

let xDirection = 2;
let yDirection = 1;
let timerId;
let score = 0;

let ballDiameter = 20;

//my block
class Block {
  // We are using Constructor for creating multiple blocks
  constructor(xAxis, yAxis) {
    this.bottomLeft = [xAxis, yAxis];
    this.bottomRight = [xAxis + blockWidth, yAxis];
    this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    this.topLeft = [xAxis, yAxis + blockHeight];
  }
}

//add my blocks
const blocks = [
  new Block(10, 270),
  new Block(120, 270),
  new Block(230, 270),
  new Block(340, 270),
  new Block(450, 270),
  new Block(10, 240),
  new Block(120, 240),
  new Block(230, 240),
  new Block(340, 240),
  new Block(450, 240),
  new Block(120, 210),
  new Block(230, 210),
  new Block(340, 210),
  new Block(450, 210),
];

console.log(blocks);

addBlocks();

//draw my block
function addBlocks() {
  for (let i = 0; i < blocks.length; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.right = blocks[i].bottomLeft[1] + "px";
    block.style.left = blocks[i].bottomLeft[0] + "px";
    grid.appendChild(block);
  }
}

//add user
const user = document.createElement("div");
user.classList.add("user");
grid.appendChild(user);
drawUser();

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
grid.appendChild(ball);
drawBall();

function drawUser() {
  user.style.left = currentPosition[0] + "px";
  user.style.bottom = currentPosition[1] + "px";
}

function drawBall() {
  ball.style.left = ballPosition[0] + "px";
  ball.style.bottom = ballPosition[1] + "px";
}

//move user
function moveUser(e) {
  console.log(e.key);
  switch (e.key) {
    case "ArrowLeft":
      if (currentPosition[0] > 0) {
        currentPosition[0] -= 10;
        drawUser();
      }
      break;

    case "ArrowRight":
      if (currentPosition[0] < 510) {
        currentPosition[0] += 10;
        drawUser();
        console.log(currentPosition[0]);
      }
  }
}

document.addEventListener("keydown", moveUser);

function moveBall() {
  ballPosition[0] += xDirection;
  ballPosition[1] += yDirection;
  drawBall();
  checkForCollision();
}

timerId = setInterval(moveBall, 20);

function checkForCollision() {
  //check for collision

  for (let i = 0; i < blocks.length; i++) {
    if (
      ballPosition[0] > blocks[i].bottomLeft[0] &&
      ballPosition[0] < blocks[i].bottomRight &&
      ballPosition[1] + ballDiameter > blocks[i].bottomLeft[1] &&
      ballPosition[1] < blocks[i].topLeft[1]
    ) {
      const allBlocks = document.querySelector('block');
      allBlocks[i].classList.remove('block');
      blocks.splice(i, 1);
      changeDirection();

      //change score
      score++;
      scoreDisplay.innerHTML = score;

      if (blocks.length == 0) {
        scoreDisplay.innerHTML = "you WIN !";
        clearInterval(timerId);
        document.removeEventListener("keydown", moveUser);
      }
    }
  }

  //check for wall hits
  if (
    ballPosition[0] <= 0 ||
    ballPosition[0] >= boardWidth - ballDiameter ||
    ballPosition[1] >= boardHeight - ballDiameter
  ) {
    changeDirection();
  }

  //check for user collision
  if (
    ballPosition[0] > currentPosition[0] &&
    ballPosition[0] < currentPosition[0] + blockWidth &&
    ballPosition[1] > currentPosition[1] &&
    ballPosition[1] < currentPosition[1] + blockHeight
  ) {
    //changing the direction of ball after hitting the user block
    changeDirection();
  }

  if (ballPosition[1] <= 0) {
    clearInterval(timerId);
    scoreDisplay.innerHTML = "Game Over ! You lose the Game";
    document.removeEventListener("keydown", moveUser);
  }
}

function changeDirection() {
  if ((xDirection === 2) & (yDirection === 2)) {
    yDirection = -2;
    return;
  }

  if ((xDirection === 2) & (yDirection === -2)) {
    xDirection = -2;
    return;
  }

  if ((xDirection === -2) & (yDirection === -2)) {
    yDirection = 2;
    return;
  }

  if ((xDirection === -2) & (yDirection === 2)) {
    xDirection = 2;
    return;
  }
}
