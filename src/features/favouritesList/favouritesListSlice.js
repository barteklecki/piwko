import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const setLocalStorage = (key, arr) =>
    window.localStorage.setItem(key, JSON.stringify(arr));
const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));

const itemsPerPage = 12;
const API_URL = 'https://api.punkapi.com/v2/beers';

export const favouritesListSlice = createSlice({
    name: 'favouritesList',
    initialState: {
        favouritesList: [],
        favouritesIndexes: getLocalStorage('favList') ?? [],
        isFetching: false,
        errorMessage: null,
    },
    reducers: {
        fetchBeerSuccess: (state, action) => {
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
            const index = state.favoriteList.indexOf(id);

            if (index === -1) {
                state.favoriteList.push(id);
            } else {
                state.favoriteList.splice(index, 1);
            }

            setLocalStorage('favList', state.favoriteList);
        },
        errorMessage: (state, { payload }) => {
            state.isFetching = false;
            state.errorMessage = payload;
        },
    },
});

export const {
    fetchBeerSuccess,
    setFetchingFlag,
    toggleFavorite,
    removeFavorite,
    errorMessage,
} = favouritesListSlice.actions;

export const selectFavouritesList = state => state.favouritesList.favouritesList;
export const selectFavouritesIndexes = state => state.favouritesList.favouritesIndexes;
export const selectFetchingFlag = state => state.favouritesList.isFetching;

export default favouritesListSlice.reducer;

export const fetchNextPage = (listLength = 0) => async dispatch => {
    let pageNum = Math.floor( listLength / itemsPerPage) + 1;
    dispatch(setFetchingFlag());

    try {
        const url = `${API_URL}?page=${pageNum}&per_page=${itemsPerPage}`;
        const response = await axios.get(url);
        const data = response.data;
        //dispatch(fetchBeerListSuccess(data));
    } catch (error) {
        dispatch(errorMessage(error));
        console.log(error);
    }
};
