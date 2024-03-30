

let userSelection = prompt("rock, paper or scissors?"); 
let computerSelection = Math.random();                                                          

//conditional logic goes here
if (computerSelection < 0.34) {
	computerSelection = "rock";
} else if(computerSelection <= 0.67) {
	computerSelection = "paper";
} else {
	computerSelection = "scissors";
}

//compare the userSeletion and the computerSelection to determine the winner
let compare=function(selection1,selection2){
    if(selection1===selection2){
        return "The result is a tie!";
    }
    else if(selection1==="rock"){
        if(selection2==="scissors"){
            return "rock wins"
        }
        else if(selection2==="paper"){
            return "paper wins";
        }
    }
    else if(selection1==="paper"){
        if(selection2==="scissors"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "paper wins";
        }
    }
    else if(selection1==="scissors"){
        if(selection2==="paper"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "rock wins";
        }
    }    
}
console.log(compare(userSelection,computerSelection));