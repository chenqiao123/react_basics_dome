import React, { Component } from 'react';
//引入Echarts主模块
import echarts from 'echarts/lib/echarts';
//引入柱状图
import 'echarts/lib/chart/bar';
//引入lengend标题组件
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
/**
 * param horizontal boolean 是否水平显示
 * param legend boolean 是否显示顶部标签
 * param series {data: number[], name: string, color: string}[] 每一项的配置
 * param radius boolean 是否有raduis
 * param categorys string[] | number[] 类型
 */
class MulItem extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let myChart = echarts.init(this.chart);
        const {horizontal, legend, series,radius, categorys} = this.props;
        const borderRadius = radius?horizontal?[0,5,5,0]:[5,5,0,0]:[0,0,0,0];
        const single= series.length===1;
        /**
         * series: Array<{category: '', data: Array[number], name: string, color: string}>
         */
        myChart.setOption({
            title: { 
                text: this.props.title,
                left: 20
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                show: legend,
                data: series.map((item, index) => item.name),
                align: 'left',
                top: '30px'
            },
            grid: {
                left: 100
            },
            xAxis: {
                type: horizontal?'value':'category',
                data: horizontal?'':categorys,
                name: '',
                axisLabel: {
                    formatter: function(value) {
                        if (value > 1000) {
                            let v = (value/1000).toFixed(1) + 'k';
                            return v;
                        }
                        return value;
                    },
                    color: '#000'
                },
                axisLine: {
                    
                    lineStyle: {
                        color:'#E8E8E8',
                        
                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: horizontal?'category':'value',
                inverse: horizontal,
                data: horizontal?categorys:'',
                axisLabel: {
                    // formatter: function(value) {
                    //     return '{'+value+'| }\n{value|' + value + '}'
                    // },
                    margin: 20,
                    rich: {
                        value: {
                            lineHeight: 30,
                            alin: 'center',
                        },
                    },
                    color: '#000'
                },
                axisLine: {
                    lineStyle: {
                        color:'#E8E8E8'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            // series:[
            //     {
            //         name: '点击量',
            //         type: 'bar',
            //         data: [1650, 1700, 300, 1000, 1000],
            //         itemStyle: {
            //             color: '#87E8DE',
            //             barBorderRadius: borderRadius,
            //         },
            //         barWidth: '10px'
            //     },
            //     {
            //         name: '下载量',
            //         type: 'bar',
            //         data: [1500, 1050, 1100, 1000, 1000],
            //         itemStyle: {
            //             color:'#69C0FF',
            //             barBorderRadius: borderRadius,
            //         },
            //         barWidth: '10px'
            //     },
            //     {
            //         name: '激活量',
            //         type: 'bar',
            //         data: [1650, 1700, 300, 1000, 1000],
            //         itemStyle: {
            //             color: '#FFD666',
            //             barBorderRadius: borderRadius,
            //         },
            //         barGap: '0%',
            //         barWidth: '10px'
            //     },]
                
            series: series.map((item, index) => ({
                 name: item.name,
                 type: 'bar',
                 data: item.data,
                 itemStyle: {
                  color: item.color,
                  barBorderRadius: borderRadius,
                 },
                 barGap: '0%',
                 barWidth: single?'20px' : '10px'
                 }))
        })
    }

    render() {
        return (
            <div ref={ref => this.chart = ref} className='chartItem' style={{width: '100%', height: '360px', margin: '0 auto'}}>

            </div>
        );
    }
}

export default MulItem;