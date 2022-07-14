import {action, makeObservable, observable, computed} from "mobx";

export enum VarsFull {
  a1m = 'a1m (сроки от начала заболевания, года)',
  a3m = 'a3m (Боль в ногах, мм)',
  a4p = 'a4p (Качество жизни по SF-36 (физический компонент), баллы)',
  a7m = 'a7m (Боль в пояснице, мм)',
  a8m = 'a8m (Боль в ногах, мм)',
  a9m = 'a9m (Статус по ODI, баллы)',
  b1p = 'b1p (межтеловой промежуток, мм)',
  b2p = 'b2p (сагиттальный угол, градусы)',
  b4m = 'b4m (линейное смещение, мм)',
  b6m = 'b6m (степень дегенерация ДС по Fujiwara)',
  b7m = 'b7m (Коэффициент диффузии, мм2/сек)',
  b8 = 'b8 (фасеточный угол справа, градусы)',
  b9 = 'b9 (фасеточный угол слева, градусы)',
  c1p = 'c1p (межтеловой промежуток, мм)',
  c2m = 'c2m (сагиттальный угол, градусы)',
  c3p = 'c3p (поясничный лордоз, градусы)',
  c4m = 'c4m (линейное смещение, мм)',
  c5p = 'c5p (Степень дегенерации по Vernon-Roberts)',
  c6p = 'c6p (Клеточная плотность, кл/мм3)'
}

export enum Vars {
  a1m = 'a1m',
  a3m = 'a3m',
  a4p = 'a4p',
  a7m = 'a7m',
  a8m = 'a8m',
  a9m = 'a9m',
  b1p = 'b1p',
  b2p = 'b2p',
  b4m = 'b4m',
  b6m = 'b6m',
  b7m = 'b7m',
  b8 = 'b8',
  b9 = 'b9',
  c1p = 'c1p',
  c2m = 'c2m',
  c3p = 'c3p',
  c4m = 'c4m',
  c5p = 'c5p',
  c6p = 'c6p',
  free = 'free'
}

export interface Var {
  name: Vars
  fullName?: VarsFull
  value?: number
}

export interface VarFac extends Var {
  factor?: number
}

export function getArrayVars(): Array<Var> {
  return [
    {
      name: Vars.a1m,
      fullName: VarsFull.a1m,
      value: undefined
    },
    {
      name: Vars.a3m,
      fullName: VarsFull.a3m,
      value: undefined
    },
    {
      name: Vars.a4p,
      fullName: VarsFull.a4p,
      value: undefined
    },
    {
      name: Vars.a7m,
      fullName: VarsFull.a7m,
      value: undefined
    },
    {
      name: Vars.a8m,
      fullName: VarsFull.a8m,
      value: undefined
    },
    {
      name: Vars.a9m,
      fullName: VarsFull.a9m,
      value: undefined
    },
    {
      name: Vars.b1p,
      fullName: VarsFull.b1p,
      value: undefined
    },
    {
      name: Vars.b2p,
      fullName: VarsFull.b2p,
      value: undefined
    },
    {
      name: Vars.b4m,
      fullName: VarsFull.b4m,
      value: undefined
    },
    {
      name: Vars.b6m,
      fullName: VarsFull.b6m,
      value: undefined
    },
    {
      name: Vars.b7m,
      fullName: VarsFull.b7m,
      value: undefined
    },
    {
      name: Vars.b8,
      fullName: VarsFull.b8,
      value: undefined
    },
    {
      name: Vars.b9,
      fullName: VarsFull.b9,
      value: undefined
    },
    {
      name: Vars.c1p,
      fullName: VarsFull.c1p,
      value: undefined
    },
    {
      name: Vars.c2m,
      fullName: VarsFull.c2m,
      value: undefined
    },
    {
      name: Vars.c3p,
      fullName: VarsFull.c3p,
      value: undefined
    },
    {
      name: Vars.c4m,
      fullName: VarsFull.c4m,
      value: undefined
    },
    {
      name: Vars.c5p,
      fullName: VarsFull.c5p,
      value: undefined
    },
    {
      name: Vars.c6p,
      fullName: VarsFull.c6p,
      value: undefined
    }
  ]
}

