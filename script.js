

let humanScore = 0;
let computerScore = 0;
let humanChoiceValue = "";

const buttonRock = document.getElementById('rock');
const buttonScissor = document.getElementById('scissor');
const buttonPaper = document.getElementById('paper');
const result = document.getElementById('result')

function OnButtonPaper() {
    humanChoiceValue = buttonPaper.value
    const computerSelection = getComputerChoice();
    playRound(humanChoiceValue,computerSelection)
    result.textContent= "Result --- human : " + humanScore + "- Computer : " + computerScore
    winner();
    loser();
}

function OnButtonScissor() {
    humanChoiceValue = buttonScissor.value
    const computerSelection = getComputerChoice();
    playRound(humanChoiceValue,computerSelection)
    result.textContent= "Result --- human : " + humanScore + "- Computer : " + computerScore
    winner();
    loser();
}

function OnButtonRock() {
    humanChoiceValue = buttonRock.value
    const computerSelection = getComputerChoice();
    playRound(humanChoiceValue,computerSelection)
    result.textContent= "Result --- human : " + humanScore + "- Computer : " + computerScore
    winner();
    loser();
}

function winner() {
    if(humanScore === 5 && computerScore < 5) {
        result.textContent= "Congrats ! you win" + humanScore + " / " + computerScore
        buttonPaper.disabled = true;
        buttonScissor.disabled = true;
        buttonRock.disabled = true;
    }
} 

function loser () {
    if(computerScore === 5 && humanScore < 5) {
        result.textContent= "you lose ! " + humanScore + " / " + computerScore
        buttonPaper.disabled = true;
        buttonScissor.disabled = true;
        buttonRock.disabled = true;
    }
}

function getComputerChoice() {
    const rdm = Math.random();
    let string = "";
    if(rdm >= 0 && rdm < 0.33){
        string = "rock"
    }
    if(rdm >= 0.33 && rdm < 0.67){
        string = "paper"
    }
    if(rdm >= 0.67 && rdm < 1){
        string = "scissor"
    }
    return string;
}


function youWin(humanChoice,computerChoice) {

    let humanChoiceInsensitive = humanChoice.toLowerCase();
    //const winMessage = "you win!" + " " +  humanChoiceInsensitive + " beats " + computerChoice;
    if((humanChoiceInsensitive === "rock" && computerChoice === "scissor") ||
    (humanChoiceInsensitive === "scissor" && computerChoice === "paper") ||
    (humanChoiceInsensitive === "paper" && computerChoice === "rock")) {
        humanScore++;
    }

    return humanScore
}

function youLose(humanChoice,computerChoice) {

    let humanChoiceInsensitive = humanChoice.toLowerCase();
    //const loseMessage = "you lose!" + " " + computerChoice + " beats " + humanChoiceInsensitive;
    if((humanChoiceInsensitive === "paper" && computerChoice === "scissor") ||
    (humanChoiceInsensitive === "rock" && computerChoice === "paper") ||
    (humanChoiceInsensitive === "scissor" && computerChoice === "rock")) {
        computerScore++
    }
    return computerScore
}

function youDraw(humanChoice,computerChoice) {

    let humanChoiceInsensitive = humanChoice.toLowerCase();
    if((humanChoiceInsensitive === "paper" && computerChoice === "paper") ||
    (humanChoiceInsensitive === "rock" && computerChoice === "rock") ||
    (humanChoiceInsensitive === "scissor" && computerChoice === "scissor")) {
        // not usable
    }

}


function playRound(humanChoice,computerChoice) {
    youWin(humanChoice,computerChoice)
    youLose(humanChoice,computerChoice)
    youDraw(humanChoice,computerChoice)
}


