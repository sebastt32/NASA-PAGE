import { createSlice } from '@reduxjs/toolkit';

export const daypicture = createSlice({
    name:'picturedaytoday',
    initialState:{
        dayinfo:[]
    },
    reducers: {
        agregarInfo : (state, action) => {
            state.dayinfo=[...state.dayinfo,action.payload]
        }
    }
})