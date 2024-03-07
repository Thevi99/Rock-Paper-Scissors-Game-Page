import React, { useState } from 'react';
import './index.css';

const choices = ['rock', 'paper', 'scissors'];

function App() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [winner, setWinner] = useState('');
  const [score, setScore] = useState({ user: 0, computer: 0 });

  const decideWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) return "It's a tie!";
    if ((userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'scissors' && computerChoice === 'paper') ||
        (userChoice === 'paper' && computerChoice === 'rock')) {
      setScore({ ...score, user: score.user + 1 });
      return 'You win!';
    }
    setScore({ ...score, computer: score.computer + 1 });
    return 'Computer wins!';
  };

  const play = (choice) => {
    setUserChoice(choice);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
    const result = decideWinner(choice, randomChoice);
    setWinner(result);
  };

  return (
    <div className="app">
      <h1>Rock Paper Scissors</h1>
      <div className="scoreboard">
        <div>Your Score: {score.user}</div>
        <div>Computer Score: {score.computer}</div>
      </div>
      <div className="choices">
        {choices.map((choice, index) => (
          <button key={index} onClick={() => play(choice)}>
            {choice.toUpperCase()}
          </button>
        ))}
      </div>
      {winner && (
        <div className="result">
          <p>{winner}</p>
          <p>You chose: {userChoice}</p>
          <p>Computer chose: {computerChoice}</p>
        </div>
      )}
    </div>
  );
}

export default App;
