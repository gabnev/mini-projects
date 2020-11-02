const img = document.querySelector('.dog-image');
const fetchBtn = document.querySelector('.fetchBtn');

const endpoint = 'https://dog.ceo/api/breeds/image/random';

fetchBtn.addEventListener('click', getDog)

function getDog() {

  console.log('Fetching . . .')

  fetch(endpoint)
    .then(response => response.json())
    .then(data => img.src = data.message)
    .catch(() => console.log('error . . .'))
}
