// Create a function that takes an array of numbers. Return the largest number in the array.

const arr = [5,1,2,3,100];

function largestNumber(arr) {
  
  //forEach
  // let largest = 0;
  // return largest
  // arr.forEach((number) => number > largest? largest = number : largest)

  //Math.max()
  return Math.max(...arr);

}

console.log(largestNumber(arr));