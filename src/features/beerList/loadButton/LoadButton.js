import React from 'react';

import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const LoadButton = ({ classes }) => {
    const isFetching = false;

    let button = <Button className={classes.root}
                    variant="outlined"
                    color="default"
                    size="large"
                >
                    Load more
                </Button>
    if (isFetching) {
        button = <Button className={classes.root}
                    variant="outlined"
                    color="default"
                    size="large"
                    disabled
                >
                    Loading...
                </Button>
    } 

    return button;
};

export default withStyles(styles)(LoadButton);
