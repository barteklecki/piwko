import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchPageFromApi } from './features/beerList/beerListSlice';

import BeerList from './features/beerList/BeerList';
import BeerDetails from './features/beerDetails/BeerDetails';
import Footer from './features/footer/Footer';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './app/theme';

import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(theme => ({
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
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPageFromApi());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <div className={classes.root}>
                    <CssBaseline />
                    <Container
                        component="main"
                        className={classes.main}
                        maxWidth="lg"
                    >
                        <Switch>
                            <Route path="/list" component={BeerList} />
                            <Route path="/beer/:id" component={BeerDetails} />
                            <Route path="/beer" component={BeerDetails} />
                            <Redirect to="/list" />
                        </Switch>
                    </Container>
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
};

export default App;
