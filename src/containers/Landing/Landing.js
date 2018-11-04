import React, { Component } from 'react';
import { connect } from 'react-redux';
import Login from '../../../containers/Login/Login';
import Register from '../../../containers/Register/Register';
import Logo from '../../../components/Logo/Logo';
import { Layout } from 'antd';
import * as actions from '../../../store/actions';

import backgroundImage from '../../../assets/images/background.png';
import './Landing.css';

const {Header, Content} = Layout;

class Landing extends Component {

    state = {
        login: true
    };
    // componentDidMount() {
       
    
    //     // this.props.setRootUrl(rooturl)
    // }
    toggleState = (item, key, keyPath) => {
        this.props.onLoginReset();
        this.setState(prevState => {            
            return { login: !prevState.login };
        });
    }
   

    render() {
        //  this.props.setRootUrlSysc();
        let form = <Login  onSignupHandler={this.toggleState}/>;
        if (!this.state.login) {
            form = <Register onLoginHandler={this.toggleState}/>;
        }
        
        return (
            <Layout style={{
                height:'100vh',
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover'}}>
                {/* 登录页面不需要头部 */}
                {/* <Header
                    style={{
                    background: '#fff',
                    padding: 0,
                    position: 'fixed',
                    top: 0,
                    width: '100%',
                    height: '64px',
                    zIndex: '1000'}}>
                    <Logo />
                </Header> */}
                <Content style={{ overflow: 'auto' }}>{form}</Content>
            </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticating: state.login.authenticating
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLoginReset: () => dispatch(actions.loginReset()),
       
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(Landing);


