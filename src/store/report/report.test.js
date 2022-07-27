import { takeLatest } from 'redux-saga/effects';

import { REPORT_ACTION_TYPES } from './report.types';
import { onPostReport, postReportAsync } from './report.saga';

describe('on POST report saga', () => {
  it('should trigger on POST_REPORT_START', () => {
    const generator = onPostReport();

    expect(generator.next().value).toEqual(
      takeLatest(REPORT_ACTION_TYPES.POST_REPORT_START, postReportAsync)
    );
  });
});
