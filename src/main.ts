import "./style.css";

let playerXOrO = 0;

let player = "";

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
    player = "X";
    playerXOrO += 1;
    winCheck();
  } else {
    player = "O";
    playerXOrO += 1;
    winCheck();
  }
}

function RespondMouseClickFieldOne() {
  (<HTMLDivElement>document.getElementById("click1")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldTwo() {
  (<HTMLDivElement>document.getElementById("click2")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldThree() {
  (<HTMLDivElement>document.getElementById("click3")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldFour() {
  (<HTMLDivElement>document.getElementById("click4")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldFive() {
  (<HTMLDivElement>document.getElementById("click5")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldSix() {
  (<HTMLDivElement>document.getElementById("click6")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldSeven() {
  (<HTMLDivElement>document.getElementById("click7")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldEight() {
  (<HTMLDivElement>document.getElementById("click8")).innerHTML = player;
  playerChange();
}
function RespondMouseClickFieldNine() {
  (<HTMLDivElement>document.getElementById("click9")).innerHTML = player;
  playerChange();
}

function winCheck() {
  // Reihe horizontal 1
  if (arr[1] === "O" && arr[2] === "O" && arr[3] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[1] === "X" && arr[2] === "X" && arr[3] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Reihe horizontal 2
  if (arr[4] === "O" && arr[5] === "O" && arr[6] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[4] === "X" && arr[5] === "X" && arr[6] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Reihe horizontal 3
  if (arr[7] === "O" && arr[8] === "O" && arr[9] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[7] === "X" && arr[8] === "X" && arr[9] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Diagonal 1

  if (arr[1] === "O" && arr[5] === "O" && arr[9] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[1] === "X" && arr[5] === "X" && arr[9] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Diagonal 2

  if (arr[7] === "O" && arr[5] === "O" && arr[3] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[7] === "X" && arr[5] === "X" && arr[3] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Reihe vertikal 1
  if (arr[1] === "O" && arr[4] === "O" && arr[7] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[1] === "X" && arr[4] === "X" && arr[7] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Reihe vertikal 2
  if (arr[2] === "O" && arr[5] === "O" && arr[8] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[2] === "X" && arr[5] === "X" && arr[8] === "X") {
    alert("Congratulations Player 1, you won!!");
  }

  // Reihe vertikal 3
  if (arr[3] === "O" && arr[6] === "O" && arr[9] === "O") {
    alert("Congratulations Player 2, you won!!");
  }

  if (arr[3] === "X" && arr[6] === "X" && arr[9] === "X") {
    alert("Congratulations Player 1, you won!!");
  }
}
