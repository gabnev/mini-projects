var kelvinTemp = 301;
var celsiusTemp = Math.floor(kelvinTemp - 273.15);
var farenheitTemp = Math.floor(celsiusTemp * (9/5) + 32);

// Math library has a lot of stuff
// Math.floor() -> rounds down
// Math.round() -> Round a number to only two decimals
// Math.ceil() -> Round a number up to the next largest integer

console.log('The temperature in kelvin is ', kelvinTemp);
console.log('The temperature in celsius is ', celsiusTemp);
console.log('The temperature in farenheit is ', farenheitTemp);