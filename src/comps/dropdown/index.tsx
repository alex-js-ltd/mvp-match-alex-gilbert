import React, { FC, useEffect } from 'react';
import { Wrapper, Menu, Container, MenuItem } from './styles';

import { Project } from '../../store/project/project.types';
import { GateWay } from '../../store/gateway/gateway.types';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { REPORT_ACTION_TYPES } from '../../store/report/report.types';
import { RootState } from '../../store/store';

const DropDownProject: FC<{
  title: string;
  marginLeft: number;
  projectArray: Project[];
}> = ({ title, marginLeft, projectArray }) => {
  const dispatch = useDispatch();

  const selectedGatewayId = useSelector(
    (state: RootState) => state.report?.selectedGatewayId
  );

  return (
    <Wrapper marginLeft={marginLeft} minWidth={135}>
      {title}
      <Menu>
        <Container>
          <MenuItem
            onClick={() =>
              dispatch({
                type: REPORT_ACTION_TYPES.POST_REPORT_START,
                payload: {
                  from: '2021-01-01',
                  to: '2021-12-31',
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
                    from: '2021-01-01',
                    to: '2021-12-31',
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
        </Container>
      </Menu>
    </Wrapper>
  );
};

const DropDownGateway: FC<{
  title: string;
  marginLeft: number;
  gateWayArray: GateWay[];
}> = ({ title, marginLeft, gateWayArray }) => {
  const dispatch = useDispatch();

  const selectedProjectId = useSelector(
    (state: RootState) => state.report?.selectedProjectId
  );

  return (
    <Wrapper marginLeft={marginLeft} minWidth={145}>
      {title}

      <Menu>
        <Container>
          <MenuItem
            onClick={() =>
              dispatch({
                type: REPORT_ACTION_TYPES.POST_REPORT_START,
                payload: {
                  from: '2021-01-01',
                  to: '2021-12-31',
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
                    from: '2021-01-01',
                    to: '2021-12-31',
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
        </Container>
      </Menu>
    </Wrapper>
  );
};

export { DropDownProject, DropDownGateway };
