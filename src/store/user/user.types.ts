export enum UserActionTypes {
  FETCH_USER_START = 'user/FETCH_USER_START',
  FETCH_USER_SUCCESS = 'user/FETCH_USER_SUCCESS',
  FETCH_USER_FAILED = 'user/FETCH_USER_FAILED',
}

export type User = {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
};

export interface Data {
  code: string;
  data: User[];
  error?: string;
}

export interface Res {
  data: Data;
}
