import "./style.css";

let playerXOrO = 0;

let player = "";

const resetButton = <HTMLButtonElement>document.querySelector("#reset");

const arr: string[] = [];

const addEL = document.querySelectorAll("section div");

for (let i = 0; i < addEL.length; i++) {
  let item = addEL[i].id;
  (<HTMLDivElement>document.getElementById(item)).addEventListener(
    "click",
    () => playerChange(item),
    { once: true }
  );
  (<HTMLButtonElement>document.getElementById("reset")).addEventListener(
    "click",
    () => window.location.reload()
  );
}

function playerChange(DivId: string) {
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

function playerOneWon() {
  alert("Congratulations Player 1, you won!!");
  // removeEventListener();
}

function playerTwoWon() {
  alert("Congratulations Player 2, you won!!");
  // removeEventListener();
}

function winCheck() {
  console.log(arr);
  // Reihe horizontal 1
  if (arr[0] === player && arr[1] === player && arr[2] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }

  // Reihe horizontal 2
  else if (arr[3] === player && arr[4] === player && arr[5] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }

  // Reihe horizontal 3
  else if (arr[6] === player && arr[7] === player && arr[8] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }
  // Diagonal 1
  else if (arr[0] === player && arr[4] === player && arr[8] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }
  // Diagonal 2
  else if (arr[2] === player && arr[4] === player && arr[6] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }

  // Reihe vertikal 1
  else if (arr[0] === player && arr[3] === player && arr[6] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }
  // Reihe vertikal 2
  else if (arr[1] === player && arr[4] === player && arr[7] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }

  // Reihe vertikal 3
  else if (arr[2] === player && arr[5] === player && arr[8] === player) {
    if (player === "X") {
      setTimeout(playerOneWon, 50);
    } else {
      setTimeout(playerTwoWon, 50);
      // counter = 11;
    }
    newGame();
  }
}

function newGame() {
  (<HTMLButtonElement>document.getElementById("reset")).classList.add("show");
}
// function removeEventListener() {
//   fieldOne.removeEventListener("click", RespondMouseClickFieldOne, false);
//   fieldTwo.removeEventListener("click", RespondMouseClickFieldTwo, false);
//   fieldThree.removeEventListener("click", RespondMouseClickFieldThree, false);
//   fieldFour.removeEventListener("click", RespondMouseClickFieldFour, false);
//   fieldFive.removeEventListener("click", RespondMouseClickFieldFive, false);
//   fieldSix.removeEventListener("click", RespondMouseClickFieldSix, false);
//   fieldSeven.removeEventListener("click", RespondMouseClickFieldSeven, false);
//   fieldEight.removeEventListener("click", RespondMouseClickFieldEight, false);
//   fieldNine.removeEventListener("click", RespondMouseClickFieldNine, false);
// }
