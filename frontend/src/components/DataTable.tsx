import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import * as React from 'react';
import {TableHead, TablePagination} from "@mui/material";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import {inject, observer} from "mobx-react";
import Store from "../store/Store";

interface ColumnHead {
  label: string;
  colSpan?: number;
  background?: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: ColumnHead[] = [];

interface Data {
  name: string;
  code: string;
  population: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  code: string,
  population: number,
  size: number,
): Data {
  const density = population / size;
  return {name, code, population, size, density};
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

const vars = [
  '',
  'y0',
  'a1m',
  'a3m',
  'a4p',
  'a7m',
  'a8m',
  'y1',
  'y2',
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

const head_1 = [
  'Порядковый номер',
  'Шкала Macnab',
  'сроки от начала заболевания, года',
  'Боль в ногах, мм',
  'Качество жизни по SF-36 (физический компонент), баллы',
  'Боль в пояснице, мм',
  'Боль в ногах, мм',
  'Качество жизни по SF-36 (физический компонент), баллы',
  'Качество жизни по SF-36 (психологический компонент), баллы',
  'Статус по ODI, баллы',
  'межтеловой промежуток, мм',
  'сагиттальный угол, градусы',
  'линейное смещение, мм',
  'степень дегенерация ДС по Fujiwara',
  'Коэффициент диффузии, мм2/сек',
  'фасеточный угол справа, градусы',
  'фасеточный угол слева, градусы',
  'межтеловой промежуток, мм',
  'сагиттальный угол, градусы',
  'поясничный лордоз, градусы',
  'линейное смещение, мм',
  'Степень дегенерации по Vernon-Roberts',
  'Клеточная плотность, кл/мм3'
]

const head_2: ColumnHead[] = [
  {
    label: '',
    colSpan: 1
  },
  {
    label: 'Исход операции',
    colSpan: 1
  },
  {
    label: 'Дооперационные сведения о пациенте',
    colSpan: 1
  },
  {
    label: 'Дооперационные параметры',
    colSpan: 2
  },
  {
    label: 'Отдаленные послеоперационные параметры',
    colSpan: 5
  },
  {
    label: 'Дооперационные рентгенологические параметры',
    colSpan: 3
  },
  {
    label: 'Дооперационные МРТ данные',
    colSpan: 4
  },
  {
    label: 'Послеоперационные рентгенологические данные',
    colSpan: 4
  },
  {
    label: 'Межпозвонковый диск',
    colSpan: 2
  }
]

const head_3: ColumnHead[] = [
  {
    label: '',
    colSpan: 1
  },
  {
    label: '',
    colSpan: 1
  },
  {
    label: '',
    colSpan: 1
  },
  {
    label: 'Клинические параметры',
    colSpan: 7
  },
  {
    label: 'Инструментальные параметры',
    colSpan: 11
  },
  {
    label: 'Гистологический (интраоперационный) анализ',
    colSpan: 2
  }
]

const data: number[][] = [
  [1, 5, 3, 74, 24.73, 14, 3, 44.73, 49.21, 8, 8, 9, 9, 2, 1112, 78, 63, 15, 1, 44, 2, 2, 1932],
  [2, 5, 11, 58, 23.15, 5, 6, 49.88, 48.07, 0, 9, 7, 7, 3, 1050, 66, 69, 16, 2, 49, 1, 3, 1405],
  [3, 5, 4, 69, 25.79, 10, 1, 48.69, 45.79, 4, 6, 6, 8, 3, 1447, 63, 68, 12, 2, 54, 2, 2, 2684],
  [4, 5, 3, 74, 21.66, 10, 2, 43.46, 46.2, 8, 10, 8, 9, 3, 1462, 73, 61, 14, 1, 46, 1, 2, 2892],
  [5, 5, 6, 75, 26.35, 10, 9, 44.22, 43.9, 6, 9, 9, 7, 3, 1380, 72, 61, 12, 2, 45, 2, 2, 2713],
  [6, 5, 5, 80, 23.21, 6, 7, 48.73, 51.7, 8, 7, 7, 10, 3, 1266, 74, 63, 13, 2, 52, 2, 3, 2680],
  [7, 5, 8, 90, 30.32, 9, 5, 44.12, 43.78, 6, 8, 8, 8, 2, 1402, 63, 75, 14, 1, 58, 2, 3, 1803],
  [8, 5, 7, 100, 27.19, 5, 8, 49.16, 66.89, 8, 11, 4, 2, 1, 1643, 44, 41, 13, 4, 42, 1, 3, 1899],
  [9, 5, 13, 62, 28.53, 11, 6, 46.27, 39.25, 6, 7, 8, 5, 3, 1297, 62, 65, 12, 2, 60, 2, 3, 1788],
  [10, 4, 7, 65, 23.86, 5, 8, 34.98, 60.9, 8, 8, 6, 7, 2, 1318, 65, 77, 12, 1, 50, 1, 2, 1904],
  [11, 5, 6, 78, 27.49, 9, 9, 45.35, 34.75, 12, 6, 9, 6, 3, 1365, 70, 67, 11, 2, 75, 2, 3, 1832],
  [12, 5, 4, 89, 31.49, 4, 9, 48.23, 48.33, 10, 10, 3, 1, 1, 1702, 52, 58, 12, 3, 50, 1, 2, 2400],
  [13, 4, 2, 86, 24.12, 18, 5, 34.76, 30.96, 16, 11, 2, 3, 2, 1698, 56, 49, 12, 4, 44, 1, 2, 2361],
  [14, 4, 1, 85, 19.16, 5, 12, 38.64, 39.31, 14, 8, 6, 7, 3, 1318, 71, 66, 14, 2, 50, 2, 2, 2397],
  [15, 4, 14, 69, 26.25, 20, 7, 39.25, 31.13, 16, 6, 4, 9, 2, 1400, 78, 65, 12, 3, 44, 2, 4, 1835],
  [16, 4, 9, 74, 24.98, 11, 12, 36.88, 34.68, 12, 12, 5, 6, 2, 1512, 62, 63, 14, 2, 40, 1, 3, 1938],
  [17, 5, 3, 58, 25.35, 10, 7, 41.36, 26.92, 8, 13, 4, 3, 1, 1712, 36, 41, 14, 4, 55, 1, 1, 2674],
  [18, 4, 1, 65, 18.23, 3, 9, 39.17, 28.07, 12, 12, 5, 2, 1, 1699, 38, 33, 14, 4, 50, 2, 1, 2600],
  [19, 4, 12, 79, 24.76, 13, 6, 39.63, 45.79, 16, 9, 3, 1, 2, 1358, 61, 54, 10, 2, 44, 1, 4, 1202],
  [20, 4, 10, 73, 18.64, 12, 4, 40.89, 56.2, 12, 11, 4, 3, 2, 1342, 67, 63, 14, 2, 49, 1, 4, 1188],
  [21, 4, 4, 90, 19.74, 8, 6, 38.25, 43.9, 20, 10, 3, 2, 2, 1477, 45, 51, 11, 3, 50, 1, 3, 1908],
  [22, 5, 7, 100, 36.88, 11, 2, 43.46, 31.7, 4, 7, 6, 8, 3, 1290, 69, 66, 14, 1, 54, 1, 3, 1845],
  [23, 4, 6, 69, 29.23, 17, 8, 49.25, 51.44, 16, 8, 7, 6, 3, 1390, 76, 62, 12, 2, 46, 1, 3, 1832],
  [24, 4, 11, 62, 31.12, 14, 8, 46.22, 56.48, 18, 10, 3, 3, 3, 1460, 51, 63, 11, 4, 32, 3, 4, 1184],
  [25, 3, 8, 82, 20.75, 14, 16, 21.69, 24.47, 30, 12, 2, 4, 2, 1592, 34, 39, 12, 3, 35, 3, 3, 1820],
  [26, 4, 10, 84, 25.25, 15, 7, 48.23, 54.57, 22, 12, 3, 2, 4, 1390, 45, 49, 12, 3, 37, 3, 4, 1275],
  [27, 3, 13, 86, 26.99, 18, 14, 18.11, 25.24, 34, 10, 4, 3, 2, 1495, 48, 45, 11, 2, 39, 5, 3, 1800],
  [28, 5, 4, 80, 22.56, 2, 0, 54.12, 48.08, 2, 11, 3, 2, 2, 1740, 47, 45, 12, 5, 48, 1, 2, 2120],
  [29, 4, 7, 64, 29.05, 6, 4, 43.29, 40.46, 8, 7, 8, 8, 2, 1427, 62, 76, 13, 2, 47, 3, 3, 1957],
  [30, 4, 15, 58, 26.66, 4, 6, 49.55, 46.39, 8, 9, 9, 9, 2, 1279, 67, 78, 13, 3, 54, 1, 4, 1932],
  [31, 5, 9, 52, 12.45, 8, 3, 47.29, 45.47, 4, 10, 4, 2, 1, 1699, 32, 26, 11, 4, 45, 1, 3, 1840],
  [32, 3, 12, 76, 31.73, 23, 0, 30.93, 34.2, 12, 12, 3, 2, 2, 1320, 48, 56, 12, 2, 35, 3, 3, 1730],
  [33, 4, 7, 81, 28.57, 10, 0, 41.59, 40.61, 6, 11, 8, 6, 3, 1240, 62, 78, 14, 2, 50, 1, 3, 1629],
  [34, 3, 1, 0, 26.57, 19, 14, 31.29, 33.27, 16, 8, 7, 4, 3, 1558, 57, 69, 11, 3, 40, 3, 2, 1945],
  [35, 4, 3, 15, 25.77, 12, 4, 45.99, 43.56, 10, 10, 5, 2, 1, 1634, 46, 50, 12, 5, 38, 2, 1, 2010],
]

const DataTable = inject('mainStore')(observer((props: any) => {
  const store: Store = props.mainStore;

  return (
    <Paper sx={{width: '100%'}}>
      <TableContainer sx={{maxHeight: 550}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>

            <TableRow>
              {head_3.map((item, index) => (
                <TableCell
                  key={index}
                  colSpan={item.colSpan}
                  align="center"
                >
                  {item.label}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              {head_2.map((item, index) => (
                <TableCell
                  key={index}
                  colSpan={item.colSpan}
                  align="center"
                >
                  {item.label}
                </TableCell>))}
            </TableRow>

            <TableRow>
              {head_1.map((item, index) => (<TableCell key={index} align="center">{item}</TableCell>))}
            </TableRow>

            <TableRow>
              {vars.map((item, index) => (<TableCell key={index} align="center">{item}</TableCell>))}
            </TableRow>

          </TableHead>
          <TableBody>
            {store.data.map((row, index) => (
              <TableRow
                key={index}
              >
                {row.map((item, i) => (
                  <TableCell
                    key={i}
                    align="center"
                  >
                    {item}
                  </TableCell>
                ))}
              </TableRow>))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}));

export default DataTable