interface Obj {
  name: string
  value: number
}



export interface Patient {
  name: string
  surname: string
  patronymic: string

  vars?: Array<Var>
  y0?: number
  y1?: number
  y2?: number
}

export default class Store {
  @observable
  fileName: string;

  @observable
  data: Array<Array<number>>;

  @observable
  clearData: Array<Array<number>>;

  @observable
  patients: Array<Patient>

  avgData: Array<number>
  H0: number
  H1: number
  H2: number

  @observable
  y0: Array<VarFac> = [
    {
      name: Vars.free,
      value: 5.4464092
    },
    {
      name: Vars.a4p,
      value: 0.050953118
    },
    {
      name: Vars.a7m,
      value: 0.013288181
    },
    {
      name: Vars.a9m,
      value: 0.063827109
    },
    {
      name: Vars.b7m,
      value: 0.00074338507
    },
    {
      name: Vars.b8,
      value: 0.018172289
    },
    {
      name: Vars.b9,
      value: 0.050829126
    },
    {
      name: Vars.c1p,
      value: 0.010869
    },
    {
      name: Vars.c2m,
      value: 0.083809986
    },
    {
      name: Vars.c3p,
      value: 0.022998827
    },
    {
      name: Vars.c4m,
      value: 0.029461177
    },
    {
      name: Vars.c5p,
      value: 0.047268283
    },
    {
      name: Vars.c6p,
      value: 0.00018021824
    }]

  @observable
  y1: Array<VarFac> = [
    {
      name: Vars.free,
      value: 53.746265
    },
    {
      name: Vars.a1m,
      value:0.28433248
    },
    {
      name: Vars.a3m,
      value:0.17475687
    },
    {
      name: Vars.a4p,
      value: 0.85825476
    },
    {
      name: Vars.a7m,
      value: 1.0762227
    },
    {
      name: Vars.a8m,
      value: 0.57508486
    },
    {
      name: Vars.a9m,
      value: 0.13172928
    },
    {
      name: Vars.b4m,
      value: 0.15825571
    },
    {
      name: Vars.b7m,
      value: 0.0025522993
    },
    {
      name: Vars.b8,
      value: 0.46340595
    },
    {
      name: Vars.b9,
      value: 0.55763233
    },
    {
      name: Vars.c3p,
      value: 0.042217376
    },
    {
      name: Vars.c4m,
      value: 1.8093715
    },
    {
      name: Vars.c5p,
      value: 3.1995576
    }]

  @observable
  y2: Array<VarFac> = [
    {
      name: Vars.free,
      value: 44.494613
    },
    {
      name: Vars.a1m,
      value: 1.842227
    },
    {
      name: Vars.a3m,
      value: 0.19755511
    },
    {
      name: Vars.a4p,
      value: 1.0447311
    },
    {
      name: Vars.a7m,
      value: 1.2896831
    },
    {
      name: Vars.a8m,
      value: 0.42637097
    },
    {
      name: Vars.a9m,
      value: 0.14914382
    },
    {
      name: Vars.b1p,
      value: 1.4473741
    },
    {
      name: Vars.b2p,
      value: 0.81372485
    },
    {
      name: Vars.b4m,
      value: 1.6852855
    },
    {
      name: Vars.b6m,
      value: 1.373703
    },
    {
      name: Vars.b7m,
      value: 0.011580123
    },
    {
      name: Vars.b8,
      value: 0.70462104
    },
    {
      name: Vars.b9,
      value: 0.76405236
    },
    {
      name: Vars.c2m,
      value: 2.3331594
    },
    {
      name: Vars.c5p,
      value: 13.451645
    }]

  y0_sort: Array<VarFac> = []
  y1_sort: Array<VarFac> = []
  y2_sort: Array<VarFac> = []

