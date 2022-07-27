import { takeLatest } from 'redux-saga/effects';

import { GATEWAY_ACTION_TYPES } from './gateway.types';
import { onFetchGateWay, fetchGateWayAsync } from './gateway.saga';

describe('on fetch gateway saga', () => {
  it('should trigger on FETCH_GATEWAY_START', () => {
    const generator = onFetchGateWay();

    expect(generator.next().value).toEqual(
      takeLatest(GATEWAY_ACTION_TYPES.FETCH_GATEWAY_START, fetchGateWayAsync)
    );
  });
});
