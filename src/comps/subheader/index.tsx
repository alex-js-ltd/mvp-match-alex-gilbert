import React, { FC, useEffect, Fragment } from 'react';
import { Wrapper, Container, FlexBox, Text, Button } from './styles';
import { MenuItem } from '../dropdown/styles';

// comps
import DropDown from '../dropdown';
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

  useEffect(() => {
    dispatch({ type: GATEWAY_ACTION_TYPES.FETCH_GATEWAY_START });
  }, []);

  const projectArray = useSelector(
    (state: RootState) => state.project?.project
  );

  const gateWayArray = useSelector(
    (state: RootState) => state.gateway?.gateway
  );

  const selectedProject = useSelector(
    (state: RootState) => state.report?.selectedProject
  );

  const selectedProjectId = useSelector(
    (state: RootState) => state.report?.selectedProjectId
  );

  const selectedGateway = useSelector(
    (state: RootState) => state.report?.selectedGateway
  );

  const selectedGatewayId = useSelector(
    (state: RootState) => state.report?.selectedGatewayId
  );

  const startDate = useSelector((state: RootState) => state.date?.start);

  const endDate = useSelector((state: RootState) => state.date?.end);

  useEffect(() => {
    if (startDate && endDate) {
      dispatch({
        type: REPORT_ACTION_TYPES.POST_REPORT_START,
        payload: {
          from: startDate,
          to: endDate,
          gatewayId: selectedGatewayId,
          projectId: selectedProjectId,
        },
      });
    }
  }, [startDate, endDate]);

  const ProjectList: FC = () => (
    <Fragment>
      <MenuItem
        onClick={() =>
          dispatch({
            type: REPORT_ACTION_TYPES.POST_REPORT_START,
            payload: {
              from: startDate,
              to: endDate,
              gatewayId: selectedGatewayId,
              selectedProject: 'All projects',
            },
          })
        }
      >
        All projects
      </MenuItem>
      {projectArray?.map(({ projectId, name }) => (
        <MenuItem
          key={projectId}
          onClick={() =>
            dispatch({
              type: REPORT_ACTION_TYPES.POST_REPORT_START,
              payload: {
                from: startDate,
                to: endDate,
                projectId: projectId,
                gatewayId: selectedGatewayId,
                selectedProject: name,
              },
            })
          }
        >
          {name}
        </MenuItem>
      ))}
    </Fragment>
  );

  const GatewayList: FC = () => (
    <Fragment>
      <MenuItem
        onClick={() =>
          dispatch({
            type: REPORT_ACTION_TYPES.POST_REPORT_START,
            payload: {
              from: startDate,
              to: endDate,
              projectId: selectedProjectId,
              selectedGateway: 'All gateways',
            },
          })
        }
      >
        All gateways
      </MenuItem>
      {gateWayArray?.map(({ gatewayId, name }) => (
        <MenuItem
          key={gatewayId}
          onClick={() =>
            dispatch({
              type: REPORT_ACTION_TYPES.POST_REPORT_START,
              payload: {
                from: startDate,
                to: endDate,
                projectId: selectedProjectId,
                gatewayId: gatewayId,
                selectedGateway: name,
              },
            })
          }
        >
          {name}
        </MenuItem>
      ))}
    </Fragment>
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
          <DropDown
            selected={selectedProject}
            List={<ProjectList />}
            minWidth={135}
          />
          <DropDown
            selected={selectedGateway}
            List={<GatewayList />}
            marginLeft={23}
            minWidth={145}
          />

          <Date startDate={startDate} endDate={endDate} />

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
