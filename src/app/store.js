import { configureStore } from '@reduxjs/toolkit';
import beerListReducer from '../features/beerList/beerListSlice';
import favouritesListReducer from '../features/favouritesList/favouritesListSlice';


export default configureStore({
  reducer: {
    beerList: beerListReducer,
    favouritesList: favouritesListReducer,
  },
});
