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
console.log(getSleepHours('Friday')); //Output: No data available

console.log(getSleepHours('Sunday')); //Output: 8 

/*
console.log(getSleepHours('Friday')); //Output: No data available

console.log(getSleepHours('Wednesday')); //Output: 7 */

const getActualSleepHours = () => 
  getActualSleepHours('Sunday') + getActualSleepHours('Monday') + getActualSleepHours('Tuesday') + getActualSleepHours('Wednesday') + getActualSleepHours('Thursday') + getActualSleepHours('Friday') + getActualSleepHours('Saturday')


const getIdealSleepHours = () => {
  let idealHours = 8;
  return idealHours * 7;
}
