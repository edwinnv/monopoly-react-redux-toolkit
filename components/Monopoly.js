import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosition, getTurn, makeMove } from '../store/slices/game'
import Square from './Square'

const Monopoly = () => {
  const dispatch = useDispatch()
  const gameBoard = useSelector((state) => state.game.gameBoard)
  const currentPlayer = useSelector((state) => state.game.currentPlayer)
  const players = useSelector((state) => state.game.players)
  const [turn, setTurn] = useState(1)

  const quantityPlayers = Object.keys(players).length

  const dimension = 5
  const lateral = (gameBoard.length - dimension * 2) / 2

  const sideOne = gameBoard.slice(0, dimension)

  const sideTwo = gameBoard.slice(dimension, dimension + lateral)

  const sideThree = gameBoard
    .slice(dimension + lateral, dimension + lateral + dimension)
    .reverse()

  const sideFour = gameBoard.slice(-lateral)

  const handleTurn = () => {
    if (turn < quantityPlayers) {
      dispatch(makeMove(turn))
      setTurn(turn + 1)
    } else {
      dispatch(makeMove(turn))
      setTurn(1)
    }
  }

  return (
    <div>
      <div className='flex flex-col relative font-bold'>
        <div className='flex justify-between '>
          {sideThree.map((item, index) => (
            <Square key={index} item={item.site} id={item.id} />
          ))}
        </div>
        {sideTwo.map((item, index) => (
          <div key={index} className='flex justify-between'>
            <Square key={index} item={sideFour[index].site} id={item.id} />
            <Square key={index} item={item.site} id={item.id} />
          </div>
        ))}
        <div className='flex'>
          {sideOne.map((item, index) => (
            <Square key={index} item={item.site} id={item.id} />
          ))}
        </div>
        <button
          className='glow-on-hover absolute top-6 left-56  font-bold'
          type='button'
          onClick={handleTurn}
        >
         {currentPlayer > 0 ? 'NEXT PLAYER' : 'START'} 
        </button>
      </div>
    </div>
  )
}

export default Monopoly
