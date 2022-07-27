import { fetchGateWayAsync, fetchGateWay } from './gateway.saga';

describe('on fetch gateway saga', () => {
  const generator = fetchGateWayAsync();

  it('should call fecthGateWay', () => {
    const api = {
      fetchGateWay: fetchGateWay,
    };
    const fetchGateWayFn = jest.spyOn(api, 'fetchGateWay');
    generator.next();
    expect(fetchGateWayFn).toHaveBeenCalled;
  });
});