  yy_0: Array<number> = [5,5,5,5,5,5,5,5,5,4,5,5,4,4,4,4,5,4,4,4,4,5,4,4,3,4,3,5,4,4,5,3,4,3,4]
  yy_1: Array<number> = [44.73,49.88,48.69,43.46,44.22,48.73,44.12,49.16,46.27,34.98,45.35,48.23,34.76,38.64,39.25,36.88,41.36,39.17,39.63,40.89,38.25,43.46,49.25,46.22,21.69,48.23,18.11,54.12,43.29,49.55,47.29,30.93,41.59,31.29,45.99]
  yy_2: Array<number> = [49.21,48.07,45.79,46.2,43.9,51.7,43.78,66.89,39.25,60.9,34.75,48.33,30.96,39.31,31.13,34.68,26.92,28.07,45.79,56.2,43.9,31.7,51.44,56.48,24.47,54.57,25.24,48.08,40.46,46.39,45.47,34.2,40.61,33.27,43.56]

  vars_calculation: Array<Var> = [
    {
      name: Vars.a1m,
      value: 3
    },
    {
      name: Vars.a3m,
      value: 74
    },
    {
      name: Vars.a4p,
      value: 24.73
    },
    {
      name: Vars.a7m,
      value: 14
    },
    {
      name: Vars.a8m,
      value: 3
    },
    {
      name: Vars.a9m,
      value: 8
    },
    {
      name: Vars.b1p,
      value: 8
    },
    {
      name: Vars.b2p,
      value: 9
    },
    {
      name: Vars.b4m,
      value: 9
    },
    {
      name: Vars.b6m,
      value: 2
    },
    {
      name: Vars.b7m,
      value: 1112
    },
    {
      name: Vars.b8,
      value: 78
    },
    {
      name: Vars.b9,
      value: 63
    },
    {
      name: Vars.c1p,
      value: 15
    },
    {
      name: Vars.c2m,
      value: 1
    },
    {
      name: Vars.c3p,
      value: 44
    },
    {
      name: Vars.c4m,
      value: 2
    },
    {
      name: Vars.c5p,
      value: 2
    },
    {
      name: Vars.c6p,
      value: 1932
    }
  ]

  yy_r_0: Array<number> = [4.873357062,4.938732734,4.56298168,4.712297434,5.03824882,4.87537684,4.267315727,5.272985093,4.693266414,3.839444699,4.274119357,4.64729297,4.228867621,3.966280926,4.089155088,4.149482566,4.972120139,4.856887035,4.281310886,3.942493127,3.700761428,5.389431376,4.386088813,3.698122734,3.294876392,3.812311159,3.252512611,5.220682313,4.014652983,4.120360757,5.207749009,4.459933962,4.112731507,3.301316116,4.450670572]
  yy_r_1: Array<number> = [44.72999862,49.69809471,42.19733648,46.77386857,44.21999876,49.25005037,39.37028531,49.15999914,44.51811965,39.25166244,45.3499988,47.23684634,34.75999858,37.44302725,38.51795138,37.64396647,41.35999892,44.00991172,45.60756004,42.42271361,37.35582092,53.09895425,45.94441751,37.47646068,21.68999869,33.42455208,21.34102488,54.11999925,43.28999887,49.54999896,47.28999901,30.92999828,41.58999885,31.64637264,45.98999865]
  yy_r_2: Array<number> = [49.16294431,48.06999947,30.39753919,46.20000002,43.33795502,51.69999949,39.75196166,55.3022926,39.24999937,30.82549384,49.30605712,48.32999992,30.96000035,39.34261047,31.2478997,40.60885363,30.89434136,42.05972745,57.11053022,56.19999989,43.90000011,53.42275238,51.43999958,43.44789832,24.46999999,46.17055945,25.2399996,48.08000029,43.86223567,46.3899991,45.47000023,34.19999965,45.27110968,33.27000008,35.12617463]

