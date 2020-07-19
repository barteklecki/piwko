import React from 'react';
import { useSelector } from 'react-redux';
import { selectBeerList, selectFavoriteList } from '../beerList/beerListSlice';

import Beer from '../beerList/beer/Beer';
import LoadButton from '../beerList/loadButton/LoadButton';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FavouritesList = ({ classes }) => {
    const favouritesList = useSelector(selectBeerList);
    const favoriteList = useSelector(selectFavoriteList);

    const beers = favouritesList.map(beer => (
        <Beer key={beer.id} beer={beer} fav={favoriteList.includes(beer.id)} />
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
