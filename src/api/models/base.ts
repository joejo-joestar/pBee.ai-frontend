export interface BaseResponse<T = any> {
  data: T;
  statusCode: string;
  responseInfo: ResponseInfo;
}

export interface ResponseInfo {
  httpCode: number;
  message: string;
  description: string;
}
