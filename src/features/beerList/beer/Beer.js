import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        //
    },
}));

const Beer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            [ Beer ]
        </div>
    );
};

export default Beer;
