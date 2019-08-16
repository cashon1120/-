import { SFC } from 'react'
import * as React from 'react'
import parter1 from '../../../assets/images/parter-1.png'
import parter2 from '../../../assets/images/parter-2.png'
import parter3 from '../../../assets/images/parter-3.png'
import parter4 from '../../../assets/images/parter-4.png'
import parter5 from '../../../assets/images/parter-5.png'
import parter6 from '../../../assets/images/parter-6.png'
import parter7 from '../../../assets/images/parter-7.png'
import parter8 from '../../../assets/images/parter-8.png'
import parter9 from '../../../assets/images/parter-9.png'
import parter10 from '../../../assets/images/parter-10.png'

const Parter: SFC = () => {
  return (
    <div className="outer-bg-gray">
      <div className="container">
        <h1 className="title">合作伙伴</h1>
        <ul className="parter-list">
          <li><img src={parter1} /></li>
          <li><img src={parter2} /></li>
          <li><img src={parter3} /></li>
          <li><img src={parter4} /></li>
          <li><img src={parter5} /></li>
          <li><img src={parter6} /></li>
          <li><img src={parter7} /></li>
          <li><img src={parter8} /></li>
          <li><img src={parter9} /></li>
          <li><img src={parter10} /></li>
        </ul>
      </div>
    </div>
  )
}

export default Parter