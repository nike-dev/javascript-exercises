const add = function(num1, num2) {
  return num1 + num2;
	
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let product = 1;
  for (num of array) {
    product *= num;
  }
  return product;
};

const power = function(number, raiser) {
  let powered = 1;
	for (let i = 0; i < raiser; i++) {
    powered *= number;
  }

  return powered;
  // return Math.pow(number, raiser);
};

const factorial = function(number) {
  let i = 0;
  let factorResult = 1;
  for (i; i < number; i++) {
	factorResult *= (number - i);
  }

  return factorResult;

  // let factorResult = 1;
  // for (i = number; i > 0; i--) {
  //   factorResult *= i;
  // }
  // return factorResult;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
