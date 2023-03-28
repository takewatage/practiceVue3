import { IScatteringData } from '@/const/interface'

export interface IChartDataset {
  label: string
  data: IScatteringData[] | object
  backgroundColor: string
}

export const chartConfig = {
  datasets: [
    {
      label: '不動産取引価格',
      backgroundColor: '#000000',
      data: [],
    },
  ],
}

export const chartOptions = {
  height: 300,
  responsive: true,
  maintainAspectRatio: false,
  tooltips: {
    intersect: false,
    mode: 'index',
    axis: 'x',
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      axis: 'x',
      display: true,
      title: {
        display: true,
        text: '面積（㎡）',
      },
    },
    y: {
      axis: 'y',
      display: true,
      title: {
        display: true,
        text: '取引価格（円）',
      },
    },
  },
}
