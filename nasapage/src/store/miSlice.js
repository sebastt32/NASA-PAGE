import { createSlice } from '@reduxjs/toolkit';

export const daypicture = createSlice({
    name:'picturedaytoday',
    initialState:{
        dayinfo:[],
        movement: false
    },
    reducers: {
        agregarInfo : (state, action) => {
            state.movement=true
            state.dayinfo=[...state.dayinfo,action.payload]
        }
    }
})

export const NasaSearch = createSlice({
    name:'searchnasainfo',
    initialState:{
        nasainfo:[],
        movement: false
    },
    reducers: {
        searchInfo : (state, action) => {
            state.movement=true
            state.nasainfo=[...state.nasainfo,action.payload]
        }
    }
})

export const {searchInfo} = NasaSearch.actions;
export const {agregarInfo} = daypicture.actions;