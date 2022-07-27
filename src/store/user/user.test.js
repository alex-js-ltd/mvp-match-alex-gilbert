import { fetchUserAsync, fetchUser } from './user.saga';

describe('on fetch user saga', () => {
  const generator = fetchUserAsync();

  it('should call fecthUser', () => {
    const api = {
      fetchUser: fetchUser,
    };
    const fetchUserFn = jest.spyOn(api, 'fetchUser');
    generator.next();
    expect(fetchUserFn).toHaveBeenCalled;
  });
});
