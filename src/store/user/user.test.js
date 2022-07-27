import { takeLatest } from 'redux-saga/effects';

import { UserActionTypes } from './user.types';
import { onFetchUser, fetchUserAsync } from './user.saga';

describe('on fetch user saga', () => {
  it('should trigger on FETCH_USER_START', () => {
    const generator = onFetchUser();

    expect(generator.next().value).toEqual(
      takeLatest(UserActionTypes.FETCH_USER_START, fetchUserAsync)
    );
  });
});
