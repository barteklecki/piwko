import { createSlice } from '@reduxjs/toolkit';

import { dummyList } from '../../utils/dummyApi';

export const beerListSlice = createSlice({
    name: 'beerList',
    initialState: {
        beerList: dummyList,
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
        resetBeerList: state => {
            state.beerList = [];
        },
        setSelectedBeer: (state, action) => {
            state.selectedBeer = +action.payload;
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
    },
});

export const { fetchBeerList, fetchBeer, resetBeerList, setSelectedBeer, setFetchingFlag } = beerListSlice.actions;

export const selectBeerList = state => state.beerList.beerList;

export const selectBeer = state => {
    const beer = state.beerList.beerList.filter( beer => beer.id === state.beerList.selectedBeer );
    return beer.length ? beer : null;
}

export const selectBeerById = (state, id) => {
    const beer = state.beerList.beerList.filter( beer => beer.id === id );
    return beer.length ? beer : null;
}

export default beerListSlice.reducer;
