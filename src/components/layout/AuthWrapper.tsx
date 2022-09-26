import Link from "next/link";
import { ReactNode } from "react";
import { FiArrowLeft } from "react-icons/fi";

type Props = {
  title: string;
  bottomText: string;
  link: string;
  linkText: string;
  children: ReactNode;
};

const AuthWrapper = ({
  title,
  children,
  bottomText,
  link,
  linkText,
}: Props) => {
  return (
    <div className="h-screen flex flex-col mx-auto container">
      <Link href="/">
        <div className="flex items-center my-4 text-xl font-bold gap-2 cursor-pointer mx-3">
          <FiArrowLeft />
          <a>
            Back <span className="text-darkBlue">Home</span>
          </a>
        </div>
      </Link>
      <div className=" w-screen h-full md:container  flex flex-col md:items-center justify-center  mx-auto gap-8 ">
        <h1 className="text-[36px] font-bold text-center">{title}</h1>
        <div className="flex felx-col bg-lightBg px-10 py-4 border-t-8 border-t-darkBlue rounded-md">
          {children}
        </div>
        <div className="text-[20px] text-center font-medium ">
          {bottomText}
          <Link href={link}>
            <a className="text-darkBlue">{linkText}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthWrapper;
