import Button from "@/components/common/UI/Button";
import Divider from "@/components/common/UI/Divider";
import { useMutation } from "@tanstack/react-query";
import { SignUpForm } from "pages/signup";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { signUp } from "../services/signUp";
import OauthButtons from "./OauthButtons";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import FormInput from "@/components/common/Forms/FormInput";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { AxiosError } from "axios";

const schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .min(3, {
      message: "Name must be at least 3 characters",
    })
    .max(20, {
      message: "Name must be at most 20 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email({
      message: "Email is invalid",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 6 characters",
    })
    .max(30, {
      message: "Password must be at most 20 characters",
    }),
});

function SignUpForm() {
  const router = useRouter();

  const { mutate, isLoading, isError } = useMutation(signUp, {
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message);
      } else {
        toast.error("Error creating user");
      }
    },
    onSuccess: (data, variables) => {
      toast.success("User created successfully");
      signIn("credentials", {
        redires: true,
        callbackUrl: "/",
        email: variables.email,
        password: variables.password,
      });
      router.push("/");
    },
  });

  const methods = useForm<SignUpForm>({
    resolver: zodResolver(schema),
  });

  const onSignUp: SubmitHandler<SignUpForm> = async (data) => {
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col gap-8"
        onSubmit={methods.handleSubmit(onSignUp)}
      >
        <FormInput
          id="name"
          name="name"
          label="Name"
          classnames="md:w-[500px]"
        />
        <FormInput
          id="email"
          name="email"
          label="Email"
          type={"email"}
          classnames="md:w-[500px]"
        />
        <FormInput
          id="password"
          name="password"
          label="Password"
          type={"password"}
          classnames="md:w-[500px]"
        />

        <Button label="Sign Up" type="submit" isLoading={isLoading} />
        <Divider text="or" />
        <OauthButtons />
      </form>
    </FormProvider>
  );
}

export default SignUpForm;
