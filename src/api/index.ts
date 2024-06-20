import axios, { AxiosError, AxiosInstance } from "axios";

import { BASE_AUTH, BASE_URL } from "./config";
import { v4 as uuidv4 } from "uuid";
import profileApi, { ProfileApi } from "./routes/profile";

type Token = string | null;

class ClientApi {
  private token: Token =
    "eyJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIxMzI0IiwiUHJvZmlsZUlEIjoiOTk4YjljODYtZmM0OC00MzI0LThkZDUtZDMwNDM1ZWQ3MjA1IiwidXNlcklkIjoxMzI0LCJpYXQiOjE2ODI5NDM5MjgsImV4cCI6MTY4Mzk0MzkyOH0.Kk3zGi799695-e01VVKYSYBG_GxjPAJSs0JPz2TtdDS3e_1tfRdkJtdIszwD1Uc6KnmV_1fDl09fqGNh1snDO0ovO9CVJpRmt3L17EJ4exwa0O6O7GN_FeEIEUm5fHWdyaGStUHg1oX-MmVQ_s7HIF9ImwU7PlIm2YrujC3W6XCHd8jSE00znAdH6VnC0YayiXa0cziv7HrkwbFG8ZOjEfuSmU8dxNrZKn-Ix882ZspHPLEBUipcFHAasws68il0gjdqRXicLlga0BGEhnVhK3VWBEJoD076eJVcl6MxCquVCySUOVY8hnYKocoxnCLcHYnkF1R-wheEMRz-dK8Tmw";
  private instance: AxiosInstance;

  public profile: ProfileApi;

  constructor(url: string, private readonly _sessionId: string) {
    this.instance = axios.create({
      baseURL: `${url}`,
      timeout: 15000,
    });

    // Add an interceptor to all requests except for ones to /no-intercept endpoint
    this.instance.interceptors.request.use(
      (config) => {
        if (localStorage.getItem("@jwtToken") !== null) {
          config.headers["Authorization"] = `Bearer ${localStorage.getItem(
            "@jwtToken"
          )}`;
        }
        config.headers["Basic-Auth"] = BASE_AUTH;
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.profile = profileApi(this.instance);

    this.instance.interceptors.response.use(
      (res) => res,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          await this.updateToken();
        }
        throw error;
      }
    );
  }

  get sessionId() {
    return this._sessionId;
  }

  public setToken(token: Token): void {
    this.token = token;
  }

  private async updateToken() {
    if (localStorage.getItem("@jwtToken") !== null) {
      await (async () => {
        try {
          const { data } = await this.profile.refreshToken();
          localStorage.setItem("@jwtToken", data.data.accessToken);
          // this.setToken(data.data.authToken)
          if (data.responseInfo.httpCode === 300) {
            localStorage.setItem("isLoggedIn", "no");
            localStorage.removeItem("@jwtToken");
            //   this.hivePage.getHiveDetails({
            //     communitySubDomain: localStorage.getItem("subDomain")!,
            //   });
            //   this.hivePage.getHiveComponents({
            //     communityDomain: localStorage.getItem("subDomain"),
            //   });
          }
        } catch (error) {
          localStorage.setItem("isLoggedIn", "no");
          localStorage.removeItem("@jwtToken");
          // localStorage.setItem("isLoggedIn", "no");
          // this.hivePage.getHiveDetails({
          //   communitySubDomain: localStorage.getItem("subDomain")!,
          // });
          // this.hivePage.getHiveComponents({
          //   communityDomain: localStorage.getItem("subDomain"),
          // });
        }
        window.location.reload();
      })();
      // const { data } = await this.profile.getProfile();
    }
  }
}

export default new ClientApi(BASE_URL as string, uuidv4());
