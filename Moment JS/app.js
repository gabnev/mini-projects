const now = moment();

let birthday = moment('12 Dec', 'DD MMM');

if(birthday.isBefore(now, 'days')) {
  birthday = birthday.add(1, 'year');
}

let diff = birthday.diff(now, 'days');

let counter = document.querySelector('#countdown');

counter.innerHTML = diff;