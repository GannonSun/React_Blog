import React from 'react'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, CameraOutlined, CodeOutlined } from '@ant-design/icons';
import '../static/style/components/header.css'

const Header = () => (
    <div className="header">
        <Row type="flex" justify="center" align="middle">
            <Col xs={24} sm={24} md={10} lg={15} xl={6}>
                <span className="headerLogo">GannonSun</span>
                <span className="headerText">俺的博客</span>
            </Col>
            <Col className="menuDiv" xs={0} sm={0} md={14} lg={8} xl={12}>
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <HomeOutlined />
                        <a href="/">首页</a>
                    </Menu.Item>
                    <Menu.Item key="video">
                        <CameraOutlined />
                        <a href="/photo">摄影</a>
                    </Menu.Item>
                    <Menu.Item key="life">
                        <CodeOutlined />
                        <a href="/detailed">前端</a>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    </div>
)

export default Header