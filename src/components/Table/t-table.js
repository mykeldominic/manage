import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'

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
    padding: '20px 15px 20px 15px',
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
  pendingstatus: {
    background: 'rgba(179, 140, 10, 0.08)',
    borderRadius: '100px',
    padding: '8px 20px',
    width: 'fit-content',
    color: '#B38C0A',
    fontWeight: 'bold',
    fontSize: '0.9em',
    letterSpacing: '0.02em',
  },
  processingstatus: {
    background: 'rgba(39, 174, 96, 0.08)',
    borderRadius: '100px',
    padding: '8px 20px',
    width: 'fit-content',
    color: '#27AE60',
    fontWeight: 'bold',
    fontSize: '0.9em',
    letterSpacing: '0.02em',
  },
  approvebutton: {
    border: '1.5px solid #427A52',
    borderRadius: '3px',
	padding: '6px 20px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '0.9em',
    background: '#427A52',
    letterSpacing: '0.02em',
    '&:hover': {
        opacity: '0.9',
    },
  },
  declinebutton: {
    border: '1.5px solid #C63232',
    borderRadius: '3px',
	padding: '6px 20px',
    color: '#C63232',
    fontWeight: 'bold',
    fontSize: '0.9em',
    background: '#fff',
    letterSpacing: '0.02em',
    marginLeft: '30px',
    '&:hover': {
        opacity: '0.9',
    },
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
              <StyledTableCell className={classes.headRowCell}>{row.first}</StyledTableCell>
              <StyledTableCell className={classes.headPadding}>{row.second}</StyledTableCell>
              <StyledTableCell className={classes.headRowCell}>{row.third}</StyledTableCell>
              <StyledTableCell className={classes.headRowCell}>{row.fourth}</StyledTableCell>
              <StyledTableCell className={classes.headRowCell}>{row.fifth}</StyledTableCell>
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <StyledTableRow key={row.id} className={classes.tableRow}>
              <StyledTableCell className={classes.tableCell} component="th" scope="row">
                  {row.dateCreated}
              </StyledTableCell>
              <StyledTableCell className={classes.padding}>
                  <p style={{ padding: '0', margin: '0' }}>{row.account.accountName}</p>
                  <p style={{ padding: '0', margin: '0', marginTop: '7px', fontSize: '0.9em', color: '#727272' }}>{row.account.accountNumber}</p>
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell}>
                  {row.currentLimitAmount}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell}>
                  {row.requestedLimitAmount}
              </StyledTableCell>
              <StyledTableCell className={classes.tableCell} style={{ display: 'flex', border: 'none' }}>
                    <Button className={classes.approvebutton}>Approve</Button>
                    <Button className={classes.declinebutton}>Decline</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(PageTables)