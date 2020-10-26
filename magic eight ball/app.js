var userName = prompt('What is you name?');

var userQuestion = prompt('What is your question?')

var answers = ['Better not tell you now.', 'Concentrate and ask again.', 'Reply hazy try again', 'Cannot predict now', 'My reply is no.', 'My sources say no', 'Outlook not so good', 'Signs point to yes' ]

if(userName !== '' && userQuestion !== '') {
  console.log('Hello ' + userName + '! Your question is: ' + userQuestion + ' after which I thought about it and . . . ' + selectAnswer())

} else {
  console.log('Hello! You don\'t have a question.')
}

function selectAnswer() {
  var random = Math.floor(Math.random() * 8)
  switch(random) {
    case 0:
      console.log('Better not tell you now.');
      break;
    case 1:
      console.log('Concentrate and ask again.Concentrate and ask again.');
      break;
    case 2:
      console.log('Reply hazy try again');
      break;
    case 3:
      console.log('Cannot predict now');
      break;
    case 4:
      console.log('My sources say no');
      break;
    case 5:
      console.log('Outlook not so goodOutlook not so good');
      break;
    case 6:
      console.log('Signs point to yes');
      break;
    case 7:
      console.log('Better not tell you now.');
      break;
  }
  // return answers[random]
}