import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrl, itemsPerPage, getLocalStorage, setLocalStorage } from '../../app/config';

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
            state.favouritesList = action.payload;
            state.isFetching = false;
            state.errorMessage = null;
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
        addFavorite: (state, action) => {
            const id = action.payload;
            const index = state.favouritesIndexes.indexOf(id);

            if (index === -1) {
                state.favouritesIndexes.push(id);
            } 

            setLocalStorage('favList', state.favouritesIndexes);
        },
        removeFavorite: (state, action) => {
            const id = action.payload;
            let index = -1;

            index = state.favouritesList.map( el => el.id ).indexOf(id);
            if (index !== -1) {
                state.favouritesList.splice(index, 1);
            }

            index = state.favouritesIndexes.indexOf(id);
            if (index !== -1) {
                state.favouritesIndexes.splice(index, 1);
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
    addFavorite,
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

export const fetchInitalFavourites = dispatch => {
    const favouritesIndexes = getLocalStorage('favList');

    if (favouritesIndexes.length) {
        let ids = favouritesIndexes.splice(0, itemsPerPage);
        dispatch(fetchSelectedBeers(ids));
    }
}
