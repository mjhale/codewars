/*
 * You are given an array strarr of strings and an integer k. Your task is to
 * return the first longest string consisting of k consecutive strings taken
 * in the array.
 * 
 * https://www.codewars.com/kata/56a5d994ac971f1ac500003e
 */

function longestConsec(strarr, k) {
  const n = strarr.length;

  if ((n === 0) || (k > n) || (k <= 0)) {
    return "";
  }
  
  let consecStrings = [];
  let maxString = "";

  for (let i = 0; i < n; i++) {
    let currPos = consecStrings.length;
    consecStrings[currPos] = "";
    for (let j = 0; j < k; j++) {
      if (i+j < n) consecStrings[currPos] += strarr[i+j];
    }
  }
  
  for (let i = 0; i < consecStrings.length; i++) {
    if (consecStrings[i].length > maxString.length) maxString = consecStrings[i];
  }
  
  return maxString;
}


