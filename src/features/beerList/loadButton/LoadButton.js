import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBeerListLength, selectFetchingFlag, fetchNextPage } from '../beerListSlice';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const LoadButton = ({ classes }) => {
    const isFetching = useSelector(selectFetchingFlag);
    const beerListLength = useSelector(selectBeerListLength);
    const dispatch = useDispatch();

    return <Button className={classes.root}
                onClick={() => dispatch(fetchNextPage(beerListLength))}
                variant="outlined"
                color="default"
                size="large"
                disabled={isFetching}
            >
                {isFetching ? 'Loading...' : 'Load more'}
            </Button>
};

export default withStyles(styles)(LoadButton);
