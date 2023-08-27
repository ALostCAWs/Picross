
/* ---- Imports Section */
import { fillState } from "../state";
/* End ---- */

/* ---- Completion Check Functions  */
// Check if a given column / row is complete & returns bool
export const checkLineComplete = (gameSolutionLine, updatedGameLine) => {
  let lineComplete = true;
  gameSolutionLine.forEach((tile, i) => {
    if (tile && updatedGameLine[i] !== fillState.filled) {
      lineComplete = false;
    }
  });
  return lineComplete;
}

// Check each column & row for completion, break the search as soon as an incomplete line is found
export const checkGameComplete = (gameSolution, updatedGame) => {
  let gameComplete = true;
  for (let i = 0; i < gameSolution.length; i++) {
    gameComplete = checkLineComplete(getColumn(gameSolution, i), getColumn(updatedGame, i));
    if (!gameComplete) {
      break;
    }
    gameComplete = checkLineComplete(gameSolution[i], updatedGame[i]);
    if (!gameComplete) {
      break;
    }
  }
  return gameComplete;
}

/* ---- Get Column */
export const getColumn = (inputGame, colIndex) => {
  let column = [];
  for (let i = 0; i < inputGame.length; i++) {
    column.push(inputGame[i][colIndex]);
  }
  return column;
}

export const getGameByColumn = (inputGame) => {
  console.log(inputGame);
  let gameByColumn = [];
  for (let i = 0; i < inputGame[0].length; i++) {
    let column = getColumn(inputGame, i);
    gameByColumn.push(column);
  }
  console.log(gameByColumn);
  return gameByColumn;
}

/* ---- Longest Dimension */
export const getLongestDimension = (inputGame) => {
  return inputGame.length >= inputGame[0].length ? inputGame.length : inputGame[0].length;
}

/* ---- Max Number of Hints */
// Based on the length of the line
export const getMaxHintCountByLineLength = (lineLength) => {
  return Math.ceil(lineLength / 2);
}