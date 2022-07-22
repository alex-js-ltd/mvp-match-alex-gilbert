import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import axios from 'axios';

import { fetchProjectSuccess, fetchProjectFailed } from './project.action';

import { PROJECT_ACTION_TYPES, Res } from './project.types';

async function fetchProject(): Promise<Res> {
  return await axios.get(`http://178.63.13.157:8090/mock-api/api/projects`);
}

export function* fetchProjectAsync() {
  try {
    const { data } = yield* call(fetchProject);

    yield* put(fetchProjectSuccess(data?.data));
  } catch (error) {
    yield* put(fetchProjectFailed(error as Error));
  }
}

export function* onFetchProject() {
  yield* takeLatest(
    PROJECT_ACTION_TYPES.FETCH_PROJECT_START,
    fetchProjectAsync
  );
}

export function* projectSaga() {
  yield* all([call(onFetchProject)]);
}
