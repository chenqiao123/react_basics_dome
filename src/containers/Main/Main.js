import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { Layout,message } from 'antd';
import SideMenu from '../../components/Public/Navigation/SideMenu/SideMenu';
// import Dashboard from '../../../containers/Dashboard/Dashboard';
// import TfUser from '../TfUser/TfUser';
// import TfTag from '../TfTag/TfTag';
 import Toolbar from '../../components/Public/Navigation/Toolbar/Toolbar';
import './Main.css';
// import '../../../assets/base.css';
// import { root } from '../../../root';

const { Header, Content } = Layout;

class Main extends Component {
   time=null;
    state = {
        collapsed: false,
        openKeys: ['dashboards'],
        packData:[],
        ret:false,
        sliderkey:["all"],


    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    onClickMenuHandler = ({ item, key, selectedKeys }) => {
        if (key === "106") {//写在配置文件中
            this.props.onLogout();
            console.log("退出",this.props,this.props.history)
             this.props.history.push('/');
        }
    }
  
    render() {
           const {gameList,defaultgameid,username,identity} =this.props
           const {ret,packData,sliderkey}=this.state 
           //console.log("username===",username) 
        return (
            <Layout style={{ height:'100vh' }} >
                <SideMenu 
                collapsed={this.state.collapsed}
                toggleHandler={this.toggle}
                sliderkey={sliderkey}
                identity={identity}
                  /> 
               
                <Layout>
                    <Header style={{ padding: 0 }}>
                       <Toolbar title="系统名称" 
                        menuHandler={this.onClickMenuHandler} 
                        // gamedata={getKeyValuegame(gameList)}
                        defaultValue={defaultgameid}
                        onChange={this.onChange}
                        ret={ret}
                        username={username}
                        packData={packData}
                        rePackageFunc={this.rePackageFunc}
                        /> 
                        
                    </Header>                            
                    <Content style={{ overflow: 'auto' }}  >                 
                        {/* <Switch>
                            <Route path={"/putplan/TfUser"} exact component={TfUser} />
                            <Route path={"/putplan/TfTag"} exact component={TfTag} />
                            <Redirect to={"/putplan/TfTag"} />
                        </Switch>                         */}
                        <div>内容</div>
                    </Content>
                </Layout>                
            </Layout>
        );
    }
}

// const mapStateToProps = state => {
//     return {
//       isAuthenticated: state.login.token !== null,
//       token:state.login.token,
//       gameList:state.login.PutPlandata,
//       defaultgameid:state.login.defaultgameid,
//       identity:state.login.PutPlandata.identity,
//       username:state.login.PutPlandata.name,
//       rooturl:state.login.rooturl,
//       packPackage:state.putplan.packPackage
    
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onLogout: () => dispatch(actions.logoutUser()),
//         onChange:(value) => dispatch(actions.onChangeGameList(value)),
        
        
//     };
// };

export default withRouter((Main));