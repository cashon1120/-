import * as React from 'react'
import Banner from './components/banner/Index'
import temp from '../../assets/images/temp-2.jpg'
import './style.scss'

class Home extends React.Component {

  public render() {
    return (
      <React.Fragment>
        <Banner/>
        <Banner/>
        <div className="container outer-bg-white">
          <h1 className="title">服务推荐</h1>
          <div className="flex-container recommend">
            <div className="flex-1">
              <div>
                <h1>入门型</h1>
                <div className="wrapper">
                  <article>适用于个人网站初始阶段并发访问量小，经济配置省钱适用，两步购买方便快捷</article>
                  <img src={temp}/>
                  <div className="price">
                    <span>49</span>元 / 月起
                  </div>
                  <div className="btn">
                    <a>立即选购</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h1>入门型</h1>
                <div className="wrapper">
                  <article>适用于个人网站初始阶段并发访问量小，经济配置省钱适用，两步购买方便快捷</article>
                  <img src={temp}/>
                  <div className="price">
                    <span>49</span>元 / 月起
                  </div>
                  <div className="btn">
                    <a>立即选购</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h1>入门型</h1>
                <div className="wrapper">
                  <article>适用于个人网站初始阶段并发访问量小，经济配置省钱适用，两步购买方便快捷</article>
                  <img src={temp}/>
                  <div className="price">
                    <span>49</span>元 / 月起
                  </div>
                  <div className="btn">
                    <a>立即选购</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div>
                <h1>入门型</h1>
                <div className="wrapper">
                  <article>适用于个人网站初始阶段并发访问量小，经济配置省钱适用，两步购买方便快捷</article>
                  <img src={temp}/>
                  <div className="price">
                    <span>49</span>元 / 月起
                  </div>
                  <div className="btn">
                    <a>立即选购</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home