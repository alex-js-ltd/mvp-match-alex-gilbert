import { combineReducers } from 'redux';

import { userReducer } from './user/user.reducer';
import { projectReducer } from './project/project.reducer';
import { gateWayReducer } from './gateway/gateway.reducer';
import { reportReducer } from './report/report.reducer';
import { dateReducer } from './date/date.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  project: projectReducer,
  gateway: gateWayReducer,
  report: reportReducer,
  date: dateReducer,
});
