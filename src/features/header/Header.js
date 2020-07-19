import React from 'react';

import logo from '../../app/logo192.png';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes }) => {

    return (
        <header  className={classes.header} >
            <img src={logo} className={classes.logo} alt="logo" />
             [ Beer Catalogue ] [ Favourite Beers ]
        </header>
    );
};

export default withStyles(styles)(Header);
