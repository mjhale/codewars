/*
 * Given a string of words, you need to find the highest scoring word.
 * Each letter of a word scores points according to it's position in
 * the alphabet. a=1, z=26 and everything inbetween. You need to return
 * the highest scoring word as a string. If two words score the same,
 * return the word that appears earliest in the original string.
 *
 * https://www.codewars.com/kata/highest-scoring-word
 */

function high(string) {
  if (!string) return '';

  let highestScore = 0;
  let highestScoringWord = '';
  const wordList = string.split(' ');

  for (let i = 0; i < wordList.length; i++) {
    const wordScore = wordList[i]
      .split('')
      .map((char) => {
        if (char.toLowerCase().match(/[a-z]/i))
          /* in ascii, 'a' begins at the value 97 */
          return char.toLowerCase().charCodeAt(0) - 96;
        else
          return 0;
      })
      .reduce((acc, cur) => acc + cur, 0);

    if (wordScore > highestScore) {
      highestScore = wordScore;
      highestScoringWord = wordList[i];
    }
  }

  return highestScoringWord;
}
