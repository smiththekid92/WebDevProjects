// My age as a human right now
const myAge = 27;

// Early years of the dog's life span
let earlyYears = 2;

earlyYears = earlyYears * 10.5; // can also be written as earlyYears *= 10.5;

//Years after the "early years" stage of the dog's life
let laterYears = myAge - 2;

// After the early years a dog's life span is quadrupled
laterYears *= 4;

// checking my work
console.log(earlyYears);
console.log(laterYears);

// My actual age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// My name in all lowercase
const myName = 'Phoenix'.toLowerCase();

// Info on my age in dog years
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} old in dog years.`)