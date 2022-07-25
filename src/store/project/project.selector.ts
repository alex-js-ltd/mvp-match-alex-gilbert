import { createSelector } from 'reselect';

import { ProjectState } from './project.reducer';
import { RootState } from '../store';

const selectProjectReducer = (state: RootState): ProjectState => state.project;

export const selectProjectArr = createSelector(
  [selectProjectReducer],
  (project) => project.project
);
