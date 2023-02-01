import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import changeColorReducer from './colorSlice'
import itemColorReducer from './colorSlice'

export const store = configureStore({
    reducer: {
        // counter: counterSlice.reducer,
        favorite: counterReducer,
        backgroundColor: changeColorReducer,
        itemColor: itemColorReducer,
    },
})
