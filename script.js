let choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice(){
    (choiceArray[(Math.floor(Math.random() * choiceArray.length))]);
}

function getHumanChoice(){
    var userChoice = prompt("Please choose Rock, Paper, or Scissors:");

    if (choiceArray.includes(userChoice.toLowerCase())){
        alert("You have selected: " + userChoice)
    }else{
        alert("You have not entered a valid choice")
        getHumanChoice();
    }
}

var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){
    
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
