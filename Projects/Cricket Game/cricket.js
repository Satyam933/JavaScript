let computerChoice = Math.random() * 3;
document.querySelector('#bat').onclick = function () {
  console.log('You choose BAT !');
  if (computerChoice > 0 && computerChoice <= 1) {
    console.log('Computer also choose Bat !');
    alert('Match Drawn 🤝');
  }
  else if (computerChoice > 1 && computerChoice <= 2) {
    console.log('Computer choose Ball !');
    alert('You Won 🏆');
  }
  else {
    console.log('Computer choose stump !');
    alert('You lose 😥');
  }
}

document.querySelector('#ball').onclick = function () {
  console.log('You choose BALL !');
  if (computerChoice > 0 && computerChoice <= 1) {
    console.log('Computer choose Bat !');
    alert('You lose 😥');
  }
  else if (computerChoice > 1 && computerChoice <= 2) {
    console.log('Computer also choose Ball !');
    alert('Match Drawn 🤝');
  }
  else {
    console.log('Computer choose stump !');
    alert('You Won 🏆');
  }
}

document.querySelector('#stump').onclick = function () {
  console.log('You choose STUMP !');
  if (computerChoice > 0 && computerChoice <= 1) {
    console.log('Computer choose Bat !');
    alert('You Won 🏆');
  }
  else if (computerChoice > 1 && computerChoice <= 2) {
    console.log('Computer choose Ball !');
    alert('You lose 😥');
  }
  else {
    console.log('Computer also choose stump !');
    alert('Match Drawn 🤝');
  }
}