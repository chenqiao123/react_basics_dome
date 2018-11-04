import axios from 'axios';
import { getipconfig } from '../getipconfig';
import { message} from 'antd';
const getip =  getipconfig();
const testUrl = getip.serverip;

// //console.log("fddd",testUrl)

const instance = axios.create({
    baseURL: testUrl,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',      //改这里就好了
    },
  
});
//http request 拦截器
instance.interceptors.request.use(
  config => {
    let token= window.sessionStorage.getItem("tokenandcookie")
    // console.log("token====",testUrl,token)
    // console.log("eeee",config)
    config.headers.token=token
    return config;
  },
  error => {
    return Promise.reject(error.response);
  });

instance.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log("axios.interceptors.response=====",response.data.ret,withRouter);
    // window.localStorage.setItem('token',null);
    if(response.status!==200){
      message.error(response.message)
    }else if(response.data.ret===999||response.data.ret===998||response.data.ret===997){
      window.sessionStorage.setItem('token',null);
      // exit()
      // console.log("window.localStorage.setItem",history,Router)
      //  actions.loginCheckStatus()
      // history.push('/');
    //  actions.logoutUser()
      // window.location.href="/toufang/"
      // this.props.history.push('/');
      //  yield call([localStorage, 'removeItem'], "token");
    // yield call([localStorage, 'removeItem'], "userId");
    // yield call([localStorage, 'removeItem'], "expirationDate");
    // yield put (actions.logoutSuccess());   
    window.localStorage.removeItem("token")
    window.localStorage.removeItem("userId")
    window.localStorage.removeItem("expirationDate")
    
      // message.error("请退出从新登录")
      // return false;
    }
   
    return response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance;