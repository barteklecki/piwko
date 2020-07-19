import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes }) => {

    return (
        <div  className={classes.header} >
            [ Logo ] [ Beer Catalogue ] [ Favourite Beers ]
        </div>
    );
};

export default withStyles(styles)(Header);
