import { configureStore } from '@reduxjs/toolkit';
import beerListReducer from '../features/beerList/beerListSlice';

export default configureStore({
  reducer: {
    beerList: beerListReducer,
  },
});
