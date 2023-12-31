import { Card } from 'antd';
import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

const ProjectScheduleCard: React.FC = () => {
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
        left: '0',
        right: '0',
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
          name: '需求池',
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
          name: '产品设计中',
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
          name: '内审中',
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
          name: '产品宣讲',
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
        {
          name: '待排期',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
          },
          emphasis: {
            focus: 'series',
          },
          data: [820, 832, 901, 934, 1290, 1330, 1320],
        },
      ],
    });

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <Card style={{ marginBottom: 16 }} title="项目数量">
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

export default ProjectScheduleCard;
