import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#D5E4D9',
    color: '#414943',
    fontWeight: 'bold',
    fontSize: '0.9em',
  },
  body: {
    fontSize: '0.95em',
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#fff',
    },
  },
}))(TableRow);

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.05)',
    borderRadius: '3px',
  },
  headRow: {
    height: '0px',
  },
  headRowCell: {
    padding: '10px 15px 10px 15px',
  },
  headPadding: {
    padding: '10px 0px 10px 0px',
  },
  padding: {
    padding: '0px',
  },
  tableCell: {
    padding: '15px 15px 15px 15px',
  },
  tableRow: {
    borderBottom: '0.75px solid rgba(224, 224, 224, 0.5)',
  },
  flex: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, auto)',
    borderBottom: '#fff',
  },
	initials: {
		padding: '10px',
    color: '#B38C0A',
    background: 'rgba(179, 140, 10, 0.2)',
    letterSpacing: '0.02em',
    marginRight: '10px',
    borderRadius: '100%',
    width: 'fit-content',
	},
})

function PageTables({ data, classes, rows, headers }) {
  console.log(headers)
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          {headers.map(row => (
            <TableRow className={classes.headRow}>
              <StyledTableCell className={classes.headRowCell} style={{ width: '15%' }}>{row.first}</StyledTableCell>
              <StyledTableCell className={classes.headPadding}>{row.second}</StyledTableCell>
              <StyledTableCell className={classes.headRowCell} style={{ width: '15%' }}>{row.third}</StyledTableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.date} className={classes.tableRow}>
              <StyledTableCell className={classes.tableCell} component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell className={classes.padding}>{row.message}</StyledTableCell>
              <StyledTableCell className={classNames(classes.tableCell, classes.flex )}>
                  <div className={classes.initials}>{row.initials}</div>
                  {row.sortby}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(PageTables)