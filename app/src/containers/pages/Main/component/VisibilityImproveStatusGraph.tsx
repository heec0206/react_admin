// src/App.js
import React, { useEffect, useState, useCallback } from "react";
import ReactEcharts from "echarts-for-react"; 
import axios from 'axios';
import VisibilityImproveStatus from "./VisibilityImproveStatus";



function VisibilityImproveStatusGraph() {  


  interface graph1 {
    upNm : string;
    completeCnt : number;
    requestCnt : number;
  }

  const [data1, setData1] = useState<graph1[]>([]);
  //const [data2, setData2] = useState<string[]>([]);

  const xAxisData: string[] = [];
  const target1: number[] = [];
  const target2: number[] = [];

  useEffect(() => {
    // Optionally the request above could also be done as
    const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/getVisibilityImproveStatus', {
      params: {
        //ID: 12345
      }
    })
    .then(function (response) {
      console.log('결과',response.data.data.result);
      setData1(response.data.data.result);
   
    });    
  }, []);
      
  for (let i = 0; i < data1.length; i++) {              
    //console.log("xAxisData", response.data.data.result.upNm);
    xAxisData.push(data1[i].upNm);
    target1.push(data1[i].requestCnt);
    target2.push(data1[i].completeCnt);        
    //data2.push(Math.random());
  } 
  console.log('xAxisData:', xAxisData);      
  console.log('target1:', target1);      
  console.log('target2:', target2);   
  
 
  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };
  const option = {
    position: "relative",
    height: "0px",
    legend: {
      data: ['요청', '완료'],
      left: '10%'
    },
    brush: {
      toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
      xAxisIndex: 0
    },
    toolbox: {
      feature: {
        magicType: {
          type: ['stack']
        }, 
        dataView: {}
      }
    },
    tooltip: {},
    xAxis: {
      data: xAxisData,
      name: 'X Axis',
      axisLine: { onZero: true },
      splitLine: { show: false },
      splitArea: { show: false }
    },
    yAxis: {},
    grid: {
      bottom: 200
    },
    series: [
      {
        name: '요청',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: target1
      },
      {
        name: '완료',
        type: 'bar',
        stack: 'one',
        emphasis: emphasisStyle,
        data: target2
      }
    ]
  };
  
  return (
    <div>      
      <div>
        <ReactEcharts option={option}  style={{ height: "200px" }}/>
      </div>
      <div>
        <VisibilityImproveStatus/>  
      </div>
    </div>

  );
  
}
export default VisibilityImproveStatusGraph;