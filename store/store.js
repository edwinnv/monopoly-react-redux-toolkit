import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../store/slices/counterSlice'
import gameReducer from '../store/slices/game'
import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
    game: gameReducer,
    counter: counterReducer,
  },
})
