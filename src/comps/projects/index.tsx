import React, { FC, useEffect, Fragment } from 'react';
import { Container, TitleContainer } from './styles';

// comps
import ProjectItem from '../project-item';

// redux
import { useSelector } from 'react-redux';

import {
  selectProject,
  selectProjectId,
  selectGateway,
  selectGatewayId,
} from '../../store/report/report.selector';

import { selectProjectArr } from '../../store/project/project.selector';
import { selectReportArr } from '../../store/report/report.selector';

const TitleWrapper: FC = () => {
  const selectedProject = useSelector(selectProject);

  const selectedProjectId = useSelector(selectProjectId);

  const selectedGateway = useSelector(selectGateway);

  const selectedGatewayId = useSelector(selectGatewayId);

  return (
    <TitleContainer paddingTop={18} paddingLeft={19}>
      <div>{selectedProjectId ? selectedProject : 'All projects'}</div>
      <div>&nbsp;|&nbsp;</div>
      <div>{selectedGatewayId ? selectedGateway : 'All gateways'}</div>
    </TitleContainer>
  );
};

const ProjectsWrapper: FC = () => {
  const projectArray = useSelector(selectProjectArr);
  const reportArray = useSelector(selectReportArr);

  const returnData = (projectId: string) => {
    return reportArray?.filter((el) => el.projectId === projectId);
  };

  return (
    <Fragment>
      {projectArray?.map(({ projectId, name }) => (
        <ProjectItem key={projectId} name={name} data={returnData(projectId)} />
      ))}
    </Fragment>
  );
};

const Projects: FC = () => (
  <Container>
    <TitleWrapper />
    <ProjectsWrapper />
  </Container>
);

export default Projects;
