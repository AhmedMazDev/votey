import OauthButton from "@/components/common/UI/OauthButton";
import { signIn } from "next-auth/react";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

const OauthButtons = () => {
  return (
    <div className="w-full flex items-center justify-between gap-6">
      <OauthButton
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        <BsGoogle size="20" />
      </OauthButton>
      {/* <OauthButton
        onClick={() => {
          signIn("facebook", { callbackUrl: "/" });
        }}
      >
        <BsFacebook size="20" />
      </OauthButton> */}
      <OauthButton
        onClick={() => {
          signIn("discord", { callbackUrl: "/" });
        }}
      >
        <FaDiscord size="20" />
      </OauthButton>
    </div>
  );
};

export default OauthButtons;
