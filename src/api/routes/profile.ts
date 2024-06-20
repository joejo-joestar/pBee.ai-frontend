import BaseApi from "api/base";
import {
  GeoInfo,
  ProfileModel,
  ValidateUserTokenRequestBody,
  ValidateUserTokenResponceData,
} from "api/models/profile";
import { AxiosInstance, AxiosPromise } from "axios";
import { BaseResponse } from "../models/base";

export class ProfileApi extends BaseApi {
  validateUserUsingToken(
    data: ValidateUserTokenRequestBody
  ): AxiosPromise<BaseResponse<ValidateUserTokenResponceData>> {
    return this.request({
      url: `user/Auth/signup/check`,
      method: "POST",
      data,
    });
  }

  getProfile(): AxiosPromise<BaseResponse<ProfileModel>> {
    return this.request({
      url: `/user/Profile/get/userName`,
      method: "POST",
    });
  }

  refreshToken(): AxiosPromise<BaseResponse<ValidateUserTokenResponceData>> {
    return this.request({
      url: `/user/Auth/Refreshtoken`,
      method: "POST",
    });
  }

  getProfileDetails(data: {
    userId: number;
  }): AxiosPromise<BaseResponse<ProfileModel>> {
    return this.request({
      url: `/user/Profile/details/v2`,
      method: "POST",
      data,
    });
  }

  changeUserInfo(data: {
    userName: string;
  }): AxiosPromise<BaseResponse<boolean>> {
    return this.request({
      url: `/user/Profile/ChangeUserName`,
      method: "POST",
      data,
    });
  }

  getGeoInfo(): AxiosPromise<BaseResponse<GeoInfo>> {
    return this.request({
      url: "https://ipapi.co/json/",
      method: "GET",
    });
  }
}

export default function profileApi(request: AxiosInstance) {
  return new ProfileApi({
    request,
    url: `/`,
  });
}
