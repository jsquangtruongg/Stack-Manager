import type { PayloadAction } from "@reduxjs/toolkit";
import * as types from "../constants/authConstants";
interface IUser {
  id: number;
  full_name: string;
  email: string;
  avatar?: string;
  permissions?: string[];
}
type IAuthState = {
  accessToken: string;
  user: IUser | null;
};

const initialToken =
  JSON.parse(localStorage.getItem("profile") ?? "{}")?.accessToken ?? "";

const initialState: IAuthState = {
  accessToken: initialToken,
  user: null,
};

const authReducer = (
  state = initialState,
  action: PayloadAction<Partial<IAuthState> & { userData?: IUser }>
) => {
  const { type, payload } = action;

  switch (type) {
    case types.SIGN_IN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        accessToken: payload?.accessToken || "",
      };

    case types.SET_USER_INFO:
      return {
        ...state,
        user: payload?.userData ?? null,
      };

    default:
      return state;
  }
};

export default authReducer;
