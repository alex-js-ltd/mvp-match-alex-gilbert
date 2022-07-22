import { GateWay } from '../../store/gateway/gateway.types';

export const returnGatewayName = (
  gatewayId: string,
  gateWayArray: GateWay[]
) => {
  return gateWayArray?.find((el) => el.gatewayId === gatewayId)?.name;
};
