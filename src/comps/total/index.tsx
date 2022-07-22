import React, { FC, useEffect } from 'react';
import { Container, Text } from './styles';

// utils
import { numberWithCommas } from '../../utils/regex';
import { returnTotal } from '../../utils/project';

// redux
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Total: FC<{ marginTop: number; marginLeft: number; width?: string }> = ({
  marginTop,
  marginLeft,
  width,
}) => {
  const reportArray = useSelector((state: RootState) => state.report?.report);

  return (
    <Container marginTop={marginTop} marginLeft={marginLeft} width={width}>
      <Text>{`TOTAL: ${numberWithCommas(returnTotal(reportArray))} USD`}</Text>
    </Container>
  );
};

export default Total;
