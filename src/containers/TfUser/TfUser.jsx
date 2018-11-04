import React from 'react';
import './TfUser.css';

const ContentItemNumber = (props) => {
    return (
        <div className='item'>
            <div className='itemTitle'>
                {'投放数量'}
            </div>
            <div className='itemValue'>
                {props.planNum}
            </div>
        </div>
    );
}
const ContentItemCost = (props) => {
    return (
        <div className='item'>
            <div className='itemTitle'>
                {'已经花费金额'}
            </div>
            <div className='itemValue'>
                {props.cashCount}
            </div>
        </div>
    );
}

const TfUserItem = (props) => {
    return (
        <div className='cardItem'>
            <div className='cardTitle'>
                {`${props.data.name}`}
            </div>
            <div className='cardContent'>
                <ContentItemNumber planNum={props.data.planNum}/>
                <ContentItemCost cashCount={props.data.cashCount}/>
            </div>
            <div className='cardBottom'>
                <div className='button'>
                    <a onClick={props.getDetail}><span>{'查看用户投放详情'}</span></a>
                </div>
            </div>
        </div>
    )
}

export default TfUserItem;