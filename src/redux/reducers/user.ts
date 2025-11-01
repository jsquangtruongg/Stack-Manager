import type { PayloadAction } from "@reduxjs/toolkit";
import * as types from "../constants/authConstants";

export interface IUserData {
  id: number;
  full_name: string;
  email: string;
  avatar_url?: string | null;
  created_at?: string | null;
  permissions?: string[];
}

type IUser = {
  userData: IUserData | null;
};

const initialState: IUser = {
  userData: null,
};

const userReducer = (
  state = initialState,
  action: PayloadAction<Partial<IUserData> & { userData?: IUserData }>
) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_USER_INIT:
      const c = {
        ...state,
        userData: payload.userData,
      };
      console.log(c);
      return c;
    case types.SET_USER_INFO:
      return {
        ...state,
        userData: payload.userData ?? null,
      };

    default:
      return state;
  }
};

export default userReducer;
