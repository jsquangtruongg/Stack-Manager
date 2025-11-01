import * as types from "../constants/authConstants";
import { AppDispatch } from "../store";
import { getUserAPI } from "../../api/user";
import { IUserData } from "../reducers/user";

export const setUser = () => async (dispatch: AppDispatch) => {
  try {
    const { userData } = await getUserAPI();
    dispatch({
      type: types.SET_USER_INFO,
      payload: { userData },
    });
  } catch (error) {
    localStorage.removeItem("profile");
  }
};

export const setUserInit =
  (userData: IUserData | string) => async (dispatch: AppDispatch) => {
    dispatch({
      type: types.SET_USER_INIT,
      payload: { userData },
    });
    
  };
