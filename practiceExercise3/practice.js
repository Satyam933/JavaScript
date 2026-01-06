let age = 45;
let gender = 'male' // male and female
let finaldiscount;
if (age <= 5) {
  finaldiscount = 100;
}
else if (gender === 'female') {
  finaldiscount = 50;
}
else if (age <= 8) {
  finaldiscount = 50;
}
else if (age >= 65) {
  finaldiscount = 70;
}
else {
  finaldiscount = 0;
}
console.log(`Your Final Discount is : ${finaldiscount}%`);