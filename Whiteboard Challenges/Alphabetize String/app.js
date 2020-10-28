const string = 'goodbye';

function alphabetize(string) {
  // return string.split('').sort().join('')

  // spread
  return [...string].sort().join('');
}

console.log(alphabetize(string));