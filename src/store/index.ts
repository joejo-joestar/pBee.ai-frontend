import { configureStore } from "@reduxjs/toolkit";
import profile from "./reducers/profile";

export const store = configureStore({
  reducer: { profile },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.REACT_APP_CUSTOM_NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
