import * as React from 'react'
import Banner from './components/banner/Index'
import Introduce from './components/Introduce'
import Solution from './components/Solution'
import Hardware from './components/Hardware'
import Parter from './components/Parter'
import Service from './components/Service'
import './style.scss'


class Home extends React.Component {

  public render() {
    return (
      <React.Fragment>
        <Banner/>
        <Introduce/>
        <Solution/>
        <Hardware/>
        <Parter/>
        <Service/>
      </React.Fragment>
    )
  }
}

export default Home