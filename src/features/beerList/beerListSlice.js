import { createSlice } from '@reduxjs/toolkit';

import { dummyList } from '../../utils/dummyApi';

export const beerList = createSlice({
    name: 'beerList',
    initialState: {
        beerList: [{id: 1}, {id: 2}, {id: 3}],
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

export const { fetchBeerList, resetBeerList, setBeerFilter, resetBeerFilter, setFetchingFlag, setErrorMessage } = beerList.actions;

export const selectBeerList = state => state.beerList;
export const selectBeerFilter = state => state.beerFilter;
export const selectFetchingFlag = state => state.isFetching;

export default beerList.reducer;
