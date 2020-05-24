const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const result = document.querySelector('#result');
const restart = document.querySelector('#restart');


let playerPoints = 0;
let compPoints = 0;
let gamesPlayed = 0;

function playRound(move) {
    let playerMove = move;
    let computerMove = computerPlay();

    
    if ((playerMove == "rock" && computerMove == "scissors") ||
        (playerMove == "paper" && computerMove == "rock") ||
        (playerMove == "scissors" && computerMove == "paper")) {
        result.innerHTML = ("You win that round, " + playerMove + " beats " + computerMove + "!");
        playerPoints++;
        gamesPlayed++;
    } else if (playerMove === computerMove) {
        result.innerHTML = ("You've tied that round!");
        gamesPlayed++;
    } else {
        result.innerHTML = ("You lose that round, " + computerMove + " beats " + playerMove + "!");
        compPoints++;
        gamesPlayed++;
    }
    playerScore.innerHTML = ("Your score is " + playerPoints);
    computerScore.innerHTML = ("The computer's score is " + compPoints);

    if (gamesPlayed == 5) {
        setTimeout(() => {
            result.innerHTML = (
               gamesPlayed + " games played! You've scored " + playerPoints + 
               ". The computer scored " + compPoints + "."
             );
        }, 1);   
    }

}

function computerPlay() {
    const gameMoves = ["rock", "paper", "scissors"];
    let x = Math.floor(Math.random() * 3);
    return gameMoves[x];
}

function chooseMove() {
    if (gamesPlayed == 5) {
        result.innerHTML = ("You've reached your limit of games.");
        return;
    }
    playRound(this.id);
}

restart.addEventListener('click', function() {
    playerPoints = 0;
    compPoints = 0;
    gamesPlayed = 0;
    playerScore.innerHTML = ("Your score is " + playerPoints);
    computerScore.innerHTML = ("The computer's score is " + compPoints);
    result.innerHTML = ("No rounds played yet");
});

rock.addEventListener('click', chooseMove);
paper.addEventListener('click', chooseMove);
scissors.addEventListener('click', chooseMove);


