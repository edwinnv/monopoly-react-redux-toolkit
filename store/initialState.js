import { gameBoard } from '../dataTypes/data'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  dataMonopoly: {
    players: {
      1: {
        name: 'EDWIN',
        money: 1500,
        position: 1,
        color: 'green',
      },
      2: {
        name: 'LUIS',
        money: 1500,
        position: 1,
        color: 'red',
      },
      3: {
        name: 'NICOLLE',
        money: 1500,
        position: 1,
        color: 'yellow',
      },
    },
    currentPlayer: undefined,
    gameBoard: gameBoard,
    turnState: 'start',
  },
  dice: {
    number: undefined,
  },
}
