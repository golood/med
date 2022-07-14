import * as React from 'react';
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import {TableHead} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import {VarFac} from "../store/Store";

const vars = [
  'a1m',
  'a3m',
  'a4p',
  'a7m',
  'a8m',
  'a9m',
  'b1p',
  'b2p',
  'b4m',
  'b6m',
  'b7m',
  'b8',
  'b9',
  'c1p',
  'c2m',
  'c3p',
  'c4m',
  'c5p',
  'c6p'
]

interface Props {
  y0: Array<VarFac>
  y1: Array<VarFac>
  y2: Array<VarFac>
  getFactor: Function
}

export default function Factors(props: Props)
{
  return (
    <>
      <Paper sx={{width: '100%'}}>
        <TableContainer sx={{maxHeight: 550}}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>

              <TableRow>
                <TableCell>Переменные</TableCell>
                <TableCell>y0</TableCell>
                <TableCell>y1</TableCell>
                <TableCell>y2</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vars.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                  <TableCell>{props.getFactor(item, props.y0)}</TableCell>
                  <TableCell>{props.getFactor(item, props.y1)}</TableCell>
                  <TableCell>{props.getFactor(item, props.y2)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  )
}
