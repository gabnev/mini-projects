var string1 = 'baseball';
var string2 = 'baseball';

function permutationIdentifier(string1, string2) {

  // string1 = string1.split('');
  // string2 = string2.split('');

  // console.log(string1, string2)
  
  // string1.sort()
  // string2.sort()
  // console.log(string1, string2)

  // string1 = string1.join('')
  // string2 = string2.join('')
  // console.log('joined ',string1, string2)

  // return string1 === string2 ? true : false;

  // refactor below

  return string1.split('').sort().join('') === string2.split('').sort().join('')

}

console.log(permutationIdentifier(string1, string2));