import { AnyAction } from 'redux';

import { setDates } from './date.action';

import { Moment } from 'moment';
import moment from 'moment';

export type DateState = {
  readonly start: string | null;
  readonly end: string | null;
};

export const DATE_INITIAL_STATE: DateState = {
  start: '2021-01-01',
  end: '2021-12-31',
};

const formatDate = (date: Moment) => {
  return moment(date).format('YYYY-MM-DD');
};

export const dateReducer = (
  state = DATE_INITIAL_STATE,
  action = {} as AnyAction
): DateState => {
  if (setDates.match(action)) {
    return {
      ...state,
      start: formatDate(action.payload.startDate),
      end: formatDate(action.payload.endDate),
    };
  }

  return state;
};
