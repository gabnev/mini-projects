var string = 'Gabrieel'

// for(var i = 0; i < string.length; i++) {
//   for(var j = 0; j < string.length; j++) {
//     if(string[i].toLocaleLowerCase() === string[j].toLocaleLowerCase()) {
//       console.log(string[i].toLocaleLowerCase() + ' = ' + string[j].toLocaleLowerCase())
//       console.log('same letter')
//     } else {
//       console.log('Different letter')
//       console.log(string[i] + ' != ' + string[j])
//     }
//   }
// }

function unique(string) {
  
  string = string.toLowerCase()

  for(var i = 0; i < string.length; i++) {

    if(string.indexOf(string[i]) != string.lastIndexOf(string[i])) return false;
  }
  return true
}

console.log(unique(string));


