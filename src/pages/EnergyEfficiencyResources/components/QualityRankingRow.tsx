import { Card, Col, Row } from 'antd';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

const QualityRankingRow: React.FC = () => {
  const chartRef1: any = useRef(); //拿到DOM容器
  const chartRef2: any = useRef(); //拿到DOM容器
  const chartRef3: any = useRef(); //拿到DOM容器

  useEffect(() => {
    const myChart1 = echarts.init(chartRef1.current);
    const myChart2 = echarts.init(chartRef2.current);
    const myChart3 = echarts.init(chartRef3.current);

    myChart1.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: '0',
        right: '20px',
        bottom: '0',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['张三', '李四', 'jj', 'jack', 'andy', 'zed', '王五'],
      },
      series: [
        {
          name: 'P0',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
          name: 'P1',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'P2',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'P3',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [150, 212, 201, 154, 190, 330, 410],
        },
      ],
    });
    myChart2.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: '0',
        right: '20px',
        bottom: '0',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['张三', '李四', 'jj', 'jack', 'andy', 'zed', '王五'],
      },
      series: [
        {
          name: 'P0',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
          name: 'P1',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'P2',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'P3',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [150, 212, 201, 154, 190, 330, 410],
        },
      ],
    });

    myChart3.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: '0',
        right: '20px',
        bottom: '0',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['张三', '李四', 'jj', 'jack', 'andy', 'zed', '王五'],
      },
      series: [
        {
          name: 'P0',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [320, 302, 301, 334, 390, 330, 320],
        },
        {
          name: 'P1',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: 'P2',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: 'P3',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [150, 212, 201, 154, 190, 330, 410],
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
    <>
      <Row gutter={24}>
        <Col span={8}>
          <Card style={{ marginBottom: 16 }} title="BUG背负量">
            <div
              ref={chartRef1}
              style={{
                width: '100%',
                height: '460px',
              }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ marginBottom: 16 }} title="BUG修复耗时">
            <div
              ref={chartRef2}
              style={{
                width: '100%',
                height: 460,
              }}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card style={{ marginBottom: 16 }} title="BUG复开率">
            <div
              ref={chartRef3}
              style={{
                width: '100%',
                height: 460,
              }}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default QualityRankingRow;
