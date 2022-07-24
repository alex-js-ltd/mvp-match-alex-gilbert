import { AnyAction } from 'redux';

import { setDates } from './date.action';

import { Moment } from 'moment';

export type DateState = {
  readonly start: Moment | null;
  readonly end: Moment | null;
};

export const DATE_INITIAL_STATE: DateState = {
  start: null,
  end: null,
};

export const dateReducer = (
  state = DATE_INITIAL_STATE,
  action = {} as AnyAction
): DateState => {
  if (setDates.match(action)) {
    return {
      ...state,
      start: action.payload.startDate,
      end: action.payload.endDate,
    };
  }

  return state;
};
