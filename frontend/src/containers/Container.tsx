import React from "react";
import classes from "./Container.module.css";
import {inject, observer, IWrappedComponent} from "mobx-react"
import {Box, Button, Tab, Tabs} from "@mui/material";
import Store from "../store/Store";

import DataTable from "../components/DataTable";
import RegresModel from "../components/RegresModel";
import Factors from "../components/Factors";
import Layout from "../hoc/Layout/Layout";
import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import AccordionDetails from "@mui/material/AccordionDetails";
import Accordion from "@mui/material/Accordion";
import OrderedVars from "../components/OrderedVars";
import MyChart from "../components/MyChart";

interface Props {
}

interface InjectedProps extends Props {
  mainStore: Store
}

@inject("mainStore")
@observer
class Container extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
  }

  get injected() {
    return this.props as InjectedProps
  }

  render() {
    const {mainStore} = this.injected

    return (
      <Layout className={classes.Sorting}>

        <h2>Программа анализа и прогнозирования значений некоторых послеоперационных нейрохирургических показателей</h2>
        <Typography component={"em"}>Иркутский государственный университет путей сообщения</Typography>
        <Typography component={"em"}>Авторы: С.И. Носков, Ю.А. Бычков</Typography>

         <Accordion>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls="panel3a-content"
             id="panel3a-header"
           >
             <Typography component={'span'}>Данные</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <DataTable/>
           </AccordionDetails>
         </Accordion>

         <Accordion>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls="panel3a-content"
             id="panel3a-header"
           >
             <Typography component={'span'}>Регрессионные модели</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <RegresModel/>
           </AccordionDetails>
         </Accordion>

         <Accordion>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls="panel3a-content"
             id="panel3a-header"
           >
             <Typography component={'span'}>Вклады факторов</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Factors y0={mainStore.y0} y1={mainStore.y1} y2={mainStore.y2} getFactor={mainStore.getFactor}/>
           </AccordionDetails>
         </Accordion>

         <Accordion>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls="panel3a-content"
             id="panel3a-header"
           >
             <Typography component={'span'}>Упорядоченные независимые переменные по значимости</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <OrderedVars  y0_sort={mainStore.y0_sort} y1_sort={mainStore.y1_sort} y2_sort={mainStore.y2_sort}/>
           </AccordionDetails>
         </Accordion>

         <Accordion>
           <AccordionSummary
             expandIcon={<ExpandMoreIcon/>}
             aria-controls="panel3a-content"
             id="panel3a-header"
           >
             <Typography component={'span'}>Графики фактических и расчетных значений</Typography>
           </AccordionSummary>
           <AccordionDetails>
             <Typography component={'h4'} align={'center'}>y0</Typography>
             <MyChart chartData={mainStore.yy_0} chartDataR={mainStore.yy_r_0}/>
             <br/>
             <Typography component={'h4'} align={'center'}>y1</Typography>
             <MyChart chartData={mainStore.yy_1} chartDataR={mainStore.yy_r_1}/>
             <br/>
             <Typography component={'h4'} align={'center'}>y2</Typography>
             <MyChart chartData={mainStore.yy_2} chartDataR={mainStore.yy_r_2}/>
           </AccordionDetails>
         </Accordion>

      </Layout>
    );
  }
}

export default Container as typeof Container & IWrappedComponent<Props>
