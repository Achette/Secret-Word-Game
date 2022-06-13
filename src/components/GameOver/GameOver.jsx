import React from 'react'
import './GameOver.css'

const GameOver = ({ retry, score }) => {
  return (
    <div>
        <h1>Game Over</h1>
        <h2>A sua pontuação foi: {score}</h2>
        <button onClick={retry}>Resetar jogo</button>
    </div>
  )
}

export default GameOver