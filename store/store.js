import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import gameReducer from '../store/slices/game'
import diceReducer from '../store/slices/dice'

import rootReducer from './rootReducer'

export const store = configureStore({
  reducer: {
    reducer: rootReducer,
    game: gameReducer,
    dice: diceReducer,
  },
  middleware: [
    // Because we define the middleware property here, we need to explictly add the defaults back in.
    ...getDefaultMiddleware(),
  ],
})
