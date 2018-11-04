import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import { BrowserRouter } from 'react-router-dom';//路由4.0
const supportsHistory = 'pushState' in window.history
ReactDOM.render(
    <BrowserRouter  basename={"/toufang"} forceRefresh={!supportsHistory}>
        <LocaleProvider locale={zh_CN}><App  /></LocaleProvider>
      </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
