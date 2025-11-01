import { IUserData } from "../../redux/reducers/user";
import { API } from "../config";
export type IResponse = {
  userData: IUserData;
  message: string;
  success: boolean;
};
export const getUserAPI = async (): Promise<IResponse> => {
  const res = await API.get("/user-service/v1/me", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res.data);
  return {
    userData: res.data?.data ?? res.data?.user ?? res.data,
    message: res.data?.message ?? "success",
    success: Boolean(res.data?.success ?? true),
  };
};
