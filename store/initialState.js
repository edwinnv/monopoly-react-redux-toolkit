import { gameBoard } from '../dataTypes/data'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dataMonopoly: {
    players: {
      1: {
        name: 'Player One',
        money: 1500,
        position: 4,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Rojos.png/250px-Rojos.png',
      },
      2: {
        name: 'Player Two',
        money: 1500,
        position: 8,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/F1_light_blue_flag.svg/1280px-F1_light_blue_flag.svg.png',
      },
      3: {
        name: 'Player Two',
        money: 1500,
        position: 8,
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/F1_light_blue_flag.svg/1280px-F1_light_blue_flag.svg.png',
      },
    },
    currentPlayer: undefined,
    gameBoard: gameBoard,
  },
  dice: {
    number: 0,
  },
}
