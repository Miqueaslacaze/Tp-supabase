import { useState } from 'react';

export default function Game() {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [targetNumber, setTargetNumber] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [lastGuess, setLastGuess] = useState<number | null>(null);

  const startNewGame = () => {
    setIsLoading(true);
    setMessage('Iniciando nuevo juego...');
    
    try {
      // Generate a random number between 1 and 7
      const newNumber = Math.floor(Math.random() * 7) + 1;
      setTargetNumber(newNumber);
      setMessage('¡Juego iniciado! Adivina un número entre 1 y 7');
      setAttempts(0);
      setGameWon(false);
      setLastGuess(null);
    } catch (error: any) {
      console.error('Error al iniciar el juego:', error);
      setMessage(`Error al iniciar el juego: ${error.message || 'Por favor, intenta de nuevo'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const getHint = (guessNum: number) => {
    if (!targetNumber) return '';
    
    if (guessNum < targetNumber) {
      return 'El número es MAYOR que tu último intento';
    } else {
      return 'El número es MENOR que tu último intento';
    }
  };

  const handleGuess = () => {
    if (!targetNumber) {
      setMessage('¡Por favor inicia un nuevo juego primero!');
      return;
    }

    const guessNum = parseInt(guess);
    if (isNaN(guessNum) || guessNum < 1 || guessNum > 7) {
      setMessage('Por favor ingresa un número válido entre 1 y 7');
      return;
    }

    setAttempts(prev => prev + 1);
    setLastGuess(guessNum);

    if (guessNum === targetNumber) {
      setMessage(`¡Felicitaciones! ¡Ganaste en ${attempts + 1} intentos!`);
      setGameWon(true);
    } else {
      let message = '¡Incorrecto!';
      
      // Dar pista cada 3 intentos
      if (attempts % 3 === 0) {
        message += ` ${getHint(guessNum)}`;
      }
      
      setMessage(message);
    }
    setGuess('');
  };

  return (
    <div className="game-container">
      <h2>Juego de Adivinanza</h2>
      <p className="game-description">
        Adivina el número entre 1 y 7. ¡Tienes que acertar para ganar!
        <br />
        <small>Recibirás una pista cada 3 intentos incorrectos.</small>
      </p>
      <button 
        onClick={startNewGame} 
        className="new-game-btn"
        disabled={isLoading}
      >
        {isLoading ? 'Iniciando...' : gameWon ? 'Jugar de nuevo' : 'Iniciar nuevo juego'}
      </button>
      <div className="game-input">
        <input
          type="number"
          min="1"
          max="7"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Ingresa un número (1-7)"
          disabled={gameWon || isLoading}
        />
        <button 
          onClick={handleGuess} 
          disabled={gameWon || !guess || isLoading}
          className="guess-btn"
        >
          Adivinar
        </button>
      </div>
      <p className={`message ${message.includes('Error') ? 'error-message' : ''}`}>
        {message}
      </p>
      {attempts > 0 && !gameWon && (
        <p className="attempts">Intentos: {attempts}</p>
      )}
      {lastGuess !== null && !gameWon && (
        <p className="last-guess">Último intento: {lastGuess}</p>
      )}
    </div>
  );
} 