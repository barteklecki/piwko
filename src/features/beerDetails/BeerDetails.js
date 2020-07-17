import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        //
    },
}));

const BeerDetails = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            [ Beer Filter ]
        </div>
    );
};

export default BeerDetails;
