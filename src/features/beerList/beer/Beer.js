import React from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Beer = ({classes}) => {

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Punk IPA 2007 - 2010
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    Post Modern Classic. Spiky. Tropical. Hoppy.
                </Typography>
                <Typography variant="body2" component="p">
                first brewed: 04/2007
                </Typography>
                <CardActions>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <Button>
                        Learn More
                    </Button>
                </CardActions>
            </CardContent>
            <CardMedia
                className={classes.cover}
                image="https://images.punkapi.com/v2/192.png"
                title="Punk IPA 2007 - 2010"
            />
        </Card>
    );
};

export default withStyles(styles)(Beer);
