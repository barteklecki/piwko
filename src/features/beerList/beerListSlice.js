import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiUrl, itemsPerPage, getLocalStorage } from '../../app/config';

export const beerListSlice = createSlice({
    name: 'beerList',
    initialState: {
        beerList: [],
        favoriteList: getLocalStorage('favList') ?? [],
        selectedBeer: null,
        isFetching: false,
        errorMessage: null,
    },
    reducers: {
        fetchBeerListSuccess: (state, action) => {
            state.beerList = state.beerList.concat(action.payload);
            state.isFetching = false;
            state.errorMessage = null;
        },
        fetchBeer: (state, action) => {
            //
            console.log('fetchBeer:', action.payload);
            state.isFetching = false;
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
        errorMessage: (state, { payload }) => {
            state.isFetching = false;
            state.errorMessage = payload;
        },
    },
});

export const {
    fetchBeerListSuccess,
    setFetchingFlag,
    errorMessage,
} = beerListSlice.actions;

export const selectBeerList = state => state.beerList.beerList;
export const selectBeerListLength = state => state.beerList.beerList.length;
export const selectFavoriteList = state => state.beerList.favoriteList;
export const selectFetchingFlag = state => state.beerList.isFetching;

export const selectBeer = state => {
    const beer = state.beerList.beerList.filter(
        beer => beer.id === state.beerList.selectedBeer
    );
    return beer.length ? beer : null;
};

export const selectBeerById = (state, id) => {
    const beer = state.beerList.beerList.filter(beer => beer.id === id);
    return beer.length ? beer : null;
};

export default beerListSlice.reducer;

export const fetchNextPage = (listLength = 0) => async dispatch => {
    let pageNum = Math.floor( listLength / itemsPerPage) + 1;
    dispatch(setFetchingFlag());

    try {
        const url = `${apiUrl}?page=${pageNum}&per_page=${itemsPerPage}`;
        const response = await axios.get(url);
        const data = response.data;
        dispatch(fetchBeerListSuccess(data));
    } catch (error) {
        dispatch(errorMessage(error));
        console.log(error);
    }
};
