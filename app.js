let playerChoice = "";
let otherChoice = "";
let playerWinner = "";
let wins = 0;
let ties = 0;
let losses = 0;
let winningId = document.querySelector("#winning")
let losingId = document.querySelector("#losing")
let tyingId = document.querySelector("#tying")
let humanId = document.querySelector("#humanChoice")
let nonHumanId = document.querySelector("#nonHumanChoice")
let vsId = document.querySelector("#vs")

function randomOpponent() {
  let oppChoice = Math.floor(Math.random() * 3) + 1;
  if (oppChoice == 1) {
    otherChoice = "Rock"
  } else if (oppChoice == 2) {
    otherChoice = "Paper"
  } else {
    otherChoice = "Scissors"
  }
}

function playGame() {
  randomOpponent();
  determineWinner();
  checkWin();
  drawGameBoard();
}

function determineWinner() {
  if (playerChoice == otherChoice) {
    playerWinner = "Tie"
  } else if (playerChoice == "Rock" && otherChoice == "Scissors") {
    playerWinner = "Winner"
  } else if (playerChoice == "Paper" && otherChoice == "Rock") {
    playerWinner = "Winner"
  } else if (playerChoice == "Scissors" && otherChoice == "Paper") {
    playerWinner = "Winner"
  } else playerWinner = "Loser"
}

function pick(choice) {
  playerChoice = choice;
  playGame();
}

function checkWin() {
  if (playerWinner == "Winner") {
    wins++
  } else if (playerWinner == "Loser") {
    losses++
  } else ties++
}

function drawGameBoard() {
  // @ts-ignore
  winningId.textContent = wins;
  // @ts-ignore
  tyingId.textContent = ties;
  // @ts-ignore
  losingId.textContent = losses;
  getPictures()
}

function getPictures() {
  if (otherChoice == "Rock") {
    nonHumanId.innerHTML = "<img src='https://i.redd.it/2b21mij88u331.jpg'>"
  } else if (otherChoice == "Paper") {
    nonHumanId.innerHTML = "<img src='https://cdn.pixabay.com/photo/2017/07/13/16/16/paper-2500942_960_720.jpg'>"
  } else if (otherChoice == "Scissors") {
    nonHumanId.innerHTML = "<img src='https://images.schoolspecialty.com/images/084844_ecommfullsize.jpg'>"
  }
  if (playerChoice == "Rock") {
    humanId.innerHTML = "<img src='https://i.redd.it/2b21mij88u331.jpg'>"
  } else if (playerChoice == "Paper") {
    humanId.innerHTML = "<img src='https://cdn.pixabay.com/photo/2017/07/13/16/16/paper-2500942_960_720.jpg'>"
  } else if (playerChoice == "Scissors") {
    humanId.innerHTML = "<img src='https://images.schoolspecialty.com/images/084844_ecommfullsize.jpg'>"
  }
  vsId.innerHTML = "VS"
}

function clearRecords() {
  // @ts-ignore
  wins = "";
  // @ts-ignore
  losses = "";
  // @ts-ignore
  ties = "";
  drawGameBoard();
  humanId.innerHTML = ""
  nonHumanId.innerHTML = ""
  vsId.innerHTML = ""
}