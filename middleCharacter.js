/*
 * You are going to be given a word. Your job is to return the middle
 * character of the word. If the word's length is odd, return the
 * middle character. If the word's length is even, return the middle
 * 2 characters.
 *
 * https://www.codewars.com/kata/get-the-middle-character
 */

function getMiddle(string) {
  const midIndex = Math.floor(string.length / 2);
  let middle = "";

  if (string.length % 2) {
    middle += string[midIndex];
  } else {
    middle += string[midIndex-1];
    middle += string[midIndex];
  }

  return middle;
}
