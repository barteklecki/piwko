import React from 'react';

import BeerList from './features/beerList/BeerList';
import Footer from './features/footer/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

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
                <Footer />
            </div>
        </ThemeProvider>
    );
}

export default App;
