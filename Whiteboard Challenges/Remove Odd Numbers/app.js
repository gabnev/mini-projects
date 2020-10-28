const numbers = [1,2,3,4,5,6,7,8,9,10]

function getEven(numbers) {

  // .forEach
  // const even = []
  // numbers.forEach((number) => {
  //   if(number % 2 === 0) {
  //     even.push(number)
  //   }
  // })
  // return even

  // .map
  // const even = numbers.map((number) => {
  //   if(number % 2 === 0) {
  //     return number
  //   }
  // })
  // return even;

  // .filter
  const even = numbers.filter(number => number % 2 === 0);
  return even;
}

console.log(getEven(numbers))