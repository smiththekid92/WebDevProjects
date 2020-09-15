// Today's forecast in Kelvin
const kelvin = 293;

// Degrees in Celsius (273 less than kelvin temp)
 const celsius = kelvin - 273;

 // Fahrenheit to Celsius conversion
 let fahrenheit = celsius * (9/5) + 32;

 // Round down the F temp
 fahrenheit = Math.floor(fahrenheit);

 console.log('The tempature is ' + `${fahrenheit}` + ' degrees fahrenheit.');

 // Newton scale 
 let newton = celsius * (33/100);

 newton = Math.floor(newton);

 console.log('The tempature is ' + `${newton}` + ' degrees on the Newton scale.');