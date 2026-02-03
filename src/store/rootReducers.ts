import apiService from "../api";

import { combineReducers } from "@reduxjs/toolkit";
import authenticationReducer from "../features/authentication/authenticationSlice";

const rootReducer = combineReducers({
  authentication: authenticationReducer,
  [apiService.reducerPath]:apiService.reducer
});

export default rootReducer;
