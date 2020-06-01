import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';
import marked from 'marked'
import hljs from "highlight.js";
import servicePath from '../config/apiConfig'
import { Row, Col, List, Spin } from 'antd';
import { ClockCircleOutlined, TagOutlined, FireOutlined } from '@ant-design/icons';

import Author from '../components/Author';
import Advert from '../components/Advert';

import 'highlight.js/styles/monokai-sublime.css';
import '../static/style/pages/index.css';

const Home = (list) => {
	const [mylist, setMylist] = useState(list.data)
	const [listLoading, setLoading] = useState(false)

	const renderer = new marked.Renderer();
	marked.setOptions({
		renderer: renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false,
		sanitize: false,
		xhtml: false,
		highlight: function (code) {
			return hljs.highlightAuto(code).value;
		}

	});

	return (
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
							<Spin spinning={listLoading}>
								<List.Item>
									<div className="list-title">
										<Link href={{ pathname: '/detailed', query: { id: item.id } }}>
											<a onClick={() => {
												setLoading(true)
											}}>
												{item.title}
											</a>
										</Link>
									</div>
									<div className="list-icon">
										<span><ClockCircleOutlined />{item.publishTime}</span>
										<span><TagOutlined />{item.typeName}</span>
										<span><FireOutlined />{item.viewCount}人</span>
									</div>
									<div className="list-context"
										dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
									></div>
								</List.Item>
							</Spin>
						)}
					/>
				</div>
			</Col>
		</Row>
	)
}

Home.getInitialProps = async () => {
	const promise = new Promise((resolve) => {
		axios(servicePath.getArticleList).then(
			(res) => {
				resolve({
					...res.data,
					title: 'GannonSun'
				})
			}
		)
	})

	return await promise
}

export default Home
