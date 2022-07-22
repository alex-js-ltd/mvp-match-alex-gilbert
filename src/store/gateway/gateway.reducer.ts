import { AnyAction } from 'redux';

import { GateWay } from './gateway.types';

import {
  fetchGateWayStart,
  fetchGateWaySuccess,
  fetchGateWayFailed,
} from './gateway.action';

export type GateWayState = {
  readonly gateway: GateWay[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const GATEWAY_INITIAL_STATE: GateWayState = {
  gateway: [],
  isLoading: false,
  error: null,
};

export const gateWayReducer = (
  state = GATEWAY_INITIAL_STATE,
  action = {} as AnyAction
): GateWayState => {
  if (fetchGateWayStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchGateWaySuccess.match(action)) {
    return { ...state, gateway: action.payload, isLoading: false };
  }

  if (fetchGateWayFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
