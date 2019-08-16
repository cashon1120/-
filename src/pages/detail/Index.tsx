import * as React from 'react'
import {Tabs} from 'antd'
import './style.scss'
const {TabPane} = Tabs;
class Detail extends React.Component {

  public render() {
    return (
      <React.Fragment>
        <div className="detail container">
          <div className="bread">硬件商城 硬件商城千寻星矩SR1网络RTK年服务套装</div>
          <div className="flex-container flex-container-align-top">
            <div className="product-img">
              <img src="https://static0.qxwz.com/cms/common/icon-qxwz-findmpro-o.png"/>
            </div>
            <div>
              <h1>千寻星矩SR1网络RTK年服务套装</h1>
              <section>让RTK测量更简捷的千寻星矩SR1+1年FindCM网络RTK服务</section>

              <div className="promotion">
                <span className="tag">促</span>
                <span>全场包邮</span>
              </div>

              <div className="flex-container flex-container-align-top select-type">
                <div>
                  <span>规格型号:</span>
                </div>
                <div>
                  <a>NRTK+单频、双频和三频+只允许SDK</a>
                </div>
              </div>

              <div className="flex-container flex-container-align-top select-type">
                <div>
                  <span>选择时长:</span>
                </div>
                <div>
                  <a className="active">1年</a>
                  <a>2年</a>
                  <a>3年</a>
                  <a>4年</a><br/>
                  <a>1个月</a>
                  <a>2个月</a>
                  <a>3个月</a>
                  <a>4个月</a>
                </div>
              </div>

              <div className="flex-container select-type">
                <div>
                  <span>购买数量:</span>
                </div>
                <div>
                  <div className="flex-container buy-number">
                    <div className="operation">
                      <i className="iconfont">&#xe601;</i>
                    </div>
                    <div className="flex-1 number"><input value="1"/></div>
                    <div className="operation">
                      <i className="iconfont">&#xe631;</i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="price">
                <span>￥</span>
                <span>11666.00</span>
                <span>/套</span>
              </div>

              <button className="buy">立即购买</button>

            </div>

          </div>

          <div className="product-detail">
            <Tabs defaultActiveKey="1">
              <TabPane tab="产品详情" key="1">
                暂无内容
              </TabPane>
              <TabPane tab="规格参数" key="2">
                暂无内容
              </TabPane>
              <TabPane tab="包装售后" key="3">
                暂无内容
              </TabPane>
            </Tabs>
          </div>

          <div className="container outer-bg-white">
            <h1 className="title">覆盖范围</h1>
            <div className="area-list">
              <div className="flex-container">
                <div>
                  <span>全部覆盖</span>
                </div>
                <div>
                  <a>北京</a>
                  <a>北京</a>
                  <a>上海</a>
                  <a>重庆</a>
                </div>
              </div>
            </div>
            <div className="area-list">
              <div className="flex-container">
                <div>
                  <span>部分覆盖</span>
                </div>
                <div>
                  <a className="active">四川</a>
                  <a>山东</a>
                  <a>河北</a>
                  <a>广东</a>
                </div>
              </div>
              <div>
                <ul>
                  <li>成都</li>
                  <li>绵阳</li>
                  <li>乐山</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </React.Fragment>
    )
  }
}

export default Detail