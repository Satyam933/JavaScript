let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;

document.querySelector('#one').onclick = function () {
  currentDisplay = currentDisplay + '1';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#two').onclick = function () {
  currentDisplay = currentDisplay + '2';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#three').onclick = function () {
  currentDisplay = currentDisplay + '3';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#four').onclick = function () {
  currentDisplay = currentDisplay + '4';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#five').onclick = function () {
  currentDisplay = currentDisplay + '5';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#six').onclick = function () {
  currentDisplay = currentDisplay + '6';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#seven').onclick = function () {
  currentDisplay = currentDisplay + '7';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#eight').onclick = function () {
  currentDisplay = currentDisplay + '8';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#nine').onclick = function () {
  currentDisplay = currentDisplay + '9';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#zero').onclick = function () {
    if (currentDisplay !== '') {
    currentDisplay += '0';
  }
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#plus').onclick = function () {
  currentDisplay = currentDisplay + '+';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#minus').onclick = function () {
  currentDisplay = currentDisplay + '-';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#multiply').onclick = function () {
  currentDisplay = currentDisplay + '*';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#divide').onclick = function () {
  currentDisplay = currentDisplay + '/';
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#dot').onclick = function () {
  currentDisplay = currentDisplay + '.';
  document.querySelector('#display').value = currentDisplay;
}


//For Clear, Equals & Backspace in calculator
document.querySelector('#clear').onclick = function () {
  currentDisplay = ''; //Blank ' '
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#equals').onclick = function () {
  currentDisplay = eval(currentDisplay);
  document.querySelector('#display').value = currentDisplay;
}

document.querySelector('#backspace').onclick = function () {
  if (currentDisplay !== '') {
    currentDisplay = currentDisplay.slice(0, -1);
    document.querySelector('#display').value = currentDisplay;
  }
};