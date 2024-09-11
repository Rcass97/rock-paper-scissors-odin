const choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice() {
    var computerChoice = (choiceArray[(Math.floor(Math.random() * choiceArray.length))]);
    return computerChoice;
}

function getHumanChoice() {

    const humanChoice = prompt("Please choose Rock, Papaer, or Scissors:").toLowerCase()

    if (choiceArray.includes(humanChoice)) {
        alert("You have selected: " + humanChoice)
    } else {
        alert("You have not entered a valid choice. Please try again.")
        getHumanChoice();
    }

    return humanChoice;
}

var humanSelection = getHumanChoice();
var computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice){
    console.log(humanChoice);
    console.log(computerChoice);

    if(humanChoice == "rock" && computerChoice == "rock"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have tied!");
    }else if(humanChoice == "rock" && computerChoice == "paper"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have lost!");
    }else if(humanChoice == "rock" && computerChoice == "scissors"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have won!");
    }else if(humanChoice == "paper" && computerChoice == "paper"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have tied!");
    }else if(humanChoice == "paper" && computerChoice == "scissors"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have lost!");
    }else if(humanChoice == "paper" && computerChoice == "rock"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have won!");
    }else if(humanChoice == "scissors" && computerChoice == "scissors"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have tied!");
    }else if(humanChoice == "scissors" && computerChoice == "rock"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have lost!");
    }else if(humanChoice == "scissors" && computerChoice == "paper"){
        alert("You chose: " + humanChoice + "\n" + "The computer chose: " + computerChoice + "\n" + "You have won!");
    }else{
        alert("Not working. ERROR.")
    }
}

playRound(humanSelection, computerSelection);

var humanScore = 0;
var computerScore = 0;