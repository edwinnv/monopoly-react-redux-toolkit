import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState.dataMonopoly,
  reducers: {
    setGame(state, action) {
      return {
        ...state,
        game: action.payload,
      }
    },
    setGameBoard(state, action) {
      return {
        ...state,
        gameBoard: action.payload,
      }
    },
    setTurn(state, action) {
      return {
        ...state,
        currentPlayer: action.payload,
      }
    },
    // setPosition(state, action) {
    //   return {
    //     ...state,
    //     currentPlayer: action.payload,
    //   }
    // },
  },
})

export const { setGame, setTurn, setGameBoard } = gameSlice.actions

export const getDataGame = () => async (dispatch, getState) => {
  try {
    dispatch(setGame(initialState.dataMonopoly))
  } catch (error) {
    throw error
  }
}

export const getGameBoard = () => async (dispatch) => {
  try {
    dispatch(setGameBoard(initialState.dataMonopoly.gameBoard))
  } catch (error) {
    throw error
  }
}

export const getTurn = (turn, quantityPlayers) => {
  return setTurn(turn === quantityPlayers ? 1 : turn + 1)
}

export const makeMove = (player) => {
  return setTurn(player)
}

export default gameSlice.reducer
