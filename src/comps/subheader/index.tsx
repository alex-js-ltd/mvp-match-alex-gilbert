import React, { FC, useEffect } from 'react';
import { Wrapper, Container, FlexBox, Text, Button } from './styles';

// comps
import { DropDownProject, DropDownGateway } from '../dropdown';
import Date from '../date';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { PROJECT_ACTION_TYPES } from '../../store/project/project.types';
import { RootState } from '../../store/store';
import { GATEWAY_ACTION_TYPES } from '../../store/gateway/gateway.types';
import { REPORT_ACTION_TYPES } from '../../store/report/report.types';

const SubHeader: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: PROJECT_ACTION_TYPES.FETCH_PROJECT_START });
  }, []);

  const projectArray = useSelector(
    (state: RootState) => state.project?.project
  );

  useEffect(() => {
    dispatch({ type: GATEWAY_ACTION_TYPES.FETCH_GATEWAY_START });
  }, []);

  const gateWayArray = useSelector(
    (state: RootState) => state.gateway?.gateway
  );

  const selectedProject = useSelector(
    (state: RootState) => state.report?.selectedProject
  );

  const selectedGateway = useSelector(
    (state: RootState) => state.report?.selectedGateway
  );

  return (
    <Wrapper>
      <Container>
        <FlexBox flexDirection='column' marginTop={35}>
          <Text fontSize={24} lineHeight={28} color='#011F4B'>
            Reports
          </Text>

          <Text fontSize={16} lineHeight={19} color='#7E8299' marginTop={4}>
            Easily generate a report of your transactions
          </Text>
        </FlexBox>

        <FlexBox flexDirection='row' marginTop={33}>
          <DropDownProject
            title={selectedProject}
            marginLeft={0}
            projectArray={projectArray}
          />
          <DropDownGateway
            title={selectedGateway}
            marginLeft={23}
            gateWayArray={gateWayArray}
          />
          <Date title='From date' marginLeft={23} />
          <Date title='To date' marginLeft={23} />

          <Button
            onClick={() =>
              dispatch({ type: REPORT_ACTION_TYPES.SHOW_REPORT_CHART })
            }
          >
            Generate Report
          </Button>
        </FlexBox>
      </Container>
    </Wrapper>
  );
};

export default SubHeader;
