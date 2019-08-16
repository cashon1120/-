import * as React from 'react'
import banner1 from '../../../../assets/images/banner_1.jpg'
import './banner.scss'

class Header extends React.Component {
  public render() {
    return (
      <div className="outer banner">
        <ul>
          <li style={{
            backgroundImage: `url(${banner1})`
          }}>
            <div className="container">
              <p className="text-1">五年同行,质造未来</p>
              <p className="text-2">以品质为核心打造高性价比产品与服务</p>
            </div>
          </li>
        </ul>
        <div className=" banner-bottom">
          <div className="container flex-container">
            <div className="flex-1">
              <i className="iconfont">&#xe61f;</i>
              <h3>服务公告</h3>
              位置服务最新公告
            </div>
            <div className="flex-1">
            <i className="iconfont">&#xe600;</i>
              <h3>智造者计划</h3>
              技术引领, 科技创新
            </div>
            <div className="flex-1">
            <i className="iconfont">&#xe615;</i>
              <h3>资讯中心</h3>
              行业最新消息
            </div>
            <div className="flex-1">
            <i className="iconfont">&#xe69e;</i>
              <h3>售前咨询热线</h3>
              400-800-8899
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header