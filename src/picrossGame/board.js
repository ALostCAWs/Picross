/* ---- Imports Section */
import React, { useEffect, useState } from 'react';
import { GetColumn } from './getBoardInfo';
import { Hints } from './hints';
/* End ---- */

export const Board = ({ currentGame, gameSolution, fillTile, markTile }) => {
  // Decouple tiles from board by mapping within return rather than for looping in useEffect
  return (
    <div className='boardContainer'>
      <div className='colHintContainer' key='colHintContainer'>
        {gameSolution.map((row, i) =>
          <div key={`colHintCollection${i}`} className='colHints'>
            <Hints lineGameSolution={GetColumn(gameSolution, i)} currentLineGame={GetColumn(currentGame, i)} lineIndex={i} />
          </div>
        )}
      </div>

      <div className='rowHintContainer' key='rowHintContainer'>
        {gameSolution.map((row, i) =>
          <div key={`rowHintCollection${i}`} className='rowHints'>
            <Hints lineGameSolution={row} currentLineGame={currentGame[i]} lineIndex={i} />
          </div>
        )}
      </div>

      <div className='board'>
        {currentGame.map((row, i) =>
          row.map((col, j) =>
            <Tile key={`${i} - ${j}`} fill={currentGame[i][j]} rowIndex={i} colIndex={j} fillTile={fillTile} markTile={markTile} />
          )
        )}
      </div>
    </div>
  );
}

// Tiles are only aware of their fillState & coords.
// When they're clicked, they tell the picross provider their coords. & the game array is updated
const Tile = ({ fill, rowIndex, colIndex, fillTile, markTile }) => {
  return (
    <div className={`tile ${fill}`} onClick={e => fillTile(e, rowIndex, colIndex)} onContextMenu={e => markTile(e, rowIndex, colIndex)}></div>
  );
}