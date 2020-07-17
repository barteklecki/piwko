import React from 'react';
import BeerFilter from '../beerFilter/BeerFilter';

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
            [ Beer List ]
        </div>
    );
};

export default BeerList;
