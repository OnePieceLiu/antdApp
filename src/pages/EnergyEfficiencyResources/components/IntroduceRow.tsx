// import { Progress, TinyArea, TinyColumn } from '@ant-design/charts';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Col, Row, Tooltip } from 'antd';
import * as echarts from 'echarts';
import numeral from 'numeral';
import { useEffect, useRef } from 'react';
import { ChartCard, Field } from './Charts';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 },
};

const IntroduceRow = () => {
  const chartRef: any = useRef(); //拿到DOM容器
  const chartRef1: any = useRef(); //拿到DOM容器
  const chartRef2: any = useRef(); //拿到DOM容器

  useEffect(() => {
    const myChart = echarts.init(chartRef.current);

    myChart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        top: '10px',
        left: '0', // 调整左侧留白
        right: '10px', // 调整右侧留白
        bottom: '0', // 调整底部留白
        containLabel: true,
      },
      series: [
        {
          data: [10, 20, 30, 22, 33, 25, 19],
          type: 'line',
          areaStyle: {},
        },
      ],
    });
    const myChart1 = echarts.init(chartRef1.current);

    myChart1.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        top: '10px',
        left: '0', // 调整左侧留白
        right: '10px', // 调整右侧留白
        bottom: '0', // 调整底部留白
        containLabel: true,
      },
      series: [
        {
          data: [10, 20, 30, 22, 33, 25, 19],
          type: 'line',
          areaStyle: {},
        },
      ],
    });

    const myChart2 = echarts.init(chartRef2.current);

    myChart2.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      grid: {
        top: '10px',
        left: '0', // 调整左侧留白
        right: '10px', // 调整右侧留白
        bottom: '0', // 调整底部留白
        containLabel: true,
      },
      series: [
        {
          data: [10, 20, 30, 22, 33, 25, 19],
          type: 'line',
          areaStyle: {},
        },
      ],
    });

    return () => {
      myChart.dispose();
      myChart1.dispose();
      myChart2.dispose();
    };
  }, []);

  return (
    <Row gutter={24}>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          title="进行中的项目"
          action={
            <Tooltip title="xxxxxx">
              <InfoCircleOutlined />
            </Tooltip>
          }
          loading={false}
          total={() => 12}
          footer={<Field label="未开始" value={32} />}
          //   contentHeight={46}
        >
          <div
            ref={chartRef}
            style={{
              width: '100%',
              height: 140,
            }}
          />
        </ChartCard>
      </Col>

      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={false}
          title="修复中的BUG"
          action={
            <Tooltip title="xxxx">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(8846).format('0,0')}
          footer={<Field label="已关闭" value={32} />}
          //   contentHeight={46}
        >
          <div
            ref={chartRef1}
            style={{
              width: '100%',
              height: 140,
            }}
          />
        </ChartCard>
      </Col>
      <Col {...topColResponsiveProps}>
        <ChartCard
          bordered={false}
          loading={false}
          title="进行中平均工时"
          action={
            <Tooltip title="xxxxx">
              <InfoCircleOutlined />
            </Tooltip>
          }
          total={numeral(6560).format('0,0')}
          footer={<Field label="历史平均工时" value="32" />}
          //   contentHeight={46}
        >
          <div
            ref={chartRef2}
            style={{
              width: '100%',
              height: 140,
            }}
          />
        </ChartCard>
      </Col>
    </Row>
  );
};

export default IntroduceRow;
