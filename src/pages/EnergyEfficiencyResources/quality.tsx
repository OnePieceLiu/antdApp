import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import QualityBugDistribution from './components/QualityBugDistribution';
import QualityBugQuantityCard from './components/QualityBugQuantityCard';
import QualityIntroduceRow from './components/QualityIntroduceRow';
import QualityRankingRow from './components/QualityRankingRow';

import type { TabsProps } from 'antd';
import { Tabs } from 'antd';

// 项目质量看板
const Admin: React.FC = () => {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `质量看板`,
      children: (
        <>
          {/* 综合头部 */}
          <QualityIntroduceRow />
          {/* bug数量 */}
          <QualityBugQuantityCard />
          {/* bug分布 */}
          <QualityBugDistribution />
        </>
      ),
    },
    {
      key: '2',
      label: `质量排行`,
      children: <QualityRankingRow />,
    },
  ];
  return (
    <PageContainer>
      <Tabs defaultActiveKey="1" size="large" items={items} />

      {/* <Card>项目质量看板</Card> */}
    </PageContainer>
  );
};

export default Admin;
