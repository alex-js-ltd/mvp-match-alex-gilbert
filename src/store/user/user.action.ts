import { UserActionTypes, User } from './user.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type FetchUserStart = Action<UserActionTypes.FETCH_USER_START>;

export type FetchUserSuccess = ActionWithPayload<
  UserActionTypes.FETCH_USER_SUCCESS,
  User[]
>;

export type FetchUserFailed = ActionWithPayload<
  UserActionTypes.FETCH_USER_FAILED,
  Error
>;

export const fetchUserStart = withMatcher(() =>
  createAction(UserActionTypes.FETCH_USER_START)
);

export const fetchUserSuccess = withMatcher((userArray: User[]) =>
  createAction(UserActionTypes.FETCH_USER_SUCCESS, userArray)
);

export const fetchUserFailed = withMatcher((error: Error) =>
  createAction(UserActionTypes.FETCH_USER_FAILED, error)
);
