////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
  
    return move || randomPlay();  ///&rew\\\\\\\ --- there's a warning sign to the left, if computer complains about somethin not being defined it's either cuz you actually didn't define a variable, OR it thinks what should be a string is a variable cuz you forgot quotes, OR  you messed up upper case or lower case.  
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
  winner='tie';
    }
    else if ((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'paper' && computerMove === 'rock') || (playerMove === 'scissors' && computerMove === 'paper')){
        winner='player';
    }  
   else if ((computerMove === 'rock' && playerMove === 'scissors') || (computerMove === 'paper' && playerMove === 'rock') || (computerMove === 'scissors' && playerMove === 'paper')){
        winner='computer';
    }   
    
return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
// |GA|  Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    while (playerWins < 5 && computerWins < 5) { 
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove,computerMove);
        if (winner === 'player')  {
            playerWins ++;
            console.log("The player chose " + playerMove + " and the computer chose " + computerMove + " so the player wins this round ");   
        }
        else if (winner === 'computer')  {
            computerWins ++;
            console.log("The player chose " + playerMove + " and the computer chose " + computerMove + " so the computer wins this round ");
        }
        else if (winner === 'tie') {
            console.log("This round was a tie");
        }
         //just calling getPlayerMove() won't do anything for you here... you need to store declare playerMove = getPlayerMove().  that'll call the function to get the playerMove in your loop and assign it as your variable.  Do same for computerMove.

// then you maybe want a statement that displays the moves picked , console.log style.  

// Now to actually play the game, you to assign the `winner` variable to getWinnner(playerMove,computerMove) /// playerMove and computerMove you already got by using the respectful get functions for each of them. 

// so you got a winner... but you only want to do this up to 5... so you need to increment the variables playerWins and computerWins by 1 each time the winner === computer or player.. use an if else construction here. 
        
    }
    if (playerWins === 5) {
        return ("You win with a score of " + playerWins + " to " + computerWins);
    }
    else if (computerWins === 5) {
         return ("You lose with a score of " + computerWins + " to " + playerWins);
    }
}
playToFive();