/*
 * How many bees are in the beehive?
 * - bees can be facing UP, DOWN, LEFT, or RIGHT
 * - bees can share parts of other bees
 *
 * Example:
 *   bee.bee
 *   .e..e..
 *   .b..eeb
 *
 * https://www.codewars.com/kata/57d6b40fbfcdc5e9280002ee
 */

howManyBees = function(hive) {
  if ((!Array.isArray(hive)) || (hive.length === 0)) return 0;

  let beeCount = 0;

  for (let row = 0; row < hive.length; row++) {
    for (let col = 0; col < hive[row].length; col++) {
      if (hive[row][col] === "b") {
        // left to right instance of bee
        if (col+2 < hive[row].length) {
          if ((hive[row][col+1] === "e") && (hive[row][col+2] === "e")) beeCount++;
        }

        // right to left instance of bee
        if (col-2 >= 0) {
          if ((hive[row][col-1] === "e") && (hive[row][col-2] === "e")) beeCount++;
        }

        // up to down instance of bee
        if (row+2 < hive.length) {
          if ((hive[row+1][col] === "e") && (hive[row+2][col] === "e")) beeCount++;
        }

        // down to up instance of bee
        if (row-2 >= 0) {
          if ((hive[row-1][col] === "e") && (hive[row-2][col] === "e")) beeCount++;
        }
      }
    }
  }

  return beeCount;
}
