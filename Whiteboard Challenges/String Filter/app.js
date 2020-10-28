const arr = [1,2,'a','b','c',3];

function stringFilter(arr) {
  //replace
  // const result = arr.join('').replace(/[A-Za-z]/g, '').split('');
  // return result;

  //typeOf
  // if(typeOf arr[i] === 'number') -> add to the array

  //filter
  return arr.filter(element => typeof element === 'number')

}

console.log(stringFilter(arr));