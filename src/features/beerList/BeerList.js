import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        //
    },
}));

const BeerList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            [ Beer List ]
        </div>
    );
};

export default BeerList;
