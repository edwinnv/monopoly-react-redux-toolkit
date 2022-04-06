import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBuySitePlayer } from '../store/slices/game'

const Square = ({ site, index, id, price }) => {

  const dispatch = useDispatch()
  const players = useSelector((state) => state.game.players)

  const playersValue = Object.values(players)

  return (
    <div
      key={index}
      className='z-0 item relative w-32 h-32 text-xs bg-blue-200 mr-2  mt-2 mb-2 last:mr-0  border-2 border-blue-400'
    >
      <h2 className='mx-2'>
        {' '}
        {site} - ${price}
      </h2>

      {playersValue
        .filter((player) => player.position === id)
        .map((player) => (
          <>
            <div
              key={index + player.name}
              className={`flex z-20 relative justify-center items-center w-5 h-5 mx-2 my-3 rounded-full  ring ring-${player.color}-400 ring-offset-base-100 ring-offset-2 bg-slate-400 text-white`}
            >
              {player.name.slice(0, 1)}
            </div>
            {player.position !== 1 && (
              <button
                type='button'
                onClick={() => {dispatch(setBuySitePlayer(player, site, price))}}
                className='flex bottom-3 left-16 z-10 absolute px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
              >
                <p className='flex text-xs items-center justify-center'>BUY</p>
              </button>
            )}
          </>
        ))}
    </div>
  )
}

export default Square
