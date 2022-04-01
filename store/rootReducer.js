import { combineReducers } from '@reduxjs/toolkit'
import gameReducer from './slices/game'

const appReducer = combineReducers({
  dataMonopoly: gameReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer
