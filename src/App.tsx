import * as React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import Header from './components/header/Index'
import Footer from './components/footer/Index'
import loadable from './utils/loadable'
import store from './store/index'

const Home = loadable(() => import ('./pages/home/Index'))
const Product = loadable(() => import ('./pages/product/Index'))
const Service = loadable(() => import ('./pages/service/Index'))
const Detail = loadable(() => import ('./pages/detail/Index'))

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/product' exact={true} component={Product}/>
            <Route path='/service' exact={true} component={Service}/>
            <Route path='/productDetail/:id' exact={true} component={Detail}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
