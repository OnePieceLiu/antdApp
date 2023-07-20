import React from 'react';

import { Card, Table } from 'antd';

const columns = [
  {
    title: '类别',
    dataIndex: 'type',
    key: 'type',
  },

  {
    title: 'app',
    dataIndex: 'app',
    key: 'app',
  },
  {
    title: 'web',
    dataIndex: 'web',
    key: 'web',
  },
  {
    title: 'BMS',
    dataIndex: 'BMS',
    key: 'BMS',
  },
  {
    title: '其他',
    dataIndex: 'other',
    key: 'other',
  },
  {
    title: '总数',
    dataIndex: 'total',
    key: 'total',
  },
];
const searchData: any[] = [
  {
    key: '1',
    app: '13',
    web: '13',
    BMS: '13',
    other: '13',
    total: '13',
    type: '上线任务',
  },
  {
    key: '2',
    app: '123',
    web: '23',
    BMS: '33',
    other: '43',
    total: '15',
    type: '计划任务',
  },
  {
    key: '3',
    app: '123',
    web: '23',
    BMS: '33',
    other: '43',
    total: '15',
    type: '插入任务',
  },
  {
    key: '66',
    app: '123',
    web: '23',
    BMS: '33',
    other: '43',
    total: '15',
    type: '需求变更',
  },
  {
    key: '4',
    app: '123',
    web: '23',
    BMS: '33',
    other: '43',
    total: '15',
    type: 'hotfix任务',
  },
  {
    key: '5',
    app: '123',
    web: '23',
    BMS: '33',
    other: '43',
    total: '15',
    type: '开发Bug',
  },
];

const LaunchTaskCard: React.FC = () => {
  return (
    <Card
      bordered={false}
      title="上线任务信息"
      style={{
        height: '100%',
      }}
    >
      <Table<any>
        rowKey={(record) => record.key}
        size="large"
        columns={columns}
        dataSource={searchData}
        pagination={false}
      />
    </Card>
  );
};

export default LaunchTaskCard;
