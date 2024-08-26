import "./style.css";

function RespondMouseClickFieldOne() {
  document.getElementById("click1").innerHTML = "X";
}
function RespondMouseClickFieldTwo() {
  document.getElementById("click2").innerHTML = "X";
}
function RespondMouseClickFieldThree() {
  document.getElementById("click3").innerHTML = "X";
}
function RespondMouseClickFieldFour() {
  document.getElementById("click4").innerHTML = "X";
}
function RespondMouseClickFieldFive() {
  document.getElementById("click5").innerHTML = "X";
}
function RespondMouseClickFieldSix() {
  document.getElementById("click6").innerHTML = "X";
}
function RespondMouseClickFieldSeven() {
  document.getElementById("click7").innerHTML = "X";
}
function RespondMouseClickFieldEight() {
  document.getElementById("click8").innerHTML = "X";
}
function RespondMouseClickFieldNine() {
  document.getElementById("click9").innerHTML = "X";
}

const fieldOne = document.getElementById("display");
fieldOne?.addEventListener("click", RespondMouseClickFieldOne, true);

const fieldTwo = document.getElementById("display");
fieldTwo?.addEventListener("click", RespondMouseClickFieldTwo, true);

const fieldThree = document.getElementById("display");
fieldThree?.addEventListener("click", RespondMouseClickFieldThree, true);

const fieldFour = document.getElementById("display");
fieldFour?.addEventListener("click", RespondMouseClickFieldFour, true);

const fieldFive = document.getElementById("display");
fieldFive?.addEventListener("click", RespondMouseClickFieldFive, true);

const fieldSix = document.getElementById("display");
fieldSix?.addEventListener("click", RespondMouseClickFieldSix, true);

const fieldSeven = document.getElementById("display");
fieldSeven?.addEventListener("click", RespondMouseClickFieldSeven, true);

const fieldEight = document.getElementById("display");
fieldEight?.addEventListener("click", RespondMouseClickFieldEight, true);

const fieldNine = document.getElementById("display");
fieldNine?.addEventListener("click", RespondMouseClickFieldNine, true);
