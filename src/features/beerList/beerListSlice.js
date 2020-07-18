import { createSlice } from '@reduxjs/toolkit';
//import { dummyList } from '../../utils/dummyApi';
import axios from 'axios';

const setLocalStorage = (key, arr) =>
    window.localStorage.setItem(key, JSON.stringify(arr));
const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));

const itemsPerPage = 12;
const API_URL='https://api.punkapi.com/v2/beers'; 

export const beerListSlice = createSlice({
    name: 'beerList',
    initialState: {
        //beerList: [dummyList],
        beerList: [],
        favoriteList: getLocalStorage('favList') ?? [],
        selectedBeer: null,
        isFetching: false,
        errorMessage: null,
    },
    reducers: {
        fetchBeerList: (state, action) => {
            //
            console.log('fetchBeerList:', action.payload);
            state.isFetching = false;
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
        errorMessage: (state, {payload}) => {
            state.isFetching = false;
            state.errorMessage = payload;
        },
    },
});

export const {
    fetchBeerList,
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

export const fetchPageFromApi = state => async dispatch => {
    dispatch(setFetchingFlag());
    try {
        let pageNum = Math.floor(state.beerList.lenght / itemsPerPage) + 1;
        const response = await axios.get(`${API_URL}?page=${pageNum}&per_page=${itemsPerPage}`);
        console.log('response:', response);
        state.beerlist.concat(response);
        state.isFetching = false;
    } catch (error) {
        dispatch(errorMessage(error));
        console.log(error);
    }
}