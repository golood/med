import * as React from 'react';
import Typography from "@mui/material/Typography";
import {VarFac, Vars} from "../store/Store";

interface Props {
  y0_sort: Array<VarFac>
  y1_sort: Array<VarFac>
  y2_sort: Array<VarFac>
}

export default function OrderedVars(props: Props) {

  const y0 = []
  const y1 = []
  const y2 = []

  for (const item of props.y0_sort)
    if (item.name != Vars.free)
      y0.push(item.name)
  for (const item of props.y1_sort)
    if (item.name != Vars.free)
      y1.push(item.name)
  for (const item of props.y2_sort)
    if (item.name != Vars.free)
      y2.push(item.name)

  return (
    <>
      <Typography component={'span'}>y0: {y0.map((item, index) => item + (index+1 != y0.length ? " ≻ " : ""))}</Typography>
      <br/>
      <Typography component={'span'}>y1: {y1.map((item, index) => item + (index+1 != y1.length ? " ≻ " : ""))}</Typography>
      <br/>
      <Typography component={'span'}>y2: {y2.map((item, index) => item + (index+1 != y2.length ? " ≻ " : ""))}</Typography>
    </>
  )
}
