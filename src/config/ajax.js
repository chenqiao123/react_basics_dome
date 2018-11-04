// import axios from 'axios'
// import { getmd5, allgetmd5 } from './getmd5';
 import { Link, browserHistory } from 'react-router';
 import {message} from 'antd';
import $ from 'jquery';
import { getipconfig } from '../getipconfig';
import qs from 'qs';
import axios from './axios-authentication';
const publicKey = "qwertyuiop[]asdf"
const getip = getipconfig();
const resulturl = getip.clientip;
const testUrl = getip.serverip;

//  let token= window.sessionStorage.getItem("tokenandcookie")
//  console.log("token====ajax",token)
 //    config.headers.token = token;
let getajax = {
    windown(){
     window.open(testUrl+"download/export.xls")
    },
   upimg() {
        return testUrl+"pict"
    },
    ajaxFunFirst(type, urlhouzu, data, tokentemp,callback) {
        //首次执行,本地没有token,异步处理
        let token="" 
        if(window.sessionStorage.getItem("tokenandcookie")===null){
            token=tokentemp
        }else{
            token =window.sessionStorage.getItem("tokenandcookie")
        }
        console.log("token====ajaxFun",token)
        $.ajax({
          method:type,
          url: testUrl + urlhouzu,
          data: data,
          dataType:'JSON',
          headers: {  
              "token":token
          },
          success: function(data){
             if(data.ret===0||data.ret===200){
                callback(data) //  browserHistory.push('/login');
            
             }else{
                message.error("token过期,请重新登录")
                // browserHistory.push('/'); 
             }
               
                // //console.log(data.msg)
         }
      });
    },
    ajaxFun(type, urlhouzu, data, callback) {
        //首次执行,本地没有token,异步处理
        let token=window.sessionStorage.getItem("tokenandcookie") 
        // if(window.sessionStorage.getItem("tokenandcookie")===null){
        //     token=tokentemp
        // }else{
        //     token =window.sessionStorage.getItem("tokenandcookie")
        // }
        console.log("token====ajaxFun",token)
        $.ajax({
          method:type,
          url: testUrl + urlhouzu,
          data: data,
          dataType:'JSON',
          headers: {  
              "token":token
          },
          success: function(data){
             if(data.ret===0||data.ret===200){
                callback(data) //  browserHistory.push('/login');
            
             }
             else{
                message.error("token过期,请重新登录")
                // browserHistory.push('/'); 
             }
               
                // //console.log(data.msg)
         }
      });
    },
    axiosFun(type, urlhouzu, data, callback) {
        //console.log("99999",testUrl + urlhouzu)
        axios({
            method: type,
            url:urlhouzu,
           
            // xhrFields: {
            //     withCredentials: true
            // },
            // crossDomain:true,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data:data
        }).then(function(response){
            console.log("ajax中的axios",response);
            callback(response.data)
          })
          .catch(function(err){
            console.log(err);
          });
    //     $.ajax({
    //       method:type,
    //       url: testUrl + urlhouzu,
    //       data: data,
    //       dataType:'JSON',
    //       headers: {  
    //           "token":token
    //       },
    //       success: function(data){
    //          if(data.ret===998||data.ret===999){
    //             //  browserHistory.push('/login');
    //          }
    //          else{
    //            callback(data)  
    //          }
               
    //             // //console.log(data.msg)
    //      }
    //   });
    },
 ajaxFunTest(type, urlhouzu, data, callback) {
    let token= window.sessionStorage.getItem("tokenandcookie");
     $.ajax({
          method:type,
          url: testUrl + urlhouzu,
          data: data,
          dataType:'JSON',
          headers: {
              "Content-Type": "application/json",
              "token":token
          },
          success: function(data){
             if(data.ret===998||data.ret===999){
                message.error("token过期,请重新登录")
                //  browserHistory.push('/login');
             }
             else{
               callback(data)  
             }
               
                // //console.log(data.msg)
         }
      });
 },
 ajaxUpload(type, urlhouzu, cmd, data, formData, callback) {
     let userData = JSON.parse(sessionStorage.getItem("userData"))
             let timesign = (new Date()).valueOf();
             let sign = ""//allgetmd5(userData.gmid, userData.token, timesign);
             data.gmid = userData.gmid;
     let datas = {
         "gmid": userData.gmid,
                 "v": 1,
                 "token": userData.token,
                 "sign": sign,
                 "timesign": timesign.toString(),
                 "data": data,
                 "cmd": cmd,
     }
     formData.append("data", JSON.stringify(datas));
     $.ajax({
         url: testUrl + urlhouzu,
         method: type,
         contentType: false,
         processData: false,
         xhrFields: {
             withCredentials: true
         },
         //  headers: {
         //         Accept: "multipart/form-data; charset=utf-8"
         //     },
         crossDomain: true,
         data: formData,
         success: (e) => {
             let data = JSON.parse(e)
             callback(data)
         }
     })

 },
 getBeforeDate: function(n) { //几天前
     var n = n;
     var d = new Date();
     var year = d.getFullYear();
     var mon = d.getMonth() + 1;
     var day = d.getDate();
     if (day <= n) {
         if (mon > 1) {
             mon = mon - 1;
         } else {
             year = year - 1;
             mon = 12;
         }
     }
     d.setDate(d.getDate() - n);
     year = d.getFullYear();
     mon = d.getMonth() + 1;
     day = d.getDate();
     let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
     //console.log(s)
     return s;
 },
 SingleAjax(type,url,data,callbackname,callback){
 $.ajax({
     url : url,
     dataType : "jsonp",
     data:data,
     jsonpCallback : callbackname,
     type : type,
     success : function(data) {
         ////console.log()
         callback(data)
     },
     error : function(jqXHR, textStatus, errorThrown) {
         //因为不管第几个登陆，都会尝试获取tocken，但，第一个登陆的，肯定是失败的。所以，就不处理
     }
 });
},
 CommenAjax(type,url,data,callback){
 $.ajax({
     url : testUrl+url,
     data:data,
     type : type,
     xhrFields: {
         withCredentials: true
     },
     success : function(data) {
        
         callback(data)
     },
     error : function(jqXHR, textStatus, errorThrown) {
         
     }
 });
}

    
};


export { getajax }