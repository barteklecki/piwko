import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFavouritesList, selectFavouritesIndexes, fetchSelectedBeers } from './favouritesListSlice';

import Beer from '../beerList/beer/Beer';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FavouritesList = ({ classes }) => {
    const favouritesList = useSelector(selectFavouritesList);
    const favouritesIndexes = useSelector(selectFavouritesIndexes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSelectedBeers(favouritesIndexes));
    }, [dispatch, favouritesIndexes]);

    const beers = favouritesList.map(beer => (
        <Beer key={beer.id} beer={beer} fav={favouritesIndexes.includes(beer.id)} />
    ));

    return (
            <div className={classes.root}>
                {beers}
            </div>
    );
};

export default withStyles(styles)(FavouritesList);