  constructor() {
    makeObservable(this)
    this.patients = []
    this.fileName = ''
    this.data = [
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
    this.clearData = [
      [3, 74, 24.73, 14, 3, 8, 8, 9, 9, 2, 1112, 78, 63, 15, 1, 44, 2, 2, 1932],
      [11, 58, 23.15, 5, 6, 0, 9, 7, 7, 3, 1050, 66, 69, 16, 2, 49, 1, 3, 1405],
      [4, 69, 25.79, 10, 1, 4, 6, 6, 8, 3, 1447, 63, 68, 12, 2, 54, 2, 2, 2684],
      [3, 74, 21.66, 10, 2, 8, 10, 8, 9, 3, 1462, 73, 61, 14, 1, 46, 1, 2, 2892],
      [6, 75, 26.35, 10, 9, 6, 9, 9, 7, 3, 1380, 72, 61, 12, 2, 45, 2, 2, 2713],
      [5, 80, 23.21, 6, 7, 8, 7, 7, 10, 3, 1266, 74, 63, 13, 2, 52, 2, 3, 2680],
      [8, 90, 30.32, 9, 5, 6, 8, 8, 8, 2, 1402, 63, 75, 14, 1, 58, 2, 3, 1803],
      [7, 100, 27.19, 5, 8, 8, 11, 4, 2, 1, 1643, 44, 41, 13, 4, 42, 1, 3, 1899],
      [13, 62, 28.53, 11, 6, 6, 7, 8, 5, 3, 1297, 62, 65, 12, 2, 60, 2, 3, 1788],
      [7, 65, 23.86, 5, 8, 8, 8, 6, 7, 2, 1318, 65, 77, 12, 1, 50, 1, 2, 1904],
      [6, 78, 27.49, 9, 9, 12, 6, 9, 6, 3, 1365, 70, 67, 11, 2, 75, 2, 3, 1832],
      [4, 89, 31.49, 4, 9, 10, 10, 3, 1, 1, 1702, 52, 58, 12, 3, 50, 1, 2, 2400],
      [2, 86, 24.12, 18, 5, 16, 11, 2, 3, 2, 1698, 56, 49, 12, 4, 44, 1, 2, 2361],
      [1, 85, 19.16, 5, 12, 14, 8, 6, 7, 3, 1318, 71, 66, 14, 2, 50, 2, 2, 2397],
      [14, 69, 26.25, 20, 7, 16, 6, 4, 9, 2, 1400, 78, 65, 12, 3, 44, 2, 4, 1835],
      [9, 74, 24.98, 11, 12, 12, 12, 5, 6, 2, 1512, 62, 63, 14, 2, 40, 1, 3, 1938],
      [3, 58, 25.35, 10, 7, 8, 13, 4, 3, 1, 1712, 36, 41, 14, 4, 55, 1, 1, 2674],
      [1, 65, 18.23, 3, 9, 12, 12, 5, 2, 1, 1699, 38, 33, 14, 4, 50, 2, 1, 2600],
      [12, 79, 24.76, 13, 6, 16, 9, 3, 1, 2, 1358, 61, 54, 10, 2, 44, 1, 4, 1202],
      [10, 73, 18.64, 12, 4, 12, 11, 4, 3, 2, 1342, 67, 63, 14, 2, 49, 1, 4, 1188],
      [4, 90, 19.74, 8, 6, 20, 10, 3, 2, 2, 1477, 45, 51, 11, 3, 50, 1, 3, 1908],
      [7, 100, 36.88, 11, 2, 4, 7, 6, 8, 3, 1290, 69, 66, 14, 1, 54, 1, 3, 1845],
      [6, 69, 29.23, 17, 8, 16, 8, 7, 6, 3, 1390, 76, 62, 12, 2, 46, 1, 3, 1832],
      [11, 62, 31.12, 14, 8, 18, 10, 3, 3, 3, 1460, 51, 63, 11, 4, 32, 3, 4, 1184],
      [8, 82, 20.75, 14, 16, 30, 12, 2, 4, 2, 1592, 34, 39, 12, 3, 35, 3, 3, 1820],
      [10, 84, 25.25, 15, 7, 22, 12, 3, 2, 4, 1390, 45, 49, 12, 3, 37, 3, 4, 1275],
      [13, 86, 26.99, 18, 14, 34, 10, 4, 3, 2, 1495, 48, 45, 11, 2, 39, 5, 3, 1800],
      [4, 80, 22.56, 2, 0, 2, 11, 3, 2, 2, 1740, 47, 45, 12, 5, 48, 1, 2, 2120],
      [7, 64, 29.05, 6, 4, 8, 7, 8, 8, 2, 1427, 62, 76, 13, 2, 47, 3, 3, 1957],
      [15, 58, 26.66, 4, 6, 8, 9, 9, 9, 2, 1279, 67, 78, 13, 3, 54, 1, 4, 1932],
      [9, 52, 12.45, 8, 3, 4, 10, 4, 2, 1, 1699, 32, 26, 11, 4, 45, 1, 3, 1840],
      [12, 76, 31.73, 23, 0, 12, 12, 3, 2, 2, 1320, 48, 56, 12, 2, 35, 3, 3, 1730],
      [7, 81, 28.57, 10, 0, 6, 11, 8, 6, 3, 1240, 62, 78, 14, 2, 50, 1, 3, 1629],
      [1, 0, 26.57, 19, 14, 16, 8, 7, 4, 3, 1558, 57, 69, 11, 3, 40, 3, 2, 1945],
      [3, 15, 25.77, 12, 4, 10, 10, 5, 2, 1, 1634, 46, 50, 12, 5, 38, 2, 1, 2010],
    ]

    this.avgData = []
    this.calc_avgData()
    this.H0 = 0
    this.H1 = 0
    this.H2 = 0

    for (const v of this.y0)
    {
      if (v.name == Vars.free)
        continue
      this.H0 += (v.value ?? 1) * this.avgData[this.getIndexVarInClearData(v.name)]
    }

    for (const v of this.y1)
    {
      if (v.name == Vars.free)
        continue
      this.H1 += (v.value ?? 1) * this.avgData[this.getIndexVarInClearData(v.name)]
    }

    for (const v of this.y2)
    {
      if (v.name == Vars.free)
        continue
      this.H2 += (v.value ?? 1) * this.avgData[this.getIndexVarInClearData(v.name)]
    }

    for (let i = 0; i < this.y0.length; i++) {
      if (this.y0[i].name == Vars.free)
        continue

      this.y0[i].factor = ((this.y0[i].value ?? 1) * this.avgData[this.getIndexVarInClearData(this.y0[i].name)]) / this.H0
    }

    for (let i = 0; i < this.y1.length; i++) {
      if (this.y1[i].name == Vars.free)
        continue

      this.y1[i].factor = ((this.y1[i].value ?? 1) * this.avgData[this.getIndexVarInClearData(this.y1[i].name)]) / this.H1
    }

    for (let i = 0; i < this.y2.length; i++) {
      if (this.y2[i].name == Vars.free)
        continue

      this.y2[i].factor = ((this.y2[i].value ?? 1) * this.avgData[this.getIndexVarInClearData(this.y2[i].name)]) / this.H2
    }

    this.y0_sort = this.y0.sort((a, b) => (a.value ?? 0) - (b.value ?? 0))
    this.y1_sort = this.y1.sort((a, b) => (a.value ?? 0) - (b.value ?? 0))
    this.y2_sort = this.y2.sort((a, b) => (a.value ?? 0) - (b.value ?? 0))
  }

  calc_avgData()
  {
    let avg = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    for (let row of this.clearData)
    {
      let i = 0
      for (const item of row)
      {
        avg[i] += item
        i++
      }
    }
    this.avgData = avg.map((item) => item / 19)
  }

  @action.bound
  addPatient(patient: Patient) {
    patient.y0 = this.computed_y0(patient.vars)
    patient.y1 = this.computed_y1(patient.vars)
    patient.y2 = this.computed_y2(patient.vars)
    this.patients.push(patient)
  }

  computed_y0(vars: Array<Var> | undefined)
  {
    if (vars)
      return 5.4464092 + 0.050953118 * this.getVar(Vars.a4p, vars) - 0.013288181 * this.getVar(Vars.a7m, vars)
        - 0.063827109 * this.getVar(Vars.a9m, vars) - 0.00074338507 * this.getVar(Vars.b7m, vars)
        + 0.018172289 * this.getVar(Vars.b8, vars) - 0.050829126 * this.getVar(Vars.b9, vars)
        + 0.010869 * this.getVar(Vars.c1p, vars) - 0.083809986 * this.getVar(Vars.c2m, vars)
        + 0.022998827 * this.getVar(Vars.c3p, vars) - 0.029461177 * this.getVar(Vars.c4m, vars)
        + 0.047268283 * this.getVar(Vars.c5p, vars) + 0.00018021824 * this.getVar(Vars.c6p, vars)
  }

  computed_y1(vars: Array<Var> | undefined)
  {
    if (vars)
      return 53.746265 - 0.28433248 * this.getVar(Vars.a1m, vars) - 0.17475687 * this.getVar(Vars.a3m, vars)
        + 0.85825476 * this.getVar(Vars.a4p, vars) - 1.0762227 * this.getVar(Vars.a7m, vars)
        - 0.57508486 * this.getVar(Vars.a8m, vars) - 0.13172928 * this.getVar(Vars.a9m, vars)
        - 0.15825571 * this.getVar(Vars.b4m, vars) - 0.0025522993 * this.getVar(Vars.b7m, vars)
        + 0.46340595 * this.getVar(Vars.b8, vars) - 0.55763233 * this.getVar(Vars.b9, vars)
        + 0.042217376 * this.getVar(Vars.c3p, vars) - 1.8093715 * this.getVar(Vars.c4m, vars)
        + 3.1995576 * this.getVar(Vars.c5p, vars)
  }

  computed_y2(vars: Array<Var> | undefined)
  {
    if (vars)
      return 44.494613 - 1.842227 * this.getVar(Vars.a1m, vars) - 0.19755511 * this.getVar(Vars.a3m, vars)
        + 1.0447311 * this.getVar(Vars.a4p, vars) - 1.2896831 * this.getVar(Vars.a7m, vars)
        - 0.42637097 * this.getVar(Vars.a8m, vars) - 0.14914382 * this.getVar(Vars.a9m, vars)
        + 1.4473741 * this.getVar(Vars.b1p, vars) + 0.81372485 * this.getVar(Vars.b2p, vars)
        - 1.6852855 * this.getVar(Vars.b4m, vars) - 1.373703 * this.getVar(Vars.b6m, vars)
        - 0.011580123 * this.getVar(Vars.b7m, vars) + 0.70462104 * this.getVar(Vars.b8, vars)
        - 0.76405236 * this.getVar(Vars.b9, vars) - 2.3331594 * this.getVar(Vars.c2m, vars)
        + 13.451645 * this.getVar(Vars.c5p, vars)

  }

  getVar(name: Vars, array: Array<Var>): number {
    for (const item of array)
      if (item.name == name)
        return <number>item.value
    return 0
  }

  getFactor(name: string, array: Array<VarFac>): number | undefined {
    for (const item of array)
      if (item.name == name)
        return item.factor

    return undefined
  }



  getIndexVarInClearData(name: Vars): number {
    switch (name) {
      case Vars.a1m: return 0
      case Vars.a3m: return 1
      case Vars.a4p: return 2
      case Vars.a7m: return 3
      case Vars.a8m: return 4
      case Vars.a9m: return 5
      case Vars.b1p: return 6
      case Vars.b2p: return 7
      case Vars.b4m: return 8
      case Vars.b6m: return 9
      case Vars.b7m: return 10
      case Vars.b8:  return 11
      case Vars.b9:  return 12
      case Vars.c1p: return 13
      case Vars.c2m: return 14
      case Vars.c3p: return 15
      case Vars.c4m: return 16
      case Vars.c5p: return 17
      case Vars.c6p: return 18
      default: return 0
    }
  }

}
