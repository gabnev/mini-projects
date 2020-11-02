const quoteBtn = document.querySelector('.new-quote');
const quote = document.querySelector('.quote-text');

const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

quoteBtn.addEventListener('click', getQuote)

function getQuote() {
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      quote.textContent = data.message;
    })
    .catch(() => {
      console.log('Error . . .')
    })
}

getQuote();
