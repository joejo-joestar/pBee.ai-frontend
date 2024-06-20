import { AxiosInstance } from "axios";

interface Config {
  request: AxiosInstance;
  url: string;
}

class BaseApi {
  protected url;
  protected request;
  constructor(config: Config) {
    this.url = config.url;
    this.request = config.request;
  }
}

export default BaseApi;
