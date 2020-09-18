let userName = '';

userName ? console.log(`Hello ${userName}!`) :
  console.log('Hello!');

const userQuestion = 'Should I get a dog?';

console.log(`${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (eightBall) {
  case 0:
  eightBall = 'Yes!';
  break;

  case 1:
  eightBall = 'Definitely not!';
  break;

  case 2:
  eightBall = 'I\'m not so sure about that...';
  break;

  case 3:
  eightBall = 'Nah.';
  break;

  case 4:
  eightBall = 'Cannot predict now';
  break;

  case 5:
  eightBall = 'The fact that you\'re asking is a sign ;)';
  break;

  case 6:
  eightBall = 'You might want to think that through some more.';
  break;

  case 7:
  eightBall = 'It is what it is.';
  break;
}