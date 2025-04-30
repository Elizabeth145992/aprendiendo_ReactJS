import { Square } from "./Square";
import { Button } from "./Button";

export function WinnerModal ({winner, resetGame}){
    if(winner === null) return null;
    const winnerText = winner === false ? 'Empate': 'Ganó';
    return(
      <section className='winner'>
        <div className='text'>
          <h2>
            {winnerText}
          </h2>
          <header className='win'>
            {winner && <Square>{winner}</Square>}
          </header>
          <footer>
            <Button action={resetGame} text='Reiniciar juego' />
          </footer>
        </div>
      </section>
)
}