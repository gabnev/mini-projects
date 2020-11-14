var plates = [
  { Name: "Salmon", Day: "Monday", Type: "Fish", Price: 8, img: "https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032_960_720.jpg" },
  { Name: "Lasagna", Day: "Monday", Type: "Meat", Price: 7, img: "https://cdn.pixabay.com/photo/2016/12/11/22/41/lasagna-1900529_960_720.jpg" },
  { Name: "Sardines", Day: "Tuesday", Type: "Fish", Price: 6, img: "https://cdn.pixabay.com/photo/2016/06/30/18/49/sardines-1489626_960_720.jpg" },
  { Name: "Chicken", Day: "Tuesday", Type: "Meat", Price: 5, img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg" },
  { Name: "Fish And Chips", Day: "Wednesday", Type: "Fish", Price: 5, img: "https://cdn.pixabay.com/photo/2017/12/26/04/51/fish-and-chip-3039746_960_720.jpg" },
  { Name: "Hamburguer", Day: "Wednesday", Type: "Meat", Price: 4, img: "https://cdn.pixabay.com/photo/2016/03/05/19/37/appetite-1238459_960_720.jpg" },
  { Name: "Sushi", Day: "Thursday", Type: "Fish", Price: 10, img: "https://cdn.pixabay.com/photo/2016/11/25/16/08/sushi-1858696_960_720.jpg" },
  { Name: "Spaghetti bolognese", Day: "Thursday", Type: "Meat", Price: 7, img: "https://cdn.pixabay.com/photo/2019/10/13/14/23/spaghetti-bolognese-4546233_960_720.jpg" },
  { Name: "Chicken", Day: "Friday", Type: "Fish", Price: 6, img: "https://cdn.pixabay.com/photo/2016/11/18/17/42/barbecue-1836053_960_720.jpg" },
  { Name: "Fish Soup", Day: "Friday", Type: "Meat", Price: 7, img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg" },
  { Name: "No service on weekends", Day: "Saturday", Type: "None", Price: 0, img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg" },
  { Name: "No service on weekends", Day: "Sunday", Type: "None", Price: 0, img: "https://cdn.pixabay.com/photo/2018/01/01/17/57/fish-soup-3054627_960_720.jpg" }
]

// Weekday
const today = new Date();
let weekDay = '';

switch (today.getDay()) {
  case 0:
    weekDay = 'Sunday';
    break;
  case 1:
    weekDay = 'Monday';
    break;
  case 2:
    weekDay = 'Tuesday';
    break;
  case 3:
    weekDay = 'Wednesday';
    break;
  case 4:
    weekDay = 'Thursday';
    break;
  case 5:
    weekDay = 'Friday';
    break;
  case 6:
    weekDay = 'Saturday';
    break;
}


// New user
const newUserInput = document.querySelector('.newUser')
const newUserPassword = document.querySelector('.newPassword')
const addNewUser = document.querySelector('.addUser')
const userLogin = document.querySelector('.userLogin');
const userPassword = document.querySelector('.userPassword');
const authorize = document.querySelector('.authorize');
const signInBtn = document.querySelector('.sign-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const loggedUser = document.querySelector('.logged-user');
const loggout = document.querySelector('.loggout');
const schedule = document.querySelector('.schedule');

let users = [];
let newUsername = '';
let newPassword = '';
let currentLogin = '';
let currentPassword = '';
let isLogged = false;
let loggedAs = 'test';

// function setLocalStorage() {
//   localStorage.setItem('users', JSON.stringify(users))
// }

function clearFields() {
  newUserInput.value = '';
  newUserPassword.value = '';
  userLogin.value = '';
  userPassword.value = '';
}

newUserInput.addEventListener('keyup', (e) => {
  newUsername = e.target.value;
})


newUserPassword.addEventListener('keyup', (e) => {
  newPassword = e.target.value;
})

function logIn() {

  users = JSON.parse(localStorage.getItem('users'));

  users.forEach(user => {
    if (user.username === currentLogin && user.password === currentPassword) {
      loggedAs = user.username;
      isLogged = true;
      signInBtn.style.display = 'none';
      signUpBtn.style.display = 'none';
      loggedUser.classList.remove('d-none');
      schedule.classList.remove('d-none');
      document.querySelector('.welcome').textContent = `Welcome, ${loggedAs}! Select your preferred meals for the week.`
      clearFields();
      return loggedAs;
    }
  })

}

// Register & add user to users array

addNewUser.addEventListener('click', (e) => {

  let newUser = { username: `${newUsername}`, password: `${newPassword}` }

  users = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  users.push(newUser);

  localStorage.setItem('users', JSON.stringify(users))

  logIn();


  clearFields();

})

const close = document.querySelectorAll('.clear')

close.forEach((item) => {

  item.addEventListener('click', () => {

    console.log('click')
    
    clearFields();
  })

})



// Login

userLogin.addEventListener('keyup', (e) => {
  currentLogin = e.target.value;
  console.log(currentLogin)
})

userPassword.addEventListener('keyup', (e) => {
  currentPassword = e.target.value;
})

authorize.addEventListener('click', () => {
  logIn();
})

// loggout
loggout.addEventListener('click', () => {
  console.log('loggout')
  isLogged = false;
  loggedAs = '';
  signInBtn.style.display = 'inline';
  signUpBtn.style.display = 'inline';
  loggedUser.classList.add('d-none');
  schedule.classList.add('d-none');
  clearFields();
})

// Dynamic menu

document.querySelector('nav').addEventListener('click', () => {
  scroll(0, 0);
})

const plateList = document.querySelector('#plate-list');

let menuToday = plates.filter(plate => plate.Day === weekDay ? true : false);


menuToday.forEach((item) => {


  let plateItem = document.createElement('li');
  plateItem.classList.add('plateItem');
  plateItem.innerHTML = `${item.Name}`;
  plateList.appendChild(plateItem);

})

// Dynamic week menu

// let monday = [];
// let tuesday = [];
// let wednesday = [];
// let thursday = [];
// let friday = [];

plates.forEach(plate => {
  switch (plate.Day) {
    case 'Monday':
      document.querySelector('#monday').innerHTML += `<option value="${plate.Price}">${plate.Name}</option>`     
      break;
    case 'Tuesday':
      document.querySelector('#tuesday').innerHTML += `<option value="${plate.Price}">${plate.Name}</option>`
      break;
    case 'Wednesday':
      document.querySelector('#wednesday').innerHTML += `<option value="${plate.Price}">${plate.Name}</option>`
      break;
    case 'Thursday':
      document.querySelector('#thursday').innerHTML += `<option value="${plate.Price}">${plate.Name}</option>`
      break;
    case 'Friday':
      document.querySelector('#friday').innerHTML += `<option value="${plate.Price}">${plate.Name}</option>`
      break;
  }
})

let cost = document.querySelector('.cost');

const selections = document.querySelectorAll('select');
const option = document.querySelectorAll('option');

let totalCost = 0;

const mondayCost = document.querySelector('.monday-cost')
const tuesdayCost = document.querySelector('.tuesday-cost')
const wednesdayCost = document.querySelector('.wednesday-cost')
const thursdayCost = document.querySelector('.thursday-cost')
const fridayCost = document.querySelector('.friday-cost')

let mondayValue = 0;
let tuesdayValue = 0;
let wednesdayValue = 0;
let thursdayValue = 0;
let fridayValue = 0;

selections.forEach((selection, index) => {

  selection.addEventListener('change', (e) => {

    switch (e.target.name) {
      case 'monday':
        mondayValue = parseInt(e.target.value, 10); 
        mondayCost.textContent = mondayValue;
        break;
      case 'tuesday':
        tuesdayValue = parseInt(e.target.value, 10);
        tuesdayCost.textContent = tuesdayValue;
        break;
      case 'wednesday':
        wednesdayValue = parseInt(e.target.value, 10);
        wednesdayCost.textContent = wednesdayValue;
        break;
      case 'thursday':
        thursdayValue = parseInt(e.target.value, 10);
        thursdayCost.textContent = thursdayValue;
        break;
      case 'friday':
        fridayValue = parseInt(e.target.value, 10);
        fridayCost.textContent = fridayValue;
        break;
    }

    totalCost = mondayValue + tuesdayValue + wednesdayValue + thursdayValue + fridayValue;

    cost.textContent = `Total cost: ${totalCost}`;

  });
  
})
