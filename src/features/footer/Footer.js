import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Footer = ({ classes }) => {
    return (
        <footer className={classes.footer}>
            <Container maxWidth="sm">
            <Typography variant="body1">
                Based on PUNK Api
            </Typography>
            <Typography variant="body2" color="textSecondary">
                {'Copyright © '}
                <Link color="inherit" href="https://github.com/barteklecki/">
                    GH/barteklecki
                </Link>{' 2020.'}
            </Typography>
            </Container>
        </footer>
    );
};

export default withStyles(styles)(Footer);
