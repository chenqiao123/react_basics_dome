import React from 'react';
import $ from 'jQuery';
import { Tag, Popover,Row, Col,Button} from "antd";
import './TfTag.css';
const { CheckableTag } = Tag;
const TfTag = (props) => (
    <Tag className='tag' closable   onClose={props.onTagClick}>{props.name}</Tag>
)
const TfTagContent=(props)=>(
    props.dataitem.map((item, index) => {
        return (
            <TfTag key={`${item.id}-${item.name}`} name={item.name} onTagClick={props.onTagClick.bind(this, item.id, item.name,false)} />
        );
    })
)
const TfTagBottom = (props) => (
    <div className='tagfooter'>
       <Row>
        <Col span={24} md={{ span: 6,offset:15}} xxl={{ span: 6,offset:17}}>
       <div className="item">
          已选择
           <Popover  content={<TfTagContent className="tagfooterPopover" dataitem={props.data} onTagClick={props.onTagClick}/>} title="已选择标签">
        <span className="shownumber">{props.data.length}</span>
        </Popover>个标签</div>
       
       <div className="option item">
  
       {props.data.length>0&&<Button type="default" onClick={props.onTagClick.bind(this,"","",true)}>取消</Button>}
       {props.data.length>0&&<Button type="primary" onClick={props.onOkShow.bind(this,props.data)}>查看相关投放</Button>}
       </div>
       </Col>
       </Row>
    </div>
)

export default TfTagBottom;