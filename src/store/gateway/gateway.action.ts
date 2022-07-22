import { GATEWAY_ACTION_TYPES, GateWay } from './gateway.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchGateWayStart =
  Action<GATEWAY_ACTION_TYPES.FETCH_GATEWAY_START>;

export type FetchGateWaySuccess = ActionWithPayload<
  GATEWAY_ACTION_TYPES.FETCH_GATEWAY_SUCCESS,
  GateWay[]
>;

export type FetchGateWayFailed = ActionWithPayload<
  GATEWAY_ACTION_TYPES.FETCH_GATEWAY_FAILED,
  Error
>;

export const fetchGateWayStart = withMatcher(() =>
  createAction(GATEWAY_ACTION_TYPES.FETCH_GATEWAY_START)
);

export const fetchGateWaySuccess = withMatcher((gateWayArray: GateWay[]) =>
  createAction(GATEWAY_ACTION_TYPES.FETCH_GATEWAY_SUCCESS, gateWayArray)
);

export const fetchGateWayFailed = withMatcher((error: Error) =>
  createAction(GATEWAY_ACTION_TYPES.FETCH_GATEWAY_FAILED, error)
);
