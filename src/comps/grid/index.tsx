import React, { FC } from 'react';
import { Wrapper, Container } from './styles';

import Projects from '../projects';
import Report from '../report';
import NoReports from '../no-reports';
import Total from '../total';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Grid: FC = () => {
  const display = useSelector((state: RootState) => state.report?.showReport);
  const reportArray = useSelector((state: RootState) => state.report?.report);

  if (reportArray.length === 0) {
    return <NoReports />;
  }

  return (
    <Wrapper>
      <Container>
        <Projects />
        <Report />
      </Container>

      {!display && <Total marginTop={27} marginLeft={100} />}
    </Wrapper>
  );
};

export default Grid;
