import { PageContainer } from '@ant-design/pro-components';
import React from 'react';
import MyProjectEnergyEfficiency from './components/MyProjectEnergyEfficiency';
import MyProjectQuality from './components/MyProjectQuality';
const Admin: React.FC = () => {
  return (
    <PageContainer>
      <MyProjectEnergyEfficiency />
      <MyProjectQuality />
      {/* <Card>我的数据</Card> */}
    </PageContainer>
  );
};

export default Admin;
