import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../app/logo192.png';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Header = ({ classes }) => {
    const history = useHistory();

    return (
        <header  className={classes.header} >
            <Button 
                onClick={() => history.push('/list')}
                className={classes.button}
                variant="outlined"
            >
                Beer Catalogue
            </Button>
            <img src={logo} className={classes.logo} alt="logo" />
            <Button 
                onClick={() => history.push('/favourites')}
                className={classes.button}
                variant="outlined"
            >
                Favourite Beers
            </Button>
        </header>
    );
};

export default withStyles(styles)(Header);
