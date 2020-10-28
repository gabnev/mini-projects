const string = 'car';

function reverseString(string) {

  //simple form
  // return string.split('').reverse().join('');

  //spread
  // return [...string].reverse().join('')

  let result = '';

  //forLoop
  // for(let i = string.length -1; i >= 0; i--) {
  //   result += string[i];
  // }
  
  //for...of
  for(const element of string) {
    result = element + result;
  }
  
  return result;
}

console.log(reverseString(string));