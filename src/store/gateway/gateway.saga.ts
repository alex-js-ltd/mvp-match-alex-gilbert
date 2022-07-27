import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import axios from 'axios';

import { fetchGateWaySuccess, fetchGateWayFailed } from './gateway.action';

import { GATEWAY_ACTION_TYPES, Res } from './gateway.types';

export async function fetchGateWay(): Promise<Res> {
  return await axios.get(
    `${process.env.REACT_APP_BASE_URL}/mock-api/api/gateways`
  );
}

export function* fetchGateWayAsync() {
  try {
    const { data } = yield* call(fetchGateWay);

    yield* put(fetchGateWaySuccess(data?.data));
  } catch (error) {
    yield* put(fetchGateWayFailed(error as Error));
  }
}

export function* onFetchGateWay() {
  yield* takeLatest(
    GATEWAY_ACTION_TYPES.FETCH_GATEWAY_START,
    fetchGateWayAsync
  );
}

export function* gateWaySaga() {
  yield* all([call(onFetchGateWay)]);
}
