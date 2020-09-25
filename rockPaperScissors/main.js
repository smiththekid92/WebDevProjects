//User choice function & logic

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error: Please choose a valid input (rock, paper, or scisors');
  }
}

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

