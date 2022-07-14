import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function RegresModel() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography component={'span'}>y0</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            5.4464092 +&nbsp;0.050953118&nbsp;<i>a4p</i>&nbsp; &minus;&nbsp;0.013288181&nbsp;<i>a7m</i>&nbsp;
            &minus;&nbsp;0.063827109&nbsp;<i>a9m</i>&nbsp; &minus;&nbsp;0.00074338507&nbsp;<i>b7m</i>&nbsp;
            +&nbsp;0.018172289&nbsp;<i>b8</i>&nbsp; &minus;&nbsp;0.050829126&nbsp;<i>b9</i>&nbsp; +&nbsp;0,010869&nbsp;<i>c1p</i>&nbsp;
            &minus;&nbsp;0.083809986&nbsp;<i>c2m</i>&nbsp;
            +&nbsp;0.022998827&nbsp;<i>c3p</i>&nbsp; &minus;&nbsp;0.029461177&nbsp;<i>c4m</i>&nbsp; +&nbsp;0.047268283&nbsp;<i>c5p</i>&nbsp;
            +&nbsp;0.00018021824&nbsp;<i>c6p</i>
          </Typography>
          <br/>
          <Typography component={'span'}>
            Е = 4.98%
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography component={'span'}>y1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            53.746265 &minus;&nbsp;0.28433248&nbsp;<i>a1m</i>&nbsp; &minus;&nbsp;0.17475687&nbsp;<i>a3m</i>&nbsp; +&nbsp;0.85825476&nbsp;<i>a4p</i>&nbsp;
            &minus;&nbsp;1.0762227&nbsp;<i>a7m</i>&nbsp;
            &minus;&nbsp;0.57508486&nbsp;<i>a8m</i>&nbsp; &minus;&nbsp;0.13172928&nbsp;<i>a9m</i>&nbsp; &minus;&nbsp;0.15825571&nbsp;<i>b4m</i>&nbsp;
            &minus;&nbsp;0.0025522993&nbsp;<i>b7m</i>&nbsp;
            +&nbsp;0.46340595&nbsp;<i>b8</i>&nbsp; &minus;&nbsp;0.55763233&nbsp;<i>b9</i>&nbsp; +&nbsp;0.042217376&nbsp;<i>c3p</i>&nbsp;
            &minus;&nbsp;1.8093715&nbsp;<i>c4m</i>&nbsp; +&nbsp;3.1995576&nbsp;<i>c5p</i>
          </Typography>
          <br/>
          <Typography component={'span'}>
            Е = 5.4%
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography component={'span'}>y2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            44.494613 &minus;&nbsp;1.842227&nbsp;<i>a1m</i>&nbsp; &minus;&nbsp;0.19755511&nbsp;<i>a3m</i>&nbsp; +&nbsp;1.0447311&nbsp;<i>a4p</i>&nbsp;
            &minus;&nbsp;1.2896831&nbsp;<i>a7m</i>&nbsp; &minus;&nbsp;0.42637097&nbsp;<i>a8m</i>&nbsp; &minus;&nbsp;0.14914382&nbsp;<i>a9m</i>&nbsp;
            +&nbsp;1.4473741&nbsp;<i>b1p</i>&nbsp; +&nbsp;0.81372485&nbsp;<i>b2p</i>&nbsp;
            &minus;&nbsp;1.6852855&nbsp;<i>b4m</i>&nbsp; &minus;&nbsp;1.373703&nbsp;<i>b6m</i>&nbsp; &minus;&nbsp;0.011580123&nbsp;<i>b7m</i>&nbsp;
            +&nbsp;0.70462104&nbsp;<i>b8</i>&nbsp;
            &minus;&nbsp;0.76405236&nbsp;<i>b9</i>&nbsp; &minus;&nbsp;2.3331594&nbsp;<i>c2m</i>&nbsp; +&nbsp;13.451645&nbsp;<i>c5p</i>&nbsp;
          </Typography>
          <br/>
          <Typography component={'span'}>
            Е = 11.5%
          </Typography>
        </AccordionDetails>
      </Accordion>
      <br/>
      <Typography component={'span'}>
        E – средняя ошибка аппроксимации.
      </Typography>
    </div>
  )
}
