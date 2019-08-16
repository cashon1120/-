import * as React from 'react'
import ProductItem from '../../../components/productItem/Index'

class Hardware extends React.Component {
  public render() {
    return (
      <div className="container outer-bg-white">
        <h1 className="title">硬件产品</h1>
        <div className="product-list">
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
          <ProductItem/>
        </div>
      </div>
    )
  }
}

export default Hardware