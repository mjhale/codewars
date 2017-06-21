/*
 * Build Tower by the following given argument:
 *  number of floors (integer and always greater than 0).
 * A tower block is represented as *
 *
 * https://www.codewars.com/kata/build-tower
 */

function towerBuilder(numberOfFloors) {
  let tower = [];
  const maxWidth = numberOfFloors*2-1;

  for (let i = 0; i < numberOfFloors; i++) {
    const currentFloor = i+1;
    const towerBlocks = currentFloor*2-1;
    const whiteSpace = maxWidth-towerBlocks;

    tower[i] = '';
    if (currentFloor !== numberOfFloors) tower[i] += ' '.repeat(Math.floor(whiteSpace/2));
    tower[i] += '*'.repeat(towerBlocks);
    if (currentFloor !== numberOfFloors) tower[i] += ' '.repeat(Math.floor(whiteSpace/2));
  }

  return tower;
}
