const convertToCelsius = function(tempFahrenheit) {
  const tempCelcius = (tempFahrenheit - 32) * (5 / 9);
  return parseFloat(tempCelcius.toFixed(1));
};

const convertToFahrenheit = function(tempCelcius) {
  const tempFahrenheit = tempCelcius * (9 / 5) + 32;
  return parseFloat(tempFahrenheit.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
