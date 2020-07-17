import React from 'react';

import BeerFilter from './beerFilter/BeerFilter';
import Beer from './beer/Beer';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerList = ({classes}) => {

    return (
        <div className={classes.root}>
            <BeerFilter/>
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

export default withStyles(styles)(BeerList);
