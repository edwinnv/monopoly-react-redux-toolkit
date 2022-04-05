import { combineReducers } from '@reduxjs/toolkit'
import gameReducer from './slices/game'
import diceReducer from './slices/dice'


const appReducer = combineReducers({
  dataMonopoly: gameReducer,
  dice: diceReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
