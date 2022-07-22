import { REPORT_ACTION_TYPES, Report } from './report.types';

import {
  createAction,
  Action,
  withMatcher,
  ActionWithPayload,
} from '../../utils/reducer/reducer.utils';

export type PostReportStart = ActionWithPayload<
  REPORT_ACTION_TYPES.POST_REPORT_START,
  { from: string; to: string; projectId: string; gatewayId: string }
>;

export type PostReportSuccess = ActionWithPayload<
  REPORT_ACTION_TYPES.POST_REPORT_SUCCESS,
  { report: Report[] }
>;

export type PostReportFailed = ActionWithPayload<
  REPORT_ACTION_TYPES.POST_REPORT_FAILED,
  Error
>;

export type ShowReportChart = Action<REPORT_ACTION_TYPES.SHOW_REPORT_CHART>;

export const postReportStart = withMatcher(() =>
  createAction(REPORT_ACTION_TYPES.POST_REPORT_START)
);

interface ReportSuccessPayload {
  report: Report[];
  projectId: string | null;
  gatewayId: string | null;
}

export const postReportSuccess = withMatcher(
  (reportObj: ReportSuccessPayload) =>
    createAction(REPORT_ACTION_TYPES.POST_REPORT_SUCCESS, reportObj)
);

export const postReportFailed = withMatcher((error: Error) =>
  createAction(REPORT_ACTION_TYPES.POST_REPORT_FAILED, error)
);

export const showReportChart = withMatcher(() =>
  createAction(REPORT_ACTION_TYPES.SHOW_REPORT_CHART)
);
