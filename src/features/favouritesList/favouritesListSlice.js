import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrl, getLocalStorage, setLocalStorage } from '../../app/config';

export const favouritesListSlice = createSlice({
    name: 'favouritesList',
    initialState: {
        favouritesList: [],
        favouritesIndexes: getLocalStorage('favList') ?? [],
        isFetching: false,
        errorMessage: null,
    },
    reducers: {
        fetchSelectedBeersSuccess: (state, action) => {
            //
            console.log('fetchBeer:', action.payload);
            state.isFetching = false;
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
        toggleFavorite: (state, action) => {
            const id = action.payload;
            const index = state.favouritesIndexes.indexOf(id);

            if (index === -1) {
                state.favouritesIndexes.push(id);
            } else {
                state.favouritesIndexes.splice(index, 1);
            }

            setLocalStorage('favList', state.favouritesIndexes);
        },
        removeFavorite: (state, action) => {
            const id = action.payload;
            let index = -1;

            index = state.favouritesIndexes.indexOf(id);
            if (!index === -1) {
                state.favoriteList.splice(index, 1);
            }

            index = state.favouritesList.indexOf(id);
            if (!index === -1) {
                state.favouritesList.splice(index, 1);
            }

            setLocalStorage('favList', state.favouritesIndexes);
        },
        errorMessage: (state, { payload }) => {
            state.isFetching = false;
            state.errorMessage = payload;
        },
    },
});

export const {
    fetchSelectedBeersSuccess,
    setFetchingFlag,
    toggleFavorite,
    removeFavorite,
    errorMessage,
} = favouritesListSlice.actions;

export const selectFavouritesList = state => state.favouritesList.favouritesList;
export const selectFavouritesIndexes = state => state.favouritesList.favouritesIndexes;
export const selectFetchingFlag = state => state.favouritesList.isFetching;

export default favouritesListSlice.reducer;

export const fetchSelectedBeers = ids => async dispatch => {
    const idsPipeSeparated = ids.join('|');
    dispatch(setFetchingFlag());

    try {
        const url = `${apiUrl}?ids=${idsPipeSeparated}`;
        const response = await axios.get(url);
        const data = response.data;
        dispatch(fetchSelectedBeersSuccess(data));
    } catch (error) {
        dispatch(errorMessage(error));
        console.log(error);
    }
};