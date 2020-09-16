import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import Divider from "@material-ui/core/Divider";
import Bar from "./TripleBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const StorageCard = (props) => {
  const { classes, storageObject } = props;

  const { block, file } = storageObject;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {storageObject.name}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Path: {storageObject.path}
        </Typography>

        <Divider
          style={{
            marginTop: "3px",
          }}
        />
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {`Using ${block.usage} out of ${block.limit} available`}
          </Typography>
          <Bar
            barObject={{
              first: block.usage,
              second: block.limit - block.usage,
              third: 0,
            }}
          />
        </div>

        <div
          style={{
            marginTop: "20px",
          }}
        >
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {`Using ${file.usage} out of ${file.limit} files available`}
          </Typography>
          <Bar
            barObject={{
              first: file.usage,
              second: file.limit - file.usage,
              third: 0,
            }}
          />
        </div>
      </CardContent>
      {/* <CardActions> */}
      {/*   <Button color="primary" size="small"> */}
      {/*     Learn More */}
      {/*   </Button> */}
      {/* </CardActions> */}
    </Card>
  );
};

const StorageCardGrid = (props) => {
  const { storageData } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {storageData.map((storageObject, index) => (
          <Grid item xs={6} key={storageObject.name} >
            <StorageCard classes={classes} storageObject={storageObject} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default StorageCardGrid;
