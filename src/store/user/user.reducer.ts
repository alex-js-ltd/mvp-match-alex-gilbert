import { AnyAction } from 'redux';

import { User } from './user.types';

import {
  fetchUserStart,
  fetchUserSuccess,
  fetchUserFailed,
} from './user.action';

export type UserState = {
  readonly user: User[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const USER_INITIAL_STATE: UserState = {
  user: [],
  isLoading: false,
  error: null,
};

export const userReducer = (
  state = USER_INITIAL_STATE,
  action = {} as AnyAction
): UserState => {
  if (fetchUserStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchUserSuccess.match(action)) {
    return { ...state, user: action.payload, isLoading: false };
  }

  if (fetchUserFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
