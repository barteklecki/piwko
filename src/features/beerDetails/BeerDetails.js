import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectBeer, setSelectedBeer } from '../beerList/beerListSlice';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const BeerDetails = ({ classes, match }) => {
    const { params: { id } } = match;

    const dispatch = useDispatch();
    useEffect(() => {
        if(id) {
            dispatch(setSelectedBeer(id));
        }

    }, [dispatch, id]);

    const beer = useSelector(selectBeer);
    console.log(beer);


    return (
        <Card className={classes.root}>
            <CardContent className={classes.summary}>
                <Typography
                    className={classes.text}
                    component="h4"
                    variant="h4"
                    aria-label="title"
                >
                    Punk IPA 2007 - 2010
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    aria-label="tagline"
                >
                    Post Modern Classic. Spiky. Tropical. Hoppy.
                </Typography>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <div className={classes.rating}>
                    <Chip
                        label={82.14}
                        color="secondary"
                    />
                    <Chip
                        label={6.0}
                        color="primary"
                    />
                </div>
                <Typography
                    className={classes.text}
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    first_brewed: 04/2007
                </Typography>
                <Divider className={classes.text} variant="middle" />
                <Typography
                    className={classes.text}
                    variant="subtitle1"
                    color="textSecondary"
                >
                    attenuation_level: 82.14
                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image="https://images.punkapi.com/v2/192.png"
                title="Punk IPA 2007 - 2010"
            />
            <CardContent className={classes.content}>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    component="div"
                >
                    description": "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.
                </Typography>
            </CardContent>
        </Card>
    );
};

export default withStyles(styles)(BeerDetails);
