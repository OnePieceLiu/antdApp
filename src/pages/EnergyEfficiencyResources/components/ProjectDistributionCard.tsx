import { Card, Col, Row } from 'antd';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

const ProjectDistributionCard: React.FC = () => {
  const chartRef1: any = useRef(); //拿到DOM容器
  const chartRef2: any = useRef(); //拿到DOM容器
  const chartRef3: any = useRef(); //拿到DOM容器
  // 根据条件来渲染
  useEffect(() => {
    const myChart1 = echarts.init(chartRef1.current);
    const myChart2 = echarts.init(chartRef2.current);
    const myChart3 = echarts.init(chartRef3.current);

    // 优先级
    myChart1.setOption({
      title: {
        text: '优先级',
        left: 'center',
        // left: 'left',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '30px',
        left: 'center',
      },
      series: [
        {
          name: '优先级',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'Highest' },
            { value: 735, name: 'High' },
            { value: 580, name: 'Low' },
            { value: 484, name: 'Lowest' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
    // 客户端
    myChart2.setOption({
      title: {
        text: '客户端',
        left: 'center',
        // left: 'left',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '30px',
        left: 'center',
      },
      series: [
        {
          name: '客户端',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: 'IOS' },
            { value: 735, name: 'Android' },
            { value: 580, name: 'Web' },
            { value: 484, name: 'Service' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });
    // 部门分布
    myChart3.setOption({
      title: {
        text: '部门分布',
        left: 'center',
        // left: 'left',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        top: '30px',
        left: 'center',
      },
      series: [
        {
          name: '部门分布',
          type: 'pie',
          radius: '50%',
          data: [
            { value: 1048, name: '产品部' },
            { value: 735, name: '前端' },
            { value: 580, name: '后端' },
            { value: 484, name: '测试' },
          ],
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    });

    return () => {
      myChart1.dispose();
      myChart2.dispose();
      myChart3.dispose();
    };
  }, []);

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
        <Col span={8}>
          <div
            ref={chartRef1}
            style={{
              width: '100%',
              height: 300,
            }}
          />
        </Col>
        <Col span={8}>
          <div
            ref={chartRef2}
            style={{
              width: '100%',
              height: 300,
            }}
          />
        </Col>
        <Col span={8}>
          <div
            ref={chartRef3}
            style={{
              width: '100%',
              height: 300,
            }}
          />
        </Col>
      </Row>
    </Card>
  );
};

export default ProjectDistributionCard;
