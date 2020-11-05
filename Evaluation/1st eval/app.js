var names = ["João", "Maria", "Andreia", "Hugo", "Ana"]
var grades = [10, 12, 8, 16, 6]
var persons = [];
var positives = [];
var failed = 0;
var numberOfStudents = 0;

// Exercises 1 through 4

function BuildPersonsObject(names, grades) {

  names.forEach((name, index) => {
    var object = {};

    object['name'] = name
    object['grade'] = grades[index];
    persons.push(object)
  })

  persons.forEach((person) => {

    if (person.grade >= 10) {
      positives.push(person)
    } else {
      failed += 1;
    }

    if (person.name[0].toLowerCase() === 'a') {
      numberOfStudents += 1;
    }
  });

  return persons;
}


BuildPersonsObject(names, grades);

console.log(persons);
console.log('positives', positives);
console.log('failed', failed);
console.log('numberOfStudents', numberOfStudents);

// Exercises 5 & 6

function feedback(name, grade) {

  if (grade < 10) {
    return `${name} had ${grade} - so it was a negative result`;
  } else if (grade >= 10 && grade < 13) {
    return `${name} had ${grade} - so it was an OK result`;
  } else if (grade >= 13 && grade < 16) {
    return `${name} had ${grade} - so it was a good result`;
  } else if (grade >= 16 && grade < 18) {
    return `${name} had ${grade} - so it was a very good result`;
  } else if (grade >= 18 && grade <= 20) {
    return `${name} had ${grade} - so it is an excellent result`;
  }

}

var random = Math.floor((Math.random() * 21));

console.log(feedback('Gabriel', random))