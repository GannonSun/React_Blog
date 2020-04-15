import React, { useState } from 'react'
import { Row, Col, List, Breadcrumb } from 'antd'
import { ClockCircleOutlined, TagOutlined, FireOutlined } from '@ant-design/icons'

import Author from '../components/Author'
import Advert from '../components/Advert'
import MainLayout from '../components/MainLayout';

import '../static/style/pages/list.css'

const articleList = () => {

    const [mylist, setMylist] = useState(
        []
    )

    return (
        <MainLayout title="List" >
            <Row className="mainBody" type="flex" justify="center">
                <Col className="leftMainBody" xs={0} sm={0} md={7} lg={5} xl={4}>
                    <Author />
                    <Advert />
                </Col>
                <Col className="rightMainBody" xs={24} sm={24} md={16} lg={18} xl={14}>
                    <div>
                        <div className="breadDiv">
                            <Breadcrumb>
                                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                                <Breadcrumb.Item>摄影</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                        <List
                            itemLayout="vertical"
                            dataSource={mylist}
                            renderItem={item => (
                                <List.Item>
                                    <div className="list-title">{item.title}</div>
                                    <div className="list-icon">
                                        <span><ClockCircleOutlined />2019-06-28</span>
                                        <span><TagOutlined />视频教程</span>
                                        <span><FireOutlined />5498人</span>
                                    </div>
                                    <div className="list-context">{item.context}</div>
                                </List.Item>
                            )}
                        />
                    </div>
                </Col>
            </Row>
        </MainLayout>
    )
}

export default articleList
