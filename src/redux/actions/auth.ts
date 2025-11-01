import { NavigateFunction } from "react-router-dom";
import { setError } from "./globalAction";
import { AppDispatch } from "../store";
import { login } from "../../api/auth";
import * as types from "../constants/authConstants";
import { setUser } from "./userAction";
interface IAuthUser {
  email: string;
  password: string;
}

interface IUser {
  id: number;
  full_name: string;
  email: string;
  avatar?: string;
  permissions?: string[];
}

interface ISignInResponse {
  message: string;
  accessToken: string;
  refreshToken?: string;
  expiresIn?: number;
  user?: IUser | null;
}
export const loginAction =
  (data: Pick<IAuthUser, "email" | "password">, navigate: NavigateFunction) =>
  async (dispatch: AppDispatch) => {
    localStorage.removeItem("profile");
    try {
      const { accessToken, refreshToken, expiresIn, user } = await login(data);

      await dispatch({ type: types.SIGN_IN_SUCCESS, payload: { accessToken } });

      localStorage.setItem(
        "profile",
        JSON.stringify({ accessToken, refreshToken, expiresIn })
      );

      await dispatch({
        type: types.SET_USER_INFO,
        payload: { userData: user },
      });

      navigate("/");
    } catch (error: any) {
      dispatch(
        setError(error?.response?.data?.message || "Đăng nhập thất bại")
      );
    }
  };
