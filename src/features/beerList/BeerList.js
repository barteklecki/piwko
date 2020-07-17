import React from 'react';

import BeerFilter from './beerFilter/BeerFilter';
import Beer from './beer/Beer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        //
    },
}));

const BeerList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BeerFilter />
            <Beer />
        </div>
    );
};

export default BeerList;
