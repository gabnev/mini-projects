// Create a function that accepts a string (of a persons first and last name) and returns a string with the first and last name swapped.

const string = 'John Smith';

function reverseName(string) {
  return string.split(' ').reverse().join(' ');
}

console.log(reverseName(string))