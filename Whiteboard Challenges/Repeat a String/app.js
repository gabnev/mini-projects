const string = 'Hello World';
const number = 10;

function repeatString(string, number) {

  let result = '';

  // forLoop
  // if(number <= 0) {
  //   return result;
  // } else {
  //   for(let i = 0; i < number; i++) {
  //     result += string;
  //   }
  // }

  // whileLoop
  let i = 0
  while(i < number && number > 0) {
    result += string;
    i++
  }

  return result
}

console.log(repeatString(string, number));