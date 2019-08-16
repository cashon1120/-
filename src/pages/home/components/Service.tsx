import {SFC} from 'react'
import * as React from 'react'

const Service : SFC = () => {
  return (
    <div className="outer-bg-white container">
      <div className="flex-container flex-container-align-top service">
        <div className="flex-1">
          <i className="iconfont">&#xe63d;</i>
          <h1>免费试用</h1>
          明星产品免费试用
        </div>
        <div className="flex-1">
        <i className="iconfont">&#xe603;</i>
          <h1>购买保障</h1>
          服务类7天内无理由退款支持故障赔偿
        </div>
        <div className="flex-1">
        <i className="iconfont">&#xe68e;</i>
          <h1>服务支持</h1>
          电话、工单、邮箱支持<br/>
          1v1大客户服务<br/>
          7x24小时在线客服<br/>
          365天多渠道技术支持
        </div>
        <div className="flex-1">
        <i className="iconfont">&#xe640;</i>
          <h1>权威资质</h1>
          ISO9001质量体系认证<br/>
          ISO20000信息技术服务认证<br/>
          ISO27001信息安全管理认证<br/>
          甲测资字3300401
        </div>
      </div>
    </div>
  )
}

export default Service