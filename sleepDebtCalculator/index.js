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



