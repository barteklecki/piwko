import React from 'react';
import { useSelector } from 'react-redux';
import { selectBeerList } from './beerListSlice';

import BeerFilter from './beerFilter/BeerFilter';
import Beer from './beer/Beer';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerList = ({classes}) => {
    const beerList = useSelector(selectBeerList);
    console.log(beerList);

    const beers = beerList.map( beer => 
        <Beer beer={beer} key={beer.id} />
    );

    return (
        <div className={classes.root}>
            <BeerFilter />
            {beers}
        </div>
    );
};

export default withStyles(styles)(BeerList);
