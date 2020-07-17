import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerFilter = ({ classes }) => {

    return (
        <div className={classes.root}>
            [ Beer Filter ]
        </div>
    );
};

export default withStyles(styles)(BeerFilter);
