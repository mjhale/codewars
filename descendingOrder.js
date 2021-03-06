/*
 * Your task is to make a function that can take any non-negative
 * integer as a argument and return it with its digits in descending
 * order.
 *
 * https://www.codewars.com/kata/descending-order
 */

function descendingOrder(number) {
  return Number(number.toString().split('').sort((a, b) => {
    return b - a;
  }).join(''));
}
