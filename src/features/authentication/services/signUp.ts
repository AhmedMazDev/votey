import { instance } from "@/lib/axios";
import { SignUpForm } from "pages/signup";

export const signUp = async (data: SignUpForm) => {
  const response = await instance.post("/signup", data);
  return response.data;
};
