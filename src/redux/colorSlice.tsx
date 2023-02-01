import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    color: '#112838',
    itemColorState: '#fff',
}

export const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers: {
        changeColor: (state) => {
            state.color = state.color === '#112838' ? '#fff' : '#112838'
        },
        itemColor: (state) => {
            state.itemColorState = state.itemColorState === '#fff' ? '#112838' : '#fff'
        }
    },
})

export const { changeColor, itemColor } = colorSlice.actions

export default colorSlice.reducer