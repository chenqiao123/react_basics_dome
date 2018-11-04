import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
const {  RangePicker} = DatePicker;
const dateFormat = 'YYYY-MM-DD';
class Time extends Component {
    state={
        startTime:"",
        endTime:"",
    }
	 disabledDate=(current)=> {
       return current && current > moment().endOf('day');
     }
     timeChange=(dates,dateStrings)=>{
         this.props.Timeback(dateStrings[0],dateStrings[1])
         this.setState({
             startTime:dateStrings[0],
             endTime:dateStrings[1],
        })
        //console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
     }
     onOk=(value)=>{
         const {startTime,endTime}=this.state
        //console.log('okFrom: ',value,startTime,endTime);
        // this.props.Timeback(startTime,endTime)
          this.props.onOk(startTime,endTime) 
     }
   
    render() {
        const {startTime,endTime,currentState}=this.props
        return (
            <div className="timewrapper">
                <ul>
         <li className={currentState===0?'active':''} onClick={this.props.currentFunc.bind(this,0)}>今天</li>
         <li className={currentState===1?'active':''} onClick={this.props.currentFunc.bind(this,1)}>昨天</li>
         <li className={currentState===2?'active':''} onClick={this.props.currentFunc.bind(this,2)}>近7天</li>
         <li className={currentState===3?'active':''} onClick={this.props.currentFunc.bind(this,3)}>近14天</li>
         <li  style={{width:323}} className={currentState===4?'active timeshow':'timeshow'}>
            
          <RangePicker
          allowClear={false}
          defaultValue={[moment(this.props.startTime, dateFormat), moment(this.props.endTime, dateFormat)]}
          value={[moment(this.props.startTime, dateFormat), moment(this.props.endTime, dateFormat)]}
          onChange={this.timeChange}
          onOk={this.onOk}
          style={{width:'100%',height:'100%',float:'right'}}
	      disabledDate={this.disabledDate}
	      format={dateFormat}
    />
    </li>
    </ul>
    </div>
        )
    }
}
export default Time;