import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from '../config/apiConfig'
import { Row, Col, Menu } from 'antd'
import { HomeOutlined, CameraOutlined, CodeOutlined } from '@ant-design/icons';
import '../static/style/components/header.css'

const iconMap = {
    CameraOutlined,
    CodeOutlined
}

const Header = () => {
    const [navArray, setNavArray] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(servicePath.getTypeInfo).then(
                (res) => {
                    setNavArray(res.data.data)
                    return res.data.data
                }
            )
            setNavArray(result)
        }
        fetchData()
    }, [])

    const handleClick = (e) => {
        if (e.key == 0) {
            Router.push('/index')
        } else {
            Router.push('/list?id=' + e.key)
        }
    }

    return (
        <div className="header">
            <Row type="flex" justify="center" align="middle">
                <Col xs={24} sm={24} md={10} lg={15} xl={6}>
                    <span className="headerLogo">GannonSun</span>
                    <span className="headerText">俺的博客</span>
                </Col>
                <Col className="menuDiv" xs={0} sm={0} md={14} lg={8} xl={12}>
                    <Menu mode="horizontal" onClick={handleClick}>
                        <Menu.Item key="0">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        {
                            navArray.map((item) => {
                                item.icon = iconMap[item.icon]
                                
                                return (
                                    <Menu.Item key={item.id}>
                                        <item.icon />
                                        {item.typeName}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header