import * as React from 'react'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'

import './style.scss'
import logo from '../../assets/images/logo.png'

interface IState {
  activeIndex: number
  isProductPage: boolean
}
interface IProps {
  location: {
    pathname: string
  }
}

class Header extends React.Component<IProps, IState> {
  public state = {
    activeIndex: 0,
    isProductPage: false
  }

  public UNSAFE_componentWillReceiveProps(nextProps: IProps){
    const { isProductPage } = this.state
    if(nextProps.location.pathname.includes('product') && !isProductPage){
      this.setState({isProductPage: true})
      return
    }
    if(!nextProps.location.pathname.includes('product') && isProductPage){
      this.setState({isProductPage: false})
    }
  }

  public componentDidMount(){
    const { isProductPage } = this.state
    if(this.props.location.pathname.includes('product') && !isProductPage){
      this.setState({isProductPage: true})
    }
  }

  public handleChangeAcitve(index: number){
    this.setState({
      activeIndex: index
    })
  }
  public render() {
    const { activeIndex, isProductPage } = this.state

    return (
      <nav className={isProductPage ? 'outer header header-bg-black' : 'outer header'} onMouseLeave={this.handleChangeAcitve.bind(this, 0)}>
        <div className="container flex-container">
          <div className="logo">
            <div><img src={logo} alt="中国长城工业集团有限公司"/></div>
          </div>
          <div>
            <Link to="/" onMouseEnter={this.handleChangeAcitve.bind(this, 0)}>首页</Link>
            <Link to="/service" className={activeIndex === 1 ? 'active' : ''} onMouseEnter={this.handleChangeAcitve.bind(this, 1)}>服务购买</Link>
            <Link to="/product" onMouseEnter={this.handleChangeAcitve.bind(this, 2)}>产品商城</Link>
            <Link to="/product" onMouseEnter={this.handleChangeAcitve.bind(this, 3)}>解决方案</Link>
            <Link to="/product" onMouseEnter={this.handleChangeAcitve.bind(this, 4)}>云平台</Link>

            <div className="nav-sub" style={{display: activeIndex === 1 ? 'block' : 'none'}}>
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
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Header as any)