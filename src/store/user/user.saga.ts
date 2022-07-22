import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import axios from 'axios';

import { fetchUserSuccess, fetchUserFailed } from './user.action';

import { USER_ACTION_TYPES, Res } from './user.types';

async function fetchUser(): Promise<Res> {
  return await axios.get(`http://178.63.13.157:8090/mock-api/api/users`);
}

export function* fetchUserAsync() {
  try {
    const { data } = yield* call(fetchUser);

    yield* put(fetchUserSuccess(data?.data));
  } catch (error) {
    yield* put(fetchUserFailed(error as Error));
  }
}

export function* onFetchUser() {
  yield* takeLatest(USER_ACTION_TYPES.FETCH_USER_START, fetchUserAsync);
}

export function* userSaga() {
  yield* all([call(onFetchUser)]);
}
