import { AnyAction } from 'redux';

import { Project } from './project.types';

import {
  fetchProjectStart,
  fetchProjectSuccess,
  fetchProjectFailed,
} from './project.action';

export type ProjectState = {
  readonly project: Project[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const PROJECT_INITIAL_STATE: ProjectState = {
  project: [],
  isLoading: false,
  error: null,
};

export const projectReducer = (
  state = PROJECT_INITIAL_STATE,
  action = {} as AnyAction
): ProjectState => {
  if (fetchProjectStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (fetchProjectSuccess.match(action)) {
    return {
      ...state,
      project: action.payload,
      isLoading: false,
    };
  }

  if (fetchProjectFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  return state;
};
