const getSleepHours = day => {
  switch (day) {
    case 'Sunday' :
      return 8;
      break;
    case 'Monday' :
      return 7;
      break;
    case 'Tuesday' :
      return 7;
      break;
    case 'Wednesday' :
      return 7;
      break;
    case 'Thursday' :
      return 6;
      break;
    case 'Friday' :
      return 8;
      break;
    case 'Saturday' :
      return 8;
    default : 
      console.log('No data available');
  }
};

/*
console.log(getSleepHours('Someday')); //Output: No data available

console.log(getSleepHours('Sunday')); //Output: 8 

/*
console.log(getSleepHours('Friday')); //Output: No data available

console.log(getSleepHours('Wednesday')); //Output: 7 */

const getActualSleepHours = () => 
getSleepHours('Sunday') + getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday')


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}

/* 
console.log(getActualSleepHours());
  Output: 51

console.log(getIdealSleepHours()); 
  Output: 56 */

const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();

  let idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log('Sleep Score: 100%. You got the pefect amount of sleep. Your sleep calculation is: ' + (idealSleepHours - actualSleepHours));
  } else if (actualSleepHours > idealSleepHours) {
    console.log('Sleep Score: Greater than 100%. You got more sleep than you need. Your sleep calculation is: ' + (idealSleepHours - actualSleepHours));
  } else {
    console.log('Sleep deficit deceted! You need to get more sleep! Your sleep calculation is: ' + (idealSleepHours - actualSleepHours))
  } 
}

calculateSleepDebt();