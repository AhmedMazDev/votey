type Props = {
  label: string;
  classnames?: string;
  onClick: () => void;
};

const Button = ({ label, classnames, onClick }: Props) => {
  return (
    <button
      className={`rounded-xl py-2 text-[20px] bg-darkBlue hover:bg-blue-600 ${classnames}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
