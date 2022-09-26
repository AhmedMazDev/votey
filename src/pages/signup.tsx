import LabeledInput from "@/components/common/Forms/LabeledInput";
import Button from "@/components/common/UI/Button";
import Divider from "@/components/common/UI/Divider";
import AuthWrapper from "@/components/layout/AuthWrapper";
import OauthButtons from "@/features/authentication/components/OauthButtons";
import { useState } from "react";

type Props = {};

const Signup = () => {
  const [name, setName] = useState<string>("");

  return (
    <AuthWrapper
      title="Create free account"
      bottomText="Already have an account ? "
      link="/login"
      linkText="Login"
    >
      <div className="w-full flex flex-col gap-8">
        <LabeledInput
          label="Name"
          id="name"
          name="name"
          type="text"
          classnames="md:w-[500px]"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
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
        <Button label="Sign Up" onClick={() => {}} />
        <Divider text="or" />
        <OauthButtons />
      </div>
    </AuthWrapper>
  );
};

export default Signup;
