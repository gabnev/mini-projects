// *************************
// Longest word
// *************************

var string = 'Welcome to helloWorldWow'


function longestWord(string) {
  
  var stringArr = string.split(' ');
  console.log(stringArr)
  
  var longest = '';

  stringArr.forEach((element) => {
  
    if(element.length > longest.length) {
      longest = element;
    }
    
  })  

  return longest
}

console.log(longestWord(string))