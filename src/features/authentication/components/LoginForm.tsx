import FormInput from "@/components/common/Forms/FormInput";
import Button from "@/components/common/UI/Button";
import Divider from "@/components/common/UI/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import OauthButtons from "./OauthButtons";

type Props = {};

const schema = z.object({
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

type LoginForm = {
  email: string;
  password: string;
};

const LoginForm = ({}: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const methods = useForm<LoginForm>({
    resolver: zodResolver(schema),
  });

  const onLogin: SubmitHandler<LoginForm> = async (data) => {
    setIsLoading(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (res?.ok) {
      toast.success("Signed In Successfully");
      router.push("/");
    }

    if (res?.error === "Invalid email or password") {
      toast.error("Email or Password incorrect");
    } else {
      toast.error("There was an error signing in");
    }

    setIsLoading(false);
  };

  return (
    <FormProvider {...methods}>
      <form
        className="w-full flex flex-col gap-8"
        onSubmit={methods.handleSubmit(onLogin)}
      >
        <FormInput id="email" name="email" label="Email" type={"email"} />
        <FormInput
          id="password"
          name="password"
          label="Password"
          type={"password"}
        />

        <Button label="Log In" isLoading={isLoading} />
        <Divider text="or" />
        <OauthButtons />
      </form>
    </FormProvider>
  );
};

export default LoginForm;
