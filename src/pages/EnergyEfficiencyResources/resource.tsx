import { PageContainer } from '@ant-design/pro-components';

import React from 'react';

import { Col, Form, Row, Select, theme } from 'antd';
import dayjs from 'dayjs';
import AverageTimeCard from './components/AverageTimeCard';
import HealthLevelCard from './components/HealthLevelCard';
import IntroduceRow from './components/IntroduceRow';
import LaunchTaskCard from './components/LaunchTaskCard';
import ProjectDistributionCard from './components/ProjectDistributionCard';
import ProjectScheduleCard from './components/ProjectScheduleCard';
import TimeSelector from './components/TimeSelector';
const { Option } = Select;
// const { RangePicker } = DatePicker;
const PageHeaderContent: React.FC = () => {
  const [form] = Form.useForm();
  //   const [, forceUpdate] = useState({});

  //   // To disable submit button at the beginning.
  //   useEffect(() => {
  //     forceUpdate({});
  //   }, []);

  const onFinish = (values: any) => {
    console.log('Finish:', values);
  };
  const onValuesChange = (changedFields: any, allFields: any) => {
    console.log(changedFields, allFields);
  };

  return (
    <Form
      form={form}
      name="horizontal_login"
      onValuesChange={onValuesChange}
      layout="inline"
      initialValues={{
        time: {
          range: [dayjs().subtract(3, 'day').startOf('day'), dayjs().endOf('day')],
        },
      }}
      onFinish={onFinish}
    >
      {/* <TimeSelector /> */}
      <Form.Item name="time">
        <TimeSelector />
      </Form.Item>
      {/* <Form.Item name="timeType">
        <Select placeholder="时间选择">
          <Option value="3">近3天</Option>
          <Option value="7">近7天</Option>
          <Option value="30">近30天</Option>
          <Option value="90">近90天</Option>
          <Option value="180">近半年</Option>
          <Option value="custom">自定义</Option>
        </Select>
      </Form.Item>
      <Form.Item name="range-picker">
        <RangePicker />
      </Form.Item> */}
      <Form.Item name="gender">
        <Select placeholder="所有项目">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="sprint">
        <Select placeholder="所有Sprint">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="type">
        <Select placeholder="所有端">
          <Option value="male">web</Option>
          <Option value="female">ios</Option>
          <Option value="other">android</Option>
        </Select>
      </Form.Item>
      {/* <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Log in
          </Button>
        )}
      </Form.Item> */}
    </Form>
  );
};

const Admin: React.FC = () => {
  const { token } = theme.useToken();
  console.log(token);
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
    <PageContainer
      content={
        <PageHeaderContent
        //   currentUser={{
        //     avatar: 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
        //     name: '吴彦祖',
        //     userid: '00000001',
        //     email: 'antdesign@alipay.com',
        //     signature: '海纳百川，有容乃大',
        //     title: '交互专家',
        //     group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
        //   }}
        />
      }
    >
      {/* 计划项目 */}
      <IntroduceRow />
      {/*  项目进度 项目数量*/}
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
