import { REPORT_ACTION_TYPES } from './report.types';
import { reportReducer, REPORT_INITIAL_STATE } from './report.reducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(reportReducer(undefined, {})).toEqual(REPORT_INITIAL_STATE);
  });

  it('should set report to payload on POST_REPORT_SUCCESS', () => {
    const mockData = [
      {
        paymentId: '6149cf56625a7464b7ec345a',
        amount: 327.72,
        projectId: 'bgYhx',
        gatewayId: 'GzFF8',
        userIds: ['rahej'],
        modified: '2021-04-17',
        created: '2021-04-21',
      },
    ];

    expect(
      reportReducer(REPORT_INITIAL_STATE, {
        type: REPORT_ACTION_TYPES.POST_REPORT_SUCCESS,
        payload: { report: mockData },
      }).report
    ).toEqual(mockData);
  });
});
