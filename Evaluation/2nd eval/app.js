var names1 = 'Ana, Rita, Maria';
var names2 = 'Nuno, Hugo';
var adults = [];
var kids = [];
var sentences = [];

names1 = names1.replace(/\,/g, '').split(' ');
names2 = names2.replace(/\,/g, '').split(' ');
namesArr = names1.concat(names2).sort();

detailsArr = [
  {age: 11, city: 'Lisbon', country: 'Portugal'},
  {age: 22, city: 'Rio de Janeiro', country: 'Brazil'},
  {age: 33, city: 'London', country: 'England'},
  {age: 44, city: 'Paris', country: 'France'},
  {age: 55, city: 'Tokyo', country: 'Japan'}
]

var makeData = (city, country) => {
  return `Hello, my name is ${name}, I am ${age} and I live in ${city}, ${country}`
};

// Run function for each name
namesArr.forEach((name, index) => {
  this.name = name;
  age = detailsArr[index].age;
  
  sentences.push(makeData(detailsArr[index].city, detailsArr[index].country));

  // if(this.age >= 18) {
  //   adults.push(makeData(detailsArr[index].city, detailsArr[index].country))
  // } else {
  //   kids.push(makeData(detailsArr[index].city, detailsArr[index].country))
  // }

})

console.log(sentences)

// adults = sentences.filter(sentence => sentence.includes(18));

// kids = sentences.filter(sentence => sentence.includes(18));

console.log(adults)
console.log(kids)

// Get targets
var kidsDiv = document.querySelector('#adults');
var adultsDiv = document.querySelector('#kids');

// Create ULs
var newAdult = document.createElement('ul');
var newKid = document.createElement('ul');

// populate Divs
kids.forEach((person) => {
  newKid.innerHTML += `<li>${person}</li>`
  kidsDiv.appendChild(newKid);
})

adults.forEach((person) => {
  newAdult.innerHTML += `<li>${person}</li>`
  adultsDiv.appendChild(newAdult);
})

