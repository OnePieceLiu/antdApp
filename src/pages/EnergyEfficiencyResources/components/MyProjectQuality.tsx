// import { Progress, TinyArea, TinyColumn } from '@ant-design/charts';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Card, Col, Row, Tooltip } from 'antd';
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
const MyProjectEnergyEfficiency = () => {
  const chartRef: any = useRef(); //拿到DOM容器
  const chartRef1: any = useRef(); //拿到DOM容器
  const chartRef2: any = useRef(); //拿到DOM容器
  const bugNumberRef: any = useRef(); //拿到DOM容器
  const bugDistributionRef1: any = useRef(); //拿到DOM容器
  const bugDistributionRef2: any = useRef(); //拿到DOM容器

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

    // bug数量
    const bugNumberRefChart = echarts.init(bugNumberRef.current);

    bugNumberRefChart.setOption({
      title: {
        text: '总数666',
      },
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

    // bug分布

    const bugDistributionChart1 = echarts.init(bugDistributionRef1.current);
    const bugDistributionChart2 = echarts.init(bugDistributionRef2.current);
    bugDistributionChart1.setOption({
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
    bugDistributionChart2.setOption({
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

    return () => {
      myChart.dispose();
      myChart1.dispose();
      myChart2.dispose();
      bugNumberRefChart.dispose();
      bugDistributionChart1.dispose();
      bugDistributionChart2.dispose();
    };
  }, []);

  return (
    <>
      <h2
        style={{
          marginTop: 24,
        }}
      >
        项目质量
      </h2>
      <Row
        style={{
          marginTop: 24,
        }}
        gutter={24}
      >
        <Col {...topColResponsiveProps}>
          <ChartCard
            bordered={false}
            title="修复中的BUG"
            action={
              <Tooltip title="xxxxxx">
                <InfoCircleOutlined />
              </Tooltip>
            }
            loading={false}
            total={() => 12}
            footer={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Field label="已关闭" value={32} />
                <Field label="总计" value={32} />
              </div>
            }
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
            style={{ height: '100%' }}
            bordered={false}
            loading={false}
            title="BUG级别分布"
            action={
              <Tooltip title="xxxx">
                <InfoCircleOutlined />
              </Tooltip>
            }
            total={numeral(8846).format('0,0')}
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
            style={{ height: '100%' }}
            bordered={false}
            loading={false}
            title="平均修复时间"
            action={
              <Tooltip title="xxxxx">
                <InfoCircleOutlined />
              </Tooltip>
            }
            total={numeral(6560).format('0,0')}
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

      <Card style={{ marginTop: 16 }} title="BUG数量">
        <div
          ref={bugNumberRef}
          style={{
            width: '100%',
            height: 460,
          }}
        />
      </Card>
      <Card style={{ marginTop: 16 }} title="BUG分布">
        <Row gutter={24}>
          <Col span={12}>
            <div
              ref={bugDistributionRef1}
              style={{
                width: '100%',
                height: 360,
              }}
            />
          </Col>
          <Col span={12}>
            <div
              ref={bugDistributionRef2}
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

export default MyProjectEnergyEfficiency;
