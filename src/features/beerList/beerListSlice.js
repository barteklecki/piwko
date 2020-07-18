import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const setLocalStorage = (key, arr) =>
    window.localStorage.setItem(key, JSON.stringify(arr));
const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));

const itemsPerPage = 12;
const API_URL = 'https://api.punkapi.com/v2/beers';

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
            state.errorMessage = '';
        },
        fetchBeer: (state, action) => {
            //
            console.log('fetchBeer:', action.payload);
            state.isFetching = false;
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
        resetBeerList: state => {
            state.beerList = [];
        },
        toogleFavorite: (state, action) => {
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
    fetchBeerListSuccess,
    fetchBeer,
    setFetchingFlag,
    resetBeerList,
    toogleFavorite,
    errorMessage,
} = beerListSlice.actions;

export const selectBeerList = state => state.beerList.beerList;
export const selectFavoriteList = state => state.beerList.favoriteList;

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

export const fetchPageFromApi = () => async dispatch => {
    let pageNum = Math.floor(0 / itemsPerPage) + 1;
    dispatch(setFetchingFlag());
    try {
        const url = `${API_URL}?page=${pageNum}&per_page=${itemsPerPage}`;
        const response = await axios.get(url);
        const data = response.data;
        dispatch(fetchBeerListSuccess(data));
    } catch (error) {
        dispatch(errorMessage(error));
        console.log(error);
    }
};
