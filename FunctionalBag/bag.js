let chart_value = 0;
document.querySelector("h2").innerText = 'Your Bag has ' + chart_value + ' items.';

  //For adding single item to chart
  document.querySelector('.chart').onclick = function () {
    chart_value += 1;
    document.querySelector("h2").innerText = 'Your Bag has ' + chart_value + ' items.';
  }

  //For Move item to wishlist
  document.querySelector('.wishlist').onclick = function () {
    chart_value -= 1;
    document.querySelector("h2").innerText = 'Your Bag has ' + chart_value + ' items.';
  }

  //For adding sale items (1+1)
  document.querySelector('.sale').onclick = function () {
    chart_value += 2;
    document.querySelector("h2").innerText = 'Your Bag has ' + chart_value + ' items.';
  }
