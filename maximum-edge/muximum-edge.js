'use strict';

// Create a function that finds the maximum range of a triangle's third edge,
//  where the side lengths are all integers.

// eslint-disable-next-line prefer-arrow/prefer-arrow-functions, func-names
exports.nextEdge = function (num1, num2) {
  const maximumEdge = num1 + num2 - 1;
  return maximumEdge;
};
