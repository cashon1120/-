import * as React from 'react'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'

import './style.scss'
import logo from '../../assets/images/logo.png'

interface IState {
  activeIndex : number
  changeHeaderBg : boolean
}
interface IProps {
  location : {
    pathname: string
  }
}

class Header extends React.Component < IProps,
IState > {
  public state = {
    activeIndex: 0,
    changeHeaderBg: false
  }

  public UNSAFE_componentWillReceiveProps(nextProps : IProps) {
    const {changeHeaderBg} = this.state
    if ((nextProps.location.pathname.includes('product') || nextProps.location.pathname.includes('solution') || nextProps.location.pathname.includes('register')) && !changeHeaderBg) {
      this.setState({changeHeaderBg: true})
      return
    }
    if (!nextProps.location.pathname.includes('product') && !nextProps.location.pathname.includes('product') && !nextProps.location.pathname.includes('solution') && changeHeaderBg) {
      this.setState({changeHeaderBg: false})
    }
  }

  public componentDidMount() {
    const {changeHeaderBg} = this.state
    if ((this.props.location.pathname.includes('product') || this.props.location.pathname.includes('solution') || this.props.location.pathname.includes('register')) && !changeHeaderBg) {
      this.setState({changeHeaderBg: true})
    }
  }

  public handleChangeAcitve(index : number) {
    this.setState({activeIndex: index})
  }
  public render() {
    const {activeIndex, changeHeaderBg} = this.state

    return (
      <nav
        className={changeHeaderBg
        ? 'outer header header-bg-black'
        : 'outer header'}
        onMouseLeave={this
        .handleChangeAcitve
        .bind(this, 0)}>
        <div className="container flex-container">
          <div className="logo">
            <div><img src={logo} alt="中国长城工业集团有限公司"/></div>
          </div>
          <div className="flex-1">
            <Link
              to="/"
              onMouseEnter={this
              .handleChangeAcitve
              .bind(this, 0)}>首页</Link>
            <Link
              to="/service"
              className={activeIndex === 1
              ? 'active'
              : ''}
              onMouseEnter={this
              .handleChangeAcitve
              .bind(this, 1)}>服务购买</Link>
            <Link
              to="/product"
              onMouseEnter={this
              .handleChangeAcitve
              .bind(this, 2)}>产品商城</Link>
            <Link
              to="/solution"
              onMouseEnter={this
              .handleChangeAcitve
              .bind(this, 3)}>解决方案</Link>
            <Link
              to="/"
              onMouseEnter={this
              .handleChangeAcitve
              .bind(this, 4)}>云平台</Link>
          </div>

          <div className="header-login">
            <Link to="/login" className="login-button">请登录</Link>
            <Link to="/register" className="register-button">注册有礼</Link>
          </div>

        </div>
        {/* 子菜单*/}
        <div
          className="nav-sub"
          style={{
          display: activeIndex === 1
            ? 'block'
            : 'none'
        }}>
          <div className="container">
            <div className="sub-list">
              <p>云计算</p>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
            </div>
            <div className="sub-list">
              <p>云计算</p>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
            </div>
            <div className="sub-list">
              <p>云计算</p>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
            </div>
            <div className="sub-list">
              <p>云计算</p>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
              <a>
                <h3>云服务器</h3>
                高速稳定高弹性的计算服务
              </a>
            </div>
          </div>
        </div>

        <div
          className="nav-sub"
          style={{
          display: activeIndex === 3
            ? 'block'
            : 'none'
        }}>
          <div className="container">
            <div className="sub-list sub-list-1">
              <p>行业解决方案</p>
              <Link to="/solution#tag1">
                汽车行业
              </Link>
              <Link to="/solution#tag2">
                农业
              </Link>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header as any)