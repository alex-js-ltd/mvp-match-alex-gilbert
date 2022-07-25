import React, { FC, useEffect, Fragment } from 'react';
import { Container, TitleContainer } from './styles';

// comps
import ProjectItem from '../project-item';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Projects: FC = () => {
  const projectArray = useSelector(
    (state: RootState) => state.project?.project
  );

  const reportArray = useSelector((state: RootState) => state.report?.report);

  const returnData = (projectId: string) => {
    return reportArray?.filter((el) => el.projectId === projectId);
  };

  const selectedProject = useSelector(
    (state: RootState) => state.report?.selectedProject
  );

  const selectedGateway = useSelector(
    (state: RootState) => state.report?.selectedGateway
  );

  return (
    <Container>
      <TitleContainer paddingTop={18} paddingLeft={19}>
        <div>{selectedProject}</div>
        <div>&nbsp;|&nbsp;</div>
        <div>{selectedGateway}</div>
      </TitleContainer>

      {projectArray?.map(({ projectId, name }) => (
        <ProjectItem key={projectId} name={name} data={returnData(projectId)} />
      ))}
    </Container>
  );
};

export default Projects;
