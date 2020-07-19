import React from 'react';
import { useSelector } from 'react-redux';
import { selectBeerList, selectFavoriteList } from './beerListSlice';

import BeerFilter from './beerFilter/BeerFilter';
import Beer from './beer/Beer';
import LoadButton from './loadButton/LoadButton';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerList = ({ classes }) => {
    const beerList = useSelector(selectBeerList);
    const favoriteList = useSelector(selectFavoriteList);

    const beers = beerList.map(beer => (
        <Beer key={beer.id} beer={beer} fav={favoriteList.includes(beer.id)} />
    ));

    return (
        <>
            <div className={classes.root}>
                <BeerFilter />
                {beers}
            </div>
            <LoadButton />
        </>
    );
};

export default withStyles(styles)(BeerList);
