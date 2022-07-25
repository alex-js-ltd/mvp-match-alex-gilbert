import { createSelector } from 'reselect';

import { DateState } from './date.reducer';
import { RootState } from '../store';

const selectDateReducer = (state: RootState): DateState => state.date;

export const selectStartDate = createSelector(
  [selectDateReducer],
  (date) => date.start
);

export const selectEndDate = createSelector(
  [selectDateReducer],
  (date) => date.end
);
