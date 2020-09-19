let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;

const runnersAge = 18;

if (runnersAge > 18) {
  raceNumber += 1000;
} else {
  raceNumber;
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`The race will start at 9:30 am for racer #: ${raceNumber}`);
} else if (runnersAge > 18 && registeredEarly === false){
  console.log(`The race will start at 11 am for racer #: ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`The race will start at 12:30 pm for racer# ${raceNumber}`); 
} else {
  console.log('Please see the regisration desk.');
}