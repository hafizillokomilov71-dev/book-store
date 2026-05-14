import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { IFormLogin } from "../../pages/sign-in";

export const useLogin = () => {
  const onLogin = async (form: IFormLogin) => {
    return await axios.post(
      "http://localhost:3001/api/auth/login",
      {
        email: form.email,
        password: form.password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  };

  const { data, isPending, isSuccess, isError, mutateAsync } = useMutation({
    mutationKey: ["login"],
    mutationFn: (formData: IFormLogin) => onLogin(formData),
  });

  return { data, isPending, isSuccess, isError, mutateAsync };
};
