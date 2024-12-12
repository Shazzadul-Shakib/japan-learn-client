import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import userReducer from "./slices/authSlice";
import { UserState } from "@/types/userTypes";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,

  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// Define the RootState type
export type RootState = {
  user: UserState;
};
