import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

export const store = configureStore({
    reducer: {
        // counter: counterSlice.reducer,
        favorite: counterReducer,
    },
})
