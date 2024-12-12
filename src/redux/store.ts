import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});
