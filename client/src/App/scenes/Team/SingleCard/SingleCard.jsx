import React, { useState } from 'react';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import RingIcon from '@material-ui/icons/RingVolume';
import GraphicIcon from '@material-ui/icons/GraphicEq';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { singleCardStyles } from "./singleCardStyles";

export const SingleCard = ({ userName }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getCurrentTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ' -- ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    return date;
  }

  return (
    <div className={singleCardStyles.cardWrapper}>
      <Card className={singleCardStyles.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={singleCardStyles.avatar}>
              R
      </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          subheader={getCurrentTime()}
        />
        <CardMedia
          className={singleCardStyles.media}
          image="./images/kitty.jpg"
          alt="should be rendering yo"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Current Condition:

             <Typography variant="inline" color="textSecondary" component="b">
              good
            </Typography>
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <GraphicIcon />
          </IconButton>
          <IconButton aria-label="add to favorites">
            <RingIcon />
          </IconButton>

          <IconButton
            className={clsx(singleCardStyles.expand, {
              [singleCardStyles.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
              minutes.
      </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
              heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
              browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
              pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
              saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </Typography>
            <Typography paragraph>
              Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
              without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
              medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
              again without stirring, until mussels have opened and rice is just tender, 5 to 7
              minutes more. (Discard any mussels that don’t open.)
      </Typography>
            <Typography>
              Set aside off of the heat to let rest for 10 minutes, and then serve.
      </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>

  );
}