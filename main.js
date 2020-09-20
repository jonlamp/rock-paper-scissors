function computerPlay(){
    const choices = ['Rock','Paper','Scissors'];
    let choice = Math.floor((Math.random() * (choices.length)) + 1);
    return choices[choice - 1];
}
function testCom(attempts) {//test randomness of computer choice
    let results = [];
    let summary = {};
    for(let i = 0; i < attempts; i ++) {
        results.push(computerPlay());
    }
    for(i = 0; i < results.length; i++) {
        if(Object.keys(summary).includes(results[i])) {
            summary[results[i]] += 1
        } else {
            summary[results[i]] = 1;
        }
    }
    console.log(summary);
}
function winner(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "You and the computer both chose " + playerSelection + "! Tie game!";
    };
    if((playerSelection ===  "Rock" && computerSelection == "Scissors") || (playerSelection ===  "Paper" && computerSelection == "Rock") || (playerSelection ===  "Scissors" && computerSelection == "Paper")) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    };
    if((playerSelection ===  "Rock" && computerSelection == "Paper") || (playerSelection ===  "Paper" && computerSelection == "Scissors") || (playerSelection ===  "Scissors" && computerSelection == "Rock")) {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}
function game() {
    const options = ["rock","paper","scissors"];
    let playerSelection = prompt("Will it be rock, paper, or scissors?");
    while(!(options.includes(playerSelection.toLowerCase()))) {
        playerSelection = prompt("Answer not valid. \n\n Will it be rock, paper, or scissors?");
    }
    let arr = playerSelection.toLowerCase().split("");
    arr[0] = arr[0].toUpperCase();
    playerSelection = arr.join("");
    console.log(winner(playerSelection, computerPlay()));
}