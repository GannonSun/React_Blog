import React from 'react';
import { Form, Input, Button, Checkbox, Avatar } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import loginAvatar from '../../static/images/avatar.jpg';

import 'antd/dist/antd.css';
import './Login.css';

function Login() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className="loginBg">
            <div className="loginContent">
                <div className="loginMotto">
                    <p>做个俗人  贪财好色。</p>
                    <p>致敬星爷</p>
                </div>
                <div className="loginForm">
                    <Avatar src={loginAvatar} size={64} style={{ marginBottom: 16 }} />
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{
                            remember: true
                        }}
                        onFinish={onFinish}
                        style={{ width: '90%', marginTop: 8 }}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入用户名!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                placeholder="用户名"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                                size="large"
                            />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>记住我</Checkbox>
                            </Form.Item>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button" block>
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login