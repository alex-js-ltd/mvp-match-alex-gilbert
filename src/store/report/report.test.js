import { postReportAsync, postReport } from './report.saga';

describe('on post report saga', () => {
  const from = '2021-01-01';
  const to = '2021-12-31';
  const projectId = null;
  const gatewayId = null;
  const selectedProject = 'All projects';
  const selectedGateway = 'All gateways';

  const mockAction = {
    payload: {
      from: from,
      to: to,
      projectId: projectId,
      gatewayId: gatewayId,
      selectedProject: selectedProject,
      selectedGateway: selectedGateway,
    },
  };

  const generator = postReportAsync(mockAction);

  it('should call postReport', () => {
    const api = {
      postReport: postReport,
    };
    const postReportFn = jest.spyOn(api, 'postReport');
    generator.next();
    expect(postReportFn).toHaveBeenCalled;
  });
});
