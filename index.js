

let userSelection = 'rock'; 
let computerSelection = Math.random();                                                          

//conditional logic goes here
if (computerSelection < 0.20) {
	computerSelection = "rock";
} else if(computerSelection <= 0.40) {
	computerSelection = "paper";
} else if(computerSelection <= 0.60) {
	computerSelection = "scissors";
} else if(computerSelection <= 0.80) {
	computerSelection = "lizard";
} else {
	computerSelection = "spock";
}

//compare the userSeletion and the computerSelection to determine the winner
let compare = function(selection1,selection2){
    if(selection1===selection2){
        return "Tie!";
    }
    else if(selection1==="rock"){
        if(selection2==="scissors") {
            return "Rock Crushes Scissors in to dust"
        } else if (selection2 === "lizard") {
            return "Rock pulverized lizard!";
    } 
    else if (selection2==="lizard") {
        if(selection2==="paper"){
            return "paper wins";
        }else if (selection2 === "lizard") {
            return "Rock pulverized lizard!";
        } else if (selection2 === "paper") {
            return "Paper covers rock!";
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
    else if(selection1==="lizard"){
        if(selection2==="paper"){
            return "scissors win"
        }
        else if(selection2==="rock"){
            return "rock wins";
        }
    }   
}
console.log(compare(userSelection,computerSelection));

function handleUserChoice(choice) {
    console.log('User selected:', choice);
    userSelection = choice; // Update the userSelection variable with the user's choice
    const resultText = compare(userSelection, computerSelection);
    document.getElementById('result').innerText = resultText; // Update the text of the <p> tag with the result
}

// const rockButton = document.getElementById('rockButton');
// const paperButton = document.getElementById('paperButton');
// const scissorsButton = document.getElementById('scissorsButton');
// const lizardButton = document.getElementById('lizardButton');
// const spockButton = document.getElementById('spockButton');

rockButton.addEventListener('click', function() {
    handleUserChoice('rock');
});

paperButton.addEventListener('click', function() {
    handleUserChoice('paper');
});

scissorsButton.addEventListener('click', function() {
    handleUserChoice('scissors');
});

console.log(compare(userSelection,computerSelection));