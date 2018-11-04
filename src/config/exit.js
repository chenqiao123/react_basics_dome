/**
 * Created by Administrator on 2017/5/12.
 */
//http://192.168.10.17:8090/loginPost
import $ from 'jquery';
// import { Link, browserHistory } from 'react-router';

import { getipconfig } from '../getipconfig';
const getip = getipconfig();
const testUrl = getip.serverip;
//console.log("exit",testUrl)
export const exit = () => {
    //window.sessionStorage.clear();
    $.ajax({
        url: testUrl+ 'logout',
        type: "get",
        dataType: "json",
        data: {},
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(res) {
        },
        error: function(jqXHR, textStatus, errorThrown) {
            //console.log(textStatus + ' ' + errorThrown);
        }
    });
    // browserHistory.push(rootapp+'login');
    //window.sessionStorage.setItem("userData",'')
   // window.sessionStorage.clear();
}