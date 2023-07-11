import { PageContainer } from '@ant-design/pro-components';
import React from 'react';

import { Col, Row } from 'antd';
import AverageTimeCard from './components/AverageTimeCard';
import HealthLevelCard from './components/HealthLevelCard';
import IntroduceRow from './components/IntroduceRow';
import LaunchTaskCard from './components/LaunchTaskCard';
import ProjectDistributionCard from './components/ProjectDistributionCard';
import ProjectScheduleCard from './components/ProjectScheduleCard';

const Admin: React.FC = () => {
  //   const data = [
  //     { year: '1991', value: 3 },
  //     { year: '1992', value: 4 },
  //     { year: '1993', value: 3.5 },
  //     { year: '1994', value: 5 },
  //     { year: '1995', value: 4.9 },
  //     { year: '1996', value: 6 },
  //     { year: '1997', value: 7 },
  //     { year: '1998', value: 9 },
  //     { year: '1999', value: 13 },
  //   ];
  //   const config = {
  //     data,
  //     height: 400,
  //     xField: 'year',
  //     yField: 'value',
  //     point: {
  //       size: 5,
  //       shape: 'diamond',
  //     },
  //   };

  return (
    <PageContainer>
      {/* 计划项目 */}
      <IntroduceRow />
      {/*  项目进度*/}
      <ProjectScheduleCard />
      <Row
        gutter={24}
        style={{
          marginTop: 24,
        }}
      >
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {/* 上线任务信息 */}
          <LaunchTaskCard />
        </Col>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          {/* 健康度视图 */}
          <HealthLevelCard />
        </Col>
      </Row>
      {/* 平均耗时 */}
      <AverageTimeCard />
      {/* 项目分布 */}
      <ProjectDistributionCard />
    </PageContainer>
  );
};

export default Admin;
