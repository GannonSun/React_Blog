import React from 'react'
import { Avatar, Divider } from 'antd'
import { UserOutlined, GithubOutlined, QqOutlined, WechatOutlined } from '@ant-design/icons'

import '../static/style/components/author.css'

const Author = () => {
    return (
        <div className="authorInfo leftBox">
            <div>
                <Avatar size={100} src="http://ww1.sinaimg.cn/large/007SuUrFgy1gdff4pamyhj30b40b40t3.jpg" />
            </div>
            <div className="authorDesc">
                前端小白，喜欢摄影和音乐。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account" />
                <Avatar size={28} icon={<QqOutlined />} className="account" />
                <Avatar size={28} icon={<WechatOutlined />} className="account" />
            </div>
        </div>
    )
}

export default Author