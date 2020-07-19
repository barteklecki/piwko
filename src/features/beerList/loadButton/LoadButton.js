import React from 'react';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const LoadButton = ({ classes }) => {
    const isFetching = false;

    return <Button className={classes.root}
                variant="outlined"
                color="default"
                size="large"
                disabled={isFetching}
            >
                {isFetching ? 'Loading...' : 'Load more'}
            </Button>
};

export default withStyles(styles)(LoadButton);
