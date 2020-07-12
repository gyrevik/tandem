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
    minWidth: 100,
  },
});

function createData(name: string, value: string) {
  return { name, value };
}



type SimpleTableProps = {
  mean: string,
  median: string,
  standardDeviation: string,
  mode: string
}

export default function SimpleTable({ mean, median, standardDeviation, mode }: SimpleTableProps) {
  const classes = useStyles();

  const rows = [
    createData('mean', mean),
    createData('median', median),
    createData('standard deviation', standardDeviation),
    createData('mode', mode),
  ];

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}