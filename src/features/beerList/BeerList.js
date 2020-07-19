import React from 'react';
import { useSelector } from 'react-redux';
import { selectBeerList } from './beerListSlice';
import { selectFavouritesIndexes } from '../favouritesList/favouritesListSlice';

import Beer from './beer/Beer';
import LoadButton from './loadButton/LoadButton';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerList = ({ classes }) => {
    const beerList = useSelector(selectBeerList);
    const favouritesIndexes = useSelector(selectFavouritesIndexes);

    const beers = beerList.map(beer => (
        <Beer key={beer.id} beer={beer} fav={favouritesIndexes.includes(beer.id)} />
    ));

    return (
        <>
            <div className={classes.root}>
                {beers}
            </div>
            <LoadButton />
        </>
    );
};

export default withStyles(styles)(BeerList);
