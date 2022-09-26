import OauthButton from "@/components/common/UI/OauthButton";
import { BsGoogle, BsFacebook } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";

type Props = {};

const OauthButtons = ({}: Props) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <OauthButton>
        <BsGoogle size="20" />
      </OauthButton>
      <OauthButton>
        <BsFacebook size="20" />
      </OauthButton>
      <OauthButton>
        <FaDiscord size="20" />
      </OauthButton>
    </div>
  );
};

export default OauthButtons;
