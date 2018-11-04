import React, { Component } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout,message } from 'antd';
import SideMenu from '../../../components/Navigation/SideMenu/SideMenu';
import Dashboard from '../../../containers/Dashboard/Dashboard';
import PutPlan from '../../../containers/PutPlan/PutPlan';
import LogDetail from '../../../containers/Log/LogDetail';
import Tfgroup from '../../../containers/Tfgroup/Tfgroup';
import Tfuser from '../../../containers/Tfuser/Tfuser';
import Tftag from '../../../containers/Tftag/Tftag';
import Toolbar from '../../../components/Navigation/Toolbar/Toolbar';
import SimpleControls from '../../../components/Forms/SimpleControls';
import Validation from '../../../components/Forms/Validation';
import Complex from '../../../components/Forms/Complex/Complex';
// import HelpButton from '../../../components/UI/Support/HelpButton/HelpButton';
import {getKeyValuegame} from '../../../containers/Utilities/CommonFuncs'
import * as menuIds from '../../../components/Navigation/menuids';
import * as actions from '../../../store/actions';
// 
import './Main.css';
import '../../../assets/base.css';

import { root } from '../../../root';
import {getajax} from '../../../config/ajax'
import {exit} from '../../../config/exit'
const Ajax = getajax.ajaxFun;
const rooturl = root();
const { Header, Content } = Layout;

class Main extends Component {

    state = {
        collapsed: false,
        openKeys: ['dashboards'],
        packData:[],
        ret:false,


    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    onClickMenuHandler = ({ item, key, selectedKeys }) => {
        if (key === menuIds.MENU_LOGOUT) {
            this.props.onLogout();
            this.props.history.push('/');
        }
    }
    onChange=(value)=>{
        //console.log("改变的值是",value)
        this.props.onChange(value);
    }
    /* 目前后台好像存储10天*/
   getAllSntype=(e)=>{
    this.setState({
              
                ret:false,
              })
       Ajax('get','/package/progress','',(e)=>{
         if(e.ret==0){
              this.setState({
                packData:e.msg,
                ret:true,
              })
          }
         else{
           message.error(e.msg);
            this.setState({
                packData:[],
                ret:true,
              })
         }
      })
   }
   /*重新打包请求*/
   rePackageFunc=(e)=>{
     Ajax('get','/package/repack/'+e,'',(e)=>{
         if(e.ret==0){
              this.getAllSntype();
              message.success("发送成功");
          }
         else{
           message.error(e.msg);
            this.setState({
                packData:[],
                ret:true,
              })
         }
      })
   }
   componentWillMount() {
    if(window.sessionStorage.getItem("userData")==null){
         exit();
    }
}
componentDidMount(){
    // this.props.setRootUrlSysc();
    this.getAllSntype();

    this.timer = setInterval(
                  () => {
                        this.getAllSntype();
                  },
                  20000
              );
}
componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    
}
    render() {
           const {gameList,defaultgameid,username} =this.props
           const {ret,packData}=this.state 
           //console.log("username===",username) 
        return (
            <Layout style={{ height:'100vh' }}>
                <SideMenu collapsed={this.state.collapsed} toggleHandler={this.toggle} />
                <Layout>
                    <Header style={{ padding: 0 }}>
                        <Toolbar title="投放系统" 
                        menuHandler={this.onClickMenuHandler} 
                        gamedata={getKeyValuegame(gameList)}
                        defaultValue={defaultgameid}
                        onChange={this.onChange}
                        ret={ret}
                        username={username}
                        packData={packData}
                        rePackageFunc={this.rePackageFunc}
                        />
                    </Header>                            
                    <Content style={{ overflow: 'auto' }} >
                        {/* <HelpButton /> */}
                        <Switch>
                            <Route path={rooturl+"simplecontrols"} component={SimpleControls} />
                            <Route path={rooturl+"validation"} component={Validation} />
                            {/* PutPlan */}
                            <Route path={rooturl+"dashboard"} exact component={Dashboard} />
                            <Route path={rooturl+"complex"} exact component={Complex} />
                            <Route path={rooturl+"putplan/tfgroup"} exact component={Tfgroup} />
                            <Route path={rooturl+"putplan/tfuser"} exact component={Tfuser} />
                            <Route path={rooturl+"putplan/tftag"} exact component={Tftag} />
                            <Route path={rooturl+"putplan/all"} exact component={PutPlan} />
                            <Route path={rooturl+"putplan/all/LogDetail"} exact component={LogDetail} />
                            {/* LogDetail */}
                            <Redirect to={rooturl+"putplan/all"} />
                        </Switch>                        
                    </Content>
                </Layout>                
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
      isAuthenticated: state.login.token !== null,
      gameList:state.login.PutPlandata,
      defaultgameid:state.login.defaultgameid,
      username:state.login.PutPlandata.name,
      rooturl:state.login.rooturl
    
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logoutUser()),
        onChange:(value) => dispatch(actions.onChangeGameList(value)),
        
        
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));