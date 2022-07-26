import { AnyAction } from 'redux';

import { Report } from './report.types';

import {
  postReportStart,
  postReportSuccess,
  postReportFailed,
  showReportChart,
} from './report.action';

export type ReportState = {
  readonly report: Report[];
  readonly isLoading: boolean;
  readonly error: Error | null;
  readonly selectedProjectId: string | null;
  readonly selectedGatewayId: string | null;
  readonly selectedProject: string;
  readonly selectedGateway: string;
  readonly showReport: boolean;
};

export const REPORT_INITIAL_STATE: ReportState = {
  report: [],
  isLoading: false,
  error: null,
  selectedProjectId: null,
  selectedGatewayId: null,
  selectedProject: 'Select project',
  selectedGateway: 'Select gateway',
  showReport: false,
};

export const reportReducer = (
  state = REPORT_INITIAL_STATE,
  action = {} as AnyAction
): ReportState => {
  if (postReportStart.match(action)) {
    return { ...state, isLoading: true };
  }

  if (postReportSuccess.match(action)) {
    return {
      ...state,
      report: action.payload.report,
      selectedProjectId: action.payload.projectId,
      selectedGatewayId: action.payload.gatewayId,
      selectedProject: action.payload.selectedProject
        ? action.payload?.selectedProject
        : state.selectedProject,
      selectedGateway: action.payload.selectedGateway
        ? action.payload.selectedGateway
        : state.selectedGateway,
      isLoading: false,
    };
  }

  if (postReportFailed.match(action)) {
    return { ...state, error: action.payload, isLoading: false };
  }

  if (showReportChart.match(action)) {
    return { ...state, showReport: !state.showReport };
  }

  return state;
};
