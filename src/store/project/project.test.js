import { takeLatest } from 'redux-saga/effects';

import { PROJECT_ACTION_TYPES } from './project.types';
import { onFetchProject, fetchProjectAsync } from './project.saga';

describe('on fetch project saga', () => {
  it('should trigger on FETCH_PROJECT_START', () => {
    const generator = onFetchProject();

    expect(generator.next().value).toEqual(
      takeLatest(PROJECT_ACTION_TYPES.FETCH_PROJECT_START, fetchProjectAsync)
    );
  });
});
