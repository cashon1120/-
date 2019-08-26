import * as React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'

class ProductItem extends React.Component {
  public render() {
    return (
      <div className="product">
        <i className="icon icon-hot" />
        <img src="https://static0.qxwz.com/cms/common/icon-qxwz-findmpro-o.png"/>
        <div>
          <h2>夔龙定位基础版本</h2>
          测量型GNSS RTK接收机+专业手簿、对中杆和托架+1年FindCM网络RTK服务
        </div>
        <div className="price">
          <span>￥</span>
          <span>14999.00</span>
          <span>起</span>
        </div>
        <Link to="/productDetail/1">立即购买</Link>
      </div>
    )
  }
}

export default ProductItem