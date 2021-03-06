
const cardsArray = [
  { 'name': 'CSS', 'img': 'https://github.com/robgmerrill/img/blob/master/css3-logo.png?raw=true', },
  { 'name': 'HTML', 'img': 'https://github.com/robgmerrill/img/blob/master/html5-logo.png?raw=true', },
  { 'name': 'jQuery', 'img': 'https://github.com/robgmerrill/img/blob/master/jquery-logo.png?raw=true', },
  { 'name': 'JS', 'img': 'https://github.com/robgmerrill/img/blob/master/js-logo.png?raw=true', },
  { 'name': 'Node', 'img': 'https://github.com/robgmerrill/img/blob/master/nodejs-logo.png?raw=true', },
  { 'name': 'Photo Shop', 'img': 'https://github.com/robgmerrill/img/blob/master/photoshop-logo.png?raw=true', },
  { 'name': 'PHP', 'img': 'https://github.com/robgmerrill/img/blob/master/php-logo_1.png?raw=true', },
  { 'name': 'Python', 'img': 'https://github.com/robgmerrill/img/blob/master/python-logo.png?raw=true', },
  { 'name': 'Ruby', 'img': 'https://github.com/robgmerrill/img/blob/master/rails-logo.png?raw=true', },
  { 'name': 'Sass', 'img': 'https://github.com/robgmerrill/img/blob/master/sass-logo.png?raw=true', },
  { 'name': 'Sublime', 'img': 'https://github.com/robgmerrill/img/blob/master/sublime-logo.png?raw=true', },
  { 'name': 'Wordpress', 'img': 'https://github.com/robgmerrill/img/blob/master/wordpress-logo.png?raw=true', },
];

const game = cardsArray.concat(cardsArray);

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(game);

const gameBoard = document.querySelector('#game-board');

const grid = document.createElement('section');
grid.className = 'grid'
gameBoard.appendChild(grid);

game.forEach((element) => {

  const card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = element.name;

  const front = document.createElement('div');
  front.classList.add('front');

  const back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = `url(${element.img})`;

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
  
})

let guessCounter = 0;
let previousTarget = null;
const delay = 1200;
let firstGuess = '';
let secondGuess = '';
let allCards = document.querySelectorAll('.card')

function resetGame() {
  guessCounter = 0;
  firstGuess = '';
  secondGuess = '';
  previousTarget = null;

  const selected = document.querySelectorAll('.selected');

  selected.forEach((item) => {
    item.classList.remove('selected');
  })
}

grid.addEventListener('click', (e) => {

  let clicked = e.target;

  if (clicked.parentNode.className === 'card' && guessCounter < 2) {
    guessCounter++;
    console.log(guessCounter)

    if (guessCounter === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess != '' && secondGuess != '') {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGame, delay);
    }
  }

  previousTarget = clicked;

})

const match = function () {
  let selected = document.querySelectorAll('.selected');
  selected.forEach((item) => {
    item.classList.add('match');
  })
}

