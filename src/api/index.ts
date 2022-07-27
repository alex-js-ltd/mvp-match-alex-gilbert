import axios from 'axios';

export const api = {
  fetchUser() {
    return axios.get(`${process.env.REACT_APP_BASE_URL}/mock-api/api/users`);
  },
};
