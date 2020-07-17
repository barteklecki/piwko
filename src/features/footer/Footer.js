import React from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        //
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor:
          theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
}));

const Footer = () => {
    const classes = useStyles();

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

export default Footer;
