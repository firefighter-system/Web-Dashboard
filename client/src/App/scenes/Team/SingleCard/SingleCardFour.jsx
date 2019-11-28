import React from 'react';

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

import firebaseConfig from "../../../firebase";

class SingleCardFour extends React.Component {

  state = {
    expanded: false,
    user_data: null
  }

  componentDidMount() {
    var database = firebaseConfig.database();

    var ref = database.ref('pi_data/users/usr4');
    ref.on('value', data => {
      console.log(data.val())
      this.setState({
        user_data: data.val()
      })
    })
  }

  render() {

    let date_object = {
      chestTemperature: 0,
      externalTemperature: 0,
      heartRate: 0,
      humidity: 0
    }

    let userData = this.state.user_data ? this.state.user_data : date_object

    const handleExpandClick = () => {
      this.setState({
        expanded: !this.state.expanded
      })
    }

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
                4
        </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={'User 4'}
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

               <Typography variant="inline" color="textSecondary" component="b">
                <div>
                  <p>
                    Heart Rate: {userData[Object.keys(userData)[Object.keys(userData).length-1]] ? userData[Object.keys(userData)[Object.keys(userData).length-1]].heartRate : 0 }
                  </p>
                  <p>
                    Body Temperature: {userData[Object.keys(userData)[Object.keys(userData).length-1]] ? userData[Object.keys(userData)[Object.keys(userData).length-1]].chestTemperature : 0} 
                  </p>
                  <p>
                    External Temperature: {userData[Object.keys(userData)[Object.keys(userData).length-1]] ? userData[Object.keys(userData)[Object.keys(userData).length-1]].externalTemperature : 0 }
                  </p>
                  <p>
                    External Pressure: { userData[Object.keys(userData)[Object.keys(userData).length-1]] ? userData[Object.keys(userData)[Object.keys(userData).length-1]].humidity : 0 }
                  </p>
                </div>
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
                [singleCardStyles.expandOpen]: this.state.expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>Good Condition</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </div>
  
    );
  }
}

export default SingleCardFour;