import { createSelector } from 'reselect';

import { GateWayState } from './gateway.reducer';
import { RootState } from '../store';

const selectGatewayReducer = (state: RootState): GateWayState => state.gateway;

export const selectGatewayArr = createSelector(
  [selectGatewayReducer],
  (gateway) => gateway.gateway
);
