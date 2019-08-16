import * as React from 'react'
import ProductItem from '../../components/productItem/Index'
import {Checkbox} from 'antd'
import './style.scss'

class Product extends React.Component {

  public onChange(e : any) {
    console.log(e)
  }

  public render() {
    return (
      <React.Fragment>
        <div className="product-container container">
          <div className="flex-container product-type">
            <div className="type-title">包含服务</div>
            <div>
              <a>全部</a>
              <a>FindMPro</a>
              <a>FindCM</a>
            </div>
          </div>
          <div className="flex-container product-type product-type-2">
            <div className="type-title">能力配置</div>
            <div className="flex-1">
              <div className="checkbox-list">
                <Checkbox onChange={this.onChange}>车辆惯性导航</Checkbox>
              </div>
              <div className="checkbox-list">
                <Checkbox onChange={this.onChange}>自定义</Checkbox>
              </div>
              <div className="checkbox-list">
                <Checkbox onChange={this.onChange}>自定义</Checkbox>
              </div>
            </div>
          </div>
          <div className="product-list">
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Product