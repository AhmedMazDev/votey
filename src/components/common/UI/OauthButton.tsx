import { ReactNode } from "react";

type Props = {
  onClick?: () => void;
  children: ReactNode;
};

const OauthButton = ({ children, onClick }: Props) => {
  return (
    <div
      className="rounded-lg flex items-center justify-center py-3 cursor-pointer w-full bg-gray-500 hover:bg-gray-700"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default OauthButton;
