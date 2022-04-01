import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const gameSlice = createSlice({
  name: 'game',
  initialState: initialState.dataMonopoly,
  game: {
    setGame(state, action) {
      return {
        ...state,
        game: action.payload,
      }
    },
  },
})

export const { setGame } = gameSlice.actions

export const getDataGame = () => async (dispatch) => {
  try {
    dispatch(setGame())
  } catch (error) {
    throw error
  }
}
