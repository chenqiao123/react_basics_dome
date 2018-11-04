import React, { Component } from 'react';
import echarts from 'echarts';
import edit from '../../assets/images/edit.png';
class EchartsBarTable extends Component {
 componentDidMount(){
   
    var myChart = echarts.init(document.getElementById('main'));

    // 指定图表的配置项和数据
    myChart.setOption({
        title: {
            text: '折线图堆叠'
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
        },
        // grid: {
        //     left: '3%',
        //     right: '4%',
        //     bottom: '3%',
        //     containLabel: true
        // },
        toolbox: {
            feature: {
                saveAsImage: {},
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {
                    readOnly: false,
                    optionToContent: function(opt) {
                        let axisData = opt.xAxis[0].data;
                        let series = opt.series;
                        // let newdata=[]
                        // // 构建第一格的数据
                        // for(let i=0;i<series.length;i++){}
                        console.log("==========================",axisData,series)
                        // let table = '<table style="width:100%;text-align:center"><tbody><tr>'
                        //              + '<td>时间</td>'
                        //              + '<td>' + series[0].name + '</td>'
                        //              + '<td>' + series[1].name + '</td>'
                        //              + '</tr>';
                        let table='<table style="width:100%;text-align:center"><tbody><tr>'
                                     + '<td>时间</td>';
                                    //  let td=""
                        for(let j=0, l = series.length; j < l; j++){
                            table+= '<td>' + series[j].name + '</td>'      
                        }
                        table+='</tr>';
                        for (var i = 0, l = axisData.length; i < l; i++) {
                            table += '<tr>'
                                     + '<td>' + axisData[i] + '</td>'
                                    
                                     for(let j=0, l = series.length; j < l; j++){
                                        table += '<td>' + series[j].data[i] + '</td>'      
                                    }
                                    //   + td
                                    //  + '<td>' + series[1].data[i] + '</td>'
                                     + '</tr>';
                                    //  console.log("td===",td,table)
                        }
                        console.log("table===",table)
                        table += '</tbody></table>';
                        return table;
                    }
                },
                magicType: {type: ['line', 'bar']},
                restore: {},
                myTool1: {
                    show: true,
                    title: '自定义扩展方法1',
                    icon: `image://${edit}`,
                    onclick: function (){
                        alert('myToolHandler1')
                    }
                },
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        dataZoom: [{
            type: 'slider',
            startValue: '周三',
            // endValue:'周二'
        }],
        series: [
            {
                name:'邮件营销',
                type:'bar',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'bar',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'bar',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    });

    // 使用刚指定的配置项和数据显示图表。
    // console.log("dddd===============",myChart)
    // myChart.setOption(option);
 }
 render(){
     return(<div id="main" ref="main" style={{ width: 400, height: 600 }}></div>)
 }
}
export default EchartsBarTable