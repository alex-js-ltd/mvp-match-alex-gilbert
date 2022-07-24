import { takeLatest, all, call, put } from 'typed-redux-saga/macro';

import axios from 'axios';

import {
  postReportSuccess,
  postReportFailed,
  PostReportStart,
} from './report.action';

import { REPORT_ACTION_TYPES, Res } from './report.types';

export const postReport = async (
  from: string,
  to: string,
  projectId?: string,
  gatewayId?: string
): Promise<any> => {
  if (!from || !to) return;

  return await axios.post(
    `${process.env.REACT_APP_BASE_URL}/mock-api/api/report`,
    {
      from: from,
      to: to,
      projectId: projectId,
      gatewayId: gatewayId,
    }
  );
};

export function* postReportAsync({
  payload: { from, to, projectId, gatewayId, selectedProject, selectedGateway },
}: PostReportStart) {
  try {
    const { data } = yield* call(postReport, from, to, projectId, gatewayId);

    yield* put(
      postReportSuccess({
        report: data?.data,
        projectId: projectId,
        gatewayId: gatewayId,
        selectedProject: selectedProject,
        selectedGateway: selectedGateway,
      })
    );
  } catch (error) {
    yield* put(postReportFailed(error as Error));
  }
}

export function* onPostReport() {
  yield* takeLatest(REPORT_ACTION_TYPES.POST_REPORT_START, postReportAsync);
}

export function* reportSaga() {
  yield* all([call(onPostReport)]);
}
