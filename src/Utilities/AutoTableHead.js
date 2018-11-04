
// { title: 'Name', dataIndex: 'name', key: 'name' },
//   { title: 'Age', dataIndex: 'age', key: 'age' },
//   { title: 'Address', dataIndex: 'address', key: 'address' },
//   { title: 'Action', dataIndex: '', key: 'x', render: () => <a href="javascript:;">Delete</a> },
export const AutoTableHead=(keyvalue,data)=>{
    //console.log("keyvalue,data",keyvalue,data)
    if(keyvalue===undefined||data===undefined){
        return []
    }
    const herder=[]
    for(let i=0;i<keyvalue.length;i++){
        herder.push({ title: data[i], dataIndex: keyvalue[i], key: keyvalue[i], })  
    }
    return herder;
}
export const AutoTableHeadHaskey=(data)=>{
    let head=data==""?{"date":"日期","siteName":"站点名称"}:data
    if(head===undefined){
        return []
    }
    const herder=[]
    for(let idkey in head){
        herder.push({ title: head[idkey], dataIndex: idkey, key: idkey,sorter:(a,b)=>{//判断是否为数字
            console.log("isNumber(a[idkey])",a[idkey],isNumber(a[idkey]))
            if(idkey==="date"){
                // 如果是日期
                let d1 = new Date(a[idkey].replace(/\-/g, "\/"));  
                let d2 = new Date(b[idkey].replace(/\-/g, "\/"));  
                return d1-d2

            }else if(isNumber(a[idkey])){
                //如果是数字
                return a[idkey]-b[idkey]
            }else{
                //非数字非日期
                // console.log("不是数字",a[idkey],a[idkey].length)
               return a[idkey].length-b[idkey].length
            } }
        })  

    }
    // console.log("herder",herder)
    return herder;
}
// 判断是否为数字
function isNumber(val){

    var regPos = /^\d+(\.\d+)?$/; //非负浮点数
    var regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/; //负浮点数
    if(regPos.test(val) || regNeg.test(val)){
        return true;
    }else{
        return false;
    }

}
