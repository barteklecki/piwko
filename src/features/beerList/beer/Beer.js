import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addFavorite, removeFavorite } from '../../favouritesList/favouritesListSlice';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Beer = ({ classes, beer, fav }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const clickBeerHandler = () => {
        history.push(`beer/${beer.id}`);
    };

    let favButton = <IconButton
                        aria-label="add to favorites"
                        onClick={() => dispatch(addFavorite(beer.id))}
                    >
                        <FavoriteBorderIcon />
                    </IconButton>
    if(fav) {
        favButton = <IconButton
                        aria-label="remove from favorites"
                        onClick={() => dispatch(removeFavorite(beer.id))}
                        >
                            <FavoriteIcon color="secondary" />
                    </IconButton>
    }

    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <div onClick={clickBeerHandler} className={classes.details}>
                    <Typography variant="h5" component="h2">
                        {beer.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {beer.tagline}
                    </Typography>
                    <Typography variant="body2" component="p">
                        First brewed: {beer.first_brewed}
                    </Typography>
                </div>
                <CardActions>
                    {favButton}
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </CardContent>
            <CardMedia
                onClick={clickBeerHandler}
                className={classes.cover}
                image={beer.image_url}
                title={beer.name}
            />
        </Card>
    );
};

export default withStyles(styles)(Beer);
