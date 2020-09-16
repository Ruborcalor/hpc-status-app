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
import FairshareTable from "./FairshareTable";

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

const FairshareCard = (props) => {
  const { classes, fairshareObject } = props;

  const [showTable, setShowTable] = React.useState(false);

  const toggleTable = () => {
    setShowTable(!showTable);
  };

  const { fairshareTableData } = fairshareObject;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {fairshareObject.name}
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
            {`Fairshare of ${fairshareObject.fairshare}`}
          </Typography>
          <Bar
            barObject={{
              first: fairshareObject.fairshare,
              second: 1 - fairshareObject.fairshare,
              third: 0,
            }}
          />
        </div>

        {showTable ? (
          <FairshareTable fairshareTableData={fairshareTableData} />
        ) : null}
      </CardContent>
      <CardActions>
        {showTable ? (
          <Button color="primary" size="small" onClick={() => toggleTable()}>
            Hide Fairshare Usage Breakdown
          </Button>
        ) : (
          <Button color="primary" size="small" onClick={() => toggleTable()}>
            Show Fairshare Usage Breakdown
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

const FairshareCardGrid = (props) => {
  const { fairshareData } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {fairshareData.map((fairshareObject, index) => (
          <Grid item xs={6} key={fairshareObject.name} >
            <FairshareCard
              classes={classes}
              fairshareObject={fairshareObject}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FairshareCardGrid;
