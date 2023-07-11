import React from 'react';

import { Area } from '@ant-design/plots';
import { Card, Col, Row } from 'antd';

const HealthLevelCard: React.FC = () => {
  const data: any = [
    {
      country: '北美',
      date: 1965,
      value: 1390.5,
    },
    {
      country: '北美',
      date: 1966,
      value: 1469.5,
    },
    {
      country: '北美',
      date: 1967,
      value: 1521.7,
    },
    {
      country: '北美',
      date: 1968,
      value: 1615.9,
    },
    {
      country: '北美',
      date: 1969,
      value: 1703.7,
    },
    {
      country: '北美',
      date: 1970,
      value: 1767.8,
    },

    {
      country: '中南美',
      date: 1965,
      value: 109.2,
    },
    {
      country: '中南美',
      date: 1966,
      value: 115.7,
    },
    {
      country: '中南美',
      date: 1967,
      value: 120.5,
    },
    {
      country: '中南美',
      date: 1968,
      value: 128,
    },
    {
      country: '中南美',
      date: 1969,
      value: 134.4,
    },
    {
      country: '中南美',
      date: 1970,
      value: 142.2,
    },
  ];
  const config: any = {
    data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    legend: {
      position: 'top',
    },
    // slider: {
    //   start: 0.1,
    //   end: 0.9,
    // },
  };
  return (
    <Card
      bordered={false}
      title="健康度视图"
      style={{
        height: '100%',
      }}
    >
      <div style={{ height: '200px', width: '100%' }}>
        <Area {...config} />
      </div>
      <Row gutter={12}>
        <Col span={12} style={{ height: '180px', width: '100%' }}>
          <Area {...config} />
        </Col>
        <Col span={12} style={{ height: '180px', width: '100%' }}>
          <Area {...config} />
        </Col>
      </Row>
    </Card>
  );
};

export default HealthLevelCard;
