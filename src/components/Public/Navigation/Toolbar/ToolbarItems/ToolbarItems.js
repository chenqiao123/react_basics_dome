import React from 'react';
import { Avatar, Badge, Popover, Icon, Card, Divider, Menu ,Spin} from 'antd';
import * as menuIds from '../../menuids';
// import SelectOption from '../../../UI/SelectOption'; 
import './ToolbarItems.css';

// Simple implementation of a toolbar for demo purposes,  
// I haven't extracted this out to separate components yet ...
// The antd popover is not great and having to style underlying components
// as the props are not exposed, isn't a good idea either

const gridStyle = {
    width: '50%',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column'
};

const rowStyle = {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
};

const actionsContent = (
    <div className="Actions">
        <Card style={{textAlign: 'center'}} title="Quick Actions">
            <Card.Grid style={gridStyle}><Icon type="printer" style={{ fontSize: 32 }} /><span>Generate Report</span></Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="form" style={{ fontSize: 32 }} /><span>Add New Event</span></Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="book" style={{ fontSize: 32 }} /><span>Create New Task</span></Card.Grid>
            <Card.Grid style={gridStyle}><Icon type="schedule" style={{ fontSize: 32 }} /><span>Completed Tasks</span></Card.Grid>
        </Card>
    </div>
  );
//    const ModalHt=(
    // <div className="modalht">
    // <div className="wpr">
    //     <ul>
    //         {this.state.ret?this.state.packData.map(function(item,index){
    //           return  <li key={item.id}>
    //           <div className={item.success?"icon":"error icon"}><Icon type="link" /></div><p className="text">{item.name}-{item.step}</p>
    //           {!item.success?<a onClick={this.rePackageFunc.bind(this,item.id)}  href="javascript:">重新打包</a>
    //            :<a   href="javascript:" className="nonea">重新打包</a>
    //         }
    //           <p className="tips">{item.msg}</p></li>
    //         }.bind(this)):<Spin className="loading"/>}
            
    //     </ul>
    //     </div>
    // </div>
    // )
  
const alertsContent =(props)=>{
    return  (
<div className="Alerts">
    <Card style={{textAlign: 'center'}} title="通知">
    <div className="modalht">
    <div className="wpr">
         <ul>
             {props.ret?props.packData.map(function(item,index){
              return  <li key={item.id}>
              <div className={item.success?"icon":"error icon"}><Icon type="link" /></div><p className="text">{item.name}-{item.step}</p>
              {!item.success?<a onClick={props.rePackageFunc.bind(this,item.id)}  href="javascript:">重新打包</a>
               :<a   href="javascript:" className="nonea">重新打包</a>
            }
              <p className="tips">{item.msg}</p></li>
            }.bind(this)):<Spin className="loading"/>}
            
        </ul>
        </div>
    </div>
    </Card>
</div>
)
        };

const profileContent = (props) => {
    return (
    <div className="Profile">
        <Card style={{textAlign: 'center'}} >
            <Menu
            mode="inline"
            theme="light"    
            selectable={false}
            onClick={props.menuHandler}
            inlineIndent="0">
             
                <Menu.Item key={menuIds.MENU_LOGOUT} style={{textAlign: 'left'}}>
                    <Icon type="logout" />
                    <span>退出</span>
                </Menu.Item>
            </Menu>
        </Card>
    </div>
    );
};
      
const toolbarItems = (props) => (
    <ul className="ToolbarItems">
    <li> 
        {/* <SelectOption 
                data={props.data} 
                defaultValue={props.defaultValue} 
                onChange={props.onChange}/> */}
       </li>
        {/* <li><Icon type="search" style={{ fontSize: 22 }} /></li> */}
        <Popover overlayClassName="AlertsPopover" placement="bottomRight" trigger="click" content={alertsContent(props)}>            
            <li className="move-up"><Badge dot><Icon type="bell" style={{ fontSize: 22 }} /></Badge></li>
        </Popover>            
        {/* <Popover overlayClassName="ActionsPopover" placement="bottomRight" trigger="click" content={actionsContent}>            
            <li><Icon type="appstore-o" style={{ fontSize: 22 }} /></li>
        </Popover>             */}
        <Popover overlayClassName="ProfilePopover" placement="bottomRight" trigger="click" content={profileContent(props)}>            
            <li className="move-up"><Avatar style={{ backgroundColor: '#5d9cec' }} icon="user" /></li>
        </Popover> 
        {/* <Popover overlayClassName="ProfilePopover" placement="bottomRight" trigger="click" >             */}
            <li>{props.username}</li>
        {/* </Popover>                         */}
    </ul>
);

export default toolbarItems;