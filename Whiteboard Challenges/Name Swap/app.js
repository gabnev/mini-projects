let name1 = 'Blue Name'
let name2 = 'Green Drink'

function nameSwap(name) {
  console.log(name.split(' ').reverse().join(' '));
}

// using indices

function nameSwapArray(name) {

  name = name.split(' ')

  const reverse = []

  for(let i = name.length - 1; i >= 0; i--) {
    reverse.push(name[i])
  }

  return reverse.join(' ')

  // easier way
  // return name[1] + ' ' + name[0]
}

console.log(nameSwapArray(name1));