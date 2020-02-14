
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
    minWidth: 650,
  },
});

// function createData(firstName, lastName, email, orderId, orderDate, shipDate, processing) {
//   return { firstName, lastName, email, orderId, orderDate, shipDate, processing };
// }
const products = [{
  id: '',
  firstName: '',
  lastName: '',
  orderDate: '',
  orderId: '', 
  productQuantity: '',
  shipDate: '',
  deliverDate: '',
  createdAt: '',
  processed: ''
}]
// const rows = [
//   createData('Madeleine', 'Mathews', "mlljk@gmail.com", '4', '1/12', '1/15', 'processed'),
//   createData('Madeleine', 'Mathews', "mlljk@gmail.com", '1', '1/12', '1/15', 'processed'),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table classfirstName={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell> First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Order Id</TableCell>
            <TableCell align="right">Order Date</TableCell>
            <TableCell align="right">Ship Date</TableCell>
            <TableCell align="right">Processing/Processed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.orderId}</TableCell>
              <TableCell align="right">{row.orderDate}</TableCell>
              <TableCell align="right">{row.shipDate}</TableCell>
              <TableCell align="right">
                <button onClick=''>send email update</button>
                {row.processing}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}