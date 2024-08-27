import "./style.css";

let playerXOrO = 0;

let player = "";

const resetButton = <HTMLButtonElement>document.querySelector("#reset");

const arr: string[] = [];

const fieldOne = <HTMLDivElement>document.getElementById("click1");
fieldOne.addEventListener("click", RespondMouseClickFieldOne, { once: true });

const fieldTwo = <HTMLDivElement>document.getElementById("click2");
fieldTwo.addEventListener("click", RespondMouseClickFieldTwo, { once: true });

const fieldThree = <HTMLDivElement>document.getElementById("click3");
fieldThree.addEventListener("click", RespondMouseClickFieldThree, {
  once: true,
});

const fieldFour = <HTMLDivElement>document.getElementById("click4");
fieldFour.addEventListener("click", RespondMouseClickFieldFour, {
  once: true,
});

const fieldFive = <HTMLDivElement>document.getElementById("click5");
fieldFive.addEventListener("click", RespondMouseClickFieldFive, {
  once: true,
});

const fieldSix = <HTMLDivElement>document.getElementById("click6");
fieldSix.addEventListener("click", RespondMouseClickFieldSix, { once: true });

const fieldSeven = <HTMLDivElement>document.getElementById("click7");
fieldSeven.addEventListener("click", RespondMouseClickFieldSeven, {
  once: true,
});

const fieldEight = <HTMLDivElement>document.getElementById("click8");
fieldEight.addEventListener("click", RespondMouseClickFieldEight, {
  once: true,
});

const fieldNine = <HTMLDivElement>document.getElementById("click9");
fieldNine.addEventListener("click", RespondMouseClickFieldNine, {
  once: true,
});

playerChange();

function playerChange() {
  if (playerXOrO % 2 === 0) {
    winCheck();
    player = "X";
    playerXOrO += 1;
  } else {
    winCheck();
    player = "O";
    playerXOrO += 1;
  }
}

function RespondMouseClickFieldOne() {
  (<HTMLDivElement>document.getElementById("click1")).innerHTML = player;
  arr[0] = player;
  playerChange();
}
function RespondMouseClickFieldTwo() {
  (<HTMLDivElement>document.getElementById("click2")).innerHTML = player;
  arr[1] = player;
  playerChange();
}
function RespondMouseClickFieldThree() {
  (<HTMLDivElement>document.getElementById("click3")).innerHTML = player;
  arr[2] = player;
  playerChange();
}
function RespondMouseClickFieldFour() {
  (<HTMLDivElement>document.getElementById("click4")).innerHTML = player;
  arr[3] = player;
  playerChange();
}
function RespondMouseClickFieldFive() {
  (<HTMLDivElement>document.getElementById("click5")).innerHTML = player;
  arr[4] = player;
  playerChange();
}
function RespondMouseClickFieldSix() {
  (<HTMLDivElement>document.getElementById("click6")).innerHTML = player;
  arr[5] = player;
  playerChange();
}
function RespondMouseClickFieldSeven() {
  (<HTMLDivElement>document.getElementById("click7")).innerHTML = player;
  arr[6] = player;
  playerChange();
}
function RespondMouseClickFieldEight() {
  (<HTMLDivElement>document.getElementById("click8")).innerHTML = player;
  arr[7] = player;
  playerChange();
}
function RespondMouseClickFieldNine() {
  (<HTMLDivElement>document.getElementById("click9")).innerHTML = player;
  arr[8] = player;
  playerChange();
}

function playerOneWon() {
  alert("Congratulations Player 1, you won!!");
  resetButton.classList.add("show");
}

function playerTwoWon() {
  alert("Congratulations Player 2, you won!!");
}

function winCheck() {
  console.log(arr);
  // Reihe horizontal 1
  if (arr[0] === "O" && arr[1] === "O" && arr[2] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[0] === "X" && arr[1] === "X" && arr[2] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Reihe horizontal 2
  if (arr[3] === "O" && arr[4] === "O" && arr[5] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[3] === "X" && arr[4] === "X" && arr[5] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Reihe horizontal 3
  if (arr[6] === "O" && arr[7] === "O" && arr[8] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[6] === "X" && arr[7] === "X" && arr[8] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Diagonal 1

  if (arr[0] === "O" && arr[4] === "O" && arr[8] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[0] === "X" && arr[4] === "X" && arr[8] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Diagonal 2

  if (arr[2] === "O" && arr[4] === "O" && arr[6] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[2] === "X" && arr[4] === "X" && arr[6] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Reihe vertikal 1
  if (arr[0] === "O" && arr[3] === "O" && arr[6] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[0] === "X" && arr[3] === "X" && arr[6] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Reihe vertikal 2
  if (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") {
    setTimeout(playerOneWon, 50);
  }

  // Reihe vertikal 3
  if (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") {
    setTimeout(playerTwoWon, 50);
  }

  if (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") {
    setTimeout(playerOneWon, 50);
  }
}
