import { configureStore } from '@reduxjs/toolkit';
import { daypicture } from './miSlice';

export default configureStore({
  reducer:{
    picturedaytoday:daypicture.reducer,
  }
})