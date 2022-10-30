// eslint-disable-next-line prefer-arrow/prefer-arrow-functions, func-names
// exports.addTheNumber = function (number) {
//   return (number * (number + 1)) / 2;
// };

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
exports.addTheNumber = function (number) {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum += i;
  }
  return sum;
};
