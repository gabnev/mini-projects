var names1 = 'Ana, Rita, Maria';
var names2 = 'Nuno, Hugo';
var namesArr = []
var adults = [];
var kids = [];
var sentences = [];

names1 = names1.replace(/\,/g, '').split(' ');
names2 = names2.replace(/\,/g, '').split(' ');
namesArr = [...names1, ...names2].sort();

detailsArr = [
  {age: 11, city: 'Lisbon', country: 'Portugal'},
  {age: 22, city: 'Rio de Janeiro', country: 'Brazil'},
  {age: 33, city: 'London', country: 'England'},
  {age: 44, city: 'Paris', country: 'France'},
  {age: 55, city: 'Tokyo', country: 'Japan'}
]

var makeData = (city, country) => {
  return `Hello, my name is ${this.name}, I am ${this.age} and I live in ${city}, ${country}`
};

namesArr.forEach((name, index) => {
  this.name = name;
  age = detailsArr[index].age;
  
  sentences.push(makeData(detailsArr[index].city, detailsArr[index].country));

})

adults = sentences.filter(sentence => sentence.match(/[1][8]|[1][9]|[2-9][1-9]/));
kids = sentences.filter(sentence => sentence.match(/[0][0-9]|[1][1-7]/));

var kidsDiv = document.querySelector('#adults');
var adultsDiv = document.querySelector('#kids');

var newAdult = document.createElement('ul');
var newKid = document.createElement('ul');

kids.forEach((person) => {
  newKid.innerHTML += `<li>${person}</li>`
  kidsDiv.appendChild(newKid);
})

adults.forEach((person) => {
  newAdult.innerHTML += `<li>${person}</li>`
  adultsDiv.appendChild(newAdult);
})

