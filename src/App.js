import React from 'react';

import BeerList from './features/beerList/BeerList';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';

import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const App = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <Container component="main" className={classes.main} maxWidth="sm">
                    <Typography variant="h2" component="h1" gutterBottom>
                    Piwko - search for your favorite beer flavor!
                    </Typography>
                    <BeerList />
                </Container>
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
            </div>
        </ThemeProvider>
    );
}

export default App;
