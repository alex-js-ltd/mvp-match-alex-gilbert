export enum REPORT_ACTION_TYPES {
  POST_REPORT_START = 'report/POST_REPORT_START',
  POST_REPORT_SUCCESS = 'report/POST_REPORT_SUCCESS',
  POST_REPORT_FAILED = 'report/POST_REPORT_FAILED',
  SHOW_REPORT_CHART = 'report/SHOW_REPORT_CHART',
}

export type Report = {
  paymentId: string;
  gatewayId: string;
  amount: number;
  projectId: string;
  userIds: string[];
  modified: Date;
  created: string;
};

export interface Data {
  code: string;
  data: Report[];
  error?: string;
}

export interface Res {
  data: Data;
}
