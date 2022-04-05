import Image from 'next/image'
import React from 'react'
import { useSelector } from 'react-redux'

const Square = ({ item, index, id }) => {
  const players = useSelector((state) => state.game.players)

  const playersValue = Object.values(players) 

  return (
    <div
      key={index}
      className='item w-32 h-32 text-xs bg-blue-200 mr-2  mt-2 mb-2 last:mr-0  border-2 border-blue-400'
    >
      {item}

      {playersValue
        .filter((player) => player.position === id)
        .map((player) => (
          <div
            key={index + player.name}
            className='flex justify-center items-center rounded-full h-20 w-full'
          >
            <Image
              alt='troll'
              width={30}
              height={20}
              src={
                'https://live.mrf.io/statics/i/ps/www.muycomputer.com/wp-content/uploads/2012/06/troll.jpg?width=1200&enable=upscale'
              }
            />
          </div>
        ))}
    </div>
  )
}

export default Square
