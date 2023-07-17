import { createSlice } from '@reduxjs/toolkit';
import { fetchImages } from '../Api/middleware';

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
    name: 'nasainfo',
    initialState: {
      data: [],
      loading: false,
      alternator: false,
      error: null,
    },
    reducers: {
      fetchImagesStart: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchImagesSuccess: (state, action) => {
        state.loading = false;
        state.alternator = true;
        state.data = action.payload;
      },
      fetchImagesFailure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export const Nasacuriosity = createSlice({
    name: 'nasainfocuriosity',
    initialState: {
      data: [],
      loading: false,
      alternator: false,
      error: null,
    },
    reducers: {
      fetchImagesStart1: (state) => {
        state.loading = true;
        state.error = null;
      },
      fetchImagesSuccess2: (state, action) => {
        state.loading = false;
        state.alternator = true;
        state.data = action.payload;
      },
      fetchImagesFailure3: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
    },
  });

  export const {
    fetchImagesStart,
    fetchImagesSuccess,
    fetchImagesFailure,
  } = NasaSearch.actions;

  export const {
    fetchImagesStart1,
    fetchImagesSuccess2,
    fetchImagesFailure3,
  } = Nasacuriosity.actions;


export const {agregarInfo} = daypicture.actions;

export const fetchImagesData = (value) => async (dispatch) => {
    try {
      dispatch(fetchImagesStart());
      const data = await fetchImages(value);
      dispatch(fetchImagesSuccess(data));
    } catch (error) {
      dispatch(fetchImagesFailure(error.message));
    }
  };

  export const fetchImagesData1 = (value) => async (dispatch) => {
    try {
      dispatch(fetchImagesStart1());
      const data = await fetchImages(value);
      dispatch(fetchImagesSuccess2(data));
    } catch (error) {
      dispatch(fetchImagesFailure3(error.message));
    }
  };