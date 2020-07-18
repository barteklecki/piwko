import { createSlice } from '@reduxjs/toolkit';
import { dummyList } from '../../utils/dummyApi';

const setLocalStorage = (key, arr) => window.localStorage.setItem(key, JSON.stringify(arr));
const getLocalStorage = key => JSON.parse(window.localStorage.getItem(key));

export const beerListSlice = createSlice({
    name: 'beerList',
    initialState: {
        beerList: dummyList,
        favoriteList: getLocalStorage('favList'),
        selectedBeer: null,
        isFetching: false,
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
    },
});

export const { fetchBeerList, fetchBeer, setFetchingFlag, resetBeerList, toogleFavorite } = beerListSlice.actions;

export const selectBeerList = state => state.beerList.beerList;
export const selectFavoriteList = state => state.beerList.favoriteList;

export const selectBeer = state => {
    const beer = state.beerList.beerList.filter( beer => beer.id === state.beerList.selectedBeer );
    return beer.length ? beer : null;
}

export const selectBeerById = (state, id) => {
    const beer = state.beerList.beerList.filter( beer => beer.id === id );
    return beer.length ? beer : null;
}

export default beerListSlice.reducer;
