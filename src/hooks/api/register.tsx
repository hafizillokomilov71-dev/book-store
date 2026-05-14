import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import type { IForm } from "../../pages/sign-up";
export const useRegister = () => {
  const { data, isPending, isSuccess, isError, mutateAsync } = useMutation({
    mutationKey: ["register"],
    mutationFn: (formData: IForm) => onRegister(formData),
  });
  const onRegister = async (form: IForm) => {
    return await axios.post(
      "http://localhost:3001/api/auth/register",
      {
        fullName: form.fullname,
        email: form.email,
        password: form.password,
        confirmPassword: form.confirm_password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  };
  return { data, isPending, isSuccess, isError, mutateAsync };
};
