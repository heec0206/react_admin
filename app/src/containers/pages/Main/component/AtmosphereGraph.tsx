// src/App.js
import React, { useEffect, useState, useCallback } from "react";
import ReactEcharts from "echarts-for-react"; 
import axios from 'axios';
import Atmosphere from "./Atmosphere";



function AtmosphereGraph() {  


  interface graph1 {
    factoryNm : string;//공장명
	dust : number; //먼지
	hshm : number; //황산화물
	ywss : number; //염화수소
	amna : number; //암모니아
	bshhm : number; //불소화합물
	crhhm : number; //크롬화합물
	bswwm : number; //비소화합물
	aahhm : number; //아연화합물
	nghhm : number; //니킬 및 그 화합물
	grhhm : number; //구리화합물
	nhhm : number; //납화합물
	sahss : number; //시안화수소
	jsshm : number; //질소산화물
	cdmhhm : number; //카드뮬화합물
	pmhhm : number; //페몰화합물
	pradhd : number; //포름알데히드
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
    const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectAtmosphere', {
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
		data: [data1[i].dust
			,data1[i].hshm  
			,data1[i].ywss  
			,data1[i].amna  
			,data1[i].bshhm  
			,data1[i].crhhm  
			,data1[i].bswwm  
			,data1[i].aahhm  
			,data1[i].nghhm  
			,data1[i].grhhm  
			,data1[i].nhhm  
			,data1[i].sahss  
			,data1[i].jsshm  
			,data1[i].cdmhhm  
			,data1[i].pmhhm  
			,data1[i].jsshm 
			,data1[i].pradhd  
		]
	}
	seriesTarget.push(objNew);
  } 
  console.log('AtmosphereGraph xAxisData:', xAxisData);      
  

 
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
		data: ['먼지', '황산화물', '염화수소', '암모니아', '불소화합물', '크롬화합물'
		, '비소화합물', '아연화합물', '니킬 및 그 화합물', '구리화합물', '납화합물'
		, '시안화수소', '납화합물', '질소산화물', '카드뮬화합물', '페몰화합물', '포름알데히드']
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
        <Atmosphere/>  
      </div>
    </div>

  );
  
}
export default AtmosphereGraph;