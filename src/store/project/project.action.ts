import { PROJECT_ACTION_TYPES, Project } from './project.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchProjectStart =
  Action<PROJECT_ACTION_TYPES.FETCH_PROJECT_START>;

export type FetchProjectSuccess = ActionWithPayload<
  PROJECT_ACTION_TYPES.FETCH_PROJECT_SUCCESS,
  Project[]
>;

export type FetchProjectFailed = ActionWithPayload<
  PROJECT_ACTION_TYPES.FETCH_PROJECT_FAILED,
  Error
>;

export const fetchProjectStart = withMatcher(() =>
  createAction(PROJECT_ACTION_TYPES.FETCH_PROJECT_START)
);

export const fetchProjectSuccess = withMatcher((projectArray: Project[]) =>
  createAction(PROJECT_ACTION_TYPES.FETCH_PROJECT_SUCCESS, projectArray)
);

export const fetchProjectFailed = withMatcher((error: Error) =>
  createAction(PROJECT_ACTION_TYPES.FETCH_PROJECT_FAILED, error)
);
