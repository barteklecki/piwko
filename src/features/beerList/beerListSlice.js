import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'beerList',
    initialState: {
        beerList: [],
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
