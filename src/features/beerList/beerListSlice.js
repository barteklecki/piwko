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
        fetchBeerList: state => {
            //
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

export const { fetchBeerList, resetBeerList, setSelectedBeer, setFetchingFlag } = beerListSlice.actions;

export const selectBeerList = state => state.beerList.beerList;

export const selectBeer = state => state.beerList.beerList.filter( beer => beer.id === state.beerList.selectedBeer );

export default beerListSlice.reducer;
