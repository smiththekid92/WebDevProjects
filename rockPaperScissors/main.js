//User choice function & logic

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error: Please choose a valid input (rock, paper, or scisors');
  }
}

/*Test function

console.log(getUserChoice('Paper'));*/

// Computer choice function & logic

function getComputerChoice(){
  const ranNumber = Math.floor(Math.random() * 3);
  switch(ranNumber) {
    case 0: 
      return 'rock';
    case 1:
      return 'paper';
    case 2: 
      return 'scissors';
  }
}

/*Test function

console.log(getComputerChoice());*/

//Determine winner function & logic

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice){
    return console.log('The game is a tie!');
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
     return 'You won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won!';
    } else {
      return 'You won!'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

/*Test function

console.log(determineWinner('rock', 'scissors')); */