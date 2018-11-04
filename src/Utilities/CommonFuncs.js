import $ from 'jquery';
import axios from '../../config/axios-authentication';
/**
 * 公共函数方法等
 */
 export const getdataallkey = (resdata) => {
    var allkey = [];
    for (var i in resdata.data) {
        if (i !== "removeByValue" && i !== "remove") {
            var parentkey = resdata.data[i].id.toString()
            allkey.push(parentkey);
            for (var j = 0; j < resdata.data[i].children.length; j++) {
                var checkedKey = resdata.data[i].children[j].id.toString();
                var checkedKeys = parentkey + "-" + checkedKey
                allkey.push(checkedKeys);
            }
        } else {
            continue;
        }
    }

    return allkey;
}
 export const getdataallkeyparent = (resdata) => {
    var allkey = [];
    for (var i in resdata.data) {
        if (i !== "removeByValue" && i !== "remove") {
            var parentkey = resdata.data[i].id.toString()
            allkey.push(parentkey);
        } else {
            continue;
        }
    }
    return allkey;
}
export const getGameChanelist = (id, data) => {
    let showdata = [];
    // //console.log("data",data)
    for (let i = 0; i < data.length; i++) {

        if (data[i].gid == id) {
            // //console.log("data[i].gid",data[i].gid,id)
            showdata = data[i].channels
            // //console.log("data[i].gid",data[i].channels,showdata)
        }
    }
    // //console.log("请求的数据为什么不对",showdata)
    return showdata
}
  /*数字逗号间隔*/
