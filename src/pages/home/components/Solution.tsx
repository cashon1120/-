import * as React from 'react'

interface IState {
  activeIndex: number
}

class Solution extends React.Component<{}, IState> {
  public state = {
    activeIndex: 2
  }
  public handleChangeAcitve(index: number){
    this.setState({
      activeIndex: index
    })
  }
  public render() {
    const { activeIndex } = this.state
    return (
      <div className="outer outer-bg-gray" style={{paddingBottom: 120}}>
        <h1 className="title">产品服务</h1>
        <div className="flex-container container solution-item">
          <div className="flex-1 item1" onMouseEnter={this.handleChangeAcitve.bind(this, 0)}>
            <i className="short-bar"/>夔龙寻World
            <div style={{display: activeIndex === 0 ? 'block' : 'none'}}>
              <h2>夔龙寻World</h2>
              <i className="short-bar"/>
              <article>
                移动云应用虚拟化系统为客户提供出众的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问各种应用软件</article>
              <a href="#">查看详情</a>
            </div>
          </div>
          <div className="flex-1 item2" onMouseEnter={this.handleChangeAcitve.bind(this, 1)}>
            <i className="short-bar"/>夔龙寻World
            <div style={{display: activeIndex === 1 ? 'block' : 'none'}}>
              <h2>夔龙寻World</h2>
              <i className="short-bar"/>
              <article>
                移动云应用虚拟化系统为客户提供出众的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问各种应用软件</article>
              <a href="#">查看详情</a>
            </div>
          </div>
          <div className="flex-1 item3" onMouseEnter={this.handleChangeAcitve.bind(this, 2)}>
            <i className="short-bar"/>夔龙寻World
            <div style={{display: activeIndex === 2 ? 'block' : 'none'}}>
              <h2>夔龙寻World</h2>
              <i className="short-bar"/>
              <article>
                移动云应用虚拟化系统为客户提供出众的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问各种应用软件</article>
              <a href="#">查看详情</a>
            </div>
          </div>
          <div className="flex-1 item4" onMouseEnter={this.handleChangeAcitve.bind(this, 3)}>
            <i className="short-bar"/>夔龙寻World
            <div style={{display: activeIndex === 3 ? 'block' : 'none'}}>
              <h2>夔龙寻World</h2>
              <i className="short-bar"/>
              <article>
                移动云应用虚拟化系统为客户提供出众的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问各种应用软件</article>
              <a href="#">查看详情</a>
            </div>
          </div>
          <div className="flex-1 item5" onMouseEnter={this.handleChangeAcitve.bind(this, 4)}>
            <i className="short-bar"/>Find S
            <div style={{display: activeIndex === 4 ? 'block' : 'none'}}>
              <h2>Find S</h2>
              <i className="short-bar"/>
              <article>
                移动云应用虚拟化系统为客户提供出众的应用性能及灵活的应用虚拟化服务，帮助客户实现手机、平板电脑等移动设备安全顺畅地访问各种应用软件</article>
              <a href="#">查看详情</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Solution