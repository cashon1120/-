import * as React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header/Index'
import Footer from './components/footer/Index'
import loadable from './utils/loadable'
import store from './store/index'

const Home = loadable(() => import ('./pages/home/Index'))
const Product = loadable(() => import ('./pages/product/Index'))
const Service = loadable(() => import ('./pages/service/Index'))
const Detail = loadable(() => import ('./pages/detail/Index'))
const Login = loadable(() => import ('./pages/login/Index'))
const Register = loadable(() => import ('./pages/register/Index'))
const Solution = loadable(() => import ('./pages/solution/Index'))

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Header/>
          <div style={{minHeight: 500}}>
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/product' exact={true} component={Product}/>
              <Route path='/service' exact={true} component={Service}/>
              <Route path='/productDetail/:id' exact={true} component={Detail}/>
              <Route path='/solution' exact={true} component={Solution}/>
              <Route path='/login' exact={true} component={Login}/>
              <Route path='/register' exact={true} component={Register}/>
            </Switch>
          </div>
          <Footer/>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
