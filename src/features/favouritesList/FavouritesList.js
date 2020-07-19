import React from 'react';
import { useSelector } from 'react-redux';
import { selectFavouritesList, selectFavouritesIndexes } from './favouritesListSlice';

import Beer from '../beerList/beer/Beer';
import LoadButton from '../beerList/loadButton/LoadButton';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FavouritesList = ({ classes }) => {
    const favouritesList = useSelector(selectFavouritesList);
    const favouritesIndexes = useSelector(selectFavouritesIndexes);

    const beers = favouritesList.map(beer => (
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

export default withStyles(styles)(FavouritesList);
