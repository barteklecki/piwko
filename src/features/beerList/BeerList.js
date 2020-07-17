import React from 'react';

import BeerFilter from './beerFilter/BeerFilter';
import Beer from './beer/Beer';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '1rem',
        gridAutoRows: 'minmax(300px, auto)',
        gridAutoColumns: 'minmax(300px, auto)', 
    },
    filters: {
        gridColumn: 'first / end',
    },
}));

const BeerList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <BeerFilter  className={classes.root} />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
            <Beer />
        </div>
    );
};

export default BeerList;
