import React, { FC, Fragment } from 'react';
import { Wrapper, Square, Text } from './styles';

import { Project } from '../../store/project/project.types';
import { colorArr } from '../../theme';

const Legend: FC<{ arr: Project[] }> = ({ arr }) => {
  return (
    <Wrapper>
      {arr?.map(({ projectId, name }, index) => (
        <Fragment key={projectId}>
          <Square
            background={
              colorArr.filter((el) => el.projectId === projectId)[0].color
            }
          />
          <Text>{name}</Text>
        </Fragment>
      ))}
    </Wrapper>
  );
};

export default Legend;
