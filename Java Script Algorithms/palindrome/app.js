var string1 = 'leve-l';
var string2 = 'dad';
var string3 = 'Master';

// /\W/g-> [^A-Za-z0-9_] using g for all global matches

function isPalindrome(string) {

  var regex = /\W/g;

  string = string.replace(regex, '');

  var invertedString = string.split('').reverse().join('');

  return string === invertedString ? true : false;
}

console.log(isPalindrome(string3));