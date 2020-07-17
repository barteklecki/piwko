import { createSlice } from '@reduxjs/toolkit';

import { dummyList } from '../../utils/dummyApi';

export const beerListSlice = createSlice({
    name: 'beerList',
    initialState: {
        beerList: dummyList,
        beerFilter: [],
        isFetching: false,
        errorMessage: '',
    },
    reducers: {
        fetchBeerList: state => {
            //
            state.isFetching = false;
        },
        resetBeerList: state => {
            state.beerList = [];
        },
        setBeerFilter: state => {
            //
        },
        resetBeerFilter: state => {
            state.beerFilter = [];
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
        setErrorMessage: state => {
            //
        },
    },
});

export const { fetchBeerList, resetBeerList, setBeerFilter, resetBeerFilter, setFetchingFlag, setErrorMessage } = beerListSlice.actions;

export const selectBeerList = state => state.beerList.beerList;
export const selectBeerFilter = state => state.beerList.beerFilter;
export const selectFetchingFlag = state => state.beerList.isFetching;

export default beerListSlice.reducer;
