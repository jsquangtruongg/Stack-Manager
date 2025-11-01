import { API } from "../config";
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
export const login = async (
  data: Pick<IAuthUser, "email" | "password">
): Promise<ISignInResponse> => {
  const res = await API.post("/auth-service/v1/login", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res.data);
  const payload = res.data?.data ?? res.data;

  return {
    message: res.data?.message ?? payload?.message ?? "",
    accessToken: payload?.access_token ?? "",
    refreshToken: payload?.refresh_token ?? "",
    expiresIn: payload?.expires_in ?? 0,
    user: payload?.user ?? null,
  };
};
