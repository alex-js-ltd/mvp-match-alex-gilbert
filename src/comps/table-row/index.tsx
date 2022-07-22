import React, { FC, useEffect } from 'react';

import { FlexRow, FlexItem } from './styles';

import { GateWay } from '../../store/gateway/gateway.types';
import { returnGatewayName } from '../../utils/gateway/index';

// utils
import { numberWithCommas } from '../../utils/regex';

interface Header {
  created: string;
  gatewayId: string;
  paymentId: string;
  amount: string;
  display: boolean;
  selectedGatewayId: string | null;
}

const TableRowHeader: FC<Header> = ({
  created,
  gatewayId,
  paymentId,
  amount,
  display,
  selectedGatewayId,
}) => {
  if (!display) {
    return null;
  }
  return (
    <FlexRow>
      <FlexItem textAlign='left' marginLeft={27}>
        {created}
      </FlexItem>
      {!selectedGatewayId && (
        <FlexItem textAlign='center'>{gatewayId}&nbsp;&nbsp;&nbsp;</FlexItem>
      )}
      <FlexItem textAlign='center'>{paymentId}</FlexItem>
      <FlexItem textAlign='right' paddingRight={25}>
        {amount}
      </FlexItem>
    </FlexRow>
  );
};

interface Default {
  created: string;
  gatewayId: string;
  paymentId: string;
  amount: number;
  display: boolean;
  gateWayArray: GateWay[];
  selectedGatewayId: string | null;
}

const TableRowDefault: FC<Default> = ({
  created,
  gatewayId,
  paymentId,
  amount,
  display,
  gateWayArray,
  selectedGatewayId,
}) => {
  if (!display) {
    return null;
  }

  return (
    <FlexRow>
      <FlexItem textAlign='left' marginLeft={27}>
        {created}
      </FlexItem>
      {!selectedGatewayId && (
        <FlexItem textAlign='center'>
          {returnGatewayName(gatewayId, gateWayArray)}
        </FlexItem>
      )}
      <FlexItem textAlign='center'>{paymentId}</FlexItem>
      <FlexItem textAlign='right' paddingRight={25}>
        {numberWithCommas(amount?.toFixed(0)) + ' ' + 'USD'}
      </FlexItem>
    </FlexRow>
  );
};

export { TableRowHeader, TableRowDefault };
