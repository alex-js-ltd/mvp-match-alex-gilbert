import { FC, useState } from 'react';
import { Container, Header, Text } from './styles';

import { Report } from '../../store/report/report.types';

// comps
import { TableRowHeader, TableRowDefault } from '../table-row/index';

// redux
import { useSelector } from 'react-redux';

import { selectGatewayArr } from '../../store/gateway/gateway.selector';
import { selectGatewayId } from '../../store/report/report.selector';

// utils
import { numberWithCommas } from '../../utils/regex';
import { returnTotal } from '../../utils/project';

const ProjectItem: FC<{ name: string; data: Report[] }> = ({ name, data }) => {
  const [showData, setShowData] = useState<boolean>(false);

  const gateWayArray = useSelector(selectGatewayArr);

  const selectedGatewayId = useSelector(selectGatewayId);

  const sortDate = data?.sort(
    // @ts-ignore
    (a, b) => new Date(a.created) - new Date(b.created)
  );

  if (data?.length === 0) {
    return null;
  }

  return (
    <Container>
      <Header onClick={() => setShowData(!showData)}>
        <Text marginLeft={27}>{name}</Text>
        <Text paddingRight={24}>{`TOTAL ${numberWithCommas(
          returnTotal(data)
        )} USD`}</Text>
      </Header>

      <TableRowHeader
        created='Date'
        gatewayId='Gateway'
        paymentId='Transaction ID'
        amount='Amount'
        display={showData}
        selectedGatewayId={selectedGatewayId}
      />

      {sortDate?.map(({ created, gatewayId, paymentId, amount }) => (
        <TableRowDefault
          key={paymentId}
          created={created}
          gatewayId={gatewayId}
          paymentId={paymentId}
          amount={amount}
          display={showData}
          gateWayArray={gateWayArray}
          selectedGatewayId={selectedGatewayId}
        />
      ))}
    </Container>
  );
};

export default ProjectItem;
