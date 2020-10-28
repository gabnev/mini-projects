const string = 'Was it A Rat I Saw?';

function isPalindrome(string) {

  string = string.toLowerCase().replace(/\W/g, '')

  let reverse = [...string].reverse().join('');

  return reverse === string;
}

console.log(isPalindrome(string));