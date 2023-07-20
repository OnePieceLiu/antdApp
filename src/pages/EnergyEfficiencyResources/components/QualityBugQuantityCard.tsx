import { Card } from 'antd';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

const QualityBugQuantityCard: React.FC = () => {
  const chartRef: any = useRef(); //拿到DOM容器

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '3%',
        bottom: '50px',
        containLabel: true,
      },
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      dataZoom: [
        {
          type: 'slider',
          showDetail: false,
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          name: 'IOS',
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
          name: 'Android',
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
          name: 'Web',
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
          name: 'Service',
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
      myChart.dispose();
    };
  }, []);

  return (
    <Card style={{ marginBottom: 16 }} title="BUG数量">
      <div
        ref={chartRef}
        style={{
          width: '100%',
          height: 460,
        }}
      />
    </Card>
  );
};

export default QualityBugQuantityCard;
