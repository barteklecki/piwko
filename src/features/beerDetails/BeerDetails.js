import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectBeerList } from '../beerList/beerListSlice';

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
    const beers = useSelector(selectBeerList);
    const dispatch = useDispatch();
    const { params: { id } } = match;

    if (!beers) {
        return <Redirect to="/" />;
    }

    const beer = beers.find( beer => +beer.id === +id);

    const beerDetails =
        <Card className={classes.root}>
            <CardContent className={classes.summary}>
                <Typography
                    className={classes.text}
                    component="h4"
                    variant="h4"
                    aria-label="title"
                >
                    {beer.name}
                </Typography>
                <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    aria-label="tagline"
                >
                    {beer.tagline}
                </Typography>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <div className={classes.chips}>
                    <Chip
                        label={`ABV: ${beer.abv}`}
                        color="primary"
                    />
                    <Chip
                        label={`IBU: ${beer.ibu}`}
                        color="primary"
                    />
                    <Chip
                        label={`EBC: ${beer.ebc}`}
                        color="primary"
                    />
                </div>
                <div className={classes.chips}>
                    <Chip
                        label={`SRM: ${beer.srm}`}
                        color="secondary"
                    />
                    <Chip
                        label={`pH: ${beer.ph}`}
                        color="secondary"
                    />
                </div>
                <Typography
                    className={classes.text}
                    variant="h6"
                    color="textSecondary"
                    aria-label="genere"
                >
                    first brewed: {beer.first_brewed}
                </Typography>
                <Divider className={classes.text} variant="middle" />
                <Typography
                    className={classes.text}
                    variant="subtitle1"
                    color="textSecondary"
                >
                    <p>attenuation level: {beer.attenuation_level}</p>
                    <p>volume: {`${beer.volume.value} ${beer.volume.unit}`}</p>
                    <p>boil volume: {`${beer.boil_volume.value} ${beer.boil_volume.unit}`}</p>

                </Typography>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image={beer.image_url}
                title={beer.name}
            />
            <CardContent className={classes.content}>
                <Typography
                    variant="body1"
                    color="textSecondary"
                    component="div"
                >
                    {beer.description}
                </Typography>
            </CardContent>
        </Card>

    return beerDetails;
};

export default withStyles(styles)(BeerDetails);
