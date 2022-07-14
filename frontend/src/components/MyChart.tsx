import * as React from 'react';
import {useEffect} from "react";
import {Chart, ChartData, registerables, ScatterDataPoint} from "chart.js";

interface Props {
  chartData: number[],
  chartDataR: number[]
}

export default function MyChart(props: Props) {

    Chart.register(...registerables)
    const datasets = [{
        label: 'Фактические значения',
        data: props.chartData,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },{
      label: 'Расчётные значения',
      data: props.chartDataR,
      fill: false,
      borderColor: 'rgb(94,28,137)',
      tension: 0.1
    }];

  const formatData = (data: number[]): Chart.ChartData => ({
    labels: Array.from({length: props.chartData.length}, (_, i) => i + 1),
    datasets: datasets
  });
    const chartRef = React.useRef<Chart | null>(null);
    const canvasCallback = (canvas: HTMLCanvasElement | null) => {
      if (!canvas) return;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        chartRef.current = new Chart(ctx, {
          type: "line",
          data: {
            datasets: datasets
          },
          options: { responsive: true }
        });
      }
    };

  useEffect(() => {
    // must verify that the chart exists
    if (chartRef.current) {
      //@ts-ignore
      chartRef.current.data = formatData(props.chartData);
      chartRef.current.update();
    }

    // cleanup function - I had to remove this as it was causing errors
    /*return () => {
      chartRef.current?.destroy();
    };*/
  });

    return (
      <div>
        <canvas ref={canvasCallback}></canvas>
      </div>
    );

};
