import { Card, Col, Row } from 'antd';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

const QualityBugDistribution: React.FC = () => {
  const chartRef1: any = useRef(); //拿到DOM容器
  const chartRef2: any = useRef(); //拿到DOM容器
  const chartRef3: any = useRef(); //拿到DOM容器
  const chartRef4: any = useRef(); //拿到DOM容器

  useEffect(() => {
    const myChart1 = echarts.init(chartRef1.current);
    const myChart2 = echarts.init(chartRef2.current);
    const myChart3 = echarts.init(chartRef3.current);
    const myChart4 = echarts.init(chartRef4.current);

    myChart1.setOption({
      tooltip: {
        trigger: 'axis',
      },
      title: {
        text: 'BUG复开率',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'P0',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210],
          smooth: true,
        },
        {
          name: 'P1',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310],
          smooth: true,
        },
        {
          name: 'P2',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410],
          smooth: true,
        },
        {
          name: 'P3',
          type: 'line',
          stack: 'Total',
          data: [320, 332, 301, 334, 390, 330, 320],
          smooth: true,
        },
      ],
    });
    myChart2.setOption({
      title: {
        text: '修复天数占比',
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true,
        },
      ],
    });

    myChart3.setOption({
      title: {
        text: '客户端分布',
      },
      angleAxis: {
        type: 'category',
        data: ['IOS', 'Andrioid', 'Web', 'Service', 'Other'],
      },
      radiusAxis: {},
      polar: {},
      series: [
        {
          type: 'bar',
          data: [1, 2, 3, 4, 3],
          coordinateSystem: 'polar',
          name: 'P0',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
        {
          type: 'bar',
          data: [2, 4, 6, 1, 3],
          coordinateSystem: 'polar',
          name: 'P1',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
        {
          type: 'bar',
          data: [1, 2, 3, 4, 1],
          coordinateSystem: 'polar',
          name: 'P2',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
        {
          type: 'bar',
          data: [3, 1, 1, 2, 4],
          coordinateSystem: 'polar',
          name: 'P3',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
      ],
      legend: {
        show: true,
        data: ['P0', 'P1', 'P2', 'P3'],
      },
    });
    myChart4.setOption({
      title: {
        text: '部门分布',
      },
      angleAxis: {
        type: 'category',
        data: ['前端', '后端', '产品', '设计', '测试'],
      },
      radiusAxis: {},
      polar: {},
      series: [
        {
          type: 'bar',
          data: [1, 2, 3, 4, 3],
          coordinateSystem: 'polar',
          name: 'P0',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
        {
          type: 'bar',
          data: [2, 4, 6, 1, 3],
          coordinateSystem: 'polar',
          name: 'P1',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
        {
          type: 'bar',
          data: [1, 2, 3, 4, 1],
          coordinateSystem: 'polar',
          name: 'P2',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
        {
          type: 'bar',
          data: [3, 1, 1, 2, 4],
          coordinateSystem: 'polar',
          name: 'P3',
          stack: 'a',
          emphasis: {
            focus: 'series',
          },
        },
      ],
      legend: {
        show: true,
        data: ['P0', 'P1', 'P2', 'P3'],
      },
    });

    return () => {
      myChart1.dispose();
      myChart2.dispose();
      myChart3.dispose();
      myChart4.dispose();
    };
  }, []);

  return (
    <>
      <Card style={{ marginBottom: 16 }} title="分布">
        <Row gutter={24}>
          <Col span={12}>
            <div
              ref={chartRef1}
              style={{
                width: '100%',
                height: 360,
              }}
            />
          </Col>
          <Col span={12}>
            <div
              ref={chartRef2}
              style={{
                width: '100%',
                height: 360,
              }}
            />
          </Col>
        </Row>
      </Card>
      <Card style={{ marginBottom: 16 }}>
        <Row gutter={24}>
          <Col span={12}>
            <div
              ref={chartRef3}
              style={{
                width: '100%',
                height: 360,
              }}
            />
          </Col>
          <Col span={12}>
            <div
              ref={chartRef4}
              style={{
                width: '100%',
                height: 360,
              }}
            />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default QualityBugDistribution;
