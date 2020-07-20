import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectFavouritesList,
    selectFavouritesIndexes,
    selectFetchingFlag,
    fetchSelectedBeers,
} from './favouritesListSlice';

import Beer from '../beerList/beer/Beer';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const FavouritesList = ({ classes }) => {
    const favouritesList = useSelector(selectFavouritesList);
    const favouritesIndexes = useSelector(selectFavouritesIndexes);
    const isFetching = useSelector(selectFetchingFlag);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSelectedBeers(favouritesIndexes));
    }, [dispatch, favouritesIndexes]);

    let beers = favouritesList.map(beer => (
        <Beer
            key={beer.id}
            beer={beer}
            fav={favouritesIndexes.includes(beer.id)}
        />
    ));
    
    if (!beers.length) {
        if (isFetching) {
            beers = (
                <div className={classes.empty}>
                    <Typography component="h4" variant="h4" aria-label="title">
                        Loading...
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Plese, wait for items to be loaded.
                    </Typography>
                    <FavoriteIcon color="secondary" fontSize="large" />
                </div>
            );
        } else {
            beers = (
                <div className={classes.empty}>
                    <Typography component="h4" variant="h4" aria-label="title">
                        Empty!
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="textSecondary"
                    >
                        Add beers from catalogue to favourites!
                    </Typography>
                    <FavoriteIcon color="secondary" fontSize="large" />
                </div>
            );
        }
        
    }

    return <div className={classes.root}>{beers}</div>;
};

export default withStyles(styles)(FavouritesList);
