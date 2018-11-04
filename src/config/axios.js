import axios from './axios-authentication';
import qs from 'qs';
const FileDownload = require('js-file-download');

// import { Link, browserHistory } from 'react-router';
let getaxios = {
    sginDataSagas(urlpost, method, SuccessCallback, errorCallback) {
        let that=this;
        try {

            axios({
                method: method,
                url: urlpost,

            }).then(function (response) {
                // console.log(response);
                if (response.data.ret == 0 || response.data.ret == 200) {
                    SuccessCallback(response.data.msg)
                } else {
                    errorCallback(response.data)
                }
            })
                .catch(function (error) {
                    console.log(error);
                    // browserHistory.push('/'); 
                    // props.history.push('/'); 
                    // errorCallback(error.data)
                    that.errorFun("sginDataSagas",error.data)
                });

        } catch (error) {
            // errorCallback(error.data);
             //异常出错
            //  console.log(error.data)
            that.errorFun("sginDataSagas",error.data)
        }
    },
    // get,没有参数
    axiosCommon(urlpost, method, SuccessCallback, errorCallback) {
        let that=this;
        try {

            axios({
                method: method,
                url: urlpost,
            }).then(function (response) {
                console.log(response);
                if (response.data.ret == 0 || response.data.ret == 200) {
                    SuccessCallback(response.data.msg)
                } else {
                    errorCallback(response.data)
                }
            })
                .catch(function (error) {
                    // console.log(error);

                    // errorCallback(error.data)
                    that.errorFun("axiosCommon",error.data)
                });

        } catch (error) {
            // errorCallback(error.data);
             //异常出错
            //  console.log(error.data)
            that.errorFun("axiosCommon",error.data)
        }
    },
    // post ,.带参数
    axiosCommonPost(urlpost, method, data,SuccessCallback, errorCallback) {
        let that=this;
        try {

            axios({
                method: method,
                url: urlpost,
                data:qs.stringify(data),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},

            }).then(function (response) {
                console.log("axiosCommonPost======*********&",response);
                if (response.data.ret == 0 || response.data.ret == 200) {
                    SuccessCallback(response.data.msg)
                } else {
                    console.log("token过期不会走这里嘛?===");
                    errorCallback(response.data)
                }
            })
                .catch(function (error) {
                    // console.log(error);

                    // errorCallback(error.data)
                    that.errorFun("axiosCommonPost",error.data)
                });

        } catch (error) {
            // errorCallback(error.data);
             //异常出错
            //  console.log(error.data)
            that.errorFun("exportAxiosCmomon",error.data)
        }
    },
    // 导出
    exportAxiosCmomon(url,gameid, loginCredentialsexport,name,errorCallback) {
        let that=this;
        try {
            axios({
                method: "get",
                responseType: 'blob',
                url: url + gameid + "?" + loginCredentialsexport,
                // headers: {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'},
                data: loginCredentialsexport
            }).then(res => {
                FileDownload(res.data, name+'.xlsx');//文件流本地打开下载
            })
        } catch (error) {
            // errorCallback(error.data); //异常出错
            // console.log(error.data)
            that.errorFun("exportAxiosCmomon",error.data)
        }
    },
    //通用导出
    exportAxiosBase(url,loginCredentialsexport,name,errorCallback){
        // console.log("提交的只=========",url,loginCredentialsexport,name)
        let that=this;
        try {
            axios({
                method: "post",
                responseType: 'blob',
                url: url ,
                // headers: {'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'},
                // data: loginCredentialsexport
                data:qs.stringify(loginCredentialsexport),
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            }).then(res => {
                FileDownload(res.data, name+'.xlsx');//文件流本地打开下载
              
            })
        } catch (error) {
            // errorCallback(error.data);
            //异常出错
            // console.log(error.data)
            that.errorFun("exportAxiosBase",error.data)
        }
    },
    errorFun(funname,error){
        console.log("funname,error====",funname,error)
       }

}

export { getaxios }