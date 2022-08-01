const sumAll = function (num1, num2) {
  arr = [];
  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }
  if (typeof num1 != "number" || typeof num2 != "number") {
    return "ERROR";
  }

  if (num1 < num2) {
    while (num1 <= num2) {
      arr.push(num1++);
    }
  } else {
    while (num1 >= num2) {
      arr.push(num2++);
    }
  }

  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumAll(1, 4));
// Do not edit below this line
module.exports = sumAll;
