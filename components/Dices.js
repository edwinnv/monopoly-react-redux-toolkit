import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dice from 'react-dice-roll'
import { getDice } from '../store/slices/dice'
import { setPlayerPosition } from '../store/slices/game'

const Dices = () => {
  const dispatch = useDispatch()
  const currentPlayer = useSelector((state) => state.game.currentPlayer)
  const quantityGameBoard = useSelector((state) => state.game.gameBoard.length)
  const turnState = useSelector((state) => state.game.turnState)
  const numberPosition = useSelector((state) => state.dice.number)
  const currentPosition = useSelector(
    (state) => state.game.players[currentPlayer]?.position
  )

  useEffect(() => {
    const newPosition = currentPosition + numberPosition
    numberPosition !== undefined &&
      turnState === 'dice' &&
      dispatch(setPlayerPosition(currentPlayer, newPosition))
    currentPosition >= quantityGameBoard &&
      dispatch(setPlayerPosition(currentPlayer, 1))
  }, [
    currentPlayer,
    dispatch,
    numberPosition,
    turnState,
    currentPosition,
    quantityGameBoard,
  ])

  return (
    <div className='flex flex-col '>
      <div className={`flex flex-col pb-10 font-montserrat font-bold`}>
        PLAYER TURN:
        <div className={`flex justify-center items-center w-full `}>
          <h2 className='text_shadows'>
            {currentPlayer ? currentPlayer : '...'}
          </h2>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <Dice
          onRoll={(value) => dispatch(getDice(value))}
          disabled={turnState === 'actions'}
          size={90}
        />
      </div>
    </div>
  )
}

export default Dices
