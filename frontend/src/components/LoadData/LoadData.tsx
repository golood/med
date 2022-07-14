import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
  [12, 159, 6.0, 24, 4.0],
  [12, 237, 9.0, 37, 4.3],
  [121, 262, 16.0, 24, 6.0],
  [12, 305, 3.7, 67, 4.3],
  [23, 356, 16.0, 49, 3.9],
];

const heads = ['y', 'var_1', 'var_2', 'var_3', 'var_4']

export default function LoadData()
{
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {heads.map((item) => (
              <TableCell align="center">{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{row[0]}</TableCell>
              <TableCell align="center">{row[1]}</TableCell>
              <TableCell align="center">{row[2]}</TableCell>
              <TableCell align="center">{row[3]}</TableCell>
              <TableCell align="center">{row[4]}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
