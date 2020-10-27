var stuff = ['car', 'boat', 'bus'];

function removeFromHead(arr, start, end) {
  arr.splice(start, end);
  return arr;
}

console.log(removeFromHead(stuff, 0, 1));