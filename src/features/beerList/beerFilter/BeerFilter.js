import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        //
    },
}));

const BeerFilter = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            [ Beer Filter ]
        </div>
    );
};

export default BeerFilter;
