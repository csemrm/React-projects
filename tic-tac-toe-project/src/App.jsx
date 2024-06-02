import { useState } from "react";
import GameBoard from "./components/Gameboard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_CONBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";


const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
console.log(initialGameBoard);


function deriveActivePlayer(gameTurns) {

  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);


  let gameboard = [...initialGameBoard.map(array => [...array])];

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameboard[row][col] = player;
  }

  let winner;
  let hasDraw;
  for (const combination of WINNING_CONBINATIONS) {

    const firstSQSmbl = gameboard[combination[0].row][combination[0].column];
    const secendSQSmbl = gameboard[combination[1].row][combination[1].column];
    const thirdSQSmbl = gameboard[combination[2].row][combination[2].column];

    if (firstSQSmbl && firstSQSmbl === secendSQSmbl && firstSQSmbl === thirdSQSmbl)
      winner = firstSQSmbl;
    else hasDraw = false;
  }
  const handleSelectSqure = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      let currentPlayer = deriveActivePlayer(prevTurns);
      const updatedTruns = [{
        square: {
          row: rowIndex,
          col: colIndex
        },
        player: currentPlayer
      }, ...prevTurns];

      return updatedTruns;
    });
  }
  const handleRestart = () => {
    setGameTurns([]);

  }
  return <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
        <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
      </ol>
      {(winner || hasDraw) && <GameOver winner={winner} restart={handleRestart} />}
      <GameBoard onSelectSquare={handleSelectSqure} board={gameboard} />
    </div>
    <Log turns={gameTurns} />
  </main>;
}

export default App
