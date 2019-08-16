import * as React from 'react'
import './style.scss'
import logo from '../../assets/images/logo.png'
class Footer extends React.Component {
  public render() {
    return (
      <footer className="outer footer">
        <div className="container flex-container flex-container-align-top">
          <div className="logo">
            <img src={logo} alt="中国长城工业集团有限公司"/>
            <div style={{paddingLeft: 10}}>
            ISO9001:2008 Registered <br/>
            ISO/IEC 27001:2013 Registered
            </div>
          </div>
          <div className="flex-1">
            <dl>
              <dt>账号支持</dt>
              <dd><a>用户常见问题</a></dd>
              <dd><a>服务器托管</a></dd>
              <dd><a>云虚拟主机</a></dd>
              <dd><a>SSL证书</a></dd>
              <dd><a>域名注册</a></dd>
              <dd><a>云监控</a></dd>
            </dl>
          </div>
          <div className="flex-1">
            <dl>
              <dt>服务声明</dt>
              <dd><a>用户常见问题</a></dd>
              <dd><a>服务器托管</a></dd>
              <dd><a>云虚拟主机</a></dd>
              <dd><a>SSL证书</a></dd>
              <dd><a>域名注册</a></dd>
              <dd><a>云监控</a></dd>
            </dl>
          </div>
          <div className="flex-1">
            <dl>
              <dt>快捷入口</dt>
              <dd><a>用户常见问题</a></dd>
              <dd><a>服务器托管</a></dd>
              <dd><a>云虚拟主机</a></dd>
              <dd><a>SSL证书</a></dd>
              <dd><a>域名注册</a></dd>
              <dd><a>云监控</a></dd>
            </dl>
          </div>
          <div className="flex-1">
            <dl>
              <dt>关于我们</dt>
              <dd><a>用户常见问题</a></dd>
              <dd><a>服务器托管</a></dd>
              <dd><a>云虚拟主机</a></dd>
              <dd><a>SSL证书</a></dd>
              <dd><a>域名注册</a></dd>
              <dd><a>云监控</a></dd>
            </dl>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            京ICP备：06018431号　　京公网安备：11040101000073号　　Copyright 2014-2020 by China Great Wall Industry Corporation</div>
        </div>
      </footer>
    )
  }
}

export default Footer