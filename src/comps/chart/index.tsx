import React, { FC } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

import { Wrapper } from './styles';

interface ChartData {
  name: string;
  totalRevenue: number;
  color: string;
  value: number;
}

const Chart: FC<{ data: ChartData[]; totalValue: number }> = ({
  data,
  totalValue,
}) => {
  return (
    <Wrapper>
      <PieChart
        segmentsShift={0.2}
        lineWidth={50}
        data={data}
        totalValue={totalValue}
      />
    </Wrapper>
  );
};

export default Chart;
