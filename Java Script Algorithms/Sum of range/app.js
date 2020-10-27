var numbers = [1, 10];

function sumOfRange(numbers) {
  
  var max = Math.max(numbers[0], numbers[1]);
  var min = Math.min(numbers[0], numbers[1]);
  var sum = 0;

  for(var i = min; i <= max; i++) {
    sum += i;
  }

  return sum;

}

console.log(sumOfRange(numbers));