import React from 'react';

import { Pie } from '@ant-design/plots';
import { Card, Col, Row } from 'antd';

const ProjectDistributionCard: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config: any = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    legend: {
      position: 'top',
    },
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [
      {
        type: 'element-selected',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return (
    <Card
      bordered={false}
      title="项目分组"
      style={{
        height: '100%',
        marginTop: 24,
      }}
    >
      <Row gutter={12}>
        <Col span={8} style={{ height: '180px', width: '100%' }}>
          <Pie {...config} />
        </Col>
        <Col span={8} style={{ height: '180px', width: '100%' }}>
          <Pie {...config} />
        </Col>
        <Col span={8} style={{ height: '180px', width: '100%' }}>
          <Pie {...config} />
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectDistributionCard;
