import { all, call } from 'typed-redux-saga/macro';

import { userSaga } from './user/user.saga';
import { projectSaga } from './project/project.saga';
import { gateWaySaga } from './gateway/gateway.saga';
import { reportSaga } from './report/report.saga';

export function* rootSaga() {
  yield* all([
    call(userSaga),
    call(projectSaga),
    call(gateWaySaga),
    call(reportSaga),
  ]);
}
