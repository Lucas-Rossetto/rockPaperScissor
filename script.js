

let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice(){
    const choice = prompt();
    return choice
}

function youWin(humanChoice,computerChoice) {

    let humanChoiceInsensitive = humanChoice.toLowerCase();
    const winMessage = "you win!" + " " +  humanChoiceInsensitive + " beats " + computerChoice;
    if((humanChoiceInsensitive === "rock" && computerChoice === "scissor") ||
    (humanChoiceInsensitive === "scissor" && computerChoice === "paper") ||
    (humanChoiceInsensitive === "paper" && computerChoice === "rock")) {
        console.log(winMessage)
        humanScore++;
    }

    return humanScore
}

function youLose(humanChoice,computerChoice) {

    let humanChoiceInsensitive = humanChoice.toLowerCase();
    const loseMessage = "you lose!" + " " + computerChoice + " beats " + humanChoiceInsensitive;
    if((humanChoiceInsensitive === "paper" && computerChoice === "scissor") ||
    (humanChoiceInsensitive === "rock" && computerChoice === "paper") ||
    (humanChoiceInsensitive === "scissor" && computerChoice === "rock")) {
        console.log(loseMessage)
        computerScore++
    }
    return computerScore
}

function youDraw(humanChoice,computerChoice) {

    let humanChoiceInsensitive = humanChoice.toLowerCase();
    if((humanChoiceInsensitive === "paper" && computerChoice === "paper") ||
    (humanChoiceInsensitive === "rock" && computerChoice === "rock") ||
    (humanChoiceInsensitive === "scissor" && computerChoice === "scissor")) {
        console.log("draw !")
    }

}


function playRound(humanChoice,computerChoice) {
    
    youWin(humanChoice,computerChoice)
    youLose(humanChoice,computerChoice)
    youDraw(humanChoice,computerChoice)

}



function playGame() {

    for(let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection,computerSelection);
        console.log(humanScore + "/" + computerScore)
    }
    if(humanScore > computerScore) {
        console.log("You win the game ! " + humanScore + "/" + computerScore)
    } else if (humanScore < computerScore) {
        console.log("You lose the game ! " + humanScore + "/" + computerScore)
    } else {
        console.log("it's a tie !")
    }
}

playGame();