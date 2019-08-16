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
              <p className="text-1">弹性云服务器</p>
              <p className="text-2">小鸟云弹性云服务器采用纯SSD架构硬件设备，只需几分钟，便可轻松云端获取和启用，实现您的计算需求。可弹性扩展资源用量的同时，还能为您节约计算成本，简化IT运维工作，让您更专注于核心业务的创新。</p>
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