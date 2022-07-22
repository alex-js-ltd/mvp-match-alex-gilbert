import React, { FC, useEffect } from 'react';

import { Wrapper } from './styles';

// comps
import Chart from '../chart';
import Legend from '../legend';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { Report } from '../../store/report/report.types';

import { colorArr } from '../../theme';

import Total from '../total';

const ReportComp: FC = () => {
  const display = useSelector((state: RootState) => state.report?.showReport);

  const projectArray = useSelector(
    (state: RootState) => state.project?.project
  );

  const reportArray = useSelector((state: RootState) => state.report?.report);

  const returnData = (projectId: string) => {
    return reportArray?.filter((el) => el.projectId === projectId);
  };

  const returnTotal = (arr: Report[]) => {
    return Number(
      arr?.reduce((partialSum, a) => partialSum + a.amount, 0).toFixed(0)
    );
  };

  let chartData = projectArray?.map(({ projectId, name }) => {
    const newArr = returnData(projectId);
    const totalRevenue = returnTotal(newArr);

    return {
      name: name,
      totalRevenue: totalRevenue,
      color: colorArr.filter((el) => el.projectId === projectId)[0].color,
      value: Number(totalRevenue),
    };
  });

  const legendArr = projectArray?.filter((el) => {
    return reportArray?.some((f) => {
      return f.projectId === el.projectId;
    });
  });

  if (!display) {
    return null;
  }

  return (
    <Wrapper>
      <Legend arr={legendArr} />
      <Chart data={chartData} totalValue={returnTotal(reportArray)} />

      <Total marginLeft={0} marginTop='auto' width='100%' />
    </Wrapper>
  );
};

export default ReportComp;
