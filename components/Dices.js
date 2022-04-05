import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Dice from 'react-dice-roll'
import { getDice } from '../store/slices/dice'

const Dices = () => {
  const dispatch = useDispatch()
  const currentPlayer = useSelector((state) => state.game.currentPlayer)

  return (
    <div className='flex flex-col '>
      <div className={`flex flex-col pb-10 font-montserrat font-bold`}>
        YOUR TURN PLAYER:
        <div
          className={`flex justify-center items-center w-full ${
            currentPlayer === undefined ? 'invisible h-40' : 'visited'
          }`}
        >
          <h2 className='text_shadows'>{currentPlayer}</h2>
        </div>
      </div>
      <div className='flex w-full justify-center'>
        <Dice onRoll={(value) => dispatch(getDice(value))} size={90} />
      </div>
    </div>
  )
}

export default Dices
