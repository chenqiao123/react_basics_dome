import React,{ Component } from 'react';
import { Breadcrumb, Alert } from 'antd';
import { NavLink } from 'react-router-dom';
import { root } from '../../root';
const rooturl = root();
const breadcrumbNameMap = {
    '/putplan': '投放计划',
    '/putplan/all': '全部列表',
    '/putplan/all/LogDetail': '详情',
    '/putplan/tfgroup': '投放分组',
    '/putplan/tfgroup/TfgroupList': '分组列表',
    '/putplan/tfuser/tfuserList':'用户列表',
    '/putplan/tftag/tftagList':'标签列表',
    '/putplan/tfgroup/TfgroupList/LogDetail':"详情",
    '/putplan/tfuser/tfuserList/LogDetail':"详情",
    '/putplan/tftag/tftagList/LogDetail':"详情",
    '/putplan/tfuser': '投放用户',
    '/putplan/tftag': '投放标签',
    '/putplan/detail': '详情',
    '/dataAnalyze': '数据分析',
    '/dataAnalyze/channel': '渠道质量分析',
  };

 class PublicBreadcrumb extends Component {
  render() {
  
    const { location } = this.props;
     //console.log("NavLinkthis.props.location",this.props.location.pathname,location,location.pathname.split('/'))
    const pathSnippets = location.pathname.split('/').filter(i => i);
    //console.log("pathSnippets===",pathSnippets)
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
       //console.log("url===",url)
      return (
        <Breadcrumb.Item key={url}>
          {(url==="/putplan" || url === '/dataAnalyze')?
            <span>{breadcrumbNameMap[url]}</span>
          :<NavLink to={url}>
            {breadcrumbNameMap[url]}
          </NavLink>}
        </Breadcrumb.Item>
      );
    });
    const breadcrumbItems = [].concat(extraBreadcrumbItems);
    // //console.log("extraBreadcrumbItems===",extraBreadcrumbItems,breadcrumbItems)
    return( 
        <Breadcrumb className="Breadcrumb">
        {breadcrumbItems}
    </Breadcrumb>
    )
  }
  }
  export default PublicBreadcrumb

 