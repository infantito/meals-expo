import { configureStore } from '@reduxjs/toolkit'

import mealsReducer from './meals-slice'

const store = configureStore({
  reducer: {
    meals: mealsReducer,
  },
})

export default store
