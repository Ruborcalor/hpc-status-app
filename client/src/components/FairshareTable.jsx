import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: "100%",
  },
  container: {
    maxHeight: 400,
    marginTop: "20px"
  }
});

const FairshareTable = (props) => {
  const classes = useStyles();
  const { fairshareTableData } = props;

  const totalUsage = fairshareTableData.reduce((total, currentValue) => {
    return total + currentValue.usage;
  }, 0);

  return (
    <TableContainer component={Paper} variant="outlined" className={classes.container} >
      <Table stickyHeader className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>User</TableCell>
            <TableCell align="right">Usage</TableCell>
            <TableCell align="right">Percent Usage</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {fairshareTableData.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.user}
              </TableCell>
              <TableCell align="right">{row.usage}</TableCell>
              <TableCell align="right">{Math.round(100 * row.usage / totalUsage) + "%"}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


export default FairshareTable
