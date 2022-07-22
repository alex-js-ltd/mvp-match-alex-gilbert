import { USER_ACTION_TYPES, User } from './user.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchUserStart = Action<USER_ACTION_TYPES.FETCH_USER_START>;

export type FetchUserSuccess = ActionWithPayload<
  USER_ACTION_TYPES.FETCH_USER_SUCCESS,
  User[]
>;

export type FetchUserFailed = ActionWithPayload<
  USER_ACTION_TYPES.FETCH_USER_FAILED,
  Error
>;

export const fetchUserStart = withMatcher(() =>
  createAction(USER_ACTION_TYPES.FETCH_USER_START)
);

export const fetchUserSuccess = withMatcher((userArray: User[]) =>
  createAction(USER_ACTION_TYPES.FETCH_USER_SUCCESS, userArray)
);

export const fetchUserFailed = withMatcher((error: Error) =>
  createAction(USER_ACTION_TYPES.FETCH_USER_FAILED, error)
);
