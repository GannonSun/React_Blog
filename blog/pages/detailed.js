import React, { useState } from 'react';
import axios from 'axios';
import marked from 'marked';
import hljs from "highlight.js";
import Tocify from '../components/tocify.tsx'
import { Row, Col, Affix, Breadcrumb } from 'antd';
import { ClockCircleOutlined, TagOutlined, FireOutlined } from '@ant-design/icons';

import Author from '../components/Author';
import Advert from '../components/Advert';
import MainLayout from '../components/MainLayout';

import '../static/style/pages/detailed.css';
import 'highlight.js/styles/monokai-sublime.css';

const Detailed = (props) => {
	const {
		title,
		publishTime,
		typeName,
		viewCount,
		articleContent
	} = props;

	const tocify = new Tocify()
	const renderer = new marked.Renderer();

	renderer.heading = function (text, level, raw) {
		const anchor = tocify.add(text, level);
		return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
	};

	marked.setOptions({
		renderer: renderer, //必填
		gfm: true, // 是否启动类似GitHub样式的markdown
		pedantic: false, // 是否只解析符合markdown定义的，不修正markdown的错误
		sanitize: false, // 是否原始输出，忽略html标签，作为开发人员一定要写false
		tables: true, // 是否支持GitHub形式的表格，前提是gfm为true
		breaks: false, // 是否支持GitHub换行符，前提是gfm为true
		smartLists: true, // 是否优化列表输出
		smartypants: false,
		highlight: function (code) { // 高亮显示规则
			return hljs.highlightAuto(code).value;
		}
	});

	let html = marked(articleContent)

	return (
		<MainLayout title={title}>
			<Row className="mainBody" type="flex" justify="center">
				<Col className="leftMainBody" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
					<Affix offsetTop={60}>
						<div className="detailedNav leftBox">
							<div className="navTitle">文章目录</div>
							<div className="navContent">
								{tocify && tocify.render()}
							</div>
						</div>
					</Affix>
				</Col>
				<Col className="rightMainBody" xs={24} sm={24} md={16} lg={18} xl={14}>
					<div>
						<div className="breadDiv">
							<Breadcrumb>
								<Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
								<Breadcrumb.Item>{typeName}</Breadcrumb.Item>
								<Breadcrumb.Item>{title}</Breadcrumb.Item>
							</Breadcrumb>
						</div>
						<div>
							<div className="detailedTitle">
								{title}
							</div>
							<div className="list-icon center">
								<span><ClockCircleOutlined />{publishTime}</span>
								<span><TagOutlined />{typeName}</span>
								<span><FireOutlined />{viewCount}人</span>
							</div>
							<div className="detailedContent" dangerouslySetInnerHTML={{ __html: html }}>

							</div>
						</div>
					</div>
				</Col>
			</Row>
		</MainLayout>
	)
}

Detailed.getInitialProps = async (context) => {
	let id = context.query.id
	const promise = new Promise((resolve) => {
		axios('http://127.0.0.1:7001/api/getArticleById/' + id).then(
			(res) => {
				resolve(res.data.data[0])
			}
		)
	})

	return await promise
}

export default Detailed
