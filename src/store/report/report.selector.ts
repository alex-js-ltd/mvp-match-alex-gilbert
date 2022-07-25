import { createSelector } from 'reselect';

import { ReportState } from './report.reducer';
import { RootState } from '../store';

const selectReportReducer = (state: RootState): ReportState => state.report;

export const selectProject = createSelector(
  [selectReportReducer],
  (report) => report.selectedProject
);

export const selectProjectId = createSelector(
  [selectReportReducer],
  (report) => report.selectedProjectId
);

export const selectGateway = createSelector(
  [selectReportReducer],
  (report) => report.selectedGateway
);

export const selectGatewayId = createSelector(
  [selectReportReducer],
  (report) => report.selectedGatewayId
);
