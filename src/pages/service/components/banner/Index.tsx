import * as React from 'react'
import banner1 from '../../../../assets/images/server_intro_banner.jpg'
import './banner.scss'

class Header extends React.Component {
  public render() {
    return (
      <div className="outer banner-service">
        <ul>
          <li style={{
            backgroundImage: `url(${banner1})`
          }}>
            <div className="container">
              <p className="text-1">夔龙定位</p>
              <p className="text-2">亚米级高精度定位服务，32省市覆盖、全天候、采用单频RTK技术</p>
              <div className="link">
                <a href="#">立即选购</a>
                <a href="#">管理控制台</a>
                <a href="#">产品价格</a>
                <a href="#">技术服务协议</a>
                <a href="#">帮助与文档</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Header