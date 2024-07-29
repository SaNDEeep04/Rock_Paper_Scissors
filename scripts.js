function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    let choice=prompt("Enter a choice:")
    choice=choice.toLowerCase()
    return choice
}
//0-Rock,1-Paper,2-Scissors
let humanScore=0;
let computerScore=0;
function playRound(humanChoice,computerChoice){
    if(humanChoice==="scissors"){
        if(computerChoice===0){
            computerScore++;
            console.log("You lose,Rock beats Scissors");
        }
        if(computerChoice===2){
            console.log("Draw")
        }
        if(computerChoice===1){
            humanScore++;
            console.log("You win,Scissor beats Paper")
        }
    
    }
    if(humanChoice==="paper"){
        if(computerChoice===2){
            computerScore++;
            console.log("You lose,Scissor beats Paper");
        }
        if(computerChoice===1){
            console.log("Draw")
        }
        if(computerChoice===0){
            humanScore++;
            console.log("You win,Paper beats Rock")
        }
    
    }
    if(humanChoice==="rock"){
        if(computerChoice===1){
            computerScore++;
            console.log("You lose,Paper beats Rock");
        }
        if(computerChoice===0){
            console.log("Draw")
        }
        if(computerChoice===2){
            humanScore++;
            console.log("You win,Rock beats Scissor")
        }
    
    }
}
let humanChoice=getHumanChoice()
let computerChoice=getComputerChoice()
function playGame(n){
    for(let i=0;i<n;i++){
        playRound(humanChoice,computerChoice);
        humanChoice=getHumanChoice();
        computerChoice=getComputerChoice();
    }
    console.log("Human Score:",humanScore);
    console.log("Computer Score:",computerScore)

}
playGame(5);

