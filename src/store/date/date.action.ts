import { DATE_ACTION_TYPES } from './date.type';

import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

import { Moment } from 'moment';

interface Dates {
  startDate: Moment;
  endDate: Moment;
}

export type SetDates = ActionWithPayload<DATE_ACTION_TYPES.SET_DATES, Dates>;

export const setDates = withMatcher((dates: Dates) =>
  createAction(DATE_ACTION_TYPES.SET_DATES, dates)
);
