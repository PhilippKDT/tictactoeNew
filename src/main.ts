import "./style.css";

let playerXorO = 0;

function playerChange() {
  for (let i = 0; i < 9; i++) {
    playerXorO += 1;
    if (playerXorO % 2) {
      console.log("Player 1");
    }
    console.log("Player2");
  }
}

function RespondMouseClickFieldOne() {
  (<HTMLDivElement>document.getElementById("click1")).innerHTML = "X";
}
function RespondMouseClickFieldTwo() {
  (<HTMLDivElement>document.getElementById("click2")).innerHTML = "X";
}
function RespondMouseClickFieldThree() {
  (<HTMLDivElement>document.getElementById("click3")).innerHTML = "X";
}
function RespondMouseClickFieldFour() {
  (<HTMLDivElement>document.getElementById("click4")).innerHTML = "X";
}
function RespondMouseClickFieldFive() {
  (<HTMLDivElement>document.getElementById("click5")).innerHTML = "X";
}
function RespondMouseClickFieldSix() {
  (<HTMLDivElement>document.getElementById("click6")).innerHTML = "X";
}
function RespondMouseClickFieldSeven() {
  (<HTMLDivElement>document.getElementById("click7")).innerHTML = "X";
}
function RespondMouseClickFieldEight() {
  (<HTMLDivElement>document.getElementById("click8")).innerHTML = "X";
}
function RespondMouseClickFieldNine() {
  (<HTMLDivElement>document.getElementById("click9")).innerHTML = "X";
}

const fieldOne = <HTMLDivElement>document.getElementById("click1");
fieldOne.addEventListener("click", RespondMouseClickFieldOne, true);

const fieldTwo = <HTMLDivElement>document.getElementById("click2");
fieldTwo.addEventListener("click", RespondMouseClickFieldTwo, true);

const fieldThree = <HTMLDivElement>document.getElementById("click3");
fieldThree.addEventListener("click", RespondMouseClickFieldThree, true);

const fieldFour = <HTMLDivElement>document.getElementById("click4");
fieldFour.addEventListener("click", RespondMouseClickFieldFour, true);

const fieldFive = <HTMLDivElement>document.getElementById("click5");
fieldFive.addEventListener("click", RespondMouseClickFieldFive, true);

const fieldSix = <HTMLDivElement>document.getElementById("click6");
fieldSix.addEventListener("click", RespondMouseClickFieldSix, true);

const fieldSeven = <HTMLDivElement>document.getElementById("click7");
fieldSeven.addEventListener("click", RespondMouseClickFieldSeven, true);

const fieldEight = <HTMLDivElement>document.getElementById("click8");
fieldEight.addEventListener("click", RespondMouseClickFieldEight, true);

const fieldNine = <HTMLDivElement>document.getElementById("click9");
fieldNine.addEventListener("click", RespondMouseClickFieldNine, true);
