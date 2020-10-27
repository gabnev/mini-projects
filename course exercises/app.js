//Exercício Regular Expressions –Search, Match, Test

// var text = 'These are the voyages of the starship enterprise'

// var regex1 = /enterprise/
// var regex2 = /defiant/
// var regex3 = /enterprise|voyages|starship/g
// var regex4 = /enterprise|voyages/g

// console.log(regex1.test(text)) true
// console.log(regex2.test(text)) false

// console.log(text.match(regex3)) returns 3
// console.log(text.match(regex4)) returns 2

// console.log(text.search(regex2)) returns -1
// console.log(text.search(regex1)) returns 38

// BIND, CALL, APPLY

// var person1 = {name: 'John', last: 'Doe'}
// var person2 = {name: 'Jane', last: 'Doe'}

// var languages = ['Portuguese', 'English', 'Esperanto']

// function myLanguages(lang1, lang2, lang3) {
//   console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ' and ' + lang3)
// }

// // myLanguages.call(person2, languages[0], languages[1], languages[2]);
// myLanguages.apply(person2, languages);

// FILTER, MAP, REDUCE

// var greeting = ['hi','hello','hey','howdy']

// var shout = greeting.map(function(element){  
//   return element.toUpperCase()
// })

// var shoutHi = shout.filter((element) => {
//   if(element === 'HI') {
//     return element
//   }
// })

// could also use shift on the shout array!

// console.log(shoutHi)

// var homeRuns = [
//   {batter: 12},
//   {batter: 24},
//   {batter: 36},
//   {batter: 48}
// ]

// var total = homeRuns.reduce((a, b) => {
//   console.log('cumulative ', a, 'current ', b);
//   return a + b.batter
// }, 0)

// var arr = [10,5,20,25,15]

// var sum = arr.reduce((a, b) => {
//   return a + b;
// })

// console.log(sum);

// var multiply = arr.reduce((a, b) => {
//   return a * b;
// })

// console.log(multiply);

// var largestValue = arr.reduce((a, b) => {
//   var largest = a;
//   if(a < b) {
//     console.log('Acc ', a, 'Current ', b)
//     largest = b
//   }

//   another solution

//   if(a > b) {
//     return a;
//   } else {
//     return b
//   }

//   return largest
// })

// console.log(largestValue)

// var arr = [1,2,3,4,5]

// var doubleAndSum = arr.map((element) => {
//   return element * 2;
// }).reduce((a, b) => {
//   return a + b;
// })

// console.log(doubleAndSum)