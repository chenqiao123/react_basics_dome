import React from 'react';
import ToolbarItems from './ToolbarItems/ToolbarItems'; 
import './Toolbar.css';
// import SelectOption from '../../UI/SelectOption'; 
const toolbar = (props) => (
    <div className="Toolbar">
        <ToolbarItems 
        menuHandler={props.menuHandler}
        data={props.gamedata} 
        defaultValue={props.defaultValue} 
        onChange={props.onChange}
        ret={props.ret}
        username={props.username}
        packData={props.packData}
        rePackageFunc={props.rePackageFunc}
        />
        <span className="Title">{props.title}</span>
      
    </div>
);

export default toolbar;