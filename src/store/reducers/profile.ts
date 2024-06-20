import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createTypedSelector } from "store/utils";
import {
  changeUserInfo,
  getProfile,
  getProfileDetails,
  refreshToken,
  validateToken,
} from "store/async-actions/profile";
import {
  GeoInfo,
  ProfileItem,
  ValidateUserTokenResponceData,
} from "api/models/profile";
import { BaseResponse } from "api/models/base";
import axios from "axios";

const initialState: {
  profileResp: ProfileItem | undefined;
  isFetching: boolean;
  isMemberView: boolean;
  userId: number;
  userName: string;
  countryCode: string;
  countryName: string;
  tokenValidationResp: ValidateUserTokenResponceData | undefined;
  profileDetails: ProfileItem | undefined;
  refreshTokenResp: ValidateUserTokenResponceData | undefined;
  isEditing: boolean;
} = {
  tokenValidationResp: undefined,
  profileResp: undefined,
  isFetching: false,
  isMemberView: false,
  userId: 0,
  userName: "",
  countryCode: "",
  countryName: "",
  profileDetails: undefined,
  refreshTokenResp: undefined,
  isEditing: false,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setIsMemberView: (state, action: PayloadAction<boolean>) => {
      state.isMemberView = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
  },
  extraReducers: {
    [getProfile.pending.type]: (state) => {
      state.isFetching = true;
    },
    [getProfile.fulfilled.type]: (
      state,
      action: PayloadAction<BaseResponse<ProfileItem>>
    ) => {
      getGeoInfoJson();
      if (action.payload.responseInfo.httpCode === 200) {
        state.profileResp = action.payload.data;
        state.userId = action.payload.data.userId;
        state.userName = action.payload.data.userName;
        localStorage.setItem("isLoggedIn", "yes");
      } else {
        localStorage.removeItem("@jwtToken");
        localStorage.setItem("isLoggedIn", "no");
      }
      state.isFetching = false;
    },
    [getProfile.rejected.type]: (state) => {
      localStorage.setItem("isLoggedIn", "no");
      state.isFetching = false;
    },

    //Refresh Token
    [refreshToken.pending.type]: (state) => {
      state.isFetching = true;
    },
    [refreshToken.fulfilled.type]: (
      state,
      action: PayloadAction<BaseResponse<ValidateUserTokenResponceData>>
    ) => {
      state.refreshTokenResp = action.payload.data;
      localStorage.setItem("@jwtToken", state.refreshTokenResp.accessToken);
      localStorage.setItem("isLoggedIn", "yes");
      state.isFetching = false;
    },
    [refreshToken.rejected.type]: (state, action: PayloadAction<GeoInfo>) => {
      localStorage.setItem("isLoggedIn", "no");
      state.isFetching = false;
    },

    //Validate User Token
    [validateToken.pending.type]: (state) => {
      state.isFetching = true;
    },
    [validateToken.fulfilled.type]: (
      state,
      action: PayloadAction<ValidateUserTokenResponceData>
    ) => {
      state.tokenValidationResp = action.payload;
      state.isFetching = false;
    },
    [validateToken.rejected.type]: (state) => {
      localStorage.setItem("isLoggedIn", "no");
      state.isFetching = false;
    },

    //Get Profile Details
    [getProfileDetails.pending.type]: (state) => {},
    [getProfileDetails.fulfilled.type]: (
      state,
      action: PayloadAction<ProfileItem>
    ) => {
      state.profileDetails = action.payload;
    },
    [getProfileDetails.rejected.type]: (state) => {},

    //Change User Info
    [changeUserInfo.pending.type]: (state) => {
      // state.isFetching = true;
      state.isEditing = true;
    },
    [changeUserInfo.fulfilled.type]: (
      state,
      action: PayloadAction<ValidateUserTokenResponceData>
    ) => {
      // state.tokenValidationResp = action.payload;
      // state.isFetching = false;
      state.isEditing = false;
    },
    [changeUserInfo.rejected.type]: (state) => {
      // localStorage.setItem("isLoggedIn", "no");
      // state.isFetching = false;
      state.isEditing = false;
    },
  },
});

export const { setIsMemberView, setUserId } = profileSlice.actions;

const getGeoInfoJson = () => {
  axios
    .get("https://ipapi.co/json/")
    .then((response) => {
      let data = response.data;
      localStorage.setItem("countryCode", data.country_code);
    })
    .catch((error) => {});
};

export const getProfileIsEditingSelector = createTypedSelector(
  (state) => state.profile.isEditing
);

export const countryCodeSelector = createTypedSelector(
  (state) => state.profile.countryCode
);

export const profileRespSelector = createTypedSelector(
  (state) => state.profile.profileResp
);

export const profileDetailsSelector = createTypedSelector(
  (state) => state.profile.profileDetails
);

export const profileLoadingSelector = createTypedSelector(
  (state) => state.profile.isFetching
);

export const isMemberViewSelector = createTypedSelector(
  (state) => state.profile.isMemberView
);

export const profileUserIdSelector = createTypedSelector(
  (state) => state.profile.userId
);

export const getProfileUsernameSelector = createTypedSelector(
  (state) => state.profile.userName
);

export default profileSlice.reducer;
