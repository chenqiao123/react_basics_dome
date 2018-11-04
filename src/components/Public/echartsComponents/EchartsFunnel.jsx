import React, { Component } from 'react';
//引入Echarts主模块
import echarts from 'echarts/lib/echarts';
//引入柱状图
import 'echarts/lib/chart/funnel';
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
        const { horizontal,legend, series,} = this.props;
        // const {horizontal, legend, series,radius, categorys} = this.props;
        // const borderRadius = radius?horizontal?[0,5,5,0]:[5,5,0,0]:[0,0,0,0];
        // const single= series.length===1;
        /**
         * series: Array<{category: '', data: Array[number], name: string, color: string}>
         */
        const datashow=[];
          
            series.map((item, index) => (
                datashow.push( { value: item.data, name: item.name } )       
            ))
    
        console.log("显示的data是什么呢",datashow)
        myChart.setOption({
            title: {
                text: '漏斗图',
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c}%"
            },
            toolbox: {
                right:"4px",
                feature: {
                    dataView: { readOnly: false,
                        optionToContent: function (opt) {
                            console.log("漏斗图的数据是:=====",opt)
                            // let axisData = horizontal ? opt.yAxis[0].data : opt.xAxis[0].data;
                            // let series = opt.series;
                            let table = '<table style="width:100%;text-align:center"><tbody><tr>'
                            //     + '<td>时间</td>';
                            // for (let j = 0, l = series.length; j < l; j++) {
                            //     table += '<td>' + series[j].name + '</td>'
                            // }
                            // table += '</tr>';
                            // for (var i = 0, l = axisData.length; i < l; i++) {
                            //     table += '<tr>'
                            //         + '<td>' + axisData[i] + '</td>'

                            //     for (let j = 0, l = series.length; j < l; j++) {
                            //         table += '<td>' + series[j].data[i] + '</td>'
                            //     }

                            //     + '</tr>';
                            // }
                            table += '</tbody></table>';
                            return table;
                        }
                     },
                    saveAsImage: {}
                }
            },
            legend: {
                show: legend,
                data: series.map((item, index) => item.name),
                // data: ['展现', '点击', '访问', '咨询', '订单']
            },
            calculable: true,
            series: [
                {
                    name: '漏斗图',
                    type: 'funnel',
                    left: '10%',
                    top: 60,
                    //x2: 80,
                    bottom: 60,
                    width: '80%',
                    // height: {totalHeight} - y - y2,
                    min: 0,
                    max: 100,
                    minSize: '0%',
                    maxSize: '100%',
                    sort: 'descending',
                    gap: 2,
                    label: {
                        normal: {
                            show: true,
                            position: 'inside'
                        },
                        emphasis: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            length: 10,
                            lineStyle: {
                                width: 1,
                                type: 'solid'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            borderColor: '#fff',
                            borderWidth: 1
                        }
                    },
                    // data: [
                    //     { value: 60, name: '访问' },
                    //     { value: 40, name: '咨询' },
                    //     { value: 20, name: '订单' },
                    //     { value: 80, name: '点击' },
                    //     { value: 100, name: '展现' }
                    // ]
                    data:datashow
                }
            ]
        })
    }

    render() {
        return (
            <div ref={ref => this.chart = ref} className='chartItem' style={{ width: '100%', height: '360px', margin: '0 auto' }}>

            </div>
        );
    }
}

export default MulItem;