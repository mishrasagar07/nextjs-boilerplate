import { PostRequest } from "@/plugins/https";

interface ILoginData {
  username: string;
  password: string;
}
export const APILoginUser = (data: ILoginData) =>
  PostRequest("/auth/login", data);
