import AuthWrapper from "@/components/layout/AuthWrapper";

import LoginForm from "@/features/authentication/components/LoginForm";
import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

type Context = GetServerSidePropsContext;

export async function getServerSideProps(ctx: Context) {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

type Props = {};

const Login = () => {
  return (
    <AuthWrapper
      title="Login to your account"
      bottomText="New member ? "
      link="/signup"
      linkText="Sign Up"
    >
      <LoginForm />
    </AuthWrapper>
  );
};

export default Login;
