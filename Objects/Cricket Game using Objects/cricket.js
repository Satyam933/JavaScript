let score = {
  Win: 0,
  Loss: 0,
  Tie: 0,
}


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
    score.Tie = score.Tie + 1;
    alert(`    Match Drawn 🤝
      Won ${ score.Win } Loss ${score.Loss} Tie ${score.Tie}`);
  }
  else if (
    (userChoice === 'bat' && computerChoice === 'ball') ||
    (userChoice === 'ball' && computerChoice === 'stump') ||
    (userChoice === 'stump' && computerChoice === 'bat')
  ) {
    score.Win = score.Win + 1;
    alert(`    You Won 🏆
    Won ${ score.Win } Loss ${score.Loss} Tie ${score.Tie}`);
  }
  else {
    score.Loss = score.Loss + 1;
    alert(`    You lose 😥
    Won ${ score.Win } Loss ${score.Loss} Tie ${score.Tie}`);
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
