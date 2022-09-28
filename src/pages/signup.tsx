import AuthWrapper from "@/components/layout/AuthWrapper";
import SignUpForm from "@/features/authentication/components/SignUpForm";

import { GetServerSidePropsContext } from "next";
import { getSession } from "next-auth/react";

type Context = GetServerSidePropsContext;

export async function getServerSideProps(ctx: Context) {
  const session = await getSession();

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
      data: null,
    },
  };
}

export type SignUpForm = {
  name: string;
  email: string;
  password: string;
};

const Signup = () => {
  return (
    <AuthWrapper
      title="Create free account"
      bottomText="Already have an account ? "
      link="/login"
      linkText="Login"
    >
      <SignUpForm />
    </AuthWrapper>
  );
};

export default Signup;
