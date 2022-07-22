import React, { FC } from 'react';
import { Wrapper, imgUri } from './styles';

const NoReports: FC = () => (
  <Wrapper>
    <img src={imgUri} alt='Logo' />;
  </Wrapper>
);

export default NoReports;
