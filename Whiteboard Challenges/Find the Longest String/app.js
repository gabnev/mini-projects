const string = 'Hi, where is the airport?';

function longestString(string) {

  string = string.replace(/\W/g, ' ')
  string = string.split(' ');
  let longest = ''

  // forEach
  // string.forEach((word) => {
  //   if(word.length > longest.length) {
  //     longest = word;
  //   }
  // })

  //forOfLoop
  for (const word of string) {
    if (word.length > longest.length) {
      longest = word;
    }
  }

  return longest
}

console.log(longestString(string));