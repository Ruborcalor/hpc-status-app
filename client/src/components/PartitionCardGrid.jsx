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

const PartitionCard = (props) => {
  const { classes, partitionObject } = props;

  const { nodes, processors, jobs } = partitionObject;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {partitionObject.name}
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
            {`${nodes.active} of ${nodes.active + nodes.draining + nodes.free} Nodes Active (${nodes.draining} Draining. ${nodes.free} Free)`}
          </Typography>
          <Bar barObject={{
            first: nodes.active,
            second: nodes.draining,
            third: nodes.free
          }} />
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
            {`${processors.active} of ${processors.total} Processors Active (${processors.draining} Draining. ${processors.free} Free)`}
          </Typography>
          <Bar barObject={{
            first: processors.active,
            second: processors.draining,
            third: processors.free
          }} />
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
            {`${jobs.running} of ${jobs.running + jobs.queued + jobs.blocked} Jobs Active (${jobs.queued} Queued. ${jobs.blocked} Blocked)`}
          </Typography>
          <Bar barObject={{
            first: jobs.running,
            second: jobs.queued,
            third: jobs.blocked
          }} />
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

const PartitionCardGrid = (props) => {
  const { partitionData } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {partitionData.map((partitionObject, index) => (
          <Grid item xs={6}>
            <PartitionCard
              classes={classes}
              partitionObject={partitionObject}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PartitionCardGrid;
