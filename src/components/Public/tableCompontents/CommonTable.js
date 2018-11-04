import React from 'react';
import { Table } from 'antd';
// 前后端分页table,有props.page,表示后端分页
const CommonTable=(props)=>{
    return ( props.page?<Table
        columns={props.columns}
        rowKey={record => record.name}
        dataSource={props.data ? props.data : []}
        pagination={{
          current: props.page + 1,
          showSizeChanger: true,
          showQuickJumper: true,
          total: props.count,
          showTotal: () => <span>共 {props.count} 条记录</span>
        }}
        loading={props.planloading}
        onChange={props.handleTableChange}
      />:<Table
      columns={props.columns}
      // rowKey={record => record.name}
      dataSource={props.data ? props.data : []}
      // pagination={{
      //   current: props.page + 1,
      //   showSizeChanger: true,
      //   showQuickJumper: true,
      //   total: props.count,
      //   showTotal: () => <span>共 {props.count} 条记录</span>
      // }}
      loading={props.planloading}
      onChange={props.handleTableChange}
    />
    )
}

export default CommonTable;