export const toThousands=(num)=> {  
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');  
} 
 /*获取当前时间的几天前*/
 export const getBeforeDate=(n)=>{//int d,
        var d = new Date();
        var year = d.getFullYear();
        var mon = d.getMonth() + 1;
        var day = d.getDate();
        if(day <= n) {
            if(mon > 1) {
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
       let   s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
       return s;
}
export const getBeforeDateend = (n) => {//int d,
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
    let s =year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day) + " " + "23" + ":" + "59" + ":" + "59";
    //console.log("s=====", s)
    return s;
}
// 生成成本获取当前是第几天
export const getBeforeDateGet = (n, insertTime) => {//int d,
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
  
    if (insertTime!=undefined){
        if (d < insertTime * 1000){
         let newDate = new Date(insertTime*1000);
        //console.log("zhelushi", insertTime, newDate.getFullYear()) 
            d = newDate 
        }
        

    }
    year = d.getFullYear();
    mon = d.getMonth() + 1;
    day = d.getDate();
    let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
    return s;
}
export const MonthToday=(value)=>{//转换为时间戳
        let time = new Date(parseInt(value) * 1000);
        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let wek = time.getDay();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        let t = y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mi) + ':' + add0(s)
        //let t= y + '-' + add0(m) + '-' + add0(d) +"-"+wek
        ////console.log("转换成功之后的时间:",t)
        return t;
 
}
export const GetMomentTime=(value)=>{//转换为时间戳  年月日
        let time = new Date(parseInt(value) * 1000);
        function add0(m) {
            return m < 10 ? '0' + m : m
        }
        let y = time.getFullYear();
        let m = time.getMonth() + 1;
        let d = time.getDate();
        let h = time.getHours();
        let wek = time.getDay();
        let mi = time.getMinutes();
        let s = time.getSeconds();
        let t = y + '-' + add0(m) + '-' + add0(d) 
        //let t= y + '-' + add0(m) + '-' + add0(d) +"-"+wek
        ////console.log("转换成功之后的时间:",t)
        return t;
 
}
export const getTime=(d)=>{
         let  str = d.replace(/-/g,'/'); 
         let date = new Date(str); 
        return     date.getTime()/1000
}
export const getAllmoney=(data)=>{
        let allmoeny=0;
   data.costs.forEach(function(item,index){
       allmoeny=item.money+allmoeny;
    })

    return allmoeny
}
export const getKeyValue=(data)=>{
    //console.log(data,"dd")
      if(data==undefined){
        return []

      }
      else{
        let dd=[];
        data.forEach(function(item,index){
          dd.push({key:item.id.toString(),label:item.name})
        })
      //  //console.log(dd,"dd")
        return dd
      } 
}
//获取游戏的选择列表
export const getKeyValuegame=(data)=>{
    //console.log(data,"dd")
      if(data==undefined){
        return []

      }
      else{
        let dd=[];
        //console.log(data.games,"data.games")
      for(let key in data.games){
        let value=data.games[key]
        dd.push({key:value.id.toString(),label:value.name})
      }
        return dd
      } 
}
//是否输入正确的url
export const IsURL = (str_url) => {
    var strRegex = '^((https|http|ftp|rtsp|mms)?://)' +
        '?(([0-9a-z_!~*\'().&=+$%-]+: )?[0-9a-z_!~*\'().&=+$%-]+@)?' //ftp的user@
        +
        '(([0-9]{1,3}.){3}[0-9]{1,3}' // IP形式的URL- 199.194.52.184
        +
        '|' // 允许IP和DOMAIN（域名）
        +
        '([0-9a-z_!~*\'()-]+.)*' // 域名- www.
        +
        '([0-9a-z][0-9a-z-]{0,61})?[0-9a-z].' // 二级域名
        +
        '[a-z]{2,6})' // first level domain- .com or .museum
        +
        '(:[0-9]{1,4})?' // 端口- :80
        +
        '((/?)|' // a slash isn't required if there is no file name
        +
        '(/[0-9a-z_!~*\'().;?:@&=+$,%#-]+)+/?)$';
    //var re = new RegExp(strRegex);
     var re = /^((https|http|ftp|rtsp|mms)?:\/\/)+[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
   
    //re.test()
    if (re.test(str_url)) {
        return (true);
    } else {
        return (false);
    }
}
//动态生产表头
export const getKeyValueChane=(data)=>{
    //console.log(data,"dd")
      if(data==undefined){
        return []

      }
      else{
        let dd=[{value:"-1",text:"全部",children:null}];
       
      for(let i=0;i<data.length;i++){
        dd.push({value:data[i].key,text:data[i].name,children:data[i].children})
      }
      //console.log("dd",dd)
        return dd
      } 
}
//表格数据格式的 前端搜索 
// groupdata, 搜索的对象值,例如:[{"name":发发发,"id":"1"}]
// constgroupdata, //全部数据内容[]
// tag,模糊搜索 false,精确匹配 true
// value, 进行搜索的值
// key 值对应的key值
export const getSearch=(groupdata,constgroupdata,tag,value,key)=>{
    // let groupdata =this.state.groupdata
    console.log("getSearch=====",constgroupdata,tag,value,key)
    let newgroupdata
    if(tag){
        // 精准匹配
    newgroupdata=constgroupdata.filter(item => {
        return item[key]==value;
            
        })
    }else{
        // 模糊匹配
        newgroupdata=constgroupdata.filter(item => {
            return item[key].indexOf(value)>-1; 
        })
    }
    if(value===""||value===-1){
        newgroupdata=constgroupdata
    }
    return newgroupdata
    // this.setState({groupdata:newgroupdata})  
}
//// groupdata, 搜索的对象值,例如:[{key,data:[{"name":发发发,"id":"1"}]}]
// constgroupdata, //全部数据内容[]
// tag,模糊搜索 false,精确匹配 true
// value, 进行搜索的值
// key 值对应的key值
export const getSearchObj=(groupdata,constgroupdata,tag,values,keys)=>{
    // let groupdata =this.state.groupdata
    let newgroupdata=[]
    if(tag){
        // 精准匹配
    newgroupdata=groupdata.filter(item => {
        return item[keys]==values;
            
        })
    }else{
        // 模糊匹配
        for(let i =0;i<groupdata.length;i++){
           let obj={"key":groupdata[i]["key"],"value":groupdata[i]["value"].filter(item => {
                return item[keys].indexOf(values)>-1; 
            })}
            if(obj.value.length>0){
               newgroupdata.push(obj) 
            }
            
        }
        
    }
    if(values===""){
        newgroupdata=constgroupdata
    }
    return newgroupdata
    
}
//公用导出
export const axiosCommonExport=(urlpost,method,data,SuccessCallback,errorCallback)=>{

    try {
       
        axios({
          method:method,
          url: urlpost,
          data:data
        }).then(function (response) {
            console.log(response);
            if(response.data.ret==0||response.data.ret==200){
                SuccessCallback(response.data.msg)
                // console.log("props",props) 
            }else{

               errorCallback(response.data) 
            }
          })
          .catch(function (error) {
            console.log(error);
           
            errorCallback(error.data) 
          });
      
    } catch (error) {
        errorCallback(error.data);
    }
}
//设置eachart的数据
export const setEachartData=(data)=>{
// "key": "10-8 星期一",
		// "clickData": 1650,
		// "downData": 1650,
		// "activate": 1555,
        // "TotalPayment": 12354,
    let obj={key:[],clickData:{data:[],max:""},downData:{data:[],max:""},activate:{data:[],max:""},TotalPayment:{data:[],max:""}}
    data.map((item)=>{
        obj.key.push(item["date"]) 
        obj.clickData.data.push(item["click"]) 
        obj.downData.data.push(item["down"]) 
        obj.activate.data.push(item["activity"]) 
        obj.TotalPayment.data.push(item["pay"]) 
    })
    return obj
}
// 时间差天数
 export const DateDiff=(sDate1,  sDate2)=>{    //sDate1和sDate2是xxxx-xx-xx格式  
           var  aDate,  oDate1,  oDate2,  iDays  
           aDate  =  sDate1.split("-")  
           oDate1  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])    //转换为xx-xx-xxxx格式  
           aDate  =  sDate2.split("-")  
           oDate2  =  new  Date(aDate[1]  +  '-'  +  aDate[2]  +  '-'  +  aDate[0])  
           iDays  =  parseInt(Math.abs(oDate1  -  oDate2)  /  1000  /  60  /  60  /24)    //把相差的毫秒数转换为天数  
           return  iDays  
       }  
 
 // 时间戳转换
