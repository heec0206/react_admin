// src/App.js
import React, { useEffect, useState, useCallback } from "react";
import ReactEcharts from "echarts-for-react"; 
import axios from 'axios';

function DailyStatusGraph() {  

interface graph1 {
	workDate : string;
	workCd : string;
	defaultWorkCnt : number;
	riskWorkCnt : number;
	}

	const [data1, setData1] = useState<graph1[]>([]);
	//const [data2, setData2] = useState<string[]>([]);

	const xAxisData: string[] = [];
	const target1: number[] = [];
	const target2: number[] = [];

	useEffect(() => {
	// Optionally the request above could also be done as
	const result = axios.get(process.env.REACT_APP_REST_API_HOST+'/api/selectDailyStatus', {
		params: {
		//ID: 12345
		}
	})
	.then(function (response) {
		console.log('dailyStatusGraph',response.data.data.result);
		setData1(response.data.data.result);
	
	});    
	}, []);


		
	for (let i = 0; i < data1.length; i++) {              
	//console.log("xAxisData", response.data.data.result.upNm);
	xAxisData.push(data1[i].workDate);
	target1.push(data1[i].defaultWorkCnt);
	target2.push(data1[i].riskWorkCnt);        
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
	height: "250px",
    legend: {
		data: ['일반작업', '위험작업'],
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
		name: '일반작업',
		type: 'bar',
		stack: 'one',
		emphasis: emphasisStyle,
		data: target1
		},
		{
		name: '위험작업',
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
		<ReactEcharts option={option}  style={{ height: "350px" }}/>
		</div>
	</div>

	);
} 
export default DailyStatusGraph;