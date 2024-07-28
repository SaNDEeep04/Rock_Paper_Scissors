function getComputerChoice(){
    return Math.floor(Math.random()*3)
}
function getHumanChoice(){
    let choice=prompt("Enter a choice:")
    choice=choice.toLowerCase()
    return choice
}
console.log(getHumanChoice())
