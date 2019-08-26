import * as React from 'react'
import {
  Form,
  Input,
  Row,
  Col,
  Checkbox,
  Button
} from 'antd'
import './style.scss'

interface IProps {
  form : any
}


class Register extends React.Component < IProps, {} > {

  public handleSubmit = (e : any) => {
    e.preventDefault();
    this
      .props
      .form
      .validateFieldsAndScroll((err : string, values : object) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
  }

  public compareToFirstPassword = (rule: object, value: string, callback: any) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码不一致!');
    } else {
      callback();
    }
  };

  public checkPhone = (rule: object, value: string, callback: any) => {
    if (!/^1(3|4|5|7|8)\d{9}$/.test(value)) {
      callback('手机号码有误，请重填');
    } else {
      callback();
    }
  }

  public render() {
    const {getFieldDecorator} = this.props.form;
    const formItemLayout = {
      labelCol: {
        sm: {
          span: 5
        }
      },
      wrapperCol: {
        sm: {
          span: 16
        }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        sm: {
          offset: 5,
          span: 16
        }
      }
    };

    return (
      <React.Fragment>
        <div className="page-register default-height">
          <div className="container">
            <h1>注册可免费使用</h1>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="手机号码">
                {getFieldDecorator('phone', {
                  rules: [
                    {
                      message: '请输入正确的手机号!',
                      validator: this.checkPhone,
                    }, {
                      message: '请输入手机号!',
                      required: true
                    }
                  ]
                })(<Input/>)}
              </Form.Item>
              <Form.Item label="短信验证码">
                <Row gutter={8}>
                  <Col span={12}>
                    {getFieldDecorator('code', {
                      rules: [
                        {
                          message: '请输入您收到的短信验证码!',
                          required: true
                        }
                      ]
                    })(<Input/>)}
                  </Col>
                  <Col span={12}>
                    <Button>获取验证码</Button>
                  </Col>
                </Row>
              </Form.Item>
              <Form.Item label="登录密码" extra="6-20 位数字、字母和标点符号组合，字母区分大小写">
                {getFieldDecorator('password', {
                  rules: [
                    {
                      message: '请输入登录密码!',
                      required: true
                    }
                  ]
                })(<Input.Password/>)}
              </Form.Item>

              <Form.Item label="确认密码">
                {getFieldDecorator('repassword', {
                  rules: [
                    {
                      message: '请输入确认密码!',
                      required: true
                    },
                    {
                      validator: this.compareToFirstPassword,
                    },
                  ]
                })(<Input.Password/>)}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                {getFieldDecorator('agreement', {valuePropName: 'checked'})(
                  <Checkbox>
                  我同意拼接受
                  <a href="">注册协议</a>
                </Checkbox>,)}
              </Form.Item>
              <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                  立即注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const WrappedRegistrationForm = Form.create({name: 'register'})(Register);
export default WrappedRegistrationForm