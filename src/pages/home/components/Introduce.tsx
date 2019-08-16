import {SFC} from 'react'
import * as React from 'react'

const Introduce : SFC = () => {
  return (
    <div className="container flex-container index-company">
      <div className="flex-1">
        <i className="iconfont">&#xe602;</i>
        <h2>39年</h2>
        核心技术积累
      </div>
      <div className="flex-1">
        <i className="iconfont">&#xe64f;</i>
        <h2>全球导航技术</h2>
        独立运行的全球导航技术
      </div>
      <div className="flex-1">
        <i className="iconfont">&#xe61a;</i>
        <h2>通讯卫星</h2>
        中国第三代卫星平台
      </div>
      <div className="flex-1">
        <i className="iconfont">&#xe60d;</i>
        <h2>遥感卫星</h2>
        可扩展，灵活性高
      </div>
    </div>
  )
}

export default Introduce