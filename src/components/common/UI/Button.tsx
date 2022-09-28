import Spinner from "./Spinner";

type Props = {
  label: string;
  classnames?: string;
  spinnerClassnames?: string;
  type?: "button" | "submit" | "reset" | undefined;
  isLoading?: boolean;
  onClick?: () => void;
};

const Button = ({
  label,
  classnames,
  spinnerClassnames,
  type,
  onClick,
  isLoading,
}: Props) => {
  return (
    <button
      className={`flex justify-center gap-2 items-center rounded-xl py-2 text-[20px] bg-darkBlue hover:bg-blue-600 ${classnames}`}
      onClick={onClick}
      type={type}
      disabled={isLoading}
    >
      {isLoading ? <Spinner classnames={spinnerClassnames} /> : label}
    </button>
  );
};

export default Button;
