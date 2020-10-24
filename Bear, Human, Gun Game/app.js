function getUserChoice(userInput) {

  var userInput = userInput.toLowerCase()

  console.log('You choose', userInput)
  document.querySelector('#player').textContent = `Your choice: ${userInput}`

  if (userInput === 'bear' || userInput === 'human' || userInput === 'gun') {

    function getComputerChoice() {
      var computerChoices = ['bear', 'human', 'gun']
      var computerChoice = computerChoices[Math.floor(Math.random() * 3)];
      console.log('Computer choose ', computerChoice)      
      return computerChoice
    }

    var computerChoice = getComputerChoice()
    document.querySelector('#computer').textContent = `Your choice: ${computerChoice}`

    function determineWinner() {
      if(userInput === computerChoice) {
        console.log('Draw');
        return 'Draw'
      } else if(userInput === 'bear' && computerChoice === 'human') {
        console.log('You win!');
        return 'You win!'
      } else if(userInput === 'human' && computerChoice === 'gun') {
        console.log('You win!');
        return 'You win!'
      } else if(userInput === 'gun' && computerChoice === 'bear') {
        console.log('You win!');
        return 'You win!'
      } else {
        console.log('You lose!');
        return 'You lose!'
      }
    }    
    

    var result = determineWinner();

    document.querySelector('#result').textContent = `Result: ${result}`

  } else {
    return "Please select between \"Bear\", \"Human\" or \"Gun\".";
  }
}

getUserChoice('bear')


