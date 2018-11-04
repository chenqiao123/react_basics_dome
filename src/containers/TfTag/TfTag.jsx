import React from 'react';
import $ from 'jQuery';
import { Tag,  Divider } from "antd";
import './TfTag.css';
const { CheckableTag } = Tag;
const TfTag = (props) => (
    <CheckableTag className='tag' color={'rgba(248,248,248,1)'} checked={props.checked}><a onClick={props.onTagClick}>{props.name}</a></CheckableTag>
)
const TfTagItem = (props) => (
    <div className='tagItem'>
        <div className='title'>
            {props.datakey}
        </div>
        <div className='content'>
            {
                props.dataitem.map((item, index) => {
                    console.log("$.inArray(item.id, props.tagchecked) > -1",$.inArray(item.id, props.tagchecked) > -1)
                    return (
                        <TfTag key={`${item.id}-${item.name}`} checked={$.inArray(item.id, props.tagchecked) > -1} name={item.name} onTagClick={props.onTagClick.bind(this, item.id, item.name,false)} />
                    );
                })
            }
        </div>
        <Divider />
    </div>
)

export default TfTagItem;