import { createSlice } from '@reduxjs/toolkit'
import initialState from '../initialState'

const diceSlice = createSlice({
  name: 'dice',
  initialState: initialState.dice,
  reducers: {
    setDice(state, action) {
      return {
        ...state,
        number: action.payload,
      }
    },
  },
})

export const { setDice } = diceSlice.actions

export const getDice = (value) => async (dispatch) => {
  try {
    dispatch(setDice(value))
    return value
  } catch (error) {
    throw error
  }
}

export const resetDice = () => {
  return setDice(undefined)
}

export default diceSlice.reducer
