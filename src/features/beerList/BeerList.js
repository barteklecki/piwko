import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBeerList, selectFavoriteList, fetchPageFromApi } from './beerListSlice';

import BeerFilter from './beerFilter/BeerFilter';
import Beer from './beer/Beer';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerList = ({ classes }) => {
    const beerList = useSelector(selectBeerList);
    const favoriteList = useSelector(selectFavoriteList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPageFromApi());
    }, [dispatch]);

    const beers = beerList.map(beer => (
        <Beer key={beer.id} beer={beer} fav={favoriteList.includes(beer.id)} />
    ));

    return (
        <div className={classes.root}>
            <BeerFilter />
            {beers}
        </div>
    );
};

export default withStyles(styles)(BeerList);
