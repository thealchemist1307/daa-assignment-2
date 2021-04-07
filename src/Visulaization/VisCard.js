import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const styles = () => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});
class VisCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const classes = styles();
    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              The solution to the measure problem is{" "}
              {this.props.measure.slice(1)}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            onClick={() => {
              this.props.openModal();
            }}
            size="small"
            color="primary"
          >
            Show Countour Visualization
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default VisCard;
