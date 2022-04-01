import React from 'react'
import { gameBoard } from '../dataTypes/data'

const Monopoly = () => {
  const dimension = 5
  const lateral = (gameBoard.length - dimension * 2) / 2

  const sideOne = gameBoard.slice(0, dimension)

  const sideTwo = gameBoard.slice(dimension, dimension + lateral)

  const sideThree = gameBoard
    .slice(dimension + lateral, dimension + lateral + dimension)
    .reverse()

  const sideFour = gameBoard.slice(-lateral)

  return (
    <div>
      <div className='flex flex-col '>
        <div className='flex justify-between'>
          {sideThree.map((item, index) => (
            <div
              key={index}
              className='item w-32 h-32 bg-blue-200 mr-2 last:mr-0  border-2 border-blue-400'
            >
              {item.site}
            </div>
          ))}
        </div>
        {sideTwo.map((item, index) => (
          <div key={index} className='flex justify-between'>
            <div className='item w-32 h-32 bg-blue-200 mt-2 mb-2  border-2 border-blue-400'>
              {sideFour[index].site}
            </div>

            <div className='item w-32 h-32 bg-blue-200 mt-2 mb-2  border-2 border-blue-400'>
              {item.site}
            </div>
          </div>
        ))}

        <div className='flex'>
          {sideOne.map((item, index) => (
            <div
              key={index}
              className='item w-32 h-32 bg-blue-200 mr-2 last:mr-0  border-2 border-blue-400'
            >
              {item.site}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Monopoly
