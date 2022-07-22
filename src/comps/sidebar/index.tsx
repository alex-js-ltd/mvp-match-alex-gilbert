import React, { FC } from 'react';
import {
  Wrapper,
  Container,
  Icon,
  Save,
  Squares,
  Desktop,
  Chart,
  Power,
} from './styles';

const SideBar: FC = () => (
  <Wrapper>
    <Container>
      <Icon imageUrl={Save} width={24} height={24} marginBottom={24} />
      <Icon imageUrl={Squares} width={25} height={25} marginBottom={26} />
      <Icon imageUrl={Desktop} width={25} height={24} marginBottom={21} />
      <Icon imageUrl={Chart} width={25} height={25} marginBottom={28} />
      <Icon imageUrl={Power} width={23} height={25} marginBottom={28} />
    </Container>
  </Wrapper>
);

export default SideBar;