export const  timestamp = (dateString) => {
        var date = dateString;
        var datas = Date.parse(new Date(date)) / 1000
        return datas;
    }
    //
export const CheckStr=(str)=> {
        var SpecialCharacters = "@/'\"#$%&^*:;,";
        var i = 0;
        for (i = 0; i < SpecialCharacters.length - 1; i++) {
            if (str.IndexOf(SpecialCharacters.charIndex(i)) != -1) {
                if (SpecialCharacters.charIndex(i) == ",") {
                    return true;
                } else {
                    return false;
                }
    
            }
        }
        return false;
    }
//删除数组中制定的一项 这样会使数组在for in中遍历出函数来. 
//for in只遍历对象自身的属性，而不包含继承于原型链上的属性。  
// if (obj.hasOwnProperty(key) === true){  
//     keys.push(key);    
//     values.push(obj[key]);   
//     }                 
// } 
// Array.prototype.indexOf = function(val) {
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] == val) return i;
//     }
//     return -1;
//     };
//     Array.prototype.remove = function(val) {
//     var index = this.indexOf(val);
//     if (index > -1) {
//         this.splice(index, 1);
//     }
//     };
// 设置图标的默认开始时间，根据结束时间进行设置
export const setEchartStratTime=(starttime,endtime)=>{
    //转换时间格式为2017，05，03
   let newend= endtime.split("-").join(",");
   let newstart=starttime.split("-").join(",");
   let d1 = new Date(newend);
   let d2 = new Date(newstart);
   console.log("相隔天数：=====",(d1.getTime()-d2.getTime())/(1000*60*60*24),)
   if((d1.getTime()-d2.getTime())/(1000*60*60*24)<7){
       return false
   }else{

   let year = d1.getFullYear();
   let mon = d1.getMonth() + 1;
   let day = d1.getDate();
//    默认是选择的时间的前面7填时间
   d1.setDate(d1.getDate() - 7);
 

   year = d1.getFullYear();
   mon = d1.getMonth() + 1;
   day = d1.getDate();
   let s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
   return s;
}


}
//通用导出表格的数据转化
export const ProductionTable=(header,data)=>{
    //header
    //data
    let str
    //  const header={"name":"姓名","sdd":"地址","ph":"电话"}
    //  const data=[
    //      {"name":"陈巧","sdd":"12344","ph":"13548151978"},
    //  {"name":"陈巧2","sdd":"12344","ph":"13548151978"},
    //  {"name":"陈巧3","sdd":"12344","ph":"13548151978"}
    // ]
    const obj={"header":[],"data":[]}
    //获得表头
    for(let i in header){
        obj.header.push(header[i])
    }
    //获得数据
    for(let i=0;i<data.length;i++){
        for(let k in data[i]){
            obj.data.push(data[i][k])
        }
    }
//  str="headtext="+obj.header.join(",")+"&data="+obj.data.join(",")
//  console.log("str======",str)
 return obj
}
