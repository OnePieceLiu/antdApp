// import { Progress, TinyArea, TinyColumn } from '@ant-design/charts';
import { InfoCircleOutlined } from '@ant-design/icons';
import { Area } from '@ant-design/plots';
import { Col, Row, Tooltip } from 'antd';
import numeral from 'numeral';
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
  const data = [
    {
      timePeriod: '2015 Q1',
      value: 10,
    },
    {
      timePeriod: '2015 Q2',
      value: 20,
    },
    {
      timePeriod: '2015 Q3',
      value: 30,
    },
    {
      timePeriod: '2015 Q4',
      value: 22,
    },
    {
      timePeriod: '2016 Q1',
      value: 24,
    },
    {
      timePeriod: '2016 Q2',
      value: 30,
    },
    {
      timePeriod: '2016 Q3',
      value: 40,
    },
    {
      timePeriod: '2016 Q4',
      value: 22,
    },
  ];
  const config: any = {
    data,
    xField: 'timePeriod',
    yField: 'value',
    xAxis: {
      range: [0, 1],
    },
  };
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
          <div style={{ height: '80px', width: '100%' }}>
            <Area {...config} />
          </div>
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
          {' '}
          <div style={{ height: '80px', width: '100%' }}>
            <Area {...config} />
          </div>
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
          {' '}
          <div style={{ height: '80px', width: '100%' }}>
            <Area {...config} />
          </div>
        </ChartCard>
      </Col>
    </Row>
  );
};

export default IntroduceRow;
