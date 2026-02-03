import { configureStore, isImmutableDefault } from "@reduxjs/toolkit";
import rootReducer from "./rootReducers";
import apiService from "../api";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      isImmutableDefault: false,
    }).concat(apiService.middleware),
});

export default store;
