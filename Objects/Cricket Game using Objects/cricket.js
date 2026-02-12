function getComputerChoice() {
  let random = Math.random() * 3;

  if (random > 0 && random <= 1) return 'bat';
  else if (random > 1 && random <= 2) return 'ball';
  else return 'stump';
}

function playGame(userChoice) {
  let computerChoice = getComputerChoice();

  console.log(`You choose ${userChoice.toUpperCase()} !`);
  console.log(`Computer choose ${computerChoice.toUpperCase()} !`);

  if (userChoice === computerChoice) {
    alert('Match Drawn 🤝');
  }
  else if (
    (userChoice === 'bat' && computerChoice === 'ball') ||
    (userChoice === 'ball' && computerChoice === 'stump') ||
    (userChoice === 'stump' && computerChoice === 'bat')
  ) {
    alert('You Won 🏆');
  }
  else {
    alert('You lose 😥');
  }
}

document.querySelector('#bat').onclick = function () {
  playGame('bat');
};

document.querySelector('#ball').onclick = function () {
  playGame('ball');
};

document.querySelector('#stump').onclick = function () {
  playGame('stump');
};
