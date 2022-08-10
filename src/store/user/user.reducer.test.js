import { UserActionTypes } from './user.types';
import { userReducer, USER_INITIAL_STATE } from './user.reducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    expect(userReducer(undefined, {})).toEqual(USER_INITIAL_STATE);
  });

  it('should set user to payload on FETCH_USER_SUCCESS', () => {
    const mockUser = [
      {
        userId: 'qwert',
        firstName: 'hello',
        lastName: 'name',
        email: 'qwert.doe@email.com',
      },
    ];

    expect(
      userReducer(USER_INITIAL_STATE, {
        type: UserActionTypes.FETCH_USER_SUCCESS,
        payload: mockUser,
      }).user
    ).toEqual(mockUser);
  });
});
