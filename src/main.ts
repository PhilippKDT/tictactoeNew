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
}

function playerOneWon() {
  alert("Congratulations Player 1, you won!!");
}

function playerTwoWon() {
  alert("Congratulations Player 2, you won!!");
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
