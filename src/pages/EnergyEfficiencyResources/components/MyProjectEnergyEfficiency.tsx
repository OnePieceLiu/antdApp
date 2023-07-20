// import { Progress, TinyArea, TinyColumn } from '@ant-design/charts';
import { Card, Col, Row } from 'antd';
import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const MyProjectEnergyEfficiency = () => {
  const chartRef1: any = useRef(); //各阶段任务数
  const chartRef2: any = useRef(); //重要级分布

  const chartRef3: any = useRef(); //任务平均耗时

  useEffect(() => {
    const myChart1 = echarts.init(chartRef1.current);
    const myChart2 = echarts.init(chartRef2.current);
    myChart1.setOption({
      legend: {},
      grid: {
        top: '36px',
        left: '0', // 调整左侧留白
        right: '10px', // 调整右侧留白
        bottom: '0', // 调整底部留白
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
          name: '08-03 ~ 08-09',
        },
      ],
    });
    myChart2.setOption({
      grid: {
        top: '10px',
        left: '0', // 调整左侧留白
        right: '10px', // 调整右侧留白
        bottom: '0', // 调整底部留白
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: 'bar',
        },
      ],
    });

    const myChart3 = echarts.init(chartRef3.current);
    myChart3.setOption({
      grid: {
        left: '3%',
        right: '3%',
        bottom: '0px',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: [
          '需求池',
          '产品设计中',
          '内审中',
          '产品宣讲',
          '待排期',
          '已排期',
          '研发中',
          '产品验收',
          '主网',
        ],
      },
      legend: {},
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [120, 200, 150, 80, 70, 110, 130, 120, 70],
          type: 'bar',
          name: '08-03 ~ 08-09',
        },
      ],
    });
    return () => {
      myChart3.dispose();
      myChart1.dispose();
      myChart2.dispose();
    };
  }, []);
  return (
    <>
      <h2>项目能效</h2>
      <Row
        gutter={24}
        style={{
          marginTop: 24,
        }}
      >
        <Col span={12}>
          <Card bordered={false} title="各阶段任务数">
            <div
              ref={chartRef1}
              style={{
                width: '100%',
                height: 160,
              }}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card bordered={false} title="重要级分布">
            <div
              ref={chartRef2}
              style={{
                width: '100%',
                height: 160,
              }}
            />
          </Card>
        </Col>
      </Row>
      <Card
        bordered={false}
        title="任务平均耗时"
        style={{
          marginTop: 24,
        }}
      >
        <div
          ref={chartRef3}
          style={{
            width: '100%',
            height: 260,
          }}
        />
      </Card>
    </>
  );
};

export default MyProjectEnergyEfficiency;
