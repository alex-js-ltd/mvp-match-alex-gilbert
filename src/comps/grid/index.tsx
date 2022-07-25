import { FC } from 'react';
import { Wrapper, Container } from './styles';

import Projects from '../projects';
import Report from '../report';
import NoReports from '../no-reports';
import { GridTotal } from '../total';

import { useSelector } from 'react-redux';
import { selectReportArr } from '../../store/report/report.selector';

const Grid: FC = () => {
  const reportArray = useSelector(selectReportArr);

  if (reportArray.length === 0) {
    return <NoReports />;
  }

  return (
    <Wrapper>
      <Container>
        <Projects />
        <Report />
      </Container>

      <GridTotal marginTop='27px' marginLeft={100} />
    </Wrapper>
  );
};

export default Grid;
