const ftoc = function(fahrenheitValue) {
  celsiusValue =Math.round(((fahrenheitValue - 32) * (5 / 9)) * 10) / 10;
  return celsiusValue;
};

const ctof = function(celsiusValue) {
  fahrenheitValue = Math.round((((1.8) * celsiusValue) + 32) * 10) / 10;
  return fahrenheitValue;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

console.log(ftoc(0));
console.log(ctof(0));
