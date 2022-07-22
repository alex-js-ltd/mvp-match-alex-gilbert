import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import axios from 'axios';

import { fetchGateWaySuccess, fetchGateWayFailed } from './gateway.action';

import { GATEWAY_ACTION_TYPES, Res } from './gateway.types';

async function fetchGateWay(): Promise<Res> {
  return await axios.get(`http://178.63.13.157:8090/mock-api/api/gateways`);
}

export function* fetchGateWayAsync() {
  try {
    const { data } = yield* call(fetchGateWay);

    console.log('GATEWAY', data);

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
