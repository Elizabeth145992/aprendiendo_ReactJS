
import { useState } from 'react';
import './App.css'
import confetti from 'canvas-confetti';

import { Square } from './components/Square.jsx';
import { TURNS } from './utils/constants.js';
import { checkWinner, checkEndGame } from './utils/board.js';
import { WinnerModal } from './components/WinnerModal.jsx';
import { Button } from './components/Button.jsx';
import { saveGameToStorahe, removeFromStorage } from './utils/storage.js';

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board');
    if(boardFromStorage) return JSON.parse(boardFromStorage)
      return Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() =>{
    const turnFromStorage = window.localStorage.getItem('turn');
    return turnFromStorage ?? TURNS.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if(board[index] || winner) return;
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    //Guardar partida
    saveGameToStorahe({board: newBoard, turn: newTurn});
    //Revisar si hay un ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);
    //Revisar si hay empate
    }else if(checkEndGame(newBoard)){
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    removeFromStorage();
  }

  return (
  <main className='board'>
    <h1>TIC-TAC-TOE</h1>
    <Button action={resetGame} text='Reiniciar juego' />
    <section className='game'>
      {
        board.map((_, index) => {
          return(
            <Square
            key={index}
            index={index}
            updateBoard={updateBoard}
            >
              {board[index]}
              </Square>
          )
        })
      }
    </section>

    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
    <WinnerModal winner={winner} resetGame={resetGame} />
  </main>
  )
}

export default App
