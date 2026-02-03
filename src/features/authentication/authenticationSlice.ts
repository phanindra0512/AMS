import GlobalStorage from "../../storage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = { userLogged: false };
const KEY = "authentication";

const authenticationSlice = createSlice({
  name: KEY,
  initialState,
  reducers: {
    //TODO: change PayloadAction type
    setUserLogged(state) {
      return (state = {
        ...state,
        userLogged: true,
      });
    },
    setUserLogout(state) {
      GlobalStorage.delete("authToken");
      return (state = {
        ...state,
        userLogged: false,
      });
    },
  },
});

export const { setUserLogged, setUserLogout } = authenticationSlice.actions;

export default authenticationSlice.reducer;
