import LabeledInput from "@/components/common/Forms/LabeledInput";
import Button from "@/components/common/UI/Button";
import Divider from "@/components/common/UI/Divider";
import AuthWrapper from "@/components/layout/AuthWrapper";
import OauthButtons from "@/features/authentication/components/OauthButtons";
import { useState } from "react";

type Props = {};

const Login = () => {
  const [name, setName] = useState<string>("");

  return (
    <AuthWrapper
      title="Login to your account"
      bottomText="New member ? "
      link="/signup"
      linkText="Sign Up"
    >
      <div className="w-full flex flex-col gap-8">
        <LabeledInput
          label="Email"
          id="email"
          name="email"
          type="email"
          classnames="md:w-[500px]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <LabeledInput
          label="Password"
          id="password"
          name="password"
          type="password"
          classnames="md:w-[500px]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <Button label="Log In" onClick={() => {}} />
        <Divider text="or" />
        <OauthButtons />
      </div>
    </AuthWrapper>
  );
};

export default Login;
