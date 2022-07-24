import { FC, ReactNode } from 'react';
import { Wrapper, Menu, Container } from './styles';

const DropDown: FC<{
  selected: string;
  List: ReactNode;
  marginLeft?: number;
  minWidth: number;
}> = ({ selected, List, marginLeft, minWidth }) => {
  return (
    <Wrapper marginLeft={marginLeft} minWidth={minWidth}>
      {selected}

      <Menu>
        <Container>{List}</Container>
      </Menu>
    </Wrapper>
  );
};

export default DropDown;
