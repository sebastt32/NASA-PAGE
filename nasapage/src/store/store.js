import { configureStore } from '@reduxjs/toolkit';
import { daypicture } from './miSlice';
import { NasaSearch } from './miSlice';
import { Nasacuriosity } from './miSlice';

export default configureStore({
  reducer:{
    picturedaytoday:daypicture.reducer,
    nasainfo:NasaSearch.reducer,
    nasainfocuriosity:Nasacuriosity.reducer,
  }
})