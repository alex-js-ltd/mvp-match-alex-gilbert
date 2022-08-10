import { takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';

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

it('integration test with redux saga test plan', () => {
  const payload = [
    {
      userId: 'rahej',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@email.com',
    },
  ];

  return expectSaga(fetchUserAsync)
    .put({
      type: UserActionTypes.FETCH_USER_SUCCESS,
      payload: payload,
    })

    .dispatch({ type: UserActionTypes.FETCH_USER_START })
    .run();
});
