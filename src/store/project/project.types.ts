export enum PROJECT_ACTION_TYPES {
  FETCH_PROJECT_START = 'project/FETCH_PROJECT_START',
  FETCH_PROJECT_SUCCESS = 'project/FETCH_PROJECT_SUCCESS',
  FETCH_PROJECT_FAILED = 'project/FETCH_PROJECT_FAILED',
  SELECT_PROJECT = 'project/SELECT_PROJECT',
}

export type Project = {
  projectId: string;
  userIds: any[];
  gatewayIds: any[];
  structure: string;
  industry: string;
  website: string;
  description: string;
  image: string;
  name: string;
};

export interface Data {
  code: string;
  data: Project[];
  error?: string;
}

export interface Res {
  data: Data;
}
