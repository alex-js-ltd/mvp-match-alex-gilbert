import { expectSaga } from 'redux-saga-test-plan';

import { fetchUserAsync } from './user.saga';
import { USER_ACTION_TYPES } from './user.types';

it('on fetch user saga', () => {
  return (
    expectSaga(fetchUserAsync)
      // Assert that the `put` will eventually happen.
      .put({
        type: USER_ACTION_TYPES.FETCH_USER_SUCCESS,
        payload: [
          {
            email: 'john.doe@email.com',
            firstName: 'John',
            lastName: 'Doe',
            userId: 'rahej',
          },
        ],
      })

      // Dispatch any actions that the saga will `take`.
      .dispatch({ type: USER_ACTION_TYPES.FETCH_USER_START })

      // Start the test. Returns a Promise.
      .run()
  );
});
