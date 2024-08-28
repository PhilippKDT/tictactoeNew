import "./style.css";

let playerXOrO = 0;

let player = "";

let won: boolean = false;

const arr: string[] = [];
//Neustart Button
const resetButton = <HTMLButtonElement>document.querySelector("#reset");

//sucht sich alle divs im Dokument und sammelt sie in einer Node-Liste
const addEL = document.querySelectorAll("section div");

//Eventlistener für jedes Div im Document, lässt sich jeweils einmal anklicken
for (let i = 0; i < addEL.length; i++) {
  let item = addEL[i].id;
  (<HTMLDivElement>document.getElementById(item)).addEventListener(
    "click",
    () => playerChange(item),
    { once: true }
  );
}
//wechselt den Spieler von O zu X und umgekehrt, solange die Variable won false ist
//schreibt X bzw O in das ausgewählte Feld
//merkt dich diesen Wert im Array um winCheck ausführen zu können
function playerChange(DivId: string) {
  if (won === false) {
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
//alert für Sieger Spieler 1
function playerOneWon() {
  alert("Congratulations Player 1, you won!!");
}
//alert für Sieger Spieler 2
function playerTwoWon() {
  alert("Congratulations Player 2, you won!!");
}
//alert für untentschieden
function tie() {
  alert("Its a Tie!!");
}
//setzt den button von unsichtbar auf sichtbar
function showButton() {
  resetButton.classList.add("show");
}
// prüft ob jemand gewonnen hat, setzt dann won auf true
function winCheck() {
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
  } else if (arr[3] === player && arr[4] === player && arr[5] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  } else if (arr[6] === player && arr[7] === player && arr[8] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  } else if (arr[0] === player && arr[4] === player && arr[8] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  } else if (arr[2] === player && arr[4] === player && arr[6] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  } else if (arr[0] === player && arr[3] === player && arr[6] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  } else if (arr[1] === player && arr[4] === player && arr[7] === player) {
    if (player === "X") {
      showButton();
      setTimeout(playerOneWon, 50);
      won = true;
    } else {
      showButton();
      setTimeout(playerTwoWon, 50);
      won = true;
    }
  } else if (arr[2] === player && arr[5] === player && arr[8] === player) {
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
// wprüft ob alle Felder ausgefüllt wurden, ohne dass es einen Sieger gibt
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
