import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import servicePath from '../config/apiConfig'
import { Row, Col, List } from 'antd';
import { ClockCircleOutlined, TagOutlined, FireOutlined } from '@ant-design/icons';

import Author from '../components/Author';
import Advert from '../components/Advert';
import MainLayout from '../components/MainLayout';

import '../static/style/pages/index.css';

const Home = (list) => {
	const [mylist, setMylist] = useState(list.data)

	return (
		<MainLayout title="GannonSun" >
			<Row className="mainBody" type="flex" justify="center">
				<Col className="leftMainBody" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
				</Col>
				<Col className="rightMainBody" xs={24} sm={24} md={16} lg={18} xl={14}>
					<div>
						<List
							header={<div>最新日志</div>}
							itemLayout="vertical"
							dataSource={mylist}
							renderItem={item => (
								<List.Item>
									<div className="list-title">
										<Link href={{ pathname: '/detailed', query: { id: item.id } }}>
											<a>{item.title}</a>
										</Link>
									</div>
									<div className="list-icon">
										<span><ClockCircleOutlined />{item.publishTime}</span>
										<span><TagOutlined />{item.typeName}</span>
										<span><FireOutlined />{item.viewCount}人</span>
									</div>
									<div className="list-context">{item.introduce}</div>
								</List.Item>
							)}
						/>
					</div>
				</Col>
			</Row>
		</MainLayout>
	)
}

Home.getInitialProps = async () => {
	const promise = new Promise((resolve) => {
		axios(servicePath.getArticleList).then(
			(res) => {
				resolve(res.data)
			}
		)
	})

	return await promise
}

export default Home
