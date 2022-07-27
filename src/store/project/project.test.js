import { fetchProjectAsync, fetchProject } from './project.saga';

describe('on fetch project saga', () => {
  const generator = fetchProjectAsync();

  it('should call fecthProject', () => {
    const api = {
      fetchProject: fetchProject,
    };
    const fetchProjectFn = jest.spyOn(api, 'fetchProject');
    generator.next();
    expect(fetchProjectFn).toHaveBeenCalled;
  });
});
