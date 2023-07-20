import * as echarts from 'echarts';
import React, { useEffect, useRef } from 'react';

import { Card } from 'antd';

const AverageTimeCard: React.FC = () => {
  const chartRef: any = useRef(); //拿到DOM容器

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.setOption({
      //   title: {
      //     text: 'Stacked Area Chart',
      //   },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985',
          },
        },
      },
      legend: {
        data: ['需求池', '产品设计中', '内审中', '产品宣讲', '待排期'],
      },
      toolbox: {
        feature: {
          // 保存为图片
          saveAsImage: {},
        },
      },
      grid: {
        left: '3%',
        right: '4%',
        // bottom: '3%',
        // containLabel: true,
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
      ],
      yAxis: [
        {
          type: 'value',
        },
      ],
      dataZoom: [
        {
          type: 'slider',
          showDetail: false,
          start: 0,
          end: 60,
        },
      ],
      series: [
        {
          name: '需求池',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
          name: '产品设计中',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [220, 182, 191, 234, 290, 330, 310],
        },
        {
          name: '内审中',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [150, 232, 201, 154, 190, 330, 410],
        },
        {
          name: '产品宣讲',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [320, 332, 301, 334, 390, 330, 320],
        },
        {
          name: '待排期',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top',
          },
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [820, 932, 901, 934, 1290, 1330, 1320],
        },
      ],
    });

    return () => {
      myChart.dispose();
    };
  }, []);
  return (
    <Card
      bordered={false}
      title="平均耗时（天）"
      style={{
        height: '100%',
        marginTop: 24,
      }}
    >
      <div
        ref={chartRef}
        style={{
          width: '100%',
          height: 300,
        }}
      />
    </Card>
  );
};

export default AverageTimeCard;
