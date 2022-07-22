export enum GATEWAY_ACTION_TYPES {
  FETCH_GATEWAY_START = 'gateway/FETCH_GATEWAY_START',
  FETCH_GATEWAY_SUCCESS = 'gateway/FETCH_GATEWAY_SUCCESS',
  FETCH_GATEWAY_FAILED = 'gateway/FETCH_GATEWAY_FAILED',
}

export type GateWay = {
  gatewayId: string;
  userIds: string[];
  name: string;
  type: string;
  apiKey: string;
  secondaryApiKey: string;
  description: string;
};

export interface Data {
  code: string;
  data: GateWay[];
  error?: string;
}

export interface Res {
  data: Data;
}
