// src/App.js
import React from 'react';
import ReactEcharts from 'echarts-for-react';
import MainContents from './MainContents';

function Graph2() {
  const xAxisData: string[] = [];
  const data1: number[] = [];
  const data2: number[] = [];
  const data3: number[] = [];
  const data4: number[] = [];
  for (let i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push(Math.random());
    data2.push(Math.random());
    data3.push(Math.random());
    data4.push(Math.random());
  }
  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)',
    },
  };
  const option = {
    position: 'relative',
    height: '50px',
    legend: {
      data: ['요청', '완료'],
      left: '10%',
    },
    brush: {
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 0,
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack'],
        },
        dataView: {},
      },
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      name: 'X Axis',
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false },
    },
    yAxis: {},
    grid: {
      bottom: 200,
    },
    series: [
      {
        name: '요청',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data1,
      },
      {
        name: '완료',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: data2,
      },
    ],
  };

  return (
    <div>
      <div>
        <ReactEcharts
          option={option}
          style={{ width: '100%', height: '130px' }}
        />
      </div>
      <div>
        <MainContents />
      </div>
    </div>
  );
}
export default Graph2;
