const winningMatrix = {
  0: [
    [1, 2],
    [3, 6],
    [4, 8],
  ],
  1: [
    [0, 2],
    [4, 7],
  ],
  2: [
    [0, 1],
    [5, 8],
    [4, 6],
  ],
  3: [
    [0, 6],
    [4, 5],
  ],
  4: [
    [2, 6],
    [3, 5],
    [1, 7],
    [0, 8],
  ],
  5: [
    [3, 4],
    [2, 8],
  ],
  6: [
    [7, 8],
    [0, 3],
    [2, 4],
  ],
  7: [
    [6, 8],
    [1, 4],
  ],
  8: [
    [6, 7],
    [2, 5],
    [0, 4],
  ],
};

function findWinner(grid, position) {
  const winningRanges = winningMatrix[position];

  for (let i = 0; i < winningRanges.length; i++) {
    const currentValue = grid[position];
    const firstOption = grid[winningRanges[i][0]];
    const secondOption = grid[winningRanges[i][1]];

    console.log(currentValue, firstOption, secondOption);

    if (
      currentValue.value === firstOption.value &&
      firstOption.value === secondOption.value
    ) {
      return {
        winnerfound: true,
        winner: currentValue,
        winningCombination: [
          position,
          winningRanges[i][0],
          winningRanges[i][1],
        ],
      };
    }
  }

  return {
    winnerfound: false,
  };
}
export default findWinner;
