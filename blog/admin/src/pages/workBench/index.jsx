import React from 'react';
import { Row, Col, Form, Input, Select, Button } from 'antd';

const { TextArea } = Input;
const { Option } = Select;

function WorkBench() {
    return (
        <div>
            <Row gutter={10}>
                <Col span={6}>
                    博客标题
                </Col>
                <Col span={10}>
                    博客描述
                </Col>
                <Col span={4}>
                    博客分类
                </Col>
                <Col span={4}>
                    暂存、发布
                </Col>
            </Row>
        </div>
    )
}

export default WorkBench