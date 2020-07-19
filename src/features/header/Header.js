import React from 'react';

import logo from '../../app/logo192.png';
import Button from '@material-ui/core/Button';


import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes }) => {

    return (
        <header  className={classes.header} >
            <Button 
                className={classes.button}
                variant="outlined" 
            >
                Beer Catalogue
            </Button>
            <img src={logo} className={classes.logo} alt="logo" />
            <Button 
                className={classes.button}
                variant="outlined" 
            >
                Favourite Beers
            </Button>
        </header>
    );
};

export default withStyles(styles)(Header);
