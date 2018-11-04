import React, { Component } from 'react';
//引入Echarts主模块
import echarts from 'echarts/lib/echarts';
//引入柱状图
import 'echarts/lib/chart/bar';
//引入lengend标题组件
import 'echarts/lib/component/legend';
import 'echarts/lib/component/title';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/dataZoom';
/**
 * param horizontal boolean 是否水平显示
 * param legend boolean 是否显示顶部标签
 * param series {data: number[], name: string, color: string}[] 每一项的配置
 * param radius boolean 是否有raduis
 * param categorys string[] | number[] 类型
 * dataZoomshow  boolean 是否显示
 * startValue string 初始默认的开始值
 * endValue string 初始默认的结束值
 * seriestype,图表的初始类型,默认为bar 
 * stack 是否堆叠 默认为false 不堆叠
 * postiontoobar 顶部工具的位置 默认在顶部,
 */
class MulItem extends Component {
    constructor(props) {
        super(props);
    }

    myChartchangge = () => {
        // console.log("resize窗口发生变化的之后的====")
        let myChart = echarts.init(this.chart);
        // startValue: startValue,
        // endValue:endValue,
        const {postiontoobar,stack,horizontal, legend, series, radius, categorys, endValue, startValue, dataZoomshow,seriestypeshow } = this.props;
        const borderRadius = radius ? horizontal ? [0, 5, 5, 0] : [5, 5, 0, 0] : [0, 0, 0, 0];
        const single = series.length === 1;
        const seriestype=seriestypeshow?seriestypeshow:"bar";
        const stacktemp=stack?series[0].name:null;
        const postiontoobartepm=postiontoobar?postiontoobar:null
        /**
         * series: Array<{category: '', data: Array[number], name: string, color: string}>
         */
        console.log("myChartchangge%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%**********************",stacktemp)
        myChart.setOption({
            title: {
                text: this.props.title,
                left: 20
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
             
            },
            legend: {
                show: legend,
                data: series.map((item, index) => item.name),
                align: 'left',
                // top: '30px',
                bottom:postiontoobartepm
            },
            grid: {
                left: 100
            },
            xAxis: {
                type: horizontal ? 'value' : 'category',
                data: horizontal ? '' : categorys,
                name: '',
                axisLabel: {
                    formatter: function (value) {
                        if (value > 1000) {
                            let v = (value / 1000).toFixed(1) + 'k';
                            return v;
                        }
                        return value;
                    },
                    color: '#000'
                },
                axisLine: {

                    lineStyle: {
                        color: '#E8E8E8',

                    }
                },
                splitLine: {
                    show: false
                }
            },
            yAxis: {
                type: horizontal ? 'category' : 'value',
                inverse: horizontal,
                data: horizontal ? categorys : '',
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
                        color: '#E8E8E8'
                    }
                },
                splitLine: {
                    show: false
                }
            },
            dataZoom: [{
                show: dataZoomshow,
                type: 'slider',
                startValue: startValue ? startValue : null,
                endValue: endValue ? endValue : null,
            }],
            toolbox: {
                right:"4px",
                feature: {
                    dataView: {
                        readOnly: false,
                        // lang:['数据视图', '关闭'],
                        optionToContent: function (opt) {
                            let axisData = horizontal ? opt.yAxis[0].data : opt.xAxis[0].data;
                            let series = opt.series;
                            console.log("数据出现什么情况了呢?=====",axisData,series)
                            if(!series instanceof Array||!axisData instanceof Array){
                                return false
                            }
                            let table = '<table style="width:100%;text-align:center"><tbody><tr>'
                                + '<td>时间</td>';
                            for (let j = 0, l = series.length; j < l; j++) {
                                if(series[j].name!=undefined){
                                table += '<td>' + series[j].name + '</td>'}
                            }
                            table += '</tr>';
                            for (var i = 0, l = axisData.length; i < l; i++) {
                                table += '<tr>'
                                    + '<td>' + axisData[i] + '</td>'

                                for (let j = 0, l = series.length; j < l; j++) {
                                    if(series[j].data!=undefined){
                                    table += '<td>' + series[j].data[i] + '</td>'
                                    }
                                }

                                + '</tr>';
                            }
                            table += '</tbody></table>';
                            return table;
                        }
                    },
                    magicType: { type: ['line', 'bar'] },
                    saveAsImage: {},
                }
            },
            series: series.map((item, index) => ({
                name: item.name,
                type: seriestype,
                data: item.data,
                stack:stacktemp,
                itemStyle: {
                    color: item.color,
                    barBorderRadius: borderRadius,
                },
                barGap: '0%',
                barWidth: single ? '20px' : '10px'
            }))
        })
    }
    componentDidMount() {

        // this.screenChange();
        this.myChartchangge()
    }
    // componentWillReceiveProps(nextprops){
    //     if(nextprops.series!==this.props.series){
    //         console.log("myChartchangge%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%&&&&&&&&&&&&&",this.props.series,nextprops.series)
    //         this.myChartchangge()
    //     }
    // }

    render() {
        return (
            <div ref={ref => this.chart = ref} className='chartItem' style={{ width: '100%', height: '360px', margin: '0 auto' }}>

            </div>
        );
    }
}

export default MulItem;