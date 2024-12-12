import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/authApi";
import userReducer from "./slices/authSlice";
import { UserState } from "@/types/userTypes";
import storage from "redux-persist/lib/storage"; 
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistReducer,
} from "redux-persist";
import { persistStore } from "redux-persist";


// --- Redux Persist configuration --- //
const persistConfig = {
  key: "root", // Key for localStorage
  storage: storage, // You can also explicitly mention 'localStorage' here
  whitelist: ["user"], // Only persist the 'user' slice
};


const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,

  user: userReducer,
});


// --- Apply persistence to the root reducer --- //
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(authApi.middleware),
});

// --- Create a persistor to be used in the app --- //
export const persistor = persistStore(store);

// --- Define the RootState type --- //
export type RootState = {
  user: UserState;
};
