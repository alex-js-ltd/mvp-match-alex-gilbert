import React, { FC, useEffect, Fragment } from 'react';
import { Container, TitleContainer } from './styles';

// comps
import ProjectItem from '../project-item';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

import { returnProjectName } from '../../utils/project/index';
import { returnGatewayName } from '../../utils/gateway/index';

const Projects: FC = () => {
  const projectArray = useSelector(
    (state: RootState) => state.project?.project
  );

  const reportArray = useSelector((state: RootState) => state.report?.report);

  const gatewayArray = useSelector(
    (state: RootState) => state.gateway?.gateway
  );

  const returnData = (projectId: string) => {
    return reportArray?.filter((el) => el.projectId === projectId);
  };

  const selectedGatewayId = useSelector(
    (state: RootState) => state.report?.selectedGatewayId
  );

  const selectedProjectId = useSelector(
    (state: RootState) => state.report?.selectedProjectId
  );

  return (
    <Container>
      <TitleContainer paddingTop={18} paddingLeft={19}>
        <div>
          {selectedProjectId
            ? returnProjectName(selectedProjectId, projectArray)
            : 'All projects'}
        </div>
        <div>&nbsp;|&nbsp;</div>
        <div>
          {selectedGatewayId
            ? returnGatewayName(selectedGatewayId, gatewayArray)
            : 'All gateways'}
        </div>
      </TitleContainer>

      {projectArray?.map(({ projectId, name }) => (
        <ProjectItem key={projectId} name={name} data={returnData(projectId)} />
      ))}
    </Container>
  );
};

export default Projects;
