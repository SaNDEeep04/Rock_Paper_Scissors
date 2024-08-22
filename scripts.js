function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    let choice=prompt("Enter a choice:")
    choice=choice.toLowerCase()
    return choice
}
const buttons=document.querySelector("#buttons");
const rock=document.createElement("button");
rock.textContent="Rock";
const paper=document.createElement("button");
paper.textContent="Paper";
const scissor=document.createElement("button");
scissor.textContent="Scissor";
const cScore=document.createElement("h3");
const hScore=document.createElement("h3");
buttons.appendChild(rock);
buttons.appendChild(paper);
buttons.appendChild(scissor);
document.body.appendChild(cScore);
document.body.appendChild(hScore);
let computerScore=0;
let humanScore=0;
const displayWinner=() =>{
const winner=document.createElement("h3");

if(computerScore==5){
    winner.textContent=`Winner is Computer`

}
if(humanScore==5){
    winner.textContent=`Winner is Human`
}
document.body.appendChild(winner);
}

rock.addEventListener("click",()=>{
    let computerChoice=getComputerChoice();

    if(computerChoice==1){
        computerScore+=1
    }
    else{
        humanScore+=1
    }
    cScore.textContent=`computer Score = ${computerScore}`;
    hScore.textContent=`human Score= ${humanScore}`; 
  displayWinner();

})
paper.addEventListener("click",()=>{
    let computerChoice=getComputerChoice();

    if(computerChoice==2){
        computerScore+=1
    }
    else{
        humanScore+=1
    }
    cScore.textContent=`computer Score = ${computerScore}`;
    hScore.textContent=`human Score= ${humanScore}`;  
    
    displayWinner();
})
scissor.addEventListener("click",()=>{
    let computerChoice=getComputerChoice();

    if(computerChoice==0){
        computerScore+=1
    }
    else{
        humanScore+=1
    }
    cScore.textContent=`computer Score = ${computerScore}`;
    hScore.textContent=`human Score= ${humanScore}`;  
    
    displayWinner();
})
//0-Rock,1-Paper,2-Scissors
// let humanScore=0;
// let computerScore=0;
// function playRound(humanChoice,computerChoice){
//     if(humanChoice==="scissors"){
//         if(computerChoice===0){
//             computerScore++;
//             console.log("You lose,Rock beats Scissors");
//         }
//         if(computerChoice===2){
//             console.log("Draw")
//         }
//         if(computerChoice===1){
//             humanScore++;
//             console.log("You win,Scissor beats Paper")
//         }
    
//     }
//     if(humanChoice==="paper"){
//         if(computerChoice===2){
//             computerScore++;
//             console.log("You lose,Scissor beats Paper");
//         }
//         if(computerChoice===1){
//             console.log("Draw")
//         }
//         if(computerChoice===0){
//             humanScore++;
//             console.log("You win,Paper beats Rock")
//         }
    
//     }
//     if(humanChoice==="rock"){
//         if(computerChoice===1){
//             computerScore++;
//             console.log("You lose,Paper beats Rock");
//         }
//         if(computerChoice===0){
//             console.log("Draw")
//         }
//         if(computerChoice===2){
//             humanScore++;
//             console.log("You win,Rock beats Scissor")
//         }
    
//     }
// }
// let humanChoice
// let computerChoice
// function playGame(n){
//     for(let i=0;i<n;i++){
//         humanChoice=getHumanChoice();
//         computerChoice=getComputerChoice();
//         playRound(humanChoice,computerChoice);
        
//     }
//     console.log("Human Score:",humanScore);
//     console.log("Computer Score:",computerScore)

// }


