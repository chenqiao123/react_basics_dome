import React from 'react';
import { Row, Col, Icon, Menu, Layout } from 'antd';
import { NavLink } from 'react-router-dom';
// import Logo from '../../Logo/Logo';

const sideMenu = (props) => {

    const { SubMenu } = Menu;
    const { Sider } = Layout;
    const { collapsed, toggleHandler ,sliderkey,identity} = props;
    let brand = 
        <Row type='flex'>
            <Col span={16} style={{paddingTop: '16px'}}>
                {/* <Logo/> */}
            </Col>
            <Col span={8}>
                <Icon 
                    style={{color: '#000'}} 
                    className='trigger' 
                    type={collapsed ? 'menu-unfold' : 'menu-fold'} 
                    onClick={toggleHandler}/>
            </Col>
        </Row>   

    if (collapsed) {
        brand = 
            <Icon 
                style={{color: '#000', paddingLeft: '32px'}} 
                className='trigger' 
                type={collapsed ? 'menu-unfold' : 'menu-fold'} 
                onClick={toggleHandler}/>
    }

    return (        
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: '#fff',width: 166}}>
            {brand}
            <Menu
                defaultSelectedKeys={sliderkey}
                defaultOpenKeys={['putplan']}
                selectedKeys={sliderkey}
                mode='inline'
                // style={{ width: 160 }}
                inlineIndent='16'>
                     {/*<SubMenu key="dashboards" title={<span><Icon type="home" /><span>首页</span></span>}> 
                        <Menu.Item key="home"><NavLink to='/'>首页</NavLink></Menu.Item>
                     </SubMenu> 
                    */}
                     <SubMenu key="putplan" title={<span><Icon type="form" /><span>投放计划</span></span>}> 
                       
                        <Menu.Item key="all"><NavLink to='/putplan/all'>全部列表</NavLink></Menu.Item>
                        <Menu.Item key="tfgroup"><NavLink to='/putplan/tfgroup'>投放分组</NavLink></Menu.Item>
                        {identity!==0&&<Menu.Item key="tfuser"><NavLink to='/putplan/tfuser'>投放用户</NavLink></Menu.Item>}
                        <Menu.Item key="tftag"><NavLink to='/putplan/tftag'>标签</NavLink></Menu.Item>
                     </SubMenu> 
                     {/*<SubMenu key="dataAnalys" title={ <span><Icon type="bar-chart" theme="outlined" /><span>数据分析</span></span> }>
                        <Menu.Item key='channelQulity'> <NavLink to='/dataAnalyze/channel'>渠道质量分析</NavLink></Menu.Item>
                         <Menu.Item key='userBehaviour'>用户行为分析</Menu.Item>
                        <Menu.Item key='gameIncome'>游戏收入分析</Menu.Item> 
                     </SubMenu>*/}
            </Menu>
        </Sider>
    );

}

export default sideMenu;
