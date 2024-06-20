import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";
import { ValidateUserTokenRequestBody } from "api/models/profile";
import { toastError, toastSuccess } from "hooks/useToastify";

export const getProfile = createAsyncThunk(
  "profile/getProfile",
  async (body: null, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.profile.getProfile();
      // dispatch(getGeoInfo(null));
      return data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const refreshToken = createAsyncThunk(
  "profile/refreshToken",
  async (body: null, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.profile.refreshToken();
      dispatch(getProfile(null));
      window.location.reload();
      if (data.responseInfo.httpCode === 200) {
        toastSuccess("refreshed with 200");
        // dispatch(DispatchInitializeNoAuthApp(null));
        //DO action after refresh token
      }
      return data;
    } catch (error) {
      window.location.reload();
      return rejectWithValue("Something went wrong");
    }
  }
);

export const getProfileDetails = createAsyncThunk(
  "profile/getProfileDetails",
  async (
    body: {
      userId: number;
    },
    { rejectWithValue }
  ) => {
    try {
      const { data } = await api.profile.getProfileDetails(body);
      return data.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);

export const changeUserInfo = createAsyncThunk(
  "profile/changeUserInfo",
  async (body: { userName: string }, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.profile.changeUserInfo(body);
      // setTimeout(() => {
      dispatch(getProfile(null));
      // }, 1000);
      if (data.responseInfo.httpCode !== 200) {
        toastError(data.responseInfo.message);
      }
      return data.data;
    } catch (error) {}
  }
);

export const validateToken = createAsyncThunk(
  "profile/validateToken",
  async (body: ValidateUserTokenRequestBody, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await api.profile.validateUserUsingToken(body);
      const { accessToken } = data?.data || {};
      localStorage.setItem("@jwtToken", accessToken);
      dispatch(getProfile(null));
      return data.data;
    } catch (error) {
      return rejectWithValue("Something went wrong");
    }
  }
);
