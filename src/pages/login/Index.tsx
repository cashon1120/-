import * as React from 'react'
import {Form, Icon, Input, Button} from 'antd';
import {Link} from 'react-router-dom'
import './style.scss'
interface IProps {
  form : any
}
class Login extends React.Component < IProps, {} >{
  public handleSubmit = (e : any) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFields((err : string, values : object) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  };
  public render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <React.Fragment>
        <div className="page-login default-height">
          <div className="container">
            <div className="login-desc">
              <h2>数十万用户的信赖之选</h2>
              <p>节点遍布国内主要区域</p>
              <p>全动态BGP网络</p>
              <p>至强硬件打造强悍性能体验</p>
              <p>技术服务7×24全天响应</p>
            </div>

            <div className="login-main">
              <h2>用户登录</h2>

              <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                  {getFieldDecorator('username', {
                    rules: [
                      {
                        message: '请输入用户名!',
                        required: true
                        
                      }
                    ]
                  })(
                    <Input
                    prefix={< Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                    placeholder="用户名"/>,)}
                </Form.Item>
                <Form.Item>
                  {getFieldDecorator('password', {
                    rules: [
                      {
                        message: '请输入密码!',
                        required: true
                       
                      }
                    ]
                  })(
                    <Input
                    prefix={< Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>}
                    type="password"
                    placeholder="密码"/>,)}
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                  </Button>
                    没有账号? <Link to="/register">马上注册!</Link>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const WrappedLoginForm = Form.create({name: 'login'})(Login);
export default WrappedLoginForm
