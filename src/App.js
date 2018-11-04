import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Main from './containers/Main/Main'; //写路由和构建主页的入口
// import Landing from './containers/Landing/Landing';//登录和注册的人口
class App extends Component {
  render() {
   
    // let template = <Landing />;
    // if (this.props.isAuthenticated) {
     let template = <Main />;
    // }

    return (
     <div>
        {/* <AutoReload title="React Ant Design Demo" application="react-antd-demo" url="/index.html" tryDelay={1 * 10 * 1000} /> */}
        {template}
      </div>
    );
  }
}

export default App;
