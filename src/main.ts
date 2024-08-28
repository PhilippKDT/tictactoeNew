import "./style.css";

let playerXOrO = 0;

let player = "";

let won: boolean = false;

const arr: string[] = [];

const resetButton = <HTMLButtonElement>document.querySelector("#reset");

const addEL = document.querySelectorAll("section div");

for (let i = 0; i < addEL.length; i++) {
  let item = addEL[i].id;
  (<HTMLDivElement>document.getElementById(item)).addEventListener(
    "click",
    () => playerChange(item),
    { once: true }
  );
}

function playerChange(DivId: string) {
  if (won === false) {
    winCheck();
    if (playerXOrO % 2 === 0) {
      player = "X";
      (<HTMLDivElement>document.getElementById(DivId)).innerHTML = player;
      playerXOrO += 1;
      let indexArray = parseInt(DivId);
      arr[indexArray] = player;
      winCheck();
    } else {
      player = "O";
      (<HTMLDivElement>document.getElementById(DivId)).innerHTML = player;
      playerXOrO += 1;
      let indexArray = parseInt(DivId);
      arr[indexArray] = player;
      winCheck();
    }
  }
  checkIfTie();
}

function playerOneWon() {
  alert("Congratulations Player 1, you won!!");
}

function playerTwoWon() {
  alert("Congratulations Player 2, you won!!");
}

function tie() {
  alert("Its a Tie!!");
}

function showButton() {
  resetButton.classList.add("show");
}

function winCheck() {
  // Reihe horizontal 1
  if (arr[0] === player && arr[1] === player && arr[2] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }

  // Reihe horizontal 2
  else if (arr[3] === player && arr[4] === player && arr[5] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }

  // Reihe horizontal 3
  else if (arr[6] === player && arr[7] === player && arr[8] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }
  // Diagonal 1
  else if (arr[0] === player && arr[4] === player && arr[8] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }
  // Diagonal 2
  else if (arr[2] === player && arr[4] === player && arr[6] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }

  // Reihe vertikal 1
  else if (arr[0] === player && arr[3] === player && arr[6] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }
  // Reihe vertikal 2
  else if (arr[1] === player && arr[4] === player && arr[7] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }

  // Reihe vertikal 3
  else if (arr[2] === player && arr[5] === player && arr[8] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  }
}

function checkIfTie() {
  if (
    (arr[0] === "X" || arr[0] === "O") &&
    (arr[1] === "X" || arr[1] === "O") &&
    (arr[2] === "X" || arr[2] === "O") &&
    (arr[3] === "X" || arr[3] === "O") &&
    (arr[4] === "X" || arr[4] === "O") &&
    (arr[5] === "X" || arr[5] === "O") &&
    (arr[6] === "X" || arr[6] === "O") &&
    (arr[7] === "X" || arr[7] === "O") &&
    (arr[8] === "X" || arr[8] === "O") &&
    won === false
  ) {
    setTimeout(tie, 50);
    showButton();
  }
}
