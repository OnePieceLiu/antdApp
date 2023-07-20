import { DatePicker, Select } from 'antd';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';

import type { Dayjs } from 'dayjs';
import type { RangeValue } from 'rc-picker/lib/interface';
const { Option } = Select;
const { RangePicker } = DatePicker;

interface TimeValue {
  timeType?: string;
  range?: RangeValue<Dayjs>;
}
interface Props {
  value?: TimeValue;
  onChange?: (value: TimeValue) => void;
}

const TimeSelector: React.FC<Props> = ({ value = {}, onChange }) => {
  const [timeType, setTimeType] = useState(value?.timeType ?? '3');
  const [range, setRange] = useState<RangeValue<Dayjs> | any>(
    value?.range ?? [dayjs().subtract(3, 'day').startOf('day'), dayjs().endOf('day')],
  );
  //   const [timeSelectorValue,setTimeSelectorValue]=useState({
  //     timeType:value?.timeType ?? '3',
  //     range:value?.range ?? [dayjs().subtract(3, 'day').startOf('day'), dayjs().endOf('day')],
  //   })

  // 当用户选择时间类型时，更新RangePicker的值
  useEffect(() => {
    if (timeType === 'custom') {
      setRange([]);
    }
    if (timeType !== 'custom') {
      setRange([dayjs().subtract(Number(timeType), 'day').startOf('day'), dayjs().endOf('day')]);
    }
  }, [timeType]);

  // 当RangePicker的值发生变化时，触发onChange回调函数
  useEffect(() => {
    onChange?.({ timeType, range });
  }, [range]);

  return (
    <>
      <Select
        placeholder="时间选择"
        style={{ width: 100, marginRight: 16 }}
        value={timeType}
        onChange={setTimeType}
      >
        <Option value="3">近3天</Option>
        <Option value="7">近7天</Option>
        <Option value="30">近30天</Option>
        <Option value="90">近90天</Option>
        <Option value="180">近半年</Option>
        <Option value="custom">自定义</Option>
      </Select>
      <RangePicker
        value={range}
        onChange={(values: RangeValue<Dayjs>) => setRange(values)}
        disabled={timeType !== 'custom'}
      />
    </>
  );
};

export default TimeSelector;
