import React, { FC } from 'react';
import { Wrapper } from './styles';

const Date: FC<{ title: string; marginLeft: number }> = ({
  title,
  marginLeft,
}) => {
  return <Wrapper marginLeft={marginLeft}>{title}</Wrapper>;
};

export default Date;
