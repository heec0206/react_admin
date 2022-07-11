// src/App.js
import React, { useEffect, useState, useCallback } from "react";
import ReactEcharts from "echarts-for-react"; 
import axios from 'axios';
import WaterQuality from "./WaterQuality";



function WaterQualityGraph() {  


  interface graph1 {
    factoryNm : string; //공장명
    abs : number;
    bod : number;
    cob : number;
    cr : number;
    cr6 : number;
    f : number;
    nh : number;	
  }


  interface seriesObj {
	name: string,
	type: string,
	stack: string,	
	data: number[]
  }  

  const [data1, setData1] = useState<graph1[]>([]);
  //const [data2, setData2] = useState<string[]>([]);

  const headerData: string[] = [];

  const xAxisData: string[] = [];
  const tempStr: string[] = [];
  const target1: number[] = [];
  const target2: number[] = [];

  const seriesTarget: seriesObj[] = [];
  
  useEffect(() => {
    // Optionally the request above could also be done as
    const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectWaterQuality', {
      params: {
        //ID: 12345
      }
    })
    .then(function (response) {
      console.log('AtmosphereGraph 결과',response.data.data.result);
      setData1(response.data.data.result);
   
    });    
  }, []);


      
  for (let i = 0; i < data1.length; i++) {              
    //console.log("xAxisData", response.data.data.result.upNm);
    headerData.push(data1[i].factoryNm);

    //target1.push(data1[i].requestCnt);
    //target2.push(data1[i].completeCnt);        
    //data2.push(Math.random());

	const objNew = {
		name: data1[i].factoryNm,
		type: 'line',
		stack: 'Total',		
		data: [data1[i].abs
			,data1[i].bod  
			,data1[i].cob  
			,data1[i].cr  
			,data1[i].cr6  
			,data1[i].f  
			,data1[i].nh  
		]
	}
	seriesTarget.push(objNew);
  } 
  console.log('WaterQualityGraph xAxisData:', xAxisData);      
  

 
  const emphasisStyle = {
    itemStyle: {
      shadowBlur: 10,
      shadowColor: 'rgba(0,0,0,0.3)'
    }
  };


  const option = {

	title: {
		text: ''
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
		type: 'cross',
		label: {
			backgroundColor: '#6a7985'
		}
		}
	},
	legend: {
		data: headerData
		//data: ['add', 'bdd', 'cff', 'd fff']		
		//data: xAxisData
	},
	toolbox: {
		feature: {
		saveAsImage: {}
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [
		{
		type: 'category',
		boundaryGap: false,
		data: ['ABS', 'BOD', 'COB', 'Cr', 'Cr+6', 'F', 'n-H(광)']
		//data: xAxisData
		}
	],
	yAxis: [
		{
		type: 'value'
		}
	],
	series: seriesTarget


  };
  
  return (
    <div>
	
      <div>
        <ReactEcharts option={option}  style={{ height: "200px" }}/>
      </div>
      <div>
        <WaterQuality/>  
      </div>
    </div>

  );
  
}
export default WaterQualityGraph;