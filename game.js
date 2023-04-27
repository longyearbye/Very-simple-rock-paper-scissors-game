
//Rock, Paper, Scissors in JavaScript


let buttonRock = document.getElementById('rock'); 
let buttonPaper = document.getElementById('paper'); 
let buttonSciccors = document.getElementById('scissors'); 

let userScore = 0;
let computerScore = 0;

let userScore_span = document.getElementById('you'); 
let compScore_span = document.getElementById('comp'); 

let result = document.getElementById('choices'); 

function getCompChoice() {
    const choices = ['rock', 'paper', 'scissors']; 
    const randomNumber = Math.floor(Math.random() *3);
    return choices[randomNumber]; 

}

function win(userChoice, compChoice) {
    userScore = userScore + 1; 
    userScore_span.innerHTML = ('YOUR SCORE: ' + userScore) ; 
    compScore_span.innerHTML = ('COMPUTER SCORE: ' + computerScore);
    result.innerHTML = userChoice + ' beats ' + compChoice  + '. You Win!' ;  
}

function lose(userChoice, compChoice) {
    computerScore = computerScore + 1; 
    compScore_span.innerHTML = ('COMPUTER SCORE: ' + computerScore);
    userScore_span.innerHTML = ('YOUR SCORE: ' + userScore); 
    result.innerHTML = compChoice + ' beats ' + userChoice  + '. You Lose!' ; 
}

function draw () {
    result.innerHTML = 'Its a draw!'; 
}


function gameStart(userChoice) {
    const compChoice = getCompChoice(); 
    switch (userChoice + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            win(userChoice, compChoice);  
        break;
        
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            lose(userChoice, compChoice);
        break;

        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            draw(userChoice, compChoice); 
        break;
    }

}

function main () {

buttonRock.addEventListener('click', () => {
        gameStart('rock'); 
    }   
); 

buttonPaper.addEventListener('click', () => { 
    gameStart('paper');
    }
); 

buttonSciccors.addEventListener('click', () => {
    gameStart('scissors');
    }
)

}

main() ;