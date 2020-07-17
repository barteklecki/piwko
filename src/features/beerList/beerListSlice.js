import { createSlice } from '@reduxjs/toolkit';

import { dummyList } from '../../utils/dummyApi';

export const counterSlice = createSlice({
    name: 'beerList',
    initialState: {
        beerList: dummyList,
        beerFilter: [],
        isFetching: false,
        errorMessage: '',
    },
    reducers: {
        fetchBeerList: state => {
            return state;
        },
        resetBeerList: state => {
            state.beerList = [];
        },
        setBeerFilter: state => {
            return state;
        },
        resetBeerFilter: state => {
            state.beerFilter = [];
        },
        setFetchingFlag: state => {
            state.isFetching = true;
        },
        setErrorMessage: state => {
            return state;
        },
    },
});

export const { fetchBeerList, resetBeerList, setBeerFilter, resetBeerFilter, setFetchingFlag, setErrorMessage } = counterSlice.actions;

export const selectBeerList = state => state.beerList;
export const selectBeerFilter = state => state.beerFilter;
export const selectFetchingFlag = state => state.isFetching;

export default counterSlice.reducer;
