import React from "react";
import Store, {Patient, Var, getArrayVars} from "../store/Store";
import {inject, IWrappedComponent, observer} from "mobx-react";
import classes from "./Container.module.css";
import Layout from "../hoc/Layout/Layout";
import Zoom from "@mui/material/Zoom";
import {Fab} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface State {
  value: number,
  open: boolean,
  name: string,
  surname: string,
  patronymic: string,
  vars: Array<Var>
}

interface Props {
}

interface InjectedProps extends Props {
  mainStore: Store
}

const fabStyle = {
  position: 'absolute',
  bottom: 16,
  right: 16,
};

@inject("mainStore")
@observer
class Prediction extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 1,
      open: false,
      name: '',
      surname: '',
      patronymic: '',
      vars: getArrayVars()
    }
  }

  get injected() {
    return this.props as InjectedProps
  }

  handleClose(value: boolean) {
    this.setState({
      open: value
    })
  }

  addPatientHandle() {
    console.log(this.state.vars)

    const {mainStore} = this.injected
    const patient: Patient = {
      name: this.state.name,
      surname: this.state.surname,
      patronymic: this.state.patronymic,
      vars: this.state.vars
    }
    mainStore.addPatient(patient)

    this.setState({
      name: '',
      surname: '',
      patronymic: '',
      open: false,
      vars: getArrayVars()
    })
  }

  render() {
    const {mainStore} = this.injected

    return (
      <Layout className={classes.Sorting}>

        {mainStore.patients.map((item: Patient, index: any) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon/>}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography component={'span'}>{`${item.surname} ${item.name} ${item.patronymic}`}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650, maxWidth: 700 }} aria-label="caption table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Исход операции:</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                      <TableRow>
                        <TableCell component="th" scope="row">y0 (Шкала Macnab)</TableCell>
                        <TableCell align="right">{item.y0}</TableCell>
                      </TableRow>
                  </TableBody>
                  <TableHead>
                    <TableRow>
                      <TableCell>Отдаленные послеоперационные параметры:</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">y1 (Качество жизни по SF-36 (физический компонент), баллы)</TableCell>
                      <TableCell align="right">{item.y1}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">y2 (Качество жизни по SF-36 (психологический компонент), баллы)</TableCell>
                      <TableCell align="right">{item.y2}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </AccordionDetails>
          </Accordion>
        ))}

        <Dialog open={this.state.open} onClose={() => this.handleClose(false)}>
          <DialogTitle>Пациент</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Фамилия"
              type="text"
              fullWidth
              variant="standard"
              value={this.state.surname}
              onChange={(event) => this.setState({surname: event.target.value})}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Имя"
              type="text"
              fullWidth
              variant="standard"
              value={this.state.name}
              onChange={(event) => this.setState({name: event.target.value})}
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Отчество"
              type="text"
              fullWidth
              variant="standard"
              value={this.state.patronymic}
              onChange={(event) => this.setState({patronymic: event.target.value})}
            />

            <br/><br/>

            {this.state.vars.map((item, index) => (
              <TextField
                key={index}
                margin="dense"
                id="name"
                label={item.fullName}
                value={item.value}
                onChange={(event) => {
                  const v = this.state.vars
                  v[index].value = Number(event.target.value)
                  this.setState({
                    vars: v
                  })
                }}
                type="number"
                inputProps={{
                  step: "0.0000001"
                }}
                fullWidth
                variant="standard"
              />
            ))}

          </DialogContent>
          <DialogActions>
            <Button onClick={() => this.handleClose(false)}>Отмена</Button>
            <Button onClick={() => this.addPatientHandle()}>Добавить</Button>
          </DialogActions>
        </Dialog>

        <Zoom
          key='1'
          in={true}
          unmountOnExit
        >
          <Fab sx={fabStyle} aria-label='Add' color='primary' onClick={() => this.handleClose(true)}>
            <AddIcon />
          </Fab>
        </Zoom>
      </Layout>
    )
  }
}

export default Prediction as typeof Prediction & IWrappedComponent<Props>
