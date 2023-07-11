import { Column } from '@ant-design/plots';
import { Card } from 'antd';
import React from 'react';

const ProjectScheduleCard: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
      type: '需求池',
    },
    {
      year: '1992',
      value: 4,
      type: '需求池',
    },
    {
      year: '1993',
      value: 3.5,
      type: '需求池',
    },

    {
      year: '1991',
      value: 3,
      type: '产品设计中',
    },
    {
      year: '1992',
      value: 4,
      type: '产品设计中',
    },
    {
      year: '1993',
      value: 3.5,
      type: '产品设计中',
    },
    {
      year: '1991',
      value: 3,
      type: '内审中',
    },
    {
      year: '1992',
      value: 4,
      type: '内审中',
    },
    {
      year: '1993',
      value: 3.5,
      type: '内审中',
    },
    {
      year: '1991',
      value: 3,
      type: '产品宣讲',
    },
    {
      year: '1992',
      value: 4,
      type: '产品宣讲',
    },
    {
      year: '1993',
      value: 3.5,
      type: '产品宣讲',
    },
  ];

  const config: any = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type',
    legend: {
      position: 'top',
    },
    slider: {
      start: 0.1,
      end: 0.9,
    },
    label: {
      // 可手动配置 label 数据标签位置
      position: 'middle',
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
  };

  return (
    <Card style={{ marginBottom: 16 }} title="项目数量">
      {' '}
      <Column {...config} />
    </Card>
  );
};

export default ProjectScheduleCard;
