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
        turnState: 'dice',
        currentPlayer: action.payload,
      }
    },
    setPosition(
      state,
      { payload: { currentPlayer: player, numberPosition: position } }
    ) {
      return {
        ...state,
        turnState: 'actions',
        players: {
          ...state.players,
          [player]: { ...state.players[player], position },
        },
      }
    },
    setBuySite(state, { payload: { currentPlayer: player,  price: price } }) {
      return {
        ...state,
        turnState: 'actions',
        players: {
          ...state.players,
          [player]: {
            ...state.players[player],
            money: state.players[player]?.money - price,
          },
        },
      }
    },
  },
})

export const { setGame, setTurn, setGameBoard, setPosition, setBuySite } = gameSlice.actions

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

export const setPlayerPosition =
  (currentPlayer, numberPosition) => (dispatch, getState) => {
    try {
      dispatch(setPosition({ currentPlayer, numberPosition }))
    } catch (error) {
      throw error
    }
  }

export const setBuySitePlayer = 
(currentPlayer, site, price) => (dispatch, getState) => {
  try {
    dispatch(setBuySite({ currentPlayer, site, price }))
  } catch (error) {
    throw error
  }
}

export const makeMove = (player) => {
  return setTurn(player)
}

export default gameSlice.reducer
